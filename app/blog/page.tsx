import { createClient } from "@supabase/supabase-js";
import { BlogList } from "./BlogList";
import { BlogLayout } from "@/components/BlogLayout";
import { Metadata } from "next";

// Inicializar cliente Supabase para Server Component
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const metadata: Metadata = {
  title: 'Blog | Car One Tecnicentro',
  description: 'Consejos de mantenimiento, guías de seguridad y noticias sobre el cuidado de tu vehículo en Loja.',
};

// Forzar renderizado dinámico para tener siempre posts frescos
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function BlogPage() {
  // Obtener posts directamente de la DB en el servidor
  const { data: posts, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .order('published_date', { ascending: false });

  if (error) {
    console.error('Error fetching posts:', error);
  }

  // Mapear campos si es necesario para asegurar compatibilidad con el tipo BlogPost
  const formattedPosts = posts?.map(post => ({
    ...post,
    date: new Date(post.published_date || post.created_at).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    readTime: post.read_time || post.readTime || '5 min', // Manejar ambos nombres de campo
  })) || [];

  return (
    <BlogLayout>
      <BlogList initialPosts={formattedPosts} />
    </BlogLayout>
  )
}
