'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          router.push('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [router]);

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className={`absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse`}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${2 + Math.random() * 2}s`,
      }}
    />
  ));

  if (!mounted) return null;

  return (
    <div className='min-h-screen bg-background flex items-center justify-center relative overflow-hidden'>
      <div className='absolute inset-0 overflow-hidden'>
        {floatingElements}
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse'></div>
        <div
          className='absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse'
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      <div className='relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto'>
        <div className='relative mb-8'>
          <h1 className='text-8xl sm:text-9xl lg:text-[12rem] font-bold text-primary animate-pulse'>
            404
          </h1>
          <div className='absolute inset-0 text-8xl sm:text-9xl lg:text-[12rem] font-bold text-primary/5 blur-sm'>
            404
          </div>
        </div>

        <div className='space-y-6 mb-12'>
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground'>
            Oops! Page Not Found
          </h2>

          <p className='text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed'>
            The page you&apos;re looking for seems to have wandered off into the digital void.
            Don&apos;t worry, even the best explorers sometimes take a wrong turn!
          </p>

          <div className='flex justify-center my-8'>
            <div className='relative'>
              <div className='w-24 h-24 bg-primary rounded-full flex items-center justify-center animate-bounce'>
                <svg
                  className='w-12 h-12 text-white'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
              </div>
              <div className='absolute -inset-2 bg-primary rounded-full opacity-20 animate-ping'></div>
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-8'>
          <Link
            href='/'
            className='group px-8 py-4 bg-primary text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden hover:bg-secondary'
          >
            <span className='relative z-10 flex items-center space-x-2'>
              <svg
                className='w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
                />
              </svg>
              <span>Go Home</span>
            </span>
            <div className='absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          </Link>

          <button
            onClick={() => router.back()}
            className='group px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300'
          >
            <span className='flex items-center space-x-2'>
              <svg
                className='w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M10 19l-7-7m0 0l7-7m-7 7h18'
                />
              </svg>
              <span>Go Back</span>
            </span>
          </button>
        </div>

        <div className='bg-background/50 backdrop-blur-lg rounded-2xl p-6 border border-border/20 shadow-xl'>
          <h3 className='text-lg font-semibold text-foreground mb-4'>
            Or explore these popular pages:
          </h3>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-3'>
            {[
              { href: '/about', label: 'About', icon: '👋' },
              { href: '/services', label: 'Services', icon: '⚡' },
              { href: '/portfolio', label: 'Portfolio', icon: '🎨' },
              { href: '/contact', label: 'Contact', icon: '📧' },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className='group p-3 rounded-xl bg-background/50 hover:bg-primary/10 border border-border/20 hover:border-primary/30 transition-all duration-300 transform hover:scale-105'
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className='text-center'>
                  <div className='text-2xl mb-2 group-hover:scale-110 transition-transform duration-300'>
                    {item.icon}
                  </div>
                  <div className='text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors duration-300'>
                    {item.label}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className='mt-8 text-sm text-foreground/50'>
          <p>
            Automatically redirecting to home in{' '}
            <span className='font-mono text-primary font-semibold'>{countdown}</span> seconds
          </p>
        </div>
      </div>
    </div>
  );
}
