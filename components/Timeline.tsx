
import React, { useRef, useEffect, useMemo, useImperativeHandle, forwardRef } from 'react';
import { TimelineEvent, TimelineHandle } from '../types';
import TimelineEventCard from './TimelineEventCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineProps {
  events: TimelineEvent[];
  onPhaseChange?: (phase: string) => void;
}

const Timeline = forwardRef<TimelineHandle, TimelineProps>(({ events, onPhaseChange }, ref) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Helper function to parse diverse year formats including deep time for sorting
  const parseYear = (yearStr: string): number => {
    // Normalize string: lowercase, trim, and remove commas (fixes 10,000 parsing as 10)
    const lower = yearStr.toLowerCase().trim().replace(/,/g, '');
    let multiplier = 1;
    let isAgo = false;

    // Detect multipliers
    if (lower.includes('billion')) multiplier = 1000000000;
    else if (lower.includes('million')) multiplier = 1000000;
    else if (lower.includes('thousand')) multiplier = 1000;

    // Detect era/direction
    if (lower.includes('ago') || lower.includes('bc') || lower.includes('b.c.')) {
      isAgo = true;
    }

    // Extract the first valid number
    const match = lower.match(/[\d.]+/);
    if (!match) return 0; // Fallback for purely text dates like "Unknown"

    let val = parseFloat(match[0]) * multiplier;
    
    // Apply direction (Past is negative for sorting)
    if (isAgo) val = -val;

    return val;
  };

  // Sort events chronologically
  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => {
      const valA = parseYear(a.year);
      const valB = parseYear(b.year);
      
      if (valA !== valB) {
        return valA - valB;
      }

      // If years are equal, prioritize phase_marker to appear before event
      if (a.type === 'phase_marker' && b.type !== 'phase_marker') return -1;
      if (a.type !== 'phase_marker' && b.type === 'phase_marker') return 1;

      return a.year.localeCompare(b.year);
    });
  }, [events]);

  useImperativeHandle(ref, () => ({
    scrollToPhase: (phaseId: string) => {
      if (!scrollContainerRef.current) return;

      // Find the index of the first event in this phase
      const index = sortedEvents.findIndex(e => e.phase === phaseId);
      if (index === -1) return;

      const container = scrollContainerRef.current;
      const cardElements = container.children;
      
      if (cardElements[index]) {
        const targetElement = cardElements[index] as HTMLElement;
        const containerWidth = container.clientWidth;
        const cardWidth = targetElement.offsetWidth;
        const cardLeft = targetElement.offsetLeft;

        // Calculate position to center the card
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
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current || !onPhaseChange) return;

    const container = scrollContainerRef.current;
    const center = container.scrollLeft + container.clientWidth / 2;

    // Get all card elements (excluding the padding div at the end)
    const cardElements = Array.from(container.children).slice(0, sortedEvents.length);

    let closestIndex = -1;
    let minDistance = Number.MAX_VALUE;

    cardElements.forEach((child, index) => {
      const el = child as HTMLElement;
      // Calculate the center of the card relative to the container's total scrollable width
      // offsetLeft gives position relative to the nearest positioned ancestor (the container)
      const cardCenter = el.offsetLeft + el.offsetWidth / 2;
      const distance = Math.abs(center - cardCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== -1 && sortedEvents[closestIndex]) {
      const phase = sortedEvents[closestIndex].phase;
      if (phase) {
        onPhaseChange(phase);
      }
    }
  };

  // Initial check on mount
  useEffect(() => {
    handleScroll();
  }, [sortedEvents]);

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center">
      {/* Central horizontal line */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-300 z-0"></div>

      {/* Navigation Buttons */}
      <button 
        onClick={() => scroll('left')}
        className="absolute left-4 z-20 p-3 bg-white text-slate-700 rounded-full shadow-lg hover:bg-slate-100 transition-colors hidden md:flex border border-slate-200"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-4 z-20 p-3 bg-white text-slate-700 rounded-full shadow-lg hover:bg-slate-100 transition-colors hidden md:flex border border-slate-200"
      >
        <ChevronRight size={24} />
      </button>

      {/* Scrollable Container */}
      <div 
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="timeline-scroll flex overflow-x-auto gap-0 px-[10vw] py-4 snap-x snap-mandatory relative z-10 w-full items-stretch h-[600px] md:h-[700px]"
      >
        {sortedEvents.length === 0 ? (
          <div className="w-full flex justify-center items-center text-slate-500">
            <p className="text-lg">No events data available.</p>
          </div>
        ) : (
          sortedEvents.map((event, index) => (
            <TimelineEventCard 
              key={event.id} 
              event={event} 
              position={index % 2 === 0 ? 'top' : 'bottom'}
            />
          ))
        )}
        {/* Padding element for scrolling to the very end comfortably */}
        <div className="w-[10vw] flex-shrink-0"></div>
      </div>
    </div>
  );
});

export default Timeline;
