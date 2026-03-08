import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/'], // Exemple de répertoires à ne pas indexer s'ils existent plus tard
        },
        sitemap: 'https://latisserie.fr/sitemap.xml',
    }
}
