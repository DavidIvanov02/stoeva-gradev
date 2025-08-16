"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/portfolio", label: "Portfolio" },
        { href: "/blog", label: "Blog" },
        { href: "/testimonials", label: "Testimonials" },
        { href: "/contact", label: "Contact" },
    ];

    const isActive = (href: string) => pathname === href;

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg"
            : "bg-transparent"
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link
                        href="/"
                        className="group relative flex items-center space-x-3"
                    >
                        <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                            <Image
                                src="/logo.png"
                                alt="Stoeva Gradev Logo"
                                width={40}
                                height={40}
                                className="object-cover transition-transform duration-300 group-hover:scale-110"
                                priority
                            />
                        </div>
                        <span className="font-serif text-2xl font-bold text-primary">
                            Stoeva Gradev
                        </span>
                        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 group ${isActive(item.href)
                                    ? "text-primary bg-primary/10"
                                    : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                                    }`}
                            >
                                {item.label}
                                {isActive(item.href) && (
                                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse"></div>
                                )}
                                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 transform -translate-x-1/2"></div>
                            </Link>
                        ))}

                        {/* CTA Button */}
                        <a
                            href="https://calendly.com/stoeva-gradev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 px-6 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300 group relative overflow-hidden hover:bg-secondary"
                        >
                            <span className="relative z-10 flex items-center space-x-2">
                                <span>Book a Call</span>
                                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </span>
                            <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </a>

                        <div className="ml-4 pl-4 border-l border-border/30">
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-3">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="relative p-2 rounded-lg text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 group"
                            aria-label="Toggle mobile menu"
                        >
                            <div className="w-6 h-6 flex flex-col justify-center items-center">
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                                    }`}></span>
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "opacity-100"
                                    }`}></span>
                                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
                                    }`}></span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0 pointer-events-none"
                    }`}>
                    <div className="px-2 pt-4 pb-6 space-y-2 bg-background/95 backdrop-blur-xl rounded-2xl mt-4 border border-border/20 shadow-xl">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform ${isActive(item.href)
                                    ? "text-primary bg-primary/10 scale-105"
                                    : "text-foreground/80 hover:text-primary hover:bg-primary/5 hover:scale-105"
                                    } ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                                style={{ transitionDelay: `${index * 50}ms` }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <div className="flex items-center space-x-3">
                                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${isActive(item.href)
                                        ? "bg-primary scale-100"
                                        : "bg-foreground/20 scale-0 group-hover:scale-100"
                                        }`}></div>
                                    <span>{item.label}</span>
                                </div>
                            </Link>
                        ))}

                        {/* Mobile CTA Button */}
                        <div className="pt-4 mt-4 border-t border-border/20">
                            <a
                                href="https://calendly.com/stoeva-gradev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block w-full px-4 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300 group relative overflow-hidden hover:bg-secondary ${mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                    }`}
                                style={{ transitionDelay: `${navItems.length * 50}ms` }}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="relative z-10 flex items-center justify-center space-x-2">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>Book a Call</span>
                                </span>
                                <div className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
} 