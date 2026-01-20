/**
 * Utility functions for anchor ID injection and social post generation.
 */

export function slugify(text: string): string {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
}

/**
 * Injects id attributes into <h2> tags if they don't have one.
 */
export function injectAnchorIds(html: string): { modifiedHtml: string, anchors: { text: string, slug: string }[] } {
    const h2Regex = /<h2([^>]*)>(.*?)<\/h2>/gi;
    const anchors: { text: string, slug: string }[] = [];

    const modifiedHtml = html.replace(h2Regex, (match, attributes, content) => {
        const text = content.replace(/<[^>]*>?/gm, '').trim();
        const idMatch = attributes.match(/id=["'](.*?)["']/i);
        const currentId = idMatch ? idMatch[1] : slugify(text);

        anchors.push({ text, slug: currentId });

        if (!idMatch) {
            return `<h2 id="${currentId}"${attributes}>${content}</h2>`;
        }
        return match;
    });

    return { modifiedHtml, anchors };
}

/**
 * Generates social media copies based on neuro-selling and hook rules.
 */
export function generateSocialCopy(title: string, excerpt: string, anchors: { text: string, slug: string }[], postSlug: string) {
    const baseUrl = "https://mecanicaautomotrizloja.com/blog";

    return anchors.slice(0, 3).map((anchor, idx) => {
        const prodLink = `${baseUrl}/${postSlug}#${anchor.slug}`;

        // Post A: Curiosidad / Problema
        const postA = `🤔 ¿Te has preguntado cómo influye ${anchor.text} en tu seguridad? \n\nNo dejes que un pequeño detalle se convierta en un gran gasto. Descubre la respuesta aquí 👉 ${prodLink}`;

        // Post B: Neuroventas / Beneficio
        const postB = `🔥 Muchos ignoran lo importante que es ${anchor.text}, hasta que es tarde. \n\nDale a tu vehículo el cuidado que merece y viaja con total tranquilidad. Lee más aquí 👉 ${prodLink}`;

        return {
            section: anchor.text,
            postA,
            postB,
            link: prodLink
        };
    });
}
