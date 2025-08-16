'use client';

import Link from 'next/link';

import CalendlyCTA from '@/components/CalendlyCTA';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <Hero />

      <section className='py-20 bg-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl md:text-5xl font-serif mb-4 text-foreground'>What We Do</h2>
          <p className='text-xl text-secondary mb-12 max-w-2xl mx-auto'>
            We specialize in creating stunning visual identities and digital experiences that make
            your brand stand out
          </p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <Link href='/services' className='group hover-lift'>
              <div className='bg-muted p-8 rounded-2xl group-hover:bg-primary/5 transition-all duration-300 h-full'>
                <div className='w-16 h-16 bg-primary rounded-lg mb-6 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <svg
                    className='w-8 h-8 text-white'
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
                <h3 className='text-2xl font-serif mb-4 text-foreground group-hover:text-primary transition-colors'>
                  Brand Identity
                </h3>
                <p className='text-secondary leading-relaxed'>
                  Complete brand identity design including logos, color palettes, and comprehensive
                  brand guidelines that tell your story.
                </p>
              </div>
            </Link>

            <Link href='/services' className='group hover-lift'>
              <div className='bg-muted p-8 rounded-2xl group-hover:bg-primary/5 transition-all duration-300 h-full'>
                <div className='w-16 h-16 bg-accent rounded-lg mb-6 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <svg
                    className='w-8 h-8 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <h3 className='text-2xl font-serif mb-4 text-foreground group-hover:text-primary transition-colors'>
                  Web Design
                </h3>
                <p className='text-secondary leading-relaxed'>
                  Modern, responsive web design that combines stunning aesthetics with seamless
                  functionality and user experience.
                </p>
              </div>
            </Link>

            <Link href='/services' className='group hover-lift'>
              <div className='bg-muted p-8 rounded-2xl group-hover:bg-primary/5 transition-all duration-300 h-full'>
                <div className='w-16 h-16 bg-primary rounded-lg mb-6 mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                  <svg
                    className='w-8 h-8 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                    />
                  </svg>
                </div>
                <h3 className='text-2xl font-serif mb-4 text-foreground group-hover:text-primary transition-colors'>
                  Print Design
                </h3>
                <p className='text-secondary leading-relaxed'>
                  Professional print materials including brochures, business cards, and marketing
                  collateral that make lasting impressions.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <CalendlyCTA />
    </div>
  );
}
