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
                    href='https://linkedin.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                    </svg>
                  </a>
                  <a
                    href='https://instagram.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.014 5.367 18.635.001 12.017.001zm5.568 16.791c-.001.232-.016.465-.049.695-.131 1.063-.652 1.609-1.554 1.731-.5.067-1.015.102-1.522.102-.507-.001-1.021-.035-1.522-.102-.902-.122-1.423-.668-1.554-1.731-.033-.23-.048-.463-.049-.695V7.209c.001-.232.016-.465.049-.695.131-1.064.652-1.609 1.554-1.731.501-.067 1.015-.102 1.522-.102.507.001 1.021.035 1.522.102.902.122 1.423.667 1.554 1.731.033.23.048.463.049.695v9.582z' />
                    </svg>
                  </a>
                  <a
                    href='https://behance.net'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors'
                  >
                    <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                      <path d='M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z' />
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
                How long does a typical project take?
              </h3>
              <p className='text-secondary'>
                Project timelines vary depending on scope and complexity. Brand identity projects
                typically take 2-4 weeks, web design projects 4-8 weeks, and print design projects
                1-2 weeks.
              </p>
            </div>

            <div className='bg-background p-6 rounded-lg'>
              <h3 className='text-xl font-serif mb-3 text-foreground'>
                What&apos;s included in your design packages?
              </h3>
              <p className='text-secondary'>
                Each package includes initial consultation, concept development, design iterations,
                final files in multiple formats, and basic brand guidelines. Specific deliverables
                vary by service type.
              </p>
            </div>

            <div className='bg-background p-6 rounded-lg'>
              <h3 className='text-xl font-serif mb-3 text-foreground'>
                Do you work with international clients?
              </h3>
              <p className='text-secondary'>
                Yes! We work with clients worldwide. We&apos;re experienced in remote collaboration
                and use modern tools to ensure smooth communication regardless of location or time
                zone.
              </p>
            </div>

            <div className='bg-background p-6 rounded-lg'>
              <h3 className='text-xl font-serif mb-3 text-foreground'>
                What&apos;s your revision policy?
              </h3>
              <p className='text-secondary'>
                We include up to 3 rounds of revisions in our standard packages. Additional
                revisions can be accommodated for an additional fee. We work closely with you to
                ensure the final result exceeds your expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
