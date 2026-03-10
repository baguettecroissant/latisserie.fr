"use client";

import NextImage from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { articles } from "@/data/articles";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function BlogGrid() {
    const searchParams = useSearchParams();
    const categoryQuery = searchParams.get('category');
    const pageQuery = searchParams.get('page');
    const currentPage = Math.max(1, parseInt(pageQuery || '1', 10) || 1);
    const ARTICLES_PER_PAGE = 12;

    // Sort all articles by date descending (newest first)
    const sortedArticles = [...articles].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    // Filter articles if a category is provided
    const filteredArticles = categoryQuery
        ? sortedArticles.filter(a => a.category.toLowerCase() === categoryQuery.toLowerCase())
        : sortedArticles;

    const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    const displayArticles = filteredArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

    const categories = ['Tout', 'Couture', 'Tissage', 'Matériel', 'DIY'];

    return (
        <>
            <section className="relative pt-24 pb-16 text-center z-10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-white glass text-accent-700 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                            {categoryQuery ? `CATÉGORIE : ${categoryQuery.toUpperCase()}` : 'LE JOURNAL'}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 text-brand-950 tracking-tight">Le Blog</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
                            {categoryQuery
                                ? `Retrouvez tous nos articles, tutoriels et comparatifs dédiés à l'univers du ${categoryQuery}.`
                                : "Plongez dans nos carnets d'atelier. Tutoriels exclusifs, inspirations textiles et guides matériel pointus pour donner vie à vos idées."}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="container mx-auto px-4 mb-16 relative z-10">
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((cat, i) => {
                        const isSelected = (!categoryQuery && cat === 'Tout') || (categoryQuery?.toLowerCase() === cat.toLowerCase());
                        const href = cat === 'Tout' ? '/blog' : `/blog?category=${cat}`;

                        return (
                            <Link
                                key={cat}
                                href={href}
                                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${isSelected ? 'bg-brand-900 text-white shadow-lg' : 'bg-white text-brand-700 hover:bg-brand-100 border border-brand-200'}`}
                            >
                                {cat}
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Article Grid */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {displayArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {displayArticles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group glass-card rounded-[2rem] overflow-hidden flex flex-col h-full bg-white/60"
                            >
                                {/* Minimalist Image Area */}
                                <div className="aspect-[4/3] relative overflow-hidden bg-brand-100 flex flex-col justify-between">
                                    {article.coverImage && (
                                        <NextImage
                                            src={article.coverImage}
                                            alt={article.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-brand-950/10 group-hover:bg-brand-950/0 transition-colors duration-500 z-10"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                                    {/* Decorative Pattern if no image or as watermark */}
                                    {!article.coverImage && (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-10 font-serif text-8xl text-brand-900 rotate-12 group-hover:scale-110 transition-transform duration-700">
                                            LT
                                        </div>
                                    )}

                                    <div className="relative z-20 p-6 self-start">
                                        <div className="bg-white/90 backdrop-blur-md text-accent-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                                            {article.category}
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-brand-500 mb-4 font-semibold uppercase tracking-wide">
                                        <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-accent-500" /> {new Date(article.publishedAt).toLocaleDateString('fr-FR', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-accent-500" /> {article.readTime}</span>
                                    </div>

                                    <h2 className="text-2xl font-bold font-serif mb-4 text-brand-950 group-hover:text-accent-600 transition-colors leading-snug">
                                        <Link href={`/blog/${article.slug}`}>
                                            {article.title}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-600 text-[15px] mb-8 line-clamp-3 leading-relaxed flex-grow">
                                        {article.excerpt}
                                    </p>

                                    <Link href={`/blog/${article.slug}`} className="inline-flex items-center gap-2 text-brand-900 font-bold text-sm hover:text-accent-600 mt-auto group/btn">
                                        LIRE L'ARTICLE <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-serif text-brand-800 mb-4">Aucun article trouvé</h2>
                        <p className="text-brand-600">Nous n'avons pas encore publié de contenu dans cette catégorie.</p>
                        <Link href="/blog" className="inline-block mt-8 text-accent-600 hover:text-accent-700 font-bold">
                            &larr; Retour au journal
                        </Link>
                    </div>
                )}
            </section>

            {/* Pagination */}
            {totalPages > 1 && (
                <section className="container mx-auto px-4 mt-16 flex justify-center relative z-10">
                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
                            const href = categoryQuery ? `/blog?category=${categoryQuery}&page=${page}` : `/blog?page=${page}`;
                            const isCurrent = page === currentPage;
                            return (
                                <Link
                                    key={page}
                                    href={href}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${isCurrent ? 'bg-brand-900 text-white shadow-md' : 'bg-white/80 backdrop-blur-sm text-brand-700 hover:bg-white hover:text-brand-900 hover:-translate-y-1 hover:shadow-lg border border-brand-200'}`}
                                >
                                    {page}
                                </Link>
                            );
                        })}
                    </div>
                </section>
            )}
        </>
    );
}

export default function BlogIndex() {
    return (
        <div className="bg-brand-50 min-h-screen pb-24 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-200/30 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-brand-200/40 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

            <Suspense fallback={<div className="container mx-auto py-32 text-center text-brand-500">Chargement du blog...</div>}>
                <BlogGrid />
            </Suspense>
        </div>
    );
}
