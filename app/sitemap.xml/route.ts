import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://www.mecanicaautomotrizloja.com';
  
  const pages = [
    { path: '', priority: '1.0', changefreq: 'daily' },
    { path: 'servicios/almacen-repuestos-lubricantes', priority: '0.8', changefreq: 'monthly' },
    { path: 'servicios/autopartes-y-lubricantes', priority: '0.8', changefreq: 'monthly' },
    { path: 'servicios/baterias', priority: '0.8', changefreq: 'monthly' },
    { path: 'servicios/enderezada-pintura', priority: '0.8', changefreq: 'monthly' },
    { path: 'servicios/frenos', priority: '0.8', changefreq: 'monthly' },
    { path: 'servicios/gestion-de-flotas', priority: '0.8', changefreq: 'monthly' },
    { path: 'servicios/lubricantes', priority: '0.8', changefreq: 'monthly' },
    { path: 'servicios/mantenimiento-preventivo', priority: '0.8', changefreq: 'monthly' },
    { path: 'servicios/neumaticos', priority: '0.8', changefreq: 'monthly' },
    { path: 'servicios/sistema-aire-acondicionado', priority: '0.8', changefreq: 'monthly' },
    { path: 'servicios/sistema-de-direccion', priority: '0.8', changefreq: 'monthly' },
    { path: 'servicios/sistema-de-transmision', priority: '0.8', changefreq: 'monthly' },
    { path: 'servicios/suspension', priority: '0.8', changefreq: 'monthly' },
    { path: 'contacto', priority: '0.7', changefreq: 'yearly' },
    { path: 'blog', priority: '0.7', changefreq: 'weekly' },
  ];

  const urls = pages.map(page => `
  <url>
    <loc>${baseUrl}/${page.path}</loc>
    <priority>${page.priority}</priority>
    <changefreq>${page.changefreq}</changefreq>
  </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
} 