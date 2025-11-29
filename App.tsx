import React, { useState, useRef } from 'react';
import Timeline from './components/Timeline';
import { TimelineEvent, TimelineHandle } from './types';
import { INITIAL_EVENTS } from './constants';
import { Globe, ChevronLeft, ChevronRight } from 'lucide-react';

const PHASES = [
  { id: 'Phase 1', title: 'Cosmic & Primordial Earth', bg: 'bg-slate-200' },
  { id: 'Phase 2', title: 'The Age of Ancient Life', bg: 'bg-orange-100' },
  { id: 'Phase 3', title: 'Hominid Evolution', bg: 'bg-emerald-100' },
  { id: 'Phase 4', title: 'The Neolithic Revolution', bg: 'bg-amber-100' },
  { id: 'Phase 5', title: 'The Bronze Age', bg: 'bg-yellow-100' },
  { id: 'Phase 6', title: 'The Iron Age & Classical Age', bg: 'bg-rose-100' },
  { id: 'Phase 7', title: 'The Post-Classical World', bg: 'bg-purple-100' },
  { id: 'Phase 8', title: 'The Age of Exploration', bg: 'bg-blue-100' },
  { id: 'Phase 9', title: 'The Age of Revolutions', bg: 'bg-indigo-100' },
  { id: 'Phase 10', title: 'The Early 20th Century', bg: 'bg-teal-100' },
  { id: 'Phase 11', title: 'The Cold War Era', bg: 'bg-cyan-100' },
  { id: 'Phase 12', title: 'The Modern Digital Age', bg: 'bg-fuchsia-100' },
];

const App: React.FC = () => {
  const [events] = useState<TimelineEvent[]>(INITIAL_EVENTS);
  const [currentPhaseId, setCurrentPhaseId] = useState<string>('Phase 1');
  const timelineRef = useRef<TimelineHandle>(null);

  const currentPhaseIndex = PHASES.findIndex(p => p.id === currentPhaseId);
  const prevPhase = currentPhaseIndex > 0 ? PHASES[currentPhaseIndex - 1] : null;
  const nextPhase = currentPhaseIndex < PHASES.length - 1 ? PHASES[currentPhaseIndex + 1] : null;

  const currentPhaseConfig = PHASES[currentPhaseIndex] || PHASES[0];

  const handlePhaseNav = (phaseId: string) => {
    timelineRef.current?.scrollToPhase(phaseId);
  };

  return (
    <div className={`min-h-screen text-slate-900 flex flex-col font-sans overflow-hidden transition-colors duration-1000 ease-in-out ${currentPhaseConfig.bg}`}>
      
      {/* Header / Navbar */}
      <header className="flex-none h-20 px-4 md:px-12 flex items-center justify-between border-b border-black/5 bg-white/60 backdrop-blur-md z-40 shadow-sm transition-all">
        
        {/* Logo Area */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-900 rounded-lg shadow-md hidden sm:block">
            <Globe className="text-white" size={24} />
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
            Aalam
          </h1>
        </div>

        {/* Phase Navigation Area */}
        <div className="flex items-center gap-2 md:gap-4">
          
          {/* Previous Phase Button */}
          {prevPhase ? (
            <button 
              onClick={() => handlePhaseNav(prevPhase.id)}
              className="flex items-center text-xs md:text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors px-2 py-1 rounded-lg hover:bg-black/5"
              title={`Go to ${prevPhase.title}`}
            >
              <ChevronLeft size={16} className="mr-1" />
              <span className="hidden md:inline truncate max-w-[100px] lg:max-w-[150px]">{prevPhase.title}</span>
              <span className="md:hidden">Prev</span>
            </button>
          ) : (
            <div className="w-8 md:w-24"></div> // Spacer to keep layout stable
          )}

          {/* Current Phase Badge */}
          <div className="text-xs md:text-sm font-semibold text-slate-800 px-4 py-1.5 bg-white/80 rounded-full border border-black/10 shadow-sm text-center min-w-[120px]">
            {currentPhaseConfig.title}
          </div>

          {/* Next Phase Button */}
          {nextPhase ? (
            <button 
              onClick={() => handlePhaseNav(nextPhase.id)}
              className="flex items-center text-xs md:text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors px-2 py-1 rounded-lg hover:bg-black/5"
              title={`Go to ${nextPhase.title}`}
            >
              <span className="hidden md:inline truncate max-w-[100px] lg:max-w-[150px]">{nextPhase.title}</span>
              <span className="md:hidden">Next</span>
              <ChevronRight size={16} className="ml-1" />
            </button>
          ) : (
             <div className="w-8 md:w-24"></div> // Spacer
          )}
        </div>

      </header>

      {/* Main Content Area */}
      <main className="flex-grow relative overflow-hidden flex flex-col justify-center">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
             style={{
               backgroundImage: 'radial-gradient(circle at 50% 50%, #000000 1px, transparent 1px)',
               backgroundSize: '32px 32px',
               opacity: 0.05
             }}>
        </div>

        {/* Timeline Component */}
        <div className="relative z-10 w-full h-full">
           <Timeline 
              ref={timelineRef}
              events={events} 
              onPhaseChange={setCurrentPhaseId} 
           />
        </div>
      </main>

      {/* Footer */}
      <footer className="flex-none h-12 border-t border-black/5 flex items-center justify-center text-slate-400 text-sm bg-white/40 relative z-30">
        <p>© {new Date().getFullYear()} Aalam.</p>
      </footer>
    </div>
  );
};

export default App;