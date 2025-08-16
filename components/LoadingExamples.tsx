"use client";

import React, { useState } from 'react';
import { useLoadingHelpers } from './useLoadingHelpers';
import LoadingButton from './LoadingButton';

const LoadingExamples: React.FC = () => {
    const { withLoading, handleApiCall, startLoading, stopLoading } = useLoadingHelpers();
    const [buttonLoading, setButtonLoading] = useState(false);

    const handleApiExample = async () => {
        try {
            const result = await handleApiCall(async () => {
                await new Promise(resolve => setTimeout(resolve, 2000));
                return { data: 'API response' };
            });
            console.log('API result:', result);
        } catch (error) {
            console.error('API error:', error);
        }
    };

    const handleFormExample = async () => {
        setButtonLoading(true);

        try {
            await withLoading(async () => {
                await new Promise(resolve => setTimeout(resolve, 1500));
                console.log('Form submitted successfully');
            }, { minDuration: 500 });
        } finally {
            setButtonLoading(false);
        }
    };

    const handleManualLoading = () => {
        startLoading();
        setTimeout(() => {
            stopLoading();
        }, 3000);
    };

    const handleAsyncButtonAction = async () => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Async action completed');
    };

    return (
        <div className="p-8 space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif text-foreground mb-8">Loading System Examples</h2>

            <div className="space-y-4">
                <h3 className="text-xl font-serif text-foreground">1. API Call with Global Loading</h3>
                <button
                    onClick={handleApiExample}
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                    Make API Call
                </button>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-serif text-foreground">2. Form Submission with Custom Loading</h3>
                <button
                    onClick={handleFormExample}
                    disabled={buttonLoading}
                    className="px-4 py-2 bg-accent text-foreground rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50"
                >
                    {buttonLoading ? 'Submitting...' : 'Submit Form'}
                </button>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-serif text-foreground">3. Manual Loading Control</h3>
                <button
                    onClick={handleManualLoading}
                    className="px-4 py-2 bg-secondary text-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                >
                    Show Loading for 3 seconds
                </button>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-serif text-foreground">4. Loading Button Component</h3>
                <div className="flex flex-wrap gap-4">
                    <LoadingButton
                        variant="primary"
                        size="md"
                        onAsyncClick={handleAsyncButtonAction}
                        showGlobalLoading={true}
                    >
                        Primary Button (Global Loading)
                    </LoadingButton>

                    <LoadingButton
                        variant="outline"
                        size="md"
                        onAsyncClick={handleAsyncButtonAction}
                        showGlobalLoading={false}
                    >
                        Outline Button (Local Loading)
                    </LoadingButton>

                    <LoadingButton
                        variant="secondary"
                        size="lg"
                        onAsyncClick={handleAsyncButtonAction}
                        loadingText="Processing..."
                    >
                        Large Button
                    </LoadingButton>
                </div>
            </div>

            <div className="mt-8 p-4 bg-muted rounded-lg">
                <h4 className="text-lg font-serif text-foreground mb-2">Usage Tips:</h4>
                <ul className="text-secondary space-y-1 text-sm">
                    <li>• The loading state automatically shows on route changes</li>
                    <li>• Use `handleApiCall` for API requests</li>
                    <li>• Use `handleFormSubmit` for form submissions</li>
                    <li>• Use `withLoading` for custom async operations</li>
                    <li>• Use `LoadingButton` for buttons with async actions</li>
                    <li>• Manual control with `startLoading` and `stopLoading`</li>
                </ul>
            </div>
        </div>
    );
};

export default LoadingExamples; 