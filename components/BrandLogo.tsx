import React from 'react';
import { Sparkles, Network } from 'lucide-react';

interface BrandLogoProps {
    variant?: 'large' | 'small';
    className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'small', className = '' }) => {
    const isLarge = variant === 'large';

    return (
        <div className={`flex flex-col items-center justify-center ${className}`}>
            <div className={`flex items-center gap-3 ${isLarge ? 'gap-6' : 'gap-3'}`}>
                {/* Iconic Mark */}
                <div className={`relative flex items-center justify-center bg-slate-900 text-white rounded-xl shadow-2xl overflow-hidden ${isLarge ? 'w-24 h-24 ring-4 ring-amber-500/30' : 'w-10 h-10 ring-2 ring-slate-900/10'}`}>
                    <div className={`relative z-10 w-full h-full flex items-center justify-center`}>
                        {/* Custom "Aalam Nexus" Icon */}
                        <svg viewBox="0 0 100 100" className={`${isLarge ? 'w-16 h-16' : 'w-7 h-7'} text-amber-200`} fill="none" stroke="currentColor" strokeWidth={isLarge ? "3" : "6"} strokeLinecap="round" strokeLinejoin="round">
                            {/* Universal Circle */}
                            <circle cx="50" cy="50" r="40" className="opacity-50 text-indigo-400" />
                            {/* Connected Nodes */}
                            <path d="M50 20 L50 50 L80 65 M50 50 L20 65" className="text-amber-100" />
                            <circle cx="50" cy="20" r="4" fill="currentColor" className="text-white" />
                            <circle cx="80" cy="65" r="4" fill="currentColor" className="text-white" />
                            <circle cx="20" cy="65" r="4" fill="currentColor" className="text-white" />
                            <circle cx="50" cy="50" r="6" fill="currentColor" className="text-amber-400" />
                        </svg>
                    </div>

                    {/* Subtle background effects */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-indigo-950 to-slate-900 opacity-90`} />
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/20 via-transparent to-transparent" />
                </div>

                {/* Text Lockup */}
                <div className="flex flex-col">
                    <h1 className={`font-serif font-bold tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 ${isLarge ? 'text-7xl' : 'text-3xl'}`}>
                        Aalam
                    </h1>
                </div>
            </div>

            {/* Tagline */}
            <div className={`flex items-center gap-2 mt-2 ${isLarge ? 'mt-4' : 'hidden'}`}>
                <div className="h-px bg-slate-300 w-12" />
                <span className="text-sm md:text-xl font-medium tracking-[0.2em] text-slate-500 uppercase bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                    Knowledge Connected
                </span>
                <div className="h-px bg-slate-300 w-12" />
            </div>
            {/* Small Tagline for Header */}
            {!isLarge && (
                <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase opacity-80 mt-0.5 ml-1">
                    Knowledge Connected
                </span>
            )}
        </div>
    );
};

export default BrandLogo;
