"use client";

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;

        if (!dot || !ring) return;

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Update dot position immediately
            dot.style.left = `${mouseX - 4}px`;
            dot.style.top = `${mouseY - 4}px`;
        };

        // Smooth ring animation
        const animateRing = () => {
            const speed = 0.15;
            ringX += (mouseX - ringX) * speed;
            ringY += (mouseY - ringY) * speed;

            ring.style.left = `${ringX - 16}px`;
            ring.style.top = `${ringY - 16}px`;

            requestAnimationFrame(animateRing);
        };

        // Mouse down handler
        const handleMouseDown = () => {
            ring.classList.add('click');
        };

        // Mouse up handler
        const handleMouseUp = () => {
            ring.classList.remove('click');
        };

        // Mouse enter handler for interactive elements
        const handleMouseEnter = () => {
            ring.classList.add('hover');
        };

        // Mouse leave handler for interactive elements
        const handleMouseLeave = () => {
            ring.classList.remove('hover');
        };

        // Add event listeners
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        // Add hover effects to interactive elements
        const interactiveElements = document.querySelectorAll(
            'a, button, input, textarea, select, [role="button"], .cursor-pointer'
        );

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // Start ring animation
        animateRing();

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);

            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    // Don't render on mobile devices
    useEffect(() => {
        const isMobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
        if (isMobile) {
            return;
        }
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
        </>
    );
} 