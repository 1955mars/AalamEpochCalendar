import React from 'react';
import { TimelineEvent } from '../types';
import { X, ExternalLink, Clock, Calendar } from 'lucide-react';

interface DeepDiveModalProps {
    event: TimelineEvent | null;
    isOpen: boolean;
    onClose: () => void;
}

const DeepDiveModal: React.FC<DeepDiveModalProps> = ({ event, isOpen, onClose }) => {
    if (!isOpen || !event) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
            {/* Backdrop with Blur */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md transition-all"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-slate-900/80 border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-300">

                {/* Header Image (Optional parallax or cover) */}
                <div className="h-48 w-full relative shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                    <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover opacity-80"
                    />

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-sm"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body Content */}
                <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar text-white">
                    <div className="flex items-center gap-3 text-blue-300 mb-2 text-sm font-medium tracking-wider uppercase">
                        <Calendar size={14} />
                        <span>{event.year}</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        {event.title}
                    </h2>

                    <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed">
                        <p>{event.description}</p>

                        {/* Placeholder for future extended content */}
                        <p className="mt-4 text-base text-slate-400">
                            This is a pivotal moment in history. The events of this era laid the groundwork for future developments in the trajectory of the cosmos and human civilization.
                        </p>
                    </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-white/5 bg-white/5 flex justify-end gap-3 shrink-0">
                    <button
                        onClick={onClose}
                        className="px-6 py-2.5 rounded-xl bg-white text-slate-900 font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2"
                    >
                        Resume Journey
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DeepDiveModal;
