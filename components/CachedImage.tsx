
import React, { useState, useEffect, useRef } from 'react';
import { getImageFromDB, saveImageToDB } from '../utils/imageStorage';

interface CachedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
}

const CachedImage: React.FC<CachedImageProps> = ({ src, fallbackSrc, className, alt, ...props }) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Lazy Load: Only start process when element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // Start loading 200px before it enters viewport
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.disconnect();
    };
  }, []);

  // 2. Fetch/Cache Logic
  useEffect(() => {
    if (!isVisible || !src) return;

    let isMounted = true;
    let objectUrl: string | null = null;

    const loadImage = async () => {
      setIsLoading(true);

      try {
        // A. Try IndexedDB
        const cachedBlob = await getImageFromDB(src);

        if (cachedBlob) {
          objectUrl = URL.createObjectURL(cachedBlob);
          if (isMounted) {
            setImageSrc(objectUrl);
            setIsLoading(false);
          }
        } else {
          // B. Fetch from Network
          const response = await fetch(src);
          if (!response.ok) {
            throw new Error(`Failed to load: ${response.statusText}`);
          }

          const blob = await response.blob();

          // C. Save to Cache
          await saveImageToDB(src, blob);

          objectUrl = URL.createObjectURL(blob);
          if (isMounted) {
            setImageSrc(objectUrl);
            setIsLoading(false);
          }
        }
      } catch (error) {
        // Silent fallback on error to keep UI clean
        if (isMounted) {
          // Use fallback or a unique placeholder if fallback is missing
          const seed = encodeURIComponent(alt || 'error');
          setImageSrc(fallbackSrc || `https://picsum.photos/seed/${seed}/600/400`);
          setIsLoading(false);
        }
      }
    };

    loadImage();

    return () => {
      isMounted = false;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [src, isVisible, fallbackSrc]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden bg-slate-200 ${className}`}>
      {/* Placeholder / Skeleton while loading */}
      {isLoading && (
        <div className="absolute inset-0 bg-slate-300 animate-pulse z-10" />
      )}

      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
          {...props}
          onError={(e) => {
            // Final safety net - usage unique seed based on alt text to avoid duplicates
            const seed = encodeURIComponent(alt || 'error');
            (e.target as HTMLImageElement).src = fallbackSrc || `https://picsum.photos/seed/${seed}/600/400`;
          }}
        />
      )}
    </div>
  );
};

export default CachedImage;
