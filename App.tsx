
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Timeline from './components/Timeline';
import CinematicBackground from './components/CinematicBackground';
import CinematicHUD from './components/CinematicHUD';
import DeepDiveModal from './components/DeepDiveModal';
import MobileSwipeView from './components/MobileSwipeView';
import { TimelineEvent, TimelineHandle } from './types';
import { INITIAL_EVENTS, PHASES } from './constants';
import { Orbit, ChevronLeft, ChevronRight, Play, Pause, RotateCcw, Clock, XCircle } from 'lucide-react';



const DURATION_OPTIONS = [
  { label: '1 Min', value: 60 * 1000 },
  { label: '5 Mins', value: 5 * 60 * 1000 },
  { label: '15 Mins', value: 15 * 60 * 1000 },
  { label: '30 Mins', value: 30 * 60 * 1000 },
  { label: '1 Hr', value: 60 * 60 * 1000 },
  { label: '366 Days', value: 366 * 24 * 60 * 60 * 1000 },
];

const App: React.FC = () => {
  const [events] = useState<TimelineEvent[]>(INITIAL_EVENTS);
  const [currentPhaseId, setCurrentPhaseId] = useState<string>('Phase 1');
  const [isMobile, setIsMobile] = useState(false);
  const timelineRef = useRef<TimelineHandle>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Simulation State
  const [isSimulationActive, setIsSimulationActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  }, [isPlaying, isModalOpen, simDuration]);

  const handleSimLayerClick = () => {
    if (isSimulationActive && !isModalOpen) {
      setIsPlaying(false);
      setIsModalOpen(true);
    }
  };

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

  // Get current active event for background
  const activeEvent = isSimulationActive && events[currentEventIndex - 1]
    ? events[currentEventIndex - 1]
    : events[events.length - 1];

  return (
    <div className={`min-h-screen flex flex-col font-sans overflow-hidden transition-colors duration-1000 ease-in-out ${isSimulationActive ? 'bg-black text-white' : `${currentPhaseConfig.bg} text-slate-900`}`}>

      {/* Cinematic Background Layer */}
      <CinematicBackground
        imageUrl={activeEvent?.imageUrl}
        isActive={isSimulationActive}
      />

      {/* Cinematic HUD Overlay */}
      {isSimulationActive && (
        <CinematicHUD
          event={activeEvent}
          progress={simProgress}
        />
      )}

      {/* Deep Dive Modal */}
      <DeepDiveModal
        event={activeEvent}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          // Optional: Resume on close? Or let user click play manually.
          // Let's resume to keep flow smooth.
          setIsPlaying(true);
        }}
      />

      {/* Click Layer for Deep Dive (Only active in sim mode) */}
      {isSimulationActive && !isModalOpen && (
        <div
          className="fixed inset-0 z-20 cursor-pointer"
          onClick={handleSimLayerClick}
          title="Click to Deep Dive"
        />
      )}

      {/* Header / Navbar */}
      <header className={`flex-none h-20 px-4 md:px-8 flex items-center justify-between border-b z-40 shadow-sm transition-all gap-4 ${isSimulationActive ? 'border-white/10 bg-transparent' : 'border-black/5 bg-white/60 backdrop-blur-md'}`}>

        {/* Left: Logo & Clock Controls */}
        <div className="flex items-center gap-4 flex-1">
          <div className={`flex items-center gap-2 md:gap-3 flex-shrink-0 transition-opacity duration-500 ${isSimulationActive ? 'opacity-50 hover:opacity-100' : 'opacity-100'}`}>
            <div className={`p-2 rounded-lg shadow-md hidden sm:block ${isSimulationActive ? 'bg-white/10' : 'bg-slate-900'}`}>
              <Orbit className={isSimulationActive ? 'text-white' : 'text-white'} size={24} />
            </div>
            <h1 className={`text-xl md:text-2xl font-bold tracking-tight hidden lg:block ${isSimulationActive ? 'text-white' : 'text-slate-900'}`}>
              Aalam
            </h1>
          </div>

          {!isSimulationActive && <div className="h-8 w-px bg-slate-300 hidden md:block mx-2"></div>}

          {/* Clock Controls */}
          <div className={`flex items-center gap-2 p-1.5 rounded-xl border pointer-events-auto ${isSimulationActive ? 'bg-black/50 border-white/10 backdrop-blur-md' : 'bg-slate-100/50 border-slate-200/50'}`}>
            <div className="flex items-center gap-1">
              <select
                className={`text-xs md:text-sm rounded-lg px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer ${isSimulationActive ? 'bg-white/10 border-white/20 text-white' : 'bg-white border-slate-200 text-slate-700'}`}
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
                    className="p-1.5 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
                    title="Reset Clock"
                  >
                    <RotateCcw size={18} />
                  </button>
                  <button
                    onClick={exitSimulation}
                    className="p-1.5 bg-red-500/20 hover:bg-red-500/40 text-red-200 rounded-lg transition-colors"
                    title="Exit Simulation"
                  >
                    <XCircle size={18} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right: Phase Navigation (Hidden in Sim Mode to reduce clutter, and on Mobile to prevent overflow) */}
        {!isSimulationActive && !isMobile && (
          <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
            {prevPhase ? (
              <button
                onClick={() => handlePhaseNav(prevPhase.id)}
                className="flex items-center text-xs md:text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors px-2 py-1 rounded-lg hover:bg-black/5"
                title={`Go to ${prevPhase.title}`}
              >
                <ChevronLeft size={16} className="mr-1" />
                <span className="hidden xl:inline truncate max-w-[100px]">{prevPhase.title}</span>
              </button>
            ) : <div className="w-4"></div>}

            <div className="text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full border shadow-sm text-center min-w-[100px] md:min-w-[180px] truncate bg-white/80 text-slate-800 border-black/10">
              {currentPhaseConfig.title}
            </div>

            {nextPhase ? (
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
        )}

      </header>

      {/* Main Content Area */}
      <main className={`flex-grow relative overflow-hidden flex flex-col justify-center pb-4 transition-all duration-700 ${isSimulationActive ? 'justify-end pb-12' : 'justify-center'}`}>

        {/* Subtle Background Pattern (Only in non-sim mode) */}
        {!isSimulationActive && (
          <div className="absolute inset-0 z-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle at 50% 50%, #000000 1px, transparent 1px)',
              backgroundSize: '32px 32px',
              opacity: 0.05
            }}>
          </div>
        )}

        {/* Timeline Component - HIDDEN during simulation */}
        {!isSimulationActive && (
          <div className="relative z-10 w-full h-full animate-in fade-in zoom-in-95 duration-500">
            {isMobile ? (
              <MobileSwipeView events={events} onPhaseChange={setCurrentPhaseId} />
            ) : (
              <Timeline
                ref={timelineRef}
                events={events}
                onPhaseChange={setCurrentPhaseId}
                maxIndex={currentEventIndex}
              />
            )}
          </div>
        )}
      </main>

      {/* Footer (Hidden in Simulation) */}
      {!isSimulationActive && (
        <footer className="flex-none h-20 border-t border-black/5 flex items-center justify-center text-slate-400 text-sm bg-white/40 relative z-30">
          <p>© {new Date().getFullYear()} Aalam.</p>
        </footer>
      )}
    </div>
  );
};

export default App;
