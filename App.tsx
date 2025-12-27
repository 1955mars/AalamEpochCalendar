
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Timeline from './components/Timeline';
import CinematicBackground from './components/CinematicBackground';
import CinematicHUD from './components/CinematicHUD';
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
  const [lastJourneyId, setLastJourneyId] = useState<string | null>(null);

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
  const simulationEvents = React.useMemo(() => {
    if (!activeJourney) return events;

    return activeJourney.eventIds
      .map(id => {
        const baseEvent = events.find(e => e.id === id);
        if (!baseEvent) return null;

        const override = activeJourney.overrides?.[id];
        if (override) {
          return {
            ...baseEvent,
            title: override.title || baseEvent.title,
            description: override.description || baseEvent.description,
          };
        }
        return baseEvent;
      })
      .filter((e): e is TimelineEvent => e !== null);
  }, [activeJourney, events]);

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
      // Reset journey index

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
    // Return to home when simulation ends (same as Exit button)
    if (activeJourney) {
      setLastJourneyId(activeJourney.id);
    }
    setIsSimulationActive(false);
    setCurrentEventIndex(0);
    setActiveJourney(null);
    setShowHome(true);
  };

  const handleExitSimulation = () => {
    stopSimulation();
  };

  const handleSimNext = () => {
    setCurrentEventIndex(prev => {
      if (prev >= simulationEvents.length - 1) {
        stopSimulation();
        return prev;
      }
      return prev + 1;
    });
    // Reset timer on manual navigation
    if (simulationIntervalRef.current) {
      clearInterval(simulationIntervalRef.current);
      if (!isPaused) {
        simulationIntervalRef.current = setInterval(() => {
          setCurrentEventIndex(prev => {
            if (prev >= simulationEvents.length - 1) {
              stopSimulation();
              return prev;
            }
            return prev + 1;
          });
        }, playbackSpeed);
      }
    }
  };

  const handleSimPrev = () => {
    setCurrentEventIndex(prev => {
      if (prev <= 0) return 0;
      return prev - 1;
    });
    // Reset timer on manual navigation
    if (simulationIntervalRef.current) {
      clearInterval(simulationIntervalRef.current);
      if (!isPaused) {
        simulationIntervalRef.current = setInterval(() => {
          setCurrentEventIndex(prev => {
            if (prev >= simulationEvents.length - 1) {
              stopSimulation();
              return prev;
            }
            return prev + 1;
          });
        }, playbackSpeed);
      }
    }
  };

  const handleSimSeek = (index: number) => {
    const targetIndex = Math.max(0, Math.min(index, simulationEvents.length - 1));
    setCurrentEventIndex(targetIndex);

    // Reset timer on manual navigation
    if (simulationIntervalRef.current) {
      clearInterval(simulationIntervalRef.current);
      if (!isPaused) {
        simulationIntervalRef.current = setInterval(() => {
          setCurrentEventIndex(prev => {
            if (prev >= simulationEvents.length - 1) {
              stopSimulation();
              return prev;
            }
            return prev + 1;
          });
        }, playbackSpeed);
      }
    }
  };

  const handleJumpToEvent = (eventId: string) => {
    const index = simulationEvents.findIndex(e => e.id === eventId);
    if (index !== -1) {
      handleSimSeek(index);
    }
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
    : showHome
      ? 'bg-slate-950 text-slate-100' // Dark mode for Homepage
      : activeJourney
        ? 'bg-slate-900 text-slate-100' // Dark mode for Journey
        : `${currentPhaseConfig.bg} text-slate-900`;

  /* Compute Connections for HUD */
  const activeConnections = React.useMemo(() => {
    if (!activeEvent || !activeJourney) return [];

    // Incoming: Connections where toEventId === activeEvent.id (This event is the RESULT)
    const incoming = activeJourney.connections
      .filter(c => c.toEventId === activeEvent.id)
      .map(c => {
        const target = ALL_EVENTS.find(e => e?.id === c.fromEventId);
        if (!target) return null;
        return { connection: c, targetEvent: target, direction: 'incoming' as const };
      })
      .filter((c): c is NonNullable<typeof c> => c !== null);

    // Outgoing: Connections where fromEventId === activeEvent.id (This event is the CAUSE)
    const outgoing = activeJourney.connections
      .filter(c => c.fromEventId === activeEvent.id)
      .map(c => {
        const target = ALL_EVENTS.find(e => e?.id === c.toEventId);
        if (!target) return null;
        return { connection: c, targetEvent: target, direction: 'outgoing' as const };
      })
      .filter((c): c is NonNullable<typeof c> => c !== null);

    return [...incoming, ...outgoing];
  }, [activeEvent, activeJourney]);

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
        journeyTitle={activeJourney?.title}
        onPause={togglePause}
        onNext={handleSimNext}
        onPrev={handleSimPrev}
        onSeek={handleSimSeek}
        isPaused={isPaused}
        duration={playbackSpeed}
        connections={activeConnections}
        tags={activeEvent?.semanticTags}
        onJumpToEvent={handleJumpToEvent}
        onExit={handleExitSimulation}
        onSpinoff={(journeyId, title) => {
          // Find the journey by ID and switch to it
          const journey = JOURNEYS.find(j => j.id === journeyId);
          if (journey) {
            setActiveJourney(journey);
            setCurrentEventIndex(0);
          } else {
            console.log('Spinoff requested:', title, '(journey not found)');
          }
        }}
      />

      <header className={`relative z-10 px-6 py-4 flex justify-between items-center transition-opacity duration-500 ${isSimulationActive ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => { if (activeJourney) setLastJourneyId(activeJourney.id); setActiveJourney(null); setShowHome(true); }}>
          <BrandLogo variant="small" />
        </div>

        <div className="flex items-center gap-4">

          {/* Back to Home Button (Only show if NOT home) */}
          {!showHome && (
            <button
              onClick={() => { if (activeJourney) setLastJourneyId(activeJourney.id); setActiveJourney(null); setShowHome(true); }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors ${activeJourney ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-slate-200 text-slate-900 hover:bg-slate-300'}`}
            >
              <RotateCcw size={14} />
              Home
            </button>
          )}



          {!showHome && (
            <button
              onClick={startSimulation}
              className="p-3 bg-amber-500 text-black rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)] hover:bg-amber-400 transition-all hover:scale-110 active:scale-95 flex items-center justify-center"
              title="Resume Documentary Mode"
            >
              <Play size={20} fill="currentColor" />
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
                setIsSimulationActive(true);
                setCurrentEventIndex(0);
                setIsPaused(true);
                setLastJourneyId(null); // Clear the highlight after selecting
              }
            }}
            onExploreFullTimeline={() => {
              setActiveJourney(null);
              setShowHome(false);
              setLastJourneyId(null);
            }}
            scrollToJourneyId={lastJourneyId}
          />
        ) : !isSimulationActive && (
          <div className="relative z-10 w-full h-full animate-in fade-in zoom-in-95 duration-500">
            {isMobile ? (
              <MobileSwipeView events={events} onPhaseChange={setCurrentPhaseId} />
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

      <footer className={`relative z-10 text-center py-4 text-[10px] uppercase tracking-widest transition-opacity duration-1000 ${isSimulationActive ? 'opacity-0' : showHome || activeJourney ? 'opacity-40 text-slate-400' : 'opacity-40 text-slate-900'}`}>
        <p>© 2024 Epoch Interactive • The Museum of Infinite Connections</p>
      </footer>
    </div>
  );
};

export default App;
