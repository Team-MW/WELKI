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
                                    className="flex-1 flex flex-col items-center justify-center group p-4 hover:bg-gray-800 transition-colors cursor-default relative"
                                >
                                    <div className="text-[#037971] mb-2 w-10 h-10 md:w-12 md:h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-[#037971] group-hover:text-white transition-colors shadow-sm border border-gray-700">
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
                            <span


                                className="text-welki-green font-bold tracking-widest uppercase text-sm mb-2 block"
                            >
                                Nos Services
                            </span>
                            <h2


                                className="text-white font-black text-4xl md:text-5xl mb-6"
                            >
                                Nos Domaines d'Intervention
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Une expertise globale pour la gestion de votre environnement.
                                Nous garantissons efficacité et discrétion.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 px-4">
                            {/* Card 3: Cleaning */}
                            {/* Card 3: Cleaning - Blue */}
                            <div
                                whileHover={{ y: -10 }}
                                className="bg-gray-900 rounded-3xl shadow-xl p-8 border-t-8 border-[#0241cd] hover:shadow-2xl hover:shadow-[#0241cd]/20 transition-all duration-300 flex flex-col group border-x border-b border-gray-800"
                            >
                                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center text-[#0241cd] mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-700">
                                    <Sparkles size={36} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#0241cd] transition-colors">Nettoyage</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                    Services de propreté pour une hygiène irréprochable.
                                </p>
                                <ul className="space-y-3 mb-8 text-gray-300 font-medium">
                                    {["Bureaux & Immeubles", "Fin de chantier", "Débarras"].map(item => (
                                        <li key={item} className="flex items-center">
                                            <div className="w-5 h-5 rounded-full bg-[#0241cd]/20 flex items-center justify-center text-[#0241cd] mr-3 shrink-0">
                                                <CheckCircle2 size={12} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/nettoyage" className="w-full py-3 rounded-xl border-2 border-gray-700 text-[#0241cd] font-bold flex items-center justify-center hover:bg-[#0241cd] hover:text-white transition-all group-hover:border-[#0241cd] hover:border-[#0241cd]">
                                    En savoir plus <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </div>

                            {/* Card 1: 3D */}
                            {/* Card 1: 3D - Red */}
                            <div
                                whileHover={{ y: -10 }}
                                className="bg-gray-900 rounded-3xl shadow-xl p-8 border-t-8 border-[#E71D36] hover:shadow-2xl hover:shadow-[#E71D36]/20 transition-all duration-300 flex flex-col group border-x border-b border-gray-800"
                            >
                                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center text-[#E71D36] mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-700">
                                    <ShieldCheck size={36} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#E71D36] transition-colors">Hygiène 3D</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                    Lutte contre les nuisibles par techniques certifiées. Protection de votre domicile ou local professionnel.
                                </p>
                                <ul className="space-y-3 mb-8 text-gray-300 font-medium">
                                    {["Dératisation", "Désinsectisation", "Désinfection"].map(item => (
                                        <li key={item} className="flex items-center">
                                            <div className="w-5 h-5 rounded-full bg-[#E71D36]/20 flex items-center justify-center text-[#E71D36] mr-3 shrink-0">
                                                <CheckCircle2 size={12} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/hygiene-3d" className="w-full py-3 rounded-xl border-2 border-gray-700 text-[#E71D36] font-bold flex items-center justify-center hover:bg-[#E71D36] hover:text-white transition-all group-hover:border-[#E71D36] hover:border-[#E71D36]">
                                    En savoir plus <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </div>

                            {/* Card 2: Green */}
                            {/* Card 2: Green - Green */}
                            <div
                                whileHover={{ y: -10 }}
                                className="bg-gray-900 rounded-3xl shadow-xl p-8 border-t-8 border-[#037971] hover:shadow-2xl hover:shadow-[#037971]/20 transition-all duration-300 flex flex-col group relative md:-mt-8 z-10 border-x border-b border-gray-800"
                            >
                                <div className="absolute -top-4 -right-4 bg-[#037971] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12">
                                    POPULAIRE
                                </div>
                                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center text-[#037971] mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-700">
                                    <TreePine size={36} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#037971] transition-colors">Espaces Verts</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                    Mise en valeur et entretien de vos extérieurs. Équipe équipée pour travaux en hauteur.
                                </p>
                                <ul className="space-y-3 mb-8 text-gray-300 font-medium">
                                    {["Élagage & Abattage", "Tonte & Taille", "Débroussaillage"].map(item => (
                                        <li key={item} className="flex items-center">
                                            <div className="w-5 h-5 rounded-full bg-[#037971]/20 flex items-center justify-center text-[#037971] mr-3 shrink-0">
                                                <CheckCircle2 size={12} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/espaces-verts" className="w-full py-3 rounded-xl bg-[#037971] text-white font-bold flex items-center justify-center hover:bg-[#025e57] shadow-lg shadow-[#037971]/40 transition-all">
                                    En savoir plus <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </div>
                        </div>

                        {/* NEW: Single Point of Contact Banner */}
                        <div className="mt-16 max-w-4xl mx-auto px-4">
                            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[#037971]/5 group-hover:bg-[#037971]/10 transition-colors duration-500"></div>
                                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                                    <div className="flex-1">
                                        <div className="inline-block px-4 py-1 bg-[#037971]/20 text-[#037971] rounded-full font-bold text-sm mb-4">
                                            SIMPLIFIEZ-VOUS LA VIE
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-2">
                                            1 Client = 1 Interlocuteur Unique
                                        </h3>
                                        <p className="text-gray-400 font-medium">
                                            Pas de multiplication des prestataires. WELKI centralise tout pour vous.
                                            <br />
                                            <span className="text-gray-300">Hygiène 3D + Espaces Verts + Nettoyage = Une seule facture.</span>
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <Link to="/contact" className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-gray-900 font-bold hover:bg-[#037971] hover:text-white transition-all shadow-lg hover:shadow-[#037971]/30">
                                            Discuter de mon projet
                                            <ArrowRight className="ml-2" size={20} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* 5. ZONES INTERVENTION - Mobile & Responsive */}
                <section className="py-24 bg-gray-900 relative overflow-hidden">
                    {/* Background decoration with Mountain icon */}
                    <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none select-none">
                        <Mountain size={600} className="text-white" strokeWidth={1} />
                    </div>

                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row items-center gap-16">
                            <div



                                className="flex-1"
                            >
                                <span


                                    className="text-[#037971] font-bold tracking-widest uppercase text-sm mb-2 block"
                                >
                                    Notre Rayon d'Action
                                </span>
                                <h2


                                    className="text-white font-black text-4xl md:text-5xl mb-6"
                                >
                                    Intervention dans tout le <br />
                                    <span className="text-[#037971]">Région Occitanie</span>
                                </h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    Nos équipes mobiles sillonnent la région pour vous garantir une réactivité optimale. Que vous soyez à Toulouse ou dans les départements voisins, nous sommes à vos côtés.
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



                                            className="flex items-center text-gray-300 p-2 rounded-lg hover:bg-gray-800/50 transition-colors cursor-default"
                                        >
                                            <div className="bg-[#037971]/20 p-2 rounded-full mr-3 text-[#037971]">
                                                <MapPin size={18} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-white">{zone.city}</div>
                                                <div className="text-xs text-gray-500">{zone.name}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div




                                className="flex-1 relative"
                            >
                                <div className="absolute inset-0 bg-[#037971] blur-[100px] opacity-20 rounded-full"></div>
                                <img
                                    src={occitanieMap}
                                    alt="Carte Zone d'Intervention Région Occitanie"
                                    className="w-full h-auto drop-shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500 rounded-xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. ABOUT / TRUST SECTION - Glassmorphism & Modern Layout */}
                <section className="py-16 md:py-24 bg-gray-950 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">
                        <div



                            className="flex-1 order-2 md:order-1"
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-[#037971] rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-500"></div>
                                <div className="relative bg-gray-900/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-gray-700 shadow-xl">
                                    <h3 className="text-2xl font-bold text-welki-blue mb-6">Pourquoi la certification CERTIBIOCIDE est importante ?</h3>
                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        Ce certificat individuel est délivré par le Ministère de la Transition écologique. Il atteste de la compétence des professionnels à utiliser les produits biocides en toute sécurité et efficacité.
                                    </p>
                                    <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-700">
                                        <img
                                            src={certibiocideImg}
                                            alt="Logo Certibiocide"
                                            className="h-20 w-auto drop-shadow-md brightness-90 contrast-125"
                                        />
                                        <div className="text-sm font-bold text-gray-400 uppercase tracking-widest border-l-2 border-welki-green pl-6">
                                            Gage de qualité<br />& de sécurité
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div




                            className="flex-1 order-1 md:order-2"
                        >
                            <div className="inline-block px-4 py-2 bg-blue-900/40 text-blue-300 font-bold rounded-full text-sm mb-6 border border-blue-800">
                                CONFIANCE & EXPERTISE
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                                Votre confiance, <br />
                                <span className="text-welki-blue">notre priorité absolue</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                                WELKI s'engage à fournir des prestations de haute qualité dans le respect strict des réglementations en vigueur. Nous allions technicité et respect de l'environnement.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Cadre Légal Respecté", desc: "Interventions conformes aux normes sanitaires.", icon: <CheckCircle2 /> },
                                    { title: "Professionnalisme & Discrétion", desc: "Techniciens formés, équipés et discrets.", icon: <ShieldCheck /> }
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        whileHover={{ x: 10 }}
                                        className="flex items-start p-4 rounded-xl hover:bg-gray-900 transition-colors cursor-default"
                                    >
                                        <div className="flex items-center p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-[#037971] transition-colors group">
                                            <div className="w-12 h-12 rounded-xl bg-[#037971]/20 flex items-center justify-center text-welki-green mr-5 flex-shrink-0 border border-[#037971]/50">
                                                {React.cloneElement(item.icon, { size: 24 })}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-xl mb-1">{item.title}</h4>
                                                <p className="text-gray-500">{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>



                {/* 6. REVIEWS SECTION - Matching User Request */}
                <section className="py-24 bg-gray-950 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <h2


                                className="text-4xl font-black text-white"
                            >
                                Paroles de clients
                            </h2>

                            <div


                                className="flex items-center gap-2 bg-gray-900 px-4 py-2 rounded-full shadow-sm border border-gray-800"
                            >
                                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.21.81-.63z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                <div className="flex text-yellow-500 text-lg">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" strokeWidth={0} />)}
                                </div>
                                <span className="font-bold text-white ml-1">4.9/5</span>
                                <span className="text-gray-400 text-sm">(127 avis)</span>
                            </div>
                        </div>

                        {/* Testimonial Cards Carousel */}
                        <div className="flex overflow-x-auto gap-6 pb-8 snap-x scrollbar-hide" id="reviews-container">
                            {[
                                {
                                    title: "Je recommande avec plaisir",
                                    text: "Super entreprise, magnifique travail, avec un superbe accueil. Je recommande avec plaisir.",
                                    author: "Lydie, Paris",
                                    stars: 5
                                },
                                {
                                    title: "Très satisfaite",
                                    text: "Très satisfaite pour ma première visite. Très bon accueil et correct au niveau des tarifs. Contente d'avoir trouvé une entreprise sérieuse.",
                                    author: "Catherine, Lyon",
                                    stars: 5
                                },
                                {
                                    title: "Les prix compétitifs",
                                    text: "L'accueil a été excellent, les prix compétitifs, et l'intervention rapide. Mon jardin est impeccable. Je recommande vivement !",
                                    author: "Marwan, Marseille",
                                    stars: 5
                                },
                                {
                                    title: "Un rapport qualité-prix indéniable",
                                    text: "Très pro et surtout un rapport qualité-prix indéniable. Équipe réactive et efficace pour la dératisation.",
                                    author: "Laura, Montpellier",
                                    stars: 5
                                }
                            ].map((review, i) => (
                                <div
                                    key={i}



                                    className="min-w-[85vw] md:min-w-[350px] bg-gray-900 p-6 md:p-8 rounded-3xl shadow-sm border border-gray-800 flex flex-col snap-center hover:shadow-md transition-shadow"
                                >
                                    <div className="flex text-yellow-400 mb-4 text-sm gap-1">
                                        {[...Array(review.stars)].map((_, i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
                                    </div>
                                    <h3 className="text-lg font-black text-white mb-3">{review.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                        {review.text}
                                    </p>
                                    <p className="font-bold text-gray-200 mt-auto">{review.author}</p>
                                </div>
                            ))}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-end gap-4 mt-4">
                            <button
                                onClick={() => document.getElementById('reviews-container').scrollBy({ left: -350, behavior: 'smooth' })}
                                className="p-4 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors border border-gray-700"
                            >
                                <ArrowRight size={20} className="rotate-180" />
                            </button>
                            <button
                                onClick={() => document.getElementById('reviews-container').scrollBy({ left: 350, behavior: 'smooth' })}
                                className="p-4 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors border border-gray-700"
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
