import React from 'react';
import logoImg from '../assets/welkilgo.png';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[100] bg-gray-950 flex flex-col items-center justify-center overflow-hidden">
            {/* Ambient Background Glow - Spotlight Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-[#0241cd]/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            </div>

            {/* Content container */}
            <div className="relative z-10 flex flex-col items-center justify-center p-8">

                {/* Logo with Breathing Animation */}
                <div className="relative mb-12">
                    {/* Glow behind the logo */}
                    <div className="absolute inset-0 bg-white/10 blur-2xl rounded-full scale-150 animate-pulse"></div>

                    <img
                        src={logoImg}
                        alt="WELKI"
                        className="relative w-48 md:w-64 h-auto object-contain animate-[breathing_3s_ease-in-out_infinite] drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    />
                </div>

                {/* Elegant Loading Line */}
                <div className="relative w-48 h-[2px] bg-gray-900 overflow-hidden rounded-full">
                    <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-[#0241cd] to-transparent w-full -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
                </div>
            </div>

            <style>{`
                @keyframes breathing {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.05); opacity: 0.9; }
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </div>
    );
};

export default Loader;
