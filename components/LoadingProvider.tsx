'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

import { usePathname } from 'next/navigation';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: React.ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingTimeouts, setLoadingTimeouts] = useState<NodeJS.Timeout[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    startLoading();

    const timeout = setTimeout(() => {
      stopLoading();
    }, 800);

    return () => {
      clearTimeout(timeout);
    };
  }, [pathname]);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    loadingTimeouts.forEach(timeout => clearTimeout(timeout));
    setLoadingTimeouts([]);

    setIsLoading(false);
  };

  const setLoading = (loading: boolean) => {
    if (loading) {
      startLoading();
    } else {
      stopLoading();
    }
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading, startLoading, stopLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
