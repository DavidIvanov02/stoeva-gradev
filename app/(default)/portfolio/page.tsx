import Link from 'next/link';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'TechFlow Branding',
      category: 'Brand Identity',
      description:
        'Complete brand identity for a technology startup including logo, color palette, and brand guidelines.',
      tags: ['Branding', 'Logo Design', 'Guidelines'],
    },
    {
      id: 2,
      title: 'Artisan Coffee Website',
      category: 'Web Design',
      description:
        'E-commerce website design for a premium coffee roastery with focus on user experience and conversion.',
      tags: ['Web Design', 'E-commerce', 'UX/UI'],
    },
    {
      id: 3,
      title: 'Green Energy Campaign',
      category: 'Print Design',
      description:
        'Marketing campaign materials for renewable energy company including brochures and outdoor advertising.',
      tags: ['Print Design', 'Marketing', 'Campaign'],
    },
    {
      id: 4,
      title: 'Wellness App Interface',
      category: 'Web Design',
      description:
        'Mobile app interface design for a wellness and meditation platform with calming aesthetics.',
      tags: ['App Design', 'UI/UX', 'Mobile'],
    },
    {
      id: 5,
      title: 'Luxury Hotel Identity',
      category: 'Brand Identity',
      description:
        'Sophisticated brand identity for a boutique hotel chain emphasizing elegance and exclusivity.',
      tags: ['Branding', 'Luxury', 'Hospitality'],
    },
    {
      id: 6,
      title: 'Food Festival Poster',
      category: 'Print Design',
      description:
        'Eye-catching poster design for annual food festival with vibrant colors and appetizing imagery.',
      tags: ['Poster Design', 'Event', 'Food'],
    },
  ];

  return (
    <div className='min-h-screen bg-background'>
      <section className='py-20 bg-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-5xl md:text-6xl font-serif font-bold mb-6 text-primary'>
            Our Portfolio
          </h1>
          <p className='text-xl md:text-2xl text-secondary max-w-3xl mx-auto'>
            A showcase of our recent projects and creative solutions across various industries
          </p>
        </div>
      </section>

      <section className='py-12 bg-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center gap-4 mb-12'>
            <button className='bg-primary text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors'>
              All Projects
            </button>
            <button className='bg-muted text-foreground px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors'>
              Brand Identity
            </button>
            <button className='bg-muted text-foreground px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors'>
              Web Design
            </button>
            <button className='bg-muted text-foreground px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors'>
              Print Design
            </button>
          </div>
        </div>
      </section>

      <section className='pb-20 bg-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map(project => (
              <div key={project.id} className='group cursor-pointer hover-lift'>
                <div className='bg-muted rounded-2xl overflow-hidden'>
                  <div className='w-full h-64 bg-muted flex items-center justify-center group-hover:bg-secondary/20 transition-all duration-300'>
                    <div className='text-center'>
                      <div className='w-16 h-16 bg-white/20 rounded-lg mb-4 mx-auto flex items-center justify-center'>
                        <svg
                          className='w-8 h-8 text-primary'
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
                  <div className='p-6'>
                    <div className='flex items-center justify-between mb-3'>
                      <span className='text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full'>
                        {project.category}
                      </span>
                    </div>
                    <h3 className='text-xl font-serif mb-3 text-foreground group-hover:text-primary transition-colors'>
                      {project.title}
                    </h3>
                    <p className='text-secondary mb-4 text-sm leading-relaxed'>
                      {project.description}
                    </p>
                    <div className='flex flex-wrap gap-2'>
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className='text-xs text-secondary bg-muted px-2 py-1 rounded border'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-20 bg-muted'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-serif mb-6 text-foreground'>Project Impact</h2>
            <p className='text-xl text-secondary max-w-3xl mx-auto'>
              Our work delivers measurable results for our clients across various metrics
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-primary mb-2'>50+</div>
              <div className='text-secondary'>Projects Completed</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-primary mb-2'>25+</div>
              <div className='text-secondary'>Happy Clients</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-primary mb-2'>95%</div>
              <div className='text-secondary'>Client Satisfaction</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl md:text-5xl font-bold text-primary mb-2'>5+</div>
              <div className='text-secondary'>Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-background'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl md:text-5xl font-serif mb-6 text-foreground'>
            Ready to Create Something Amazing?
          </h2>
          <p className='text-xl text-secondary mb-8'>
            Let&apos;s work together to bring your vision to life with exceptional design solutions.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-primary text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-colors hover-lift inline-block text-lg'
            >
              Start Your Project
            </Link>
            <Link
              href='/services'
              className='border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-colors hover-lift inline-block text-lg'
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
