"use client";

import React from 'react';
import { useLoadingHelpers } from './useLoadingHelpers';

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onAsyncClick?: () => Promise<void>;
    loading?: boolean;
    loadingText?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    showGlobalLoading?: boolean; // Whether to show the global loading overlay
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
    children,
    onAsyncClick,
    loading: externalLoading = false,
    loadingText = "Loading...",
    variant = 'primary',
    size = 'md',
    showGlobalLoading = false,
    disabled,
    className = '',
    onClick,
    ...props
}) => {
    const { handleFormSubmit, isLoading: globalLoading } = useLoadingHelpers();

    const isLoading = externalLoading || (showGlobalLoading && globalLoading);

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (isLoading || disabled) return;

        if (onAsyncClick) {
            if (showGlobalLoading) {
                await handleFormSubmit(onAsyncClick);
            } else {
                await onAsyncClick();
            }
        } else if (onClick) {
            onClick(e);
        }
    };

    const baseClasses = "relative inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantClasses = {
        primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary/50",
        secondary: "bg-secondary text-foreground hover:bg-secondary/90 focus:ring-secondary/50",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/50"
    };

    const sizeClasses = {
        sm: "px-3 py-1.5 text-sm rounded-md",
        md: "px-4 py-2 text-base rounded-lg",
        lg: "px-6 py-3 text-lg rounded-xl"
    };

    const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
        <button
            {...props}
            className={buttonClasses}
            disabled={disabled || isLoading}
            onClick={handleClick}
        >
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        <span>{loadingText}</span>
                    </div>
                </div>
            )}

            <span className={isLoading ? 'opacity-0' : 'opacity-100'}>
                {children}
            </span>
        </button>
    );
};

export default LoadingButton; 