"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Instagram, Facebook, Send, ChevronRight } from "lucide-react";
import Image from "next/image";
export default function Contact() {
    return (
        <div className="relative min-h-screen bg-brand-950 flex flex-col md:flex-row overflow-hidden">

            {/* Left Area - Ambient Image */}
            <div className="relative w-full md:w-5/12 min-h-[40vh] md:min-h-screen">
                <Image
                    src="/images/contact_bg.png"
                    alt="Bureau d'artisan avec tissus et outils"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                {/* Gradient Overlay for seamless blend to right */}
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-950 via-brand-950/40 to-transparent"></div>

                {/* Content on Image */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 shadow-sm">
                            Tissons des <br /><span className="italic text-accent-300">liens</span>.
                        </h1>
                        <p className="text-brand-100/80 max-w-sm text-lg leading-relaxed">
                            Une question technique, une proposition de partenariat, ou simplement l'envie de partager votre dernière création ?
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Right Area - Glass Form */}
            <div className="relative w-full md:w-7/12 flex items-center justify-center p-6 md:p-12 lg:p-24 z-20">

                {/* Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-900/40 rounded-full blur-[120px] pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-2xl bg-brand-900/60 backdrop-blur-xl border border-brand-800/50 p-8 md:p-12 rounded-[2rem] shadow-2xl relative"
                >
                    <div className="grid md:grid-cols-2 gap-12 mb-12 border-b border-brand-800 pb-12">

                        {/* Contact Info */}
                        <div>
                            <h2 className="text-xl font-serif font-bold text-white mb-6">Nos Coordonnées</h2>
                            <ul className="space-y-4 text-brand-200">
                                <li className="flex items-start gap-3 group">
                                    <div className="w-8 h-8 rounded-full bg-brand-800 flex items-center justify-center shrink-0 group-hover:bg-accent-600 transition-colors">
                                        <Mail className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-brand-400 font-bold mb-1">Email</p>
                                        <a href="mailto:bonjour@latisserie.fr" className="hover:text-white transition-colors">bonjour@latisserie.fr</a>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3 group">
                                    <div className="w-8 h-8 rounded-full bg-brand-800 flex items-center justify-center shrink-0 group-hover:bg-accent-600 transition-colors">
                                        <MapPin className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-widest text-brand-400 font-bold mb-1">Atelier (Sur RDV)</p>
                                        <p className="leading-snug">15 Rue de la Soie<br />69001 Lyon, France</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h2 className="text-xl font-serif font-bold text-white mb-6">Réseaux Sociaux</h2>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 rounded-full border border-brand-700 flex items-center justify-center hover:bg-white hover:text-brand-950 transition-all group">
                                    <Instagram className="w-5 h-5 text-brand-300 group-hover:text-brand-950" />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full border border-brand-700 flex items-center justify-center hover:bg-white hover:text-brand-950 transition-all group">
                                    <Facebook className="w-5 h-5 text-brand-300 group-hover:text-brand-950" />
                                </a>
                            </div>
                            <p className="text-brand-400 text-sm mt-4">Suivez nos inspirations quotidiennes et taguez-nous avec #LaTisserieDIY.</p>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-brand-300">Nom complet</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-brand-950/50 border border-brand-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all placeholder:text-brand-700"
                                    placeholder="Votre nom"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-brand-300">Adresse email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-brand-950/50 border border-brand-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all placeholder:text-brand-700"
                                    placeholder="vous@exemple.fr"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-brand-300">Sujet</label>
                            <select
                                id="subject"
                                className="w-full bg-brand-950/50 border border-brand-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all appearance-none"
                            >
                                <option value="" disabled hidden>Sélectionnez un sujet</option>
                                <option value="partenariat">Proposition de partenariat</option>
                                <option value="question">Question sur un tutoriel</option>
                                <option value="materiel">Avis matériel / Test</option>
                                <option value="autre">Autre motif</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-brand-300">Votre message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-brand-950/50 border border-brand-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all placeholder:text-brand-700 resize-none"
                                placeholder="Comment pouvons-nous vous aider ?"
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full group relative px-8 py-4 bg-white text-brand-950 rounded-xl font-bold overflow-hidden shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2">
                            <div className="absolute inset-0 bg-accent-100 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out"></div>
                            <span className="relative flex items-center gap-2">
                                <span>Envoyer le message</span>
                                <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </button>
                    </form>

                </motion.div>
            </div>
        </div>
    );
}
