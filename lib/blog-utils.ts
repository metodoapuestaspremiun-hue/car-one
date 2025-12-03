export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 60); // Limit length for URLs
}

export function getPostUrl(title: string): string {
  const slug = generateSlug(title);
  return `/blog/${encodeURIComponent(slug)}`;
}
