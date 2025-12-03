import fs from 'fs';
import path from 'path';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
  status: "published" | "draft";
}

export async function generateStaticPost(post: BlogPost): Promise<string> {
  // Crear el directorio de salida si no existe
  const outputDir = path.join(process.cwd(), 'public', 'blog');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Plantilla HTML básica
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${post.title} | Car One</title>
    <meta name="description" content="${post.excerpt}">
    <meta name="author" content="${post.author}">
    <meta property="og:title" content="${post.title}">
    <meta property="og:description" content="${post.excerpt}">
    <meta property="og:image" content="${post.image}">
    <meta property="og:url" content="https://tucarro.com/blog/${post.slug}">
    <meta property="og:type" content="article">
    <link rel="stylesheet" href="/css/globals.css">
    <style>
      body { font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; }
      .post-header { margin-bottom: 2rem; }
      .post-title { font-size: 2rem; margin-bottom: 0.5rem; }
      .post-meta { color: #666; margin-bottom: 1rem; }
      .post-image { width: 100%; height: auto; border-radius: 8px; margin: 1rem 0; }
      .post-content { margin-top: 2rem; }
    </style>
  </head>
  <body>
    <article class="post">
      <header class="post-header">
        <h1 class="post-title">${post.title}</h1>
        <div class="post-meta">
          <span>Por ${post.author} • ${post.date} • ${post.readTime} de lectura</span>
        </div>
        ${post.image ? `<img src="${post.image}" alt="${post.title}" class="post-image">` : ''}
      </header>
      
      <div class="post-content">
        ${post.content}
      </div>
    </article>
  </body>
  </html>
  `;

  // Ruta del archivo de salida
  const outputPath = path.join(outputDir, `${post.slug}.html`);
  
  try {
    // Escribir el archivo
    fs.writeFileSync(outputPath, htmlContent, 'utf8');
    console.log(`Archivo estático generado: ${outputPath}`);
    return outputPath;
  } catch (error) {
    console.error('Error al generar el archivo estático:', error);
    throw error;
  }
}
