import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { createClient } from '@supabase/supabase-js';
import { Calendar, User, Clock, ArrowLeft, Phone, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Inicializar cliente Supabase para Server Component
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

// Tipo para el post
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  read_time: string;
  image: string;
  image_alt?: string;
  category: string;
  status: 'published' | 'draft';
  meta_description?: string;
  focus_keyword?: string;
  tags?: string[];
  published_date?: string;
  created_at: string;
}

// Función para obtener el post
async function getPost(slug: string): Promise<BlogPost | null> {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !data) {
    console.error('Error fetching post:', error);
    return null;
  }

  return data as BlogPost;
}

// Generar Metadata para SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: 'Artículo no encontrado | Car One Tecnicentro',
    };
  }

  const title = post.title;
  const description = post.meta_description || post.excerpt;
  const url = `https://caronetecnicentro.com/blog/${post.slug}`; // Ajusta tu dominio real
  const images = post.image ? [{ url: post.image, width: 1200, height: 630, alt: post.image_alt || post.title }] : [];
  const tags = post.tags || [];

  return {
    title: `${title} | Blog Car One`,
    description: description,
    keywords: [post.focus_keyword, ...tags, post.category].filter(Boolean) as string[],
    authors: [{ name: post.author || 'Car One Tecnicentro' }],
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: 'Car One Tecnicentro',
      locale: 'es_EC',
      type: 'article',
      publishedTime: post.published_date || post.created_at,
      authors: [post.author || 'Car One Tecnicentro'],
      images: images,
      section: post.category,
      tags: tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: images,
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  // Formatear fecha
  const dateObj = new Date(post.published_date || post.created_at);
  const formattedDate = dateObj.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Schema.org JSON-LD para Artículo
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.image ? [post.image] : [],
    datePublished: post.published_date || post.created_at,
    dateModified: post.created_at,
    author: [{
      '@type': 'Person',
      name: post.author || 'Car One Tecnicentro',
    }],
    publisher: {
      '@type': 'Organization',
      name: 'Car One Tecnicentro',
      logo: {
        '@type': 'ImageObject',
        url: 'https://caronetecnicentro.com/logo.png'
      }
    },
    description: post.meta_description || post.excerpt,
    articleBody: post.content?.replace(/<[^>]*>?/gm, '')
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Inject Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back to Blog Link */}
      <div className="bg-gray-50 border-b sticky top-0 z-10 opacity-95">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-[#00CC00] transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al blog
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose prose-lg max-w-none prose-green">
          {/* Header */}
          <header className="not-prose mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="bg-[#00CC00]/10 text-[#00CC00] border-[#00CC00]/30 text-sm px-3 py-1">
                {post.category}
              </Badge>
              {post.tags && post.tags.map(tag => (
                <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full flex items-center">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center text-gray-600 text-sm gap-4 md:gap-6 border-b border-gray-100 pb-6">
              <div className="flex items-center bg-gray-50 px-3 py-1 rounded-full">
                <User className="w-4 h-4 mr-2 text-[#00CC00]" />
                <span className="font-medium">{post.author || 'Car One'}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                <time dateTime={post.published_date || post.created_at}>{formattedDate}</time>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-gray-400" />
                <span>{post.read_time || '5 min'} de lectura</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="relative w-full h-[300px] md:h-[500px] mb-10 rounded-2xl overflow-hidden shadow-xl not-prose">
              <Image
                src={post.image}
                alt={post.image_alt || post.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, 900px"
              />
            </div>
          )}

          {/* Body */}
          <div
            className="
              prose-headings:font-bold prose-headings:text-gray-900 prose-headings:scroll-mt-24
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-[#00CC00] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6
              prose-li:mb-2
              prose-img:rounded-xl prose-img:shadow-lg
              max-w-none
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl not-prose">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Te gustó este artículo?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              En Car One Tecnicentro estamos comprometidos con informarte y ayudarte a mantener tu vehículo en perfectas condiciones.
              Si tienes dudas o necesitas un servicio, ¡contáctanos hoy mismo!
            </p>
            <a
              href="https://wa.me/593979606963"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#00CC00] hover:bg-[#00AA00] text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              <span>Agendar Cita por WhatsApp</span>
            </a>
          </div>
        </article>
      </main>
    </div>
  );
}
