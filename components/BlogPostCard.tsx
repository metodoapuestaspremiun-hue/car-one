import Link from 'next/link';
import { Calendar, Clock, User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface BlogPostCardProps {
  post: {
    id: number;
    title: string;
    slug: string;
    excerpt: string;
    date: string;
    author: string;
    readTime: string;
    image: string;
    category: string;
    status?: 'published' | 'draft';
  };
  variant?: 'default' | 'compact';
}

export function BlogPostCard({ post, variant = 'default' }: BlogPostCardProps) {
  const postUrl = `/blog/${encodeURIComponent(post.slug || post.title.toLowerCase().replace(/\s+/g, '-'))}`;
  
  if (variant === 'compact') {
    return (
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <Link href={postUrl} className="block">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={80}
              height={80}
              className="rounded-lg object-cover w-20 h-20"
            />
          </Link>
        </div>
        <div className="flex-1 min-w-0">
          <Link href={postUrl} className="block">
            <h4 className="text-base font-semibold text-gray-900 mb-1 line-clamp-2 hover:text-[#00FF00] transition-colors">
              {post.title}
            </h4>
            <p className="text-xs text-gray-500 line-clamp-2">{post.excerpt}</p>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
      {post.image && (
        <div className="relative h-48 w-full">
          <Link href={postUrl} className="block h-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center text-gray-500 text-sm mb-2 flex-wrap gap-2">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center ml-4">
            <Clock className="w-4 h-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
          <Badge variant="outline" className="ml-auto">
            {post.category}
          </Badge>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
          <Link href={postUrl} className="hover:text-[#00FF00] transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <User className="w-4 h-4 mr-1" />
            <span>{post.author}</span>
          </div>
          <Button asChild className="bg-[#00FF00] hover:bg-[#00CC00] text-black">
            <Link href={postUrl}>Leer más</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
