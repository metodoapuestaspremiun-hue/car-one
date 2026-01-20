"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import {
  Plus,
  LayoutList,
  Edit,
  Trash2,
  Eye,
  LogOut,
  Calendar,
  Share2,
  Download,
  Check,
  Copy,
  Tag,
  Phone,
  ArrowLeft,
  User,
  Clock,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Sparkles,
  RefreshCw
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { injectAnchorIds, generateSocialCopy, slugify } from "./social-utils";

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface BlogPost {
  id?: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
  status: "published" | "draft";
  meta_description?: string;
  focus_keyword?: string;
  tags?: string[];
  image_alt?: string;
  published_date?: string;
  date?: string;
  featured?: boolean;
}

export default function AdminPanel() {
  const router = useRouter();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [activeTab, setActiveTab] = useState("list");
  const [isEditing, setIsEditing] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [tagsInput, setTagsInput] = useState("");
  const [copiedText, setCopiedText] = useState("");
  const [uploadProgress, setUploadProgress] = useState(false);

  const [currentPost, setCurrentPost] = useState<BlogPost>({
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
    published_date: new Date().toISOString().split("T")[0],
    featured: false,
  });

  useEffect(() => {
    const auth = localStorage.getItem("admin_auth");
    if (auth === "true") {
      setIsAuthorized(true);
      loadPosts();
    } else {
      router.push("/admin/login");
    }
  }, [router]);

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
      return data || [];
    } catch (error) {
      console.error("Error loading posts:", error);
      return [];
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    router.push("/admin/login");
  };

  const handleImageUpload = async () => {
    if (!imageFile) return currentPost.image;
    setUploadProgress(true);
    // Simulation: In a real app we'd use supabase storage
    const fakeUrl = `/images/${imageFile.name}`;
    setUploadProgress(false);
    return fakeUrl;
  };

  const handleSavePost = async () => {
    try {
      if (!currentPost.title || !currentPost.content || !currentPost.category) {
        alert("Por favor completa los campos obligatorios (Título, Contenido, Categoría)");
        return;
      }

      setUploadProgress(true);

      // 1. Inyectar anclas automáticamente
      const { modifiedHtml } = injectAnchorIds(currentPost.content);

      // 2. Subir imagen si aplica
      const imageUrl = await handleImageUpload();

      const postToSave = {
        ...currentPost,
        content: modifiedHtml,
        image: imageUrl,
        slug: currentPost.slug || slugify(currentPost.title),
        tags: tagsInput.split(",").map(t => t.trim()).filter(t => t),
        date: new Date().toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      };

      const apiUrl = "/api/blog";
      const method = isEditing && currentPost.id ? "PUT" : "POST";
      const body = isEditing ? { ...postToSave, id: currentPost.id } : postToSave;

      const response = await fetch(apiUrl, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!response.ok) throw new Error("Error al guardar el artículo");

      setUploadProgress(false);
      alert("🎉 ¡Post guardado y anclajes generados automáticamente!");
      await loadPosts();
      setActiveTab("social");
      handleNewPost();
    } catch (error) {
      console.error("Error saving post:", error);
      setUploadProgress(false);
      alert("Error al guardar el artículo");
    }
  };

  const handleEditPost = (post: BlogPost) => {
    setCurrentPost(post);
    setTagsInput(post.tags?.join(", ") || "");
    setIsEditing(true);
    setActiveTab("create");
  };

  const handleNewPost = () => {
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
      published_date: new Date().toISOString().split("T")[0],
      featured: false,
    });
    setTagsInput("");
    setIsEditing(false);
    setActiveTab("create");
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(""), 2000);
  };

  if (!isAuthorized) return null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-black p-2 rounded-xl">
              <Sparkles className="text-[#00FF00] w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-black text-gray-900 leading-none">CAR ONE</h1>
              <p className="text-xs text-gray-500 font-bold tracking-widest uppercase">Admin CMS v2.0</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={handleNewPost} className="bg-[#00CC00] hover:bg-[#00AA00] text-black font-bold px-6 rounded-xl shadow-lg shadow-green-200 transition-all hover:scale-105">
              <Plus className="w-5 h-5 mr-2" />
              Nuevo Artículo
            </Button>
            <Button onClick={handleLogout} variant="ghost" className="text-gray-400 hover:text-red-500">
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 flex-grow">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <div className="flex items-center justify-between">
            <TabsList className="bg-white border border-gray-200 shadow-sm p-1 rounded-2xl h-14">
              <TabsTrigger value="list" className="rounded-xl px-8 data-[state=active]:bg-black data-[state=active]:text-white font-bold transition-all">
                <LayoutList className="w-4 h-4 mr-2" />
                Artículos
              </TabsTrigger>
              <TabsTrigger value="social" className="rounded-xl px-8 data-[state=active]:bg-black data-[state=active]:text-white font-bold transition-all">
                <Share2 className="w-4 h-4 mr-2 text-[#00CC00]" />
                Biblioteca Social
              </TabsTrigger>
              {activeTab === "create" && (
                <TabsTrigger value="create" className="rounded-xl px-8 data-[state=active]:bg-black data-[state=active]:text-white font-bold transition-all">
                  {isEditing ? "Editando Artículo" : "Creando Artículo"}
                </TabsTrigger>
              )}
            </TabsList>

            <div className="hidden md:flex items-center gap-6 bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex flex-col border-r border-gray-100 pr-6">
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">Total Posts</span>
                <span className="text-xl font-black">{posts.length}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-gray-400 tracking-tighter">Publicados</span>
                <span className="text-xl font-black text-[#00CC00]">{posts.filter(p => p.status === 'published').length}</span>
              </div>
            </div>
          </div>

          <TabsContent value="list" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card key={post.id} className="group overflow-hidden rounded-3xl border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
                  <div className="relative h-48 overflow-hidden">
                    <img src={post.image || "/placeholder.jpg"} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${post.status === 'published' ? 'bg-[#00CC00]' : 'bg-gray-400'} text-black font-black px-3 py-1 rounded-lg border-none`}>
                        {post.status === 'published' ? 'PÚBLICO' : 'BORRADOR'}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <div className="flex gap-2 w-full">
                        <Button onClick={() => handleEditPost(post)} className="flex-1 bg-white hover:bg-gray-100 text-black font-bold rounded-xl h-10">
                          <Edit className="w-4 h-4 mr-2" /> Editar
                        </Button>
                        <Button onClick={() => window.open(`/blog/${post.slug}`, '_blank')} className="w-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-xl h-10">
                          <Eye className="w-4 h-4 text-white" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">
                      <Calendar className="w-3 h-3" /> {post.date}
                      <span className="text-gray-200">|</span>
                      <Tag className="w-3 h-3" /> {post.category}
                    </div>
                    <h3 className="text-lg font-black text-gray-900 line-clamp-2 leading-tight mb-2 group-hover:text-[#00CC00] transition-colors">{post.title}</h3>
                    <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                    <div className="flex justify-end mt-4 pt-4 border-t border-gray-50">
                      <Button variant="ghost" size="sm" onClick={() => {
                        if (post.id) {
                          if (confirm("¿Eliminar este artículo?")) {
                            supabase.from('blog_posts').delete().eq('id', post.id).then(() => loadPosts());
                          }
                        }
                      }} className="text-red-300 hover:text-red-500 hover:bg-red-50 p-2 h-8">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="create" className="mt-0">
            <div className="max-w-4xl mx-auto">
              <Card className="rounded-[40px] border-none shadow-2xl overflow-hidden bg-white">
                <CardHeader className="p-10 pb-6 border-b border-gray-50 bg-gray-50/30">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center">
                      {isEditing ? <Edit className="text-white w-6 h-6" /> : <Plus className="text-white w-6 h-6" />}
                    </div>
                    <div>
                      <CardTitle className="text-3xl font-black">{isEditing ? "Editar Artículo" : "Nuevo Artículo"}</CardTitle>
                      <p className="text-gray-500 font-medium">Define el contenido principal del blog.</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-10 space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-sm font-black text-gray-400 uppercase tracking-wider ml-1">Título</label>
                      <Input value={currentPost.title} onChange={e => setCurrentPost({ ...currentPost, title: e.target.value })} className="h-14 rounded-2xl border-2 border-gray-100 focus:border-black transition-all text-lg font-bold" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-gray-400 uppercase tracking-wider ml-1">Categoría</label>
                      <Select value={currentPost.category} onValueChange={v => setCurrentPost({ ...currentPost, category: v })}>
                        <SelectTrigger className="h-14 rounded-2xl border-2 border-gray-100 font-bold">
                          <SelectValue placeholder="Seleccionar..." />
                        </SelectTrigger>
                        <SelectContent className="rounded-2xl border-2">
                          <SelectItem value="Mantenimiento">Mantenimiento</SelectItem>
                          <SelectItem value="Seguridad">Seguridad</SelectItem>
                          <SelectItem value="Tips">Tips Automotrices</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-black text-gray-400 uppercase tracking-wider ml-1">Resumen Persuasivo</label>
                    <Textarea value={currentPost.excerpt} onChange={e => setCurrentPost({ ...currentPost, excerpt: e.target.value })} className="rounded-2xl border-2 border-gray-100 min-h-[100px] font-medium p-4 text-gray-600" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-sm font-black text-gray-400 uppercase tracking-wider ml-1">Cuerpo del Artículo (Escribe o Pega)</label>
                      <Badge variant="outline" className="text-[10px] uppercase font-black text-[#00CC00] border-[#00CC00]">Anclas Automáticas ON</Badge>
                    </div>
                    <Textarea value={currentPost.content} onChange={e => setCurrentPost({ ...currentPost, content: e.target.value })} className="rounded-[30px] border-2 border-gray-100 min-h-[500px] p-8 font-medium text-lg text-gray-700 leading-relaxed shadow-inner" />
                  </div>

                  <div className="grid md:grid-cols-3 gap-8 pt-6 border-t border-gray-50">
                    <div className="space-y-2">
                      <label className="text-sm font-black text-gray-400 uppercase tracking-wider ml-1">Imagen (Archivo)</label>
                      <Input type="file" onChange={e => e.target.files && setImageFile(e.target.files[0])} className="rounded-xl border-2 h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-gray-400 uppercase tracking-wider ml-1">Estado</label>
                      <Select value={currentPost.status} onValueChange={(v: any) => setCurrentPost({ ...currentPost, status: v })}>
                        <SelectTrigger className="rounded-xl border-2 h-12 font-bold">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-2">
                          <SelectItem value="published">🚀 Publicar</SelectItem>
                          <SelectItem value="draft">📝 Borrador</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-black text-gray-400 uppercase tracking-wider ml-1">Slug URL</label>
                      <Input value={currentPost.slug} onChange={e => setCurrentPost({ ...currentPost, slug: e.target.value })} placeholder="url-del-post" className="rounded-xl border-2 h-12 font-mono" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-10 pt-0 flex justify-end gap-4">
                  <Button variant="ghost" onClick={() => setActiveTab("list")} className="font-bold px-8 h-14 rounded-2xl">Cancelar</Button>
                  <Button onClick={handleSavePost} disabled={uploadProgress} className="bg-black hover:bg-gray-800 text-white font-black px-12 h-14 rounded-2xl text-lg shadow-2xl transition-all transform hover:scale-105 active:scale-95">
                    {uploadProgress ? <><RefreshCw className="w-5 h-5 animate-spin mr-2" /> GUARDANDO...</> : "GUARDAR Y GENERAR SOCIAL"}
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="social" className="mt-0">
            <div className="space-y-10">
              <div className="bg-black rounded-[40px] p-12 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="relative z-10 max-w-xl text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-[#00FF00]/20 text-[#00FF00] px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4">
                    <TrendingUp className="w-3 h-3" /> Estrategia Neuroventas
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight">Biblioteca Social</h2>
                  <p className="text-gray-400 text-lg font-medium">Contenido listo para FB/IG con redirección inteligente a secciones.</p>
                </div>
                <div className="relative z-10 hidden lg:block">
                  <div className="w-48 h-48 bg-white/5 rounded-[40px] backdrop-blur-3xl flex items-center justify-center p-8 border border-white/10">
                    <Share2 className="w-full h-full text-[#00FF00] stroke-[1px]" />
                  </div>
                </div>
              </div>

              <div className="grid gap-12">
                {posts.filter(p => p.status === 'published').map((post) => {
                  const { anchors } = injectAnchorIds(post.content);
                  const socialAssets = generateSocialCopy(post.title, post.excerpt, anchors, post.slug);

                  if (anchors.length === 0) return null;

                  return (
                    <div key={post.id} className="space-y-6">
                      <div className="flex items-center gap-4 ml-2">
                        <div className="w-1.5 h-10 bg-[#00CC00] rounded-full" />
                        <div>
                          <h3 className="text-2xl font-black text-gray-900 leading-none">{post.title}</h3>
                          <p className="text-sm text-gray-400 font-bold font-mono">mecanicaautomotrizloja.com/blog/{post.slug}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {socialAssets.map((asset, aIdx) => (
                          <Card key={aIdx} className="rounded-[32px] border-none shadow-sm hover:shadow-2xl transition-all duration-500 bg-white group overflow-hidden">
                            <CardHeader className="pb-4 flex flex-row items-center justify-between space-y-0">
                              <div className="bg-gray-50 px-3 py-1 rounded-lg text-[10px] font-black text-gray-400 border border-gray-100 flex items-center gap-2">
                                <TrendingUp className="w-3 h-3 text-[#00CC00]" /> SECCIÓN: {asset.section.substring(0, 20)}...
                              </div>
                              <Button variant="ghost" size="sm" onClick={() => window.open(asset.link, '_blank')} className="h-8 w-8 p-0 opacity-0 group-hover:opacity-100 rounded-lg">
                                <ExternalLink className="w-3 h-3 text-blue-500" />
                              </Button>
                            </CardHeader>
                            <CardContent className="space-y-6">
                              <div className="space-y-3">
                                <div className="p-5 bg-gray-50 rounded-2xl border border-gray-100 text-[13px] font-medium leading-relaxed text-gray-600 relative overflow-hidden">
                                  {asset.postB}
                                  <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-gray-50 to-transparent" />
                                </div>
                                <Button
                                  onClick={() => copyToClipboard(asset.postB, `copy-${post.id}-${aIdx}`)}
                                  className="w-full bg-black hover:bg-gray-800 text-white font-black rounded-xl h-11 flex items-center justify-center gap-2"
                                >
                                  {copiedText === `copy-${post.id}-${aIdx}` ? <Check className="w-4 h-4 text-[#00FF00]" /> : <><Copy className="w-4 h-4" /> Copiar Post</>}
                                </Button>
                              </div>

                              <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100/50">
                                <p className="text-[10px] font-black text-blue-800 uppercase tracking-tighter mb-2">Enlace de Sección</p>
                                <p className="text-[11px] font-bold text-blue-600 break-all leading-tight italic">{asset.link}</p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
