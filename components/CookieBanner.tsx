'use client';

import { useState, useEffect } from 'react';

import Link from 'next/link';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');

    if (!cookieConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };

    saveCookiePreferences(allAccepted);
    closeBanner();
  };

  const handleAcceptSelected = () => {
    saveCookiePreferences(preferences);
    closeBanner();
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };

    saveCookiePreferences(onlyNecessary);
    closeBanner();
  };

  const saveCookiePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookieConsent', JSON.stringify(prefs));
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
  };

  const closeBanner = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsAnimating(false);
    }, 300);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'necessary') return;

    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        onClick={() => !showPreferences && closeBanner()}
      />
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 p-4 transition-all duration-500 ${isAnimating ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
          }`}
      >
        <div className='max-w-6xl mx-auto'>
          <div className='bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-slate-700/50 overflow-hidden'>
            {!showPreferences ? (
              <div className='p-6 md:p-8'>
                <div className='flex flex-col lg:flex-row lg:items-center gap-6'>
                  <div className='flex-1'>
                    <div className='flex items-start gap-4'>
                      <div className='flex-shrink-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center'>
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
                            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      </div>

                      <div className='flex-1'>
                        <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-2'>
                          We value your privacy
                        </h3>
                        <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>
                          We use cookies to enhance your browsing experience, serve personalized
                          content, and analyze our traffic. By clicking &ldquo;Accept All&rdquo;, you consent to
                          our use of cookies. You can customize your preferences or learn more in
                          our{' '}
                          <Link
                            href='/privacy-policy'
                            className='text-blue-600 dark:text-blue-400 hover:underline font-medium'
                          >
                            Privacy Policy
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col sm:flex-row gap-3 lg:flex-shrink-0'>
                    <button
                      onClick={() => setShowPreferences(true)}
                      className='px-6 py-3 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-xl transition-all duration-200 font-medium border border-gray-200 dark:border-slate-600'
                    >
                      Customize
                    </button>
                    <button
                      onClick={handleRejectAll}
                      className='px-6 py-3 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-xl transition-all duration-200 font-medium border border-gray-200 dark:border-slate-600'
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className='px-6 py-3 bg-primary hover:bg-secondary text-white rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className='p-6 md:p-8'>
                <div className='mb-6'>
                  <div className='flex items-center justify-between mb-4'>
                    <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
                      Cookie Preferences
                    </h3>
                    <button
                      onClick={() => setShowPreferences(false)}
                      className='p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors'
                    >
                      <svg
                        className='w-5 h-5'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M6 18L18 6M6 6l12 12'
                        />
                      </svg>
                    </button>
                  </div>
                  <p className='text-gray-600 dark:text-gray-300'>
                    Choose which cookies you want to accept. You can change these settings at any
                    time.
                  </p>
                </div>

                <div className='space-y-4 mb-6'>
                  <div className='flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl'>
                    <div className='flex-1'>
                      <div className='flex items-center gap-3 mb-2'>
                        <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                        <h4 className='font-medium text-gray-900 dark:text-white'>
                          Necessary Cookies
                        </h4>
                        <span className='text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full'>
                          Always Active
                        </span>
                      </div>
                      <p className='text-sm text-gray-600 dark:text-gray-400'>
                        Essential for the website to function properly. Cannot be disabled.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl'>
                    <div className='flex-1'>
                      <div className='flex items-center gap-3 mb-2'>
                        <div
                          className={`w-2 h-2 rounded-full ${preferences.analytics ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                        ></div>
                        <h4 className='font-medium text-gray-900 dark:text-white'>
                          Analytics Cookies
                        </h4>
                      </div>
                      <p className='text-sm text-gray-600 dark:text-gray-400'>
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference('analytics')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${preferences.analytics ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${preferences.analytics ? 'translate-x-6' : 'translate-x-1'
                          }`}
                      />
                    </button>
                  </div>

                  <div className='flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl'>
                    <div className='flex-1'>
                      <div className='flex items-center gap-3 mb-2'>
                        <div
                          className={`w-2 h-2 rounded-full ${preferences.marketing ? 'bg-purple-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                        ></div>
                        <h4 className='font-medium text-gray-900 dark:text-white'>
                          Marketing Cookies
                        </h4>
                      </div>
                      <p className='text-sm text-gray-600 dark:text-gray-400'>
                        Used to deliver personalized advertisements and track campaign performance.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference('marketing')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${preferences.marketing ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${preferences.marketing ? 'translate-x-6' : 'translate-x-1'
                          }`}
                      />
                    </button>
                  </div>

                  <div className='flex items-center justify-between p-4 bg-gray-50 dark:bg-slate-800/50 rounded-xl'>
                    <div className='flex-1'>
                      <div className='flex items-center gap-3 mb-2'>
                        <div
                          className={`w-2 h-2 rounded-full ${preferences.functional ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-600'}`}
                        ></div>
                        <h4 className='font-medium text-gray-900 dark:text-white'>
                          Functional Cookies
                        </h4>
                      </div>
                      <p className='text-sm text-gray-600 dark:text-gray-400'>
                        Enable enhanced functionality like chat widgets and social media features.
                      </p>
                    </div>
                    <button
                      onClick={() => togglePreference('functional')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${preferences.functional ? 'bg-emerald-600' : 'bg-gray-300 dark:bg-gray-600'
                        }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${preferences.functional ? 'translate-x-6' : 'translate-x-1'
                          }`}
                      />
                    </button>
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-3 justify-end'>
                  <button
                    onClick={handleRejectAll}
                    className='px-6 py-3 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 rounded-xl transition-all duration-200 font-medium border border-gray-200 dark:border-slate-600'
                  >
                    Reject All
                  </button>
                  <button
                    onClick={handleAcceptSelected}
                    className='px-6 py-3 bg-primary hover:bg-secondary text-white rounded-xl transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
