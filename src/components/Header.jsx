import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Accueil', path: '/' },
        { name: 'Nettoyage', path: '/nettoyage' },
        { name: 'Hygiène 3D', path: '/hygiene-3d' },
        { name: 'Espaces Verts', path: '/espaces-verts' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    const getTheme = () => {
        switch (location.pathname) {
            case '/hygiene-3d':
                return {
                    main: 'text-[#003d80]',
                    bg: 'bg-[#003d80]',
                    border: 'border-[#003d80]',
                    hoverText: 'hover:text-[#003d80]',
                    activeBorder: 'border-[#003d80]',
                    mobileActive: 'bg-[#003d80]',
                    shadow: 'shadow-blue-900/20'
                };
            case '/espaces-verts':
                return {
                    main: 'text-welki-green',
                    bg: 'bg-welki-green',
                    border: 'border-welki-green',
                    hoverText: 'hover:text-welki-green',
                    activeBorder: 'border-welki-green',
                    mobileActive: 'bg-welki-green',
                    shadow: 'shadow-green-900/20'
                };
            case '/nettoyage':
                return {
                    main: 'text-slate-700',
                    bg: 'bg-slate-700',
                    border: 'border-slate-700',
                    hoverText: 'hover:text-slate-700',
                    activeBorder: 'border-slate-700',
                    mobileActive: 'bg-slate-700',
                    shadow: 'shadow-slate-900/20'
                };
            default:
                return {
                    main: 'text-welki-blue',
                    bg: 'bg-welki-blue',
                    border: 'border-welki-blue',
                    hoverText: 'hover:text-welki-blue',
                    activeBorder: 'border-welki-green', // Keep original accent for default
                    mobileActive: 'bg-[#0056b3]',
                    shadow: 'shadow-blue-200'
                };
        }
    };

    const theme = getTheme();

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-[100] bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="flex items-center gap-2 group">
                                <div className={`${theme.bg} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl border-2 ${theme.border} group-hover:bg-white ${theme.hoverText} transition-colors`}>
                                    W
                                </div>
                                <span className={`text-2xl font-black tracking-tight ${theme.main}`}>WELKI</span>
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
                                        : `text-gray-600 ${theme.hoverText} hover:pb-1`
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
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
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
                            <div className="flex justify-between items-center h-20 px-6 border-b border-gray-100">
                                <span className={`text-xl font-black ${theme.main}`}>MENU</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 bg-gray-100 rounded-full text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex flex-col p-6 space-y-3 overflow-y-auto">
                                {links.map((link) => (
                                    <Link
                                        key={link.path}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center justify-between px-6 py-4 rounded-xl text-lg font-bold transition-all ${isActive(link.path)
                                            ? `${theme.mobileActive} text-white shadow-lg ${theme.shadow}`
                                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                                    <p className="text-sm text-gray-600 font-semibold mb-2">Une urgence ?</p>
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
