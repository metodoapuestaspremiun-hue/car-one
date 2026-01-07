"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Edit, Trash2, Eye, Calendar, Download, LogOut } from "lucide-react"

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
  // Campos SEO
  meta_description?: string;
  focus_keyword?: string;
  tags?: string[];
  image_alt?: string;
  published_date?: string;
  views_count?: number;
  featured?: boolean;
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
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("admin_authenticated");
    if (isAuthenticated !== "true") {
      router.push("/admin/login");
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_authenticated");
    router.push("/admin/login");
  };
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
    // Campos SEO
    meta_description?: string;
    focus_keyword?: string;
    tags?: string[];
    image_alt?: string;
    published_date?: string;
    featured?: boolean;
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
    meta_description: "",
    focus_keyword: "",
    tags: [],
    image_alt: "",
    published_date: new Date().toISOString().split('T')[0],
    featured: false,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("list");
  const [tagsInput, setTagsInput] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(false);
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

  const handleImageUpload = async (): Promise<string | null> => {
    if (!imageFile) return null;

    try {
      setUploadProgress(true);
      const formData = new FormData();
      formData.append('file', imageFile);

      const response = await fetch('/api/blog/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Error al subir la imagen');
      }

      const data = await response.json();
      setUploadProgress(false);
      setImageFile(null);
      return data.url;
    } catch (error) {
      setUploadProgress(false);
      console.error('Error uploading image:', error);
      alert('Error al subir la imagen. Por favor, inténtalo de nuevo.');
      return null;
    }
  };

  const handleSavePost = async () => {
    try {
      // Validar campos requeridos
      const requiredFields = ['title', 'excerpt', 'content', 'category'] as const;
      const missingFields = requiredFields.filter(field => !currentPost[field]);

      if (missingFields.length > 0) {
        throw new Error(`Por favor completa los campos obligatorios: ${missingFields.join(', ')}`);
      }

      // Upload image if a new one is selected
      let imageUrl = currentPost.image;
      if (imageFile) {
        const uploadedUrl = await handleImageUpload();
        if (uploadedUrl) {
          imageUrl = uploadedUrl;
        }
      }

      // Generar slug si no existe
      const postToSave = {
        ...currentPost,
        image: imageUrl,
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
        slug: "",
        meta_description: "",
        focus_keyword: "",
        tags: [],
        image_alt: "",
        published_date: new Date().toISOString().split('T')[0],
        featured: false,
      });
      setImageFile(null);
      setTagsInput("");

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
    setTagsInput(post.tags?.join(', ') || "");
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
      slug: "",
      meta_description: "",
      focus_keyword: "",
      tags: [],
      image_alt: "",
      published_date: new Date().toISOString().split('T')[0],
      featured: false,
    });
    setImageFile(null);
    setTagsInput("");
    setIsEditing(false);
    setActiveTab("create");
  };

  return isAuthorized ? (
    <div className="min-h-screen bg-gray-50 pt-24">
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Panel de Administración</h1>
              <p className="text-gray-600">Car One Tecnicentro - Gestión de blog</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={handleLogout} variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                <LogOut className="w-4 h-4 mr-2" />
                Cerrar Sesión
              </Button>
              <Button onClick={handleNewPost} className="bg-[#00FF00] hover:bg-[#00CC00] text-black">
                <Plus className="w-4 h-4 mr-2" />
                Nuevo Artículo
              </Button>
            </div>
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
                <p className="text-sm text-gray-500 mt-2">
                  Completa todos los campos para optimizar el SEO de tu artículo
                </p>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Información Básica */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">Información Básica</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Título <span className="text-red-500">*</span>
                      </label>
                      <Input
                        value={currentPost.title || ""}
                        onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                        placeholder="Ej: 5 Señales de que Necesitas Cambiar las Pastillas de Freno"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Categoría <span className="text-red-500">*</span>
                      </label>
                      <Select
                        value={currentPost.category || ""}
                        onValueChange={(value) => setCurrentPost({ ...currentPost, category: value })}
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

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Extracto / Resumen <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        value={currentPost.excerpt || ""}
                        onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                        placeholder="Resumen breve del artículo (se muestra en la lista de posts)"
                        rows={3}
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>
                </div>

                {/* SEO */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
                    🔍 Optimización SEO
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Descripción (SEO)
                      </label>
                      <Textarea
                        value={currentPost.meta_description || ""}
                        onChange={(e) => setCurrentPost({ ...currentPost, meta_description: e.target.value })}
                        placeholder="Descripción optimizada para motores de búsqueda (155-160 caracteres recomendados)"
                        rows={2}
                        maxLength={160}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {(currentPost.meta_description || "").length}/160 caracteres
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Palabra Clave Principal (SEO)
                      </label>
                      <Input
                        value={currentPost.focus_keyword || ""}
                        onChange={(e) => setCurrentPost({ ...currentPost, focus_keyword: e.target.value })}
                        placeholder="Ej: pastillas de freno"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tags (separados por coma)
                      </label>
                      <Input
                        value={tagsInput}
                        onChange={(e) => {
                          const value = e.target.value;
                          setTagsInput(value);
                          const tagsArray = value.split(',').map(tag => tag.trim()).filter(tag => tag);
                          setCurrentPost({ ...currentPost, tags: tagsArray });
                        }}
                        placeholder="Ej: mantenimiento, seguridad, frenos"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {currentPost.tags?.length || 0} tags
                      </p>
                    </div>
                  </div>
                </div>

                {/* Publicación */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
                    📅 Configuración de Publicación
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fecha de Publicación
                      </label>
                      <Input
                        type="date"
                        value={currentPost.published_date || ""}
                        onChange={(e) => setCurrentPost({ ...currentPost, published_date: e.target.value })}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Slug (URL personalizada) <span className="ml-2 text-xs text-blue-600">Funcional en producción</span>
                      </label>
                      <Input
                        value={currentPost.slug || ""}
                        onChange={(e) => setCurrentPost({ ...currentPost, slug: e.target.value })}
                        placeholder="Se genera automáticamente desde el título"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        URL: /blog/{currentPost.slug || generateSlug(currentPost.title || "tu-titulo")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Multimedia */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center">
                    🖼️ Imagen Principal
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subir Imagen desde tu dispositivo
                      </label>
                      <Input
                        type="file"
                        accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) setImageFile(file);
                        }}
                        className="cursor-pointer"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Formatos: JPG, PNG, WebP, GIF (Máx: 5MB)
                      </p>

                      {imageFile && (
                        <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded">
                          <p className="text-xs text-green-700">
                            ✓ Archivo seleccionado: {imageFile.name}
                          </p>
                        </div>
                      )}

                      {uploadProgress && (
                        <div className="mt-2 p-2 bg-blue-50 border border-blue-200 rounded">
                          <p className="text-xs text-blue-700">
                            Subiendo imagen...
                          </p>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        URL de Imagen (alternativa)
                      </label>
                      <Input
                        value={currentPost.image || ""}
                        onChange={(e) => setCurrentPost({ ...currentPost, image: e.target.value })}
                        placeholder="/images/ejemplo.jpg o URL completa"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Usa esto si prefieres una URL en lugar de subir
                      </p>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Texto Alternativo de la Imagen (SEO + Accesibilidad)
                      </label>
                      <Input
                        value={currentPost.image_alt || ""}
                        onChange={(e) => setCurrentPost({ ...currentPost, image_alt: e.target.value })}
                        placeholder="Ej: Mecánico revisando pastillas de freno en Car One Tecnicentro"
                      />
                    </div>

                    {/* Preview de imagen */}
                    {(currentPost.image || imageFile) && (
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Vista Previa
                        </label>
                        <div className="border rounded p-2">
                          <img
                            src={imageFile ? URL.createObjectURL(imageFile) : currentPost.image}
                            alt="Preview"
                            className="w-full max-w-md h-48 object-cover rounded"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Contenido */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">
                    ✍️ Contenido del Artículo
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contenido <span className="text-red-500">*</span>
                      <span className="ml-2 text-xs text-gray-500">(Usa HTML para formato)</span>
                    </label>
                    <Textarea
                      value={currentPost.content || ""}
                      onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                      placeholder={`<h2>Título de Sección</h2>
<p>Tu contenido aquí con <strong>negritas</strong> y formato HTML...</p>

<h3>Subtítulo</h3>
<ul>
  <li>Punto 1</li>
  <li>Punto 2</li>
</ul>`}
                      rows={12}
                      className="min-h-[400px] font-mono text-sm"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {(currentPost.content || "").length} caracteres |
                      {Math.ceil((currentPost.content || "").split(/\s+/).length / 200)} min lectura aprox.
                    </p>
                  </div>
                </div>

                {/* Configuración Adicional */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-900">
                    ⚙️ Configuración Adicional
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Autor
                      </label>
                      <Input
                        value={currentPost.author || ""}
                        onChange={(e) => setCurrentPost({ ...currentPost, author: e.target.value })}
                        placeholder="Nombre del autor"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tiempo de Lectura
                      </label>
                      <Input
                        value={currentPost.readTime || ""}
                        onChange={(e) => setCurrentPost({ ...currentPost, readTime: e.target.value })}
                        placeholder="Ej: 5 min"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estado
                      </label>
                      <Select
                        value={currentPost.status}
                        onValueChange={(value) =>
                          setCurrentPost({ ...currentPost, status: value as "published" | "draft" })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">📝 Borrador</SelectItem>
                          <SelectItem value="published">✅ Publicado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="md:col-span-3">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={currentPost.featured || false}
                          onChange={(e) => setCurrentPost({ ...currentPost, featured: e.target.checked })}
                          className="w-4 h-4 text-green-600"
                        />
                        <span className="text-sm font-medium text-gray-700">
                          ⭐ Marcar como artículo destacado
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Botones de Acción */}
                <div className="flex justify-end space-x-4 pt-4 border-t">
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab("list")}
                    disabled={uploadProgress}
                  >
                    Cancelar
                  </Button>
                  <Button
                    onClick={handleSavePost}
                    disabled={uploadProgress}
                    className="bg-[#00FF00] hover:bg-[#00CC00] text-black font-semibold"
                  >
                    {uploadProgress ? "Subiendo imagen..." : isEditing ? "Actualizar Artículo" : "Publicar Artículo"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  ) : null;
}
