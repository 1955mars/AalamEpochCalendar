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
                <div className={`relative flex items-center justify-center bg-slate-900 text-white rounded-xl shadow-2xl overflow-hidden ${isLarge ? 'w-24 h-24 text-5xl ring-4 ring-indigo-500/30' : 'w-10 h-10 text-xl ring-2 ring-white/50'}`}>
                    <div className={`relative z-10 ${isLarge ? 'p-4' : 'p-2'}`}>
                        <Network size={isLarge ? 48 : 20} strokeWidth={isLarge ? 1.5 : 2} className="text-indigo-100" />
                    </div>

                    {/* Subtle background effects */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-50 blur-sm ${isLarge ? 'scale-110' : 'scale-105'}`} />
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-500 rounded-full blur-xl opacity-60" />
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
