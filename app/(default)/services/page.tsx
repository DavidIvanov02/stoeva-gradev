import Link from 'next/link';

export default function Services() {
  return (
    <div className='min-h-screen bg-background'>
      <section className='py-20 bg-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-5xl md:text-6xl font-serif font-bold mb-6 text-primary'>
            Our Services
          </h1>
          <p className='text-xl md:text-2xl text-secondary max-w-3xl mx-auto'>
            Comprehensive design solutions tailored to meet your unique needs and objectives
          </p>
        </div>
      </section>

      <section className='py-20 bg-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
            <div className='bg-muted p-8 rounded-2xl hover-lift'>
              <div className='w-16 h-16 bg-primary rounded-lg mb-6 flex items-center justify-center'>
                <svg
                  className='w-8 h-8 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z'
                  />
                </svg>
              </div>
              <h2 className='text-3xl font-serif mb-4 text-foreground'>Brand Identity</h2>
              <p className='text-lg text-secondary mb-6'>
                Complete brand identity design that captures your essence and communicates your
                values effectively.
              </p>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-center text-secondary'>
                  <svg
                    className='w-5 h-5 text-primary mr-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  Logo Design & Variations
                </li>
                <li className='flex items-center text-secondary'>
                  <svg
                    className='w-5 h-5 text-primary mr-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  Color Palette & Typography
                </li>
                <li className='flex items-center text-secondary'>
                  <svg
                    className='w-5 h-5 text-primary mr-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  Brand Guidelines
                </li>
                <li className='flex items-center text-secondary'>
                  <svg
                    className='w-5 h-5 text-primary mr-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  Business Card Design
                </li>
              </ul>
              <div className='text-2xl font-bold text-primary mb-4'>Starting at $2,500</div>
              <Link
                href='/contact'
                className='bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors inline-block'
              >
                Get Started
              </Link>
            </div>

            <div className='bg-muted p-8 rounded-2xl hover-lift'>
              <div className='w-16 h-16 bg-accent rounded-lg mb-6 flex items-center justify-center'>
                <svg
                  className='w-8 h-8 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </div>
              <h2 className='text-3xl font-serif mb-4 text-foreground'>Web Design</h2>
              <p className='text-lg text-secondary mb-6'>
                Modern, responsive websites that combine beautiful aesthetics with exceptional user
                experience.
              </p>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-center text-secondary'>
                  <svg
                    className='w-5 h-5 text-primary mr-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  Responsive Design
                </li>
                <li className='flex items-center text-secondary'>
                  <svg
                    className='w-5 h-5 text-primary mr-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  UI/UX Design
                </li>
                <li className='flex items-center text-secondary'>
                  <svg
                    className='w-5 h-5 text-primary mr-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  E-commerce Solutions
                </li>
                <li className='flex items-center text-secondary'>
                  <svg
                    className='w-5 h-5 text-primary mr-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  SEO Optimization
                </li>
              </ul>
              <div className='text-2xl font-bold text-primary mb-4'>Starting at $3,500</div>
              <Link
                href='/contact'
                className='bg-accent text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors inline-block'
              >
                Get Started
              </Link>
            </div>

            <div className='bg-muted p-8 rounded-2xl hover-lift'>
              <div className='w-16 h-16 bg-primary rounded-lg mb-6 flex items-center justify-center'>
                <svg
                  className='w-8 h-8 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                  />
                </svg>
              </div>
              <h2 className='text-3xl font-serif mb-4 text-foreground'>Print Design</h2>
              <p className='text-lg text-secondary mb-6'>
                Professional print materials that make a lasting impression and effectively
                communicate your message.
              </p>
              <ul className='space-y-3 mb-8'>
                <li className='flex items-center text-secondary'>
                  <svg
                    className='w-5 h-5 text-primary mr-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  Brochures & Flyers
                </li>
                <li className='flex items-center text-secondary'>
                  <svg
                    className='w-5 h-5 text-primary mr-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  Posters & Banners
                </li>
                <li className='flex items-center text-secondary'>
                  <svg
                    className='w-5 h-5 text-primary mr-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  Packaging Design
                </li>
                <li className='flex items-center text-secondary'>
                  <svg
                    className='w-5 h-5 text-primary mr-3'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                  Marketing Collateral
                </li>
              </ul>
              <div className='text-2xl font-bold text-primary mb-4'>Starting at $800</div>
              <Link
                href='/contact'
                className='bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors inline-block'
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-muted'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-serif mb-6 text-foreground'>How We Work</h2>
            <p className='text-xl text-secondary max-w-3xl mx-auto'>
              Our proven process ensures exceptional results and client satisfaction
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto'>
                1
              </div>
              <h3 className='text-2xl font-serif mb-4 text-foreground'>Discovery</h3>
              <p className='text-secondary'>
                We start by understanding your goals, target audience, and project requirements
                through detailed consultation.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto'>
                2
              </div>
              <h3 className='text-2xl font-serif mb-4 text-foreground'>Strategy</h3>
              <p className='text-secondary'>
                We develop a comprehensive strategy and creative direction that aligns with your
                business objectives.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto'>
                3
              </div>
              <h3 className='text-2xl font-serif mb-4 text-foreground'>Design</h3>
              <p className='text-secondary'>
                Our creative team brings your vision to life with innovative design solutions and
                regular feedback loops.
              </p>
            </div>

            <div className='text-center'>
              <div className='w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto'>
                4
              </div>
              <h3 className='text-2xl font-serif mb-4 text-foreground'>Delivery</h3>
              <p className='text-secondary'>
                We deliver polished, professional results with all necessary files and ongoing
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-background'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-4xl md:text-5xl font-serif mb-6 text-foreground'>
            Ready to Start Your Project?
          </h2>
          <p className='text-xl text-secondary mb-8'>
            Let&apos;s discuss how we can help bring your vision to life with exceptional design.
          </p>
          <Link
            href='/contact'
            className='bg-primary text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-colors hover-lift inline-block text-lg'
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
