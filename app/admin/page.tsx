"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Edit, Trash2, Eye, Calendar, Download } from "lucide-react"

interface BlogPost {
  id?: number;
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

// Simple slug generation function if the imported one fails
const generateSlug = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const STORAGE_KEY = 'carone_blog_posts';

const DEFAULT_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "5 Señales de que Necesitas Cambiar las Pastillas de Freno",
    slug: "5-senales-de-que-necesitas-cambiar-las-pastillas-de-freno",
    excerpt: "Conoce las principales señales que indican que es momento de cambiar las pastillas de freno...",
    content: "Contenido completo del artículo sobre pastillas de freno...",
    date: "15 de enero de 2024",
    author: "Car One Tecnicentro",
    readTime: "5 min",
    image: "/images/pastillas_frenos.jpg",
    category: "Seguridad",
    status: "published",
  }
];

const loadPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await fetch('/api/blog');
    if (!response.ok) {
      throw new Error('Error al cargar los posts');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al cargar los posts:', error);
    return [];
  }
};

export default function AdminPanel() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  // Define a type for the form state that makes id, date, and slug optional
  type PostFormData = {
    id?: number;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    readTime: string;
    image: string;
    category: string;
    status: 'published' | 'draft';
    slug?: string;
  };

  const [currentPost, setCurrentPost] = useState<PostFormData>({
    title: "",
    excerpt: "",
    content: "",
    author: "Car One Tecnicentro",
    readTime: "5 min",
    image: "/images/blog-default.jpg",
    category: "",
    status: "draft" as const,
    slug: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("list");
  const categories = ["Seguridad", "Mantenimiento", "Diagnóstico"];

  useEffect(() => {
    const fetchPosts = async () => {
      if (!isInitialized) {
        const loadedPosts = await loadPosts();
        setPosts(loadedPosts);
        setIsInitialized(true);
      }
    };
    
    fetchPosts();
  }, [isInitialized]);

  const generateStaticHtml = (post: BlogPost): string => {
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
        body { 
          font-family: Arial, sans-serif; 
          line-height: 1.6; 
          max-width: 800px; 
          margin: 0 auto; 
          padding: 20px; 
        }
        .post-header { margin-bottom: 2rem; }
        .post-title { font-size: 2rem; margin-bottom: 0.5rem; }
        .post-meta { color: #666; margin-bottom: 1rem; }
        .post-image { 
          width: 100%; 
          max-height: 400px;
          object-fit: cover;
          border-radius: 8px; 
          margin: 1rem 0; 
        }
        .post-content { 
          margin-top: 2rem;
          line-height: 1.8;
        }
        .post-content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 1rem 0;
        }
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
    
    return htmlContent;
  };

  const downloadHtmlFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSavePost = async () => {
    try {
      // Validar campos requeridos
      const requiredFields = ['title', 'excerpt', 'content', 'category'] as const;
      const missingFields = requiredFields.filter(field => !currentPost[field]);
      
      if (missingFields.length > 0) {
        throw new Error(`Por favor completa los campos obligatorios: ${missingFields.join(', ')}`);
      }

      // Generar slug si no existe
      const postToSave = {
        ...currentPost,
        slug: currentPost.slug || generateSlug(currentPost.title),
        date: new Date().toLocaleDateString('es-ES', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })
      };

      console.log('Preparando para guardar post:', {
        isEditing,
        postId: currentPost.id,
        postData: {
          ...postToSave,
          content: postToSave.content ? `${postToSave.content.substring(0, 50)}...` : 'empty'
        }
      });

      const apiUrl = '/api/blog';
      const method = isEditing && currentPost.id ? 'PUT' : 'POST';
      const body = isEditing 
        ? { ...postToSave, id: currentPost.id }
        : postToSave;

      console.log(`Enviando solicitud ${method} a ${apiUrl}`);

      const response = await fetch(apiUrl, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      let responseData;
      try {
        const responseText = await response.text();
        responseData = responseText ? JSON.parse(responseText) : {};
      } catch (jsonError) {
        console.error('Error al parsear la respuesta JSON:', jsonError);
        throw new Error('La respuesta del servidor no es un JSON válido');
      }

      if (!response.ok) {
        console.error('Error en la respuesta del servidor:', {
          status: response.status,
          statusText: response.statusText,
          response: responseData
        });

        const errorMessage = responseData?.error || 
                           responseData?.message || 
                           `Error ${response.status} al ${isEditing ? 'actualizar' : 'crear'} el post`;
        
        throw new Error(errorMessage);
      }

      console.log('Operación exitosa:', responseData);
      
      // Recargar la lista de posts
      const updatedPosts = await loadPosts();
      setPosts(updatedPosts);
      
      // Generate and download HTML if published
      if (postToSave.status === 'published') {
        const postWithId = {
          ...postToSave,
          id: responseData?.id || postToSave.id || Date.now()
        };
        const htmlContent = generateStaticHtml(postWithId as BlogPost);
        downloadHtmlFile(htmlContent, `${postToSave.slug}.html`);
      }
      
      // Show success message
      alert(`Post ${isEditing ? 'actualizado' : 'creado'} correctamente`);
      
      // Reset form
      setCurrentPost({
        title: "",
        excerpt: "",
        content: "",
        author: "Car One Tecnicentro",
        readTime: "5 min",
        image: "/images/blog-default.jpg",
        category: "",
        status: "draft",
        slug: ""
      });
      
      // Switch to list tab
      setActiveTab("list");
      
      return responseData;
    } catch (error) {
      console.error('Error al guardar el post:', error);
      alert('Ocurrió un error al guardar el post. Por favor, inténtalo de nuevo.');
    }
  };

  const handleEditPost = (post: BlogPost) => {
    setCurrentPost({
      ...post,
      // Ensure we have a slug when editing
      slug: post.slug || generateSlug(post.title)
    });
    setIsEditing(true);
    setActiveTab("create");
  };

  // Function to view the published post
  const handleViewPost = (post: BlogPost) => {
    const slug = post.slug || generateSlug(post.title);
    window.open(`/blog/${encodeURIComponent(slug)}`, '_blank');
  };
  
  const handleDownloadHtml = (post: BlogPost) => {
    const postWithId = {
      ...post,
      id: post.id || 0 // Proporcionamos un valor por defecto para el ID
    };
    const htmlContent = generateStaticHtml(postWithId);
    downloadHtmlFile(htmlContent, `${post.slug || generateSlug(post.title)}.html`);
  };

  const handleDeletePost = async (id: number | undefined) => {
    if (id === undefined) {
      console.error('No se puede eliminar el post: ID no definido');
      alert('Error: No se pudo identificar el post a eliminar');
      return;
    }
    
    if (confirm('¿Estás seguro de que deseas eliminar este artículo?')) {
      try {
        const response = await fetch(`/api/blog?id=${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          throw new Error('Error al eliminar el post');
        }

        // Reload posts after delete
        const updatedPosts = await loadPosts();
        setPosts(updatedPosts);
      } catch (error) {
        console.error('Error al eliminar el post:', error);
        alert('Ocurrió un error al eliminar el post. Por favor, inténtalo de nuevo.');
      }
    }
  };

  const handleNewPost = () => {
    setCurrentPost({
      title: "",
      excerpt: "",
      content: "",
      author: "Car One Tecnicentro",
      readTime: "",
      image: "",
      category: "",
      status: "draft",
    });
    setIsEditing(false);
    setActiveTab("create");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Panel de Administración</h1>
              <p className="text-gray-600">Car One Tecnicentro - Gestión de blog</p>
            </div>
            <Button onClick={handleNewPost} className="bg-[#00FF00] hover:bg-[#00CC00] text-black">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Artículo
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="list">Lista de Posts</TabsTrigger>
            <TabsTrigger value="create">{isEditing ? "Editar" : "Crear"} Post</TabsTrigger>
          </TabsList>

          <TabsContent value="list" className="mt-6">
            <div className="grid gap-6">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="md:flex">
                      <div className="md:w-48 h-32 md:h-auto relative">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge variant={post.status === "published" ? "default" : "secondary"}>
                            {post.status === "published" ? "Publicado" : "Borrador"}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center text-sm text-gray-500 mb-2">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span className="mr-4">{post.date}</span>
                              <Badge variant="outline">{post.category}</Badge>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                          </div>
                          <div className="flex space-x-2 ml-4">
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => handleEditPost(post)}
                              className="mr-2"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => handleViewPost(post)}
                              className="text-blue-600 hover:text-blue-700"
                              title="Vista previa"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              onClick={() => handleDownloadHtml(post)}
                              className="text-green-600 hover:text-green-700"
                              title="Descargar HTML"
                            >
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDeletePost(post.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="create" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{isEditing ? "Editar" : "Crear Nuevo"} Post</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Título</label>
                      <Input
                        value={currentPost.title || ""}
                        onChange={(e) => setCurrentPost({...currentPost, title: e.target.value})}
                        placeholder="Título del artículo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
                      <Select
                        value={currentPost.category || ""}
                        onValueChange={(value) => setCurrentPost({...currentPost, category: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar categoría" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">URL de Imagen</label>
                      <Input
                        value={currentPost.image || ""}
                        onChange={(e) => setCurrentPost({...currentPost, image: e.target.value})}
                        placeholder="/images/ejemplo.jpg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
                      <Select
                        value={currentPost.status}
                        onValueChange={(value) => 
                          setCurrentPost({...currentPost, status: value as "published" | "draft"})
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Borrador</SelectItem>
                          <SelectItem value="published">Publicado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Extracto <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        value={currentPost.excerpt || ""}
                        onChange={(e) => setCurrentPost({...currentPost, excerpt: e.target.value})}
                        placeholder="Resumen del artículo..."
                        rows={4}
                        className="min-h-[120px]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contenido <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        value={currentPost.content || ""}
                        onChange={(e) => setCurrentPost({...currentPost, content: e.target.value})}
                        placeholder="Contenido completo del artículo..."
                        rows={8}
                        className="min-h-[300px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab("list")}
                  >
                    Cancelar
                  </Button>
                  <Button 
                    onClick={handleSavePost}
                    className="bg-[#00FF00] hover:bg-[#00CC00] text-black"
                  >
                    {isEditing ? "Actualizar" : "Publicar"} Artículo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
