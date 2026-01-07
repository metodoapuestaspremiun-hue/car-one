"use client"

import { useState } from "react"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { BlogPostCard } from "@/components/BlogPostCard"

type BlogPost = {
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
    published_date?: string;
    created_at: string;
};

interface BlogListProps {
    initialPosts: BlogPost[];
}

export function BlogList({ initialPosts }: BlogListProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    // Filtrado
    const filteredPosts = initialPosts.filter(
        (post) =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Categorías dinámicas basadas en los posts disponibles
    const categories = [
        { name: "Seguridad", count: initialPosts.filter(p => p.category === "Seguridad").length },
        { name: "Mantenimiento", count: initialPosts.filter(p => p.category === "Mantenimiento").length },
        { name: "Diagnóstico", count: initialPosts.filter(p => p.category === "Diagnóstico").length },
        { name: "Consejos", count: initialPosts.filter(p => p.category === "Consejos").length },
    ].filter(cat => cat.count > 0);

    // Paginación
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const paginatedPosts = filteredPosts.slice(
        (currentPage - 1) * postsPerPage,
        currentPage * postsPerPage
    );

    const recentPosts = initialPosts.slice(0, 3);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    <div className="grid gap-8">
                        {paginatedPosts.length > 0 ? (
                            paginatedPosts.map((post) => (
                                <BlogPostCard key={post.id} post={post} />
                            ))
                        ) : (
                            <div className="text-center py-12">
                                <h3 className="text-xl font-semibold text-gray-700">
                                    {searchTerm
                                        ? 'No se encontraron artículos que coincidan con tu búsqueda.'
                                        : 'Aún no hay artículos publicados.'}
                                </h3>
                                {searchTerm && (
                                    <button
                                        onClick={() => setSearchTerm('')}
                                        className="mt-4 text-[#00CC00] hover:underline"
                                    >
                                        Limpiar búsqueda
                                    </button>
                                )}
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center gap-4 mt-8">
                                <button
                                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="p-2 rounded-full border border-gray-300 bg-white shadow-md hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                    aria-label="Anterior"
                                >
                                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                                </button>
                                <span className="font-semibold text-gray-700">
                                    Página {currentPage} de {totalPages}
                                </span>
                                <button
                                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="p-2 rounded-full border border-gray-300 bg-white shadow-md hover:bg-gray-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                    aria-label="Siguiente"
                                >
                                    <ChevronRight className="w-6 h-6 text-gray-700" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-8">
                    {/* Search */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Buscar</h3>
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="Buscar artículos..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="pl-10"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Categorías</h3>
                        <ul className="space-y-2">
                            {categories.map((category) => (
                                <li key={category.name}>
                                    <button
                                        onClick={() => {
                                            setSearchTerm(category.name);
                                            setCurrentPage(1);
                                        }}
                                        className="flex items-center justify-between w-full text-left py-2 px-3 rounded hover:bg-gray-100 transition-colors"
                                    >
                                        <span className="text-gray-700 hover:text-[#00FF00]">{category.name}</span>
                                        <span className="text-sm text-gray-500">({category.count})</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Recent Posts */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold mb-4 text-gray-900">Últimos Posts</h3>
                        <div className="space-y-4">
                            {recentPosts.map((post) => (
                                <BlogPostCard key={post.id} post={post} variant="compact" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
