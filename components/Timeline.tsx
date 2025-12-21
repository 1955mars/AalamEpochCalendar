import React, { useRef, useEffect, useMemo, useImperativeHandle, forwardRef, useState } from 'react';
import { TimelineEvent, TimelineHandle, Journey } from '../types';
import TimelineEventCardComponent from './TimelineEventCard';
import TimelineProgress from './TimelineProgress';
import ConnectionLayer from './ConnectionLayer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PHASES } from '../constants';

import { getPhaseId, formatYearShort } from '../utils/timelineUtils';

interface TimelineProps {
  events: TimelineEvent[];
  onPhaseChange?: (phase: string) => void;
  maxIndex?: number; // Added for simulation
  activeJourney?: Journey | null;
}

const Timeline = forwardRef<TimelineHandle, TimelineProps>(({ events, onPhaseChange, maxIndex, activeJourney }, ref) => {
  // Hooks must be unconditional
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const eventRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(new Set(['Phase 1']));
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!events) return null;
  if (!PHASES || !Array.isArray(PHASES)) return null;

  // Helper to find phase for an event - now using utility
  const getEventPhase = (event: TimelineEvent) => getPhaseId(event, PHASES);

  // 1. Calculate the FULL sorted list of events
  const allSortedEvents = useMemo(() => {
    if (!events) return [];
    try {
      const sorted = [...events].sort((a, b) => {
        if (a.yearNumeric !== b.yearNumeric) return a.yearNumeric - b.yearNumeric;
        if (a.type === 'phase_marker' && b.type !== 'phase_marker') return -1;
        if (a.type !== 'phase_marker' && b.type === 'phase_marker') return 1;
        return 0;
      });
      return sorted;
    } catch (e) {
      console.error('Error sorting events', e);
      return [];
    }
  }, [events]);

  // 2. Determine which events are technically available to render
  const renderEvents = useMemo(() => {
    if (typeof maxIndex === 'number') {
      return allSortedEvents.slice(0, maxIndex);
    }
    return allSortedEvents;
  }, [allSortedEvents, maxIndex]);

  // 3. Filter renderable events based on user interaction (collapsed phases)
  const visibleEvents = useMemo(() => {
    try {
      const filtered = renderEvents.filter(event => {
        if (event.type === 'phase_marker') return true;
        const phaseId = getEventPhase(event);
        if (phaseId) return expandedPhases.has(phaseId);
        return true;
      });
      return filtered;
    } catch (e) {
      console.error('Error filtering visible events', e);
      return [];
    }
  }, [renderEvents, expandedPhases]);

  console.log('Timeline Render: About to return JSX');


  const togglePhase = (phaseId: string) => {
    setExpandedPhases(prev => {
      const next = new Set(prev);
      if (next.has(phaseId)) {
        next.delete(phaseId);
      } else {
        next.add(phaseId);
      }
      return next;
    });
  };


  // Auto-Expand phases for Active Journey and Reset on Exit
  useEffect(() => {
    // Always reset scroll to start when mode changes
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }

    if (activeJourney) {
      const journeyEvents = events.filter(e => activeJourney.eventIds.includes(e.id));
      const requiredPhases = new Set<string>();
      journeyEvents.forEach(e => {
        if (e.phase) requiredPhases.add(e.phase);
      });

      setExpandedPhases(prev => {
        const next = new Set(prev);
        requiredPhases.forEach(p => next.add(p));
        return next;
      });
    } else {
      // Reset to default state (Phase 1 open only)
      setExpandedPhases(new Set(['Phase 1']));
    }
  }, [activeJourney, events]);


  // Auto-Scroll and Auto-Expand when new events arrive (Simulation Only)
  useEffect(() => {
    if (typeof maxIndex === 'number' && maxIndex > 0 && scrollContainerRef.current) {
      // Don't auto-scroll if we are showing the full timeline (initial load or exit changes)
      // We want auto-scroll only during the progressive reveal of the simulation.
      if (maxIndex === allSortedEvents.length) return;

      // 1. Auto Expand current phase
      const latestEvent = renderEvents[renderEvents.length - 1];
      if (latestEvent && latestEvent.phase && !expandedPhases.has(latestEvent.phase)) {
        setExpandedPhases(prev => {
          const next = new Set(prev);
          next.add(latestEvent.phase!);
          return next;
        });
      }

      // 2. Auto Scroll to end
      const container = scrollContainerRef.current;
      requestAnimationFrame(() => {
        container.scrollTo({
          left: container.scrollWidth,
          behavior: 'smooth'
        });
      });
    }
  }, [maxIndex, renderEvents, allSortedEvents.length]);

  useImperativeHandle(ref, () => ({
    scrollToPhase: (phaseId: string) => {
      if (!scrollContainerRef.current) return;

      // Expand phase if collapsed
      if (!expandedPhases.has(phaseId)) {
        setExpandedPhases(prev => new Set(prev).add(phaseId));
        setTimeout(() => {
          const index = visibleEvents.findIndex(e => e.phase === phaseId);
          if (index !== -1 && scrollContainerRef.current) {
            const el = scrollContainerRef.current.children[index] as HTMLElement;
            if (el) {
              const offset = el.offsetLeft - (scrollContainerRef.current.clientWidth / 2) + (el.offsetWidth / 2);
              scrollContainerRef.current.scrollTo({ left: offset, behavior: 'smooth' });
            }
          }
        }, 100);
        return;
      }

      const index = visibleEvents.findIndex(e => e.phase === phaseId);
      if (index === -1) return;

      const container = scrollContainerRef.current;
      // Note: children includes ConnectionLayer now? No, ConnectionLayer is sibling or absolute overlay.
      // We must be careful about children index if we mix elements.
      // The map assumes children directly map to events.
      // We will put ConnectionLayer properly so it doesn't mess up index.
      const cardElements = container.querySelectorAll('.timeline-card-wrapper');

      if (cardElements[index]) {
        const targetElement = cardElements[index] as HTMLElement;
        const containerWidth = container.clientWidth;
        const cardWidth = targetElement.offsetWidth;
        const cardLeft = targetElement.offsetLeft;
        const scrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);

        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    },
    scrollToEvent: (eventId: string) => {
      if (!scrollContainerRef.current) return;

      // Find if the event is visible
      const index = visibleEvents.findIndex(e => e.id === eventId);

      if (index !== -1) {
        // Event is visible, scroll to it
        const container = scrollContainerRef.current;
        const cardElements = container.querySelectorAll('.timeline-card-wrapper');
        if (cardElements[index]) {
          const targetElement = cardElements[index] as HTMLElement;
          const containerWidth = container.clientWidth;
          const cardWidth = targetElement.offsetWidth;
          const cardLeft = targetElement.offsetLeft;
          const scrollLeft = cardLeft - (containerWidth / 2) + (cardWidth / 2);

          container.scrollTo({
            left: scrollLeft,
            behavior: 'smooth'
          });
        }
      } else {
        // Event might be in a collapsed phase. 
        // We need to find the event in ALL events, enable its phase, then scroll.
        // For now, let's assume Journey Mode keeps relevant phases expanded or handle basic case.
        // If strictly following Journey Mode logic from App.tsx/Timeline.tsx, phases should be open.
        // If user manually collapsed, we should re-open.
        const targetEvent = events.find(e => e.id === eventId);
        if (targetEvent && targetEvent.phase) {
          if (!expandedPhases.has(targetEvent.phase)) {
            setExpandedPhases(prev => new Set(prev).add(targetEvent.phase!));
            // Use timeout to allow render, then scroll
            setTimeout(() => {
              // Recalculate index after expand
              // Note: visibleEvents will update on next render, so we can't get new index here easily without refs or effects.
              // But since we are inside a closure, visibleEvents is stale? No, it's from closure.
              // Actually, simpler is to just rely on the fact that if it wasn't visible, we open phase.
              // Ideally we re-call scrollToEvent after render. 
              // For simplicity in this iteration: Just expand. User might need to click again or we use a slight delay ref approach.
              // Let's try to just expand and finding the element via DOM id if we attached IDs? 
              // We are using eventRefs! We can use that.

              const el = eventRefs.current[eventId];
              if (el && scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                const offset = el.offsetLeft - (container.clientWidth / 2) + (el.offsetWidth / 2);
                container.scrollTo({ left: offset, behavior: 'smooth' });
              }
            }, 150);
          }
        }
      }
    }
  }));

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.6;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;

    // --- Center Detection Logic ---
    const center = container.scrollLeft + container.clientWidth / 2;
    const cardElements = Array.from(container.querySelectorAll('.timeline-card-wrapper'));
    let closestIndex = -1;
    let minDistance = Number.MAX_VALUE;

    cardElements.forEach((child, index) => {
      const el = child as HTMLElement;
      const cardCenter = el.offsetLeft + el.offsetWidth / 2;
      const distance = Math.abs(center - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== -1) {
      setCurrentIndex(closestIndex);

      if (visibleEvents[closestIndex]) {
        const phase = visibleEvents[closestIndex].phase;
        if (phase && onPhaseChange) {
          onPhaseChange(phase);
        }
      }
    }
  };

  // Calculate global index relative to the FULL history
  const currentVisibleEvent = visibleEvents[currentIndex];
  const globalCurrentIndex = currentVisibleEvent
    ? allSortedEvents.findIndex(e => e.id === currentVisibleEvent.id)
    : 0;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">

      <div className="relative w-full">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-300 z-0"></div>

        <button
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white text-slate-700 rounded-full shadow-lg hover:bg-slate-100 transition-colors hidden md:flex border border-slate-200 cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-white text-slate-700 rounded-full shadow-lg hover:bg-slate-100 transition-colors hidden md:flex border border-slate-200 cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>

        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="timeline-scroll no-scrollbar flex overflow-x-auto gap-0 px-[10vw] py-4 snap-x snap-mandatory relative z-10 w-full items-stretch h-[600px] md:h-[700px]"
        >
          {/* ConnectionLayer must be inside scroll container to scroll with content */}
          <ConnectionLayer
            journey={activeJourney || null}
            eventRefs={eventRefs}
            containerRef={scrollContainerRef}
            visibleEventIds={visibleEvents.map(e => e.id)}
          />

          {visibleEvents.length === 0 ? (
            <div className="w-full flex flex-col justify-center items-center text-slate-400 gap-2 animate-pulse">
              <p className="text-xl font-light tracking-widest uppercase">History Awaits</p>
              <p className="text-xs text-slate-500">Initializing Timeline...</p>
            </div>
          ) : (
            visibleEvents.map((event, index) => (
              <div
                key={event.id}
                ref={el => eventRefs.current[event.id] = el}
                className="timeline-card-wrapper h-full flex-shrink-0 snap-center"
              >
                <TimelineEventCardComponent
                  event={event}
                  position={index % 2 === 0 ? 'top' : 'bottom'}
                  onClick={() => event.type === 'phase_marker' && event.phase ? togglePhase(event.phase) : undefined}
                  isExpanded={event.phase ? expandedPhases.has(event.phase) : false}
                  isGhost={activeJourney ? !activeJourney.eventIds.includes(event.id) : false}
                />
              </div>
            ))
          )}
          <div className="w-[10vw] flex-shrink-0"></div>

        </div>
      </div>

      <TimelineProgress
        current={globalCurrentIndex}
        total={allSortedEvents.length}
        startLabel={allSortedEvents.length > 0 ? formatYearShort(allSortedEvents[0].year) : ''}
        endLabel={allSortedEvents.length > 0 ? formatYearShort(allSortedEvents[allSortedEvents.length - 1].year) : ''}
      />
    </div>
  );
});

export default Timeline;
