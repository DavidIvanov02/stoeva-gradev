'use client';

import { useState } from 'react';

import Link from 'next/link';

import type { PortfolioProject } from '@/types/portfolio';

interface PortfolioPageContentProps {
    initialProjects: PortfolioProject[];
    initialCategories: string[];
}

export default function PortfolioPageContent({ initialProjects, initialCategories }: PortfolioPageContentProps) {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects =
        activeCategory === 'All'
            ? initialProjects
            : initialProjects.filter(project => project.category === activeCategory);

    const featuredProjects = initialProjects.filter(project => project.featured);
    const regularProjects = filteredProjects.filter(project => !project.featured);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div className='min-h-screen bg-background'>
            <section className='py-24 bg-background'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <h1 className='text-5xl md:text-6xl font-serif font-bold mb-8 text-primary'>
                        Our Portfolio
                    </h1>
                    <p className='text-xl md:text-2xl text-secondary max-w-3xl mx-auto'>
                        A showcase of our recent projects and creative solutions across various industries
                    </p>
                </div>
            </section>

            {featuredProjects.length > 0 && (
                <section className='py-24 bg-background'>
                    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <div className='text-center mb-20'>
                            <h2 className='text-4xl md:text-5xl font-serif mb-8 text-foreground'>
                                Featured Projects
                            </h2>
                            <p className='text-xl text-secondary'>Our most impressive and impactful work</p>
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                            {featuredProjects.map(project => (
                                <Link
                                    key={project.id}
                                    href={`/portfolio/${project.slug}`}
                                    className='group block bg-muted rounded-2xl overflow-hidden hover-lift transition-all duration-300 hover:shadow-xl'
                                >
                                    <div className='aspect-video bg-muted relative overflow-hidden'>
                                        <div className='absolute inset-0 bg-primary/20 z-10' />
                                        <div className='absolute bottom-6 left-6 z-20'>
                                            <span className='inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium'>
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='p-10'>
                                        <div className='flex items-center text-sm text-secondary mb-6'>
                                            <span>{formatDate(project.date)}</span>
                                            <span className='mx-3'>•</span>
                                            <span>{project.duration}</span>
                                        </div>
                                        <h3 className='text-2xl font-serif font-bold text-foreground mb-6 group-hover:text-primary transition-colors'>
                                            {project.title}
                                        </h3>
                                        <p className='text-secondary leading-relaxed mb-8'>{project.description}</p>
                                        <div className='flex items-center justify-between'>
                                            <span className='text-sm text-secondary'>Client: {project.client}</span>
                                            <span className='text-primary font-medium group-hover:translate-x-1 transition-transform'>
                                                View Project →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className='py-16 bg-muted'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex flex-wrap justify-center gap-6'>
                        {initialCategories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-8 py-4 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-background text-secondary hover:bg-primary hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className='py-24 bg-background'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                        {regularProjects.map(project => (
                            <Link
                                key={project.id}
                                href={`/portfolio/${project.slug}`}
                                className='group block bg-muted rounded-2xl overflow-hidden hover-lift transition-all duration-300'
                            >
                                <div className='w-full h-72 bg-muted flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-300'>
                                    <div className='text-center'>
                                        <div className='w-20 h-20 bg-white/20 rounded-lg mb-6 mx-auto flex items-center justify-center'>
                                            <svg
                                                className='w-10 h-10 text-primary'
                                                fill='none'
                                                stroke='currentColor'
                                                viewBox='0 0 24 24'
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth={2}
                                                    d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                                                />
                                            </svg>
                                        </div>
                                        <div className='text-secondary group-hover:text-primary transition-colors font-medium'>
                                            View Project
                                        </div>
                                    </div>
                                </div>
                                <div className='p-8'>
                                    <div className='flex items-center justify-between mb-4'>
                                        <span className='text-sm text-primary font-medium bg-primary/10 px-4 py-2 rounded-full'>
                                            {project.category}
                                        </span>
                                    </div>
                                    <h3 className='text-xl font-serif mb-4 text-foreground group-hover:text-primary transition-colors'>
                                        {project.title}
                                    </h3>
                                    <p className='text-secondary mb-6 text-sm leading-relaxed'>
                                        {project.description}
                                    </p>
                                    <div className='flex flex-wrap gap-3'>
                                        {project.tags.slice(0, 3).map((tag, index) => (
                                            <span
                                                key={index}
                                                className='text-xs text-secondary bg-muted px-3 py-2 rounded border'
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className='py-24 bg-muted'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-20'>
                        <h2 className='text-4xl md:text-5xl font-serif mb-8 text-foreground'>Project Impact</h2>
                        <p className='text-xl text-secondary max-w-3xl mx-auto'>
                            Our work delivers measurable results for our clients across various metrics
                        </p>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-12'>
                        <div className='text-center'>
                            <div className='text-4xl md:text-5xl font-bold text-primary mb-4'>{initialProjects.length}+</div>
                            <div className='text-secondary'>Projects Completed</div>
                        </div>
                        <div className='text-center'>
                            <div className='text-4xl md:text-5xl font-bold text-primary mb-4'>25+</div>
                            <div className='text-secondary'>Happy Clients</div>
                        </div>
                        <div className='text-center'>
                            <div className='text-4xl md:text-5xl font-bold text-primary mb-4'>95%</div>
                            <div className='text-secondary'>Client Satisfaction</div>
                        </div>
                        <div className='text-center'>
                            <div className='text-4xl md:text-5xl font-bold text-primary mb-4'>5+</div>
                            <div className='text-secondary'>Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-24 bg-background'>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <h2 className='text-4xl md:text-5xl font-serif mb-8 text-foreground'>
                        Ready to Create Something Amazing?
                    </h2>
                    <p className='text-xl text-secondary mb-10'>
                        Let&apos;s work together to bring your vision to life with exceptional design solutions.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-6 justify-center'>
                        <Link
                            href='/contact'
                            className='bg-primary text-white px-10 py-5 rounded-full hover:bg-foreground hover:text-background transition-all duration-300 hover-lift inline-block text-lg'
                        >
                            Start Your Project
                        </Link>
                        <Link
                            href='/services'
                            className='border-2 border-primary text-primary px-10 py-5 rounded-full hover:bg-primary hover:text-white transition-all duration-300 hover-lift inline-block text-lg'
                        >
                            View Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
