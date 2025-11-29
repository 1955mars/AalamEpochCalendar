import React, { useState, useEffect } from 'react';
import { TimelineEvent } from '../types';
import { X, Save, RefreshCw } from 'lucide-react';

interface EventEditorProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (event: TimelineEvent) => void;
  initialData?: TimelineEvent | null;
}

const EventEditor: React.FC<EventEditorProps> = ({ isOpen, onClose, onSave, initialData }) => {
  const [formData, setFormData] = useState<Omit<TimelineEvent, 'id'>>({
    year: '',
    title: '',
    description: '',
    imageUrl: ''
  });

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        setFormData({
          year: initialData.year,
          title: initialData.title,
          description: initialData.description,
          imageUrl: initialData.imageUrl
        });
      } else {
        // Reset for new entry
        setFormData({
          year: '',
          title: '',
          description: '',
          imageUrl: `https://picsum.photos/seed/${Date.now()}/600/400`
        });
      }
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      id: initialData?.id || crypto.randomUUID(),
      ...formData
    });
    onClose();
  };

  const regenerateImage = () => {
    setFormData(prev => ({
      ...prev,
      imageUrl: `https://picsum.photos/seed/${Math.floor(Math.random() * 10000)}/600/400`
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-slate-800 border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-fade-in-up">
        
        <div className="flex justify-between items-center p-6 border-b border-slate-700 bg-slate-900/50">
          <h2 className="text-xl font-bold text-white">
            {initialData ? 'Edit Event' : 'New Event'}
          </h2>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Date/Year
              </label>
              <input 
                type="text"
                required
                value={formData.year}
                onChange={e => setFormData({...formData, year: e.target.value})}
                placeholder="e.g. 1995"
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-slate-600"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Title
              </label>
              <input 
                type="text"
                required
                value={formData.title}
                onChange={e => setFormData({...formData, title: e.target.value})}
                placeholder="Event Title"
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-slate-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
              Description
            </label>
            <textarea 
              required
              rows={3}
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
              placeholder="What happened?"
              className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-slate-600 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2 flex justify-between items-center">
              <span>Image URL</span>
              <button 
                type="button" 
                onClick={regenerateImage}
                className="text-blue-400 text-xs flex items-center hover:text-blue-300"
              >
                <RefreshCw size={12} className="mr-1" /> Randomize
              </button>
            </label>
            <div className="flex gap-4">
              <div className="flex-1">
                 <input 
                  type="url"
                  required
                  value={formData.imageUrl}
                  onChange={e => setFormData({...formData, imageUrl: e.target.value})}
                  className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-slate-600 text-sm"
                />
              </div>
              <div className="w-16 h-10 rounded overflow-hidden border border-slate-600 bg-slate-900">
                <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-end gap-3">
             <button 
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-slate-300 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 transition-all flex items-center"
            >
              <Save size={18} className="mr-2" />
              Save Event
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default EventEditor;