'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className='min-h-screen bg-background'>
      <section className='py-20 bg-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-5xl md:text-6xl font-serif font-bold mb-6 text-primary'>
            Get In Touch
          </h1>
          <p className='text-xl md:text-2xl text-secondary max-w-3xl mx-auto'>
            Ready to bring your vision to life? Let&apos;s discuss your project and create something
            amazing together.
          </p>
        </div>
      </section>

      <section className='py-20 bg-background'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-4xl md:text-5xl font-serif mb-8 text-foreground'>
                Let&apos;s Work Together
              </h2>
              <p className='text-lg text-secondary mb-8'>
                We&apos;re excited to learn about your project and discuss how we can help you
                achieve your design goals. Reach out to us using the form or contact information
                below.
              </p>

              <div className='space-y-6 mb-8'>
                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-primary rounded-lg flex items-center justify-center'>
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
                        d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div>
                    <div className='font-semibold text-foreground'>Email</div>
                    <div className='text-secondary'>hello@stoevagradev.com</div>
                  </div>
                </div>

                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-accent rounded-lg flex items-center justify-center'>
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
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                  </div>
                  <div>
                    <div className='font-semibold text-foreground'>Phone</div>
                    <div className='text-secondary'>+359 888 123 456</div>
                  </div>
                </div>

                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-primary rounded-lg flex items-center justify-center'>
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
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <div className='font-semibold text-foreground'>Location</div>
                    <div className='text-secondary'>Sofia, Bulgaria</div>
                  </div>
                </div>

                <div className='flex items-center space-x-4'>
                  <div className='w-12 h-12 bg-accent rounded-lg flex items-center justify-center'>
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
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <div className='font-semibold text-foreground'>Response Time</div>
                    <div className='text-secondary'>Within 24 hours</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className='text-xl font-serif mb-4 text-foreground'>Follow Us</h3>
                <div className='flex space-x-4'>
                  <a
                    href='https://www.facebook.com/people/Stoeva-Gradev/61559740272482/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors'
                    aria-label='Facebook'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
                    </svg>
                  </a>
                  <a
                    href='https://www.instagram.com/stoeva.gradev/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors'
                    aria-label='Instagram'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z' />
                    </svg>
                  </a>
                  <a
                    href='https://www.linkedin.com/company/stoeva-gradev-body-architect/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors'
                    aria-label='LinkedIn'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className='bg-muted p-8 rounded-2xl'>
              <h3 className='text-2xl font-serif mb-6 text-foreground'>Send us a message</h3>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-medium text-foreground mb-2'>Name *</label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground'
                      placeholder='Your full name'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-foreground mb-2'>
                      Email *
                    </label>
                    <input
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className='w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground'
                      placeholder='your@email.com'
                    />
                  </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label className='block text-sm font-medium text-foreground mb-2'>
                      Company
                    </label>
                    <input
                      type='text'
                      name='company'
                      value={formData.company}
                      onChange={handleChange}
                      className='w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground'
                      placeholder='Your company name'
                    />
                  </div>
                  <div>
                    <label className='block text-sm font-medium text-foreground mb-2'>
                      Service Needed
                    </label>
                    <select
                      name='service'
                      value={formData.service}
                      onChange={handleChange}
                      className='w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground'
                    >
                      <option value=''>Select a service</option>
                      <option value='brand-identity'>Brand Identity</option>
                      <option value='web-design'>Web Design</option>
                      <option value='print-design'>Print Design</option>
                      <option value='consultation'>Consultation</option>
                      <option value='other'>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className='block text-sm font-medium text-foreground mb-2'>
                    Project Budget
                  </label>
                  <select
                    name='budget'
                    value={formData.budget}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground'
                  >
                    <option value=''>Select budget range</option>
                    <option value='under-1000'>Under $1,000</option>
                    <option value='1000-5000'>$1,000 - $5,000</option>
                    <option value='5000-10000'>$5,000 - $10,000</option>
                    <option value='10000-25000'>$10,000 - $25,000</option>
                    <option value='over-25000'>Over $25,000</option>
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-medium text-foreground mb-2'>
                    Project Details *
                  </label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className='w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground'
                    placeholder='Tell us about your project, goals, timeline, and any specific requirements...'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full bg-primary text-white py-4 rounded-lg hover:bg-blue-600 transition-colors hover-lift text-lg font-medium'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 bg-muted'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-serif mb-6 text-foreground'>Deserve</h2>
            <p className='text-xl text-secondary'>
              Quick answers to common questions about our services and process
            </p>
          </div>

          <div className='space-y-6'>
            <div className='bg-background p-6 rounded-lg'>
              <h3 className='text-xl font-serif mb-3 text-foreground'>
                1. What if I travel a lot or have an unpredictable schedule?
              </h3>
              <p className='text-secondary'>
                The program is flexible and can adapt to your lifestyle. Whether you travel often or
                have a busy calendar, you will have the tools and guidance to stay consistent.
              </p>
            </div>

            <div className='bg-background p-6 rounded-lg'>
              <h3 className='text-xl font-serif mb-3 text-foreground'>
                2. Will I need access to a gym or special equipment?
              </h3>
              <p className='text-secondary'>
                No gym is required. Workouts are designed to be done at home or in the gym,
                depending on what fits your lifestyle best.
              </p>
            </div>

            <div className='bg-background p-6 rounded-lg'>
              <h3 className='text-xl font-serif mb-3 text-foreground'>
                3. Can I still join if I have an injury or health condition?
              </h3>
              <p className='text-secondary'>
                Yes. I will tailor your workouts and overall approach to support your healing and
                help you move safely and effectively, working alongside your physician&apos;s guidance
                when needed or through any notes and recommendations they provide.
              </p>
            </div>

            <div className='bg-background p-6 rounded-lg'>
              <h3 className='text-xl font-serif mb-3 text-foreground'>
                4. What if I am menopausal or perimenopausal?
              </h3>
              <p className='text-secondary'>
                The program is designed specifically for women 35 and up, including those in
                menopause or perimenopause. It supports hormonal balance and fat loss with a
                focus on metabolism, stress, and recovery.
              </p>
            </div>

            <div className='bg-background p-6 rounded-lg'>
              <h3 className='text-xl font-serif mb-3 text-foreground'>
                5. Do I need to be in shape or have experience?
              </h3>
              <p className='text-secondary'>
                Absolutely not. Everything is customized to your starting point.
              </p>
            </div>

            <div className='bg-background p-6 rounded-lg'>
              <h3 className='text-xl font-serif mb-3 text-foreground'>
                6. What results can I expect, and how quickly?
              </h3>
              <p className='text-secondary'>
                Clients begin noticing increased energy and better digestion within the first two
                weeks. Visible changes often begin within the first month, with continued progress
                over 12 to 24 weeks.
              </p>
            </div>

            <div className='bg-background p-6 rounded-lg'>
              <h3 className='text-xl font-serif mb-3 text-foreground'>
                7. What if I have questions or get stuck?
              </h3>
              <p className='text-secondary'>
                You will have direct access to me for questions, adjustments, and support. I am
                here to guide you every step of the way.
              </p>
            </div>

            <div className='bg-background p-6 rounded-lg'>
              <h3 className='text-xl font-serif mb-3 text-foreground'>
                8. What is the cost?
              </h3>
              <p className='text-secondary'>
                The cost of the program will be discussed during your free consultation call, after
                we have both agreed that this is the right fit. You will gain clarity on the value,
                support, and results available to you before making any decision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
