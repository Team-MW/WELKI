import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { ArrowRight, ShieldCheck, TreePine, Sparkles, CheckCircle2, FileCheck, Star, MapPin, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';
import certibiocideImg from '../assets/certibiocide-1.png';
import occitanieMap from '../assets/occitanie-map.png';
import imgGreenHero from '../assets/man-uniform-trimming-hedge-summer-time.jpg';
import imgCleanHero from '../assets/full-shot-man-vacuuming-office-floor.jpg';
import img3DHero from '../assets/people-wearing-protective-equipment-disinfecting-dangerous-area.jpg';


const Home = () => {
    return (

        <Layout title="Accueil">
            <div className="bg-gray-950 min-h-screen text-white">

                {/* 1. HERO SECTION - Lightning Bolt Layout - Swapped Order */}
                {/* 1. HERO SECTION - Lightning Bolt Layout - Responsive Refactor */}
                <section className="relative flex flex-col md:block h-auto md:h-[95vh] bg-gray-950 overflow-hidden">

                    {/* Section 1: NETTOYAGE - Mobile: Top / Desktop: Left Lightning */}
                    <div
                        className="
                            relative w-full h-[33vh] md:absolute md:inset-0 md:h-full 
                            group transition-all duration-500 ease-in-out cursor-pointer 
                            z-10 hover:z-50 md:hover:scale-[1.05] origin-center
                            md:[clip-path:polygon(0_0,_36%_0,_32%_50%,_35%_50%,_31%_100%,_0_100%)]
                        "
                        style={{
                            backgroundImage: `url(${imgCleanHero})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <Link to="/nettoyage" className="absolute inset-0 z-10" aria-label="Nettoyage"></Link>
                        {/* Background Overlay */}
                        <div className="absolute inset-0 bg-[#0241cd]/60 group-hover:bg-[#0033a8]/70 transition-colors duration-500"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start p-6 md:p-12 text-center md:text-left w-full md:w-[40%] h-full">

                            <h2 className="text-2xl md:text-6xl font-black text-white mb-2 md:mb-6 uppercase tracking-tighter drop-shadow-lg leading-tight md:ml-2">
                                Nettoyage <br className="hidden md:block" /><span className="text-blue-200">Pro</span>
                            </h2>
                            <ul className="hidden md:block text-blue-100 text-lg font-medium space-y-2 opacity-90 md:ml-2">
                                <li>Bureaux</li>
                                <li>Immeubles</li>
                                <li>Fin de chantier</li>
                            </ul>
                            <div className="hidden md:flex gap-3 mt-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 md:ml-2 pointer-events-auto">
                                <Link to="/nettoyage" className="px-4 py-1.5 bg-white text-[#0241cd] font-bold text-sm rounded-full hover:bg-gray-100 transition-colors shadow-lg relative z-20">
                                    En savoir plus
                                </Link>
                                <Link to="/contact" className="px-4 py-1.5 border-2 border-white text-white font-bold text-sm rounded-full hover:bg-white hover:text-[#0241cd] transition-colors shadow-lg cursor-pointer relative z-20">
                                    Demander un devis
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: HYGIÈNE 3D - Mobile: Middle / Desktop: Middle Lightning */}
                    <div
                        className="
                            relative w-full h-[33vh] md:absolute md:inset-0 md:h-full 
                            group transition-all duration-500 ease-in-out cursor-pointer 
                            z-10 hover:z-50 md:hover:scale-[1.05] origin-center
                            md:[clip-path:polygon(36%_0,_71%_0,_67%_50%,_70%_50%,_66%_100%,_31%_100%,_35%_50%,_32%_50%)]
                        "
                        style={{
                            backgroundImage: `url(${img3DHero})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <Link to="/hygiene-3d" className="absolute inset-0 z-10" aria-label="Hygiène 3D"></Link>
                        {/* Background Overlay */}
                        <div className="absolute inset-0 bg-[#E71D36]/60 group-hover:bg-[#c0182c]/70 transition-colors duration-500"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-center">

                            <h2 className="text-2xl md:text-6xl font-black text-white mb-2 md:mb-4 uppercase tracking-tighter drop-shadow-lg leading-tight">
                                Hygiène <br className="hidden md:block" /><span className="text-red-200">3D</span>
                            </h2>
                            <ul className="hidden md:block text-red-100 text-lg font-medium space-y-2 opacity-90">
                                <li>Dératisation</li>
                                <li>Désinsectisation</li>
                                <li>Désinfection</li>
                            </ul>
                            <div className="hidden md:flex gap-3 mt-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 justify-center pointer-events-auto">
                                <Link to="/hygiene-3d" className="px-4 py-1.5 bg-white text-[#E71D36] font-bold text-sm rounded-full hover:bg-gray-100 transition-colors shadow-lg relative z-20">
                                    En savoir plus
                                </Link>
                                <Link to="/contact" className="px-4 py-1.5 border-2 border-white text-white font-bold text-sm rounded-full hover:bg-white hover:text-[#E71D36] transition-colors shadow-lg cursor-pointer relative z-20">
                                    Demander un devis
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: ESPACES VERTS - Mobile: Bottom / Desktop: Right Lightning */}
                    <div
                        className="
                            relative w-full h-[34vh] md:absolute md:inset-0 md:h-full 
                            group transition-all duration-500 ease-in-out cursor-pointer 
                            z-10 hover:z-50 md:hover:scale-[1.05] origin-center
                            md:[clip-path:polygon(71%_0,_100%_0,_100%_100%,_66%_100%,_70%_50%,_67%_50%)]
                        "
                        style={{
                            backgroundImage: `url(${imgGreenHero})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <Link to="/espaces-verts" className="absolute inset-0 z-10" aria-label="Espaces Verts"></Link>
                        {/* Background Overlay */}
                        <div className="absolute inset-0 bg-[#037971]/60 group-hover:bg-[#025e57]/70 transition-colors duration-500"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-end p-6 md:p-12 text-center md:text-right w-full h-full">
                            <div className="w-full md:w-[40%] flex flex-col items-center md:items-end">

                                <h2 className="text-2xl md:text-6xl font-black text-white mb-2 md:mb-6 uppercase tracking-tighter drop-shadow-lg leading-tight md:mr-12">
                                    Espaces <br className="hidden md:block" /><span className="text-white">Verts</span>
                                </h2>
                                <ul className="hidden md:block text-white text-lg font-medium space-y-2 opacity-90 md:mr-12">
                                    <li>Élagage</li>
                                    <li>Entretien Jardin</li>
                                    <li>Paysagisme</li>
                                </ul>
                                <div className="hidden md:flex gap-3 mt-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 md:mr-12 pointer-events-auto">
                                    <Link to="/espaces-verts" className="px-4 py-1.5 bg-white text-[#037971] font-bold text-sm rounded-full hover:bg-gray-100 transition-colors shadow-lg relative z-20">
                                        En savoir plus
                                    </Link>
                                    <Link to="/contact" className="px-4 py-1.5 border-2 border-white text-white font-bold text-sm rounded-full hover:bg-white hover:text-[#037971] transition-colors shadow-lg cursor-pointer relative z-20">
                                        Demander un devis
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* LIGHTNING BOLT SEPARATORS (Desktop Only) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path
                            d="M 36 0 L 32 50 L 35 50 L 31 100"
                            stroke="white"
                            strokeWidth="3"
                            vectorEffect="non-scaling-stroke"
                            fill="none"
                            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                        />
                        <path
                            d="M 71 0 L 67 50 L 70 50 L 66 100"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="square"
                            strokeLinejoin="miter"
                            vectorEffect="non-scaling-stroke"
                            fill="none"
                            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] z-30 relative"
                        />
                    </svg>

                </section>

                {/* 2. REASSURANCE STRIP - Interactive & Clean */}
                <div className="bg-gray-900 py-6 md:py-8 border-b border-gray-800 relative z-20 shadow-sm overflow-hidden">
                    {/* SEPARATORS EXTENSION */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path
                            d="M 31 0 L 29 100"
                            stroke="white"
                            strokeWidth="3"
                            vectorEffect="non-scaling-stroke"
                            fill="none"
                            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                        />
                        <path
                            d="M 66 0 L 64 100"
                            stroke="white"
                            strokeWidth="3"
                            vectorEffect="non-scaling-stroke"
                            fill="none"
                            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                        />
                    </svg>

                    <div className="w-full h-full relative z-10">
                        <div className="flex flex-col md:flex-row w-full h-full">
                            {[
                                { text: "Intervention 7j/7", icon: <CheckCircle2 /> },
                                { text: "Devis 100% Gratuit", icon: <FileCheck /> },
                                { text: "Produits Homologués", icon: <ShieldCheck /> }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex-1 flex flex-col items-center justify-center group p-4 hover:bg-gray-800/50 transition-colors cursor-default relative"
                                >
                                    <div className="text-[#037971] mb-2 w-10 h-10 md:w-12 md:h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-[#037971] group-hover:text-white transition-all duration-300 shadow-[0_0_15px_-5px_rgba(3,121,113,0.3)] group-hover:shadow-[0_0_20px_rgba(3,121,113,0.6)] border border-gray-700 group-hover:border-[#037971] transform group-hover:scale-110">
                                        {React.cloneElement(item.icon, { size: 24 })}
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white font-bold text-sm md:text-lg transition-colors text-center">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. EXPERTISE SECTION - Cards with Depth */}
                <Section className="bg-gray-950 py-24 relative overflow-hidden">
                    {/* Decorative background blobs */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#037971]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">

                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="text-[#037971] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                /// NOS DOMAINES D'EXPERTISE
                            </span>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                Une Expertise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#037971] to-teal-400">Globale</span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Une gestion centralisée de votre environnement pour plus d'efficacité et de sérénité.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 px-4">
                            {/* Card 3: Cleaning */}
                            <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-[#0241cd]/50 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_40px_-5px_rgba(2,65,205,0.3)] hover:-translate-y-2">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#0241cd]/0 via-transparent to-[#0241cd]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="w-16 h-16 bg-[#0241cd]/10 rounded-2xl flex items-center justify-center text-[#0241cd] mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(2,65,205,0.3)] shadow-inner border border-[#0241cd]/20 relative z-10">
                                    <Sparkles size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4 relative z-10">Nettoyage</h3>
                                <p className="text-gray-400 mb-8 relative z-10 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    Services de propreté pour une hygiène irréprochable. Bureaux, copropriétés et fin de chantier.
                                </p>
                                <ul className="space-y-4 text-gray-300 text-sm font-medium relative z-10 mb-8">
                                    {["Bureaux & Immeubles", "Fin de chantier", "Débarras"].map(item => (
                                        <li key={item} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-[#0241cd]/10 flex items-center justify-center border border-[#0241cd]/20 text-[#0241cd] shadow-[0_0_10px_rgba(2,65,205,0.2)]">
                                                <CheckCircle2 size={12} />
                                            </div>
                                            <span className="group-hover:text-white transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/nettoyage" className="w-full py-4 rounded-xl border border-[#0241cd]/30 text-white font-bold flex items-center justify-center hover:bg-[#0241cd] transition-all relative z-10 hover:shadow-[0_0_20px_rgba(2,65,205,0.4)] group-hover:border-[#0241cd]">
                                    En savoir plus <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Card 1: 3D */}
                            <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-[#E71D36]/50 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_40px_-5px_rgba(231,29,54,0.3)] hover:-translate-y-2">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#E71D36]/0 via-transparent to-[#E71D36]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="w-16 h-16 bg-[#E71D36]/10 rounded-2xl flex items-center justify-center text-[#E71D36] mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(231,29,54,0.3)] shadow-inner border border-[#E71D36]/20 relative z-10">
                                    <ShieldCheck size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4 relative z-10">Hygiène 3D</h3>
                                <p className="text-gray-400 mb-8 relative z-10 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    Lutte contre les nuisibles par techniques certifiées. Protection durable de votre environnement.
                                </p>
                                <ul className="space-y-4 text-gray-300 text-sm font-medium relative z-10 mb-8">
                                    {["Dératisation", "Désinsectisation", "Désinfection"].map(item => (
                                        <li key={item} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-[#E71D36]/10 flex items-center justify-center border border-[#E71D36]/20 text-[#E71D36] shadow-[0_0_10px_rgba(231,29,54,0.2)]">
                                                <CheckCircle2 size={12} />
                                            </div>
                                            <span className="group-hover:text-white transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/hygiene-3d" className="w-full py-4 rounded-xl border border-[#E71D36]/30 text-white font-bold flex items-center justify-center hover:bg-[#E71D36] transition-all relative z-10 hover:shadow-[0_0_20px_rgba(231,29,54,0.4)] group-hover:border-[#E71D36]">
                                    En savoir plus <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Card 2: Green */}
                            <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-800 hover:border-[#037971]/50 transition-all duration-500 group overflow-hidden hover:shadow-[0_0_40px_-5px_rgba(3,121,113,0.3)] hover:-translate-y-2 md:-mt-8">
                                <div className="absolute -top-12 -right-12 bg-[#037971] w-24 h-24 rotate-45 z-20"></div>
                                <div className="absolute top-4 right-4 z-30 text-white font-bold text-xs bg-[#037971] px-3 py-1 rounded-full shadow-lg">POPULAIRE</div>

                                <div className="absolute inset-0 bg-gradient-to-br from-[#037971]/0 via-transparent to-[#037971]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="w-16 h-16 bg-[#037971]/10 rounded-2xl flex items-center justify-center text-[#037971] mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(3,121,113,0.3)] shadow-inner border border-[#037971]/20 relative z-10">
                                    <TreePine size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-white mb-4 relative z-10">Espaces Verts</h3>
                                <p className="text-gray-400 mb-8 relative z-10 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    Mise en valeur et entretien de vos extérieurs. Paysagisme et travaux en hauteur sécurisés.
                                </p>
                                <ul className="space-y-4 text-gray-300 text-sm font-medium relative z-10 mb-8">
                                    {["Élagage & Abattage", "Tonte & Taille", "Débroussaillage"].map(item => (
                                        <li key={item} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-[#037971]/10 flex items-center justify-center border border-[#037971]/20 text-[#037971] shadow-[0_0_10px_rgba(3,121,113,0.2)]">
                                                <CheckCircle2 size={12} />
                                            </div>
                                            <span className="group-hover:text-white transition-colors">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/espaces-verts" className="w-full py-4 rounded-xl bg-[#037971] text-white font-bold flex items-center justify-center hover:bg-[#025e57] shadow-[0_0_20px_rgba(3,121,113,0.4)] transition-all relative z-10">
                                    En savoir plus <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* NEW: Single Point of Contact Banner */}
                        <div className="mt-16 max-w-4xl mx-auto px-4">
                            <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl relative overflow-hidden group hover:border-[#037971]/30 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#037971]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#037971] rounded-full blur-[100px] opacity-20 pointer-events-none group-hover:opacity-30 transition-opacity"></div>

                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                                    <div className="flex-1">
                                        <div className="inline-block px-4 py-1 bg-[#037971]/20 text-[#037971] rounded-full font-bold text-sm mb-4 border border-[#037971]/20">
                                            SIMPLIFIEZ-VOUS LA VIE
                                        </div>
                                        <h3 className="text-3xl font-black text-white mb-2 leading-tight">
                                            1 Client = 1 Interlocuteur Unique
                                        </h3>
                                        <p className="text-gray-400 font-medium text-lg">
                                            Pas de multiplication des prestataires. WELKI centralise tout.
                                            <br />
                                            <span className="text-[#037971]">Hygiène 3D + Espaces Verts + Nettoyage = Une seule facture.</span>
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Link to="/contact" className="inline-flex items-center px-8 py-4 rounded-xl bg-[#037971] text-white font-bold hover:bg-[#025e57] transition-all shadow-[0_0_20px_-5px_rgba(3,121,113,0.4)] hover:shadow-[0_0_30px_-5px_rgba(3,121,113,0.6)] hover:-translate-y-1">
                                            Discuter de mon projet
                                            <ArrowRight className="ml-2" size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 5. ZONES INTERVENTION - REDESIGNED */}
                <section className="py-24 bg-gray-900 relative overflow-hidden">
                    {/* Background decoration with Mountain icon */}
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none">
                        <Mountain size={600} className="text-white" strokeWidth={1} />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div className="flex-1">
                                <span className="text-[#037971] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                    /// NOTRE RAYON D'ACTION
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                                    Une Présence <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#037971] to-teal-400">Régionale</span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    Nos équipes mobiles sillonnent la région Occitanie pour vous garantir une réactivité optimale.
                                </p>

                                <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                                    {[
                                        { name: 'Haute-Garonne (31)', city: 'Toulouse' },
                                        { name: 'Hérault (34)', city: 'Montpellier' },
                                        { name: 'Gard (30)', city: 'Nîmes' },
                                        { name: 'Pyrénées-Orientales (66)', city: 'Perpignan' },
                                        { name: 'Hérault (34)', city: 'Béziers' },
                                        { name: 'Aude (11)', city: 'Narbonne' },
                                        { name: 'Tarn (81)', city: 'Albi' },
                                        { name: 'Tarn-et-Garonne (82)', city: 'Montauban' }
                                    ].map((zone, i) => (
                                        <div
                                            key={zone.name}
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
                                        src={occitanieMap}
                                        alt="Carte Zone d'Intervention Région Occitanie"
                                        className="w-full h-auto drop-shadow-2xl relative z-0 transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-6 left-6 z-20">
                                        <div className="flex items-center gap-2 bg-gray-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-gray-700">
                                            <div className="w-2 h-2 rounded-full bg-[#037971] animate-pulse"></div>
                                            <span className="text-white text-xs font-bold uppercase tracking-wide">Déplacements Quotidiens</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. ABOUT / TRUST SECTION - REDESIGNED */}
                <section className="py-24 bg-gray-950 relative overflow-hidden">
                    {/* Decorative Elements */}
                    <div className="absolute left-0 bottom-0 w-[600px] h-[600px] bg-[#037971]/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <div className="grid md:grid-cols-2 gap-20 items-center">
                            <div className="order-2 md:order-1">
                                <div className="text-left mb-12">
                                    <span className="text-[#037971] font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                        /// CONFIANCE & EXPERTISE
                                    </span>
                                    <h2 className="text-4xl md:text-5xl font-black mt-2 text-white leading-tight">
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
                                <div className="relative rounded-3xl overflow-hidden border border-gray-800 shadow-[0_0_50px_-10px_rgba(3,121,113,0.2)] group h-[500px] w-full max-w-md hover:border-[#037971]/50 transition-all duration-500 bg-gray-900 flex items-center justify-center p-8">
                                    <div className="absolute inset-0 bg-[#037971]/5 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent z-10"></div>

                                    <div className="relative z-20 text-center">
                                        <div className="absolute inset-0 bg-[#037971] blur-[80px] opacity-20 rounded-full animate-pulse"></div>
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
                <section className="py-24 bg-gray-950 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <div>
                                <span className="text-welki-blue font-bold tracking-[0.2em] uppercase text-sm mb-3 block animate-pulse">
                                    /// PAROLES DE CLIENTS
                                </span>
                                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                    Ils nous font <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-welki-blue">Confiance</span>
                                </h2>
                            </div>

                            <div className="flex items-center gap-3 bg-gray-900/80 backdrop-blur-xl px-6 py-3 rounded-full shadow-lg border border-gray-800 hover:border-welki-blue/50 transition-colors">
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
                                    className="min-w-[85vw] md:min-w-[400px] bg-gray-900/60 backdrop-blur-xl p-8 rounded-3xl border border-gray-800 flex flex-col snap-center hover:border-welki-blue/30 hover:shadow-[0_0_30px_-5px_rgba(66,133,244,0.15)] transition-all duration-300 group"
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

                <section className="py-24 relative overflow-hidden text-center text-white bg-gray-950">
                    <div className="absolute inset-0 bg-gray-950"></div>
                    <div className="relative z-10 max-w-4xl mx-auto px-4">
                        <h2
                            className="text-4xl md:text-5xl font-black mb-8"
                        >
                            Besoin d'un devis immédiat ?
                        </h2>
                        <p className="text-xl mb-12 text-gray-300 font-medium max-w-2xl mx-auto">
                            Décrivez-nous votre besoin, nous vous répondons dans l'heure avec une solution chiffrée.
                        </p>
                        <Link to="/contact" className="inline-block bg-white text-gray-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-welki-blue hover:text-white transition-all shadow-lg hover:shadow-blue-900/20 transform hover:-translate-y-1">
                            Contactez-nous
                        </Link>
                    </div>
                </section>
            </div>
        </Layout >
    );
};

export default Home;
