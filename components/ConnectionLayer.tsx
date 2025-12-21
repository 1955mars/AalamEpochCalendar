
import React, { useMemo, useState, useEffect } from 'react';
import { Journey, Connection } from '../types';

interface ConnectionLayerProps {
    journey: Journey | null;
    eventRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
    containerRef: React.RefObject<HTMLDivElement>;
    visibleEventIds: string[]; // To know when to update
}

const ConnectionLayer: React.FC<ConnectionLayerProps> = ({ journey, eventRefs, containerRef, visibleEventIds }) => {
    const [paths, setPaths] = useState<{ id: string; d: string; color: string }[]>([]);

    useEffect(() => {
        if (!journey || !containerRef.current) {
            setPaths([]);
            return;
        }

        const updatePaths = () => {
            const container = containerRef.current;
            if (!container) return;

            const newPaths: { id: string; d: string; color: string }[] = [];
            const containerRect = container.getBoundingClientRect();
            const scrollLeft = container.scrollLeft;

            // Calculate SVG relative coordinates using scrollLeft
            // Since the SVG is inside the scrolling container, the coordinates should be absolute to the container content?
            // No, if the SVG is width=100% of the container content.
            // Actually, if the SVG is absolute positioned inside the scroll container, it stretches to scrollWidth.

            journey.connections.forEach(conn => {
                const fromEl = eventRefs.current[conn.fromEventId];
                const toEl = eventRefs.current[conn.toEventId];

                if (fromEl && toEl) {
                    // Get relative positions to the container
                    // offsetLeft is relative to the offsetParent (which should be the scroll container or a wrapper)
                    const x1 = fromEl.offsetLeft + (fromEl.offsetWidth / 2);
                    const x2 = toEl.offsetLeft + (toEl.offsetWidth / 2);

                    // Determine Y position. 
                    // The CardComponent render logic has logic:
                    // isTop ? 'bottom-1/2 pb-12' : 'top-1/2 pt-12'
                    // This implies the element Ref we have (the wrapper div) spans half height? 
                    // No, TimelineEventCard's outer div is h-full. 
                    // Let's assume the "dot" is roughly near the center (50% of height).
                    // To be more precise, we can check the element's actual position relative to container?
                    // Since the container is h-[600px] or [700px], and items are centered flex row...

                    // Let's just use 50% height (center spine) for now as the anchor, 
                    // OR try to connect to the card itself.
                    // Connecting to the card is nicer.
                    // Top cards are above center, Bottom cards are below.
                    // We can try to guess based on standard offsets.

                    // However, we don't know "isTop" easily here unless we parse index or look at classnames.
                    // BUT, we can use `getBoundingClientRect` relative to the container.

                    const fromRect = fromEl.getBoundingClientRect();
                    const toRect = toEl.getBoundingClientRect();

                    // Relative to container viewport (not content):
                    // But we want content coordinates.
                    // x = Rect.left - ContainerRect.left + scrollLeft.
                    // y = Rect.top - ContainerRect.top + scrollTop.

                    const y1 = fromRect.top - containerRect.top + (fromRect.height / 2);
                    const y2 = toRect.top - containerRect.top + (toRect.height / 2);

                    // Adjust for the specific "dot" location if possible.
                    // The cards have a dot at center +/- some pixels.
                    // Let's just aim for center of the card area for now.

                    // Control Points for Bezier Curve
                    const controlY = containerRect.height / 2; // Pull towards center?

                    // If items are far apart, curve through the spine?
                    // Let's try a simple sigmoid-like curve.

                    const dist = Math.abs(x2 - x1);
                    const cp1x = x1 + dist * 0.5;
                    const cp1y = y1;
                    const cp2x = x2 - dist * 0.5;
                    const cp2y = y2;

                    // Simple Cubic Bezier
                    const d = `M ${x1} ${y1} C ${cp1x} ${y1}, ${cp2x} ${y2}, ${x2} ${y2}`;

                    newPaths.push({
                        id: conn.id,
                        d,
                        color: 'stroke-amber-400' // Gold
                    });
                }
            });

            setPaths(newPaths);
        };

        // Run initially and on resize/scroll? 
        // Scroll doesn't change relative positions of content-to-content, usually.
        // Use ResizeObserver mainly.
        // Also run when visibleEventIds changes (as elements mount/unmount)

        updatePaths();

        const observer = new ResizeObserver(updatePaths);
        if (containerRef.current) observer.observe(containerRef.current);

        return () => observer.disconnect();

    }, [journey, visibleEventIds]); // Re-run when visible events change (mounting)

    if (!journey) return null;

    return (
        <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 overflow-visible"
        >
            <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#fbbf24" />
                </marker>
            </defs>
            {paths.map(path => (
                <g key={path.id}>
                    <path
                        d={path.d}
                        fill="none"
                        className={`${path.color} opacity-60`}
                        strokeWidth="4"
                        filter="url(#glow)"
                    />
                    <path
                        d={path.d}
                        fill="none"
                        className="stroke-amber-100"
                        strokeWidth="2"
                        markerEnd="url(#arrowhead)"
                    />
                </g>

            ))}
        </svg>
    );
};

export default ConnectionLayer;
