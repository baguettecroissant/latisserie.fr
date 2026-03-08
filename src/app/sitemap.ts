import { MetadataRoute } from 'next'
import { articles } from '@/data/articles'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://latisserie.fr'

    // Routes statiques
    const routes = [
        '',
        '/a-propos',
        '/blog',
        '/contact',
        '/outils/calculateur-chaine-trame',
        '/mentions-legales',
        '/politique-de-confidentialite',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Routes dynamiques (Articles de blog)
    const blogRoutes = articles.map((article) => ({
        url: `${baseUrl}/blog/${article.slug}`,
        lastModified: article.publishedAt,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    return [...routes, ...blogRoutes]
}
