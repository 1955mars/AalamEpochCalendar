
import React, { useEffect, useState } from 'react';

interface CinematicBackgroundProps {
    imageUrl?: string;
    isActive: boolean;
}

const CinematicBackground: React.FC<CinematicBackgroundProps> = ({ imageUrl, isActive }) => {
    const [displayedImage, setDisplayedImage] = useState(imageUrl);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        if (imageUrl !== displayedImage) {
            setIsTransitioning(true);
            const timer = setTimeout(() => {
                setDisplayedImage(imageUrl);
                setIsTransitioning(false);
            }, 500); // Half of the transition duration for cross-fade feel
            return () => clearTimeout(timer);
        }
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
