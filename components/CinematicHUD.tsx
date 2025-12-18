
import React from 'react';
import { TimelineEvent } from '../types';

interface CinematicHUDProps {
    event?: TimelineEvent;
    progress: number; // 0 to 1
}

const CinematicHUD: React.FC<CinematicHUDProps> = ({ event, progress }) => {
    if (!event) return null;

    return (
        <div className="fixed inset-0 z-30 pointer-events-none flex flex-col justify-end">
            {/* Vignette / Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0" />

            {/* Content Area */}
            <div className="w-full max-w-4xl px-8 pb-12 md:px-12 md:pb-16 flex flex-col gap-2 text-white drop-shadow-lg relative z-10">

                {/* Year Label */}
                <div className="text-3xl md:text-5xl font-mono font-bold text-blue-200 tracking-tight opacity-90">
                    {event.year}
                </div>

                {/* Title */}
                <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                    {event.title}
                </h2>

                {/* Description */}
                <p className="max-w-2xl text-lg md:text-2xl font-serif leading-relaxed text-white/90 mt-4 bg-black/40 p-4 rounded-xl backdrop-blur-sm border border-white/10 shadow-xl">
                    {event.description}
                </p>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full h-2 bg-white/10 relative">
                {/* Active Progress */}
                <div
                    className="absolute left-0 top-0 h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-200 ease-linear"
                    style={{ width: `${progress * 100}%` }}
                />

                {/* Markers (Optional specific era ticks can go here later) */}
            </div>
        </div>
    );
};

export default CinematicHUD;
