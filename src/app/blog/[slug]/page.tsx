import { getArticleBySlug, articles } from "@/data/articles";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar, User, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) return { title: 'Article introuvable' };

    return {
        title: `${article.title} - La Tisserie`,
        description: article.excerpt,
        openGraph: {
            title: article.title,
            description: article.excerpt,
            type: 'article',
            publishedTime: article.publishedAt,
            authors: [article.author],
            url: `https://latisserie.fr/blog/${article.slug}`,
            images: [
                {
                    url: article.coverImage,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.excerpt,
            images: [article.coverImage],
        },
    };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        image: [`https://latisserie.fr${article.coverImage}`],
        datePublished: article.publishedAt,
        dateModified: article.publishedAt,
        author: [{
            '@type': 'Person',
            name: article.author,
            url: 'https://latisserie.fr/a-propos'
        }],
        publisher: {
            '@type': 'Organization',
            name: 'La Tisserie',
            logo: {
                '@type': 'ImageObject',
                url: 'https://latisserie.fr/icon.png'
            }
        },
        description: article.excerpt
    };

    // Using react-markdown for robust content rendering instead of the custom parser.

    return (
        <article className="bg-brand-50 min-h-screen pb-32">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            {/* Immersive Header */}
            <header className="relative pt-24 pb-32 overflow-hidden bg-brand-950 text-white">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-600/30 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    <Link href="/blog" className="inline-flex items-center text-sm font-medium text-brand-200 hover:text-white mb-10 transition-colors group">
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Retour au blog
                    </Link>

                    <div className="flex items-center gap-3 text-xs font-bold text-accent-300 uppercase tracking-widest mb-8">
                        <span className="px-3 py-1 rounded-full border border-accent-400/30 bg-accent-400/10 backdrop-blur-sm">{article.category}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-serif mb-10 leading-[1.1] tracking-tight text-white relative z-10">
                        {article.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-8 text-sm font-medium border-t border-white/10 pt-8">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white text-brand-950 flex items-center justify-center font-serif text-lg shadow-lg">LT</div>
                            <span className="text-brand-100">{article.author}</span>
                        </div>
                        <div className="flex items-center gap-2 text-brand-300">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={article.publishedAt}>
                                {new Date(article.publishedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </time>
                        </div>
                        <div className="flex items-center gap-2 text-brand-300">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime} de lecture</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Reading Content */}
            <div className="container mx-auto px-4 max-w-3xl -mt-16 relative z-20">
                <main className="glass bg-white/95 rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl shadow-brand-900/10">
                    <div className="prose prose-lg prose-brand max-w-none">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                                h2: ({ node, ...props }) => <h2 className="text-3xl md:text-4xl font-bold font-serif text-brand-950 mt-16 mb-8 tracking-tight" {...props} />,
                                h3: ({ node, ...props }) => <h3 className="text-2xl font-bold font-serif text-brand-800 mt-10 mb-5" {...props} />,
                                p: ({ node, ...props }) => <p className="text-lg text-gray-700 leading-relaxed mb-6" {...props} />,
                                ul: ({ node, ...props }) => <ul className="space-y-4 my-8 list-none pl-0" {...props} />,
                                li: ({ node, children, ...props }) => (
                                    <li className="flex gap-4" {...props}>
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-100 text-accent-600 flex items-center justify-center text-sm font-bold mt-1">✓</span>
                                        <span className="text-gray-700 leading-relaxed">{children}</span>
                                    </li>
                                ),
                                blockquote: ({ node, children, ...props }) => (
                                    <blockquote className="relative my-12 overflow-hidden rounded-2xl glass-card bg-accent-50/50 p-8 sm:p-10 border-l-4 border-l-accent-500" {...props}>
                                        <div className="relative z-10 text-brand-900 text-lg font-medium italic leading-relaxed">
                                            {children}
                                        </div>
                                    </blockquote>
                                ),
                                img: ({ node, src, alt, ...props }) => {
                                    if (!src) return null;
                                    return (
                                        <figure className="my-12 relative rounded-3xl overflow-hidden shadow-2xl border border-brand-100 group">
                                            <div className="aspect-[16/9] md:aspect-[21/9] w-full relative bg-brand-50">
                                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                                <img src={src} alt={alt || ''} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out" {...props} />
                                            </div>
                                            {alt && <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-950/90 to-transparent p-6 pt-12 text-sm text-center text-brand-100 font-medium">{alt}</figcaption>}
                                        </figure>
                                    );
                                },
                                a: ({ node, ...props }) => <a className="text-accent-600 font-bold hover:underline hover:text-accent-700 transition-colors" {...props} />,
                                strong: ({ node, ...props }) => <strong className="font-bold text-brand-950" {...props} />
                            }}
                        >
                            {article.content}
                        </ReactMarkdown>
                    </div>

                    {/* CTA Affiliate Modern */}
                    <div className="mt-20 relative overflow-hidden rounded-[2rem] bg-brand-950 text-center p-12">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-900 to-brand-950"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <h4 className="text-3xl font-serif font-bold text-white mb-4">Prêt(e) à vous lancer ?</h4>
                            <p className="text-brand-200 mb-8 max-w-md mx-auto text-lg">
                                Découvrez notre sélection de métiers à tisser parfaits pour s'initier sans contrainte.
                            </p>
                            <Link href="/blog?category=Matériel" className="inline-flex justify-center items-center gap-3 bg-accent-500 text-white px-8 py-4 rounded-full font-bold hover:bg-accent-600 hover:scale-105 transition-all shadow-xl shadow-accent-500/30 w-full sm:w-auto">
                                Voir la sélection Matériel <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </article>
    );
}
