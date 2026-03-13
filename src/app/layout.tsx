import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: {
    default: "La Tisserie - Création Textile, Couture & DIY",
    template: "%s | La Tisserie",
  },
  description: "Le blog de référence dédié à la création textile, la couture, le tissage mural et les tutos DIY. Retrouvez tous nos guides, astuces et comparatifs matériel pour vos projets artisanaux.",
  keywords: ["couture", "tissage", "tissage mural", "DIY", "création textile", "loisirs créatifs", "guide couture", "tutoriel tissage", "macramé"],
  authors: [{ name: "Équipe La Tisserie" }],
  creator: "La Tisserie",
  publisher: "La Tisserie",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://latisserie.fr'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/fr-FR',
    },
  },
  openGraph: {
    title: "La Tisserie - Création Textile, Couture & DIY",
    description: "Le blog de référence dédié à la création textile, la couture, le tissage mural et les tutos DIY.",
    url: "https://latisserie.fr",
    siteName: "La Tisserie",
    images: [
      {
        url: "/images/tissage_hero_loom.png", // Image par défaut pour le partage
        width: 1200,
        height: 630,
        alt: "La Tisserie - Création Textile",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Tisserie - Création Textile, Couture & DIY",
    description: "Découvrez nos guides, tutos et comparatifs matériel pour vos projets couture et tissage.",
    images: ["/images/tissage_hero_loom.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Navigation from "@/components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script defer src="https://nhmvgsrwhjsjnpncpiaj.supabase.co/functions/v1/analytics-collect?script=1"></script>
      </head>
      <body className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b border-brand-200 bg-brand-50/80 backdrop-blur-md">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex-1 md:flex md:items-center md:gap-12">
                <Link className="block" href="/">
                  <span className="sr-only">Accueil</span>
                  <span className="font-serif text-2xl font-bold tracking-tight text-brand-900">
                    La Tisserie.
                  </span>
                </Link>
              </div>

              <Navigation />
            </div>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-brand-900 text-brand-100">
          <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
              <div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4">La Tisserie.</h3>
                <p className="text-sm leading-relaxed text-brand-200 max-w-xs">
                  Le blog de référence dédié aux passionnés de création textile, de couture et de tissage.
                </p>
              </div>

              <div>
                <p className="font-medium text-white mb-4">Navigation</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li><Link href="/a-propos" className="transition hover:text-white">À Propos</Link></li>
                  <li><Link href="/contact" className="transition hover:text-white">Contact</Link></li>
                  <li><Link href="/blog" className="transition hover:text-white">Derniers articles</Link></li>
                  <li><Link href="/outils" className="transition hover:text-white">Boîte à Outils (Gratuit)</Link></li>
                  <li><Link href="/blog?category=Matériel" className="transition hover:text-white">Guides Matériel</Link></li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-white mb-4">Légal</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li><Link href="/mentions-legales" className="transition hover:text-white">Mentions légales</Link></li>
                  <li><Link href="/politique-de-confidentialite" className="transition hover:text-white">Politique de confidentialité</Link></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 border-t border-brand-800 pt-6">
              <p className="text-center text-sm text-brand-300">
                &copy; {new Date().getFullYear()} La Tisserie. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
