
import React from 'react';
import { TimelineEvent } from '../types';

interface CinematicHUDProps {
    isActive: boolean;
    event?: TimelineEvent;
    currentIndex: number;
    totalEvents: number;
    onPause: () => void;
    onStop: () => void;
    isPaused: boolean;
    progress?: number; // Optional as it seems unused in App.tsx usage or calculated differently
    duration?: number;
}

const CinematicHUD: React.FC<CinematicHUDProps> = ({ isActive, event, currentIndex, totalEvents, onPause, onStop, isPaused, duration = 4000 }) => {
    if (!isActive || !event) return null;

    const progress = (currentIndex / (totalEvents - 1)) || 0;

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

            {/* Per-Event Timer (Bottom Right) */}
            <div className="absolute bottom-8 right-8 flex items-center gap-4 z-40">
                {/* Circular Countdown Timer */}
                <div className="relative w-12 h-12 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle
                            cx="24"
                            cy="24"
                            r="20"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="transparent"
                            className="text-white/20"
                        />
                        <circle
                            key={event.id} // Key change triggers animation reset
                            cx="24"
                            cy="24"
                            r="20"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="transparent"
                            className="text-blue-400 transition-all duration-100 ease-linear"
                            strokeDasharray="125.6"
                            strokeDashoffset="0"
                            style={{
                                animation: `countdown ${duration}ms linear forwards`
                            }}
                        />
                    </svg>
                    {/* Pause/Play Icon Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-auto cursor-pointer hover:scale-110 transition-transform" onClick={onPause}>
                        {isPaused ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play text-white ml-1"><polygon points="6 3 20 12 6 21 6 3" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-pause text-white"><rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" /></svg>
                        )}
                    </div>
                </div>

                <button
                    onClick={onStop}
                    className="bg-red-500/20 hover:bg-red-500/40 text-red-200 p-3 rounded-full backdrop-blur-md transition-colors pointer-events-auto border border-red-500/30"
                    title="Exit Documentary Mode"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
            </div>

            <style>{`
                @keyframes countdown {
                    from { stroke-dashoffset: 0; }
                    to { stroke-dashoffset: 125.6; }
                }
            `}</style>
        </div>
    );
};

export default CinematicHUD;
