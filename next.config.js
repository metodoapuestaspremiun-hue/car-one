/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuración de imágenes
  images: {
    domains: ['images.unsplash.com', 'localhost'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Configuración de cabeceras de seguridad
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  // Configuración de redirecciones
  async rewrites() {
    return [
      // Redirigir rutas de API
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
      // Redirigir rutas de Next.js
      {
        source: '/_next/:path*',
        destination: '/_next/:path*',
      },
      // Redirigir archivos estáticos
      {
        source: '/static/:path*',
        destination: '/static/:path*',
      },
      // Redirigir todo lo demás a la página principal para el enrutamiento del lado del cliente
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ]
  },
  // Configuración de compresión
  compress: true,
  // Configuración de caché
  generateEtags: true,
  // Configuración de compilación
  swcMinify: true,
  // Configuración de exportación
  output: 'standalone',
}

module.exports = nextConfig
