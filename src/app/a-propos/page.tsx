"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, PenTool, Award, Search, Hand } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="bg-brand-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-brand-950 py-32 text-white overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <Image
                        src="/latisserie_about_hero.png"
                        alt="Matériel de tissage et création textile"
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-950/80 to-brand-950"></div>
                </div>

                {/* Abstract Background Elements */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-600/30 rounded-full blur-[120px] mix-blend-screen translate-x-1/3 -translate-y-1/4"
                />

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                            <span className="text-xs font-bold tracking-widest uppercase text-accent-300">Blog Textile & DIY</span>
                        </div>

                        {/* SEO Optimized H1 - Better readability */}
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-serif tracking-normal leading-tight text-white drop-shadow-lg">
                            De l'atelier artisanal à la <span className="text-accent-400 italic">toile numérique</span>.
                        </h1>
                        <h2 className="text-xl md:text-2xl text-brand-100 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-md">
                            Découvrez l'histoire de La Tisserie, le blog de référence dédié au tissage, à la couture et aux arts du fil créatifs.
                        </h2>
                    </motion.div>
                </div>
            </section>

            {/* Story & Origins Section */}
            <section className="py-24 relative z-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="glass-card bg-white/90 rounded-[2.5rem] p-8 md:p-16 lg:p-24 shadow-2xl">
                        {/* Introduction SEO focus */}
                        <div className="max-w-4xl mx-auto text-center mb-20">
                            <h3 className="text-3xl font-serif font-bold text-brand-950 mb-6">Plus qu'un simple blog de couture, un véritable héritage.</h3>
                            <p className="text-lg text-brand-700 leading-relaxed">
                                Que vous cherchiez des <strong>tutoriels de tissage pour débutants</strong>, des conseils pour choisir votre <strong>première machine à coudre</strong>, ou des idées créatives de <strong>DIY (Do It Yourself)</strong>, La Tisserie s'engage à vous fournir un contenu expert, testé et approuvé par des passionnés.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

                            {/* Image Collage */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-100px" }}
                                transition={{ duration: 1 }}
                                className="relative"
                            >
                                <div className="relative aspect-[4/5] bg-brand-100 rounded-[2rem] overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-700 border-8 border-white">
                                    <Image
                                        src="/latisserie_about_atelier.png"
                                        alt="Atelier de tissage artisanal dans le Puy-de-Dôme avec métier à tisser en bois"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>

                                {/* Floating badge */}
                                <div className="absolute -bottom-8 -right-8 bg-brand-950 text-white p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center shadow-xl shadow-brand-900/20 transform rotate-12">
                                    <span className="text-sm uppercase tracking-widest font-bold text-accent-400">Puy De</span>
                                    <span className="text-2xl font-serif font-bold">Dôme</span>
                                </div>
                            </motion.div>

                            {/* Content */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-100px" }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-px bg-accent-500"></div>
                                    <span className="text-accent-600 font-bold tracking-widest text-sm uppercase">Les Origines (1995-2023)</span>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-bold font-serif mb-8 text-brand-950 leading-[1.1]">
                                    Une passion tissée au cœur de la France.
                                </h3>

                                <div className="space-y-6 text-brand-700 leading-relaxed text-lg font-light">
                                    <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-accent-600 first-letter:mr-3 first-letter:float-left">
                                        Historiquement lié à l'artisanat textile d'excellence dans la région Auvergne-Rhône-Alpes, <strong>La Tisserie</strong> était le lieu d'expression exclusif d'une artisane passionnée. Reconnue par les prestigieux <em>Ateliers d'Art de France</em>, elle y confectionnait dans son atelier du Puy-de-Dôme des œuvres tissées à la main, témoins d'un véritable savoir-faire traditionnel et contemporain.
                                    </p>
                                    <p>
                                        Durant des décennies, d'innombrables navettes ont croisé les fils de chaîne sur ses métiers à tisser en bois, créant des pièces uniques recherchées par les amateurs d'artisanat d'art. Une époque où la transmission du geste se faisait physiquement, au rythme du battant.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Transition Section - SEO Focused Core Values */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left Core Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-100px" }}
                            className="sticky top-32"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-px bg-accent-500"></div>
                                <span className="text-accent-600 font-bold tracking-widest text-sm uppercase">La Transition (2024 et après)</span>
                            </div>
                            <h3 className="text-4xl font-serif font-bold text-brand-950 mb-8 leading-tight">
                                De la production artisanale au partage de connaissances numériques.
                            </h3>
                            <p className="text-lg text-brand-700 mb-6 leading-relaxed">
                                Aujourd'hui, <strong>La Tisserie se réinvente</strong>. Si les métiers à tisser de l'atelier historique ont cessé de battre le rythme de la production physique, l'esprit créatif, l'exigence de qualité et la volonté de transmettre perdurent avec une nouvelle ambition.
                            </p>
                            <p className="text-lg text-brand-700 leading-relaxed">
                                Nous avons repris ce flambeau numérique pour en faire <strong>la nouvelle place de référence francophone</strong> dédiée aux passionnés de création textile. Notre objectif : démystifier les arts du fil et proposer des contenus de haute qualité.
                            </p>
                        </motion.div>

                        {/* Right Features Grid For AEO / NLP parsing */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {/* Feature 1 */}
                            <div className="bg-brand-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-200">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-accent-500">
                                    <PenTool className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold font-serif text-brand-950 mb-3">Tutoriels Couture & Création</h4>
                                <p className="text-brand-600 text-sm leading-relaxed">
                                    Des patrons expliqués pas-à-pas, des techniques de montage de vêtements, et des astuces pour maîtriser votre machine à coudre, que vous soyez débutant ou intermédiaire.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-brand-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-200 mt-0 sm:mt-12">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-accent-500">
                                    <Hand className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold font-serif text-brand-950 mb-3">Initiation au Tissage</h4>
                                <p className="text-brand-600 text-sm leading-relaxed">
                                    Découvrez comment monter une chaîne, choisir vos fils (laine, coton, lin) et réaliser vos premières tentures murales grâce à nos guides dédiés au tissage contemporain.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-brand-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-200">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-accent-500">
                                    <Search className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold font-serif text-brand-950 mb-3">Guides d'Achat Matériel</h4>
                                <p className="text-brand-600 text-sm leading-relaxed">
                                    Nous testons et comparons de manière rigoureuse le matériel de mercerie : machines à coudre, surjeteuses, fils métiers à tisser, pour des achats réfléchis et durables.
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div className="bg-brand-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-brand-200 mt-0 sm:mt-12">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-accent-500">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-bold font-serif text-brand-950 mb-3">Qualité Éditoriale</h4>
                                <p className="text-brand-600 text-sm leading-relaxed">
                                    Un héritage d'artisan exige des textes précis. Tous nos articles sont rédigés avec soin pour garantir des informations utiles, inspirantes et exactes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Mission Statement / CTA */}
            <section className="py-24 bg-brand-950 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-600/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                    <BookOpen className="w-12 h-12 text-accent-500 mx-auto mb-8" />
                    <div className="p-8 md:p-12 glass border-white/10 rounded-[2.5rem] mb-12">
                        <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-white italic leading-snug">
                            « Quelle que soit votre expérience technique avec le fil, notre mission est de vous transmettre la passion de créer de vos propres mains. »
                        </p>
                    </div>

                    <Link href="/blog" className="inline-flex items-center gap-3 bg-accent-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-accent-600 hover:scale-105 transition-all shadow-xl shadow-accent-500/30 group">
                        Consulter les articles du Blog
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
