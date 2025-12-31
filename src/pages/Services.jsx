import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { ShieldAlert, Leaf, Sparkles, Bug, Rat, Droplets, Ruler, Scissors, Trash2, CheckCircle, Search, Skull, ShieldCheck, Clock, CalendarCheck, TreePine, Flower2, Shovel, Recycle, Building2, Briefcase, HardHat, FileText, UserCheck, Home, Warehouse, Utensils, Hotel, AlertTriangle, UtensilsCrossed, Wind, TrendingUp, Baby, ArrowRight, Store, Scale, Gavel, Trophy, Users, HeartPulse, Hammer, Paintbrush, Wrench, BadgeEuro, Award } from 'lucide-react';

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

import imgMultiMontage from '../assets/montage-meuble.jpg';
import imgMultiPeinture from '../assets/peinture-interieur.jpg';
import imgMultiBricolage from '../assets/bricolage-main.jpg';

import imgNettoyageChantier1 from '../assets/netoyage chanter1.jpg';
import imgNettoyageChantier2 from '../assets/netoyage chanttier2.jpg';
import logoImg from '../assets/logo blanc.png';

const Services = ({ defaultTab }) => {



    return (
        <Layout title="Nos Services">
            <div className="bg-gray-950 min-h-screen text-white">

                {/* HERO SECTION: LIGHTNING SPLIT */}
                <section className="relative flex flex-col md:block h-auto md:h-[95vh] bg-gray-950 overflow-hidden">

                    {/* CASE 1: CLEANING (Nettoyage) */}
                    {(defaultTab === 'clean' || !defaultTab) && (
                        <>
                            {/* Panel 1: Bureaux & Tertiaire */}
                            <div
                                className="
                                    relative w-full min-h-[35vh] h-auto md:absolute md:inset-0 md:h-full 
                                    group transition-all duration-500 ease-in-out cursor-pointer 
                                    z-10 hover:z-50 origin-center
                                    md:[clip-path:polygon(0_0,_36%_0,_32%_50%,_35%_50%,_31%_100%,_0_100%)]
                                "
                                onClick={() => {
                                    const element = document.getElementById('bureaux');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <img
                                    src={imgNettoyageChantier1}
                                    alt="Bureaux & Tertiaire"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    fetchPriority="high"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#0241cd]/80 via-[#0241cd]/40 to-gray-900/60 group-hover:opacity-90 transition-all duration-700"></div>
                                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 text-center md:text-left items-center md:items-start pointer-events-none w-full h-full">
                                    <div className="relative z-20 transform md:group-hover:scale-105 transition-transform duration-500">
                                        <span className="inline-block py-1 px-3 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] text-[#0241cd]">
                                            /// ESPACES DE TRAVAIL
                                        </span>
                                        <h2 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter drop-shadow-2xl leading-[0.9]">
                                            Nettoyage <br /> Bureaux
                                        </h2>
                                        <ul className="hidden md:block text-white/90 text-lg font-medium space-y-1 opacity-80">
                                            {["Open Space & Bureaux", "Sanitaires & Cuisines", "Vitrerie & Sols"].map((feat, i) => (
                                                <li key={i} className="flex items-center justify-center md:justify-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="hidden md:flex gap-4 mt-8 opacity-100 transform translate-y-0 transition-all duration-500 pointer-events-auto">
                                        <span className="px-8 py-3 bg-white text-[#0241cd] font-bold text-sm rounded-xl hover:bg-gray-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-20 hover:scale-105">
                                            En découvrir plus
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Panel 2: Immeubles / Copro */}
                            <div
                                className="
                                    relative w-full min-h-[35vh] h-auto md:absolute md:inset-0 md:h-full 
                                    group transition-all duration-500 ease-in-out cursor-pointer 
                                    z-10 hover:z-50 origin-center
                                    md:[clip-path:polygon(36%_0,_71%_0,_67%_50%,_70%_50%,_66%_100%,_31%_100%,_35%_50%,_32%_50%)]
                                "
                                onClick={() => {
                                    const element = document.getElementById('immeubles');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <img
                                    src={imgNettoyageChantier2}
                                    alt="Immeubles / Copro"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    fetchPriority="high"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#0241cd]/80 via-[#0241cd]/40 to-gray-900/60 group-hover:opacity-90 transition-all duration-700"></div>
                                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 text-center items-center pointer-events-none w-full h-full">
                                    <div className="relative z-20 transform md:group-hover:scale-105 transition-transform duration-500">
                                        <span className="inline-block py-1 px-3 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] text-[#0241cd]">
                                            /// HABITAT COLLECTIF
                                        </span>
                                        <h2 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter drop-shadow-2xl leading-[0.9]">
                                            Entretien <br /> Immeubles
                                        </h2>
                                        <ul className="hidden md:block text-white/90 text-lg font-medium space-y-1 opacity-80">
                                            {["Halls & Escaliers", "Sortie Poubelles", "Parkings"].map((feat, i) => (
                                                <li key={i} className="flex items-center justify-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="hidden md:flex gap-4 mt-8 opacity-100 transform translate-y-0 transition-all duration-500 pointer-events-auto">
                                        <span className="px-8 py-3 bg-white text-[#0241cd] font-bold text-sm rounded-xl hover:bg-gray-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-20 hover:scale-105">
                                            En découvrir plus
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Panel 3: Fin de chantier */}
                            <div
                                className="
                                    relative w-full min-h-[35vh] h-auto md:absolute md:inset-0 md:h-full 
                                    group transition-all duration-500 ease-in-out cursor-pointer 
                                    z-10 hover:z-50 origin-center
                                    md:[clip-path:polygon(71%_0,_100%_0,_100%_100%,_66%_100%,_70%_50%,_67%_50%)]
                                "
                                onClick={() => {
                                    const element = document.getElementById('chantier');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <img
                                    src={imgCleanMain}
                                    alt="Fin de chantier"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    fetchPriority="high"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#0241cd]/80 via-[#0241cd]/40 to-gray-900/60 group-hover:opacity-90 transition-all duration-700"></div>
                                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 text-center md:text-right items-center md:items-end pointer-events-none w-full h-full">
                                    <div className="relative z-20 transform md:group-hover:scale-105 transition-transform duration-500">
                                        <span className="inline-block py-1 px-3 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] text-[#0241cd]">
                                            /// TRAVAUX TERMINÉS
                                        </span>
                                        <h2 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter drop-shadow-2xl leading-[0.9]">
                                            Fin de <br /> Chantier
                                        </h2>
                                        <ul className="hidden md:block text-white/90 text-lg font-medium space-y-1 opacity-80">
                                            {["Évacuation Gravats", "Nettoyage Approfondi", "Remise à Neuf"].map((feat, i) => (
                                                <li key={i} className="flex items-center justify-center md:justify-end gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="hidden md:flex gap-4 mt-8 opacity-100 transform translate-y-0 transition-all duration-500 pointer-events-auto">
                                        <span className="px-8 py-3 bg-white text-[#0241cd] font-bold text-sm rounded-xl hover:bg-gray-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-20 hover:scale-105">
                                            En découvrir plus
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* CASE 2: 3D (Hygiène 3D) */}
                    {(defaultTab === '3d') && (
                        <>
                            {/* Panel 1: Anti Nuisible (Rongeurs) */}
                            <div
                                className="
                                    relative w-full min-h-[35vh] h-auto md:absolute md:inset-0 md:h-full 
                                    group transition-all duration-500 ease-in-out cursor-pointer 
                                    z-10 hover:z-50 origin-center
                                    md:[clip-path:polygon(0_0,_36%_0,_32%_50%,_35%_50%,_31%_100%,_0_100%)]
                                "
                                onClick={() => {
                                    const element = document.getElementById('deratisation');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <img
                                    src={imgRatBg}
                                    alt="Anti Nuisible"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    fetchPriority="high"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#E71D36]/60 via-[#E71D36]/20 to-gray-900/60 group-hover:opacity-90 transition-all duration-700"></div>
                                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 text-center md:text-left items-center md:items-start pointer-events-none w-full h-full">
                                    <div className="relative z-20 transform md:group-hover:scale-105 transition-transform duration-500">
                                        <span className="inline-block py-1 px-3 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] text-[#E71D36]">
                                            /// STOP RONGEURS
                                        </span>
                                        <h2 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter drop-shadow-2xl leading-[0.9]">
                                            Anti <br /> Nuisible
                                        </h2>
                                        <ul className="hidden md:block text-white/90 text-lg font-medium space-y-1 opacity-80">
                                            {["Rat", "Souris", "Rongeur"].map((feat, i) => (
                                                <li key={i} className="flex items-center justify-center md:justify-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-red-300"></div>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="hidden md:flex gap-4 mt-8 opacity-100 transform translate-y-0 transition-all duration-500 pointer-events-auto">
                                        <span className="px-8 py-3 bg-white text-[#E71D36] font-bold text-sm rounded-xl hover:bg-gray-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-20 hover:scale-105">
                                            En découvrir plus
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Panel 2: Désinsectisation */}
                            <div
                                className="
                                    relative w-full min-h-[35vh] h-auto md:absolute md:inset-0 md:h-full 
                                    group transition-all duration-500 ease-in-out cursor-pointer 
                                    z-10 hover:z-50 origin-center
                                    md:[clip-path:polygon(36%_0,_71%_0,_67%_50%,_70%_50%,_66%_100%,_31%_100%,_35%_50%,_32%_50%)]
                                "
                                onClick={() => {
                                    const element = document.getElementById('desinsectisation');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <img
                                    src={imgCafardBg}
                                    alt="Désinsectisation"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    fetchPriority="high"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#E71D36]/60 via-[#E71D36]/20 to-gray-900/60 group-hover:opacity-90 transition-all duration-700"></div>
                                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 text-center items-center pointer-events-none w-full h-full">
                                    <div className="relative z-20 transform md:group-hover:scale-105 transition-transform duration-500">
                                        <span className="inline-block py-1 px-3 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] text-[#E71D36]">
                                            /// STOP INSECTES
                                        </span>
                                        <h2 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter drop-shadow-2xl leading-[0.9]">
                                            Désin<br />sectisation
                                        </h2>
                                        <ul className="hidden md:block text-white/90 text-lg font-medium space-y-1 opacity-80">
                                            {["Punaise de lit", "Cafard", "Frelon asiatique"].map((feat, i) => (
                                                <li key={i} className="flex items-center justify-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-red-300"></div>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="hidden md:flex gap-4 mt-8 opacity-100 transform translate-y-0 transition-all duration-500 pointer-events-auto">
                                        <span className="px-8 py-3 bg-white text-[#E71D36] font-bold text-sm rounded-xl hover:bg-gray-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-20 hover:scale-105">
                                            En découvrir plus
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Panel 3: Désinfection */}
                            <div
                                className="
                                    relative w-full min-h-[35vh] h-auto md:absolute md:inset-0 md:h-full 
                                    group transition-all duration-500 ease-in-out cursor-pointer 
                                    z-10 hover:z-50 origin-center
                                    md:[clip-path:polygon(71%_0,_100%_0,_100%_100%,_66%_100%,_70%_50%,_67%_50%)]
                                "
                                onClick={() => {
                                    const element = document.getElementById('desinfection');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <img
                                    src={img3DDisinfection}
                                    alt="Désinfection"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    fetchPriority="high"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#E71D36]/60 via-[#E71D36]/20 to-gray-900/60 group-hover:opacity-90 transition-all duration-700"></div>
                                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 text-center md:text-right items-center md:items-end pointer-events-none w-full h-full">
                                    <div className="relative z-20 transform md:group-hover:scale-105 transition-transform duration-500">
                                        <span className="inline-block py-1 px-3 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] text-[#E71D36]">
                                            /// ASSAINISSEMENT
                                        </span>
                                        <h2 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter drop-shadow-2xl leading-[0.9]">
                                            Désinfection
                                        </h2>
                                        <ul className="hidden md:block text-white/90 text-lg font-medium space-y-1 opacity-80">
                                            {["Intérieur", "Extérieur"].map((feat, i) => (
                                                <li key={i} className="flex items-center justify-center md:justify-end gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-red-300"></div>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="hidden md:flex gap-4 mt-8 opacity-100 transform translate-y-0 transition-all duration-500 pointer-events-auto">
                                        <span className="px-8 py-3 bg-white text-[#E71D36] font-bold text-sm rounded-xl hover:bg-gray-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-20 hover:scale-105">
                                            En découvrir plus
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* CASE 3: GREEN (Espaces Verts) */}
                    {(defaultTab === 'green') && (
                        <>
                            {/* Panel 1: Élagage */}
                            <div
                                className="
                                    relative w-full min-h-[35vh] h-auto md:absolute md:inset-0 md:h-full 
                                    group transition-all duration-500 ease-in-out cursor-pointer 
                                    z-10 hover:z-50 origin-center
                                    md:[clip-path:polygon(0_0,_36%_0,_32%_50%,_35%_50%,_31%_100%,_0_100%)]
                                "
                                onClick={() => {
                                    const element = document.getElementById('elagage');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <img
                                    src={imgGreenMain}
                                    alt="Élagage"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    fetchPriority="high"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#037971]/80 via-[#037971]/40 to-gray-900/60 group-hover:opacity-90 transition-all duration-700"></div>
                                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 text-center md:text-left items-center md:items-start pointer-events-none w-full h-full">
                                    <div className="relative z-20 transform md:group-hover:scale-105 transition-transform duration-500">
                                        <span className="inline-block py-1 px-3 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] text-[#037971]">
                                            /// SOIN DES ARBRES
                                        </span>
                                        <h2 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter drop-shadow-2xl leading-[0.9]">
                                            Élagage <br className="hidden md:block" /> Expert
                                        </h2>
                                        <ul className="hidden md:block text-white/90 text-lg font-medium space-y-1 opacity-80">
                                            {["Taille Douce", "Abattage Délicat", "Dessouchage"].map((feat, i) => (
                                                <li key={i} className="flex items-center justify-center md:justify-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="hidden md:flex gap-4 mt-8 opacity-100 transform translate-y-0 transition-all duration-500 pointer-events-auto">
                                        <span className="px-8 py-3 bg-white text-[#037971] font-bold text-sm rounded-xl hover:bg-gray-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-20 hover:scale-105">
                                            En découvrir plus
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Panel 2: Entretien Jardin */}
                            <div
                                className="
                                    relative w-full min-h-[35vh] h-auto md:absolute md:inset-0 md:h-full 
                                    group transition-all duration-500 ease-in-out cursor-pointer 
                                    z-10 hover:z-50 origin-center
                                    md:[clip-path:polygon(36%_0,_71%_0,_67%_50%,_70%_50%,_66%_100%,_31%_100%,_35%_50%,_32%_50%)]
                                "
                                onClick={() => {
                                    const element = document.getElementById('entretien');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <img
                                    src={imgGreenBg}
                                    alt="Entretien Jardin"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    fetchPriority="high"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#037971]/80 via-[#037971]/40 to-gray-900/60 group-hover:opacity-90 transition-all duration-700"></div>
                                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 text-center items-center pointer-events-none w-full h-full">
                                    <div className="relative z-20 transform md:group-hover:scale-105 transition-transform duration-500">
                                        <span className="inline-block py-1 px-3 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] text-[#037971]">
                                            /// PARCS & JARDINS
                                        </span>
                                        <h2 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter drop-shadow-2xl leading-[0.9]">
                                            Entretien <br className="hidden md:block" /> Jardin
                                        </h2>
                                        <ul className="hidden md:block text-white/90 text-lg font-medium space-y-1 opacity-80">
                                            {["Tonte & Taille", "Débroussaillage", "Ramassage Feuilles"].map((feat, i) => (
                                                <li key={i} className="flex items-center justify-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="hidden md:flex gap-4 mt-8 opacity-100 transform translate-y-0 transition-all duration-500 pointer-events-auto">
                                        <span className="px-8 py-3 bg-white text-[#037971] font-bold text-sm rounded-xl hover:bg-gray-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-20 hover:scale-105">
                                            En découvrir plus
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Panel 3: Paysagisme */}
                            <div
                                className="
                                    relative w-full min-h-[35vh] h-auto md:absolute md:inset-0 md:h-full 
                                    group transition-all duration-500 ease-in-out cursor-pointer 
                                    z-10 hover:z-50 origin-center
                                    md:[clip-path:polygon(71%_0,_100%_0,_100%_100%,_66%_100%,_70%_50%,_67%_50%)]
                                "
                                onClick={() => {
                                    const element = document.getElementById('paysagisme');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <img
                                    src={imgPaysagisme1}
                                    alt="Paysagisme"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    fetchPriority="high"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#037971]/80 via-[#037971]/40 to-gray-900/60 group-hover:opacity-90 transition-all duration-700"></div>
                                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 text-center md:text-right items-center md:items-end pointer-events-none w-full h-full">
                                    <div className="relative z-20 transform md:group-hover:scale-105 transition-transform duration-500">
                                        <span className="inline-block py-1 px-3 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] text-[#037971]">
                                            /// CRÉATION PAYSAGÈRE
                                        </span>
                                        <h2 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter drop-shadow-2xl leading-[0.9]">
                                            Design <br className="hidden md:block" /> Paysager
                                        </h2>
                                        <ul className="hidden md:block text-white/90 text-lg font-medium space-y-1 opacity-80">
                                            {["Massifs & Plantes", "Arrosage Auto", "Aménagement"].map((feat, i) => (
                                                <li key={i} className="flex items-center justify-center md:justify-end gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-300"></div>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="hidden md:flex gap-4 mt-8 opacity-100 transform translate-y-0 transition-all duration-500 pointer-events-auto">
                                        <span className="px-8 py-3 bg-white text-[#037971] font-bold text-sm rounded-xl hover:bg-gray-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-20 hover:scale-105">
                                            En découvrir plus
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* CASE 4: MULTI-SERVICES */}
                    {(defaultTab === 'multi') && (
                        <>
                            {/* Panel 1: Montage Meubles */}
                            <div
                                className="
                                    relative w-full min-h-[35vh] h-auto md:absolute md:inset-0 md:h-full 
                                    group transition-all duration-500 ease-in-out cursor-pointer 
                                    z-10 hover:z-50 origin-center
                                    md:[clip-path:polygon(0_0,_36%_0,_32%_50%,_35%_50%,_31%_100%,_0_100%)]
                                "
                                onClick={() => {
                                    const element = document.getElementById('montage');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <img
                                    src={imgMultiMontage}
                                    alt="Montage Meubles"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.8]"
                                    fetchPriority="high"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#F59E0B]/90 via-[#F59E0B]/40 to-gray-900/80 group-hover:opacity-90 transition-all duration-700"></div>
                                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 text-center md:text-left items-center md:items-start pointer-events-none w-full h-full">
                                    <div className="relative z-20 transform md:group-hover:scale-105 transition-transform duration-500">
                                        <span className="inline-block py-1 px-3 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] text-[#F59E0B]">
                                            /// MONTAGE & ASSEMBLAGE
                                        </span>
                                        <h2 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter drop-shadow-2xl leading-[0.9]">
                                            Montage <br /> Expert
                                        </h2>
                                        <ul className="hidden md:block text-white/90 text-lg font-medium space-y-1 opacity-80">
                                            {["Mobilier en Kit", "Fixation Murale", "Démontage"].map((feat, i) => (
                                                <li key={i} className="flex items-center justify-center md:justify-start gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-300"></div>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="hidden md:flex gap-4 mt-8 opacity-100 transform translate-y-0 transition-all duration-500 pointer-events-auto">
                                        <span className="px-8 py-3 bg-white text-[#F59E0B] font-bold text-sm rounded-xl hover:bg-gray-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-20 hover:scale-105">
                                            En savoir plus
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Panel 2: Peinture */}
                            <div
                                className="
                                    relative w-full min-h-[35vh] h-auto md:absolute md:inset-0 md:h-full 
                                    group transition-all duration-500 ease-in-out cursor-pointer 
                                    z-10 hover:z-50 origin-center
                                    md:[clip-path:polygon(36%_0,_71%_0,_67%_50%,_70%_50%,_66%_100%,_31%_100%,_35%_50%,_32%_50%)]
                                "
                                onClick={() => {
                                    const element = document.getElementById('peinture');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <img
                                    src={imgMultiPeinture}
                                    alt="Peinture & Déco"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.8]"
                                    fetchPriority="high"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#F59E0B]/90 via-[#F59E0B]/40 to-gray-900/80 group-hover:opacity-90 transition-all duration-700"></div>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-15">
                                    <img src={logoImg} alt="Watermark" className="w-[60%] h-auto object-contain" />
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 text-center items-center pointer-events-none w-full h-full">
                                    <div className="relative z-20 transform md:group-hover:scale-105 transition-transform duration-500">
                                        <span className="inline-block py-1 px-3 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] text-[#F59E0B]">
                                            /// PEINTURE & FINITIONS
                                        </span>
                                        <h2 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter drop-shadow-2xl leading-[0.9]">
                                            Peinture <br /> Pro
                                        </h2>
                                        <ul className="hidden md:block text-white/90 text-lg font-medium space-y-1 opacity-80">
                                            {["Murs & Plafonds", "Rénovation", "Décoration"].map((feat, i) => (
                                                <li key={i} className="flex items-center justify-center gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-300"></div>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="hidden md:flex gap-4 mt-8 opacity-100 transform translate-y-0 transition-all duration-500 pointer-events-auto">
                                        <span className="px-8 py-3 bg-white text-[#F59E0B] font-bold text-sm rounded-xl hover:bg-gray-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-20 hover:scale-105">
                                            En savoir plus
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Panel 3: Bricolage */}
                            <div
                                className="
                                    relative w-full min-h-[35vh] h-auto md:absolute md:inset-0 md:h-full 
                                    group transition-all duration-500 ease-in-out cursor-pointer 
                                    z-10 hover:z-50 origin-center
                                    md:[clip-path:polygon(71%_0,_100%_0,_100%_100%,_66%_100%,_70%_50%,_67%_50%)]
                                "
                                onClick={() => {
                                    const element = document.getElementById('bricolage');
                                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                                }}
                            >
                                <img
                                    src={imgMultiBricolage}
                                    alt="Petit Bricolage"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.8]"
                                    fetchPriority="high"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-[#F59E0B]/90 via-[#F59E0B]/40 to-gray-900/80 group-hover:opacity-90 transition-all duration-700"></div>
                                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-12 text-center md:text-right items-center md:items-end pointer-events-none w-full h-full">
                                    <div className="relative z-20 transform md:group-hover:scale-105 transition-transform duration-500">
                                        <span className="inline-block py-1 px-3 bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] text-[#F59E0B]">
                                            /// HOMME DE MAIN
                                        </span>
                                        <h2 className="text-3xl md:text-6xl font-black text-white mb-4 uppercase tracking-tighter drop-shadow-2xl leading-[0.9]">
                                            Multi-<br />Services
                                        </h2>
                                        <ul className="hidden md:block text-white/90 text-lg font-medium space-y-1 opacity-80">
                                            {["Petit Bricolage", "Réparations", "Manutention"].map((feat, i) => (
                                                <li key={i} className="flex items-center justify-center md:justify-end gap-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-300"></div>
                                                    {feat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="hidden md:flex gap-4 mt-8 opacity-100 transform translate-y-0 transition-all duration-500 pointer-events-auto">
                                        <span className="px-8 py-3 bg-white text-[#F59E0B] font-bold text-sm rounded-xl hover:bg-gray-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-20 hover:scale-105">
                                            En savoir plus
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* LIGHTNING BOLT SEPARATORS (Desktop Only) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="1.5" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>
                        <path
                            d="M 36 0 L 32 50 L 35 50 L 31 100"
                            stroke="white"
                            strokeWidth="3"
                            vectorEffect="non-scaling-stroke"
                            fill="none"
                            className="drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
                        />
                        <path
                            d="M 71 0 L 67 50 L 70 50 L 66 100"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="square"
                            strokeLinejoin="miter"
                            vectorEffect="non-scaling-stroke"
                            fill="none"
                            className="drop-shadow-[0_0_5px_rgba(255,255,255,0.6)] z-30 relative"
                        />
                    </svg>
                </section>

                {/* 3D Section */}
                {(defaultTab === '3d' || !defaultTab) && (
                    <div className="space-y-24">
                        {/* 1.5 VISUAL & TARGETS */}
                        <section className="py-12 md:py-24 bg-gray-950 relative overflow-hidden">
                            {/* Decorative background elements matching the futuristic theme */}
                            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E71D36]/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#E71D36]/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                                <div className="grid md:grid-cols-2 gap-16 items-center">
                                    {/* Left Image Column */}
                                    <div className="relative group rounded-3xl overflow-hidden cursor-pointer shadow-[0_0_50px_-10px_rgba(231,29,54,0.15)] border border-gray-800 h-[400px] md:h-[600px] hover:border-[#E71D36]/50 transition-all duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10"></div>
                                        <div className="absolute inset-0 bg-[#E71D36]/10 mix-blend-overlay z-10 group-hover:bg-[#E71D36]/0 transition-colors duration-700"></div>

                                        <img src={img3DMain} alt="Expert Anti Nuisible" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter contrast-125 saturate-0 group-hover:saturate-100" />

                                        <div className="absolute bottom-0 left-0 right-0 p-10 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <div className="inline-flex items-center gap-2 bg-[#E71D36] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 shadow-[0_0_20px_rgba(231,29,54,0.4)]">
                                                <Sparkles size={12} /> EXPERTISE TOTALE
                                            </div>
                                            <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4 drop-shadow-lg">
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
                                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
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

                        {/* HIGH IMPACT RISK WARNING */}
                        {/* HIGH IMPACT RISK WARNING - REDESIGNED LIGHTNING BOLT (RED) */}
                        <section className="relative py-12 md:py-24 bg-gray-950 overflow-hidden">

                            {/* 1. HEADER (Title above sections) */}
                            <div className="max-w-7xl mx-auto px-4 relative z-20 text-center mb-12 md:mb-16">
                                <div className="inline-flex items-center gap-2 bg-[#E71D36]/10 backdrop-blur border border-[#E71D36]/20 rounded-full px-4 py-1.5 text-[#E71D36] text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(231,29,54,0.2)]">
                                    <AlertTriangle size={14} className="text-[#E71D36]" /> PROLIFÉRATION = DANGER
                                </div>
                                <h2 className="text-3xl md:text-6xl font-black text-white leading-tight drop-shadow-xl">
                                    Une infestation vous expose à de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71D36] to-red-400">Gros Risques</span>
                                </h2>
                            </div>

                            {/* 2. LIGHTNING BOLT CONTAINER */}
                            <div className="relative w-full h-auto md:h-[500px] flex flex-col md:block">

                                {/* Panel 1: Sanctions Financières (Left) */}
                                <div
                                    className="
                                        relative w-full h-[350px] md:absolute md:inset-0 md:h-full 
                                        flex flex-col justify-center items-center md:items-start p-8 md:pl-20 
                                        group z-10 hover:z-20
                                        md:[clip-path:polygon(0_0,_36%_0,_32%_50%,_35%_50%,_31%_100%,_0_100%)]
                                        bg-gray-900 border-b md:border-b-0 border-gray-800
                                    "
                                >
                                    {/* Background */}
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#E71D36]/90 via-[#990a1b]/80 to-gray-900/90 group-hover:opacity-100 transition-all duration-700"></div>

                                    {/* Content */}
                                    <div className="relative z-10 text-center md:text-left max-w-sm">
                                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto md:mx-0 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                                            <TrendingUp size={32} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                                            Sanctions<br />Financières
                                        </h3>
                                        <p className="text-red-100 font-medium text-lg leading-snug">
                                            Amendements salubrité lourds, mises en demeure et coûts de remise en état <strong className="text-white border-b border-white/30">exorbitants</strong>.
                                        </p>
                                    </div>
                                </div>

                                {/* Panel 2: Danger Sanitaire (Center) */}
                                <div
                                    className="
                                        relative w-full h-[350px] md:absolute md:inset-0 md:h-full 
                                        flex flex-col justify-center items-center p-8 
                                        group z-10 hover:z-20
                                        md:[clip-path:polygon(36%_0,_71%_0,_67%_50%,_70%_50%,_66%_100%,_31%_100%,_35%_50%,_32%_50%)]
                                        bg-gray-800 border-b md:border-b-0 border-gray-700
                                    "
                                >
                                    {/* Background */}
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black/80 group-hover:from-[#E71D36]/20 transition-all duration-700"></div>

                                    {/* Content */}
                                    <div className="relative z-10 text-center max-w-sm mx-auto">
                                        <div className="w-16 h-16 bg-[#E71D36]/20 rounded-2xl flex items-center justify-center text-[#E71D36] mb-6 mx-auto shadow-[0_0_20px_rgba(231,29,54,0.2)] group-hover:scale-110 transition-transform duration-300 border border-[#E71D36]/30">
                                            <Skull size={32} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                                            Danger<br />Sanitaire
                                        </h3>
                                        <p className="text-gray-300 font-medium text-lg leading-snug">
                                            Transmission de maladies graves et contamination de vos stocks <strong className="text-white border-b border-[#E71D36]/50">imperceptibles</strong> à l'œil nu.
                                        </p>
                                    </div>
                                </div>

                                {/* Panel 3: Fermeture & Réputation (Right) */}
                                <div
                                    className="
                                        relative w-full h-[350px] md:absolute md:inset-0 md:h-full 
                                        flex flex-col justify-center items-center md:items-end p-8 md:pr-20
                                        group z-10 hover:z-20
                                        md:[clip-path:polygon(71%_0,_100%_0,_100%_100%,_66%_100%,_70%_50%,_67%_50%)]
                                        bg-gray-900
                                    "
                                >
                                    {/* Background */}
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                    <div className="absolute inset-0 bg-gradient-to-bl from-[#E71D36]/90 via-[#990a1b]/80 to-gray-900/90 group-hover:opacity-100 transition-all duration-700"></div>

                                    {/* Content */}
                                    <div className="relative z-10 text-center md:text-right max-w-sm">
                                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto md:ml-auto shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                                            <Store size={32} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                                            Fermeture &<br />Réputation
                                        </h3>
                                        <p className="text-red-100 font-medium text-lg leading-snug">
                                            Risque de fermeture administrative immédiate. Un seul avis client négatif peut détruire votre <strong className="text-white border-b border-white/30">e-réputation</strong>.
                                        </p>
                                    </div>
                                </div>

                                {/* SEPARATORS (Desktop Only) */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <defs>
                                        <filter id="glow-risk" x="-20%" y="-20%" width="140%" height="140%">
                                            <feGaussianBlur stdDeviation="1.5" result="blur" />
                                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                        </filter>
                                    </defs>
                                    <path
                                        d="M 36 0 L 32 50 L 35 50 L 31 100"
                                        stroke="white"
                                        strokeWidth="3"
                                        vectorEffect="non-scaling-stroke"
                                        fill="none"
                                        className="drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
                                    />
                                    <path
                                        d="M 71 0 L 67 50 L 70 50 L 66 100"
                                        stroke="white"
                                        strokeWidth="3"
                                        strokeLinecap="square"
                                        strokeLinejoin="miter"
                                        vectorEffect="non-scaling-stroke"
                                        fill="none"
                                        className="drop-shadow-[0_0_5px_rgba(255,255,255,0.6)] z-30 relative"
                                    />
                                </svg>
                            </div>
                        </section>

                        {/* 1. MAIN SERVICES CARDS */}
                        <Section id="3d">
                            <div className="text-center mb-16 relative z-10">
                                <span className="text-[#E71D36] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                    /// NOS DOMAINES D'EXPERTISE
                                </span>
                                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
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
                                    id="deratisation"
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
                                    id="desinsectisation"
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
                                    id="desinfection"
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
                        <section className="py-12 md:py-20 bg-gray-900 overflow-hidden relative">
                            {/* Background Gradients */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E71D36]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#E71D36]/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                                <div className="text-center mb-16">
                                    <span className="text-[#E71D36] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                        /// RISQUES MAJEURS
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                                        Les <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E71D36] to-red-400">dangers</span> et nuisances
                                    </h2>
                                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                        Pourquoi il est <span className="text-[#E71D36] font-bold">urgent</span> d'agir rapidement pour protéger votre environnement.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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
                        <section className="py-12 md:py-24 bg-gray-950 relative overflow-hidden">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-[#E71D36]/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                            <div className="max-w-7xl mx-auto px-4 relative z-10">
                                <div className="grid md:grid-cols-2 gap-20 items-center">
                                    <div className="order-2 md:order-1">
                                        <div className="text-left mb-12">
                                            <span className="text-[#E71D36] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                                /// NOTRE MÉTHODE
                                            </span>
                                            <h2 className="text-3xl md:text-5xl font-black mt-2 text-white leading-tight">
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
                                                    title: "1. Mise en place solution de traitement",
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
                                        <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-[0_0_50px_-10px_rgba(231,29,54,0.2)] group h-[400px] md:h-[600px] hover:border-[#E71D36]/50 transition-all duration-500">
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
                        <section className="py-12 md:py-24 bg-gray-900 overflow-hidden relative">
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

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
                        <section className="py-12 md:py-24 bg-gray-950 relative overflow-hidden">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-[#E71D36]/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                            <div className="max-w-7xl mx-auto px-4 relative z-10">
                                <div className="grid md:grid-cols-2 gap-20 items-center">
                                    <div className="order-2 md:order-1">
                                        <div className="text-left mb-12">
                                            <span className="text-[#E71D36] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                                /// POURQUOI CHOISIR WELKI ?
                                            </span>
                                            <h2 className="text-3xl md:text-5xl font-black mt-2 text-white leading-tight">
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
                                    <div id="elagage" className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-[#037971]/50 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_40px_-5px_rgba(3,121,113,0.3)] hover:-translate-y-2">
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
                                    <div id="entretien" className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-[#037971]/50 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_40px_-5px_rgba(3,121,113,0.3)] hover:-translate-y-2">
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
                                    <div id="paysagisme" className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-[#037971]/50 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_40px_-5px_rgba(3,121,113,0.3)] hover:-translate-y-2">
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


                            {/* HIGH IMPACT RISK WARNING - REDESIGNED LIGHTNING BOLT (GREEN) */}
                            <section className="relative py-12 md:py-24 bg-gray-950 overflow-hidden">

                                {/* 1. HEADER (Title above sections) */}
                                <div className="max-w-7xl mx-auto px-4 relative z-20 text-center mb-12 md:mb-16">
                                    <div className="inline-flex items-center gap-2 bg-[#037971]/10 backdrop-blur border border-[#037971]/20 rounded-full px-4 py-1.5 text-[#037971] text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(3,121,113,0.2)]">
                                        <AlertTriangle size={14} className="text-[#037971]" /> CADRE LÉGAL & OBLIGATIONS
                                    </div>
                                    <h2 className="text-3xl md:text-6xl font-black text-white leading-tight drop-shadow-xl">
                                        Entretien des haies : <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#037971] to-teal-400">Que dit la Loi ?</span>
                                    </h2>
                                </div>

                                {/* 2. LIGHTNING BOLT CONTAINER */}
                                <div className="relative w-full h-auto md:h-[500px] flex flex-col md:block">

                                    {/* Panel 1: Code Civil (Left) */}
                                    <div
                                        className="
                                            relative w-full h-[350px] md:absolute md:inset-0 md:h-full 
                                            flex flex-col justify-center items-center md:items-start p-8 md:pl-20 
                                            group z-10 hover:z-20
                                            md:[clip-path:polygon(0_0,_36%_0,_32%_50%,_35%_50%,_31%_100%,_0_100%)]
                                            bg-gray-900 border-b md:border-b-0 border-gray-800
                                        "
                                    >
                                        {/* Background */}
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#037971]/90 via-[#025c56]/80 to-gray-900/90 group-hover:opacity-100 transition-all duration-700"></div>

                                        {/* Content */}
                                        <div className="relative z-10 text-center md:text-left max-w-sm">
                                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto md:mx-0 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                                                <Scale size={32} />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                                                Code Civil<br />(Art. 671)
                                            </h3>
                                            <p className="text-teal-100 font-medium text-lg leading-snug">
                                                Tout arbre ou haie dépassant <strong className="text-white border-b border-white/30">2 mètres</strong> de hauteur doit être planté à distance réglementaire.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Panel 2: Nid à Parasites (Center) */}
                                    <div
                                        className="
                                            relative w-full h-[350px] md:absolute md:inset-0 md:h-full 
                                            flex flex-col justify-center items-center p-8 
                                            group z-10 hover:z-20
                                            md:[clip-path:polygon(36%_0,_71%_0,_67%_50%,_70%_50%,_66%_100%,_31%_100%,_35%_50%,_32%_50%)]
                                            bg-gray-800 border-b md:border-b-0 border-gray-700
                                        "
                                    >
                                        {/* Background */}
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black/80 group-hover:from-[#037971]/20 transition-all duration-700"></div>

                                        {/* Content */}
                                        <div className="relative z-10 text-center max-w-sm mx-auto">
                                            <div className="w-16 h-16 bg-[#037971]/20 rounded-2xl flex items-center justify-center text-[#037971] mb-6 mx-auto shadow-[0_0_20px_rgba(3,121,113,0.2)] group-hover:scale-110 transition-transform duration-300 border border-[#037971]/30">
                                                <Bug size={32} />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                                                Nid à<br />Parasites
                                            </h3>
                                            <p className="text-gray-300 font-medium text-lg leading-snug">
                                                Une haie non entretenue devient l'habitat parfait pour les <strong className="text-white border-b border-[#037971]/50">rats et frelons</strong>.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Panel 3: Responsabilité (Right) */}
                                    <div
                                        className="
                                            relative w-full h-[350px] md:absolute md:inset-0 md:h-full 
                                            flex flex-col justify-center items-center md:items-end p-8 md:pr-20
                                            group z-10 hover:z-20
                                            md:[clip-path:polygon(71%_0,_100%_0,_100%_100%,_66%_100%,_70%_50%,_67%_50%)]
                                            bg-gray-900
                                        "
                                    >
                                        {/* Background */}
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                        <div className="absolute inset-0 bg-gradient-to-bl from-[#037971]/90 via-[#025c56]/80 to-gray-900/90 group-hover:opacity-100 transition-all duration-700"></div>

                                        {/* Content */}
                                        <div className="relative z-10 text-center md:text-right max-w-sm">
                                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto md:ml-auto shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                                                <Gavel size={32} />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                                                Responsabilité<br />& Amendes
                                            </h3>
                                            <p className="text-teal-100 font-medium text-lg leading-snug">
                                                Empiéter sur la voie publique engage votre responsabilité épnale. Le maire peut ordonner un <strong className="text-white border-b border-white/30">élagage d'office</strong>.
                                            </p>
                                        </div>
                                    </div>

                                    {/* SEPARATORS (Desktop Only) */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <defs>
                                            <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
                                                <feGaussianBlur stdDeviation="1.5" result="blur" />
                                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                            </filter>
                                        </defs>
                                        <path
                                            d="M 36 0 L 32 50 L 35 50 L 31 100"
                                            stroke="white"
                                            strokeWidth="3"
                                            vectorEffect="non-scaling-stroke"
                                            fill="none"
                                            className="drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
                                        />
                                        <path
                                            d="M 71 0 L 67 50 L 70 50 L 66 100"
                                            stroke="white"
                                            strokeWidth="3"
                                            strokeLinecap="square"
                                            strokeLinejoin="miter"
                                            vectorEffect="non-scaling-stroke"
                                            fill="none"
                                            className="drop-shadow-[0_0_5px_rgba(255,255,255,0.6)] z-30 relative"
                                        />
                                    </svg>
                                </div>
                            </section>

                            {/* MERGED SECTION: METHODOLOGY & PAYSAGISME */}
                            <section className="py-12 md:py-24 relative overflow-hidden text-white">
                                {/* Distinct Background - Premium Dark */}
                                <div className="absolute inset-0 bg-gray-950"></div>
                                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800/50 via-gray-950 to-gray-950"></div>

                                {/* Subtle Brand Glows */}
                                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#037971]/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none mix-blend-screen"></div>
                                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0241cd]/20 rounded-full blur-[120px] translate-y-1/2 pointer-events-none mix-blend-screen"></div>

                                {/* Mesh Texture */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

                                {/* Borders */}
                                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>

                                {/* BLOCK 1: METHODOLOGY - GREEN */}
                                <div className="max-w-7xl mx-auto px-4 relative z-10 py-12">
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

                                {/* BLOCK 2: PAYSAGISME GALLERY */}
                                <div className="max-w-7xl mx-auto px-4 relative z-10 py-12">
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
                                    <div id="immeubles" className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-[#0241cd]/50 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_40px_-5px_rgba(2,65,205,0.3)] hover:-translate-y-2">
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
                                    <div id="bureaux" className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-[#0241cd]/50 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_40px_-5px_rgba(2,65,205,0.3)] hover:-translate-y-2">
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
                                    <div id="chantier" className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-[#0241cd]/50 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_40px_-5px_rgba(2,65,205,0.3)] hover:-translate-y-2">
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

                            {/* MARKETING ARGUMENTS - CLEANING - NEW SECTION */}
                            {/* MARKETING ARGUMENTS - CLEANING - REDESIGNED LIGHTNING BOLT */}
                            <section className="relative py-12 md:py-24 bg-gray-950 overflow-hidden">

                                {/* 1. HEADER (Title above sections) */}
                                <div className="max-w-7xl mx-auto px-4 relative z-20 text-center mb-12 md:mb-16">
                                    <div className="inline-flex items-center gap-2 bg-[#0241cd]/10 backdrop-blur border border-[#0241cd]/20 rounded-full px-4 py-1.5 text-[#0241cd] text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(2,65,205,0.2)]">
                                        <Sparkles size={14} /> UN LEVIER DE PERFORMANCE
                                    </div>
                                    <h2 className="text-3xl md:text-6xl font-black text-white leading-tight drop-shadow-xl">
                                        Pourquoi la propreté est <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0241cd] to-blue-400">Stratégique</span> ?
                                    </h2>
                                </div>

                                {/* 2. LIGHTNING BOLT CONTAINER */}
                                <div className="relative w-full h-auto md:h-[500px] flex flex-col md:block">

                                    {/* Panel 1: Image de Marque (Left) */}
                                    <div
                                        className="
                                            relative w-full h-[350px] md:absolute md:inset-0 md:h-full 
                                            flex flex-col justify-center items-center md:items-start p-8 md:pl-20 
                                            group z-10 hover:z-20
                                            md:[clip-path:polygon(0_0,_36%_0,_32%_50%,_35%_50%,_31%_100%,_0_100%)]
                                            bg-gray-900 border-b md:border-b-0 border-gray-800
                                        "
                                    >
                                        {/* Background */}
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#0241cd]/90 via-[#012a8a]/80 to-gray-900/90 group-hover:opacity-100 transition-all duration-700"></div>

                                        {/* Content */}
                                        <div className="relative z-10 text-center md:text-left max-w-sm">
                                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto md:mx-0 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                                                <Trophy size={32} />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                                                Image de<br />Marque
                                            </h3>
                                            <p className="text-blue-100 font-medium text-lg leading-snug">
                                                Une propreté irréprochable inspire instantanément <strong className="text-white border-b border-white/30">confiance et sérieux</strong> à vos clients et partenaires.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Panel 2: Productivité (Center) */}
                                    <div
                                        className="
                                            relative w-full h-[350px] md:absolute md:inset-0 md:h-full 
                                            flex flex-col justify-center items-center p-8 
                                            group z-10 hover:z-20
                                            md:[clip-path:polygon(36%_0,_71%_0,_67%_50%,_70%_50%,_66%_100%,_31%_100%,_35%_50%,_32%_50%)]
                                            bg-gray-800 border-b md:border-b-0 border-gray-700
                                        "
                                    >
                                        {/* Background */}
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black/80 group-hover:from-[#0241cd]/20 transition-all duration-700"></div>

                                        {/* Content */}
                                        <div className="relative z-10 text-center max-w-sm mx-auto">
                                            <div className="w-16 h-16 bg-[#0241cd]/20 rounded-2xl flex items-center justify-center text-[#0241cd] mb-6 mx-auto shadow-[0_0_20px_rgba(2,65,205,0.2)] group-hover:scale-110 transition-transform duration-300 border border-[#0241cd]/30">
                                                <Users size={32} />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                                                Bien-être &<br />Productivité
                                            </h3>
                                            <p className="text-gray-300 font-medium text-lg leading-snug">
                                                Un environnement sain et ordonné <strong className="text-white border-b border-[#0241cd]/50">réduit le stress</strong> et favorise la concentration de vos équipes.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Panel 3: Santé (Right) */}
                                    <div
                                        className="
                                            relative w-full h-[350px] md:absolute md:inset-0 md:h-full 
                                            flex flex-col justify-center items-center md:items-end p-8 md:pr-20
                                            group z-10 hover:z-20
                                            md:[clip-path:polygon(71%_0,_100%_0,_100%_100%,_66%_100%,_70%_50%,_67%_50%)]
                                            bg-gray-900
                                        "
                                    >
                                        {/* Background */}
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                        <div className="absolute inset-0 bg-gradient-to-bl from-[#0241cd]/90 via-[#012a8a]/80 to-gray-900/90 group-hover:opacity-100 transition-all duration-700"></div>

                                        {/* Content */}
                                        <div className="relative z-10 text-center md:text-right max-w-sm">
                                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto md:ml-auto shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                                                <HeartPulse size={32} />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                                                Santé &<br />Hygiène
                                            </h3>
                                            <p className="text-blue-100 font-medium text-lg leading-snug">
                                                Un entretien régulier des points de contact <strong className="text-white border-b border-white/30">réduit l'absentéisme</strong> et protège la santé de tous.
                                            </p>
                                        </div>
                                    </div>

                                    {/* SEPARATORS (Desktop Only) */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <defs>
                                            <filter id="glow-strat" x="-20%" y="-20%" width="140%" height="140%">
                                                <feGaussianBlur stdDeviation="1.5" result="blur" />
                                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                            </filter>
                                        </defs>
                                        <path
                                            d="M 36 0 L 32 50 L 35 50 L 31 100"
                                            stroke="white"
                                            strokeWidth="3"
                                            vectorEffect="non-scaling-stroke"
                                            fill="none"
                                            className="drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
                                        />
                                        <path
                                            d="M 71 0 L 67 50 L 70 50 L 66 100"
                                            stroke="white"
                                            strokeWidth="3"
                                            strokeLinecap="square"
                                            strokeLinejoin="miter"
                                            vectorEffect="non-scaling-stroke"
                                            fill="none"
                                            className="drop-shadow-[0_0_5px_rgba(255,255,255,0.6)] z-30 relative"
                                        />
                                    </svg>
                                </div>
                            </section>

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

                {/* Multi-services Section */}
                {
                    (defaultTab === 'multi') && (
                        <div className="space-y-24">

                            {/* NEW SECTION: POURQUOI DELEGUER (ORANGE) - LIGHTNING BOLT */}
                            <section className="relative py-12 md:py-24 bg-gray-950 overflow-hidden">

                                {/* 1. HEADER (Title above sections) */}
                                <div className="max-w-7xl mx-auto px-4 relative z-20 text-center mb-12 md:mb-16">
                                    <div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 backdrop-blur border border-[#F59E0B]/20 rounded-full px-4 py-1.5 text-[#F59E0B] text-xs font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                        <Hammer size={14} className="text-[#F59E0B]" /> POURQUOI DÉLÉGUER ?
                                    </div>
                                    <h2 className="text-3xl md:text-6xl font-black text-white leading-tight drop-shadow-xl">
                                        Bricoler vous expose à des <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-amber-400">Risques Inutiles</span>
                                    </h2>
                                </div>

                                {/* 2. LIGHTNING BOLT CONTAINER */}
                                <div className="relative w-full h-auto md:h-[500px] flex flex-col md:block">

                                    {/* Panel 1: Sécurité (Left) */}
                                    <div
                                        className="
                                            relative w-full h-[350px] md:absolute md:inset-0 md:h-full 
                                            flex flex-col justify-center items-center md:items-start p-8 md:pl-20 
                                            group z-10 hover:z-20
                                            md:[clip-path:polygon(0_0,_36%_0,_32%_50%,_35%_50%,_31%_100%,_0_100%)]
                                            bg-gray-900 border-b md:border-b-0 border-gray-800
                                        "
                                    >
                                        {/* Background */}
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/90 via-[#d97706]/80 to-gray-900/90 group-hover:opacity-100 transition-all duration-700"></div>

                                        {/* Content */}
                                        <div className="relative z-10 text-center md:text-left max-w-sm">
                                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto md:mx-0 shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                                                <HardHat size={32} />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                                                Risque de<br />Blessure
                                            </h3>
                                            <p className="text-amber-100 font-medium text-lg leading-snug">
                                                Chutes d'escabeau, coupures... Le bricolage est la <strong className="text-white border-b border-white/30">1ère cause</strong> d'accidents domestiques en France.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Panel 2: Qualité (Center) */}
                                    <div
                                        className="
                                            relative w-full h-[350px] md:absolute md:inset-0 md:h-full 
                                            flex flex-col justify-center items-center p-8 
                                            group z-10 hover:z-20
                                            md:[clip-path:polygon(36%_0,_71%_0,_67%_50%,_70%_50%,_66%_100%,_31%_100%,_35%_50%,_32%_50%)]
                                            bg-gray-800 border-b md:border-b-0 border-gray-700
                                        "
                                    >
                                        {/* Background */}
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-gray-900 to-black/80 group-hover:from-[#F59E0B]/20 transition-all duration-700"></div>

                                        {/* Content */}
                                        <div className="relative z-10 text-center max-w-sm mx-auto">
                                            <div className="w-16 h-16 bg-[#F59E0B]/20 rounded-2xl flex items-center justify-center text-[#F59E0B] mb-6 mx-auto shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:scale-110 transition-transform duration-300 border border-[#F59E0B]/30">
                                                <Award size={32} />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                                                Finitions<br />Hasardeuses
                                            </h3>
                                            <p className="text-gray-300 font-medium text-lg leading-snug">
                                                Un résultat amateur peut dévaloriser votre bien. Optez pour des <strong className="text-white border-b border-[#F59E0B]/50">finitions impeccables</strong> et durables.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Panel 3: Coût (Right) */}
                                    <div
                                        className="
                                            relative w-full h-[350px] md:absolute md:inset-0 md:h-full 
                                            flex flex-col justify-center items-center md:items-end p-8 md:pr-20
                                            group z-10 hover:z-20
                                            md:[clip-path:polygon(71%_0,_100%_0,_100%_100%,_66%_100%,_70%_50%,_67%_50%)]
                                            bg-gray-900
                                        "
                                    >
                                        {/* Background */}
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                        <div className="absolute inset-0 bg-gradient-to-bl from-[#F59E0B]/90 via-[#d97706]/80 to-gray-900/90 group-hover:opacity-100 transition-all duration-700"></div>

                                        {/* Content */}
                                        <div className="relative z-10 text-center md:text-right max-w-sm">
                                            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto md:ml-auto shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-300">
                                                <BadgeEuro size={32} />
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                                                Coût des<br />Outils
                                            </h3>
                                            <p className="text-amber-100 font-medium text-lg leading-snug">
                                                Pourquoi acheter une perceuse à 200€ pour 2 trous ? Nous venons <strong className="text-white border-b border-white/30">100% équipés</strong>.
                                            </p>
                                        </div>
                                    </div>

                                    {/* SEPARATORS (Desktop Only) */}
                                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                                        <defs>
                                            <filter id="glow-orange" x="-20%" y="-20%" width="140%" height="140%">
                                                <feGaussianBlur stdDeviation="1.5" result="blur" />
                                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                            </filter>
                                        </defs>
                                        <path
                                            d="M 36 0 L 32 50 L 35 50 L 31 100"
                                            stroke="white"
                                            strokeWidth="3"
                                            vectorEffect="non-scaling-stroke"
                                            fill="none"
                                            className="drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
                                        />
                                        <path
                                            d="M 71 0 L 67 50 L 70 50 L 66 100"
                                            stroke="white"
                                            strokeWidth="3"
                                            strokeLinecap="square"
                                            strokeLinejoin="miter"
                                            vectorEffect="non-scaling-stroke"
                                            fill="none"
                                            className="drop-shadow-[0_0_5px_rgba(255,255,255,0.6)] z-30 relative"
                                        />
                                    </svg>
                                </div>
                            </section>

                            <div className="space-y-0">
                                {/* FEATURE 1: MONTAGE MEUBLES (Image Right / Text Left) */}
                                <section className="py-24 bg-gray-950 relative overflow-hidden border-b border-gray-800/50">
                                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#F59E0B]/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                                        <div className="grid md:grid-cols-2 gap-16 items-center">
                                            {/* Text Column */}
                                            <div className="order-2 md:order-1">
                                                <div className="mb-8">
                                                    <span className="text-[#F59E0B] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                                        /// ASSEMBLAGE EXPERT
                                                    </span>
                                                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                                                        Montage de Meubles <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-amber-300">Sans Stress</span>
                                                    </h2>
                                                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#F59E0B] pl-6">
                                                        Oubliez la complexité des notices et les heures perdues. Nous montons vos meubles rapidement et solidement, quelle que soit la marque.
                                                    </p>
                                                </div>
                                                <div className="space-y-6">
                                                    {[
                                                        { title: "Expertise Multi-Marques", desc: "IKEA, Conforama, But, ou mobilier design : nous maîtrisons toutes les techniques d'assemblage." },
                                                        { title: "Fixation Sécurisée", desc: "Ancrage mural solide adapté à votre type de mur (placo, brique, béton) pour une sécurité totale." },
                                                        { title: "Service Complet", desc: "Déballage, montage, mise en place définitive et évacuation des emballages." }
                                                    ].map((item, i) => (
                                                        <div key={i} className="flex gap-4 group">
                                                            <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center text-[#F59E0B] shrink-0 border border-[#F59E0B]/20 group-hover:scale-110 transition-transform duration-300">
                                                                <CheckCircle size={20} />
                                                            </div>
                                                            <div>
                                                                <h4 className="text-white font-bold text-lg group-hover:text-[#F59E0B] transition-colors">{item.title}</h4>
                                                                <p className="text-gray-400 text-sm">{item.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* Image Column */}
                                            <div className="order-1 md:order-2">
                                                <div className="relative rounded-3xl overflow-hidden h-[500px] border border-gray-800 group shadow-[0_0_50px_-10px_rgba(245,158,11,0.15)] hover:border-[#F59E0B]/50 transition-all duration-500">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10"></div>
                                                    <img src={imgMultiMontage} alt="Montage de meuble professionnel" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                                    <div className="absolute bottom-8 left-8 right-8 z-20">
                                                        <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                                            <div className="flex items-center gap-3 text-[#F59E0B] font-black uppercase text-sm tracking-wider">
                                                                <Hammer size={16} />
                                                                <span>Résultat Garanti</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* FEATURE 2: PEINTURE (Image Left / Text Right) */}
                                <section className="py-24 bg-gray-900/50 relative overflow-hidden border-b border-gray-800/50">
                                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#F59E0B]/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
                                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                                        <div className="grid md:grid-cols-2 gap-16 items-center">
                                            {/* Image Column */}
                                            <div className="order-1">
                                                <div className="relative rounded-3xl overflow-hidden h-[500px] border border-gray-800 group shadow-[0_0_50px_-10px_rgba(245,158,11,0.15)] hover:border-[#F59E0B]/50 transition-all duration-500">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10"></div>
                                                    <img src={imgMultiPeinture} alt="Peintre en action" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                                    <div className="absolute bottom-8 left-8 right-8 z-20">
                                                        <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                                            <div className="flex items-center gap-3 text-[#F59E0B] font-black uppercase text-sm tracking-wider">
                                                                <Paintbrush size={16} />
                                                                <span>Finitions Soignées</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Text Column */}
                                            <div className="order-2">
                                                <div className="mb-8">
                                                    <span className="text-[#F59E0B] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                                        /// PEINTURE & DÉCO
                                                    </span>
                                                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                                                        Redonnez Vie à <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-amber-300">Vos Espaces</span>
                                                    </h2>
                                                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#F59E0B] pl-6">
                                                        Du simple rafraîchissement au changement de couleur complet, nous assurons un travail de précision pour un rendu impeccable.
                                                    </p>
                                                </div>
                                                <div className="space-y-6">
                                                    {[
                                                        { title: "Préparation Minutieuse", desc: "Protection des sols et meubles, ponçage, et enduit de lissage pour des murs parfaits avant peinture." },
                                                        { title: "Peintures de Qualité", desc: "Utilisation de peintures professionnelles (Seigneurie, Tollens) pour un rendu durable et lessivable." },
                                                        { title: "Chantier Propre", desc: "Nettoyage méticuleux en fin de chantier. Votre intérieur reste impeccable." }
                                                    ].map((item, i) => (
                                                        <div key={i} className="flex gap-4 group">
                                                            <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center text-[#F59E0B] shrink-0 border border-[#F59E0B]/20 group-hover:scale-110 transition-transform duration-300">
                                                                <CheckCircle size={20} />
                                                            </div>
                                                            <div>
                                                                <h4 className="text-white font-bold text-lg group-hover:text-[#F59E0B] transition-colors">{item.title}</h4>
                                                                <p className="text-gray-400 text-sm">{item.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                {/* FEATURE 3: HOMME DE MAIN (Image Right / Text Left) */}
                                <section className="py-24 bg-gray-950 relative overflow-hidden">
                                    <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#F59E0B]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                                        <div className="grid md:grid-cols-2 gap-16 items-center">
                                            {/* Text Column */}
                                            <div className="order-2 md:order-1">
                                                <div className="mb-8">
                                                    <span className="text-[#F59E0B] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                                        /// HOMME DE MAIN
                                                    </span>
                                                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                                                        Le "Couteau Suisse" de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E0B] to-amber-300">la Maison</span>
                                                    </h2>
                                                    <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#F59E0B] pl-6">
                                                        Tous ces petits travaux que vous repoussez faute de temps ou d'outils ? Nous les réalisons en un clin d'œil.
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {[
                                                        "Pose de Tringles", "Fixation Cadres", "Changement Ampoules", "Pose Étatgères",
                                                        "Joints Silicone", "Serrurerie Simple", "Rabotage Portes", "Installation Déco"
                                                    ].map((item, i) => (
                                                        <div key={i} className="flex items-center gap-3 bg-gray-900/50 p-3 rounded-lg border border-gray-800 hover:border-[#F59E0B]/30 transition-colors">
                                                            <div className="w-2 h-2 rounded-full bg-[#F59E0B]"></div>
                                                            <span className="text-gray-300 font-medium text-sm">{item}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="mt-8 bg-[#F59E0B]/10 p-6 rounded-2xl border border-[#F59E0B]/20">
                                                    <h4 className="text-[#F59E0B] font-bold mb-2 flex items-center gap-2">
                                                        <Wrench size={20} /> Outillage Inclus
                                                    </h4>
                                                    <p className="text-gray-400 text-sm">
                                                        Nous intervenons avec notre propre matériel professionnel (perceuse, visseuse, niveau laser, etc.). Vous n'avez rien à fournir.
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Image Column */}
                                            <div className="order-1 md:order-2">
                                                <div className="relative rounded-3xl overflow-hidden h-[500px] border border-gray-800 group shadow-[0_0_50px_-10px_rgba(245,158,11,0.15)] hover:border-[#F59E0B]/50 transition-all duration-500">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent z-10"></div>
                                                    <img src={imgMultiBricolage} alt="Bricolage et travaux divers" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                                    <div className="absolute bottom-8 left-8 right-8 z-20">
                                                        <div className="bg-black/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                                            <div className="flex items-center gap-3 text-[#F59E0B] font-black uppercase text-sm tracking-wider">
                                                                <Briefcase size={16} />
                                                                <span>Service Polyvalent</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    )
                }
            </div >
        </Layout >
    );

};

export default Services;
