'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className='relative min-h-screen overflow-hidden bg-background dark:bg-background'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        {/* Dynamic gradient overlay */}
        <div
          className='absolute inset-0 opacity-20 dark:opacity-30 transition-all duration-1000'
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, var(--primary) 0%, transparent 50%)`,
          }}
        />

        {/* Floating orbs */}
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl animate-float-slow' />
        <div className='absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 dark:bg-secondary/20 rounded-full blur-3xl animate-float-delayed' />
        <div className='absolute top-1/2 left-1/2 w-64 h-64 bg-muted/20 dark:bg-muted/10 rounded-full blur-2xl animate-float' />

        {/* Grid pattern */}
        <div className='absolute inset-0 opacity-[0.03] dark:opacity-[0.05]'>
          <div
            className='absolute inset-0'
            style={{
              backgroundImage: `
                            linear-gradient(var(--border) 1px, transparent 1px),
                            linear-gradient(90deg, var(--border) 1px, transparent 1px)
                        `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      {/* Main content container */}
      <div className='relative z-10 min-h-screen flex items-center'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full'>
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
            {/* Left side - Content */}
            <div
              className={`space-y-8 transition-all duration-1200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            >
              {/* Badge */}
              <div className='inline-flex items-center px-4 py-2 rounded-full bg-muted dark:bg-muted border border-border'>
                <div className='w-2 h-2 bg-primary rounded-full mr-3 animate-pulse' />
                <span className='text-sm font-medium text-primary'>Transform & Elevate</span>
              </div>

              {/* Main heading */}
              <div className='space-y-4'>
                <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none'>
                  <span className='block text-foreground'>Change &</span>
                  <span className='block text-primary'>Perform.</span>
                </h1>
              </div>

              {/* Description */}
              <p
                className={`text-xl md:text-2xl text-secondary leading-relaxed max-w-2xl transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                Crafting extraordinary digital experiences that push boundaries and redefine what's
                possible in modern design.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-1200 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <Link
                  href='/portfolio'
                  className='group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary rounded-2xl hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/25 transform hover:-translate-y-1'
                >
                  <span className='relative z-10'>Explore Work</span>
                  <div className='absolute inset-0 bg-secondary rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300' />
                  <svg
                    className='ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17 8l4 4m0 0l-4 4m4-4H3'
                    />
                  </svg>
                </Link>

                <Link
                  href='/contact'
                  className='group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-foreground bg-muted/80 backdrop-blur-sm border border-border rounded-2xl hover:bg-muted transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'
                >
                  Start Project
                  <svg
                    className='ml-2 w-5 h-5 transform group-hover:rotate-45 transition-transform duration-300'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 6v6m0 0v6m0-6h6m-6 0H6'
                    />
                  </svg>
                </Link>
              </div>

              {/* Stats */}
              <div
                className={`flex items-center space-x-8 pt-8 transition-all duration-1200 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <div className='text-center'>
                  <div className='text-3xl font-bold text-foreground'>150+</div>
                  <div className='text-sm text-secondary'>Projects</div>
                </div>
                <div className='w-px h-12 bg-border' />
                <div className='text-center'>
                  <div className='text-3xl font-bold text-foreground'>98%</div>
                  <div className='text-sm text-secondary'>Satisfaction</div>
                </div>
                <div className='w-px h-12 bg-border' />
                <div className='text-center'>
                  <div className='text-3xl font-bold text-foreground'>5+</div>
                  <div className='text-sm text-secondary'>Years</div>
                </div>
              </div>
            </div>

            {/* Right side - Visual */}
            <div
              className={`relative transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            >
              <div className='relative'>
                {/* Main visual container */}
                <div className='relative aspect-square max-w-lg mx-auto'>
                  {/* Background shapes */}
                  <div className='absolute inset-0 bg-muted/30 dark:bg-muted/30 rounded-3xl transform rotate-6 scale-105' />
                  <div className='absolute inset-0 bg-secondary/20 dark:bg-secondary/20 rounded-3xl transform -rotate-3 scale-95' />

                  {/* Main content area */}
                  <div className='relative bg-background/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-border'>
                    {/* Floating elements */}
                    <div className='space-y-6'>
                      {/* Design tools representation */}
                      <div className='flex items-center space-x-4'>
                        <div className='w-12 h-12 bg-primary rounded-xl flex items-center justify-center'>
                          <svg
                            className='w-6 h-6 text-white'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
                            />
                          </svg>
                        </div>
                        <div>
                          <div className='h-3 bg-muted rounded-full w-24 mb-2' />
                          <div className='h-2 bg-muted rounded-full w-16' />
                        </div>
                      </div>

                      {/* Progress bars */}
                      <div className='space-y-3'>
                        <div>
                          <div className='flex justify-between text-xs text-secondary mb-1'>
                            <span>Design</span>
                            <span>95%</span>
                          </div>
                          <div className='h-2 bg-muted rounded-full overflow-hidden'>
                            <div className='h-full bg-primary rounded-full animate-progress-95' />
                          </div>
                        </div>
                        <div>
                          <div className='flex justify-between text-xs text-secondary mb-1'>
                            <span>Development</span>
                            <span>88%</span>
                          </div>
                          <div className='h-2 bg-muted rounded-full overflow-hidden'>
                            <div className='h-full bg-secondary rounded-full animate-progress-88' />
                          </div>
                        </div>
                      </div>

                      {/* Color palette */}
                      <div className='flex space-x-2'>
                        <div
                          className='w-8 h-8 rounded-lg shadow-lg'
                          style={{ backgroundColor: '#BFAD99' }}
                        />
                        <div
                          className='w-8 h-8 rounded-lg shadow-lg'
                          style={{ backgroundColor: '#F0E5D4' }}
                        />
                        <div
                          className='w-8 h-8 rounded-lg shadow-lg'
                          style={{ backgroundColor: '#D5CBC1' }}
                        />
                        <div
                          className='w-8 h-8 rounded-lg shadow-lg'
                          style={{ backgroundColor: '#FFF9F1' }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Floating notification */}
                  <div className='absolute -top-4 -right-4 bg-background rounded-2xl p-4 shadow-xl border border-border animate-float'>
                    <div className='flex items-center space-x-3'>
                      <div className='w-3 h-3 bg-primary rounded-full animate-pulse' />
                      <span className='text-sm font-medium text-foreground'>Live Project</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1200 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className='flex flex-col items-center text-secondary'>
          <span className='text-xs font-medium mb-3 tracking-wider uppercase'>Scroll</span>
          <div className='w-6 h-10 border-2 border-border rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-secondary rounded-full mt-2 animate-bounce' />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-2deg);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(1deg);
          }
        }
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes progress-95 {
          0% {
            width: 0%;
          }
          100% {
            width: 95%;
          }
        }
        @keyframes progress-88 {
          0% {
            width: 0%;
          }
          100% {
            width: 88%;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-progress-95 {
          animation: progress-95 2s ease-out 1s forwards;
          width: 0%;
        }
        .animate-progress-88 {
          animation: progress-88 2s ease-out 1.2s forwards;
          width: 0%;
        }
      `}</style>
    </section>
  );
}
