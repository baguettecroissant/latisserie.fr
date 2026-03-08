"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ShoppingBag, Scissors, Ruler, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Simple estimation logic (simplified for the example)
const calculateYardage = (garment: string, size: string, width: string) => {
    let base = 0;

    // Base yardage by garment type (in meters)
    switch (garment) {
        case 'jupe': base = 1.5; break;
        case 'robe': base = 2.5; break;
        case 'pantalon': base = 2.2; break;
        case 'chemise': base = 1.8; break;
        case 'manteau': base = 3.0; break;
        default: base = 2.0;
    }

    // Size multiplier
    if (size === 'L' || size === 'XL') base *= 1.2;
    if (size === 'XXL') base *= 1.4;

    // Width multiplier (standard is 140cm)
    if (width === '110') base *= 1.3; // Narrow fabric needs more length
    if (width === '150') base *= 0.9; // Wide fabric needs less

    return Math.ceil(base * 10) / 10; // Round to 1 decimal
};

export default function CalculatorPage() {
    const [garment, setGarment] = useState('');
    const [size, setSize] = useState('');
    const [width, setWidth] = useState('140');
    const [result, setResult] = useState<number | null>(null);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        setIsCalculating(true);
        setResult(null);

        // Simulate thinking for UX
        setTimeout(() => {
            const yardage = calculateYardage(garment, size, width);
            setResult(yardage);
            setIsCalculating(false);
        }, 800);
    };

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
                            <Calculator className="w-4 h-4" />
                            Outil Gratuit
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-brand-950 tracking-tight max-w-4xl mx-auto leading-tight">
                            Combien de tissu pour <br />votre prochain projet ?
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            Ne soyez plus jamais à court de tissu. Utilisez notre calculateur intelligent pour estimer le métrage exact dont vous avez besoin selon votre taille et votre patron.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Calculator Interface & SEO Content */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column - SEO Content & Explanations */}
                    <div className="lg:col-span-4 order-2 lg:order-1 space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white/60 glass-card rounded-3xl p-8"
                        >
                            <h2 className="text-xl font-serif font-bold text-brand-950 mb-4 border-b border-brand-200 pb-4">
                                Pourquoi ce calculateur ?
                            </h2>
                            <div className="space-y-4 text-brand-700 text-sm leading-relaxed">
                                <p>
                                    L'achat de tissu est l'étape cruciale de tout projet couture. Acheter trop de tissu impacte votre budget et l'environnement. En acheter trop peu met en péril votre création.
                                </p>
                                <p>
                                    Ce simulateur prend en compte <strong>les standards de modélisme</strong> pour vous fournir une estimation fiable, adaptée à la <strong>laize (largeur)</strong> de votre rouleau.
                                </p>
                            </div>
                        </motion.div>

                        <div className="space-y-6">
                            <h3 className="font-serif font-bold text-lg text-brand-900 flex items-center gap-2">
                                <Ruler className="w-5 h-5 text-accent-500" />
                                Rappel des laizes standards
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-brand-100">
                                    <span className="font-medium text-brand-800">Coton & Popeline</span>
                                    <span className="text-brand-500 text-sm">~110 cm / 140 cm</span>
                                </li>
                                <li className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-brand-100">
                                    <span className="font-medium text-brand-800">Jersey & Viscose</span>
                                    <span className="text-brand-500 text-sm">~140 cm / 150 cm</span>
                                </li>
                                <li className="flex justify-between items-center p-4 bg-white rounded-xl shadow-sm border border-brand-100">
                                    <span className="font-medium text-brand-800">Tissus d'ameublement</span>
                                    <span className="text-brand-500 text-sm">~150 cm / 280 cm</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - The Interactive Calculator */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="lg:col-span-8 order-1 lg:order-2"
                    >
                        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-brand-100">

                            {/* Decorative Header */}
                            <div className="h-32 bg-brand-900 relative overflow-hidden flex items-center px-10">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                <div className="relative z-10 flex items-center gap-4">
                                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                                        <Scissors className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-serif font-bold text-white">Calculateur de Métrage</h2>
                                        <p className="text-brand-200 text-sm">Précision & Économie</p>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="p-10">
                                <form onSubmit={handleCalculate} className="space-y-8">

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* Param 1 : Type de vêtement */}
                                        <div className="space-y-3">
                                            <label className="block text-sm font-bold text-brand-900 uppercase tracking-wide">
                                                Que cousez-vous ?
                                            </label>
                                            <div className="relative">
                                                <select
                                                    required
                                                    value={garment}
                                                    onChange={(e) => setGarment(e.target.value)}
                                                    className="w-full appearance-none bg-brand-50 border-2 border-brand-100 rounded-xl px-4 py-4 text-brand-900 focus:outline-none focus:border-accent-500 focus:ring-0 transition-colors cursor-pointer font-medium"
                                                >
                                                    <option value="" disabled hidden>Sélectionnez un projet</option>
                                                    <option value="jupe">Jupe (Droite ou Évasée)</option>
                                                    <option value="robe">Robe (Manches courtes/longues)</option>
                                                    <option value="pantalon">Pantalon / Jogg</option>
                                                    <option value="chemise">Chemise / Blouse</option>
                                                    <option value="manteau">Manteau / Veste longue</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                                    <ChevronDown className="w-5 h-5 text-brand-500" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Param 2 : Taille */}
                                        <div className="space-y-3">
                                            <label className="block text-sm font-bold text-brand-900 uppercase tracking-wide">
                                                Quelle taille ?
                                            </label>
                                            <div className="relative">
                                                <select
                                                    required
                                                    value={size}
                                                    onChange={(e) => setSize(e.target.value)}
                                                    className="w-full appearance-none bg-brand-50 border-2 border-brand-100 rounded-xl px-4 py-4 text-brand-900 focus:outline-none focus:border-accent-500 focus:ring-0 transition-colors cursor-pointer font-medium"
                                                >
                                                    <option value="" disabled hidden>Sélectionnez une taille</option>
                                                    <option value="S">Petite (34 - 38)</option>
                                                    <option value="M">Moyenne (40 - 44)</option>
                                                    <option value="L">Grande (46 - 50)</option>
                                                    <option value="XL">Très Grande (52 - 56)</option>
                                                    <option value="XXL">Plus Size (58+)</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                                    <ChevronDown className="w-5 h-5 text-brand-500" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Param 3 : Laize */}
                                    <div className="space-y-3 pt-4 border-t border-brand-100">
                                        <label className="block text-sm font-bold text-brand-900 uppercase tracking-wide">
                                            Largeur du tissu (Laize)
                                        </label>
                                        <div className="grid grid-cols-3 gap-4">
                                            {['110', '140', '150'].map((w) => (
                                                <button
                                                    key={w}
                                                    type="button"
                                                    onClick={() => setWidth(w)}
                                                    className={`py-4 px-2 rounded-xl border-2 font-medium text-center transition-all ${width === w
                                                            ? 'border-accent-500 bg-accent-50 text-accent-700 shadow-md'
                                                            : 'border-brand-100 bg-brand-50 text-brand-600 hover:border-brand-300 hover:bg-white'
                                                        }`}
                                                >
                                                    ~{w} cm
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isCalculating || !garment || !size}
                                        className="w-full group mt-8 relative px-8 py-5 bg-brand-950 text-white rounded-xl font-bold overflow-hidden shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        <div className="absolute inset-0 bg-accent-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out"></div>
                                        <span className="relative flex items-center gap-2">
                                            {isCalculating ? (
                                                <span className="flex items-center gap-2">Calcul en cours <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}><Calculator className="w-4 h-4" /></motion.div></span>
                                            ) : (
                                                <><span>Calculer mon métrage</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
                                            )}
                                        </span>
                                    </button>
                                </form>

                                {/* Dynamic Result Area */}
                                <AnimatePresence mode="wait">
                                    {result !== null && !isCalculating && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0, y: 20 }}
                                            animate={{ opacity: 1, height: 'auto', y: 0 }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                                            className="mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-accent-50 to-brand-50 border border-accent-200"
                                        >
                                            <div className="p-8 text-center flex flex-col items-center">
                                                <span className="text-accent-700 font-bold tracking-widest uppercase text-xs mb-2">Résultat de l'estimation</span>
                                                <div className="text-6xl font-serif font-bold text-brand-950 mb-2">
                                                    {result} <span className="text-3xl text-brand-500 font-medium">mètres</span>
                                                </div>
                                                <p className="text-brand-600 max-w-sm mb-8 text-sm">
                                                    Ceci est une estimation générique de sécurité pour la création d'un(e) {garment} en taille {size}.
                                                </p>

                                                {/* Affiliate Call To Action */}
                                                <div className="w-full bg-white p-6 rounded-xl shadow-sm border border-brand-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                                                    <div className="text-left flex items-center gap-4">
                                                        <div className="w-12 h-12 bg-accent-100/50 rounded-full flex items-center justify-center shrink-0">
                                                            <ShoppingBag className="w-5 h-5 text-accent-600" />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-brand-900 border-b-2 border-accent-300 inline-block pb-0.5 mb-1">C'est l'heure du shopping !</p>
                                                            <p className="text-xs text-brand-500">Trouvez le tissu parfait pour ce projet.</p>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="w-full sm:w-auto px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white rounded-lg font-bold text-sm transition-colors whitespace-nowrap shadow-md shadow-accent-600/20"
                                                    >
                                                        Voir les tissus
                                                    </a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
