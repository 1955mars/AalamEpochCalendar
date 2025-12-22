import React from 'react';
import { Play, Globe, Zap, Cpu, Palette, Dna, ArrowRight, Component } from 'lucide-react';
import { JOURNEYS } from '../data/journeys';
import { Journey } from '../types';
import BrandLogo from './BrandLogo';

interface HomeMenuProps {
    onSelectJourney: (journey: Journey | null) => void;
    onExploreFullTimeline: () => void;
}

const PLANNED_JOURNEYS = [
    {
        title: 'The Food on Your Plate',
        description: 'From the Neolithic Revolution to GMOs: The history of what we eat.',
        icon: Dna,
        color: 'bg-green-500',
        status: 'Vote to Build'
    },
    {
        title: 'The Roots of Democracy',
        description: 'From Athens to the Algorithm: How we choose who leads us.',
        icon: Globe,
        color: 'bg-blue-500',
        status: 'Vote to Build'
    }
];

const HomeMenu: React.FC<HomeMenuProps> = ({ onSelectJourney, onExploreFullTimeline }) => {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-12 flex flex-col items-center justify-center min-h-[80vh] font-sans">


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                {/* Render Actual Implemented Journeys First (if any) */}
                {JOURNEYS.map((journey) => (
                    <button
                        key={journey.id}
                        onClick={() => onSelectJourney(journey)}
                        className="group relative overflow-hidden bg-slate-900 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 text-left border border-slate-800 h-96 flex flex-col justify-end"
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
                            <div className="absolute top-[-260px] right-0 w-14 h-14 bg-amber-400 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 active:scale-95 transition-all opacity-100 hover:bg-amber-300 transform translate-y-0 text-black">
                                <Play fill="currentColor" size={24} className="ml-1" />
                            </div>

                            <h3 className="text-3xl font-black mb-3 leading-tight group-hover:text-amber-300 transition-colors drop-shadow-lg">{journey.title}</h3>
                            <p className="text-slate-200 text-sm font-medium leading-relaxed drop-shadow-md line-clamp-3">{journey.description}</p>
                        </div>
                    </button>
                ))}

                {/* Render Planned Journeys */}
                {PLANNED_JOURNEYS.map((item) => (
                    <div
                        key={item.title}
                        className="group relative bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all text-left opacity-60 hover:opacity-100 cursor-not-allowed"
                    >
                        <div className="absolute top-4 right-4 px-2 py-1 bg-slate-100 rounded text-[10px] font-bold uppercase text-slate-500 tracking-wider">
                            {item.status}
                        </div>
                        <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mb-6 shadow-md text-white opacity-80 group-hover:opacity-100 transition-opacity`}>
                            <item.icon size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-slate-800">{item.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                ))}

                {/* Explore Full Timeline Card */}
                <button
                    onClick={onExploreFullTimeline}
                    className="group relative overflow-hidden bg-slate-100 text-slate-900 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 text-left border border-slate-200 border-dashed"
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

            </div>
        </div>
    );
};

export default HomeMenu;
