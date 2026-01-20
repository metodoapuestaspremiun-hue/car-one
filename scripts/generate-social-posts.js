const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('❌ Error: Supabase credentials not found in .env');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Script for generating social media posts from blog articles.
 */

const HTML_FILE_PATH = process.argv[2];
const SHOULD_SYNC = process.argv.includes('--sync');
const REFERENCE_DIR = path.join(__dirname, '../public/Blog/Documentaciòn para post Facebook e Instagram');
const HOOKS_FILE = path.join(REFERENCE_DIR, '20 hooks');
const NEURO_FILE = path.join(REFERENCE_DIR, 'Neuroventas');

if (!HTML_FILE_PATH || !fs.existsSync(HTML_FILE_PATH)) {
    console.error('❌ Error: Por favor proporciona una ruta válida a un archivo HTML.');
    console.log('Uso: node scripts/generate-social-posts.js public/Blog/tu-articulo.html [--sync]');
    process.exit(1);
}

function slugify(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-0\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

async function run() {
    let htmlContent = fs.readFileSync(HTML_FILE_PATH, 'utf8');
    const hooksContent = fs.readFileSync(HOOKS_FILE, 'utf8');
    const neuroContent = fs.readFileSync(NEURO_FILE, 'utf8');

    // 1. Extract H2s
    const h2Regex = /<h2([^>]*)>(.*?)<\/h2>/gi;
    let match;
    const h2s = [];

    while ((match = h2Regex.exec(htmlContent)) !== null) {
        h2s.push({
            fullTag: match[0],
            attributes: match[1],
            text: match[2].replace(/<[^>]*>?/gm, '').trim()
        });
    }

    if (h2s.length === 0) {
        console.error('❌ Error: No se encontraron títulos H2 en el artículo.');
        process.exit(1);
    }

    // 2. Add IDs to H2s in the content
    const selectedH2s = h2s.slice(0, 2);
    selectedH2s.forEach((h2, index) => {
        const slug = slugify(h2.text);
        const hasId = /id=["'](.*?)["']/i.test(h2.attributes);

        if (!hasId) {
            const newTag = `<h2 id="${slug}"${h2.attributes}>${h2.text}</h2>`;
            htmlContent = htmlContent.replace(h2.fullTag, newTag);
            selectedH2s[index].slug = slug;
        } else {
            const idMatch = h2.attributes.match(/id=["'](.*?)["']/i);
            selectedH2s[index].slug = idMatch ? idMatch[1] : slug;
        }
    });

    // Extract only the inner content (div.post-content) for Supabase (if sync enabled)
    const contentMatch = htmlContent.match(/<div class="post-content">([\s\S]*?)<\/div>/i);
    const innerContent = contentMatch ? contentMatch[1].trim() : htmlContent;

    // Determine Slug for DB lookup
    const ogUrlMatch = htmlContent.match(/<meta property="og:url" content="(.*?)"/i);
    let fullUrl = ogUrlMatch ? ogUrlMatch[1] : "";
    let slug = fullUrl ? fullUrl.split('/').pop() : slugify(path.basename(HTML_FILE_PATH, '.html'));

    // 3. Optional Supabase Sync
    if (SHOULD_SYNC) {
        console.log(`\n🔄 Sincronizando con Supabase (slug: ${slug})...`);
        const { error: dbError } = await supabase
            .from('blog_posts')
            .update({ content: innerContent })
            .eq('slug', slug);

        if (dbError) {
            console.error(`❌ Error actualizando base de datos: ${dbError.message}`);
        } else {
            console.log(`✅ Base de datos actualizada correctamente.`);
        }
    } else {
        console.log(`\nℹ️ Modo Local: El archivo HTML se ha actualizado locally, pero NO se ha sincronizado con la base de datos (usa --sync para hacerlo).`);
    }

    // Save modified local HTML
    fs.writeFileSync(HTML_FILE_PATH, htmlContent, 'utf8');
    console.log(`✅ Archivo local actualizado: ${path.basename(HTML_FILE_PATH)}`);

    const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/i);
    const pageTitle = titleMatch ? titleMatch[1].split('|')[0].trim() : slug;
    const baseUrl = fullUrl || ("https://mecanicaautomotrizloja.com/blog/" + slug);

    // Generate absolute local link for verification
    const absoluteLocalPath = path.resolve(HTML_FILE_PATH);
    const localFileLink = `file:///${absoluteLocalPath.replace(/\\/g, '/')}`;

    console.log('\n==================================================');
    console.log('🚀 GENERACIÓN DE POSTS FINALIZADA');
    console.log('==================================================\n');

    // Simple Template-based generation logic (simulating the work)
    const hooks = [
        "¿Sabías esto sobre {topic}?",
        "Muchos ignoran {topic}... hasta que es tarde.",
        "Esto es algo que nadie te dice sobre {topic}.",
        "¿Cansado de lidiar con {topic}? Mira esto.",
        "La forma más rápida de entender {topic}."
    ];

    selectedH2s.forEach((h2, i) => {
        const cleanBaseUrl = baseUrl.replace(/\/$/, '');
        const prodLink = `${cleanBaseUrl}#${h2.slug}`;
        const localTestLink = `${localFileLink}#${h2.slug}`;

        // Pick a hook (deterministic for the demo)
        const hookA = hooks[i % hooks.length].replace('{topic}', h2.text.toLowerCase());
        const hookB = hooks[(i + 1) % hooks.length].replace('{topic}', h2.text.toLowerCase());

        // Generate Post A (Max 100)
        let postA = `${hookA} Te explico qué hacer aquí 👉 ${prodLink}`;
        if (postA.length > 100) postA = postA.substring(0, 97) + "...";

        // Generate Post B (Max 200)
        let postB = `${hookB} No permitas que un pequeño problema se convierta en una reparación costosa. Descubre la verdad aquí 👉 ${prodLink}`;
        if (postB.length > 200) postB = postB.substring(0, 197) + "...";

        console.log(`--- BLOQUE ${i + 1}: ${h2.text} ---`);
        console.log(`H2 utilizado: ${h2.text}`);
        console.log(`Link Producción: ${prodLink}`);
        console.log(`Link Local (Para probar scroll): ${localTestLink}`);
        console.log(`\nPost A (100 caracteres):`);
        console.log(`${postA}`);
        console.log(`\nPost B (200 caracteres):`);
        console.log(`${postB}`);
        console.log('--------------------------------------------------\n');
    });
}

run().catch(console.error);
