import React from 'react';
import { TimelineEvent } from '../types';
import CachedImage from './CachedImage';
import { Play } from 'lucide-react';

interface MediaRendererProps {
    event: TimelineEvent;
    className?: string;
    autoPlay?: boolean;
}

const MediaRenderer: React.FC<MediaRendererProps> = ({ event, className = "", autoPlay = false }) => {
    // Legacy support: if no 'media' object, use imageUrl
    if (!event.media) {
        if (event.imageUrl) {
            return (
                <CachedImage
                    src={event.imageUrl}
                    alt={event.title}
                    className={className}
                />
            );
        }
        return <div className={`bg-slate-800 ${className}`} />;
    }

    const { type, url, thumbnailUrl, caption } = event.media;

    switch (type) {
        case 'image':
            return (
                <>
                    <CachedImage
                        src={url}
                        alt={caption || event.title}
                        className={className}
                    />
                    {caption && <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">{caption}</div>}
                </>
            );

        case 'video':
            return (
                <div className={`relative ${className} bg-black`}>
                    <video
                        src={url}
                        poster={thumbnailUrl}
                        className="w-full h-full object-cover"
                        controls
                        playsInline
                        autoPlay={autoPlay}
                        muted={autoPlay} // Autoplay usually requires mute
                        loop
                    />
                </div>
            );

        case 'youtube':
            // Simple embed for YouTube
            return (
                <div className={`relative ${className} bg-black`}>
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${url}?controls=0&rel=0`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            );

        case 'interactive':
        case 'model3d':
            return (
                <div className={`relative ${className} bg-slate-900 flex items-center justify-center`}>
                    <div className="text-center p-4">
                        <Play size={48} className="mx-auto text-blue-500 mb-2" />
                        <p className="text-white font-bold">Interactive Content</p>
                        <p className="text-slate-400 text-sm">Tap to Load Component</p>
                    </div>
                    {/* Thumbnail background if available */}
                    {thumbnailUrl && (
                        <div className="absolute inset-0 opacity-30 pointer-events-none">
                            <img src={thumbnailUrl} alt="" className="w-full h-full object-cover" />
                        </div>
                    )}
                </div>
            );

        default:
            return <div className={`bg-slate-800 ${className}`} />;
    }
};

export default MediaRenderer;
