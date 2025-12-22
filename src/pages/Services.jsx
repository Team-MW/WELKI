import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { ShieldAlert, Leaf, Sparkles, Bug, Rat, Droplets, Ruler, Scissors, Trash2, CheckCircle, Search, Skull, ShieldCheck, Clock, CalendarCheck, TreePine, Flower2, Shovel, Recycle, Building2, Briefcase, HardHat, FileText, UserCheck } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import certibiocideImg from '../assets/certibiocide-1.png';

const Services = ({ defaultTab }) => {
    // Simple scroll to section logic using URL params or props could be implemented
    // For now, laying out all services clearly.

    const headerContent = {
        '3d': {
            title: "Dératisation, Désinsectisation & Désinfection",
            description: "Nous utilisons des méthodes certifiées pour éradiquer tout type de nuisibles tout en préservant votre sécurité.",
            bgClass: "bg-gray-950",
            textClass: "text-[#E71D36]",
            descClass: "text-gray-300"
        },
        'green': {
            title: "Élagage & Entretien de Jardin",
            description: "Nos paysagistes interviennent pour la taille, l'abattage et l'entretien régulier de vos extérieurs.",
            bgClass: "bg-gray-950",
            textClass: "text-[#037971]",
            descClass: "text-gray-300"
        },
        'clean': {
            title: "Entretien & Nettoyage Pro",
            description: "Services de nettoyage pour copropriétés, bureaux et fin de chantier.",
            bgClass: "bg-gray-950",
            textClass: "text-[#0241cd]",
            descClass: "text-gray-300"
        }
    };

    const currentContent = headerContent[defaultTab] || {
        title: "Nos Expertises",
        description: "Des professionnels qualifiés pour des interventions efficaces et durables.",
        bgClass: "bg-gray-950",
        textClass: "text-welki-blue",
        descClass: "text-gray-300"
    };

    return (
        <Layout title="Nos Services" description="Découvrez nos prestations en hygiène 3D et entretien.">
            <div className="bg-gray-950 min-h-screen text-white">
                <Section className="pt-32 pb-16">
                    <div className="text-center">
                        <h1 className={`text-3xl md:text-5xl font-black mb-6 px-4 ${currentContent.textClass}`}>{currentContent.title}</h1>
                        <p className={`text-xl max-w-3xl mx-auto px-4 ${currentContent.descClass}`}>
                            {currentContent.description}
                        </p>
                    </div>
                </Section>

                {/* 3D Section */}
                {(defaultTab === '3d' || !defaultTab) && (
                    <div className="space-y-24">
                        {/* 1. MAIN SERVICES CARDS */}
                        <Section id="3d">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="grid md:grid-cols-3 gap-8"
                            >
                                {/* Dératisation */}
                                <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-[#E71D36] transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-[#E71D36]/10 rounded-2xl flex items-center justify-center text-[#E71D36] mb-6 group-hover:scale-110 transition-transform">
                                        <Rat size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Dératisation</h3>
                                    <p className="text-gray-400 mb-6">
                                        Élimination durable des rongeurs nuisibles. Nous identifions les points d'entrée et mettons en place des solutions sécurisées.
                                    </p>
                                    <ul className="space-y-2 text-gray-300 text-sm font-medium">
                                        {['Rats & Souris', 'Mulots & Campagnols', 'Rebouchage accès'].map(item => (
                                            <li key={item} className="flex items-center gap-2">
                                                <CheckCircle size={14} className="text-[#E71D36]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Désinsectisation */}
                                <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-[#E71D36] transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-[#E71D36]/10 rounded-2xl flex items-center justify-center text-[#E71D36] mb-6 group-hover:scale-110 transition-transform">
                                        <Bug size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Désinsectisation</h3>
                                    <p className="text-gray-400 mb-6">
                                        Traitement choc ou préventif contre tous types d'insectes. Utilisation de gels, pulvérisation ou fumigation selon le cas.
                                    </p>
                                    <ul className="space-y-2 text-gray-300 text-sm font-medium">
                                        {['Cafards & Blattes', 'Punaises de lit', 'Guêpes & Frelons', 'Fourmis & Moustiques'].map(item => (
                                            <li key={item} className="flex items-center gap-2">
                                                <CheckCircle size={14} className="text-[#E71D36]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Désinfection */}
                                <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-[#E71D36] transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-[#E71D36]/10 rounded-2xl flex items-center justify-center text-[#E71D36] mb-6 group-hover:scale-110 transition-transform">
                                        <Droplets size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Désinfection</h3>
                                    <p className="text-gray-400 mb-6">
                                        Assainissement de vos locaux pour éliminer virus, bactéries et moisissures. Idéal après maladie ou débarras.
                                    </p>
                                    <ul className="space-y-2 text-gray-300 text-sm font-medium">
                                        {['Virucide & Bactéricide', 'Traitement odeurs', 'Locaux insalubres'].map(item => (
                                            <li key={item} className="flex items-center gap-2">
                                                <CheckCircle size={14} className="text-[#E71D36]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </Section>

                        {/* 2. METHODOLOGY / HOW WE WORK */}
                        <section className="py-12 bg-gray-900/50">
                            <div className="max-w-7xl mx-auto px-4">
                                <div className="text-center mb-16">
                                    <span className="text-[#E71D36] font-bold tracking-widest uppercase text-sm">Notre Méthode</span>
                                    <h2 className="text-3xl md:text-4xl font-black mt-2">Une intervention en 3 étapes clés</h2>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8 relative">
                                    {/* Line connector for desktop */}
                                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gradient-to-r from-[#E71D36]/20 via-[#E71D36] to-[#E71D36]/20"></div>

                                    {[
                                        {
                                            icon: Search,
                                            title: "1. Diagnostic",
                                            desc: "Analyse complète des lieux pour identifier les nuisibles, leur nid et les points d'entrée."
                                        },
                                        {
                                            icon: Skull,
                                            title: "2. Traitement",
                                            desc: "Application des produits certifiés les plus adaptés (gel, piège, nébulisation) en toute sécurité."
                                        },
                                        {
                                            icon: ShieldCheck,
                                            title: "3. Prévention",
                                            desc: "Conseils et rebouchage des accès pour éviter toute réinfestation future."
                                        }
                                    ].map((step, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.2 }}
                                            viewport={{ once: true }}
                                            className="relative flex flex-col items-center text-center z-10"
                                        >
                                            <div className="w-24 h-24 bg-gray-900 border-4 border-[#E71D36] rounded-full flex items-center justify-center text-[#E71D36] mb-6 shadow-lg shadow-[#E71D36]/20">
                                                <step.icon size={40} />
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                            <p className="text-gray-400 max-w-xs">{step.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* 3. TRUST / CERTIFICATION */}
                        <Section>
                            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700 flex flex-col md:flex-row items-center gap-12">
                                <div className="flex-1">
                                    <div className="inline-block px-4 py-1 bg-[#E71D36]/20 text-[#E71D36] rounded-full font-bold text-sm mb-6">
                                        CERTIFICATION OFFICIELLE
                                    </div>
                                    <h2 className="text-3xl font-black mb-6">Pourquoi choisir WELKI ?</h2>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="bg-[#E71D36]/10 p-3 rounded-xl h-fit">
                                                <ShieldCheck className="text-[#E71D36]" size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">Agréé Certibiocide</h4>
                                                <p className="text-gray-400 text-sm">
                                                    Nos techniciens possèdent la certification d'État obligatoire pour l'usage professionnel de produits biocides.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="bg-[#E71D36]/10 p-3 rounded-xl h-fit">
                                                <Clock className="text-[#E71D36]" size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">Intervention Express</h4>
                                                <p className="text-gray-400 text-sm">
                                                    Nous comprenons l'urgence. Intervention possible sous 24h-48h pour les cas critiques.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-[#E71D36] blur-[60px] opacity-20 rounded-full"></div>
                                        <img
                                            src={certibiocideImg}
                                            alt="Certification Certibiocide Ministère Transition Écologique"
                                            className="relative z-10 w-64 md:w-80 opacity-90 contrast-125 hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Section>
                    </div>
                )}

                {/* Espaces Verts Section */}
                {(defaultTab === 'green' || !defaultTab) && (
                    <div className="space-y-24">
                        {/* 1. MAIN SERVICES CARDS */}
                        <Section id="green">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="grid md:grid-cols-3 gap-8"
                            >
                                {/* Élagage */}
                                <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-[#037971] transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-[#037971]/10 rounded-2xl flex items-center justify-center text-[#037971] mb-6 group-hover:scale-110 transition-transform">
                                        <TreePine size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Élagage & Abattage</h3>
                                    <p className="text-gray-400 mb-6">
                                        Intervention en hauteur sécurisée pour la santé de vos arbres et la sécurité des biens.
                                    </p>
                                    <ul className="space-y-2 text-gray-300 text-sm font-medium">
                                        {['Taille douce & sanitaire', 'Abattage délicat', 'Dessouchage'].map(item => (
                                            <li key={item} className="flex items-center gap-2">
                                                <CheckCircle size={14} className="text-[#037971]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Entretien */}
                                <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-[#037971] transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-[#037971]/10 rounded-2xl flex items-center justify-center text-[#037971] mb-6 group-hover:scale-110 transition-transform">
                                        <Leaf size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Entretien Jardin</h3>
                                    <p className="text-gray-400 mb-6">
                                        Pour un extérieur toujours impeccable, ponctuellement ou en contrat annuel.
                                    </p>
                                    <ul className="space-y-2 text-gray-300 text-sm font-medium">
                                        {['Tonte & Débroussaillage', 'Taille de haies', 'Ramassage feuilles'].map(item => (
                                            <li key={item} className="flex items-center gap-2">
                                                <CheckCircle size={14} className="text-[#037971]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Création */}
                                <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-[#037971] transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-[#037971]/10 rounded-2xl flex items-center justify-center text-[#037971] mb-6 group-hover:scale-110 transition-transform">
                                        <Flower2 size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Paysagisme</h3>
                                    <p className="text-gray-400 mb-6">
                                        Repensez vos espaces verts. Création de massifs, engazonnement et plantations.
                                    </p>
                                    <ul className="space-y-2 text-gray-300 text-sm font-medium">
                                        {['Engazonnement (Rouleau/Semis)', 'Plantations', 'Paillage minéral/végétal'].map(item => (
                                            <li key={item} className="flex items-center gap-2">
                                                <CheckCircle size={14} className="text-[#037971]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </Section>

                        {/* 2. METHODOLOGY */}
                        <section className="py-12 bg-gray-900/50">
                            <div className="max-w-7xl mx-auto px-4">
                                <div className="text-center mb-16">
                                    <span className="text-[#037971] font-bold tracking-widest uppercase text-sm">Le Savoir-Vert</span>
                                    <h2 className="text-3xl md:text-4xl font-black mt-2">Votre jardin entre de bonnes mains</h2>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8 relative">
                                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gradient-to-r from-[#037971]/20 via-[#037971] to-[#037971]/20"></div>

                                    {[
                                        {
                                            icon: Ruler,
                                            title: "1. Visite Technique",
                                            desc: "Évaluation de la santé des végétaux et des contraintes du terrain."
                                        },
                                        {
                                            icon: Scissors,
                                            title: "2. Taille Raisonnée",
                                            desc: "Respect de la physiologie de l'arbre et de la période de floraison."
                                        },
                                        {
                                            icon: Recycle,
                                            title: "3. Finitions & Déchets",
                                            desc: "Chantier laissé propre. Évacuation et recyclage des déchets verts en centre agréé."
                                        }
                                    ].map((step, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.2 }}
                                            viewport={{ once: true }}
                                            className="relative flex flex-col items-center text-center z-10"
                                        >
                                            <div className="w-24 h-24 bg-gray-900 border-4 border-[#037971] rounded-full flex items-center justify-center text-[#037971] mb-6 shadow-lg shadow-[#037971]/20">
                                                <step.icon size={40} />
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                            <p className="text-gray-400 max-w-xs">{step.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* 3. TRUST */}
                        <Section>
                            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700 flex flex-col md:flex-row items-center gap-12">
                                <div className="flex-1">
                                    <div className="inline-block px-4 py-1 bg-[#037971]/20 text-[#037971] rounded-full font-bold text-sm mb-6">
                                        ÉQUIPEMENT PROFESSIONNEL
                                    </div>
                                    <h2 className="text-3xl font-black mb-6">L'expertise WELKI Espaces Verts</h2>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="bg-[#037971]/10 p-3 rounded-xl h-fit">
                                                <Shovel className="text-[#037971]" size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">Matériel Performant</h4>
                                                <p className="text-gray-400 text-sm">
                                                    Broyeurs, rogneuses, nacelles : nous disposons du matériel adapté pour les travaux d'envergure.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="bg-[#037971]/10 p-3 rounded-xl h-fit">
                                                <CalendarCheck className="text-[#037971]" size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">Contrats Annuels</h4>
                                                <p className="text-gray-400 text-sm">
                                                    Planifiez l'entretien de votre résidence sur l'année. Nous gérons le calendrier des interventions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <div className="relative w-full aspect-video bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 flex items-center justify-center">
                                        {/* Abstract Green Graphic or Icon Pattern */}
                                        <div className="absolute inset-0 opacity-20">
                                            <svg className="w-full h-full text-[#037971]" viewBox="0 0 100 100" fill="currentColor">
                                                <pattern id="leaf-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                                    <path d="M10 0 C 15 5, 20 10, 10 20 C 5 15, 0 10, 10 0" fill="currentColor" />
                                                </pattern>
                                                <rect width="100" height="100" fill="url(#leaf-pattern)" />
                                            </svg>
                                        </div>
                                        <div className="z-10 text-center">
                                            <TreePine size={64} className="text-[#037971] mx-auto mb-2" />
                                            <span className="font-bold text-2xl text-white">100% Maîtrise Végétale</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>
                    </div>
                )}

                {/* Nettoyage Section */}
                {(defaultTab === 'clean' || !defaultTab) && (
                    <div className="space-y-24">
                        {/* 1. MAIN SERVICES CARDS */}
                        <Section id="clean">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="grid md:grid-cols-3 gap-8"
                            >
                                {/* Immeubles */}
                                <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-[#0241cd] transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-[#0241cd]/10 rounded-2xl flex items-center justify-center text-[#0241cd] mb-6 group-hover:scale-110 transition-transform">
                                        <Building2 size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Copropriétés</h3>
                                    <p className="text-gray-400 mb-6">
                                        Entretien des parties communes d'immeubles. Gestion des poubelles et nettoyage des halls.
                                    </p>
                                    <ul className="space-y-2 text-gray-300 text-sm font-medium">
                                        {['Entrée & Escaliers', 'Sortie containers poubelles', 'Vitrerie accessible'].map(item => (
                                            <li key={item} className="flex items-center gap-2">
                                                <CheckCircle size={14} className="text-[#0241cd]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bureaux */}
                                <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-[#0241cd] transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-[#0241cd]/10 rounded-2xl flex items-center justify-center text-[#0241cd] mb-6 group-hover:scale-110 transition-transform">
                                        <Briefcase size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Bureaux & Pros</h3>
                                    <p className="text-gray-400 mb-6">
                                        Un environnement de travail sain pour vos collaborateurs. Intervention hors horaires de bureau.
                                    </p>
                                    <ul className="space-y-2 text-gray-300 text-sm font-medium">
                                        {['Dépoussiérage bureaux', 'Sanitaires & Cuisine', 'Sols & Moquettes'].map(item => (
                                            <li key={item} className="flex items-center gap-2">
                                                <CheckCircle size={14} className="text-[#0241cd]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Fin de Chantier */}
                                <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 hover:border-[#0241cd] transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-[#0241cd]/10 rounded-2xl flex items-center justify-center text-[#0241cd] mb-6 group-hover:scale-110 transition-transform">
                                        <HardHat size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Fin de Chantier</h3>
                                    <p className="text-gray-400 mb-6">
                                        Remise en état après travaux ou avant état des lieux. Intervention de fond.
                                    </p>
                                    <ul className="space-y-2 text-gray-300 text-sm font-medium">
                                        {['Évacuation gravats', 'Grattage sols & traces', 'Dépoussiérage fin'].map(item => (
                                            <li key={item} className="flex items-center gap-2">
                                                <CheckCircle size={14} className="text-[#0241cd]" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </Section>

                        {/* 2. METHODOLOGY */}
                        <section className="py-12 bg-gray-900/50">
                            <div className="max-w-7xl mx-auto px-4">
                                <div className="text-center mb-16">
                                    <span className="text-[#0241cd] font-bold tracking-widest uppercase text-sm">Propreté Assurée</span>
                                    <h2 className="text-3xl md:text-4xl font-black mt-2">Processus Qualité</h2>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8 relative">
                                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gradient-to-r from-[#0241cd]/20 via-[#0241cd] to-[#0241cd]/20"></div>

                                    {[
                                        {
                                            icon: FileText,
                                            title: "1. Cahier des Charges",
                                            desc: "Définition précise des fréquences et des zones à traiter selon vos besoins."
                                        },
                                        {
                                            icon: Sparkles,
                                            title: "2. Prestation",
                                            desc: "Agents formés, tenue correcte et matériel professionnel (monobrosse, injecteur-extracteur)."
                                        },
                                        {
                                            icon: UserCheck,
                                            title: "3. Contrôle",
                                            desc: "Suivi régulier de la qualité propreté et satisfaction client."
                                        }
                                    ].map((step, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.2 }}
                                            viewport={{ once: true }}
                                            className="relative flex flex-col items-center text-center z-10"
                                        >
                                            <div className="w-24 h-24 bg-gray-900 border-4 border-[#0241cd] rounded-full flex items-center justify-center text-[#0241cd] mb-6 shadow-lg shadow-[#0241cd]/20">
                                                <step.icon size={40} />
                                            </div>
                                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                            <p className="text-gray-400 max-w-xs">{step.desc}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* 3. TRUST */}
                        <Section>
                            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 border border-gray-700 flex flex-col md:flex-row items-center gap-12">
                                <div className="flex-1">
                                    <div className="inline-block px-4 py-1 bg-[#0241cd]/20 text-[#0241cd] rounded-full font-bold text-sm mb-6">
                                        ENGAGEMENT QUALITÉ
                                    </div>
                                    <h2 className="text-3xl font-black mb-6">La Propreté par WELKI</h2>
                                    <div className="space-y-6">
                                        <div className="flex gap-4">
                                            <div className="bg-[#0241cd]/10 p-3 rounded-xl h-fit">
                                                <ShieldCheck className="text-[#0241cd]" size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">Personnel de Confiance</h4>
                                                <p className="text-gray-400 text-sm">
                                                    Nos agents sont rigoureusement sélectionnés pour leur sérieux, leur discrétion et leur efficacité.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="bg-[#0241cd]/10 p-3 rounded-xl h-fit">
                                                <Leaf className="text-[#0241cd]" size={24} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-lg mb-1">Produits Écolabel</h4>
                                                <p className="text-gray-400 text-sm">
                                                    Nous privilégions l'utilisation de produits respectueux de l'environnement et de la santé des occupants.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <div className="relative w-full aspect-video bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 flex items-center justify-center">
                                        {/* Abstract Blue Graphic */}
                                        <div className="absolute inset-0 opacity-20">
                                            <svg className="w-full h-full text-[#0241cd]" viewBox="0 0 100 100" fill="currentColor">
                                                <pattern id="clean-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                                    <circle cx="2" cy="2" r="1" fill="currentColor" />
                                                    <circle cx="12" cy="12" r="1" fill="currentColor" />
                                                </pattern>
                                                <rect width="100" height="100" fill="url(#clean-pattern)" />
                                            </svg>
                                        </div>
                                        <div className="z-10 text-center">
                                            <Sparkles size={64} className="text-[#0241cd] mx-auto mb-2" />
                                            <span className="font-bold text-2xl text-white">Techniques Pro</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>
                    </div>
                )}
            </div>
        </Layout>
    );

};

export default Services;
