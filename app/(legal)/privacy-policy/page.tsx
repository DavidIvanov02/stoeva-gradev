'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className='min-h-screen bg-background'>
      <section className='py-20 bg-muted/20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-5xl md:text-6xl font-serif mb-6 text-primary'>Privacy Policy</h1>
          <p className='text-xl text-secondary mb-8 max-w-2xl mx-auto'>
            Your privacy is important to us. This policy explains how we collect, use, and protect
            your information.
          </p>
          <div className='text-sm text-secondary'>
            Last updated:{' '}
            {new Date().toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='prose prose-lg max-w-none'>
            <div className='mb-12'>
              <h2 className='text-3xl font-serif mb-6 text-foreground'>Information We Collect</h2>
              <div className='bg-muted p-8 rounded-2xl mb-6'>
                <h3 className='text-xl font-serif mb-4 text-primary'>Personal Information</h3>
                <p className='text-secondary leading-relaxed mb-4'>
                  We may collect personal information that you provide directly to us, including:
                </p>
                <ul className='list-disc list-inside text-secondary space-y-2 ml-4'>
                  <li>Name and contact information (email, phone number)</li>
                  <li>Business information and project requirements</li>
                  <li>Communication preferences</li>
                  <li>Payment and billing information</li>
                </ul>
              </div>

              <div className='bg-muted p-8 rounded-2xl'>
                <h3 className='text-xl font-serif mb-4 text-primary'>
                  Automatically Collected Information
                </h3>
                <p className='text-secondary leading-relaxed mb-4'>
                  We automatically collect certain information when you visit our website:
                </p>
                <ul className='list-disc list-inside text-secondary space-y-2 ml-4'>
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website information</li>
                </ul>
              </div>
            </div>
            <div className='mb-12'>
              <h2 className='text-3xl font-serif mb-6 text-foreground'>
                How We Use Your Information
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-primary/5 p-6 rounded-xl border border-primary/10'>
                  <h3 className='text-lg font-serif mb-3 text-primary'>Service Delivery</h3>
                  <p className='text-secondary text-sm leading-relaxed'>
                    To provide our design services, communicate about projects, and deliver the
                    creative solutions you&apos;ve requested.
                  </p>
                </div>
                <div className='bg-accent/5 p-6 rounded-xl border border-accent/10'>
                  <h3 className='text-lg font-serif mb-3 text-accent'>Communication</h3>
                  <p className='text-secondary text-sm leading-relaxed'>
                    To respond to inquiries, send project updates, and provide customer support
                    throughout our collaboration.
                  </p>
                </div>
                <div className='bg-primary/5 p-6 rounded-xl border border-primary/10'>
                  <h3 className='text-lg font-serif mb-3 text-primary'>Improvement</h3>
                  <p className='text-secondary text-sm leading-relaxed'>
                    To analyze website usage, improve our services, and enhance the overall user
                    experience.
                  </p>
                </div>
                <div className='bg-accent/5 p-6 rounded-xl border border-accent/10'>
                  <h3 className='text-lg font-serif mb-3 text-accent'>Legal Compliance</h3>
                  <p className='text-secondary text-sm leading-relaxed'>
                    To comply with legal obligations, resolve disputes, and enforce our terms of
                    service.
                  </p>
                </div>
              </div>
            </div>
            <div className='mb-12'>
              <h2 className='text-3xl font-serif mb-6 text-foreground'>Information Sharing</h2>
              <div className='bg-muted/30 p-8 rounded-2xl border border-primary/10'>
                <p className='text-secondary leading-relaxed mb-4'>
                  We do not sell, trade, or otherwise transfer your personal information to third
                  parties without your consent, except in the following circumstances:
                </p>
                <ul className='list-disc list-inside text-secondary space-y-3 ml-4'>
                  <li>
                    <strong className='text-foreground'>Service Providers:</strong> Trusted
                    third-party services that help us operate our business (hosting, analytics,
                    payment processing)
                  </li>
                  <li>
                    <strong className='text-foreground'>Legal Requirements:</strong> When required
                    by law or to protect our rights and safety
                  </li>
                  <li>
                    <strong className='text-foreground'>Business Transfers:</strong> In connection
                    with a merger, acquisition, or sale of assets
                  </li>
                  <li>
                    <strong className='text-foreground'>With Consent:</strong> When you explicitly
                    agree to share information with specific third parties
                  </li>
                </ul>
              </div>
            </div>
            <div className='mb-12'>
              <h2 className='text-3xl font-serif mb-6 text-foreground'>Data Security</h2>
              <div className='bg-muted p-8 rounded-2xl'>
                <p className='text-secondary leading-relaxed mb-6'>
                  We implement appropriate security measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction. Our security
                  practices include:
                </p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  <div className='text-center p-4'>
                    <div className='w-12 h-12 bg-primary rounded-lg mx-auto mb-3 flex items-center justify-center'>
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
                          d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
                        />
                      </svg>
                    </div>
                    <h4 className='font-serif text-foreground mb-2'>Encryption</h4>
                    <p className='text-sm text-secondary'>
                      SSL/TLS encryption for data transmission
                    </p>
                  </div>
                  <div className='text-center p-4'>
                    <div className='w-12 h-12 bg-accent rounded-lg mx-auto mb-3 flex items-center justify-center'>
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
                          d='M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
                        />
                      </svg>
                    </div>
                    <h4 className='font-serif text-foreground mb-2'>Access Control</h4>
                    <p className='text-sm text-secondary'>Limited access to authorized personnel</p>
                  </div>
                  <div className='text-center p-4'>
                    <div className='w-12 h-12 bg-primary rounded-lg mx-auto mb-3 flex items-center justify-center'>
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
                          d='M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
                        />
                      </svg>
                    </div>
                    <h4 className='font-serif text-foreground mb-2'>Secure Storage</h4>
                    <p className='text-sm text-secondary'>Protected servers and regular backups</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mb-12'>
              <h2 className='text-3xl font-serif mb-6 text-foreground'>Your Rights</h2>
              <div className='bg-muted/30 p-8 rounded-2xl'>
                <p className='text-secondary leading-relaxed mb-6'>
                  You have certain rights regarding your personal information. Depending on your
                  location, these may include:
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
                    <div>
                      <h4 className='font-serif text-foreground mb-1'>Access</h4>
                      <p className='text-sm text-secondary'>Request a copy of your personal data</p>
                    </div>
                  </div>
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
                    <div>
                      <h4 className='font-serif text-foreground mb-1'>Correction</h4>
                      <p className='text-sm text-secondary'>
                        Update or correct inaccurate information
                      </p>
                    </div>
                  </div>
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
                    <div>
                      <h4 className='font-serif text-foreground mb-1'>Deletion</h4>
                      <p className='text-sm text-secondary'>
                        Request removal of your personal data
                      </p>
                    </div>
                  </div>
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
                    <div>
                      <h4 className='font-serif text-foreground mb-1'>Portability</h4>
                      <p className='text-sm text-secondary'>
                        Receive your data in a portable format
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mb-12'>
              <h2 className='text-3xl font-serif mb-6 text-foreground'>Cookies and Tracking</h2>
              <div className='bg-muted p-8 rounded-2xl'>
                <p className='text-secondary leading-relaxed mb-6'>
                  We use cookies and similar tracking technologies to enhance your browsing
                  experience and analyze website traffic. You can control cookie preferences through
                  your browser settings.
                </p>
                <div className='bg-background p-6 rounded-xl border border-border'>
                  <h4 className='font-serif text-foreground mb-3'>Types of Cookies We Use:</h4>
                  <ul className='list-disc list-inside text-secondary space-y-2 ml-4'>
                    <li>
                      <strong>Essential Cookies:</strong> Required for basic website functionality
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Help us understand how visitors use our
                      site
                    </li>
                    <li>
                      <strong>Preference Cookies:</strong> Remember your settings and preferences
                    </li>
                    <li>
                      <strong>Marketing Cookies:</strong> Used to deliver relevant advertisements
                      (with consent)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='mb-12'>
              <h2 className='text-3xl font-serif mb-6 text-foreground'>Contact Us</h2>
              <div className='bg-muted/50 p-8 rounded-2xl border border-primary/20'>
                <p className='text-secondary leading-relaxed mb-6'>
                  If you have any questions about this Privacy Policy or our data practices, please
                  don&apos;t hesitate to contact us:
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div className='flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-primary rounded-lg flex items-center justify-center'>
                      <svg
                        className='w-5 h-5 text-white'
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
                      <p className='font-medium text-foreground'>Email</p>
                      <p className='text-secondary'>privacy@stoevagradev.com</p>
                    </div>
                  </div>
                  <div className='flex items-center space-x-3'>
                    <div className='w-10 h-10 bg-accent rounded-lg flex items-center justify-center'>
                      <svg
                        className='w-5 h-5 text-white'
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
                      <p className='font-medium text-foreground'>Address</p>
                      <p className='text-secondary'>Sofia, Bulgaria</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mb-12'>
              <h2 className='text-3xl font-serif mb-6 text-foreground'>Policy Updates</h2>
              <div className='bg-muted p-8 rounded-2xl'>
                <p className='text-secondary leading-relaxed mb-4'>
                  We may update this Privacy Policy from time to time to reflect changes in our
                  practices or legal requirements. We will notify you of any material changes by:
                </p>
                <ul className='list-disc list-inside text-secondary space-y-2 ml-4 mb-6'>
                  <li>Posting the updated policy on our website</li>
                  <li>Sending email notifications for significant changes</li>
                  <li>Updating the &ldquo;Last updated&rdquo; date at the top of this policy</li>
                </ul>
                <p className='text-secondary leading-relaxed'>
                  Your continued use of our services after any changes indicates your acceptance of
                  the updated Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-16 bg-primary'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-serif mb-4 text-white'>
            Questions About Your Privacy?
          </h2>
          <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
            We&apos;re here to help. Reach out to us with any questions or concerns about how we
            handle your data.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='inline-flex items-center px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-all duration-300 hover-lift'
            >
              Contact Us
            </Link>
            <Link
              href='/'
              className='inline-flex items-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary transition-all duration-300'
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
