"use client";

import { useState } from "react";

export default function CalendlyCTA() {
    const [isHovered, setIsHovered] = useState(false);

    const openCalendly = () => {
        // Replace with your actual Calendly URL
        window.open("https://calendly.com/your-calendly-link", "_blank");
    };

    return (
        <section className="py-20 bg-muted/20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="bg-background/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50">
                    <div className="mb-8">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-foreground">
                            Ready to Bring Your Vision to Life?
                        </h2>
                        <p className="text-xl text-secondary max-w-2xl mx-auto">
                            Let's discuss your project and create something extraordinary together.
                            Book a free consultation call to get started.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        <div className="flex flex-col items-center p-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h3 className="font-serif text-lg font-semibold mb-2">Free Consultation</h3>
                            <p className="text-secondary text-sm">30-minute discovery call</p>
                        </div>

                        <div className="flex flex-col items-center p-4">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h3 className="font-serif text-lg font-semibold mb-2">Custom Strategy</h3>
                            <p className="text-secondary text-sm">Tailored to your needs</p>
                        </div>

                        <div className="flex flex-col items-center p-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="font-serif text-lg font-semibold mb-2">Fast Turnaround</h3>
                            <p className="text-secondary text-sm">Quick project delivery</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <button
                            onClick={openCalendly}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="calendly-cta text-white px-10 py-4 rounded-full text-lg font-semibold hover-lift inline-flex items-center space-x-3 group"
                        >
                            <span>Schedule Your Free Call</span>
                            <svg
                                className={`w-5 h-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </button>

                        <p className="text-sm text-secondary">
                            ✨ No commitment required • 🚀 Get started in 24 hours • 💯 100% satisfaction guaranteed
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
} 