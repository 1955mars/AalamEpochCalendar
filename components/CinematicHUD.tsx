
import React from 'react';
import { TimelineEvent } from '../types';

interface CinematicHUDProps {
    isActive: boolean;
    event?: TimelineEvent;
    currentIndex: number;
    totalEvents: number;
    onPause: () => void;
    onStop: () => void;
    onNext: () => void;
    onPrev: () => void;
    onSeek: (index: number) => void;
    isPaused: boolean;
    progress?: number;
    duration?: number;
}

const CinematicHUD: React.FC<CinematicHUDProps> = ({ isActive, event, currentIndex, totalEvents, onPause, onStop, onNext, onPrev, onSeek, isPaused, duration = 4000 }) => {
    const progressBarRef = React.useRef<HTMLDivElement>(null);

    if (!isActive || !event) return null;

    const progress = (currentIndex / (Math.max(totalEvents - 1, 1))) || 0;
    const progressPercent = progress * 100;

    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!progressBarRef.current) return;
        const rect = progressBarRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const percentage = Math.max(0, Math.min(1, x / width));
        const targetIndex = Math.round(percentage * (totalEvents - 1));
        onSeek(targetIndex);
    };

    return (
        <div className="fixed inset-0 z-30 pointer-events-none flex flex-col justify-end">
            {/* Vignette / Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-0" />

            {/* Content Area */}
            <div className="w-full max-w-4xl mx-auto px-8 pb-32 flex flex-col gap-4 text-center text-white drop-shadow-lg relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">

                {/* ID Pill */}
                <div className="mx-auto bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs font-mono tracking-widest uppercase text-blue-200 mb-2">
                    {event.phase}
                </div>

                {/* Year Label */}
                <div className="text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-tight">
                    {event.year}
                </div>

                {/* Title */}
                <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
                    {event.title}
                </h2>

                {/* Description */}
                <p className="max-w-2xl mx-auto text-lg md:text-2xl font-serif leading-relaxed text-white/90 mt-6 text-shadow-lg">
                    {event.description}
                </p>
            </div>

            {/* Bottom Control Bar */}
            <div className="w-full bg-gradient-to-t from-black via-black/90 to-transparent pb-8 pt-20 px-8 relative z-20 pointer-events-auto flex flex-col items-center gap-6">

                {/* Progress Bar */}
                <div
                    ref={progressBarRef}
                    onClick={handleProgressClick}
                    className="w-full max-w-3xl h-1.5 bg-white/10 rounded-full overflow-hidden relative group cursor-pointer hover:h-2 transition-all"
                >
                    <div
                        className="absolute left-0 top-0 h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all duration-300 ease-linear"
                        style={{ width: `${progressPercent}%` }}
                    />
                    {/* Hover Interaction Indicator */}
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                </div>

                {/* Controls */}
                <div className="flex items-center gap-8">
                    {/* Prev */}
                    <button
                        onClick={onPrev}
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all hover:scale-110 active:scale-95 border border-white/5"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="rotate-180"><path d="M5 4l12 8-12 8V4z" /></svg>
                    </button>

                    {/* Play/Pause (Central) */}
                    <button
                        onClick={onPause}
                        className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] group relative overflow-hidden"
                    >
                        {/* Animating ring for timer would be cool here, but simpler is better for now */}
                        {isPaused ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M5 4l12 8-12 8V4z" /></svg>
                        ) : (
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
                                {/* Circular progress for auto-skip could go around this button specifically */}
                                <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 -rotate-90 pointer-events-none opacity-20">
                                    <circle cx="40" cy="40" r="38" stroke="black" strokeWidth="4" fill="none"
                                        strokeDasharray="238"
                                        strokeDashoffset="0"
                                        style={{ animation: isPaused ? 'none' : `countdown ${duration}ms linear forwards infinite` }}
                                    />
                                </svg>
                            </div>
                        )}
                    </button>

                    {/* Next */}
                    <button
                        onClick={onNext}
                        className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all hover:scale-110 active:scale-95 border border-white/5"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5 4l12 8-12 8V4z" /></svg>
                    </button>

                </div>

                {/* Exit Button (Separate) */}
                <button
                    onClick={onStop}
                    className="absolute right-8 top-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-200/80 hover:text-red-200 transition-colors border border-red-500/10 text-xs font-bold uppercase tracking-widest"
                >
                    <span>Exit</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                </button>
            </div>

            <style>{`
                @keyframes countdown {
                    from { stroke-dashoffset: 0; }
                    to { stroke-dashoffset: 238; }
                }
            `}</style>
        </div>
    );
};

export default CinematicHUD;
