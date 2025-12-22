import React, { useRef, useImperativeHandle, forwardRef } from 'react';
import { TimelineEvent, TimelineHandle, Journey } from '../types';
import TimelineEventCardComponent from './TimelineEventCard';
import ConnectionLayer from './ConnectionLayer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface JourneyTimelineProps {
    events: TimelineEvent[];
    activeJourney: Journey | null;
}

const JourneyTimeline = forwardRef<TimelineHandle, JourneyTimelineProps>(({ events, activeJourney }, ref) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const eventRefs = useRef<Record<string, HTMLDivElement | null>>({});

    useImperativeHandle(ref, () => ({
        scrollToEvent: (eventId: string) => {
            // Find index in the provided (already filtered) events list
            const index = events.findIndex(e => e.id === eventId);
            if (index !== -1 && scrollContainerRef.current) {
                const container = scrollContainerRef.current;
                // Since it's a simple list, we can rely on child index matching event index if we render carefully.
                // Or better, look up the ref.
                const el = eventRefs.current[eventId];

                if (el) {
                    // Center the card
                    const offset = el.offsetLeft - (container.clientWidth / 2) + (el.offsetWidth / 2);
                    container.scrollTo({ left: offset, behavior: 'smooth' });
                }
            }
        },
        // We don't need scrollToPhase for this linear view
        scrollToPhase: () => { }
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

    return (
        <div className="w-full h-full flex flex-col justify-center items-center relative">
            <div className="relative w-full">
                {/* Central Axis Line - Removed for cleaner centered view */}


                {/* Scroll Buttons */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-slate-800 text-white rounded-full shadow-lg hover:bg-slate-700 transition-colors hidden md:flex border border-slate-600"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-slate-800 text-white rounded-full shadow-lg hover:bg-slate-700 transition-colors hidden md:flex border border-slate-600"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Scroll Container */}
                <div
                    ref={scrollContainerRef}
                    className="no-scrollbar flex overflow-x-auto gap-0 px-[20vw] py-4 snap-x snap-mandatory relative z-10 w-full items-stretch h-[600px] md:h-[700px]"
                >
                    {/* ConnectionLayer removed as per user request for cleaner view */}


                    {events.map((event, index) => (
                        <div
                            key={event.id}
                            ref={el => eventRefs.current[event.id] = el}
                            className="flex-shrink-0 snap-center px-12 md:px-24 flex items-center justify-center relative" // Added padding for equidistant spacing
                        >
                            <TimelineEventCardComponent
                                event={event}
                                position="center"
                                onClick={() => { }} // No phase collapsing action needed
                                isExpanded={true} // Always show full card
                                isGhost={false} // Always fully visible
                            />
                        </div>
                    ))}

                    <div className="w-[10vw] flex-shrink-0"></div>
                </div>
            </div>
        </div>
    );
});

export default JourneyTimeline;
