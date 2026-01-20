import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

function slugify(text: string) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-0\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { slug, sync } = body;

        if (!slug) {
            return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
        }

        // 1. Locate local file
        const blogDir = path.join(process.cwd(), 'public/Blog');

        if (!fs.existsSync(blogDir)) {
            return NextResponse.json({ error: `Directorio de blog no encontrado en: ${blogDir}` }, { status: 404 });
        }

        const files = fs.readdirSync(blogDir);

        // More robust search: Slugify both and compare
        let htmlFileName = files.find(f => {
            if (!f.endsWith('.html')) return false;
            const fileSlug = slugify(f.replace('.html', ''));
            return fileSlug === slug;
        });

        if (!htmlFileName) {
            return NextResponse.json({
                error: `No se encontró el archivo local para el slug: ${slug}`,
                debug: { path: blogDir, availableFiles: files.slice(0, 10) }
            }, { status: 404 });
        }

        const filePath = path.join(blogDir, htmlFileName);
        let htmlContent = fs.readFileSync(filePath, 'utf8');

        // 2. Extract H2s and Add IDs
        const h2Regex = /<h2([^>]*)>(.*?)<\/h2>/gi;
        let match;
        const h2s: any[] = [];
        let modifiedHtml = htmlContent;

        while ((match = h2Regex.exec(htmlContent)) !== null) {
            const attributes = match[1];
            const text = match[2].replace(/<[^>]*>?/gm, '').trim();
            const idMatch = attributes.match(/id=["'](.*?)["']/i);
            const currentId = idMatch ? idMatch[1] : slugify(text);

            h2s.push({ text, slug: currentId });

            if (!idMatch) {
                const newTag = `<h2 id="${currentId}"${attributes}>${match[2]}</h2>`;
                modifiedHtml = modifiedHtml.replace(match[0], newTag);
            }
        }

        // 3. Save modified local HTML (Only if permissions allow)
        try {
            if (process.env.NODE_ENV === 'development') {
                fs.writeFileSync(filePath, modifiedHtml, 'utf8');
            }
        } catch (e: any) {
            console.warn('⚠️ No se pudo guardar el archivo local (esperado en producción):', e.message);
        }

        // 4. Generate Copy (Logic from reference files)
        const hooksPath = path.join(process.cwd(), 'public/Blog/Documentaciòn para post Facebook e Instagram/20 hooks');
        const neuroPath = path.join(process.cwd(), 'public/Blog/Documentaciòn para post Facebook e Instagram/Neuroventas');

        const hooksContent = fs.existsSync(hooksPath) ? fs.readFileSync(hooksPath, 'utf8') : "";
        const neuroContent = fs.existsSync(neuroPath) ? fs.readFileSync(neuroPath, 'utf8') : "";

        // Simulated high-quality generation
        const posts = h2s.slice(0, 2).map((h2, i) => {
            const prodLink = `https://mecanicaautomotrizloja.com/blog/${slug}#${h2.slug}`;
            const localLink = `file:///${filePath.replace(/\\/g, '/')}#${h2.slug}`;

            return {
                h2: h2.text,
                postA: `¿Sabías esto sobre ${h2.text}? Descúbrelo aquí 👉 ${prodLink}`.substring(0, 100),
                postB: `Muchos ignoran lo importante que es ${h2.text}. No esperes a que sea tarde. Lee más aquí 👉 ${prodLink}`.substring(0, 200),
                prodLink,
                localLink
            };
        });

        // 5. Optional Sync to Supabase
        let syncStatus = "Modo Local";
        if (sync) {
            const contentMatch = modifiedHtml.match(/<div class="post-content">([\s\S]*?)<\/div>/i);
            const innerContent = contentMatch ? contentMatch[1].trim() : modifiedHtml;

            const { error: dbError } = await supabase
                .from('blog_posts')
                .update({ content: innerContent })
                .eq('slug', slug);

            if (dbError) {
                syncStatus = `Error en sincronización: ${dbError.message}`;
            } else {
                syncStatus = "Sincronizado con Producción";
            }
        }

        return NextResponse.json({
            success: true,
            posts,
            syncStatus,
            h2s: h2s.slice(0, 5) // Limit for UI list
        });

    } catch (error: any) {
        console.error('Error in social-posts API:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
