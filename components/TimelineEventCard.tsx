
import React from 'react';
import { TimelineEvent } from '../types';

interface TimelineEventCardProps {
  event: TimelineEvent;
  position: 'top' | 'bottom';
}

const TimelineEventCard: React.FC<TimelineEventCardProps> = ({ event, position }) => {
  const isTop = position === 'top';
  const isPhaseMarker = event.type === 'phase_marker';

  // Render Phase Marker (Big Title with Image)
  if (isPhaseMarker) {
    return (
      <div className="w-[85vw] md:w-[60vw] h-full flex-shrink-0 flex items-center justify-center snap-center pointer-events-none px-4 md:px-8">
        <div className="relative w-full h-[65%] md:h-[75%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 bg-slate-900 transform transition-transform duration-700 hover:scale-[1.01]">
           {/* Background Image */}
           <img 
              src={event.imageUrl} 
              alt={event.title}
              className="w-full h-full object-cover opacity-80"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/phase_fallback/1600/900';
              }}
           />
           
           {/* Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 mix-blend-multiply"></div>
           
           {/* Content */}
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
             <div className="bg-white/10 backdrop-blur-md px-4 py-1 rounded-full mb-6 border border-white/20">
               <span className="text-white text-xs md:text-sm font-bold tracking-widest uppercase">{event.year}</span>
             </div>
             <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight mb-2 drop-shadow-2xl">
               {event.title}
             </h2>
             <div className="w-32 h-2 bg-white/50 mx-auto rounded-full mt-4"></div>
           </div>
        </div>
      </div>
    );
  }

  // Render Standard Event Card
  return (
    <div className={`relative w-80 md:w-96 flex-shrink-0 flex flex-col items-center h-full justify-center snap-center pointer-events-none`}>
      
      {/* Wrapper to position card relative to the center line */}
      <div className={`absolute w-full flex flex-col items-center px-4 ${isTop ? 'bottom-1/2 pb-12' : 'top-1/2 pt-12'}`}>
        
        {/* Connector Line */}
        <div className={`absolute left-1/2 w-0.5 bg-slate-300 ${isTop ? 'bottom-0 h-12' : 'top-0 h-12'}`}></div>
        
        {/* Connector Dot on the center line */}
        <div className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-400 z-10 ${isTop ? 'bottom-[-6px]' : 'top-[-6px]'}`}></div>
        
        {/* Connector Dot attached to card */}
        <div className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-300 ${isTop ? 'bottom-12' : 'top-12'}`}></div>

        {/* Card */}
        <div className="pointer-events-auto bg-white border border-slate-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:scale-[1.02] w-full">
          
          {/* Image Section */}
          <div className="h-40 overflow-hidden relative">
            <img 
              src={event.imageUrl} 
              alt={event.title}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                // Fallback image if source fails
                (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/fallback/600/400';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-3 left-4">
               <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs font-bold rounded border border-white/20">
                  {event.year}
               </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-5 text-left">
            <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">{event.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineEventCard;
