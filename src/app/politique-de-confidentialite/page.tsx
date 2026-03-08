"use client";

import { motion } from "framer-motion";

export default function PolitiqueConfidentialite() {
    return (
        <div className="bg-brand-50 min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-900 mb-8">Politique de Confidentialité</h1>

                    <div className="glass p-8 md:p-12 rounded-[2rem] space-y-8 text-brand-800 leading-relaxed">
                        <p>
                            La présente Politique de confidentialité régit la manière dont <strong>La Tisserie</strong> collecte, utilise, conserve et divulgue les informations collectées auprès des utilisateurs du site <strong>latisserie.fr</strong>.
                        </p>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-brand-950 mb-4">1. Données d'identification personnelle</h2>
                            <p>
                                Nous pouvons collecter des informations d'identification personnelle de la part des utilisateurs de diverses manières, y compris, mais sans s'y limiter, lorsque les utilisateurs visitent notre site, s'inscrivent sur le site, remplissent un formulaire, et en rapport avec d'autres activités, services, fonctionnalités ou ressources que nous mettons à disposition sur notre site. Les utilisateurs peuvent être invités à fournir, le cas échéant, leur nom, adresse e-mail, etc.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-brand-950 mb-4">2. Données d'identification non personnelles</h2>
                            <p>
                                Nous pouvons collecter des informations d'identification non personnelles sur les utilisateurs chaque fois qu'ils interagissent avec notre site. Les informations d'identification non personnelles peuvent inclure le nom du navigateur, le type d'ordinateur et des informations techniques sur les moyens de connexion des utilisateurs à notre site, tels que le système d'exploitation et les fournisseurs de services Internet utilisés.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-brand-950 mb-4">3. Cookies du navigateur Web</h2>
                            <p>
                                Notre site peut utiliser des "cookies" pour améliorer l'expérience de l'utilisateur. Le navigateur Web de l'utilisateur place des cookies sur son disque dur à des fins de tenue de dossiers et parfois pour suivre des informations à leur sujet. L'utilisateur peut choisir de configurer son navigateur Web pour refuser les cookies ou pour vous alerter lorsque des cookies sont envoyés.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-brand-950 mb-4">4. Comment nous utilisons les informations collectées</h2>
                            <p>
                                <strong>La Tisserie</strong> peut collecter et utiliser les informations personnelles des utilisateurs aux fins suivantes :
                            </p>
                            <ul className="list-disc ml-6 mt-4 space-y-2">
                                <li>Pour améliorer le service client : les informations que vous fournissez nous aident à répondre plus efficacement à vos demandes de service client et à vos besoins de support.</li>
                                <li>Pour personnaliser l'expérience utilisateur : nous pouvons utiliser les informations dans leur ensemble pour comprendre comment nos utilisateurs en tant que groupe utilisent les services et les ressources fournis sur notre site.</li>
                                <li>Pour améliorer notre site : nous pouvons utiliser les commentaires que vous fournissez pour améliorer nos produits et services.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-brand-950 mb-4">5. Comment nous protégeons vos informations</h2>
                            <p>
                                Nous adoptons des pratiques appropriées de collecte, de stockage et de traitement des données et des mesures de sécurité pour nous protéger contre l'accès non autorisé, l'altération, la divulgation ou la destruction de vos informations personnelles, nom d'utilisateur, mot de passe, informations de transaction et données stockées sur notre site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-brand-950 mb-4">6. Partage de vos informations personnelles</h2>
                            <p>
                                Nous ne vendons, n'échangeons ni ne louons les informations d'identification personnelle des utilisateurs à des tiers. Nous pouvons partager des informations démographiques agrégées génériques non liées à des informations d'identification personnelle concernant les visiteurs et les utilisateurs avec nos partenaires commerciaux, affiliés de confiance et annonceurs aux fins décrites ci-dessus.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-brand-950 mb-4">7. Votre acceptation de ces conditions</h2>
                            <p>
                                En utilisant ce site, vous signifiez votre acceptation de cette politique. Si vous n'acceptez pas cette politique, veuillez ne pas utiliser notre site. Votre utilisation continue du site après la publication de modifications apportées à cette politique sera considérée comme votre acceptation de ces modifications.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-serif font-bold text-brand-950 mb-4">8. Nous contacter</h2>
                            <p>
                                Si vous avez des questions concernant cette politique de confidentialité, les pratiques de ce site ou vos relations avec ce site, veuillez nous contacter à l'adresse suivante : <strong>contact@latisserie.fr</strong>.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
