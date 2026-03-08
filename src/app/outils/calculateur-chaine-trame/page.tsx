"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, ShoppingBag, ArrowRight, ChevronDown, Layers, Scissors, Info } from "lucide-react";
import Link from "next/link";

// Weaving calculation logic
const calculateWeavingYarn = (
    widthCm: number,
    lengthCm: number,
    endsPerCm: number, // Density (sett)
    fringeCm: number,
    shrinkagePercent: number,
    takeupPercent: number
) => {
    // 1. Calculate Warp (Chaîne)
    // Add shrinkage/take-up to length
    const totalWarpLengthM = (lengthCm + fringeCm) * (1 + shrinkagePercent / 100) * (1 + takeupPercent / 100) / 100;
    // Add shrinkage to width
    const weavingWidthCm = widthCm * (1 + shrinkagePercent / 100);
    const totalWarpEnds = weavingWidthCm * endsPerCm;
    const warpYarnNeededM = totalWarpEnds * totalWarpLengthM;

    // 2. Calculate Weft (Trame)
    // Picks per cm generally similar to ends per cm for balanced weave
    const picksPerCm = endsPerCm;
    const totalWeftPicks = (lengthCm * (1 + shrinkagePercent / 100)) * picksPerCm;
    const weftYarnNeededM = (weavingWidthCm / 100) * totalWeftPicks;

    return {
        warpMeters: Math.ceil(warpYarnNeededM),
        weftMeters: Math.ceil(weftYarnNeededM),
        totalMeters: Math.ceil(warpYarnNeededM + weftYarnNeededM),
        totalWarpEnds: Math.ceil(totalWarpEnds)
    };
};

export default function WeavingCalculatorPage() {
    const [width, setWidth] = useState<string>('30');
    const [length, setLength] = useState<string>('200');
    const [density, setDensity] = useState<string>('4'); // 4 fils/cm (10 DPI roughly)
    const [fringe, setFringe] = useState<string>('20');

    const [result, setResult] = useState<ReturnType<typeof calculateWeavingYarn> | null>(null);
    const [isCalculating, setIsCalculating] = useState(false);

    const handleCalculate = (e: React.FormEvent) => {
        e.preventDefault();
        setIsCalculating(true);
        setResult(null);

        setTimeout(() => {
            const calculations = calculateWeavingYarn(
                Number(width),
                Number(length),
                Number(density),
                Number(fringe),
                10, // 10% shrinkage (retrait)
                10  // 10% take-up (embuvage)
            );
            setResult(calculations);
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
                            <Layers className="w-4 h-4" />
                            Outil Expert Gratuit
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-brand-950 tracking-tight max-w-4xl mx-auto leading-tight">
                            Calculateur de Fil <br /><span className="italic text-accent-600">Chaîne & Trame</span>
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            Fini les maths complexes avant de commencer à tisser. Cet outil calcule exactement vos besoins en fil, en incluant automatiquement le retrait et l'embuvage (10%).
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Calculator Interface & SEO Content */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column - SEO Content & Explanations */}
                    <div className="lg:col-span-4 order-2 lg:order-1 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-brand-900 text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/woven.png')] opacity-10"></div>

                            <h2 className="text-xl font-serif font-bold mb-4 relative z-10">
                                Pourquoi la précision est vitale en tissage ?
                            </h2>
                            <div className="space-y-4 text-brand-200 text-sm leading-relaxed relative z-10">
                                <p>
                                    Monter une chaîne est l'étape la plus technique du tissage. Si vous n'avez pas assez de fil de chaîne, votre projet est perdu avant même d'avoir commencé.
                                </p>
                                <p>
                                    <strong>Comment fonctionne ce calcul ?</strong><br />
                                    Nous ajoutons automatiquement un facteur de sécurité standard :<br />
                                    • +10% d'embuvage (take-up)<br />
                                    • +10% de retrait au lavage (shrinkage)
                                </p>
                            </div>
                        </motion.div>

                        <div className="bg-white/60 glass-card rounded-3xl p-6 border border-brand-200 space-y-4">
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center">
                                        <Info className="w-4 h-4 text-accent-600" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-brand-900 mb-1">Rappel Densité (Peigne)</h4>
                                    <p className="text-sm text-brand-600">
                                        La densité correspond à l'espacement des fils. Par exemple, un peigne "40/10" signifie 4 fils par centimètre (soit environ 10 DPI).
                                    </p>
                                </div>
                            </div>
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
                            <div className="h-24 bg-brand-50 border-b border-brand-100 flex items-center px-8 lg:px-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-brand-200 shadow-sm">
                                        <Layers className="w-6 h-6 text-accent-600" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-serif font-bold text-brand-950">Paramètres de votre projet</h2>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="p-8 lg:p-10">
                                <form onSubmit={handleCalculate} className="space-y-8">

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* Param 1 : Largeur */}
                                        <div className="space-y-3">
                                            <label className="block text-sm font-bold text-brand-900 uppercase tracking-wide">
                                                Largeur souhaitée (cm)
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    required
                                                    min="1"
                                                    value={width}
                                                    onChange={(e) => setWidth(e.target.value)}
                                                    className="w-full bg-brand-50 border-2 border-brand-100 rounded-xl px-4 py-4 text-brand-900 focus:outline-none focus:border-accent-500 focus:ring-0 transition-colors font-medium"
                                                    placeholder="Ex: 30"
                                                />
                                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-400 font-medium">
                                                    cm
                                                </div>
                                            </div>
                                        </div>

                                        {/* Param 2 : Longueur */}
                                        <div className="space-y-3">
                                            <label className="block text-sm font-bold text-brand-900 uppercase tracking-wide">
                                                Longueur souhaitée (cm)
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    required
                                                    min="1"
                                                    value={length}
                                                    onChange={(e) => setLength(e.target.value)}
                                                    className="w-full bg-brand-50 border-2 border-brand-100 rounded-xl px-4 py-4 text-brand-900 focus:outline-none focus:border-accent-500 focus:ring-0 transition-colors font-medium"
                                                    placeholder="Ex: 200"
                                                />
                                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-400 font-medium">
                                                    cm
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-brand-100">
                                        {/* Param 3 : Peigne / Densité */}
                                        <div className="space-y-3">
                                            <label className="block text-sm font-bold text-brand-900 uppercase tracking-wide">
                                                Densité du peigne
                                            </label>
                                            <div className="relative">
                                                <select
                                                    required
                                                    value={density}
                                                    onChange={(e) => setDensity(e.target.value)}
                                                    className="w-full appearance-none bg-brand-50 border-2 border-brand-100 rounded-xl px-4 py-4 text-brand-900 focus:outline-none focus:border-accent-500 focus:ring-0 transition-colors cursor-pointer font-medium"
                                                >
                                                    <option value="2">2 fils/cm (~5 DPI) - Laine Épaisse</option>
                                                    <option value="3">3 fils/cm (~7.5 DPI)</option>
                                                    <option value="4">4 fils/cm (~10 DPI) - Peigne Standard</option>
                                                    <option value="5">5 fils/cm (~12.5 DPI)</option>
                                                    <option value="6">6 fils/cm (~15 DPI) - Fil Fin</option>
                                                </select>
                                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                                                    <ChevronDown className="w-5 h-5 text-brand-500" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Param 4 : Franges */}
                                        <div className="space-y-3">
                                            <label className="block text-sm font-bold text-brand-900 uppercase tracking-wide">
                                                Longueur des franges (Totale)
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="number"
                                                    required
                                                    min="0"
                                                    value={fringe}
                                                    onChange={(e) => setFringe(e.target.value)}
                                                    className="w-full bg-brand-50 border-2 border-brand-100 rounded-xl px-4 py-4 text-brand-900 focus:outline-none focus:border-accent-500 focus:ring-0 transition-colors font-medium"
                                                    placeholder="Ex: 20"
                                                />
                                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-400 font-medium">
                                                    cm
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isCalculating || !width || !length}
                                        className="w-full group mt-8 relative px-8 py-5 bg-brand-950 text-white rounded-xl font-bold overflow-hidden shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        <div className="absolute inset-0 bg-accent-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out"></div>
                                        <span className="relative flex items-center gap-2">
                                            {isCalculating ? (
                                                <span className="flex items-center gap-2">Dévidage de la bobine... <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}><Calculator className="w-4 h-4" /></motion.div></span>
                                            ) : (
                                                <><span>Lancer le Calcul Expert</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></>
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
                                            className="mt-8 overflow-hidden rounded-2xl bg-brand-950 text-white border border-brand-800 shadow-2xl"
                                        >
                                            <div className="p-8">
                                                <h3 className="text-xl font-serif font-bold mb-6 text-center text-accent-300">Votre Plan de Tissage</h3>

                                                <div className="grid md:grid-cols-2 gap-8 mb-8">
                                                    <div className="bg-brand-900 p-6 rounded-xl border border-brand-800 text-center">
                                                        <span className="text-brand-300 uppercase tracking-widest text-xs font-bold mb-2 block">La Chaîne (Warp)</span>
                                                        <div className="text-3xl font-serif font-bold text-white mb-2">
                                                            {result.warpMeters} <span className="text-lg text-brand-400 font-medium">m</span>
                                                        </div>
                                                        <p className="text-brand-400 text-sm">Soit {result.totalWarpEnds} fils à ourdir.</p>
                                                    </div>

                                                    <div className="bg-brand-900 p-6 rounded-xl border border-brand-800 text-center">
                                                        <span className="text-brand-300 uppercase tracking-widest text-xs font-bold mb-2 block">La Trame (Weft)</span>
                                                        <div className="text-3xl font-serif font-bold text-white mb-2">
                                                            {result.weftMeters} <span className="text-lg text-brand-400 font-medium">m</span>
                                                        </div>
                                                        <p className="text-brand-400 text-sm">Estimation basée sur une armure toile.</p>
                                                    </div>
                                                </div>

                                                <div className="text-center mb-8 pb-8 border-b border-brand-800">
                                                    <span className="text-brand-300 uppercase tracking-widest text-sm font-bold mb-2 block">Total de Fil Requis</span>
                                                    <div className="text-5xl font-serif font-bold text-accent-400">
                                                        {result.totalMeters} <span className="text-2xl text-white font-medium">mètres</span>
                                                    </div>
                                                </div>

                                                {/* Affiliate Call To Action */}
                                                <div className="w-full bg-accent-600 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                                                    <div className="text-left flex items-center gap-4">
                                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0 text-white">
                                                            <ShoppingBag className="w-5 h-5" />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-white mb-1">Achetez vos cônes de fil !</p>
                                                            <p className="text-xs text-accent-100">Découvrez notre sélection spéciale chaîne & trame.</p>
                                                        </div>
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-brand-50 text-accent-700 rounded-lg font-bold text-sm transition-colors whitespace-nowrap shadow-lg"
                                                    >
                                                        S'équiper en fil
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
