'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

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
  const loadingTimeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const pathname = usePathname();

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    loadingTimeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    loadingTimeoutsRef.current = [];
    setIsLoading(false);
  }, []);

  useEffect(() => {
    startLoading();

    const timeout = setTimeout(() => {
      stopLoading();
    }, 800);

    return () => {
      clearTimeout(timeout);
    };
  }, [pathname, startLoading, stopLoading]);

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
