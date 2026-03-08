"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Le Blog", href: "/blog" },
        { name: "Couture", href: "/blog?category=Couture" },
        { name: "Matériel", href: "/blog?category=Matériel" },
        { name: "Outils", href: "/outils", bold: true },
        { name: "À Propos", href: "/a-propos" },
        { name: "Contact", href: "/contact", bold: true },
    ];

    return (
        <div className="flex items-center gap-8">
            {/* Desktop Navigation */}
            <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-8 text-sm font-medium transition-all">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                className={`text-brand-700 hover:text-accent-600 transition-colors ${link.bold ? 'font-bold' : ''}`}
                                href={link.href}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="p-2 text-brand-700 hover:text-accent-600 focus:outline-none relative z-[120]"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation Drawer - Portaled out of the header containing block */}
            {mounted && isOpen && createPortal(
                <div className="fixed inset-0 z-[100] md:hidden">
                    {/* Darker Backdrop for focus */}
                    <div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={toggleMenu}
                    />

                    {/* Drawer Content - FORCED SOLID BACKGROUND */}
                    <nav className="fixed top-0 right-0 bottom-0 top-0 h-screen w-[85%] max-w-sm bg-white shadow-2xl p-10 py-16 flex flex-col gap-10 animate-in slide-in-from-right duration-500 z-[110] border-l border-brand-100 overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <span className="font-serif text-2xl font-bold text-brand-900 tracking-tight">Menu</span>
                            {/* Close button provided here as well, though the trigger Button stays visible above */}
                            <button
                                onClick={toggleMenu}
                                className="p-3 bg-brand-50 rounded-full text-brand-900 hover:bg-brand-100 transition-colors"
                                aria-label="Close menu"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <ul className="flex flex-col gap-8">
                            {navLinks.map((link) => (
                                <li key={link.name} className="border-b border-brand-50 pb-4">
                                    <Link
                                        onClick={toggleMenu}
                                        className={`text-xl font-medium text-brand-900 hover:text-accent-600 block transition-all ${link.bold ? 'font-bold' : ''}`}
                                        href={link.href}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto pt-10 border-t border-brand-100">
                            <p className="text-lg text-brand-900 font-serif font-bold mb-2">La Tisserie.</p>
                            <p className="text-sm text-brand-600 leading-relaxed italic">Le blog de référence de l'artisanat textile contemporain.</p>
                        </div>
                    </nav>
                </div>,
                document.body
            )}
        </div>
    );
}
