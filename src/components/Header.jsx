import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logoImg from '../assets/welkilgo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Accueil', path: '/' },
        { name: 'Hygiène 3D', path: '/hygiene-3d' },
        { name: 'Espaces Verts', path: '/espaces-verts' },
        { name: 'Nettoyage', path: '/nettoyage' },
        { name: 'Contact', path: '/contact' },
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
            <header className="fixed top-0 left-0 right-0 z-[100] bg-gray-950/90 backdrop-blur-md border-b border-gray-800 shadow-sm transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="flex items-center gap-2 group">
                                <img
                                    src={logoImg}
                                    alt="WELKI Logo"
                                    className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
                                />
                            </Link>
                        </div>

                        {/* Desktop Menu - Visible on Large Screens */}
                        <nav className="hidden lg:flex space-x-8">
                            {links.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-sm font-bold uppercase tracking-wide transition-colors duration-200 ${isActive(link.path)
                                        ? `${theme.main} border-b-2 ${theme.activeBorder} pb-1`
                                        : `text-gray-300 ${theme.hoverText} hover:pb-1`
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobile/Tablet Menu Button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`text-gray-700 ${theme.hoverText} focus:outline-none p-2`}
                                aria-label="Menu"
                            >
                                {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
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
                            className="fixed inset-0 bg-black/60 z-[105]"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed inset-y-0 right-0 w-80 bg-white shadow-2xl z-[110] border-l border-gray-100 flex flex-col"
                        >
                            <div className="flex justify-between items-center h-20 px-6 border-b border-gray-800 bg-gray-950">
                                <span className={`text-xl font-black ${theme.main}`}>MENU</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 bg-gray-800 rounded-full text-white hover:bg-red-900/50 hover:text-red-400 transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex flex-col p-6 space-y-3 overflow-y-auto bg-gray-950 h-full">
                                {links.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center justify-between px-6 py-4 rounded-xl text-lg font-bold transition-all ${isActive(link.path)
                                            ? `${theme.mobileActive} text-white shadow-lg ${theme.shadow}`
                                            : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <div className="mt-8 p-6 bg-blue-900/20 rounded-2xl border border-blue-900/50 text-center">
                                    <p className="text-sm text-gray-400 font-semibold mb-2">Une urgence ?</p>
                                    <a href="tel:0608070696" className={`block text-2xl font-black ${theme.main} hover:scale-105 transition-transform`}>
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
