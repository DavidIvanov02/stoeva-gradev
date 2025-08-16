'use client';

import { useState } from 'react';

import { useTheme } from '@/components/ThemeProvider';

type ThemeValue = 'light' | 'dark' | 'system';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { value: 'light' as ThemeValue, label: 'Light', icon: '☀️' },
    { value: 'dark' as ThemeValue, label: 'Dark', icon: '🌙' },
    { value: 'system' as ThemeValue, label: 'System', icon: '💻' },
  ];

  const currentTheme = themes.find(t => t.value === theme) || themes[2];

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center space-x-2 px-3 py-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors'
        aria-label='Toggle theme'
      >
        <span className='text-lg'>{currentTheme.icon}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </svg>
      </button>

      {isOpen && (
        <div className='absolute right-0 mt-2 w-32 bg-background border border-border rounded-lg shadow-lg z-50'>
          {themes.map(themeOption => (
            <button
              key={themeOption.value}
              onClick={() => {
                setTheme(themeOption.value);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-2 px-3 py-2 text-left hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg ${theme === themeOption.value ? 'bg-primary/10 text-primary' : 'text-foreground'
                }`}
            >
              <span>{themeOption.icon}</span>
              <span className='text-sm'>{themeOption.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
