import { notFound } from 'next/navigation';

import { getProjectBySlug, getAllProjectSlugs } from '@/utils/markdownParser';

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map(slug => ({
        slug,
    }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = getProjectBySlug(params.slug);

    if (!project) {
        notFound();
    }

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
            <section className='py-20 bg-muted/20'>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-8'>
                        <span className='inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-4'>
                            {project.category}
                        </span>
                        <h1 className='text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground'>
                            {project.title}
                        </h1>
                        <p className='text-xl text-secondary max-w-3xl mx-auto mb-6'>
                            {project.description}
                        </p>
                        <div className='flex flex-wrap justify-center gap-4 text-sm text-secondary'>
                            <span>Client: {project.client}</span>
                            <span>•</span>
                            <span>{formatDate(project.date)}</span>
                            <span>•</span>
                            <span>{project.duration}</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-16'>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='prose prose-lg max-w-none'>
                        <div
                            className='text-foreground leading-relaxed'
                            dangerouslySetInnerHTML={{ __html: project.content }}
                        />
                    </div>
                </div>
            </section>

            {project.technologies.length > 0 && (
                <section className='py-16 bg-muted'>
                    <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <h2 className='text-3xl font-serif mb-8 text-center text-foreground'>Technologies Used</h2>
                        <div className='flex flex-wrap justify-center gap-3'>
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className='bg-white text-foreground px-4 py-2 rounded-full text-sm font-medium shadow-sm'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {project.results.length > 0 && (
                <section className='py-16 bg-background'>
                    <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
                        <h2 className='text-3xl font-serif mb-8 text-center text-foreground'>Project Results</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            {project.results.map((result, index) => (
                                <div key={index} className='bg-muted p-6 rounded-xl'>
                                    <div className='flex items-start space-x-3'>
                                        <div className='w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1 flex items-center justify-center'>
                                            <svg className='w-3 h-3 text-white' fill='currentColor' viewBox='0 0 20 20'>
                                                <path
                                                    fillRule='evenodd'
                                                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                    clipRule='evenodd'
                                                />
                                            </svg>
                                        </div>
                                        <p className='text-secondary leading-relaxed'>{result}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className='py-16 bg-primary'>
                <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <h2 className='text-3xl md:text-4xl font-serif mb-4 text-white'>
                        Ready to Start Your Project?
                    </h2>
                    <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
                        Let&apos;s work together to bring your vision to life with exceptional design solutions.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <a
                            href='/contact'
                            className='inline-flex items-center px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-all duration-300 hover-lift'
                        >
                            Start Your Project
                        </a>
                        <a
                            href='/portfolio'
                            className='inline-flex items-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary transition-all duration-300'
                        >
                            View All Projects
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
