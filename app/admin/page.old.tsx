"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Edit, Trash2, Eye, Calendar, User, Clock } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  author: string
  readTime: string
  image: string
  category: string
  status: "published" | "draft"
}

// Clave para guardar en localStorage
const STORAGE_KEY = 'carone_blog_posts';

// Datos iniciales por defecto
const DEFAULT_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "5 Señales de que Necesitas Cambiar las Pastillas de Freno",
    excerpt: "Conoce las principales señales que indican que es momento de cambiar las pastillas de freno...",
    content: "Contenido completo del artículo sobre pastillas de freno...",
    date: "15 de enero de 2024",
    author: "Car One Tecnicentro",
    readTime: "5 min",
    image: "/images/pastillas_frenos.jpg",
    category: "Seguridad",
    status: "published",
  },
  {
    id: 2,
    title: "¿Cada Cuánto Debo Cambiar el Aceite de mi Auto?",
    excerpt: "Descubre la frecuencia ideal para el cambio de aceite según el tipo de vehículo...",
    content: "Contenido completo del artículo sobre cambio de aceite...",
    date: "10 de enero de 2024",
    author: "Car One Tecnicentro",
    readTime: "4 min",
    image: "/images/cambio_aceite.jpg",
    category: "Mantenimiento",
    status: "published",
  },
];

// Función para cargar posts desde localStorage
const loadPosts = (): BlogPost[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    // Si no hay posts guardados, guardamos los predeterminados
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_POSTS));
    return DEFAULT_POSTS;
  } catch (error) {
    console.error('Error al cargar los posts:', error);
    return [];
  }
};

export default function AdminPanel() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  const [currentPost, setCurrentPost] = useState<Partial<BlogPost>>({
    title: "",
    excerpt: "",
    content: "",
    author: "Car One Tecnicentro",
    readTime: "",
    image: "",
    category: "",
    status: "draft",
  })

  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("list")

  const categories = ["Seguridad", "Mantenimiento", "Diagnóstico", "Consejos", "Suspensión", "Motor"]

  // Efecto para cargar los posts al montar el componente
  useEffect(() => {
    if (!isInitialized) {
      setPosts(loadPosts());
      setIsInitialized(true);
    } else {
      // Guardar posts en localStorage cada vez que cambien
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
      } catch (error) {
        console.error('Error al guardar los posts:', error);
      }
    }
  }, [posts, isInitialized]);

  const handleSavePost = () => {
    // Validar campos obligatorios
    if (!currentPost.title || !currentPost.excerpt || !currentPost.content || !currentPost.category) {
      alert('Por favor completa todos los campos obligatorios');
      return;
    }

    if (isEditing && currentPost.id) {
      // Actualizar post existente
      const updatedPosts = posts.map((post) => 
        post.id === currentPost.id ? { ...(currentPost as BlogPost) } : post
      );
      setPosts(updatedPosts);
    } else {
      // Crear nuevo post
      const newPost: BlogPost = {
        ...(currentPost as BlogPost),
        id: Date.now(),
        date: new Date().toLocaleDateString("es-ES", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        status: currentPost.status || 'draft',
      };
      setPosts([newPost, ...posts]);
    }

    setCurrentPost({
      title: "",
      excerpt: "",
      content: "",
      author: "Car One Tecnicentro",
      readTime: "",
      image: "",
      category: "",
      status: "draft",
    })
    setIsEditing(false)
    setActiveTab("list")
  }

  const handleEditPost = (post: BlogPost) => {
    setCurrentPost(post)
    setIsEditing(true)
    setActiveTab("create")
  }

  const handleDeletePost = (id: number) => {
    if (confirm('¿Estás seguro de que deseas eliminar este artículo? Esta acción no se puede deshacer.')) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  }

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
    })
    setIsEditing(false)
    setActiveTab("create")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Panel de Administración - Blog Automotriz Loja</h1>
              <p className="text-gray-600">Car One Tecnicentro - Gestión de blog automotriz Loja y creación de artículos para taller mecánico en Loja</p>
            </div>
            <Button onClick={handleNewPost} className="bg-[#00FF00] hover:bg-[#00CC00] text-black">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Artículo para Blog
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="list">Lista de Posts</TabsTrigger>
            <TabsTrigger value="create">{isEditing ? "Editar Post" : "Crear Post"}</TabsTrigger>
          </TabsList>

          {/* Posts List */}
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
                          <Badge
                            variant={post.status === "published" ? "default" : "secondary"}
                            className={post.status === "published" ? "bg-green-500" : "bg-yellow-500"}
                          >
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
                              <Clock className="w-4 h-4 mr-1" />
                              <span className="mr-4">{post.readTime}</span>
                              <Badge variant="outline">{post.category}</Badge>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                            <div className="flex items-center text-sm text-gray-500">
                              <User className="w-4 h-4 mr-1" />
                              <span>{post.author}</span>
                            </div>
                          </div>
                          <div className="flex space-x-2 ml-4">
                            <Button variant="outline" size="sm" onClick={() => window.open("/blog", "_blank")}>
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleEditPost(post)}>
                              <Edit className="w-4 h-4" />
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

          {/* Create/Edit Post */}
          <TabsContent value="create" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{isEditing ? "Editar Post" : "Crear Nuevo Post"}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Título del Post</label>
                      <Input
                        value={currentPost.title || ""}
                        onChange={(e) => setCurrentPost({ ...currentPost, title: e.target.value })}
                        placeholder="Título del artículo"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
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

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tiempo de Lectura</label>
                      <Input
                        value={currentPost.readTime || ""}
                        onChange={(e) => setCurrentPost({ ...currentPost, readTime: e.target.value })}
                        placeholder="ej: 5 min"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">URL de Imagen</label>
                      <Input
                        value={currentPost.image || ""}
                        onChange={(e) => setCurrentPost({ ...currentPost, image: e.target.value })}
                        placeholder="/images/ejemplo.jpg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
                      <Select
                        value={currentPost.status || "draft"}
                        onValueChange={(value: "published" | "draft") =>
                          setCurrentPost({ ...currentPost, status: value })
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
                        onChange={(e) => setCurrentPost({ ...currentPost, excerpt: e.target.value })}
                        placeholder="Breve descripción del artículo que se mostrará en la lista de artículos..."
                        rows={4}
                        className="min-h-[120px]"
                        required
                      />
                      <p className="mt-1 text-xs text-gray-500">
                        {currentPost.excerpt?.length || 0}/160 caracteres
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contenido Completo <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        value={currentPost.content || ""}
                        onChange={(e) => setCurrentPost({ ...currentPost, content: e.target.value })}
                        placeholder="Escribe aquí el contenido completo del artículo..."
                        rows={12}
                        className="min-h-[300px]"
                        required
                      />
                    </div>

                    {/* Vista previa del artículo */}
                    {currentPost.title && (
                      <div className="mt-8 border-t pt-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">Vista Previa del Artículo</h3>
                        <div className="bg-white p-6 rounded-lg border">
                          <h2 className="text-2xl font-bold mb-4">{currentPost.title}</h2>
                          <div className="flex items-center text-sm text-gray-500 mb-4">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="mr-4">
                              {new Date().toLocaleDateString("es-ES", {
                                day: "numeric",
                                month: "long",
                                year: "numeric"
                              })}
                            </span>
                            {currentPost.readTime && (
                              <>
                                <Clock className="w-4 h-4 mr-1" />
                                <span className="mr-4">{currentPost.readTime}</span>
                              </>
                            )}
                            {currentPost.category && (
                              <Badge variant="outline">{currentPost.category}</Badge>
                            )}
                          </div>
                          
                          {currentPost.image && (
                            <div className="mb-6">
                              <img 
                                src={currentPost.image} 
                                alt={currentPost.title || 'Imagen del artículo'}
                                className="w-full h-64 object-cover rounded-lg"
                              />
                            </div>
                          )}
                          
                          {currentPost.excerpt && (
                            <p className="text-lg text-gray-700 mb-4">{currentPost.excerpt}</p>
                          )}
                          
                          {currentPost.content && (
                            <div className="prose max-w-none">
                              {currentPost.content.split('\n\n').map((paragraph, i) => (
                                <p key={i} className="mb-4">{paragraph}</p>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex justify-end space-x-4 mt-6">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setActiveTab("list")
                      setIsEditing(false)
                    }}
                  >
                    Cancelar
                  </Button>
                  <Button 
                    onClick={handleSavePost} 
                    className="bg-[#00FF00] hover:bg-[#00CC00] text-black"
                  >
                    {isEditing ? "Actualizar Post" : "Crear Post"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
