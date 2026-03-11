import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileCheck } from 'lucide-react';

const FloatingCTA = () => {
    return (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] transition-all duration-300 ease-out animate-bounce-subtle max-w-[95vw] md:max-w-none">
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
    );
};

export default FloatingCTA;
