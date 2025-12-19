
import React, { useState } from 'react';
import { TimelineEvent } from '../types';
import { PHASES } from '../constants';
import CachedImage from './CachedImage';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';

interface MobileSwipeViewProps {
    events: TimelineEvent[];
    onPhaseChange?: (phase: string) => void;
}

const MobileSwipeView: React.FC<MobileSwipeViewProps> = ({ events, onPhaseChange }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Navigation Handlers
    const handleBack = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        const newIndex = currentIndex - 1;
        if (newIndex >= 0) {
            setCurrentIndex(newIndex);
        }
    };

    const handleNext = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        if (currentIndex < events.length) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handleReset = () => {
        setCurrentIndex(0);
    };

    const currentEvent = events[currentIndex];
    const nextEvent = events[currentIndex + 1];

    if (currentIndex >= events.length) {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-slate-900 text-white p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Timeline Completed!</h2>
                <p className="mb-8 text-slate-400">You have journeyed through all of history.</p>
                <button
                    onClick={handleReset}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-full font-semibold hover:bg-blue-500 transition-colors"
                >
                    <RotateCcw size={20} />
                    Start Over
                </button>
            </div>
        );
    }

    // Helper component for the Card UI
    const EventCard = ({ event, isBackground = false }: { event: TimelineEvent, isBackground?: boolean }) => (
        <div
            className={`w-full h-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col border border-slate-200 absolute inset-0 transition-transform duration-300 ${isBackground ? 'scale-95 translate-y-4 opacity-50' : 'scale-100 z-10'}`}
        >
            {/* Image Area */}
            <div className="h-[55%] w-full relative bg-slate-200">
                <CachedImage
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-mono font-bold">
                    {event.year}
                </div>
            </div>

            {/* Text Area */}
            <div className="flex-1 p-6 flex flex-col justify-between bg-white">
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 leading-tight mb-3">
                        {event.title}
                    </h3>
                    {event.type === 'phase_marker' ? (
                        <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md font-semibold mb-2">
                            NEW ERA
                        </div>
                    ) : null}
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
                        {event.description}
                    </p>
                </div>
                <div className="flex justify-center items-center mt-4 text-xs font-mono text-slate-400 h-4">
                    {currentIndex < 3 && (
                        <div className="text-slate-300 uppercase tracking-widest font-sans font-medium animate-pulse">
                            Tap L/R to Navigate
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col items-center h-[calc(100vh-80px)] w-full bg-slate-100 pt-4 pb-8">
            {/* Phase Progress Bar */}
            <div className="w-full px-6 flex gap-1 mb-6 flex-none">
                {PHASES.map((phase, idx) => {
                    const currentPhaseIdx = PHASES.findIndex(p => p.id === (currentEvent?.phase || 'Phase 1'));
                    const isActive = idx === currentPhaseIdx;
                    const isPast = idx < currentPhaseIdx;

                    return (
                        <div
                            key={phase.id}
                            className={`h-1 flex-1 rounded-full transition-colors duration-300 ${isActive ? 'bg-blue-600' :
                                isPast ? 'bg-blue-300' :
                                    'bg-slate-200'
                                }`}
                        />
                    );
                })}
            </div>

            {/* Phase Name Header (Compact) */}
            <div className="w-full text-center px-4 mb-2 flex-none z-10 relative">
                <h2 className="text-sm font-bold text-slate-700 leading-tight">
                    {PHASES.find(p => p.id === currentEvent?.phase)?.title || currentEvent?.phase || 'Unknown Phase'}
                    <span className="font-normal text-slate-500 ml-2">
                        • {currentEvent?.year}
                    </span>
                </h2>
            </div>

            {/* Tap Navigation Container */}
            <div className="relative w-full max-w-sm flex-grow mb-4">
                {/* Background Card (Preview) */}
                {nextEvent && <EventCard event={nextEvent} isBackground={true} />}

                {/* Current Card */}
                <EventCard event={currentEvent} />

                {/* Invisible Click Zones */}
                {/* Left 30% -> Back */}
                <div
                    className="absolute top-0 left-0 w-[30%] h-full z-20 cursor-pointer active:bg-black/5 transition-colors"
                    onClick={handleBack}
                    title="Previous"
                />

                {/* Right 70% -> Next */}
                <div
                    className="absolute top-0 right-0 w-[70%] h-full z-20 cursor-pointer active:bg-black/5 transition-colors"
                    onClick={handleNext}
                    title="Next"
                />
            </div>

            {/* Explicit Navigation Buttons (Footer) */}
            <div className="w-full px-12 flex justify-between items-center text-slate-400 flex-none h-12">
                <button
                    onClick={handleBack}
                    disabled={currentIndex === 0}
                    className="p-3 rounded-full hover:bg-slate-200 transition-colors disabled:opacity-30 disabled:hover:bg-transparent text-slate-500 z-30 pointer-events-auto"
                    aria-label="Previous Event"
                >
                    <ArrowLeft size={28} />
                </button>
                <span className="text-xs uppercase tracking-widest font-medium opacity-40">Tap Sides</span>
                <button
                    onClick={handleNext}
                    className="p-3 rounded-full hover:bg-slate-200 transition-colors text-slate-500 z-30 pointer-events-auto"
                    aria-label="Next Event"
                >
                    <ArrowRight size={28} />
                </button>
            </div>
        </div>
    );
};

export default MobileSwipeView;
