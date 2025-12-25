import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { ShieldAlert, Leaf, Sparkles, Bug, Rat, Droplets, Ruler, Scissors, Trash2, CheckCircle, Search, Skull, ShieldCheck, Clock, CalendarCheck, TreePine, Flower2, Shovel, Recycle, Building2, Briefcase, HardHat, FileText, UserCheck, Home, Warehouse, Utensils, Hotel, AlertTriangle, UtensilsCrossed, Wind, TrendingUp, Baby, ArrowRight } from 'lucide-react';

import { useSearchParams } from 'react-router-dom';
import certibiocideImg from '../assets/certibiocide-1.png';
import img3DMain from '../assets/full-shot-man-holding-disinfectant-tank.jpg';
import img3DDisinfection from '../assets/unrecognizable-person-white-chemical-protection-suit-doing-disinfection-public-areas-stop-spreading-highly-contagious-corona-virus.jpg';
import imgGreenMain from '../assets/man-uniform-trimming-hedge-summer-time.jpg';

import imgCleanMain from '../assets/full-shot-man-vacuuming-office-floor.jpg';
import imgCafardBg from '../assets/cafard.jpg';
import imgRatBg from '../assets/rat.jpg';

import imgGreenBg from '../assets/espacevert.jpg';
import imgCleanBg from '../assets/netoyagepro.jpg';
import imgPaysagisme1 from '../assets/paysagisme.jpg';
import imgPaysagisme2 from '../assets/paysagisme2.jpg';

const Services = ({ defaultTab }) => {
    // Simple scroll to section logic using URL params or props could be implemented
    // For now, laying out all services clearly.

    const headerContent = {
        '3d': {
            title: "Dératisation, Désinsectisation & Désinfection",
            description: "Nous utilisons des méthodes certifiées pour éradiquer tout type de nuisibles tout en préservant votre sécurité.",
            bgClass: "bg-gray-950",
            textClass: "text-white",
            descClass: "text-gray-100",
            bgImage: imgCafardBg,
            btnColor: "bg-[#E71D36]"
        },
        'green': {
            title: "Élagage & Entretien de Jardin",
            description: "Nos paysagistes interviennent pour la taille, l'abattage et l'entretien régulier de vos extérieurs.",
            bgClass: "bg-gray-950",
            textClass: "text-[#037971]",
            descClass: "text-gray-100",
            bgImage: imgPaysagisme1,
            btnColor: "bg-[#037971]"
        },
        'clean': {
            title: "Entretien & Nettoyage Pro",
            description: "Services de nettoyage pour copropriétés, bureaux et fin de chantier.",
            bgClass: "bg-gray-950",
            textClass: "text-white",
            descClass: "text-gray-100",
            bgImage: imgCleanBg,
            btnColor: "bg-[#0241cd]"
        }
    };

    const currentContent = headerContent[defaultTab] || {
        title: "Nos Expertises",
        description: "Des professionnels qualifiés pour des interventions efficaces et durables.",
        bgClass: "bg-gray-950",
        textClass: "text-welki-blue",
        descClass: "text-gray-300",
        btnColor: "bg-welki-blue"
    };

    return (
        <Layout title="Nos Services" description="Découvrez nos prestations en hygiène 3D et entretien.">
            <div className="bg-gray-950 min-h-screen text-white">
                <Section
                    className="pt-32 pb-16 md:pt-48 md:pb-32 relative overflow-hidden"
                >
                    {/* Clean Background Image with Subtle Overlay */}
                    {currentContent.bgImage && (
                        <>
                            <div
                                className="absolute inset-0 z-0 scale-105"
                                style={{
                                    backgroundImage: `url(${currentContent.bgImage})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            ></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/60 to-gray-900/30 z-0"></div>
                        </>
                    )}

                    <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-[40vh]">

                        {/* Premium Glassmorphic Card */}
                        <div className="relative max-w-5xl mx-auto w-full">
                            {/* Dynamic Glow Effect behind the card */}
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] ${currentContent.btnColor.replace('bg-', 'bg-')}/20 blur-[100px] rounded-full pointer-events-none`}></div>

                            <div className={`relative bg-gray-900/60 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-gray-700/50 text-center overflow-hidden group hover:border-gray-600 transition-all duration-500`}>
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-tr from-gray-950 via-transparent to-${currentContent.bgClass === 'bg-gray-950' ? 'gray-800' : 'gray-900'}/10 opacity-50`}></div>

                                <div className="relative z-10">
                                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 border ${currentContent.textClass.replace('text-', 'border-').replace('white', 'gray-100')} ${currentContent.textClass} bg-gray-900/50 backdrop-blur-md shadow-lg`}>
                                        /// SERVICES PROFESSIONNELS
                                    </span>

                                    <h1 className="text-5xl md:text-7xl font-black mb-8 px-4 leading-tight text-white drop-shadow-xl tracking-tight">
                                        {currentContent.title.split(' & ').map((part, i, arr) => (
                                            <React.Fragment key={i}>
                                                {part}
                                                {i < arr.length - 1 && <span className={`${currentContent.textClass} opacity-80`}> & </span>}
                                            </React.Fragment>
                                        ))}
                                    </h1>

                                    <p className={`text-xl md:text-2xl max-w-3xl mx-auto px-4 mb-12 leading-relaxed font-medium ${currentContent.descClass}`}>
                                        {currentContent.description}
                                    </p>

                                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                        <a
                                            href="/contact"
                                            className={`${currentContent.btnColor} text-white font-bold py-5 px-12 rounded-2xl shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.2)] hover:scale-[1.02] transition-all transform inline-flex items-center gap-3 text-lg border-t border-white/20`}
                                        >
                                            <span>Demander un devis</span>
                                            <ArrowRight size={22} strokeWidth={2.5} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 3D Section */}
                {(defaultTab === '3d' || !defaultTab) && (
                    <div className="space-y-24">
                        {/* 1.5 VISUAL & TARGETS */}
                        <section className="py-24 bg-gray-950 relative overflow-hidden">
                            {/* Decorative background elements matching the futuristic theme */}
                            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E71D36]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E71D36]/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                                <div className="grid md:grid-cols-2 gap-16 items-center">
                                    {/* Left Image Column */}
                                    <div className="relative group rounded-3xl overflow-hidden cursor-pointer shadow-[0_0_50px_-10px_rgba(231,29,54,0.15)] border border-gray-800 h-[600px] hover:border-[#E71D36]/50 transition-all duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10"></div>
                                        <div className="absolute inset-0 bg-[#E71D36]/10 mix-blend-overlay z-10 group-hover:bg-[#E71D36]/0 transition-colors duration-700"></div>

                                        <img src={img3DMain} alt="Expert Hygiène 3D" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter contrast-125 saturate-0 group-hover:saturate-100" />

                                        <div className="absolute bottom-0 left-0 right-0 p-10 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="inline-flex items-center gap-2 bg-[#E71D36] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 shadow-[0_0_20px_rgba(231,29,54,0.4)]">
                                                <Sparkles size={12} /> EXPERTISE TOTALE
                                            </div>
                                            <h3 className="text-4xl font-black text-white leading-tight mb-4 drop-shadow-lg">
                                                Lutte Anti-Nuisibles
                                            </h3>
                                            <p className="text-gray-300 text-sm leading-relaxed max-w-md border-l-2 border-[#E71D36] pl-4">
                                                Des solutions radicales et pérennes contre les rongeurs, insectes et agents pathogènes. Une intervention rapide et discrète.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right Content Column */}
                                    <div>
                                        <div className="mb-8">
                                            <span className="text-[#E71D36] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                                /// CIBLES IDENTIFIÉES
                                            </span>
                                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                                Nous traitons <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71D36] to-red-400">tous types</span> d'infestations
                                            </h2>
                                            <p className="text-gray-400 text-lg">
                                                Notre expertise couvre l'ensemble du spectre des nuisibles pour garantir un environnement sain et sécurisé.
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {[
                                                { name: "Rats & Souris", icon: Rat },
                                                { name: "Cafards / Blattes", icon: Bug },
                                                { name: "Punaises de Lit", icon: Skull },
                                                { name: "Frelons / Guêpes", icon: ShieldAlert },
                                                { name: "Fourmis", icon: Droplets },
                                                { name: "Mites & Puces", icon: Scissors }
                                            ].map((pest, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center p-4 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-[#E71D36] hover:bg-gray-800/80 transition-all duration-300 group cursor-default backdrop-blur-sm"
                                                >
                                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#E71D36]/10 text-[#E71D36] mr-4 group-hover:scale-110 group-hover:bg-[#E71D36] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(231,29,54,0.1)] group-hover:shadow-[0_0_20px_rgba(231,29,54,0.4)]">
                                                        <pest.icon size={22} strokeWidth={2} />
                                                    </div>
                                                    <span className="font-bold text-gray-300 group-hover:text-white transition-colors text-lg">{pest.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 1. MAIN SERVICES CARDS */}
                        <Section id="3d">
                            <div className="text-center mb-16 relative z-10">
                                <span className="text-[#E71D36] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                    /// NOS DOMAINES D'EXPERTISE
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                    Une Protection <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71D36] to-red-400">Complète</span>
                                </h2>
                                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                    Des experts qualifiés pour chaque typologie d'intervention.
                                </p>
                            </div>

                            <div
                                className="grid md:grid-cols-3 gap-8"
                            >
                                {/* Dératisation */}
                                <div
                                    className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-[#E71D36]/50 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_40px_-5px_rgba(231,29,54,0.3)] hover:-translate-y-2"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#E71D36]/0 via-transparent to-[#E71D36]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="w-16 h-16 bg-[#E71D36]/10 rounded-2xl flex items-center justify-center text-[#E71D36] mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(231,29,54,0.3)] shadow-inner border border-[#E71D36]/20 relative z-10">
                                        <Rat size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 relative z-10">Dératisation</h3>
                                    <p className="text-gray-400 mb-8 relative z-10 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        Élimination durable des rongeurs nuisibles. Nous identifions les points d'entrée et mettons en place des solutions sécurisées.
                                    </p>
                                    <ul className="space-y-4 text-gray-300 text-sm font-medium relative z-10">
                                        {['Rats & Souris', 'Mulots & Campagnols', 'Rebouchage accès'].map(item => (
                                            <li key={item} className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-[#E71D36]/10 flex items-center justify-center border border-[#E71D36]/20 text-[#E71D36] shadow-[0_0_10px_rgba(231,29,54,0.2)]">
                                                    <CheckCircle size={12} />
                                                </div>
                                                <span className="group-hover:text-white transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Désinsectisation */}
                                <div
                                    className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-[#E71D36]/50 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_40px_-5px_rgba(231,29,54,0.3)] hover:-translate-y-2"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#E71D36]/0 via-transparent to-[#E71D36]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="w-16 h-16 bg-[#E71D36]/10 rounded-2xl flex items-center justify-center text-[#E71D36] mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(231,29,54,0.3)] shadow-inner border border-[#E71D36]/20 relative z-10">
                                        <Bug size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 relative z-10">Désinsectisation</h3>
                                    <p className="text-gray-400 mb-8 relative z-10 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        Traitement choc ou préventif contre tous types d'insectes. Utilisation de gels, pulvérisation ou fumigation selon le cas.
                                    </p>
                                    <ul className="space-y-4 text-gray-300 text-sm font-medium relative z-10">
                                        {['Cafards & Blattes', 'Punaises de lit', 'Guêpes & Frelons', 'Fourmis & Moustiques'].map(item => (
                                            <li key={item} className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-[#E71D36]/10 flex items-center justify-center border border-[#E71D36]/20 text-[#E71D36] shadow-[0_0_10px_rgba(231,29,54,0.2)]">
                                                    <CheckCircle size={12} />
                                                </div>
                                                <span className="group-hover:text-white transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Désinfection */}
                                <div
                                    className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-[#E71D36]/50 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_40px_-5px_rgba(231,29,54,0.3)] hover:-translate-y-2"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#E71D36]/0 via-transparent to-[#E71D36]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="w-16 h-16 bg-[#E71D36]/10 rounded-2xl flex items-center justify-center text-[#E71D36] mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(231,29,54,0.3)] shadow-inner border border-[#E71D36]/20 relative z-10">
                                        <Droplets size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-4 relative z-10">Désinfection</h3>
                                    <p className="text-gray-400 mb-8 relative z-10 leading-relaxed group-hover:text-gray-300 transition-colors">
                                        Assainissement de vos locaux pour éliminer virus, bactéries et moisissures. Idéal après maladie ou débarras.
                                    </p>
                                    <ul className="space-y-4 text-gray-300 text-sm font-medium relative z-10">
                                        {['Virucide & Bactéricide', 'Traitement odeurs', 'Locaux insalubres'].map(item => (
                                            <li key={item} className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-[#E71D36]/10 flex items-center justify-center border border-[#E71D36]/20 text-[#E71D36] shadow-[0_0_10px_rgba(231,29,54,0.2)]">
                                                    <CheckCircle size={12} />
                                                </div>
                                                <span className="group-hover:text-white transition-colors">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Section>

                        {/* 1.8 DANGERS SECTION (New) */}
                        <section className="py-20 bg-gray-900 overflow-hidden relative">
                            {/* Background Gradients */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E71D36]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E71D36]/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                                <div className="text-center mb-16">
                                    <span className="text-[#E71D36] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                        /// RISQUES MAJEURS
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                                        Les <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71D36] to-red-400">dangers</span> et nuisances
                                    </h2>
                                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                        Pourquoi il est <span className="text-[#E71D36] font-bold">urgent</span> d'agir rapidement pour protéger votre environnement.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    {[
                                        {
                                            icon: AlertTriangle,
                                            title: "Maladies et bactéries",
                                            desc: "Les cafards transportent de nombreuses bactéries et peuvent transmettre des maladies."
                                        },
                                        {
                                            icon: UtensilsCrossed,
                                            title: "Contamination alimentaire",
                                            desc: "Ils souillent la nourriture et les surfaces de cuisine par leurs déjections."
                                        },
                                        {
                                            icon: Wind,
                                            title: "Allergies et asthme",
                                            desc: "Leurs déjections et mues peuvent déclencher allergies et crises d'asthme."
                                        },
                                        {
                                            icon: TrendingUp,
                                            title: "Reproduction explosive",
                                            desc: "Une femelle peut produire jusqu'à 400 descendants en une année."
                                        },
                                        {
                                            icon: Home,
                                            title: "Invasion totale",
                                            desc: "Ils colonisent rapidement cuisine, salle de bain et tous les recoins humides."
                                        },
                                        {
                                            icon: Baby,
                                            title: "Risque sanitaire",
                                            desc: "Particulièrement dangereux pour les enfants, personnes âgées et immunodéprimées."
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-gray-900/40 backdrop-blur-md rounded-3xl p-8 text-center border border-gray-800 hover:border-[#E71D36]/50 transition-all duration-300 flex flex-col items-center group relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(231,29,54,0.15)]">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#E71D36]/0 via-transparent to-[#E71D36]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                            <div className="w-20 h-20 bg-[#E71D36]/10 rounded-2xl flex items-center justify-center text-[#E71D36] mb-6 shadow-inner border border-[#E71D36]/20 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(231,29,54,0.3)] transition-all duration-300 relative z-10">
                                                <item.icon size={36} strokeWidth={1.5} />
                                            </div>
                                            <h3 className="text-white font-extrabold text-xl mb-4 relative z-10 group-hover:text-[#E71D36] transition-colors">{item.title}</h3>
                                            <p className="text-gray-400 text-base leading-relaxed relative z-10 group-hover:text-gray-300 transition-colors">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* 2. METHODOLOGY */}
                        <section className="py-24 bg-gray-950 relative overflow-hidden">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-[#E71D36]/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                            <div className="max-w-7xl mx-auto px-4 relative z-10">
                                <div className="grid md:grid-cols-2 gap-20 items-center">
                                    <div className="order-2 md:order-1">
                                        <div className="text-left mb-12">
                                            <span className="text-[#E71D36] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                                /// NOTRE MÉTHODE
                                            </span>
                                            <h2 className="text-4xl md:text-5xl font-black mt-2 text-white leading-tight">
                                                Une intervention en <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71D36] to-red-400">3 étapes clés</span>
                                            </h2>
                                            <p className="text-gray-400 mt-6 text-lg border-l-2 border-[#E71D36] pl-6 py-2 bg-gradient-to-r from-[#E71D36]/5 to-transparent">
                                                Un processus rigoureux pour garantir l'éradication totale des nuisibles et prévenir leur retour.
                                            </p>
                                        </div>

                                        <div className="space-y-8 relative pl-4">
                                            {/* Connecting Line */}
                                            <div className="absolute left-[2.35rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#E71D36] via-[#E71D36]/30 to-gray-800"></div>

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
                                                <div key={i} className="relative flex items-start z-10 group">
                                                    <div className="w-14 h-14 bg-gray-900 border border-[#E71D36]/30 rounded-2xl flex items-center justify-center text-[#E71D36] mr-8 shrink-0 shadow-[0_0_20px_-5px_rgba(231,29,54,0.3)] group-hover:bg-[#E71D36] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(231,29,54,0.5)] group-hover:scale-110 transition-all duration-300">
                                                        <step.icon size={24} strokeWidth={2} />
                                                    </div>
                                                    <div className="pt-1">
                                                        <h3 className="text-2xl font-black mb-2 text-white group-hover:text-[#E71D36] transition-colors">{step.title}</h3>
                                                        <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">{step.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="order-1 md:order-2">
                                        <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-[0_0_50px_-10px_rgba(231,29,54,0.2)] group h-[600px] hover:border-[#E71D36]/50 transition-all duration-500">
                                            <div className="absolute inset-0 bg-[#E71D36]/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                                            <img src={img3DDisinfection} alt="Technicien en combinaison" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter contrast-125 saturate-0 group-hover:saturate-100" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent z-10"></div>

                                            <div className="absolute bottom-0 left-0 right-0 p-10 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="bg-[#E71D36] w-12 h-1.5 rounded-full shadow-[0_0_10px_#E71D36]"></div>
                                                    <span className="text-white font-bold uppercase tracking-wider text-sm shadow-black drop-shadow-md">Sécurité Maximale</span>
                                                </div>
                                                <blockquote className="text-white text-xl md:text-2xl font-medium italic leading-relaxed border-l-4 border-[#E71D36] pl-6 bg-black/30 backdrop-blur-sm p-4 rounded-r-xl">
                                                    "Nos protocoles respectent strictement les normes sanitaires pour protéger votre santé et votre environnement."
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* 3. INTERVENTION SITES */}
                        <section className="py-24 bg-gray-900 overflow-hidden relative">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E71D36]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                                <div className="text-center mb-16">
                                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                                        Lieux d'<span className="text-[#E71D36]">intervention</span>
                                    </h2>
                                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
                                        Nos techniciens adaptent leurs protocoles en fonction de votre environnement pour une efficacité maximale.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-4 gap-6">
                                    {[
                                        { title: "Habitations", icon: Home, desc: "Maisons, Appartements, Caves" },
                                        { title: "Restauration", icon: Utensils, desc: "Cuisines, Salles, Stockage" },
                                        { title: "Hôtellerie", icon: Hotel, desc: "Chambres, Linge, Communs" },
                                        { title: "Industrie", icon: Warehouse, desc: "Entrepôts, Usines, Bureaux" }
                                    ].map((place, i) => (
                                        <div key={i} className="bg-gray-900/40 backdrop-blur-sm p-8 rounded-3xl text-center border border-gray-800 hover:border-[#E71D36] transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(231,29,54,0.15)] flex flex-col items-center">
                                            <div className="w-20 h-20 bg-[#E71D36]/5 rounded-2xl flex items-center justify-center text-[#E71D36] group-hover:bg-[#E71D36] group-hover:text-white transition-all duration-300 mb-6 shadow-inner border border-[#E71D36]/10 group-hover:shadow-[0_0_20px_rgba(231,29,54,0.4)] group-hover:scale-110">
                                                <place.icon size={36} strokeWidth={1.5} />
                                            </div>
                                            <h4 className="font-black text-white text-xl mb-3 group-hover:text-[#E71D36] transition-colors">{place.title}</h4>
                                            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{place.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* 3. TRUST / CERTIFICATION - REDESIGNED */}
                        <section className="py-24 bg-gray-950 relative overflow-hidden">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-[#E71D36]/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                            <div className="max-w-7xl mx-auto px-4 relative z-10">
                                <div className="grid md:grid-cols-2 gap-20 items-center">
                                    <div className="order-2 md:order-1">
                                        <div className="text-left mb-12">
                                            <span className="text-[#E71D36] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                                /// POURQUOI CHOISIR WELKI ?
                                            </span>
                                            <h2 className="text-4xl md:text-5xl font-black mt-2 text-white leading-tight">
                                                L'Expertise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71D36] to-red-400">Certifiée</span>
                                            </h2>
                                            <p className="text-gray-400 mt-6 text-lg border-l-2 border-[#E71D36] pl-6 py-2 bg-gradient-to-r from-[#E71D36]/5 to-transparent">
                                                La garantie d'une prestations respectant les normes les plus strictes.
                                            </p>
                                        </div>

                                        <div className="space-y-8 relative pl-4">
                                            <div className="absolute left-[2.35rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#E71D36] via-[#E71D36]/30 to-gray-800"></div>

                                            <div className="relative flex items-start z-10 group">
                                                <div className="w-14 h-14 bg-gray-900 border border-[#E71D36]/30 rounded-2xl flex items-center justify-center text-[#E71D36] mr-8 shrink-0 shadow-[0_0_20px_-5px_rgba(231,29,54,0.3)] group-hover:bg-[#E71D36] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(231,29,54,0.5)] group-hover:scale-110 transition-all duration-300">
                                                    <ShieldCheck size={24} strokeWidth={2} />
                                                </div>
                                                <div className="pt-1">
                                                    <h3 className="text-2xl font-black mb-2 text-white group-hover:text-[#E71D36] transition-colors">Agréé Certibiocide</h3>
                                                    <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                                                        Nos techniciens possèdent la certification d'État obligatoire pour l'usage professionnel de produits biocides.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="relative flex items-start z-10 group">
                                                <div className="w-14 h-14 bg-gray-900 border border-[#E71D36]/30 rounded-2xl flex items-center justify-center text-[#E71D36] mr-8 shrink-0 shadow-[0_0_20px_-5px_rgba(231,29,54,0.3)] group-hover:bg-[#E71D36] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(231,29,54,0.5)] group-hover:scale-110 transition-all duration-300">
                                                    <Clock size={24} strokeWidth={2} />
                                                </div>
                                                <div className="pt-1">
                                                    <h3 className="text-2xl font-black mb-2 text-white group-hover:text-[#E71D36] transition-colors">Intervention Express</h3>
                                                    <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                                                        Nous comprenons l'urgence. Intervention possible sous 24h-48h pour les cas critiques.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="relative flex items-start z-10 group">
                                                <div className="w-14 h-14 bg-gray-900 border border-[#E71D36]/30 rounded-2xl flex items-center justify-center text-[#E71D36] mr-8 shrink-0 shadow-[0_0_20px_-5px_rgba(231,29,54,0.3)] group-hover:bg-[#E71D36] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(231,29,54,0.5)] group-hover:scale-110 transition-all duration-300">
                                                    <Briefcase size={24} strokeWidth={2} />
                                                </div>
                                                <div className="pt-1">
                                                    <h3 className="text-2xl font-black mb-2 text-white group-hover:text-[#E71D36] transition-colors">Gestion Centralisée</h3>
                                                    <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                                                        Un seul interlocuteur pour l'ensemble de vos services (3D, Espaces Verts, Nettoyage).
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="order-1 md:order-2 flex justify-center">
                                        <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-[0_0_50px_-10px_rgba(231,29,54,0.2)] group hover:border-[#E71D36]/50 transition-all duration-500 bg-gray-900 p-8 w-full max-w-md h-[500px] flex items-center justify-center">
                                            <div className="absolute inset-0 bg-[#E71D36]/5 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent z-10"></div>

                                            <div className="relative z-20 text-center">
                                                <div className="absolute inset-0 bg-[#E71D36] blur-[80px] opacity-20 rounded-full animate-pulse"></div>
                                                <img
                                                    src={certibiocideImg}
                                                    alt="Certification Certibiocide Ministère Transition Écologique"
                                                    className="relative z-10 w-64 md:w-80 opacity-90 contrast-125 hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                                                />
                                                <div className="mt-8">
                                                    <span className="text-white font-bold uppercase tracking-widest text-sm border-b-2 border-[#E71D36] pb-1">Garantie d'État</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div >
                )
                }

                {/* Espaces Verts Section */}
                {
                    (defaultTab === 'green' || !defaultTab) && (
                        <div className="space-y-24">
                            {/* 1. MAIN SERVICES CARDS - GREEN */}
                            <Section id="green">
                                <div className="text-center mb-16 relative z-10">
                                    <span className="text-[#037971] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                        /// NOS PRESTATIONS
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                        L'Excellence <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#037971] to-teal-400">Végétale</span>
                                    </h2>
                                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                        De la création à l'entretien, nous valorisons votre patrimoine vert avec expertise et passion.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    {/* Élagage */}
                                    <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-[#037971]/50 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_40px_-5px_rgba(3,121,113,0.3)] hover:-translate-y-2">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#037971]/0 via-transparent to-[#037971]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="w-16 h-16 bg-[#037971]/10 rounded-2xl flex items-center justify-center text-[#037971] mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(3,121,113,0.3)] shadow-inner border border-[#037971]/20 relative z-10">
                                            <TreePine size={32} />
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-4 relative z-10">Élagage & Abattage</h3>
                                        <p className="text-gray-400 mb-8 relative z-10 leading-relaxed group-hover:text-gray-300 transition-colors">
                                            Intervention en hauteur sécurisée pour la santé de vos arbres et la sécurité des biens.
                                        </p>
                                        <ul className="space-y-4 text-gray-300 text-sm font-medium relative z-10">
                                            {['Taille douce & sanitaire', 'Abattage délicat', 'Dessouchage', 'Diagnostic phytosanitaire', 'Haubanage de sécurité'].map(item => (
                                                <li key={item} className="flex items-center gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-[#037971]/10 flex items-center justify-center border border-[#037971]/20 text-[#037971] shadow-[0_0_10px_rgba(3,121,113,0.2)]">
                                                        <CheckCircle size={12} />
                                                    </div>
                                                    <span className="group-hover:text-white transition-colors">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Entretien */}
                                    <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-[#037971]/50 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_40px_-5px_rgba(3,121,113,0.3)] hover:-translate-y-2">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#037971]/0 via-transparent to-[#037971]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="w-16 h-16 bg-[#037971]/10 rounded-2xl flex items-center justify-center text-[#037971] mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(3,121,113,0.3)] shadow-inner border border-[#037971]/20 relative z-10">
                                            <Leaf size={32} />
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-4 relative z-10">Entretien Jardin</h3>
                                        <p className="text-gray-400 mb-8 relative z-10 leading-relaxed group-hover:text-gray-300 transition-colors">
                                            Pour un extérieur toujours impeccable, ponctuellement ou en contrat annuel.
                                        </p>
                                        <ul className="space-y-4 text-gray-300 text-sm font-medium relative z-10">
                                            {['Tonte & Débroussaillage', 'Taille de haies', 'Ramassage feuilles', 'Scarification pelouse', "Apport d'engrais bio"].map(item => (
                                                <li key={item} className="flex items-center gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-[#037971]/10 flex items-center justify-center border border-[#037971]/20 text-[#037971] shadow-[0_0_10px_rgba(3,121,113,0.2)]">
                                                        <CheckCircle size={12} />
                                                    </div>
                                                    <span className="group-hover:text-white transition-colors">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Création */}
                                    <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-[#037971]/50 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_40px_-5px_rgba(3,121,113,0.3)] hover:-translate-y-2">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#037971]/0 via-transparent to-[#037971]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="w-16 h-16 bg-[#037971]/10 rounded-2xl flex items-center justify-center text-[#037971] mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(3,121,113,0.3)] shadow-inner border border-[#037971]/20 relative z-10">
                                            <Flower2 size={32} />
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-4 relative z-10">Paysagisme</h3>
                                        <p className="text-gray-400 mb-8 relative z-10 leading-relaxed group-hover:text-gray-300 transition-colors">
                                            Repensez vos espaces verts. Création de massifs, engazonnement et plantations.
                                        </p>
                                        <ul className="space-y-4 text-gray-300 text-sm font-medium relative z-10">
                                            {['Engazonnement', 'Plantations & Massifs', 'Paillage minéral/végétal', 'Arrosage automatique', 'Maçonnerie paysagère'].map(item => (
                                                <li key={item} className="flex items-center gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-[#037971]/10 flex items-center justify-center border border-[#037971]/20 text-[#037971] shadow-[0_0_10px_rgba(3,121,113,0.2)]">
                                                        <CheckCircle size={12} />
                                                    </div>
                                                    <span className="group-hover:text-white transition-colors">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Section>




                            {/* 2. METHODOLOGY - GREEN - REDESIGNED */}
                            <section className="py-24 bg-gray-950 relative overflow-hidden">
                                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#037971]/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                                <div className="max-w-7xl mx-auto px-4 relative z-10">
                                    <div className="grid md:grid-cols-2 gap-20 items-center">
                                        <div className="order-2 md:order-1">
                                            <div className="text-left mb-12">
                                                <span className="text-[#037971] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                                    /// LE SAVOIR-VERT
                                                </span>
                                                <h2 className="text-4xl md:text-5xl font-black mt-2 text-white leading-tight">
                                                    Votre jardin entre <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#037971] to-teal-400">de bonnes mains</span>
                                                </h2>
                                                <p className="text-gray-400 mt-6 text-lg border-l-2 border-[#037971] pl-6 py-2 bg-gradient-to-r from-[#037971]/5 to-transparent">
                                                    Un engagement pour la biodiversité et l'esthétisme de vos extérieurs.
                                                </p>
                                            </div>

                                            <div className="space-y-8 relative pl-4">
                                                <div className="absolute left-[2.35rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#037971] via-[#037971]/30 to-gray-800"></div>

                                                {[
                                                    { icon: Ruler, title: "1. Visite Technique", desc: "Évaluation précise de la santé des végétaux, analyse du sol et des contraintes d'accès." },
                                                    { icon: Scissors, title: "2. Taille Raisonnée", desc: "Respect strict de la physiologie de l'arbre et des périodes de floraison pour une repousse saine." },
                                                    { icon: Recycle, title: "3. Finitions & Déchets", desc: "Chantier laissé impeccable. Broyage sur place ou évacuation en centre de compostage agréé." }
                                                ].map((step, i) => (
                                                    <div key={i} className="relative flex items-start z-10 group">
                                                        <div className="w-14 h-14 bg-gray-900 border border-[#037971]/30 rounded-2xl flex items-center justify-center text-[#037971] mr-8 shrink-0 shadow-[0_0_20px_-5px_rgba(3,121,113,0.3)] group-hover:bg-[#037971] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(3,121,113,0.5)] group-hover:scale-110 transition-all duration-300">
                                                            <step.icon size={24} strokeWidth={2} />
                                                        </div>
                                                        <div className="pt-1">
                                                            <h3 className="text-xl font-black mb-2 text-white group-hover:text-[#037971] transition-colors">{step.title}</h3>
                                                            <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">{step.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="order-1 md:order-2">
                                            <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-[0_0_50px_-10px_rgba(3,121,113,0.2)] group h-[600px] hover:border-[#037971]/50 transition-all duration-500">
                                                <div className="absolute inset-0 bg-[#037971]/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                                                <img src={imgGreenMain} alt="Jardinier paysagiste" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 group-hover:saturate-100" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent z-10"></div>

                                                <div className="absolute bottom-0 left-0 right-0 p-10 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <div className="bg-[#037971] w-12 h-1.5 rounded-full shadow-[0_0_10px_#037971]"></div>
                                                        <span className="text-white font-bold uppercase tracking-wider text-sm shadow-black drop-shadow-md">Passion Jardin</span>
                                                    </div>
                                                    <blockquote className="text-white text-xl md:text-2xl font-medium italic leading-relaxed border-l-4 border-[#037971] pl-6 bg-black/30 backdrop-blur-sm p-4 rounded-r-xl">
                                                        "Un jardin entretenu, c'est un espace de vie valorisé et respectueux de la nature."
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* PAYSAGISME GALLERY - REDESIGNED */}
                            <section className="py-24 bg-gray-900 relative overflow-hidden">
                                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#037971]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                                <div className="max-w-7xl mx-auto px-4 relative z-10">
                                    <div className="text-center mb-16">
                                        <span className="text-[#037971] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                            /// NOS RÉALISATIONS
                                        </span>
                                        <h2 className="text-4xl md:text-5xl font-black mt-2 text-white leading-tight">
                                            L'Art du <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#037971] to-teal-400">Paysagisme</span>
                                        </h2>
                                        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
                                            Transformez vos extérieurs en véritables havres de paix grâce à notre expertise en aménagement paysager.
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-gray-800 h-[500px] hover:border-[#037971]/50 transition-all duration-500 hover:-translate-y-2">
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                                            <img
                                                src={imgPaysagisme1}
                                                alt="Aménagement paysager réalisation"
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-10 h-1 bg-[#037971] rounded-full shadow-[0_0_10px_#037971]"></div>
                                                    <span className="text-white font-bold text-sm uppercase tracking-wider shadow-black drop-shadow-md">Création</span>
                                                </div>
                                                <h3 className="text-3xl font-bold text-white mb-2">Aménagement Sur Mesure</h3>
                                                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                    Conception unique adaptée à votre terrain et vos envies.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-gray-800 h-[500px] hover:border-[#037971]/50 transition-all duration-500 hover:-translate-y-2">
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                                            <img
                                                src={imgPaysagisme2}
                                                alt="Entretien paysager réalisation"
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-10 h-1 bg-[#037971] rounded-full shadow-[0_0_10px_#037971]"></div>
                                                    <span className="text-white font-bold text-sm uppercase tracking-wider shadow-black drop-shadow-md">Entretien</span>
                                                </div>
                                                <h3 className="text-3xl font-bold text-white mb-2">Espaces Valorisés</h3>
                                                <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                                    Soins réguliers pour un jardin resplendissant toute l'année.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 3. TRUST - REDESIGNED */}
                            <section className="py-24 bg-gray-950 relative overflow-hidden">
                                <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-[#037971]/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                                <div className="max-w-7xl mx-auto px-4 relative z-10">
                                    <div className="grid md:grid-cols-2 gap-20 items-center">
                                        <div className="order-2 md:order-1">
                                            <div className="text-left mb-12">
                                                <span className="text-[#037971] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                                    /// ÉQUIPEMENT & EXPERTISE
                                                </span>
                                                <h2 className="text-4xl md:text-5xl font-black mt-2 text-white leading-tight">
                                                    La Maîtrise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#037971] to-teal-400">Technique</span>
                                                </h2>
                                                <p className="text-gray-400 mt-6 text-lg border-l-2 border-[#037971] pl-6 py-2 bg-gradient-to-r from-[#037971]/5 to-transparent">
                                                    Des moyens professionnels pour des résultats durables.
                                                </p>
                                            </div>

                                            <div className="space-y-8 relative pl-4">
                                                <div className="absolute left-[2.35rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#037971] via-[#037971]/30 to-gray-800"></div>

                                                <div className="relative flex items-start z-10 group">
                                                    <div className="w-14 h-14 bg-gray-900 border border-[#037971]/30 rounded-2xl flex items-center justify-center text-[#037971] mr-8 shrink-0 shadow-[0_0_20px_-5px_rgba(3,121,113,0.3)] group-hover:bg-[#037971] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(3,121,113,0.5)] group-hover:scale-110 transition-all duration-300">
                                                        <Shovel size={24} strokeWidth={2} />
                                                    </div>
                                                    <div className="pt-1">
                                                        <h3 className="text-2xl font-black mb-2 text-white group-hover:text-[#037971] transition-colors">Matériel Performant</h3>
                                                        <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                                                            Broyeurs, rogneuses, nacelles : nous disposons du matériel adapté pour les travaux d'envergure.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="relative flex items-start z-10 group">
                                                    <div className="w-14 h-14 bg-gray-900 border border-[#037971]/30 rounded-2xl flex items-center justify-center text-[#037971] mr-8 shrink-0 shadow-[0_0_20px_-5px_rgba(3,121,113,0.3)] group-hover:bg-[#037971] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(3,121,113,0.5)] group-hover:scale-110 transition-all duration-300">
                                                        <CalendarCheck size={24} strokeWidth={2} />
                                                    </div>
                                                    <div className="pt-1">
                                                        <h3 className="text-2xl font-black mb-2 text-white group-hover:text-[#037971] transition-colors">Contrats Annuels</h3>
                                                        <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                                                            Planifiez l'entretien de votre résidence sur l'année. Nous gérons le calendrier des interventions.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="relative flex items-start z-10 group">
                                                    <div className="w-14 h-14 bg-gray-900 border border-[#037971]/30 rounded-2xl flex items-center justify-center text-[#037971] mr-8 shrink-0 shadow-[0_0_20px_-5px_rgba(3,121,113,0.3)] group-hover:bg-[#037971] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(3,121,113,0.5)] group-hover:scale-110 transition-all duration-300">
                                                        <UserCheck size={24} strokeWidth={2} />
                                                    </div>
                                                    <div className="pt-1">
                                                        <h3 className="text-2xl font-black mb-2 text-white group-hover:text-[#037971] transition-colors">Offre Globale</h3>
                                                        <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                                                            Combinez l'entretien de vos espaces verts avec nos autres prestations sur une seule facture.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="order-1 md:order-2 flex justify-center">
                                            <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-[0_0_50px_-10px_rgba(3,121,113,0.2)] group h-[500px] w-full max-w-md hover:border-[#037971]/50 transition-all duration-500 bg-gray-900 flex items-center justify-center">
                                                <div className="absolute inset-0 bg-[#037971]/5 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent z-10"></div>

                                                <div className="relative z-20 text-center">
                                                    <div className="absolute inset-0 bg-[#037971] blur-[80px] opacity-20 rounded-full animate-pulse"></div>
                                                    <TreePine size={120} className="text-[#037971] mx-auto mb-6 relative z-10 drop-shadow-[0_0_20px_rgba(3,121,113,0.5)]" strokeWidth={1} />
                                                    <span className="font-black text-3xl text-white block">100% Maîtrise</span>
                                                    <span className="text-gray-400 text-lg uppercase tracking-widest mt-2 block">Végétale</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )
                }

                {/* Nettoyage Section */}
                {
                    (defaultTab === 'clean' || !defaultTab) && (
                        <div className="space-y-24">
                            {/* 1. MAIN SERVICES CARDS - CLEANING */}
                            <Section id="clean">
                                <div className="text-center mb-16 relative z-10">
                                    <span className="text-[#0241cd] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                        /// NOS SERVICES
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                        L'Hygiène <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0241cd] to-blue-400">Professionnelle</span>
                                    </h2>
                                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                        Des solutions de nettoyage sur-mesure pour tous les secteurs d'activité.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-3 gap-8">
                                    {/* Copropriétés */}
                                    <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-[#0241cd]/50 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_40px_-5px_rgba(2,65,205,0.3)] hover:-translate-y-2">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#0241cd]/0 via-transparent to-[#0241cd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="w-16 h-16 bg-[#0241cd]/10 rounded-2xl flex items-center justify-center text-[#0241cd] mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(2,65,205,0.3)] shadow-inner border border-[#0241cd]/20 relative z-10">
                                            <Building2 size={32} />
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-4 relative z-10">Copropriétés</h3>
                                        <p className="text-gray-400 mb-8 relative z-10 leading-relaxed group-hover:text-gray-300 transition-colors">
                                            Entretien des parties communes d'immeubles. Gestion des poubelles et nettoyage des halls.
                                        </p>
                                        <ul className="space-y-4 text-gray-300 text-sm font-medium relative z-10">
                                            {['Entrée & Escaliers', 'Sortie containers poubelles', 'Vitrerie accessible', 'Gestion des encombrants', 'Nettoyage parkings'].map(item => (
                                                <li key={item} className="flex items-center gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-[#0241cd]/10 flex items-center justify-center border border-[#0241cd]/20 text-[#0241cd] shadow-[0_0_10px_rgba(2,65,205,0.2)]">
                                                        <CheckCircle size={12} />
                                                    </div>
                                                    <span className="group-hover:text-white transition-colors">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Bureaux */}
                                    <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-[#0241cd]/50 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_40px_-5px_rgba(2,65,205,0.3)] hover:-translate-y-2">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#0241cd]/0 via-transparent to-[#0241cd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="w-16 h-16 bg-[#0241cd]/10 rounded-2xl flex items-center justify-center text-[#0241cd] mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(2,65,205,0.3)] shadow-inner border border-[#0241cd]/20 relative z-10">
                                            <Briefcase size={32} />
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-4 relative z-10">Bureaux & Pros</h3>
                                        <p className="text-gray-400 mb-8 relative z-10 leading-relaxed group-hover:text-gray-300 transition-colors">
                                            Un environnement de travail sain pour vos collaborateurs. Intervention hors horaires de bureau.
                                        </p>
                                        <ul className="space-y-4 text-gray-300 text-sm font-medium relative z-10">
                                            {['Dépoussiérage bureaux', 'Sanitaires & Cuisine', 'Sols & Moquettes', 'Nettoyage vitres & cloisons', 'Désinfection points contact'].map(item => (
                                                <li key={item} className="flex items-center gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-[#0241cd]/10 flex items-center justify-center border border-[#0241cd]/20 text-[#0241cd] shadow-[0_0_10px_rgba(2,65,205,0.2)]">
                                                        <CheckCircle size={12} />
                                                    </div>
                                                    <span className="group-hover:text-white transition-colors">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Fin de Chantier */}
                                    <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-[#0241cd]/50 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_40px_-5px_rgba(2,65,205,0.3)] hover:-translate-y-2">
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#0241cd]/0 via-transparent to-[#0241cd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <div className="w-16 h-16 bg-[#0241cd]/10 rounded-2xl flex items-center justify-center text-[#0241cd] mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(2,65,205,0.3)] shadow-inner border border-[#0241cd]/20 relative z-10">
                                            <HardHat size={32} />
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-4 relative z-10">Fin de Chantier</h3>
                                        <p className="text-gray-400 mb-8 relative z-10 leading-relaxed group-hover:text-gray-300 transition-colors">
                                            Remise en état après travaux ou avant état des lieux. Intervention de fond.
                                        </p>
                                        <ul className="space-y-4 text-gray-300 text-sm font-medium relative z-10">
                                            {['Évacuation gravats', 'Grattage sols & traces', 'Dépoussiérage fin', 'Décapage mécanique', 'Lavage haute pression'].map(item => (
                                                <li key={item} className="flex items-center gap-3">
                                                    <div className="w-6 h-6 rounded-full bg-[#0241cd]/10 flex items-center justify-center border border-[#0241cd]/20 text-[#0241cd] shadow-[0_0_10px_rgba(2,65,205,0.2)]">
                                                        <CheckCircle size={12} />
                                                    </div>
                                                    <span className="group-hover:text-white transition-colors">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Section>


                            {/* 2. METHODOLOGY - CLEANING - REDESIGNED */}
                            <section className="py-24 bg-gray-950 relative overflow-hidden">
                                <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-[#0241cd]/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                                <div className="max-w-7xl mx-auto px-4 relative z-10">
                                    <div className="grid md:grid-cols-2 gap-20 items-center">
                                        <div className="order-2 md:order-1">
                                            <div className="text-left mb-12">
                                                <span className="text-[#0241cd] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                                    /// PROTOCOLE QUALITÉ
                                                </span>
                                                <h2 className="text-4xl md:text-5xl font-black mt-2 text-white leading-tight">
                                                    La Propreté <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0241cd] to-blue-400">sans Compromis</span>
                                                </h2>
                                                <p className="text-gray-400 mt-6 text-lg border-l-2 border-[#0241cd] pl-6 py-2 bg-gradient-to-r from-[#0241cd]/5 to-transparent">
                                                    Des méthodes professionnelles adaptées aux exigences de vos locaux.
                                                </p>
                                            </div>

                                            <div className="space-y-8 relative pl-4">
                                                <div className="absolute left-[2.35rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#0241cd] via-[#0241cd]/30 to-gray-800"></div>

                                                {[
                                                    { icon: FileText, title: "1. Cahier des Charges", desc: "Définition précise des zones, des fréquences de passage et des protocoles spécifiques." },
                                                    { icon: Sparkles, title: "2. Prestation", desc: "Intervention par équipes formées, équipées de matériel professionnel et produits écolabellisés." },
                                                    { icon: UserCheck, title: "3. Contrôle Qualité", desc: "Suivi régulier avec fiches de passage et interlocuteur dédié pour garantir votre satisfaction." }
                                                ].map((step, i) => (
                                                    <div key={i} className="relative flex items-start z-10 group">
                                                        <div className="w-14 h-14 bg-gray-900 border border-[#0241cd]/30 rounded-2xl flex items-center justify-center text-[#0241cd] mr-8 shrink-0 shadow-[0_0_20px_-5px_rgba(2,65,205,0.3)] group-hover:bg-[#0241cd] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(2,65,205,0.5)] group-hover:scale-110 transition-all duration-300">
                                                            <step.icon size={24} strokeWidth={2} />
                                                        </div>
                                                        <div className="pt-1">
                                                            <h3 className="text-xl font-black mb-2 text-white group-hover:text-[#0241cd] transition-colors">{step.title}</h3>
                                                            <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">{step.desc}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="order-1 md:order-2">
                                            <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-[0_0_50px_-10px_rgba(2,65,205,0.2)] group h-[600px] hover:border-[#0241cd]/50 transition-all duration-500">
                                                <div className="absolute inset-0 bg-[#0241cd]/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                                                <img src={imgCleanMain} alt="Agent d'entretien professionnel" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 group-hover:saturate-100" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent z-10"></div>

                                                <div className="absolute bottom-0 left-0 right-0 p-10 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                    <div className="flex items-center gap-3 mb-4">
                                                        <div className="bg-[#0241cd] w-12 h-1.5 rounded-full shadow-[0_0_10px_#0241cd]"></div>
                                                        <span className="text-white font-bold uppercase tracking-wider text-sm shadow-black drop-shadow-md">Service Impeccable</span>
                                                    </div>
                                                    <blockquote className="text-white text-xl md:text-2xl font-medium italic leading-relaxed border-l-4 border-[#0241cd] pl-6 bg-black/30 backdrop-blur-sm p-4 rounded-r-xl">
                                                        "La propreté est le reflet de votre image. Nous en prenons soin chaque jour."
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* 3. TRUST - REDESIGNED */}
                            <section className="py-24 bg-gray-950 relative overflow-hidden">
                                <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-[#0241cd]/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                                <div className="max-w-7xl mx-auto px-4 relative z-10">
                                    <div className="grid md:grid-cols-2 gap-20 items-center">
                                        <div className="order-2 md:order-1">
                                            <div className="text-left mb-12">
                                                <span className="text-[#0241cd] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                                    /// ENGAGEMENT QUALITÉ
                                                </span>
                                                <h2 className="text-4xl md:text-5xl font-black mt-2 text-white leading-tight">
                                                    La Propreté <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0241cd] to-blue-400">par Excellence</span>
                                                </h2>
                                                <p className="text-gray-400 mt-6 text-lg border-l-2 border-[#0241cd] pl-6 py-2 bg-gradient-to-r from-[#0241cd]/5 to-transparent">
                                                    Votre satisfaction est notre priorité absolue.
                                                </p>
                                            </div>

                                            <div className="space-y-8 relative pl-4">
                                                <div className="absolute left-[2.35rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#0241cd] via-[#0241cd]/30 to-gray-800"></div>

                                                <div className="relative flex items-start z-10 group">
                                                    <div className="w-14 h-14 bg-gray-900 border border-[#0241cd]/30 rounded-2xl flex items-center justify-center text-[#0241cd] mr-8 shrink-0 shadow-[0_0_20px_-5px_rgba(2,65,205,0.3)] group-hover:bg-[#0241cd] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(2,65,205,0.5)] group-hover:scale-110 transition-all duration-300">
                                                        <ShieldCheck size={24} strokeWidth={2} />
                                                    </div>
                                                    <div className="pt-1">
                                                        <h3 className="text-2xl font-black mb-2 text-white group-hover:text-[#0241cd] transition-colors">Personnel de Confiance</h3>
                                                        <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                                                            Nos agents sont rigoureusement sélectionnés pour leur sérieux, leur discrétion et leur efficacité.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="relative flex items-start z-10 group">
                                                    <div className="w-14 h-14 bg-gray-900 border border-[#0241cd]/30 rounded-2xl flex items-center justify-center text-[#0241cd] mr-8 shrink-0 shadow-[0_0_20px_-5px_rgba(2,65,205,0.3)] group-hover:bg-[#0241cd] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(2,65,205,0.5)] group-hover:scale-110 transition-all duration-300">
                                                        <Leaf size={24} strokeWidth={2} />
                                                    </div>
                                                    <div className="pt-1">
                                                        <h3 className="text-2xl font-black mb-2 text-white group-hover:text-[#0241cd] transition-colors">Produits Écolabel</h3>
                                                        <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                                                            Nous privilégions l'utilisation de produits respectueux de l'environnement et de la santé des occupants.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="relative flex items-start z-10 group">
                                                    <div className="w-14 h-14 bg-gray-900 border border-[#0241cd]/30 rounded-2xl flex items-center justify-center text-[#0241cd] mr-8 shrink-0 shadow-[0_0_20px_-5px_rgba(2,65,205,0.3)] group-hover:bg-[#0241cd] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(2,65,205,0.5)] group-hover:scale-110 transition-all duration-300">
                                                        <Briefcase size={24} strokeWidth={2} />
                                                    </div>
                                                    <div className="pt-1">
                                                        <h3 className="text-2xl font-black mb-2 text-white group-hover:text-[#0241cd] transition-colors">Interlocuteur Unique</h3>
                                                        <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                                                            Simplifiez vos échanges avec un gestionnaire dédié pour tous vos besoins.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="order-1 md:order-2 flex justify-center">
                                            <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-[0_0_50px_-10px_rgba(2,65,205,0.2)] group h-[500px] w-full max-w-md hover:border-[#0241cd]/50 transition-all duration-500 bg-gray-900 flex items-center justify-center">
                                                <div className="absolute inset-0 bg-[#0241cd]/5 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent z-10"></div>

                                                <div className="relative z-20 text-center">
                                                    <div className="absolute inset-0 bg-[#0241cd] blur-[80px] opacity-20 rounded-full animate-pulse"></div>
                                                    <Sparkles size={120} className="text-[#0241cd] mx-auto mb-6 relative z-10 drop-shadow-[0_0_20px_rgba(2,65,205,0.5)]" strokeWidth={1} />
                                                    <span className="font-black text-3xl text-white block">Techniques Pro</span>
                                                    <span className="text-gray-400 text-lg uppercase tracking-widest mt-2 block">Certifiées</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )
                }
            </div >
        </Layout >
    );

};

export default Services;
