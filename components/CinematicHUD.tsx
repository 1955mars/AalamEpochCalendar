
import React, { useState } from 'react';
import { TimelineEvent, Connection, SemanticTag } from '../types';
import { Fingerprint, ArrowRight, Zap, Link, List, X, Tag, Compass } from 'lucide-react';
import ExploreDropup from './ExploreDropup';

export interface ConnectionBadgeData {
    connection: Connection;
    targetEvent: TimelineEvent;
    direction: 'incoming' | 'outgoing';
}

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
    connections?: ConnectionBadgeData[];
    tags?: SemanticTag[];
    onJumpToEvent?: (eventId: string) => void;
    onExit?: () => void;
    onSpinoff?: (journeyId: string, journeyTitle: string) => void;
}

const ConnectionIcon = ({ type }: { type: string }) => {
    switch (type) {
        case 'caused': return <Zap size={14} className="text-yellow-400" />;
        case 'influenced': return <Fingerprint size={14} className="text-purple-400" />;
        case 'preceded': return <ArrowRight size={14} className="text-blue-400" />;
        default: return <Link size={14} className="text-slate-400" />;
    }
};

const ConnectionLabel = ({ type, direction }: { type: string, direction: 'incoming' | 'outgoing' }) => {
    if (direction === 'incoming') {
        switch (type) {
            case 'caused': return <span className="text-yellow-200">Unlocked By</span>;
            case 'influenced': return <span className="text-purple-200">Influenced By</span>;
            case 'preceded': return <span className="text-blue-200">Follows</span>;
            default: return <span>Related To</span>;
        }
    } else {
        switch (type) {
            case 'caused': return <span className="text-yellow-200">Causes</span>;
            case 'influenced': return <span className="text-purple-200">Influences</span>;
            case 'preceded': return <span className="text-blue-200">Precedes</span>;
            default: return <span>Relates To</span>;
        }
    }
}

const PHASE_TITLES: Record<string, string> = {
    'Phase 1': 'Cosmic & Primordial Earth',
    'Phase 2': 'The Age of Ancient Life',
    'Phase 3': 'Hominid Evolution',
    'Phase 4': 'The Neolithic Revolution',
    'Phase 5': 'The Bronze Age',
    'Phase 6': 'The Iron Age & Classical Age',
    'Phase 7': 'The Post-Classical World',
    'Phase 8': 'The Age of Exploration',
    'Phase 9': 'The Age of Revolutions',
    'Phase 10': 'The Early 20th Century',
    'Phase 11': 'The Cold War Era',
    'Phase 12': 'The Modern Digital Age',
    'Modern': 'The Future'
};

const CinematicHUD: React.FC<CinematicHUDProps> = ({ isActive, event, currentIndex, totalEvents, onPause, onStop, onNext, onPrev, onSeek, isPaused, duration = 4000, connections = [], tags = [], onJumpToEvent, onExit, onSpinoff }) => {
    const progressBarRef = React.useRef<HTMLDivElement>(null);
    const [isExploreOpen, setIsExploreOpen] = useState(false);

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

    const handleExploreClick = () => {
        setIsExploreOpen(!isExploreOpen);
    };

    const handleExploreClose = () => {
        setIsExploreOpen(false);
    };

    return (
        <div className="fixed inset-0 z-30 pointer-events-none flex flex-col justify-end">
            {/* Vignette / Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-0" />

            {/* Navigation Click Zones (Left/Right Halves) */}
            <div className="absolute inset-0 z-10 flex w-full h-full">
                <div
                    className="w-1/2 h-full cursor-w-resize pointer-events-auto active:bg-white/5 transition-colors"
                    onClick={onPrev}
                    title="Previous"
                />
                <div
                    className="w-1/2 h-full cursor-e-resize pointer-events-auto active:bg-white/5 transition-colors"
                    onClick={onNext}
                    title="Next"
                />
            </div>

            <div className="w-full max-w-3xl mx-auto px-6 md:px-12 pb-8 md:pb-24 flex flex-col gap-3 text-center text-white drop-shadow-lg relative z-20 pointer-events-none animate-in fade-in slide-in-from-bottom-8 duration-700">

                {/* ID Pill & Connections */}
                <div className="flex flex-col items-center gap-3 mb-2">
                    {/* Phase Pill */}
                    <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-xs font-mono tracking-widest uppercase text-blue-200">
                        {PHASE_TITLES[event.phase] || event.phase}
                    </div>

                    {/* Dependency Badges (Incoming) */}
                    {connections.filter(c => c.direction === 'incoming').map((c, i) => (
                        <button
                            key={i}
                            onClick={() => onJumpToEvent?.(c.targetEvent.id)}
                            className="flex items-center gap-2 bg-black/40 hover:bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 hover:border-white/30 transition-all group animate-in slide-in-from-top-4 duration-500 delay-100 pointer-events-auto"
                        >
                            <div className="p-1 rounded bg-white/5 group-hover:bg-white/10">
                                <ConnectionIcon type={c.connection.type} />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-[10px] uppercase tracking-wider font-bold opacity-70">
                                    <ConnectionLabel type={c.connection.type} direction="incoming" />
                                </span>
                                <span className="text-xs font-medium text-white truncate max-w-[200px]">
                                    {c.targetEvent.title}
                                </span>
                            </div>
                        </button>
                    ))}
                    {/* Tags */}
                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-2 mt-2 animate-in fade-in slide-in-from-top-2 duration-500 delay-200">
                            {tags.map((tag, i) => (
                                <div key={i} className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] uppercase font-bold tracking-wider text-white/50">
                                    <Tag size={10} className={
                                        tag.type === 'Location' ? 'text-emerald-400' :
                                            tag.type === 'Entity' ? 'text-amber-400' :
                                                tag.type === 'Topic' ? 'text-purple-400' :
                                                    'text-slate-400'
                                    } />
                                    <span>{tag.value}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Year Label */}
                <div className="text-2xl md:text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 tracking-tight">
                    {event.year}
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-6xl font-black tracking-tight leading-tight">
                    {event.title}
                </h2>

                {/* Description */}
                <p className="max-w-xl mx-auto text-base md:text-xl font-serif leading-relaxed text-white/90 mt-4 text-shadow-lg">
                    {event.description}
                </p>

                {/* Forward Links (Outgoing) */}
                {connections.filter(c => c.direction === 'outgoing').length > 0 && (
                    <div className="flex flex-wrap justify-center gap-3 mt-4 animate-in fade-in duration-1000 delay-300 pointer-events-auto">
                        {connections.filter(c => c.direction === 'outgoing').map((c, i) => (
                            <button
                                key={i}
                                onClick={() => onJumpToEvent?.(c.targetEvent.id)}
                                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full border border-white/5 hover:border-white/20 transition-all text-xs text-white/60 hover:text-white pointer-events-auto"
                            >
                                <span className="opacity-50 text-[10px] uppercase">
                                    <ConnectionLabel type={c.connection.type} direction="outgoing" />
                                </span>
                                <span>{c.targetEvent.title}</span>
                                <ArrowRight size={12} className="opacity-50" />
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Bottom Control Bar */}
            <div className="w-full bg-gradient-to-t from-black via-black/90 to-transparent pb-6 pt-12 px-6 relative z-20 pointer-events-auto flex flex-col items-center gap-4">

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
                    <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
                </div>

                {/* Controls Row */}
                <div className="w-full max-w-3xl flex items-center justify-between">

                    {/* Exit Button */}
                    <button
                        onClick={onExit}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 hover:bg-red-500/20 text-red-200/50 hover:text-red-200 transition-colors border border-red-500/5 hover:border-red-500/20 text-xs font-bold uppercase tracking-widest group"
                    >
                        <X size={16} className="group-hover:scale-110 transition-transform" />
                        <span className="hidden md:inline">Exit</span>
                    </button>

                    {/* Event Counter (Bottom Right) */}
                    <div className="fixed right-6 bottom-6 text-white/50 text-sm font-mono">
                        {currentIndex + 1}/{totalEvents}
                    </div>

                    {/* Play/Pause (Central) */}
                    <button
                        onClick={onPause}
                        className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] group relative overflow-hidden"
                    >
                        {isPaused ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M5 4l12 8-12 8V4z" /></svg>
                        ) : (
                            <div className="relative w-full h-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
                                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none opacity-20" viewBox="0 0 80 80">
                                    <circle cx="40" cy="40" r="38" stroke="black" strokeWidth="4" fill="none"
                                        strokeDasharray="238"
                                        strokeDashoffset="0"
                                        style={{ animation: isPaused ? 'none' : `countdown ${duration}ms linear forwards infinite` }}
                                    />
                                </svg>
                            </div>
                        )}
                    </button>

                    {/* Right side buttons container */}
                    <div className="flex items-center gap-2 relative">
                        {/* Explore Button (now first) */}
                        <button
                            onClick={handleExploreClick}
                            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all border text-xs font-bold uppercase tracking-widest group ${isExploreOpen
                                ? 'bg-purple-500/30 border-purple-500/50 text-white'
                                : 'bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:from-purple-500/30 hover:to-blue-500/30 text-purple-200 hover:text-white border-purple-500/20 hover:border-purple-500/40'
                                }`}
                        >
                            <Compass size={16} className={`transition-all ${isExploreOpen ? 'rotate-45' : 'group-hover:scale-110 group-hover:rotate-45'}`} />
                            <span className="hidden md:inline">Explore</span>
                        </button>

                        {/* View Timeline Button */}
                        <button
                            onClick={onStop}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors border border-white/5 hover:border-white/20 text-xs font-bold uppercase tracking-widest group"
                        >
                            <List size={16} className="group-hover:scale-110 transition-transform" />
                            <span className="hidden md:inline">Timeline</span>
                        </button>

                        {/* Explore Dropup Menu */}
                        <ExploreDropup
                            event={event}
                            isOpen={isExploreOpen}
                            onClose={handleExploreClose}
                            onSpinoff={onSpinoff}
                        />
                    </div>
                </div>
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
