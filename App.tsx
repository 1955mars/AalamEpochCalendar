
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Timeline from './components/Timeline';
import { TimelineEvent, TimelineHandle } from './types';
import { INITIAL_EVENTS } from './constants';
import { Orbit, ChevronLeft, ChevronRight, Play, Pause, RotateCcw, Clock, XCircle } from 'lucide-react';

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

const DURATION_OPTIONS = [
  { label: '1 Min', value: 60 * 1000 },
  { label: '5 Mins', value: 5 * 60 * 1000 },
  { label: '30 Mins', value: 30 * 60 * 1000 },
  { label: '1 Hr', value: 60 * 60 * 1000 },
  { label: '366 Days', value: 366 * 24 * 60 * 60 * 1000 },
];

const App: React.FC = () => {
  const [events] = useState<TimelineEvent[]>(INITIAL_EVENTS);
  const [currentPhaseId, setCurrentPhaseId] = useState<string>('Phase 1');
  const timelineRef = useRef<TimelineHandle>(null);

  // Simulation State
  const [isSimulationActive, setIsSimulationActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [simDuration, setSimDuration] = useState(60000); // Default 1 min
  const [simProgress, setSimProgress] = useState(0);
  const [currentEventIndex, setCurrentEventIndex] = useState(events.length);
  const lastFrameTime = useRef<number>(0);

  const currentPhaseIndex = PHASES.findIndex(p => p.id === currentPhaseId);
  const prevPhase = currentPhaseIndex > 0 ? PHASES[currentPhaseIndex - 1] : null;
  const nextPhase = currentPhaseIndex < PHASES.length - 1 ? PHASES[currentPhaseIndex + 1] : null;

  const currentPhaseConfig = PHASES[currentPhaseIndex] || PHASES[0];

  const handlePhaseNav = (phaseId: string) => {
    timelineRef.current?.scrollToPhase(phaseId);
  };

  // Simulation Logic
  const startSimulation = () => {
    setIsSimulationActive(true);
    setIsPlaying(true);
    if (simProgress >= 1) {
      setSimProgress(0);
      setCurrentEventIndex(0);
    } else if (simProgress === 0) {
      setCurrentEventIndex(0);
    }
  };

  const pauseSimulation = () => {
    setIsPlaying(false);
  };

  const resetSimulation = () => {
    setSimProgress(0);
    setCurrentEventIndex(0);
    setIsPlaying(false);
  };

  const exitSimulation = () => {
    setIsSimulationActive(false);
    setIsPlaying(false);
    setSimProgress(0);
    setCurrentEventIndex(events.length);
  };

  const updateSimulation = useCallback((timestamp: number) => {
    if (!lastFrameTime.current) lastFrameTime.current = timestamp;
    const deltaTime = timestamp - lastFrameTime.current;
    lastFrameTime.current = timestamp;

    if (isPlaying) {
      setSimProgress(prev => {
        const newProgress = prev + (deltaTime / simDuration);
        if (newProgress >= 1) {
          setIsPlaying(false);
          return 1;
        }
        return newProgress;
      });
    }
  }, [isPlaying, simDuration]);

  useEffect(() => {
    let animationFrameId: number;

    const loop = (timestamp: number) => {
      updateSimulation(timestamp);
      animationFrameId = requestAnimationFrame(loop);
    };

    if (isPlaying) {
      lastFrameTime.current = performance.now();
      animationFrameId = requestAnimationFrame(loop);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying, updateSimulation]);

  // Sync progress to event index
  useEffect(() => {
    if (isSimulationActive) {
      const totalEvents = events.length;
      // Calculate which event corresponds to current progress
      // We start at 0. If progress is 0, show 0 events (or 1st marker).
      // If progress is 1, show all events.
      const index = Math.floor(simProgress * totalEvents);
      // Ensure at least 1 event is shown if started, max is total length
      const clampedIndex = Math.max(1, Math.min(totalEvents, index + 1));
      
      setCurrentEventIndex(clampedIndex);
    } else {
      setCurrentEventIndex(events.length);
    }
  }, [simProgress, isSimulationActive, events.length]);

  // Get current simulation year label
  const currentSimYear = isSimulationActive && events[currentEventIndex - 1] 
    ? events[currentEventIndex - 1].year 
    : events[events.length - 1].year;

  return (
    <div className={`min-h-screen text-slate-900 flex flex-col font-sans overflow-hidden transition-colors duration-1000 ease-in-out ${currentPhaseConfig.bg}`}>
      
      {/* Header / Navbar */}
      <header className="flex-none h-20 px-4 md:px-8 flex items-center justify-between border-b border-black/5 bg-white/60 backdrop-blur-md z-40 shadow-sm transition-all gap-4">
        
        {/* Left: Logo & Clock Controls */}
        <div className="flex items-center gap-4 flex-1">
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <div className="p-2 bg-slate-900 rounded-lg shadow-md hidden sm:block">
              <Orbit className="text-white" size={24} />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight hidden lg:block">
              Aalam
            </h1>
          </div>

          <div className="h-8 w-px bg-slate-300 hidden md:block mx-2"></div>

          {/* Clock Controls */}
          <div className="flex items-center gap-2 bg-slate-100/50 p-1.5 rounded-xl border border-slate-200/50">
            <div className="flex items-center gap-1">
              <select 
                className="bg-white border border-slate-200 text-xs md:text-sm rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700 cursor-pointer"
                value={simDuration}
                onChange={(e) => {
                  setSimDuration(Number(e.target.value));
                  resetSimulation();
                }}
                disabled={isSimulationActive && isPlaying}
              >
                {DURATION_OPTIONS.map(opt => (
                  <option key={opt.label} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-1">
              {!isSimulationActive ? (
                <button 
                  onClick={startSimulation}
                  className="p-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors flex items-center gap-1 px-3"
                  title="Start Simulation"
                >
                  <Play size={16} fill="currentColor" />
                  <span className="text-xs font-semibold">Start</span>
                </button>
              ) : (
                <>
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`p-1.5 rounded-lg transition-colors text-white ${isPlaying ? 'bg-amber-500 hover:bg-amber-400' : 'bg-green-600 hover:bg-green-500'}`}
                    title={isPlaying ? "Pause" : "Resume"}
                  >
                    {isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
                  </button>
                  <button 
                    onClick={resetSimulation}
                    className="p-1.5 bg-slate-200 hover:bg-slate-300 text-slate-600 rounded-lg transition-colors"
                    title="Reset Clock"
                  >
                    <RotateCcw size={18} />
                  </button>
                  <button 
                    onClick={exitSimulation}
                    className="p-1.5 bg-red-100 hover:bg-red-200 text-red-600 rounded-lg transition-colors"
                    title="Exit Simulation"
                  >
                    <XCircle size={18} />
                  </button>
                </>
              )}
            </div>
          </div>
          
          {/* Simulation Current Time Display */}
          {isSimulationActive && (
             <div className="hidden md:flex flex-col leading-tight ml-2">
               <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Current Time</span>
               <span className="text-sm md:text-base font-bold text-blue-700 tabular-nums truncate max-w-[140px]">
                 {currentSimYear}
               </span>
             </div>
          )}
        </div>

        {/* Right: Phase Navigation */}
        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          
          {/* Previous Phase Button */}
          {prevPhase && !isSimulationActive ? (
            <button 
              onClick={() => handlePhaseNav(prevPhase.id)}
              className="flex items-center text-xs md:text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors px-2 py-1 rounded-lg hover:bg-black/5"
              title={`Go to ${prevPhase.title}`}
            >
              <ChevronLeft size={16} className="mr-1" />
              <span className="hidden xl:inline truncate max-w-[100px]">{prevPhase.title}</span>
            </button>
          ) : <div className="w-4"></div>}

          {/* Current Phase Badge */}
          <div className="text-xs md:text-sm font-semibold text-slate-800 px-3 py-1.5 bg-white/80 rounded-full border border-black/10 shadow-sm text-center min-w-[100px] md:min-w-[180px] truncate">
            {currentPhaseConfig.title}
          </div>

          {/* Next Phase Button */}
          {nextPhase && !isSimulationActive ? (
            <button 
              onClick={() => handlePhaseNav(nextPhase.id)}
              className="flex items-center text-xs md:text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors px-2 py-1 rounded-lg hover:bg-black/5"
              title={`Go to ${nextPhase.title}`}
            >
              <span className="hidden xl:inline truncate max-w-[100px]">{nextPhase.title}</span>
              <ChevronRight size={16} className="ml-1" />
            </button>
          ) : <div className="w-4"></div>}
        </div>

      </header>

      {/* Main Content Area */}
      <main className="flex-grow relative overflow-hidden flex flex-col justify-center pb-4">
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
              maxIndex={currentEventIndex}
           />
        </div>
      </main>

      {/* Footer */}
      <footer className="flex-none h-20 border-t border-black/5 flex items-center justify-center text-slate-400 text-sm bg-white/40 relative z-30">
        <p>© {new Date().getFullYear()} Aalam.</p>
      </footer>
    </div>
  );
};

export default App;
