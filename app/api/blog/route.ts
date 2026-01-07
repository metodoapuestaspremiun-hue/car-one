import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL or Anon Key is missing');
}

const supabase = createClient(supabaseUrl!, supabaseKey!);

type BlogPost = {
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
  status: 'published' | 'draft';
  // Nuevos campos SEO
  meta_description?: string;
  focus_keyword?: string;
  tags?: string[];
  image_alt?: string;
  published_date?: string;
  views_count?: number;
  featured?: boolean;
};

// Generate a URL-friendly slug from a string
const generateSlug = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

// GET /api/blog - Get blog posts with optional filters
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const slug = searchParams.get('slug');

    let query = supabase.from('blog_posts').select('*');

    if (slug) {
      // Buscar por slug exacto
      const { data, error } = await query.eq('slug', slug).single();
      return error
        ? NextResponse.json({ error: 'Artículo no encontrado' }, { status: 404 })
        : NextResponse.json(data);
    }

    // Filtrar por estado si se proporciona
    if (status) {
      query = query.eq('status', status);
    }

    const { data, error } = await query;

    if (error) {
      if (error.code === 'PGRST116') { // No se encontró el artículo
        return NextResponse.json({ error: 'Artículo no encontrado' }, { status: 404 });
      }
      throw error;
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json(
      { error: 'Error al cargar los artículos del blog' },
      { status: 500 }
    );
  }
}

// POST /api/blog - Create a new blog post
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    const requiredFields = ['title', 'excerpt', 'content', 'category'] as const;
    const missingFields = requiredFields.filter(field => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Faltan campos obligatorios: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Create new post
    const newPost = {
      title: body.title,
      excerpt: body.excerpt,
      content: body.content,
      author: body.author || 'Car One Tecnicentro',
      read_time: body.readTime || '5 min',
      image: body.image || '/images/blog-default.jpg',
      image_alt: body.image_alt || body.title,
      category: body.category,
      status: body.status || 'draft',
      slug: body.slug || generateSlug(body.title),
      // Campos SEO
      meta_description: body.meta_description || body.excerpt,
      focus_keyword: body.focus_keyword || '',
      tags: body.tags || [],
      published_date: body.published_date || new Date().toISOString(),
      featured: body.featured || false,
      created_at: new Date().toISOString()
    };

    // Insert into Supabase
    const { data, error } = await supabase
      .from('blog_posts')
      .insert([newPost])
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { error: 'Error al crear el artículo' },
      { status: 500 }
    );
  }
}

// PUT /api/blog - Update an existing blog post
export async function PUT(request: Request) {
  try {
    console.log('PUT /api/blog - Request received');

    const body = await request.json();
    console.log('Request body:', JSON.stringify(body, null, 2));

    if (!body.id) {
      console.error('Missing ID in request');
      return NextResponse.json(
        { error: 'Se requiere el ID del artículo' },
        { status: 400 }
      );
    }

    // Validate required fields
    const requiredFields = ['title', 'excerpt', 'content', 'category'] as const;
    const missingFields = requiredFields.filter(field => !body[field]);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: `Faltan campos obligatorios: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // Prepare update data with only the fields we want to update
    const updateData: Record<string, any> = {
      title: String(body.title || ''),
      excerpt: String(body.excerpt || ''),
      content: String(body.content || ''),
      category: String(body.category || ''),
      status: body.status === 'published' ? 'published' : 'draft',
      slug: String(body.slug || generateSlug(body.title || '')),
      image: String(body.image || '/images/blog-default.jpg'),
      image_alt: String(body.image_alt || body.title || ''),
      // Optional fields with defaults
      author: String(body.author || 'Car One Tecnicentro'),
      read_time: String(body.readTime || '5 min'),
      // Campos SEO
      meta_description: String(body.meta_description || body.excerpt || ''),
      focus_keyword: String(body.focus_keyword || ''),
      tags: body.tags || [],
      published_date: body.published_date || new Date().toISOString(),
      featured: Boolean(body.featured)
    };

    // Check if updated_at column exists in the table
    try {
      const { data: columnExists } = await supabase.rpc('column_exists', {
        table_name: 'blog_posts',
        column_name: 'updated_at'
      });

      if (columnExists) {
        updateData.updated_at = new Date().toISOString();
      }
    } catch (e) {
      console.log('Could not check for updated_at column, proceeding without it');
    }

    console.log('Update data prepared:', JSON.stringify(updateData, null, 2));

    // First, check if the post exists
    const { data: existingPost, error: fetchError } = await supabase
      .from('blog_posts')
      .select('id')
      .eq('id', body.id)
      .single();

    if (fetchError || !existingPost) {
      console.error('Post not found or error fetching:', fetchError);
      return NextResponse.json(
        { error: 'El artículo no existe' },
        { status: 404 }
      );
    }

    // Update in Supabase
    const { data, error } = await supabase
      .from('blog_posts')
      .update(updateData)
      .eq('id', body.id)
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        {
          error: 'Error al actualizar el artículo en la base de datos',
          details: process.env.NODE_ENV === 'development' ? error.message : undefined
        },
        { status: 500 }
      );
    }

    console.log('Update successful, returning data:', data);
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error in PUT /api/blog:', {
      error: error.message,
      stack: error.stack,
      name: error.name
    });
    return NextResponse.json(
      {
        error: 'Error al actualizar el artículo',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// DELETE /api/blog - Delete a blog post
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Se requiere el ID del artículo' },
        { status: 400 }
      );
    }

    // Delete from Supabase
    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { error: 'Error al eliminar el artículo' },
      { status: 500 }
    );
  }
}
