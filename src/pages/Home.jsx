import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, TreePine, Sparkles, CheckCircle2, FileCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import certibiocideImg from '../assets/certibiocide-1.png';

const Home = () => {


    return (
        <Layout title="Accueil">
            <div className="bg-gray-950 min-h-screen text-white">

                {/* 1. HERO SECTION - Triangle 'W' Layout */}
                <section className="relative h-[50vh] md:h-[95vh] flex flex-row overflow-hidden bg-gray-950">

                    {/* Global Mobile Heading REMOVED as per request to match desktop layout */}

                    {/* Section 1: HYGIÈNE 3D - Skewed Right (/) */}
                    <Link to="/hygiene-3d" className="relative group flex-1 h-full skew-x-[12deg] overflow-hidden border-r-4 border-white/10 hover:flex-[1.5] transition-[flex] duration-500 ease-in-out cursor-pointer z-10 -me-12 origin-top">
                        {/* Background */}
                        <div className="absolute inset-0 bg-[#003d80] group-hover:bg-[#002f63] transition-colors duration-500"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-400/20 to-transparent"></div>

                        {/* Content (Counter-Skew) */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center skew-x-[-12deg] p-1 text-center scale-110">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="bg-white/10 p-3 md:p-6 rounded-full backdrop-blur-sm mb-2 md:mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300"
                            >
                                <ShieldCheck className="text-white w-6 h-6 md:w-16 md:h-16" />
                            </motion.div>
                            <h2 className="text-xs md:text-5xl font-black text-white mb-2 md:mb-4 uppercase tracking-tighter shadow-black drop-shadow-lg leading-tight">
                                Hygiène <br /><span className="text-blue-300">3D</span>
                            </h2>
                            <ul className="hidden md:block text-blue-100 text-lg font-medium space-y-2 opacity-90">
                                <li>Dératisation</li>
                                <li>Désinsectisation</li>
                                <li>Désinfection</li>
                            </ul>
                            <div className="hidden md:block mt-8 px-6 py-2 bg-white text-[#003d80] font-bold rounded-full transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                En savoir plus
                            </div>
                        </div>
                    </Link>

                    {/* Section 2: ESPACES VERTS - Triangle Middle UP */}
                    <Link to="/espaces-verts" className="relative group flex-1 h-full hover:flex-[1.5] transition-[flex] duration-500 ease-in-out cursor-pointer z-30 drop-shadow-2xl" style={{ clipPath: 'polygon(50% 0, 0 100%, 100% 100%)' }}>
                        {/* Background */}
                        <div className="absolute inset-0 bg-welki-green group-hover:bg-green-700 transition-colors duration-500"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-300/20 to-transparent"></div>

                        {/* Content - Aligned Bottom */}
                        <div className="absolute inset-0 flex flex-col justify-end items-center p-1 text-center pb-8 md:pb-16 scale-110">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="bg-white/10 p-3 md:p-6 rounded-full backdrop-blur-sm mb-2 md:mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300"
                            >
                                <TreePine className="text-white w-6 h-6 md:w-16 md:h-16" />
                            </motion.div>
                            <h2 className="text-xs md:text-5xl font-black text-white mb-2 md:mb-4 uppercase tracking-tighter drop-shadow-lg leading-tight">
                                Espaces <br /><span className="text-green-200">Verts</span>
                            </h2>
                            <ul className="hidden md:block text-green-50 text-lg font-medium space-y-2 opacity-90">
                                <li>Élagage</li>
                                <li>Entretien Jardin</li>
                                <li>Paysagisme</li>
                            </ul>
                            <div className="hidden md:block mt-8 px-6 py-2 bg-white text-welki-green font-bold rounded-full transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                En savoir plus
                            </div>
                        </div>
                    </Link>

                    {/* Section 3: NETTOYAGE - Skewed Left (\) */}
                    <Link to="/nettoyage" className="relative group flex-1 h-full skew-x-[-12deg] overflow-hidden border-l-4 border-white/10 hover:flex-[1.5] transition-[flex] duration-500 ease-in-out cursor-pointer z-10 -ms-12 origin-top">
                        {/* Background */}
                        <div className="absolute inset-0 bg-slate-700 group-hover:bg-slate-800 transition-colors duration-500"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-gray-500/20 to-transparent"></div>

                        {/* Content (Counter-Skew) */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center skew-x-[12deg] p-1 text-center ps-4 md:ps-8 scale-110">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="bg-white/10 p-3 md:p-6 rounded-full backdrop-blur-sm mb-2 md:mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300"
                            >
                                <Sparkles className="text-white w-6 h-6 md:w-16 md:h-16" />
                            </motion.div>
                            <h2 className="text-xs md:text-5xl font-black text-white mb-2 md:mb-4 uppercase tracking-tighter drop-shadow-lg leading-tight">
                                Nettoyage <br /><span className="text-gray-300">Pro</span>
                            </h2>
                            <ul className="hidden md:block text-gray-200 text-lg font-medium space-y-2 opacity-90">
                                <li>Bureaux</li>
                                <li>Immeubles</li>
                                <li>Fin de chantier</li>
                            </ul>
                            <div className="hidden md:block mt-8 px-6 py-2 bg-white text-slate-700 font-bold rounded-full transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                En savoir plus
                            </div>
                        </div>
                    </Link>

                </section>

                {/* 2. REASSURANCE STRIP - Interactive & Clean */}
                <div className="bg-gray-900 py-12 border-b border-gray-800 relative z-20 shadow-sm">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center"
                        >
                            {[
                                { text: "Intervention 7j/7", icon: <CheckCircle2 /> },
                                { text: "Devis 100% Gratuit", icon: <FileCheck /> },
                                { text: "Produits Homologués", icon: <ShieldCheck /> },
                                { text: "Satisfaction Client", icon: <Star /> }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="flex flex-col items-center justify-center group p-4 rounded-2xl hover:bg-gray-800 transition-colors cursor-default"
                                >
                                    <div className="text-welki-green mb-3 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-welki-green group-hover:text-white transition-colors shadow-sm border border-gray-700">
                                        {React.cloneElement(item.icon, { size: 24 })}
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white font-bold text-lg transition-colors">{item.text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* 3. EXPERTISE SECTION - Cards with Depth */}
                <Section className="bg-gray-950 py-24 relative overflow-hidden">
                    {/* Decorative background blobs */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <div className="relative z-10">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <motion.span
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="text-welki-green font-bold tracking-widest uppercase text-sm mb-2 block"
                            >
                                Nos Services
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-white font-black text-4xl md:text-5xl mb-6"
                            >
                                Nos Domaines d'Intervention
                            </motion.h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Une expertise globale pour la gestion de votre environnement.
                                Nous garantissons efficacité et discrétion.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 px-4">
                            {/* Card 1: 3D */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                whileHover={{ y: -10 }}
                                className="bg-gray-900 rounded-3xl shadow-xl p-8 border-t-8 border-welki-blue hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 flex flex-col group border-x border-b border-gray-800"
                            >
                                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center text-welki-blue mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-700">
                                    <ShieldCheck size={36} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-welki-blue transition-colors">Hygiène 3D</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                    Lutte contre les nuisibles par techniques certifiées. Protection de votre domicile ou local professionnel.
                                </p>
                                <ul className="space-y-3 mb-8 text-gray-300 font-medium">
                                    {["Dératisation", "Désinsectisation", "Désinfection"].map(item => (
                                        <li key={item} className="flex items-center">
                                            <div className="w-5 h-5 rounded-full bg-blue-900/40 flex items-center justify-center text-welki-blue mr-3 shrink-0">
                                                <CheckCircle2 size={12} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/hygiene-3d" className="w-full py-3 rounded-xl border-2 border-gray-700 text-welki-blue font-bold flex items-center justify-center hover:bg-welki-blue hover:text-white transition-all group-hover:border-welki-blue hover:border-welki-blue">
                                    En savoir plus <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </motion.div>

                            {/* Card 2: Green */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ y: -10 }}
                                className="bg-gray-900 rounded-3xl shadow-xl p-8 border-t-8 border-welki-green hover:shadow-2xl hover:shadow-green-900/20 transition-all duration-300 flex flex-col group relative md:-mt-8 z-10 border-x border-b border-gray-800"
                            >
                                <div className="absolute -top-4 -right-4 bg-welki-green text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12">
                                    POPULAIRE
                                </div>
                                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center text-welki-green mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-700">
                                    <TreePine size={36} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-welki-green transition-colors">Espaces Verts</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                    Mise en valeur et entretien de vos extérieurs. Équipe équipée pour travaux en hauteur.
                                </p>
                                <ul className="space-y-3 mb-8 text-gray-300 font-medium">
                                    {["Élagage & Abattage", "Tonte & Taille", "Débroussaillage"].map(item => (
                                        <li key={item} className="flex items-center">
                                            <div className="w-5 h-5 rounded-full bg-green-900/40 flex items-center justify-center text-welki-green mr-3 shrink-0">
                                                <CheckCircle2 size={12} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/espaces-verts" className="w-full py-3 rounded-xl bg-welki-green text-white font-bold flex items-center justify-center hover:bg-green-600 shadow-lg shadow-green-900/40 transition-all">
                                    En savoir plus <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </motion.div>

                            {/* Card 3: Cleaning */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                whileHover={{ y: -10 }}
                                className="bg-gray-900 rounded-3xl shadow-xl p-8 border-t-8 border-gray-500 hover:shadow-2xl hover:shadow-gray-900/20 transition-all duration-300 flex flex-col group border-x border-b border-gray-800"
                            >
                                <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400 mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-700">
                                    <Sparkles size={36} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-400 transition-colors">Nettoyage</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                    Services de propreté pour une hygiène irréprochable.
                                </p>
                                <ul className="space-y-3 mb-8 text-gray-300 font-medium">
                                    {["Bureaux & Immeubles", "Fin de chantier", "Débarras"].map(item => (
                                        <li key={item} className="flex items-center">
                                            <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 mr-3 shrink-0">
                                                <CheckCircle2 size={12} />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/nettoyage" className="w-full py-3 rounded-xl border-2 border-gray-700 text-gray-400 font-bold flex items-center justify-center hover:bg-gray-700 hover:text-white transition-all group-hover:border-gray-500 hover:border-gray-500">
                                    En savoir plus <ArrowRight size={18} className="ml-2" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </Section>

                {/* 4. ABOUT / TRUST SECTION - Glassmorphism & Modern Layout */}
                <section className="py-16 md:py-24 bg-gray-950 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12 md:gap-16 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex-1 order-2 md:order-1"
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 to-green-900 rounded-3xl transform rotate-3 group-hover:rotate-1 transition-transform duration-500"></div>
                                <div className="relative bg-gray-900/60 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-gray-700 shadow-xl">
                                    <h3 className="text-2xl font-bold text-welki-blue mb-6">Pourquoi la certification CERTIBIOCIDE est importante ?</h3>
                                    <p className="text-gray-300 mb-6 leading-relaxed">
                                        Ce certificat individuel est délivré par le Ministère de la Transition écologique. Il atteste de la compétence des professionnels à utiliser les produits biocides en toute sécurité et efficacité.
                                    </p>
                                    <div className="flex items-center gap-6 mt-8 pt-8 border-t border-gray-700">
                                        <motion.img
                                            whileHover={{ scale: 1.1, rotate: 5 }}
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
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
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
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 10 }}
                                        className="flex items-start p-4 rounded-xl hover:bg-gray-900 transition-colors cursor-default"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-green-900/20 flex items-center justify-center text-welki-green mr-5 flex-shrink-0 border border-green-900/50">
                                            {React.cloneElement(item.icon, { size: 24 })}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-xl mb-1">{item.title}</h4>
                                            <p className="text-gray-500">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 6. REVIEWS SECTION - Matching User Request */}
                <section className="py-24 bg-gray-950 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-4xl font-black text-white"
                            >
                                Paroles de clients
                            </motion.h2>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
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
                            </motion.div>
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
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.1 }}
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
                                </motion.div>
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

                {/* 7. CTA - Dark Mode */}
                <section className="py-24 relative overflow-hidden text-center text-white bg-gray-950">
                    <div className="absolute inset-0 bg-gray-950"></div>
                    <div className="relative z-10 max-w-4xl mx-auto px-4">
                        <motion.h2
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ bg: "spring" }}
                            className="text-4xl md:text-5xl font-black mb-8"
                        >
                            Besoin d'un devis immédiat ?
                        </motion.h2>
                        <p className="text-xl mb-12 text-gray-300 font-medium max-w-2xl mx-auto">
                            Décrivez-nous votre besoin, nous vous répondons dans l'heure avec une solution chiffrée.
                        </p>
                        <Link to="/contact" className="inline-block bg-white text-gray-900 px-10 py-5 rounded-full text-xl font-bold hover:bg-welki-blue hover:text-white transition-all shadow-lg hover:shadow-blue-900/20 transform hover:-translate-y-1">
                            Contactez-nous
                        </Link>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Home;
