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

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            dot.style.left = `${mouseX - 4}px`;
            dot.style.top = `${mouseY - 4}px`;
        };

        const animateRing = () => {
            const speed = 0.15;
            ringX += (mouseX - ringX) * speed;
            ringY += (mouseY - ringY) * speed;

            ring.style.left = `${ringX - 16}px`;
            ring.style.top = `${ringY - 16}px`;

            requestAnimationFrame(animateRing);
        };

        const handleMouseDown = () => {
            ring.classList.add('click');
        };

        const handleMouseUp = () => {
            ring.classList.remove('click');
        };

        const handleMouseEnter = () => {
            ring.classList.add('hover');
        };

        const handleMouseLeave = () => {
            ring.classList.remove('hover');
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        const interactiveElements = document.querySelectorAll(
            'a, button, input, textarea, select, [role="button"], .cursor-pointer'
        );

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        animateRing();

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