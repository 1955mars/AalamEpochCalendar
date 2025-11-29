
import React from 'react';

interface TimelineProgressProps {
  current: number;
  total: number;
  startLabel: string;
  endLabel: string;
}

const TimelineProgress: React.FC<TimelineProgressProps> = ({ current, total, startLabel, endLabel }) => {
  // Ensure we don't divide by zero and clamp percentage between 0 and 100
  const percentage = total > 1 ? Math.min(100, Math.max(0, (current / (total - 1)) * 100)) : 0;

  return (
    <div className="w-full max-w-4xl mx-auto px-8 md:px-12 mt-4 mb-2 z-30 pointer-events-none">
      <div className="flex flex-col gap-2">
        {/* Progress Track */}
        <div className="relative w-full h-2 bg-slate-300/50 rounded-full overflow-hidden backdrop-blur-sm border border-slate-300/30 shadow-sm">
          {/* Fill Bar */}
          <div 
            className="absolute top-0 left-0 h-full bg-slate-800 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        {/* Labels Row */}
        <div className="flex justify-between items-center w-full px-1">
          <span className="text-xs md:text-sm font-bold text-slate-600 bg-white/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
            {startLabel}
          </span>
          <span className="text-xs md:text-sm font-bold text-slate-600 bg-white/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
            {endLabel}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimelineProgress;
