import { MetadataRoute } from 'next'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

const BASE_URL = 'https://www.mecanicaautomotrizloja.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Rutas estáticas del sitio + Posts Legacy para proteger SEO
    const routes = [
        '',
        '/servicios/mantenimiento-preventivo',
        '/servicios/frenos',
        '/servicios/suspension',
        '/servicios/enderezada-pintura',
        '/servicios/neumaticos',
        '/servicios/baterias',
        '/servicios/lubricantes',
        '/servicios/autopartes-y-lubricantes',
        '/servicios/almacen-repuestos-lubricantes',
        '/servicios/sistema-aire-acondicionado',
        '/servicios/sistema-de-direccion',
        '/servicios/sistema-de-transmision',
        '/servicios/gestion-de-flotas',
        '/contacto',
        '/blog',
        // ⬇️ POSTS LEGACY: Mantenidos manualmente para asegurar SEO existente
        '/blog/alineacion-y-balanceo-urgente-en-loja-para-un-viaje-de-regreso-seguro',
        '/blog/problemas-con-tu-auto-en-loja-encuentra-la-solucion-rapida-en-carone',
        '/blog/escuchas-un-ruido-extrano-al-frenar-posibles-causas-y-soluciones-en-loja',
        '/blog/luz-de-check-engine-encendida-que-significa-y-que-hacer-si-te-pasa-en-loja',
        '/blog/sube-la-temperatura-de-tu-auto-5-pasos-a-seguir-si-tu-motor-se-recalienta-en-loja',
    ]

    const staticRoutes = routes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Fetch blogs dinámicos (Nuevos artículos)
    let blogRoutes: MetadataRoute.Sitemap = []

    try {
        const { data: posts } = await supabase
            .from('blog_posts')
            .select('slug, published_date, created_at')
            .eq('status', 'published')

        if (posts) {
            // Filtramos para no duplicar si ya están en la lista estática
            blogRoutes = posts
                .filter(post => !routes.includes(`/blog/${post.slug}`))
                .map((post) => ({
                    url: `${BASE_URL}/blog/${post.slug}`,
                    lastModified: new Date(post.published_date || post.created_at),
                    changeFrequency: 'weekly' as const,
                    priority: 0.7,
                }))
        }
    } catch (error) {
        console.error('Error generando sitemap para blogs:', error)
    }

    return [...staticRoutes, ...blogRoutes]
}
