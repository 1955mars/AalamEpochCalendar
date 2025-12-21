
import React from 'react';
import { Search, ZoomIn, ZoomOut, Layers } from 'lucide-react';
import { useNavigation, FieldType } from '../contexts/NavigationContext';

const CommandBar: React.FC = () => {
    const { searchQuery, setSearchQuery, activeField, setActiveField, zoomLevel, setZoomLevel } = useNavigation();

    const fields: FieldType[] = ['All', 'Science', 'Art', 'Geopolitics'];

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-4 w-[90%] max-w-lg">

            {/* Search & Zoom Bar */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-2xl shadow-2xl w-full">

                {/* Search Input */}
                <div className="flex items-center gap-2 flex-1 px-2">
                    <Search size={18} className="text-white/60" />
                    <input
                        type="text"
                        placeholder="Search history..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-transparent border-none focus:outline-none text-white placeholder-white/40 text-sm w-full h-8"
                    />
                </div>

                {/* Separator */}
                <div className="w-px h-6 bg-white/10"></div>

                {/* Zoom Controls */}
                <div className="flex items-center gap-1">
                    <button
                        onClick={() => setZoomLevel(Math.max(0, zoomLevel - 0.25))}
                        className="p-1.5 hover:bg-white/10 rounded-lg text-white/80 transition-colors"
                    >
                        <ZoomOut size={16} />
                    </button>
                    <span className="text-xs text-white/60 min-w-[30px] text-center">
                        {Math.round(zoomLevel * 100)}%
                    </span>
                    <button
                        onClick={() => setZoomLevel(Math.min(1, zoomLevel + 0.25))}
                        className="p-1.5 hover:bg-white/10 rounded-lg text-white/80 transition-colors"
                    >
                        <ZoomIn size={16} />
                    </button>
                </div>
            </div>

            {/* Field Filter Bubbles (The "Lenses") */}
            <div className="flex items-center gap-2 overflow-x-auto max-w-full px-2 py-1 scrollbar-hide">
                {fields.map(field => (
                    <button
                        key={field}
                        onClick={() => setActiveField(field)}
                        className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 ${activeField === field
                                ? 'bg-blue-500 border-blue-400 text-white shadow-lg shadow-blue-500/20 scale-105'
                                : 'bg-black/40 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/30'
                            }`}
                    >
                        {field}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CommandBar;
