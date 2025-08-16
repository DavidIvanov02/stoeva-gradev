'use client';

import React from 'react';

import { useLoading } from './LoadingProvider';

const LoadingOverlay: React.FC = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className='fixed inset-0 z-[9999] flex items-center justify-center bg-background/95 backdrop-blur-md transition-all duration-300'>
      <div className='flex flex-col items-center space-y-6'>
        <div className='relative'>
          <div className='w-20 h-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin'></div>

          <div className='absolute inset-2 w-16 h-16 border-4 border-transparent border-r-accent rounded-full animate-spin animate-reverse animation-delay-150'></div>

          <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-3 h-3 bg-primary rounded-full animate-pulse'></div>
          </div>
        </div>

        <div className='text-center space-y-3'>
          <h2 className='text-2xl font-serif text-foreground animate-pulse'>Loading</h2>

          <div className='flex justify-center space-x-1'>
            <div className='w-2 h-2 bg-primary rounded-full animate-bounce'></div>
            <div className='w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-100'></div>
            <div className='w-2 h-2 bg-primary rounded-full animate-bounce animation-delay-200'></div>
          </div>

          <div className='w-48 h-1 bg-muted rounded-full overflow-hidden'>
            <div className='h-full bg-gradient-to-r from-primary to-accent rounded-full animate-loading-bar'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;
