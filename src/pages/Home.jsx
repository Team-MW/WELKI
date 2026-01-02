import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { ArrowRight, ShieldCheck, TreePine, Sparkles, CheckCircle2, FileCheck, Star, MapPin, Mountain, CalendarCheck, ClipboardCheck, Award, UserCheck, Zap, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import certibiocideImg from '../assets/certibiocide-1.png';
import franceSudOuestMap from '../assets/france-sud-ouest-map-nobg.png';
import imgGreenHero from '../assets/man-uniform-trimming-hedge-summer-time.jpg';
import imgCleanHero from '../assets/full-shot-man-vacuuming-office-floor.jpg';
import img3DHero from '../assets/people-wearing-protective-equipment-disinfecting-dangerous-area.jpg';
import logoImg from '../assets/logo blanc.png';


const Home = () => {
    const [ctaStyle, setCtaStyle] = useState({ position: 'fixed', bottom: '2rem', right: '2rem' });

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById('site-footer');
            if (footer) {
                const footerRect = footer.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Stop 20px above footer
                if (footerRect.top < windowHeight) {
                    // Stick above footer
                    setCtaStyle({
                        position: 'absolute',
                        bottom: `${window.scrollY + windowHeight - footerRect.top + 20}px`, // This logic is tricky with fixed. Better to switch to absolute relative to body if footer is visible? No, absolute relative to document is easier if we calculate offset.
                        // SIMPLER APPROACH: Hide it or push it up? Pushing fixed element up is visually jarring if scrolling fast.
                        // Let's use simple conditional fixed positioning:
                        // If distance to bottom is small, add offset.
                        // Actually, easiest way for "stops at footer":
                        // Calculate how much of footer is visible.
                        // If footer visible > 0, bottom = 2rem + visibleHeight.
                    });
                    // Using a purely fixed positioning approach with dynamic bottom
                    const visibleFooterHeight = Math.max(0, windowHeight - footerRect.top);
                    if (visibleFooterHeight > 0) {
                        setCtaStyle({ position: 'fixed', bottom: `${20 + visibleFooterHeight}px`, right: '2rem' });
                    } else {
                        setCtaStyle({ position: 'fixed', bottom: '2rem', right: '2rem' });
                    }
                } else {
                    setCtaStyle({ position: 'fixed', bottom: '2rem', right: '2rem' });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (

        <Layout title="Accueil">
            <div className="bg-gray-950 min-h-screen text-white">

                {/* 1. HERO SECTION - Lightning Bolt Layout - Swapped Order */}
                {/* 1. HERO SECTION - Lightning Bolt Layout - Responsive Refactor */}
                <section className="relative flex flex-col md:block h-auto md:h-[95vh] bg-gray-950 overflow-hidden">

                    {/* Section 1: NETTOYAGE - Mobile: Top / Desktop: Left Lightning */}
                    <div
                        className="
                            relative w-full min-h-[35vh] h-auto md:absolute md:inset-0 md:h-full 
                            group transition-all duration-500 ease-in-out cursor-pointer 
                            z-10 hover:z-50 origin-center
                            md:[clip-path:polygon(0_0,_36%_0,_32%_50%,_35%_50%,_31%_100%,_0_100%)]
                        "
                    >
                        {/* Optimized Image */}
                        <img
                            src={imgCleanHero}
                            alt="Nettoyage Professionnel"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            fetchPriority="high"
                        />

                        <Link to="/nettoyage" className="absolute inset-0 z-10" aria-label="Nettoyage"></Link>
                        {/* Improved Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0241cd]/80 via-[#0241cd]/40 to-gray-900/60 group-hover:from-[#0241cd]/90 group-hover:via-[#0241cd]/60 group-hover:to-gray-900/80 transition-all duration-700"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start p-6 md:p-12 text-center md:text-left w-full md:w-[40%] h-full pointer-events-none">

                            <div className="relative z-20 transform md:group-hover:translate-x-4 transition-transform duration-500">
                                <span className="inline-block py-1 pl-1 pr-3 text-[#0241cd] bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] md:ml-1">
                                    /// NETTOYAGE PRO
                                </span>
                                <h2 className="text-3xl md:text-7xl font-black text-white mb-2 uppercase tracking-tighter drop-shadow-2xl leading-[0.9] md:ml-1">
                                    Propreté & <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white">Hygiène</span>
                                </h2>
                                <ul className="hidden md:block text-blue-50 text-xl font-medium space-y-1 mt-6 opacity-80 md:ml-2">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>Bureaux & Tertiaire</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>Immeubles / Copro</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>Fin de chantier</li>
                                </ul>
                            </div>

                            <div className="hidden md:flex gap-4 mt-10 opacity-100 transform translate-y-0 transition-all duration-500 md:ml-2 pointer-events-auto">
                                <Link to="/nettoyage" className="px-8 py-3 bg-white text-[#0241cd] font-bold text-sm rounded-xl hover:bg-gray-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-20 hover:scale-105">
                                    Découvrir
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: HYGIÈNE 3D - Mobile: Middle / Desktop: Middle Lightning */}
                    <div
                        className="
                            relative w-full min-h-[35vh] h-auto md:absolute md:inset-0 md:h-full 
                            group transition-all duration-500 ease-in-out cursor-pointer 
                            z-10 hover:z-50 origin-center
                            md:[clip-path:polygon(36%_0,_71%_0,_67%_50%,_70%_50%,_66%_100%,_31%_100%,_35%_50%,_32%_50%)]
                        "
                    >
                        {/* Optimized Image */}
                        <img
                            src={img3DHero}
                            alt="Hygiène 3D et Anti-nuisibles"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            fetchPriority="high"
                        />

                        <Link to="/hygiene-3d" className="absolute inset-0 z-10" aria-label="Anti Nuisible"></Link>
                        {/* Improved Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#E71D36]/80 via-[#E71D36]/40 to-gray-900/60 group-hover:from-[#E71D36]/90 group-hover:via-[#E71D36]/60 group-hover:to-gray-900/80 transition-all duration-700"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center pointer-events-none">

                            <div className="relative z-20 transform md:group-hover:scale-105 transition-transform duration-500">
                                <span className="inline-block py-1 px-4 text-[#E71D36] bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                                    /// LUTTE ANTI-NUISIBLES
                                </span>
                                <h2 className="text-3xl md:text-7xl font-black text-white mb-2 uppercase tracking-tighter drop-shadow-2xl leading-[0.9]">
                                    Anti <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-100 to-white">Nuisible</span>
                                </h2>
                                <ul className="hidden md:block text-red-50 text-xl font-medium space-y-1 mt-6 opacity-80">
                                    <li className="flex items-center justify-center gap-2">Dératisation</li>
                                    <li className="flex items-center justify-center gap-2">Désinsectisation</li>
                                    <li className="flex items-center justify-center gap-2">Désinfection</li>
                                </ul>
                            </div>

                            <div className="hidden md:flex gap-4 mt-10 opacity-100 transform translate-y-0 transition-all duration-500 justify-center pointer-events-auto">
                                <Link to="/hygiene-3d" className="px-8 py-3 bg-white text-[#E71D36] font-bold text-sm rounded-xl hover:bg-gray-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-20 hover:scale-105">
                                    Découvrir
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: ESPACES VERTS - Mobile: Bottom / Desktop: Right Lightning */}
                    <div
                        className="
                            relative w-full min-h-[35vh] h-auto md:absolute md:inset-0 md:h-full 
                            group transition-all duration-500 ease-in-out cursor-pointer 
                            z-10 hover:z-50 origin-center
                            md:[clip-path:polygon(71%_0,_100%_0,_100%_100%,_66%_100%,_70%_50%,_67%_50%)]
                        "
                    >
                        {/* Optimized Image */}
                        <img
                            src={imgGreenHero}
                            alt="Espaces Verts et Paysagisme"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            fetchPriority="high"
                        />

                        <Link to="/espaces-verts" className="absolute inset-0 z-10" aria-label="Espaces Verts"></Link>
                        {/* Improved Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-[#037971]/80 via-[#037971]/40 to-gray-900/60 group-hover:from-[#037971]/90 group-hover:via-[#037971]/60 group-hover:to-gray-900/80 transition-all duration-700"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-end p-6 md:p-12 text-center md:text-right w-full h-full pointer-events-none">
                            <div className="w-full md:w-[40%] flex flex-col items-center md:items-end relative z-20 transform md:group-hover:-translate-x-4 transition-transform duration-500">

                                <span className="inline-block py-1 pr-1 pl-3 text-[#037971] bg-white/90 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] md:mr-12">
                                    /// EXPERTISE VÉGÉTALE
                                </span>

                                <h2 className="text-3xl md:text-7xl font-black text-white mb-2 uppercase tracking-tighter drop-shadow-2xl leading-[0.9] md:mr-12">
                                    Espaces <br className="hidden md:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-white">Verts</span>
                                </h2>
                                <ul className="hidden md:block text-green-50 text-xl font-medium space-y-1 mt-6 opacity-80 md:mr-12 text-right">
                                    <li className="flex items-center justify-end gap-2">Élagage<div className="w-1.5 h-1.5 rounded-full bg-green-300"></div></li>
                                    <li className="flex items-center justify-end gap-2">Entretien Jardin<div className="w-1.5 h-1.5 rounded-full bg-green-300"></div></li>
                                    <li className="flex items-center justify-end gap-2">Paysagisme<div className="w-1.5 h-1.5 rounded-full bg-green-300"></div></li>
                                </ul>
                                <div className="hidden md:flex gap-4 mt-10 opacity-100 transform translate-y-0 transition-all duration-500 md:mr-12 pointer-events-auto">
                                    <Link to="/espaces-verts" className="px-8 py-3 bg-white text-[#037971] font-bold text-sm rounded-xl hover:bg-gray-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] relative z-20 hover:scale-105">
                                        Découvrir
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* LIGHTNING BOLT SEPARATORS (Desktop Only) - Enhanced with Glow */}
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

                {/* NEW: FIXED CTA POPUP (Bottom Left) */}
                {/* NEW: FIXED CTA POPUP (Bottom Right) - Premium Design */}
                <div style={ctaStyle} className="z-[100] transition-all duration-100 ease-out animate-bounce-subtle max-w-[95vw] md:max-w-auto">
                    <Link to="/contact" className="relative group block perspective-1000">
                        {/* 1. OUTER GLOW - Static but strong */}
                        <div className="absolute -inset-4 bg-[#037971] rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>

                        {/* 2. SPINNING BORDER CONTAINER */}
                        <div className="relative p-[2px] rounded-2xl overflow-hidden bg-transparent transform transition-transform duration-300 group-hover:scale-105">
                            {/* The Spinning Conic Gradient */}
                            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg_180deg,#037971_180deg_250deg,transparent_250deg_360deg)] animate-[spin_4s_linear_infinite] opacity-100 group-hover:animate-[spin_2s_linear_infinite]"></div>

                            {/* Secondary chaser for color richness */}
                            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_180deg,transparent_0deg_180deg,#0241cd_180deg_250deg,transparent_250deg_360deg)] animate-[spin_4s_linear_infinite_reverse] opacity-100"></div>

                            {/* 3. INNER CARD CONTENT */}
                            <div className="relative bg-gray-950 rounded-[14px] px-4 py-3 md:px-8 md:py-5 flex items-center gap-3 md:gap-6 overflow-hidden">

                                {/* Background Mesh/Noise */}
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 z-0"></div>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#037971]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#0241cd]/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

                                {/* Icon with 'Holographic' feel */}
                                <div className="relative z-10 w-10 h-10 md:w-14 md:h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-950 border border-gray-700/50 shadow-lg group-hover:border-[#037971]/50 transition-colors duration-300">
                                    <div className="absolute inset-0 bg-[#037971]/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <FileCheck size={20} className="text-white relative z-10 group-hover:text-[#037971] transition-colors duration-300 md:w-[28px] md:h-[28px]" strokeWidth={2} />
                                </div>

                                {/* Text Stack */}
                                <div className="relative z-10 flex flex-col min-w-[120px] md:min-w-[150px]">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#037971] animate-ping"></div>
                                        <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-[#037971] drop-shadow-sm">
                                            Offre Spéciale
                                        </span>
                                    </div>
                                    <span className="text-lg md:text-2xl font-black text-[#E71D36] transition-all duration-300 transform group-hover:translate-x-1">
                                        Audit Gratuit
                                    </span>
                                </div>

                                {/* Action Button */}
                                <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[#E71D36] group-hover:bg-[#E71D36] group-hover:border-[#E71D36] group-hover:text-white transition-all duration-300 shadow-xl ml-auto">
                                    <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500 md:w-[20px] md:h-[20px]" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* 2. REASSURANCE STRIP - Interactive & Clean - REDESIGNED */}
                <div className="bg-gray-950 py-10 md:py-12 border-b border-gray-900 relative z-20 shadow-2xl overflow-hidden">
                    {/* GLOW SEPARATORS (EXTENSION OF BOLTS) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="fadeLine" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="white" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M 31 0 L 29 100"
                            stroke="url(#fadeLine)"
                            strokeWidth="2"
                            vectorEffect="non-scaling-stroke"
                            fill="none"
                            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                        />
                        <path
                            d="M 66 0 L 64 100"
                            stroke="url(#fadeLine)"
                            strokeWidth="2"
                            vectorEffect="non-scaling-stroke"
                            fill="none"
                            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                        />
                    </svg>

                    <div className="w-full h-full relative z-10">
                        <div className="flex flex-col md:flex-row w-full h-full">
                            {[
                                { text: "24h/24 7j/7", icon: <Zap />, color: "text-[#0241cd]", glow: "shadow-[#0241cd]" },
                                { text: "Devis 100% Gratuit", icon: <FileCheck />, color: "text-[#E71D36]", glow: "shadow-[#E71D36]" },
                                { text: "Entreprise Agréée", icon: <ShieldCheck />, color: "text-[#037971]", glow: "shadow-[#037971]" }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex-1 flex flex-col items-center justify-center group p-4 md:p-6 hover:bg-white/5 transition-all duration-300 cursor-default relative"
                                >
                                    <div className={`w-16 h-16 md:w-20 md:h-20 bg-gray-900 border border-gray-800 rounded-3xl flex items-center justify-center ${item.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl group-hover:${item.glow}/50`}>
                                        {React.cloneElement(item.icon, { size: 32, strokeWidth: 2 })}
                                    </div>
                                    <span className="text-white font-black uppercase tracking-widest text-sm md:text-base transition-colors text-center">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* NEW: Single Point of Contact Banner - Full Width */}
                <div className="bg-gray-950 border-b border-gray-800 relative z-20 py-12 md:py-20 overflow-hidden">

                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#037971]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 text-center md:text-left">
                        <div className="flex-1">
                            <span className="inline-block px-4 py-1.5 bg-[#037971]/10 text-[#037971] rounded-full font-bold text-xs tracking-widest uppercase mb-6 border border-[#037971]/20">
                                SIMPLIFIEZ-VOUS LA VIE
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                                1 Client = 1 Interlocuteur Unique
                            </h2>
                            <p className="text-gray-400 font-medium text-lg md:text-xl leading-relaxed max-w-2xl">
                                Pas de multiplication des prestataires. WELKI centralise tout.
                                <br className="hidden md:block" />
                                <span className="mt-4 block font-medium text-xl md:text-2xl">
                                    <span className="text-[#E71D36] font-bold">Anti Nuisible</span> + <span className="text-[#037971] font-bold">Espaces Verts</span> + <span className="text-[#0241cd] font-bold">Nettoyage</span> + <span className="text-[#F59E0B] font-bold">Multi Services</span> = <span className="text-white font-bold">Une seule facture.</span>
                                </span>
                            </p>
                        </div>
                        <div className="flex-shrink-0 relative">
                            {/* Logo positioned just above the button */}
                            <img
                                src={logoImg}
                                alt=""
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[250px] opacity-[0.8] pointer-events-none select-none z-0"
                            />
                            <Link to="/contact" className="inline-flex items-center px-8 py-4 rounded-xl bg-[#037971] text-white font-bold text-lg hover:bg-[#025e57] transition-all shadow-[0_0_20px_-5px_rgba(3,121,113,0.4)] hover:shadow-[0_0_30px_-5px_rgba(3,121,113,0.6)] hover:-translate-y-1 group">
                                Discuter de mon projet
                                <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={24} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* NEW: QUI SOMMES NOUS - Premium Feature Grid */}
                <section className="py-12 md:py-20 relative overflow-hidden text-white">
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

                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <div className="text-center mb-16">
                            <span className="text-[#037971] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
                                /// L'EXCELLENCE AU SERVICE DE VOTRE SÉRÉNITÉ
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
                                QUI SOMMES-NOUS ?
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Plus qu'un prestataire, WELKI est votre partenaire de confiance pour la gestion globale de votre environnement.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

                            {/* Card 1: Proximité & Réactivité (BLUE theme) */}
                            <div className="relative group perspective-1000 h-full">
                                {/* Glow */}
                                <div className="absolute -inset-1 bg-[#0241cd] rounded-[2rem] blur-[20px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                {/* Spinning Container */}
                                <div className="relative p-[2px] rounded-[1.5rem] overflow-hidden bg-transparent h-full transform transition-transform duration-300 hover:scale-[1.02]">
                                    {/* Spinners */}
                                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg_180deg,#0241cd_180deg_250deg,transparent_250deg_360deg)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_180deg,transparent_0deg_180deg,#ffffff_180deg_250deg,transparent_250deg_360deg)] animate-[spin_4s_linear_infinite_reverse] opacity-0 group-hover:opacity-10 opacity-0 transition-opacity duration-500"></div>

                                    {/* Inner Content */}
                                    <div className="relative bg-gray-950 rounded-[1.4rem] p-8 h-full border border-gray-800 group-hover:border-transparent transition-colors duration-300 flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-[#0241cd]/10 flex items-center justify-center text-[#0241cd] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(2,65,205,0.3)]">
                                            <Zap size={32} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#0241cd] transition-colors">Proximité & Réactivité</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Nos équipes locales interviennent en temps record. Une présence terrain qui garantit une compréhension immédiate de vos enjeux.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Savoir-Faire Certifié (RED theme) */}
                            <div className="relative group perspective-1000 h-full">
                                {/* Glow */}
                                <div className="absolute -inset-1 bg-[#E71D36] rounded-[2rem] blur-[20px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                {/* Spinning Container */}
                                <div className="relative p-[2px] rounded-[1.5rem] overflow-hidden bg-transparent h-full transform transition-transform duration-300 hover:scale-[1.02]">
                                    {/* Spinners */}
                                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg_180deg,#E71D36_180deg_250deg,transparent_250deg_360deg)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_180deg,transparent_0deg_180deg,#ffffff_180deg_250deg,transparent_250deg_360deg)] animate-[spin_4s_linear_infinite_reverse] opacity-0 group-hover:opacity-10 opacity-0 transition-opacity duration-500"></div>

                                    {/* Inner Content */}
                                    <div className="relative bg-gray-950 rounded-[1.4rem] p-8 h-full border border-gray-800 group-hover:border-transparent transition-colors duration-300 flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-[#E71D36]/10 flex items-center justify-center text-[#E71D36] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(231,29,54,0.3)]">
                                            <Award size={32} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#E71D36] transition-colors">Savoir-Faire Certifié</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Agrément Certibiocide et protocoles stricts. Nos experts sont formés en continu pour vous offrir l'excellence technique.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Innovation & Écologie (GREEN theme) */}
                            <div className="relative group perspective-1000 h-full">
                                {/* Glow */}
                                <div className="absolute -inset-1 bg-[#037971] rounded-[2rem] blur-[20px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                                {/* Spinning Container */}
                                <div className="relative p-[2px] rounded-[1.5rem] overflow-hidden bg-transparent h-full transform transition-transform duration-300 hover:scale-[1.02]">
                                    {/* Spinners */}
                                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg_180deg,#037971_180deg_250deg,transparent_250deg_360deg)] animate-[spin_4s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_180deg,transparent_0deg_180deg,#ffffff_180deg_250deg,transparent_250deg_360deg)] animate-[spin_4s_linear_infinite_reverse] opacity-0 group-hover:opacity-10 opacity-0 transition-opacity duration-500"></div>

                                    {/* Inner Content */}
                                    <div className="relative bg-gray-950 rounded-[1.4rem] p-8 h-full border border-gray-800 group-hover:border-transparent transition-colors duration-300 flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-2xl bg-[#037971]/10 flex items-center justify-center text-[#037971] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_-5px_rgba(3,121,113,0.3)]">
                                            <Leaf size={32} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#037971] transition-colors">Innovation & Écologie</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            Nous privilégions les traitements raisonnés et les technologies de pointe pour protéger votre environnement durablement.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* 3. EXPERTISE SECTION - Cards with Depth */}
                {/* 3. EXPERTISE SECTION - Compact Strip - REDESIGNED */}
                <section className="relative h-auto md:h-[400px] bg-gray-950 overflow-hidden text-white">

                    {/* Panel 1: NETTOYAGE */}
                    <div
                        className="
                             relative w-full h-[300px] md:absolute md:inset-0 md:h-full 
                             flex flex-col justify-center items-center md:items-start p-8 md:pl-16 
                             group z-10 hover:z-20
                             md:[clip-path:polygon(0_0,_36%_0,_32%_50%,_35%_50%,_31%_100%,_0_100%)]
                         "
                    >
                        <img src={imgCleanHero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#0241cd]/80 via-[#0241cd]/40 to-gray-900/60 group-hover:from-[#0241cd]/90 group-hover:via-[#0241cd]/60 group-hover:to-gray-900/80 transition-all duration-700"></div>

                        <div className="relative z-10 text-center md:text-left h-full flex flex-col justify-center">
                            <p className="text-white font-semibold text-xl md:text-3xl leading-tight max-w-md drop-shadow-lg">
                                Propreté éclatante pour vos locaux.<br />L'hygiène parfaite, sans compromis.
                            </p>
                            <Link to="/nettoyage" className="mt-8 inline-flex items-center gap-2 text-white font-bold border-b-2 border-white/30 hover:border-white transition-all text-sm uppercase tracking-wider pb-1 w-fit group-hover:translate-x-2 duration-300">
                                En savoir plus <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Panel 2: HYGIÈNE 3D */}
                    <div
                        className="
                             relative w-full h-[300px] md:absolute md:inset-0 md:h-full 
                             flex flex-col justify-center items-center p-8 
                             group z-10 hover:z-20
                             md:[clip-path:polygon(36%_0,_71%_0,_67%_50%,_70%_50%,_66%_100%,_31%_100%,_35%_50%,_32%_50%)]
                         "
                    >
                        <img src={img3DHero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#E71D36]/80 via-[#E71D36]/40 to-gray-900/60 group-hover:from-[#E71D36]/90 group-hover:via-[#E71D36]/60 group-hover:to-gray-900/80 transition-all duration-700"></div>

                        <div className="relative z-10 text-center h-full flex flex-col justify-center items-center">
                            <p className="text-white font-semibold text-xl md:text-3xl leading-tight max-w-md mx-auto drop-shadow-lg">
                                Stop aux nuisibles.<br />Intervention choc, rapide et discrète.
                            </p>
                            <Link to="/hygiene-3d" className="mt-8 inline-flex items-center gap-2 text-white font-bold border-b-2 border-white/30 hover:border-white transition-all text-sm uppercase tracking-wider pb-1 group-hover:scale-105 duration-300">
                                En savoir plus <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Panel 3: ESPACES VERTS */}
                    <div
                        className="
                             relative w-full h-[300px] md:absolute md:inset-0 md:h-full 
                             flex flex-col justify-center items-center md:items-end p-8 md:pr-16 
                             group z-10 hover:z-20
                             md:[clip-path:polygon(71%_0,_100%_0,_100%_100%,_66%_100%,_70%_50%,_67%_50%)]
                         "
                    >
                        <img src={imgGreenHero} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#037971]/80 via-[#037971]/40 to-gray-900/60 group-hover:from-[#037971]/90 group-hover:via-[#037971]/60 group-hover:to-gray-900/80 transition-all duration-700"></div>

                        <div className="relative z-10 text-center md:text-right h-full flex flex-col justify-center items-center md:items-end">
                            <p className="text-white font-semibold text-xl md:text-3xl leading-tight max-w-md ml-auto drop-shadow-lg">
                                Sublimez vos extérieurs.<br />Des jardins soignés en toute saison.
                            </p>
                            <Link to="/espaces-verts" className="mt-8 inline-flex items-center gap-2 text-white font-bold border-b-2 border-white/30 hover:border-white transition-all text-sm uppercase tracking-wider pb-1 w-fit group-hover:-translate-x-2 duration-300">
                                En savoir plus <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* SEPARATORS (Desktop Only) - Matching Hero Exact Paths */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <filter id="glow-expertise" x="-20%" y="-20%" width="140%" height="140%">
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

                {/* 5. ZONES & TRUST - MERGED SECTION */}
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

                    {/* BLOCK 1: ZONES INTERVENTION */}
                    <div className="max-w-7xl mx-auto px-4 relative z-10 py-12">
                        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                            <div className="flex-1">
                                <span className="text-[#037971] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
                                    /// NOTRE RAYON D'ACTION
                                </span>
                                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                                    Une Présence <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#037971] to-teal-400">dans tout le Sud Ouest</span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    Nos équipes mobiles sillonnent les grandes villes du Sud Ouest pour vous garantir une réactivité optimale.
                                    <br />
                                    <span className="text-white font-bold block mt-2">✨ Déplacement dans toute la France sur demande.</span>
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6">
                                    {[
                                        { name: 'Haute-Garonne (31)', city: 'Toulouse' },
                                        { name: 'Gironde (33)', city: 'Bordeaux' },
                                        { name: 'Hérault (34)', city: 'Montpellier' },
                                        { name: 'Gard (30)', city: 'Nîmes' },
                                        { name: 'Pyrénées-Atlantiques (64)', city: 'Bayonne' },
                                        { name: 'Pyrénées-Atlantiques (64)', city: 'Pau' },
                                        { name: 'Hautes-Pyrénées (65)', city: 'Tarbes' },
                                        { name: 'Lot-et-Garonne (47)', city: 'Agen' },
                                        { name: 'Pyrénées-Orientales (66)', city: 'Perpignan' },
                                        { name: 'Aude (11)', city: 'Narbonne' },
                                        { name: 'Charente-Maritime (17)', city: 'La Rochelle' },
                                        { name: 'Haute-Vienne (87)', city: 'Limoges' },
                                        { name: 'Dordogne (24)', city: 'Périgueux' },
                                        { name: 'Aveyron (12)', city: 'Rodez' },
                                        { name: 'Landes (40)', city: 'Mont-de-Marsan' }
                                    ].map((zone, i) => (
                                        <div
                                            key={zone.city}
                                            className="flex items-center text-gray-300 p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-[#037971]/30 transition-all cursor-default group"
                                        >
                                            <div className="bg-[#037971]/10 p-2 rounded-lg mr-3 text-[#037971] group-hover:bg-[#037971] group-hover:text-white transition-colors">
                                                <MapPin size={18} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-white group-hover:text-[#037971] transition-colors">{zone.city}</div>
                                                <div className="text-xs text-gray-500">{zone.name}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex-1 relative">
                                <div className="absolute inset-0 bg-[#037971] blur-[100px] opacity-20 rounded-full"></div>
                                <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-2xl group">
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent z-10 pointer-events-none"></div>
                                    <img
                                        src={franceSudOuestMap}
                                        alt="Carte Zone d'Intervention - France & Grand Sud Ouest"
                                        className="w-full h-auto relative z-0 transform group-hover:scale-105 transition-transform duration-700 mix-blend-screen scale-125"
                                    />
                                    <div className="absolute bottom-6 left-6 z-20">
                                        <div className="flex items-center gap-2 bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700">
                                            <div className="w-2 h-2 rounded-full bg-[#037971]"></div>
                                            <span className="text-white text-xs font-bold uppercase tracking-wide">Déplacements Quotidiens</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BLOCK 2: CONFIDENCE & EXPERTISE */}
                    <div className="max-w-7xl mx-auto px-4 relative z-10 py-12">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
                            <div className="order-2 md:order-1">
                                <div className="text-left mb-12">
                                    <span className="text-[#037971] font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
                                        /// CONFIANCE & EXPERTISE
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-black mt-2 text-white leading-tight">
                                        Votre Confiance, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#037971] to-teal-400">Notre Priorité</span>
                                    </h2>
                                    <p className="text-gray-400 mt-6 text-lg border-l-2 border-[#037971] pl-6 py-2 bg-gradient-to-r from-[#037971]/5 to-transparent">
                                        WELKI allie technicité, respect des normes et engagement environnemental.
                                    </p>
                                </div>

                                <div className="space-y-8 relative pl-4">
                                    <div className="absolute left-[2.35rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-[#037971] via-[#037971]/30 to-gray-800"></div>

                                    <div className="relative flex items-start z-10 group">
                                        <div className="w-14 h-14 bg-gray-900 border border-[#037971]/30 rounded-2xl flex items-center justify-center text-[#037971] mr-8 shrink-0 shadow-[0_0_20px_-5px_rgba(3,121,113,0.3)] group-hover:bg-[#037971] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(3,121,113,0.5)] group-hover:scale-110 transition-all duration-300">
                                            <ShieldCheck size={24} strokeWidth={2} />
                                        </div>
                                        <div className="pt-1">
                                            <h3 className="text-2xl font-black mb-2 text-white group-hover:text-[#037971] transition-colors">Cadre Légal Respecté</h3>
                                            <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                                                Interventions conformes aux normes sanitaires strictes et réglementations en vigueur.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative flex items-start z-10 group">
                                        <div className="w-14 h-14 bg-gray-900 border border-[#037971]/30 rounded-2xl flex items-center justify-center text-[#037971] mr-8 shrink-0 shadow-[0_0_20px_-5px_rgba(3,121,113,0.3)] group-hover:bg-[#037971] group-hover:text-white group-hover:shadow-[0_0_30px_rgba(3,121,113,0.5)] group-hover:scale-110 transition-all duration-300">
                                            <FileCheck size={24} strokeWidth={2} />
                                        </div>
                                        <div className="pt-1">
                                            <h3 className="text-2xl font-black mb-2 text-white group-hover:text-[#037971] transition-colors">Certification Certibiocide</h3>
                                            <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                                                Certificat délivré par le Ministère de la Transition écologique, gage de sécurité et d'efficacité.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="order-1 md:order-2 flex justify-center">
                                <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-[0_0_20px_-5px_rgba(3,121,113,0.2)] group h-[500px] w-full max-w-md hover:border-[#037971]/50 transition-all duration-300 bg-gray-900 flex items-center justify-center p-8">
                                    <div className="absolute inset-0 bg-[#037971]/5 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent z-10"></div>

                                    <div className="relative z-20 text-center">
                                        <div className="absolute inset-0 bg-[#037971] blur-[80px] opacity-20 rounded-full"></div>
                                        <img
                                            src={certibiocideImg}
                                            alt="Logo Certibiocide"
                                            className="relative z-10 w-full max-w-[280px] opacity-90 contrast-125 hover:scale-105 transition-transform duration-500 drop-shadow-2xl mx-auto"
                                        />
                                        <div className="mt-8 border-t border-[#037971]/30 pt-6">
                                            <span className="text-white font-bold uppercase tracking-widest text-sm">Garantie d'État</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* 6. REVIEWS SECTION - REDESIGNED */}
                <section className="py-12 md:py-24 bg-gray-950 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <div>
                                <span className="text-welki-blue font-bold tracking-[0.2em] uppercase text-sm mb-3 block">
                                    /// PAROLES DE CLIENTS
                                </span>
                                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                                    Ils nous font <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-welki-blue">Confiance</span>
                                </h2>
                            </div>

                            <div className="flex items-center gap-3 bg-gray-900/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-gray-800 hover:border-welki-blue/50 transition-all duration-300">
                                <div className="flex -space-x-1">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 z-30" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21.81-.63z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex text-yellow-500 text-sm">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
                                    </div>
                                    <span className="font-bold text-white text-xs"><span className="text-lg">4.9</span>/5 (127 avis)</span>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial Cards Carousel */}
                        <div className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide" id="reviews-container">
                            {[
                                {
                                    title: "Je recommande avec plaisir",
                                    text: "Super entreprise, magnifique travail, avec un superbe accueil. Je recommande avec plaisir.",
                                    author: "Lydie, Paris",
                                    stars: 5,
                                    date: "Il y a 2 jours"
                                },
                                {
                                    title: "Très satisfaite",
                                    text: "Très satisfaite pour ma première visite. Très bon accueil et correct au niveau des tarifs. Contente d'avoir trouvé une entreprise sérieuse.",
                                    author: "Catherine, Lyon",
                                    stars: 5,
                                    date: "Il y a 1 semaine"
                                },
                                {
                                    title: "Les prix compétitifs",
                                    text: "L'accueil a été excellent, les prix compétitifs, et l'intervention rapide. Mon jardin est impeccable. Je recommande vivement !",
                                    author: "Marwan, Marseille",
                                    stars: 5,
                                    date: "Il y a 3 semaines"
                                },
                                {
                                    title: "Un rapport qualité-prix indéniable",
                                    text: "Très pro et surtout un rapport qualité-prix indéniable. Équipe réactive et efficace pour la dératisation.",
                                    author: "Laura, Montpellier",
                                    stars: 5,
                                    date: "Il y a 1 mois"
                                }
                            ].map((review, i) => (
                                <div
                                    key={i}
                                    className="min-w-[85vw] md:min-w-[400px] bg-gray-900/60 backdrop-blur-md p-8 rounded-3xl border border-gray-800 flex flex-col snap-center hover:border-welki-blue/30 hover:shadow-[0_0_20px_-5px_rgba(66,133,244,0.15)] transition-all duration-300 group"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex text-yellow-400 gap-1">
                                            {[...Array(review.stars)].map((_, i) => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                            <span className="font-serif text-2xl leading-none">"</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-welki-blue transition-colors">{review.title}</h3>
                                    <p className="text-gray-400 text-base leading-relaxed mb-8 flex-grow italic">
                                        "{review.text}"
                                    </p>

                                    <div className="flex items-center gap-4 mt-auto border-t border-gray-800 pt-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white font-bold text-sm">
                                            {review.author.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-white text-sm">{review.author}</p>
                                            <p className="text-xs text-gray-500">{review.date}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-end gap-4 mt-4">
                            <button
                                onClick={() => document.getElementById('reviews-container').scrollBy({ left: -400, behavior: 'smooth' })}
                                className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 text-white hover:bg-welki-blue hover:border-welki-blue transition-all flex items-center justify-center shadow-lg"
                            >
                                <ArrowRight size={20} className="rotate-180" />
                            </button>
                            <button
                                onClick={() => document.getElementById('reviews-container').scrollBy({ left: 400, behavior: 'smooth' })}
                                className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 text-white hover:bg-welki-blue hover:border-welki-blue transition-all flex items-center justify-center shadow-lg"
                            >
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </section>

                <section className="py-20 md:py-32 relative overflow-hidden text-center text-white">
                    {/* Distinct Background - Gradient Blue/Teal */}
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

                    <div className="relative z-10 max-w-5xl mx-auto px-4">
                        <span className="inline-block py-1 px-4 border border-white/30 rounded-full text-sm font-bold uppercase tracking-widest mb-6 bg-white/10 backdrop-blur-sm">
                            On vous repond en moins de 1 heure
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight drop-shadow-lg text-[#0241cd]">
                            Besoin d'un audit gratuit ?
                        </h2>
                        <p className="text-xl md:text-2xl mb-12 text-blue-50 font-medium max-w-3xl mx-auto leading-relaxed opacity-90">
                            <span className="text-[#037971] font-bold">Contactez-nous dès maintenant.</span> Nos experts analysent votre besoin et vous recontactent rapidement avec une solution sur-mesure.
                        </p>
                        <Link to="/contact" className="group inline-flex items-center gap-3 bg-[#E71D36] text-white px-12 py-5 rounded-full text-xl font-black hover:bg-[#ff4d63] transition-all shadow-[0_10px_40px_-10px_rgba(231,29,54,0.5)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-10px_rgba(231,29,54,0.6)]">
                            CONTACTER UN EXPERT
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </section>
            </div >
        </Layout >
    );
};

export default Home;
