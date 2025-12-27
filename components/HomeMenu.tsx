import React, { useRef, useEffect } from 'react';
import { Globe, Zap, Cpu, Palette, Dna, ArrowRight, Component } from 'lucide-react';
import { JOURNEYS } from '../data/journeys';
import { Journey } from '../types';
import BrandLogo from './BrandLogo';

import { PLANNED_JOURNEYS } from '../data/plannedJourneys';

interface HomeMenuProps {
    onSelectJourney: (journey: Journey | null) => void;
    onExploreFullTimeline: () => void;
    scrollToJourneyId?: string | null;
}

const HomeMenu: React.FC<HomeMenuProps> = ({ onSelectJourney, onExploreFullTimeline, scrollToJourneyId }) => {
    const journeyRefs = useRef<Record<string, HTMLButtonElement | null>>({});

    useEffect(() => {
        if (scrollToJourneyId && journeyRefs.current[scrollToJourneyId]) {
            // Instant scroll - no animation
            journeyRefs.current[scrollToJourneyId]?.scrollIntoView({
                behavior: 'instant',
                block: 'center'
            });
        }
    }, [scrollToJourneyId]);

    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[80vh] font-sans">


            {/* Main Journeys Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 mb-16">
                {/* Render Actual Implemented Journeys First (if any) */}
                {JOURNEYS.map((journey) => (
                    <button
                        key={journey.id}
                        ref={el => journeyRefs.current[journey.id] = el}
                        onClick={() => onSelectJourney(journey)}
                        className={`group relative overflow-hidden bg-slate-900 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-left border h-96 flex flex-col justify-end ${scrollToJourneyId === journey.id ? 'border-amber-400 ring-2 ring-amber-400/50' : 'border-slate-800'}`}
                        style={journey.thumbnailUrl ? {
                            backgroundImage: `url(${import.meta.env.BASE_URL}${journey.thumbnailUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        } : {}}
                    >
                        {/* Dark Gradient Overlay for Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

                        {/* Content */}
                        <div className="relative z-10">
                            <h3 className="text-3xl font-black mb-3 leading-tight group-hover:text-amber-300 transition-colors drop-shadow-lg">{journey.title}</h3>
                            <p className="text-slate-200 text-sm font-medium leading-relaxed drop-shadow-md line-clamp-3">{journey.description}</p>
                        </div>
                    </button>
                ))}

                {/* Explore Full Timeline Card - Dev Only */}
                {import.meta.env.DEV && (
                    <button
                        onClick={onExploreFullTimeline}
                        className="group relative overflow-hidden bg-slate-100 text-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 text-left border border-slate-200 border-dashed h-96 flex flex-col justify-end"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                                <Globe size={24} className="text-slate-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">Master Timeline</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">Explore the complete dataset with no narrative restrictions.</p>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-indigo-600">
                                Explore All <ArrowRight size={14} />
                            </div>
                        </div>
                    </button>
                )}

            </div>

            {/* Planned Journeys Section - Dev Only */}
            {import.meta.env.DEV && (
                <div className="w-full animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px bg-slate-200 flex-1" />
                        <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Planned Journeys</span>
                        <div className="h-px bg-slate-200 flex-1" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {PLANNED_JOURNEYS.map((item) => (
                            <div
                                key={item.title}
                                className="group relative bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-all text-left opacity-70 hover:opacity-100 hover:border-indigo-200 cursor-default"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-2 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors`}>
                                        <item.icon size={20} />
                                    </div>
                                </div>

                                <h4 className="text-lg font-bold mb-1 text-slate-800 group-hover:text-indigo-900 leading-tight">{item.title}</h4>
                                <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomeMenu;
