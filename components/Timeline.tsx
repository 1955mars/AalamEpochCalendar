import React, { useRef, useEffect, useMemo, useImperativeHandle, forwardRef, useState } from 'react';
import { TimelineEvent, TimelineHandle } from '../types';
import TimelineEventCardComponent from './TimelineEventCard';
import TimelineProgress from './TimelineProgress';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineProps {
  events: TimelineEvent[];
  onPhaseChange?: (phase: string) => void;
}

const Timeline = forwardRef<TimelineHandle, TimelineProps>(({ events, onPhaseChange }, ref) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  // Track which phases are expanded.
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(new Set());
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Refs to access latest state inside callbacks without closure staleness
  const visibleEventsRef = useRef<TimelineEvent[]>([]);

  // Helper function to parse diverse year formats including deep time for sorting
  const parseYear = (yearStr: string): number => {
    const lower = yearStr.toLowerCase().trim().replace(/,/g, '');
    let multiplier = 1;
    let isAgo = false;

    if (lower.includes('billion')) multiplier = 1000000000;
    else if (lower.includes('million')) multiplier = 1000000;
    else if (lower.includes('thousand')) multiplier = 1000;

    if (lower.includes('ago') || lower.includes('bc') || lower.includes('b.c.')) {
      isAgo = true;
    }

    const match = lower.match(/[\d.]+/);
    if (!match) return 0;

    let val = parseFloat(match[0]) * multiplier;
    if (isAgo) val = -val;

    return val;
  };

  const formatYearShort = (yearStr: string): string => {
    if (!yearStr) return '';
    return yearStr
      .replace(/Billion Years Ago/gi, 'BYA')
      .replace(/Million Years Ago/gi, 'MYA')
      .replace(/Thousand Years Ago/gi, 'KYA')
      .replace(/Years Ago/gi, 'YA');
  };

  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => {
      const valA = parseYear(a.year);
      const valB = parseYear(b.year);
      
      if (valA !== valB) return valA - valB;

      // If years are equal, prioritize markers
      if (a.type === 'phase_marker' && b.type !== 'phase_marker') return -1;
      if (a.type !== 'phase_marker' && b.type === 'phase_marker') return 1;

      return a.year.localeCompare(b.year);
    });
  }, [events]);

  const visibleEvents = useMemo(() => {
    const filtered = sortedEvents.filter(event => {
      if (event.type === 'phase_marker') return true;
      if (event.phase) return expandedPhases.has(event.phase);
      return true;
    });
    visibleEventsRef.current = filtered;
    return filtered;
  }, [sortedEvents, expandedPhases]);

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

  useImperativeHandle(ref, () => ({
    scrollToPhase: (phaseId: string) => {
      if (!scrollContainerRef.current) return;
      const index = visibleEvents.findIndex(e => e.phase === phaseId);
      if (index === -1) return;

      const container = scrollContainerRef.current;
      const cardElements = container.children;
      
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
    }
  }));

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth * 0.6; // Scroll 60% of viewport
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
    const cardElements = Array.from(container.children).slice(0, visibleEvents.length);
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

  // Calculate global index relative to the full sorted history, not just visible events
  const currentEvent = visibleEvents[currentIndex];
  const globalCurrentIndex = currentEvent 
    ? sortedEvents.findIndex(e => e.id === currentEvent.id) 
    : 0;

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center">
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-300 z-0"></div>

      <button 
        onClick={() => scroll('left')}
        className="absolute left-4 z-20 p-3 bg-white text-slate-700 rounded-full shadow-lg hover:bg-slate-100 transition-colors hidden md:flex border border-slate-200 cursor-pointer"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-4 z-20 p-3 bg-white text-slate-700 rounded-full shadow-lg hover:bg-slate-100 transition-colors hidden md:flex border border-slate-200 cursor-pointer"
      >
        <ChevronRight size={24} />
      </button>

      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="timeline-scroll no-scrollbar flex overflow-x-auto gap-0 px-[10vw] py-4 snap-x snap-mandatory relative z-10 w-full items-stretch h-[600px] md:h-[700px]"
      >
        {visibleEvents.length === 0 ? (
          <div className="w-full flex justify-center items-center text-slate-500">
            <p className="text-lg">No events data available.</p>
          </div>
        ) : (
          visibleEvents.map((event, index) => (
            <TimelineEventCardComponent 
              key={event.id} 
              event={event} 
              position={index % 2 === 0 ? 'top' : 'bottom'}
              onClick={() => event.type === 'phase_marker' && event.phase ? togglePhase(event.phase) : undefined}
              isExpanded={event.phase ? expandedPhases.has(event.phase) : false}
            />
          ))
        )}
        <div className="w-[10vw] flex-shrink-0"></div>
      </div>

      <TimelineProgress 
        current={globalCurrentIndex}
        total={sortedEvents.length}
        startLabel={sortedEvents.length > 0 ? formatYearShort(sortedEvents[0].year) : ''}
        endLabel={sortedEvents.length > 0 ? formatYearShort(sortedEvents[sortedEvents.length - 1].year) : ''}
      />
    </div>
  );
});

export default Timeline;