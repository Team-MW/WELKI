import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logoImg from '../assets/logo blanc.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Accueil', path: '/' },
        { name: 'Anti Nuisible', path: '/hygiene-3d' },
        { name: 'Espaces Verts', path: '/espaces-verts' },
        { name: 'Nettoyage', path: '/nettoyage' },
        { name: 'Multi-services', path: '/multi-services' },
    ];

    const isActive = (path) => location.pathname === path;

    const getTheme = () => {
        switch (location.pathname) {
            case '/hygiene-3d':
                return {
                    main: 'text-[#E71D36]',
                    bg: 'bg-[#E71D36]',
                    border: 'border-[#E71D36]',
                    hoverText: 'hover:text-[#ff4d63]',
                    activeBorder: 'border-[#E71D36]',
                    mobileActive: 'bg-[#E71D36]',
                    shadow: 'shadow-[#E71D36]/40'
                };
            case '/espaces-verts':
                return {
                    main: 'text-[#037971]',
                    bg: 'bg-[#037971]',
                    border: 'border-[#037971]',
                    hoverText: 'hover:text-[#04a096]',
                    activeBorder: 'border-[#037971]',
                    mobileActive: 'bg-[#037971]',
                    shadow: 'shadow-[#037971]/40'
                };
            case '/nettoyage':
                return {
                    main: 'text-[#0241cd]',
                    bg: 'bg-[#0241cd]',
                    border: 'border-[#0241cd]',
                    hoverText: 'hover:text-[#3366ff]',
                    activeBorder: 'border-[#0241cd]',
                    mobileActive: 'bg-[#0241cd]',
                    shadow: 'shadow-[#0241cd]/40'
                };
            case '/multi-services':
                return {
                    main: 'text-[#F59E0B]',
                    bg: 'bg-[#F59E0B]',
                    border: 'border-[#F59E0B]',
                    hoverText: 'hover:text-[#fbbf24]',
                    activeBorder: 'border-[#F59E0B]',
                    mobileActive: 'bg-[#F59E0B]',
                    shadow: 'shadow-[#F59E0B]/40'
                };
            default:
                return {
                    main: 'text-welki-blue',
                    bg: 'bg-welki-blue',
                    border: 'border-welki-blue',
                    hoverText: 'hover:text-sky-300',
                    activeBorder: 'border-welki-blue',
                    mobileActive: 'bg-welki-blue',
                    shadow: 'shadow-blue-900/40'
                };
        }
    };

    const theme = getTheme();

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-[100] bg-gray-950/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="flex items-center gap-2 group relative">
                                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img
                                    src={logoImg}
                                    alt="WELKI Logo"
                                    className="h-10 w-auto object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
                                />
                            </Link>
                        </div>

                        {/* Desktop Menu - Visible on Large Screens */}
                        <nav className="hidden lg:flex items-center space-x-10">
                            <Link
                                to="/contact"
                                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider border transition-all duration-300 ${isActive('/contact')
                                    ? 'bg-white text-gray-950 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                    : 'border-white/20 text-white hover:bg-white hover:text-gray-950 hover:border-white'
                                    }`}
                            >
                                Devis Express
                            </Link>
                            {links.map((link) => {
                                const active = isActive(link.path);
                                return (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        className="relative group py-2"
                                    >
                                        <span className={`text-sm font-bold uppercase tracking-[0.15em] transition-colors duration-300 ${active
                                            ? theme.main
                                            : 'text-gray-400 group-hover:text-white'
                                            }`}>
                                            {link.name}
                                        </span>
                                        {active && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className={`absolute -bottom-1 left-0 right-0 h-[3px] rounded-full ${theme.bg} shadow-[0_0_10px_currentColor]`}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        {/* Hover Effect for non-active */}
                                        {!active && (
                                            <div className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full`} />
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* Mobile/Tablet Menu Button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`text-gray-300 hover:text-white focus:outline-none p-2 transition-colors`}
                                aria-label="Menu"
                            >
                                {isOpen ? <X size={32} /> : <Menu size={32} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Slide-out - Sibling to Header to avoid CSS Filter containment */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 z-[105]"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Panel - Full Screen on small devices, fixed width on larger */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-[#020617] z-[110] flex flex-col shadow-2xl"
                        >
                            <div className="flex justify-between items-center h-20 px-6 border-b border-gray-900 bg-[#020617]">
                                <span className="text-2xl font-black text-[#0241cd] tracking-tighter">MENU</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex flex-col p-6 space-y-4 overflow-y-auto bg-[#020617] h-full">
                                {links.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center px-6 py-5 rounded-xl text-lg font-bold transition-all duration-200 ${isActive(link.path)
                                            ? 'bg-[#0052cc] text-white shadow-[0_0_20px_rgba(0,82,204,0.4)]'
                                            : 'bg-gray-900/50 text-gray-300 hover:bg-gray-800 border border-gray-800/50'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <div className="mt-8 p-8 bg-gray-900/30 rounded-3xl border border-blue-900/30 text-center flex flex-col items-center justify-center flex-grow max-h-[250px]">
                                    <p className="text-gray-400 font-medium mb-4">Une urgence ?</p>
                                    <a href="tel:0608070696" className="block text-3xl md:text-4xl font-black text-[#0241cd] hover:scale-105 transition-transform tracking-wider">
                                        06.08.07.06.96
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
