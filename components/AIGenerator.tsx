import React, { useState } from 'react';
import { Sparkles, Loader2, X } from 'lucide-react';
import { generateTimelineEvents } from '../services/geminiService';
import { TimelineEvent } from '../types';

interface AIGeneratorProps {
  isOpen: boolean;
  onClose: () => void;
  onEventsGenerated: (events: TimelineEvent[]) => void;
}

const AIGenerator: React.FC<AIGeneratorProps> = ({ isOpen, onClose, onEventsGenerated }) => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const generatedData = await generateTimelineEvents(topic);
      
      const newEvents: TimelineEvent[] = generatedData.map(data => ({
        id: crypto.randomUUID(),
        year: data.year,
        title: data.title,
        description: data.description,
        // Using imageKeyword to seed picsum for consistent but relevant-ish placeholder randomness
        imageUrl: `https://picsum.photos/seed/${data.imageKeyword || data.title.replace(/\s/g, '')}/600/400`
      }));

      onEventsGenerated(newEvents);
      setTopic(''); // Clear input on success
      onClose(); // Close modal on success
    } catch (err) {
      setError("Failed to generate timeline. Please check your API key or try a different topic.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl w-full max-w-md shadow-2xl p-6 relative overflow-hidden">
        
        {/* Decorative background elements */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
          disabled={loading}
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center mb-6">
          <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full shadow-lg mb-4">
             <Sparkles className="text-white" size={24} />
          </div>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
            AI Timeline Creator
          </h2>
          <p className="text-slate-400 text-center text-sm mt-2">
            Enter a topic, and we'll generate a historical timeline for you.
          </p>
        </div>

        <form onSubmit={handleGenerate} className="space-y-4">
          <div>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. History of the Internet, The Beatles, World War II"
              className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-xl px-4 py-3 focus:ring-2 focus:ring-purple-500 focus:outline-none placeholder-slate-500 transition-all"
              disabled={loading}
            />
          </div>

          {error && (
            <div className="p-3 bg-red-900/30 border border-red-800 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !topic.trim()}
            className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold rounded-xl shadow-lg shadow-purple-900/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex justify-center items-center"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                Generating...
              </>
            ) : (
              'Generate Timeline'
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIGenerator;