import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[100] bg-gray-950 flex flex-col items-center justify-center">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#F59E0B]/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            </div>

            {/* Logo / Brand */}
            <div className="relative z-10 text-center">
                <h1 className="text-6xl font-black text-white tracking-tighter mb-4 animate-bounce">
                    WELKI
                </h1>
                <div className="flex justify-center gap-2">
                    <div className="w-3 h-3 bg-[#037971] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-3 h-3 bg-[#F59E0B] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-3 h-3 bg-[#0241cd] rounded-full animate-bounce"></div>
                </div>
                <div className="mt-8 relative w-48 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
                    <div className="absolute inset-y-0 left-0 bg-white w-full origin-left animate-[loading_1s_ease-in-out_infinite]"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes loading {
                    0% { transform: scaleX(0); }
                    50% { transform: scaleX(0.7); }
                    100% { transform: scaleX(1); opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default Loader;
