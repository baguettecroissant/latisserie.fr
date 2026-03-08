"use client";

import { motion } from "framer-motion";

export default function MentionsLegales() {
    return (
        <div className="bg-brand-50 min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-8">Mentions Légales</h1>

                    <div className="glass p-8 md:p-12 rounded-[2rem] space-y-8 text-brand-800 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-serif font-bold text-brand-950 mb-4">1. Édition du site</h2>
                            <p>
                                En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet <strong>latisserie.fr</strong> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
                            </p>
                            <p className="mt-4">
                                <strong>Propriétaire du site :</strong> La Tisserie - Contact : contact@latisserie.fr<br />
                                <strong>Directeur de la publication :</strong> Responsable Editorial La Tisserie.<br />
                                <strong>Hébergeur :</strong> Vercel Inc. - 440 N Barranca Ave #4133 Covina, CA 91723 - support@vercel.com
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-brand-950 mb-4">2. Propriété intellectuelle et contrefaçons</h2>
                            <p>
                                <strong>La Tisserie</strong> est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site internet, notamment les textes, images, graphismes, logos, vidéos, architecture, icônes et sons.
                            </p>
                            <p className="mt-4">
                                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de <strong>La Tisserie</strong>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-brand-950 mb-4">3. Limitations de responsabilité</h2>
                            <p>
                                <strong>La Tisserie</strong> ne pourra être tenu pour responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site <strong>latisserie.fr</strong>.
                            </p>
                            <p className="mt-4">
                                <strong>La Tisserie</strong> décline toute responsabilité quant à l’utilisation qui pourrait être faite des informations et contenus présents sur <strong>latisserie.fr</strong>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-brand-950 mb-4">4. CNIL et gestion des données personnelles</h2>
                            <p>
                                Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’utilisateur du site <strong>latisserie.fr</strong> dispose d’un droit d’accès, de modification et de suppression des informations collectées. Pour exercer ce droit, envoyez un message à notre responsable de traitement : <strong>contact@latisserie.fr</strong>.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-brand-950 mb-4">5. Liens hypertextes et cookies</h2>
                            <p>
                                Le site <strong>latisserie.fr</strong> contient des liens hypertextes vers d’autres sites et dégage toute responsabilité à propos de ces liens externes ou des liens créés par d’autres sites vers <strong>latisserie.fr</strong>.
                            </p>
                            <p className="mt-4">
                                La navigation sur le site <strong>latisserie.fr</strong> est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un "cookie" est un fichier de petite taille qui enregistre des informations relatives à la navigation d’un utilisateur sur un site. Les données ainsi obtenues permettent d'obtenir des mesures de fréquentation, par exemple.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
