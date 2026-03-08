"use client";

import { motion } from "framer-motion";
import { ArrowRight, Scissors, Palette, ShoppingBag, Calculator } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Dynamic Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-24 overflow-hidden bg-brand-50 relative">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-100/40 rounded-full blur-[120px] mix-blend-multiply translate-x-1/3 -translate-y-1/4"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
            className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-200/40 rounded-full blur-[100px] mix-blend-multiply -translate-x-1/3 translate-y-1/4"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-brand-800">Le renouveau du Fait-Main</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
                Tissez votre <br />
                <span className="text-gradient">propre histoire.</span>
              </h1>

              <p className="text-xl text-brand-700 mb-10 max-w-xl leading-relaxed">
                Plongez dans l'univers de la création textile contemporaine. Des guides experts, des tutoriels inspirants et le meilleur matériel sélectionné pour vous.
              </p>

              <div className="flex flex-wrap items-center gap-6">
                <Link href="/blog" className="group relative px-8 py-4 bg-brand-950 text-white rounded-full font-medium overflow-hidden shadow-2xl shadow-brand-900/20 hover:shadow-brand-900/40 transition-shadow">
                  <div className="absolute inset-0 bg-accent-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out"></div>
                  <span className="relative flex items-center gap-2">
                    Explorer le blog <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link href="/a-propos" className="px-6 py-4 font-medium text-brand-800 hover:text-accent-600 transition-colors">
                  Découvrir notre héritage
                </Link>
              </div>

              {/* Social Proof / Stats */}
              <div className="mt-16 flex items-center gap-8 pt-8 border-t border-brand-200/50">
                <div>
                  <p className="text-3xl font-serif font-bold text-brand-950">50+</p>
                  <p className="text-sm text-brand-600 font-medium">Tutoriels détaillés</p>
                </div>
                <div className="w-px h-12 bg-brand-200"></div>
                <div>
                  <p className="text-3xl font-serif font-bold text-brand-950">100%</p>
                  <p className="text-sm text-brand-600 font-medium">Passion & Artisanat</p>
                </div>
              </div>
            </motion.div>

            {/* Visual/Image Collage Right Side - Bento Style */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative lg:h-[600px] hidden lg:block"
            >
              {/* Main Image */}
              <div className="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-2xl z-10 transform rotate-2 hover:rotate-0 transition-transform duration-700">
                <Image
                  src="/images/tissage_hero_loom.png"
                  alt="Métier à tisser artisanal"
                  fill
                  className="object-cover border-8 border-white"
                />
              </div>

              {/* Secondary Floating Card */}
              <div className="absolute bottom-10 left-0 w-1/2 rounded-2xl overflow-hidden shadow-2xl z-20 transform -rotate-6 hover:-rotate-0 transition-transform duration-700 glass border-4 border-white">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/materiel_tailor_shears_focus.png"
                    alt="Détail haute couture"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Abstract Badge */}
              <div className="absolute top-20 left-10 w-24 h-24 bg-accent-500 rounded-full z-30 flex items-center justify-center text-white font-serif font-bold text-center text-sm shadow-xl shadow-accent-500/30 animate-[spin_10s_linear_infinite]">
                DIY<br />& ART
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Bento Grid Categories Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Exprimez votre <span className="text-accent-500 italic">créativité</span>.</h2>
              <p className="text-xl text-brand-600">Explorez nos univers dédiés aux arts du fil. De l'aiguille à la machine, trouvez l'inspiration et les conseils techniques.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
            {/* Bento Item 1 - Large */}
            <Link href="/blog?category=Couture" className="group relative col-span-1 md:col-span-2 rounded-[2rem] overflow-hidden bg-brand-50 p-10 flex flex-col justify-end transition-transform duration-500 hover:scale-[1.02]">
              {/* Stronger Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/40 to-transparent z-10 transition-opacity duration-500"></div>
              <Image
                src="/images/couture_essential_tools.png"
                alt="Tutoriels Couture"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="relative z-20 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-md">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-6">
                  <Scissors className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-3xl font-serif font-bold mb-2 text-white">Tutoriels & Patrons</h3>
                <p className="text-white/90 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 italic font-medium">Des guides pas-à-pas détaillés pour réaliser vos vêtements et éléments de décoration intérieurs.</p>
              </div>
            </Link>

            {/* Bento Item 2 - Tall */}
            <Link href="/blog?category=Matériel" className="group relative col-span-1 rounded-[2rem] overflow-hidden bg-brand-50 p-10 flex flex-col justify-end transition-transform duration-500 hover:scale-[1.02]">
              {/* Stronger Bottom Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/95 via-brand-950/40 to-transparent z-10 transition-opacity duration-500"></div>
              <Image
                src="/images/materiel_sewing_machines_comp.png"
                alt="Matériel Couture"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="relative z-20 text-white transition-colors duration-500 drop-shadow-md">
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShoppingBag className="w-5 h-5 text-accent-600" />
                </div>
                <h3 className="text-2xl font-serif font-bold mb-2 text-white">Guides d'achat Matériel</h3>
                <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 mt-4 leading-relaxed italic font-medium transition-opacity duration-500">Ne vous trompez plus sur le choix de votre machine à coudre ou de vos laines à tisser grâce à nos comparatifs impartiaux.</p>
              </div>
            </Link>

            {/* Bento Item 3 - Standard (Outil) */}
            <Link href="/outils" className="group relative col-span-1 md:col-span-3 rounded-[2rem] overflow-hidden bg-brand-900 p-10 flex items-center justify-between transition-transform duration-500 hover:scale-[1.01] border border-brand-800">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

              <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-accent-500/30 transition-colors"></div>

              <div className="relative z-20 text-white max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500 text-white font-bold mb-6 text-sm shadow-lg shadow-accent-500/30 border border-accent-400">
                  <span className="flex h-2 w-2 rounded-full bg-white animate-pulse"></span>
                  BOÎTE À OUTILS PROFESSIONNELLE
                </div>
                <h3 className="text-3xl font-serif font-bold mb-4">Calculateurs & Outils Gratuits</h3>
                <p className="text-brand-200 text-lg">Métrage de tissu, chaîne et trame... Simplifiez vos calculs techniques avec nos outils conçus pour les créateurs.</p>
              </div>

              <div className="hidden md:flex relative z-20 w-32 h-32 bg-accent-600 rounded-full items-center justify-center shadow-xl shadow-accent-900/50 group-hover:scale-110 transition-transform duration-500 border border-accent-400">
                <Calculator className="w-10 h-10 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      <section className="py-24 bg-brand-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Dernières Inspirations</h2>
            <p className="text-brand-600 max-w-2xl mx-auto">Explorez nos derniers articles pour nourrir votre passion et perfectionner votre technique.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* We can map or just pick top 3 */}
            {require("@/data/articles").articles.slice(0, 3).map((article: any) => (
              <Link key={article.id} href={`/blog/${article.slug}`} className="group glass-card rounded-3xl overflow-hidden flex flex-col h-full bg-white/60">
                <div className="aspect-video relative overflow-hidden bg-brand-100">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-accent-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent-600 transition-colors leading-snug">{article.title}</h3>
                  <p className="text-brand-600 text-sm line-clamp-2 mb-6 flex-1">{article.excerpt}</p>
                  <div className="flex items-center text-accent-700 font-bold text-xs uppercase tracking-widest gap-2">
                    Lire la suite <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/blog" className="inline-flex items-center gap-2 text-brand-900 font-bold border-b-2 border-accent-500 pb-1 hover:text-accent-600 transition-colors">
              Voir tous nos articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
