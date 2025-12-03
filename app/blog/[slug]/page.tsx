"use client";

import { useEffect, useState } from 'react';
import { useParams, notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Calendar, User, Clock, ArrowLeft, Phone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface BlogPost {
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
  status: 'published' | 'draft';
}

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPost = async () => {
      // Reset states
      setLoading(true);
      setError(null);
      
      try {
        // Validate slug parameter
        if (!params?.slug) {
          throw new Error('Slug no proporcionado');
        }
        
        const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
        const decodedSlug = decodeURIComponent(slug);
        
        // Fetch the specific post by slug
        console.log('Fetching post with slug:', decodedSlug);
        const response = await fetch(`/api/blog?slug=${encodeURIComponent(decodedSlug)}`);
        
        console.log('Response status:', response.status);
        const responseText = await response.text();
        console.log('Response text:', responseText);
        
        if (!response.ok) {
          if (response.status === 404) {
            console.log('Post not found (404)');
            notFound();
            return;
          }
          throw new Error('Error al cargar el artículo');
        }
        
        const postData = JSON.parse(responseText);
        console.log('Parsed post data:', postData);
        
        if (!postData) {
          notFound();
          return;
        }
        
        setPost(postData);
      } catch (error) {
        console.error('Error loading post:', error);
        setError('No se pudo cargar el artículo. Por favor, inténtalo de nuevo más tarde.');
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [params]);

  const openWhatsApp = () => {
    window.open("https://wa.me/593979606963", "_blank");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00CC00]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-6 max-w-md">
          <div className="text-red-500 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Error al cargar el artículo</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Button 
            onClick={() => window.location.reload()}
            className="bg-[#00CC00] hover:bg-[#00AA00] text-white"
          >
            Reintentar
          </Button>
        </div>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Back to Blog Link */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <button 
            onClick={() => router.push('/blog')}
            className="flex items-center text-gray-600 hover:text-[#00CC00] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al blog
          </button>
        </div>
      </div>
      
      {/* Article Content */}
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        <article className="prose max-w-none">
          <Badge variant="outline" className="mb-4 bg-[#00CC00]/10 text-[#00CC00] border-[#00CC00]/30">
            {post.category}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          
          <div className="flex items-center text-gray-500 text-sm mb-8 space-x-4">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-1" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              <span>{post.readTime} de lectura</span>
            </div>
          </div>

          {post.image && (
            <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-md">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}

          <div 
            className="prose max-w-none text-gray-700 leading-relaxed" 
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-4">¿Necesitas ayuda con tu vehículo?</h3>
            <p className="text-gray-600 mb-6">
              En Car One Tecnicentro estamos listos para ayudarte con el mantenimiento y reparación de tu vehículo. 
              Contamos con técnicos certificados y equipos de última generación.
            </p>
            <Button 
              onClick={openWhatsApp}
              className="bg-[#00CC00] hover:bg-[#00AA00] text-white font-medium py-3 px-8 rounded-full flex items-center space-x-2 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Contactar por WhatsApp</span>
            </Button>
          </div>
        </article>
      </main>
    </div>
  );
}
