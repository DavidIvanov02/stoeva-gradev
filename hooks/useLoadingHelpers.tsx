'use client';

import { useCallback } from 'react';

import { useLoading } from '@/components/LoadingProvider';

/**
 * Custom hook that provides loading helpers for common scenarios
 */
export const useLoadingHelpers = () => {
  const { isLoading, setLoading, startLoading, stopLoading } = useLoading();

  /**
   * Wraps an async function with loading state
   * @param asyncFn - The async function to wrap
   * @param options - Options for loading behavior
   */
  const withLoading = useCallback(
    async (
      asyncFn: () => Promise<unknown>,
      options: {
        minDuration?: number; // Minimum loading duration in ms
        showLoading?: boolean; // Whether to show loading (default: true)
      } = {}
    ) => {
      const { minDuration = 0, showLoading = true } = options;

      if (showLoading) {
        startLoading();
      }

      const startTime = Date.now();

      try {
        const result = await asyncFn();

        // Ensure minimum loading duration
        if (minDuration > 0) {
          const elapsedTime = Date.now() - startTime;
          const remainingTime = minDuration - elapsedTime;

          if (remainingTime > 0) {
            await new Promise(resolve => setTimeout(resolve, remainingTime));
          }
        }

        return result;
      } finally {
        if (showLoading) {
          stopLoading();
        }
      }
    },
    [startLoading, stopLoading]
  );

  /**
   * Helper for form submissions
   */
  const handleFormSubmit = useCallback(
    async (submitFn: () => Promise<void>) => {
      return withLoading(submitFn, { minDuration: 500 });
    },
    [withLoading]
  );

  /**
   * Helper for API calls
   */
  const handleApiCall = useCallback(
    async (apiFn: () => Promise<unknown>) => {
      return withLoading(apiFn, { minDuration: 300 });
    },
    [withLoading]
  );

  /**
   * Helper for navigation with loading
   */
  const handleNavigation = useCallback(
    async (navigationFn: () => Promise<void> | void) => {
      startLoading();
      try {
        await navigationFn();
      } finally {
        // Let the LoadingProvider handle stopping the loading for navigation
        // It will stop automatically when the route changes
      }
    },
    [startLoading]
  );

  return {
    isLoading,
    setLoading,
    startLoading,
    stopLoading,
    withLoading,
    handleFormSubmit,
    handleApiCall,
    handleNavigation,
  };
};
