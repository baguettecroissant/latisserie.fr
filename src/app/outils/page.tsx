"use client";

import { motion } from "framer-motion";
import { Calculator, ArrowRight, Sparkles, Wrench } from "lucide-react";
import Link from "next/link";

export default function OutilsIndex() {
    return (
        <div className="min-h-screen bg-brand-50 pb-24 relative overflow-hidden">
            {/* Ambient Backgrounds */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-200/40 rounded-full blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-200/40 rounded-full blur-[150px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

            {/* Header Section */}
            <section className="relative pt-24 pb-16 text-center z-10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white glass text-accent-700 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm border border-brand-200">
                            <Wrench className="w-4 h-4" />
                            Ressources Gratuites
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-brand-950 tracking-tight max-w-4xl mx-auto leading-tight">
                            Boîte à Outils du <br /><span className="italic text-accent-600">Créateur</span>
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            Découvrez nos générateurs et calculateurs conçus pour simplifier vos projets de couture et de tissage. Tous nos outils sont 100% gratuits.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Tools Grid Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Tool 1: Calculateur de Métrage */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Link href="/outils/calculateur-metrage" className="block group h-full">
                            <div className="bg-white rounded-3xl p-8 border border-brand-100 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                                {/* Decor */}
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
                                    <Calculator className="w-32 h-32" />
                                </div>
                                <div className="w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center mb-8 border border-accent-100 group-hover:bg-accent-600 group-hover:border-accent-600 transition-colors duration-300">
                                    <Calculator className="w-8 h-8 text-accent-600 group-hover:text-white transition-colors" />
                                </div>

                                <h2 className="text-2xl font-serif font-bold text-brand-950 mb-4">Calculateur de Métrage</h2>
                                <p className="text-brand-600 mb-8 flex-grow">
                                    Estimez instantanément la quantité exacte de tissu requise pour votre prochain vêtement selon votre taille et la laize du tissu.
                                </p>

                                <div className="flex items-center text-accent-600 font-bold group-hover:text-accent-700">
                                    Ouvrir l'outil <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Tool 2: Calculateur de Chaîne & Trame */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link href="/outils/calculateur-chaine-trame" className="block group h-full">
                            <div className="bg-brand-900 text-white rounded-3xl p-8 border border-brand-800 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                                {/* Decor */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/woven.png')] opacity-5 group-hover:opacity-10 transition-opacity"></div>
                                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 group-hover:text-accent-400 transition-all duration-500">
                                    <Sparkles className="w-32 h-32" />
                                </div>

                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 border border-white/20 group-hover:bg-accent-600 group-hover:border-accent-600 transition-colors duration-300 relative z-10">
                                    <Sparkles className="w-8 h-8 text-white" />
                                </div>

                                <h2 className="text-2xl font-serif font-bold text-white mb-4 relative z-10">Calcul de Fil (Tissage)</h2>
                                <p className="text-brand-300 mb-6 flex-grow relative z-10">
                                    Fini le casse-tête avant d'ourdir. Calculez exactement vos besoins en fil (chaîne, trame) selon votre peigne, en incluant le retrait et l'embuvage.
                                </p>

                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500 text-white font-bold mb-6 text-xs w-max relative z-10">
                                    NOUVEAU
                                </div>

                                <div className="flex items-center text-accent-400 font-bold group-hover:text-white relative z-10">
                                    Ouvrir l'outil <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
