
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Timeline from './components/Timeline';
import JourneyTimeline from './components/JourneyTimeline';
import CinematicBackground from './components/CinematicBackground';
import CinematicHUD from './components/CinematicHUD';
import DeepDiveModal from './components/DeepDiveModal';
import MobileSwipeView from './components/MobileSwipeView';
import HomeMenu from './components/HomeMenu';
import BrandLogo from './components/BrandLogo';
import { TimelineEvent, TimelineHandle, Journey, Connection } from './types';
import { PHASES } from './constants';
import { JOURNEYS } from './data/journeys';
import { ALL_EVENTS } from './data/allEvents';
import { Orbit, ChevronLeft, ChevronRight, Play, Pause, RotateCcw, Clock, XCircle, Network, X } from 'lucide-react';

const App: React.FC = () => {
  const [events] = useState<TimelineEvent[]>(ALL_EVENTS.filter(Boolean));
  const [currentPhaseId, setCurrentPhaseId] = useState<string>('Phase 1');
  const [isMobile, setIsMobile] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const timelineRef = useRef<TimelineHandle>(null);

  // --- Journey Mode State ---
  const [activeJourney, setActiveJourney] = useState<Journey | null>(null);

  // --- Simulation State ---
  const [isSimulationActive, setIsSimulationActive] = useState(false);
  const [currentEventIndex, setCurrentEventIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);
  const simulationIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const playbackSpeed = 4000; // 4 seconds per event

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // --- Derived State for Simulation ---
  const simulationEvents = activeJourney
    ? events.filter(e => activeJourney.eventIds.includes(e.id))
    : events;

  const startSimulation = () => {
    setIsSimulationActive(true);
    setCurrentEventIndex(0);
    setIsPaused(false);
    // Do NOT clear activeJourney here; we want to simulate the current context
  };

  // --- Journey Navigation ---
  const [currentJourneyIndex, setCurrentJourneyIndex] = useState(0);

  useEffect(() => {
    // Reset journey index when journey changes
    if (activeJourney) {
      // If we switch journeys while simulation is active, stop it or reset? 
      // Better to stop simulation safety.
      if (isSimulationActive) stopSimulation();

      setCurrentJourneyIndex(0);
      // Auto-scroll to first event?
      setTimeout(() => {
        if (timelineRef.current && activeJourney.eventIds.length > 0) {
          timelineRef.current.scrollToEvent(activeJourney.eventIds[0]);
        }
      }, 500);
    }
  }, [activeJourney]);

  const handleJourneyNext = () => {
    if (!activeJourney) return;
    if (currentJourneyIndex < activeJourney.eventIds.length - 1) {
      const nextIndex = currentJourneyIndex + 1;
      setCurrentJourneyIndex(nextIndex);
      timelineRef.current?.scrollToEvent(activeJourney.eventIds[nextIndex]);
    }
  };

  const handleJourneyPrev = () => {
    if (!activeJourney) return;
    if (currentJourneyIndex > 0) {
      const prevIndex = currentJourneyIndex - 1;
      setCurrentJourneyIndex(prevIndex);
      timelineRef.current?.scrollToEvent(activeJourney.eventIds[prevIndex]);
    }
  };


  const stopSimulation = () => {
    if (simulationIntervalRef.current) clearInterval(simulationIntervalRef.current);
    setIsSimulationActive(false);
    setCurrentEventIndex(0);
  };

  const togglePause = () => setIsPaused(!isPaused);

  useEffect(() => {
    if (!isSimulationActive || isPaused) {
      if (simulationIntervalRef.current) clearInterval(simulationIntervalRef.current);
      return;
    }

    simulationIntervalRef.current = setInterval(() => {
      setCurrentEventIndex(prev => {
        // Use simulationEvents length
        if (prev >= simulationEvents.length - 1) {
          stopSimulation();
          return prev;
        }
        return prev + 1;
      });
    }, playbackSpeed);

    return () => {
      if (simulationIntervalRef.current) clearInterval(simulationIntervalRef.current);
    };
  }, [isSimulationActive, isPaused, simulationEvents.length]); // Depend on simulationEvents

  const currentPhaseConfig = PHASES.find(p => p.id === currentPhaseId) || PHASES[0];
  const activeEvent = simulationEvents[currentEventIndex]; // Use derived list

  // If in Journey Mode, use specific background or default?
  const containerClass = isSimulationActive
    ? 'bg-black text-white'
    : activeJourney
      ? 'bg-slate-900 text-slate-100' // Dark mode for Journey
      : `${currentPhaseConfig.bg} text-slate-900`;

  return (
    <div className={`min-h-screen flex flex-col font-sans overflow-hidden transition-colors duration-1000 ease-in-out ${containerClass}`}>

      {/* Cinematic Background Layer */}
      <CinematicBackground
        isActive={isSimulationActive}
        imageUrl={activeEvent?.imageUrl}
      />

      {/* Cinematic HUD Layer */}
      <CinematicHUD
        isActive={isSimulationActive}
        event={activeEvent}
        currentIndex={currentEventIndex}
        totalEvents={simulationEvents.length}
        onPause={togglePause}
        onStop={stopSimulation}
        isPaused={isPaused}
        duration={playbackSpeed}
      />

      {/* Deep Dive Modal (Placeholder) */}
      <DeepDiveModal isOpen={false} onClose={() => { }} event={activeEvent} />

      <header className={`relative z-10 px-6 py-4 flex justify-between items-center transition-opacity duration-500 ${isSimulationActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => { setActiveJourney(null); setShowHome(true); }}>
          <BrandLogo variant="small" />
        </div>

        <div className="flex items-center gap-4">

          {/* Back to Home Button (Only show if NOT home) */}
          {!showHome && (
            <button
              onClick={() => { setActiveJourney(null); setShowHome(true); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors ${activeJourney ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-200 text-slate-900 hover:bg-slate-300'}`}
            >
              <RotateCcw size={14} />
              Home
            </button>
          )}

          {activeJourney && (
            <div className="flex items-center gap-2 bg-slate-800/90 backdrop-blur-md px-1.5 py-1.5 rounded-full border border-slate-700 text-white animate-in slide-in-from-top-4 shadow-2xl">

              {/* Prev Button */}
              <button
                onClick={handleJourneyPrev}
                disabled={currentJourneyIndex === 0}
                className="p-2 rounded-full hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-slate-300 hover:text-white"
                title="Previous Event"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="px-3 flex flex-col items-center border-l border-r border-slate-700/50">
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest leading-none mb-0.5">Journey Active</span>
                <span className="text-sm font-bold leading-none">{activeJourney.title}</span>
              </div>

              {/* Next Button */}
              <button
                onClick={handleJourneyNext}
                disabled={currentJourneyIndex === activeJourney.eventIds.length - 1}
                className="p-2 rounded-full hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-slate-300 hover:text-white"
                title="Next Event"
              >
                <ChevronRight size={18} />
              </button>

              <button
                onClick={() => { setActiveJourney(null); setShowHome(true); }}
                className="ml-1 hover:bg-slate-700 p-2 rounded-full text-slate-400 hover:text-white transition-colors border-l border-slate-700/50"
                title="Exit Journey"
              >
                <X size={16} />
              </button>
            </div>
          )}

          {!showHome && (
            <button
              onClick={startSimulation}
              className="flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-full text-sm font-bold shadow-lg hover:bg-slate-800 transition-transform active:scale-95 ring-2 ring-slate-900 ring-offset-2"
            >
              <Play size={16} fill="currentColor" />
              <span className="hidden md:inline">Documentary Mode</span>
            </button>
          )}
        </div>
      </header>

      <main className={`flex-grow relative overflow-hidden flex flex-col justify-center pb-4 transition-all duration-700 ${isSimulationActive ? 'justify-end pb-12' : 'justify-center'}`}>
        {showHome ? (
          <HomeMenu
            onSelectJourney={(j) => {
              if (j) {
                setActiveJourney(j);
                setShowHome(false);
              }
            }}
            onExploreFullTimeline={() => {
              setActiveJourney(null);
              setShowHome(false);
            }}
          />
        ) : !isSimulationActive && (
          <div className="relative z-10 w-full h-full animate-in fade-in zoom-in-95 duration-500">
            {isMobile ? (
              <MobileSwipeView events={events} onPhaseChange={setCurrentPhaseId} />
            ) : activeJourney ? (
              <JourneyTimeline
                ref={timelineRef}
                events={events.filter(e => activeJourney.eventIds.includes(e.id))}
                activeJourney={activeJourney}
              />
            ) : (
              <Timeline
                ref={timelineRef}
                events={events} // Show all events in default mode
                onPhaseChange={setCurrentPhaseId}
                maxIndex={isSimulationActive ? currentEventIndex + 1 : undefined}
                activeJourney={null} // Default timeline is never a journey timeline now
              />
            )}
          </div>
        )}
      </main>

      <footer className={`relative z-10 text-center py-4 text-[10px] uppercase tracking-widest transition-opacity duration-1000 ${isSimulationActive ? 'opacity-0' : 'opacity-40 text-slate-900'}`}>
        <p>© 2024 Epoch Interactive • The Museum of Infinite Connections</p>
      </footer>
    </div>
  );
};

export default App;
