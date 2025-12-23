
import React, { useEffect, useState } from 'react';

interface CinematicBackgroundProps {
    imageUrl?: string;
    isActive: boolean;
}

const CinematicBackground: React.FC<CinematicBackgroundProps> = ({ imageUrl, isActive }) => {
    const [displayedImage, setDisplayedImage] = useState(imageUrl);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // New image is the same as current? Do nothing.
        if (imageUrl === displayedImage) return;

        // If no image provided, clear it immediately (or transition out?)
        // Currently we just set it to null so it disappears/fades if we want logic for that?
        // But if we want to crossfade to black?
        // For now, let's treat empty imageUrl as "transition to nothing"
        if (!imageUrl) {
            setDisplayedImage(undefined);
            return;
        }

        let active = true;
        setIsTransitioning(true);

        const img = new Image();
        img.src = imageUrl;

        // Use decode() to ensure image is ready to paint, avoiding blank flashes
        img.decode()
            .then(() => {
                if (active) {
                    setDisplayedImage(imageUrl);
                    setIsTransitioning(false);
                }
            })
            .catch((err) => {
                console.warn(`Failed to decode cinematic image: ${imageUrl}`, err);
                // Fix: Clear the stale image if the new one fails to load to prevent context mismatch
                if (active) {
                    setDisplayedImage(undefined);
                    setIsTransitioning(false);
                }
            });

        return () => {
            active = false;
        };
    }, [imageUrl, displayedImage]);

    // If not active, we fade out entirely
    const containerOpacity = isActive ? 'opacity-100' : 'opacity-0';

    return (
        <div
            className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 ease-in-out bg-black ${containerOpacity}`}
        >
            {/* Background Image Layer */}
            {displayedImage && (
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out transform scale-105"
                    style={{
                        backgroundImage: `url(${displayedImage})`,
                        filter: isTransitioning ? 'blur(4px) brightness(0.6)' : 'blur(0px) brightness(0.8)'
                    }}
                />
            )}

            {/* Cinematic Gradient Overlay (Vignette & Readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60 mix-blend-multiply" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/50" />
        </div>
    );
};

export default CinematicBackground;
