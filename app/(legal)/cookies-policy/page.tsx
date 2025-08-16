'use client';

import Link from 'next/link';

export default function CookiesPolicy() {
  return (
    <div className='min-h-screen bg-background'>
      <section className='py-20 bg-muted/20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h1 className='text-5xl md:text-6xl font-serif mb-6 text-primary'>Cookies Policy</h1>
          <p className='text-xl text-secondary mb-8 max-w-2xl mx-auto'>
            This policy explains how we use cookies and similar technologies to enhance your browsing experience and improve our website.
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
              <h2 className='text-3xl font-serif mb-6 text-foreground'>What Are Cookies?</h2>
              <div className='bg-muted p-8 rounded-2xl mb-6'>
                <p className='text-secondary leading-relaxed mb-4'>
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by:
                </p>
                <ul className='list-disc list-inside text-secondary space-y-2 ml-4'>
                  <li>Remembering your preferences and settings</li>
                  <li>Analyzing how you use our website</li>
                  <li>Providing personalized content and advertisements</li>
                  <li>Ensuring the website functions properly</li>
                </ul>
              </div>

              <div className='bg-muted p-8 rounded-2xl'>
                <h3 className='text-xl font-serif mb-4 text-primary'>
                  How Cookies Work
                </h3>
                <p className='text-secondary leading-relaxed mb-4'>
                  When you visit our website, your browser sends cookies to our servers. These cookies contain information that helps us:
                </p>
                <ul className='list-disc list-inside text-secondary space-y-2 ml-4'>
                  <li>Recognize you when you return to our site</li>
                  <li>Remember your login status and preferences</li>
                  <li>Track your browsing behavior for analytics</li>
                  <li>Provide relevant content and recommendations</li>
                </ul>
              </div>
            </div>

            <div className='mb-12'>
              <h2 className='text-3xl font-serif mb-6 text-foreground'>
                Types of Cookies We Use
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-primary/5 p-6 rounded-xl border border-primary/10'>
                  <h3 className='text-lg font-serif mb-3 text-primary'>Essential Cookies</h3>
                  <p className='text-secondary text-sm leading-relaxed'>
                    These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions.
                  </p>
                </div>
                <div className='bg-accent/5 p-6 rounded-xl border border-accent/10'>
                  <h3 className='text-lg font-serif mb-3 text-accent'>Analytics Cookies</h3>
                  <p className='text-secondary text-sm leading-relaxed'>
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                </div>
                <div className='bg-primary/5 p-6 rounded-xl border border-primary/10'>
                  <h3 className='text-lg font-serif mb-3 text-primary'>Preference Cookies</h3>
                  <p className='text-secondary text-sm leading-relaxed'>
                    These cookies allow our website to remember information that changes the way it behaves or looks, such as your preferred language or region.
                  </p>
                </div>
                <div className='bg-accent/5 p-6 rounded-xl border border-accent/10'>
                  <h3 className='text-lg font-serif mb-3 text-accent'>Marketing Cookies</h3>
                  <p className='text-secondary text-sm leading-relaxed'>
                    These cookies are used to track visitors across websites to display relevant and engaging advertisements.
                  </p>
                </div>
              </div>
            </div>

            <div className='mb-12'>
              <h2 className='text-3xl font-serif mb-6 text-foreground'>Third-Party Cookies</h2>
              <div className='bg-muted/30 p-8 rounded-2xl border border-primary/10'>
                <p className='text-secondary leading-relaxed mb-4'>
                  Some cookies on our website are set by third-party services that we use to enhance your experience:
                </p>
                <ul className='list-disc list-inside text-secondary space-y-3 ml-4'>
                  <li>
                    <strong className='text-foreground'>Google Analytics:</strong> Helps us understand website traffic and user behavior
                  </li>
                  <li>
                    <strong className='text-foreground'>Social Media:</strong> Enables social sharing and integration features
                  </li>
                  <li>
                    <strong className='text-foreground'>Payment Processors:</strong> Secure payment processing and verification
                  </li>
                  <li>
                    <strong className='text-foreground'>Content Delivery Networks:</strong> Faster loading times and improved performance
                  </li>
                </ul>
              </div>
            </div>

            <div className='mb-12'>
              <h2 className='text-3xl font-serif mb-6 text-foreground'>Managing Your Cookie Preferences</h2>
              <div className='bg-muted p-8 rounded-2xl'>
                <p className='text-secondary leading-relaxed mb-6'>
                  You have control over cookies and can manage your preferences in several ways:
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
                          d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
                        />
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                        />
                      </svg>
                    </div>
                    <h4 className='font-serif text-foreground mb-2'>Browser Settings</h4>
                    <p className='text-sm text-secondary'>
                      Control cookies through your browser preferences
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
                          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>
                    <h4 className='font-serif text-foreground mb-2'>Cookie Consent</h4>
                    <p className='text-sm text-secondary'>Manage preferences through our consent banner</p>
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
                          d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4'
                        />
                      </svg>
                    </div>
                    <h4 className='font-serif text-foreground mb-2'>Opt-Out Tools</h4>
                    <p className='text-sm text-secondary'>Use industry opt-out mechanisms</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='mb-12'>
              <h2 className='text-3xl font-serif mb-6 text-foreground'>Browser-Specific Instructions</h2>
              <div className='bg-muted/30 p-8 rounded-2xl'>
                <p className='text-secondary leading-relaxed mb-6'>
                  Here&apos;s how to manage cookies in popular browsers:
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
                      <h4 className='font-serif text-foreground mb-1'>Chrome</h4>
                      <p className='text-sm text-secondary'>Settings → Privacy and security → Cookies and other site data</p>
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
                      <h4 className='font-serif text-foreground mb-1'>Firefox</h4>
                      <p className='text-sm text-secondary'>Options → Privacy & Security → Cookies and Site Data</p>
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
                      <h4 className='font-serif text-foreground mb-1'>Safari</h4>
                      <p className='text-sm text-secondary'>Preferences → Privacy → Manage Website Data</p>
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
                      <h4 className='font-serif text-foreground mb-1'>Edge</h4>
                      <p className='text-sm text-secondary'>Settings → Cookies and site permissions → Cookies and site data</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='mb-12'>
              <h2 className='text-3xl font-serif mb-6 text-foreground'>Impact of Disabling Cookies</h2>
              <div className='bg-muted p-8 rounded-2xl'>
                <p className='text-secondary leading-relaxed mb-6'>
                  While you can disable cookies, please note that doing so may affect your experience on our website:
                </p>
                <div className='bg-background p-6 rounded-xl border border-border'>
                  <h4 className='font-serif text-foreground mb-3'>What Happens When Cookies Are Disabled:</h4>
                  <ul className='list-disc list-inside text-secondary space-y-2 ml-4'>
                    <li>
                      <strong>Essential Functions:</strong> Some website features may not work properly
                    </li>
                    <li>
                      <strong>Personalization:</strong> We won&apos;t be able to remember your preferences
                    </li>
                    <li>
                      <strong>Analytics:</strong> We can&apos;t improve our website based on usage data
                    </li>
                    <li>
                      <strong>Security:</strong> Some security features may be compromised
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='mb-12'>
              <h2 className='text-3xl font-serif mb-6 text-foreground'>Contact Us</h2>
              <div className='bg-muted/50 p-8 rounded-2xl border border-primary/20'>
                <p className='text-secondary leading-relaxed mb-6'>
                  If you have any questions about our use of cookies or this Cookies Policy, please don&apos;t hesitate to contact us:
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
                      <p className='text-secondary'>cookies@stoevagradev.com</p>
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
                  We may update this Cookies Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by:
                </p>
                <ul className='list-disc list-inside text-secondary space-y-2 ml-4 mb-6'>
                  <li>Posting the updated policy on our website</li>
                  <li>Updating the &ldquo;Last updated&rdquo; date at the top of this policy</li>
                  <li>Sending email notifications for significant changes</li>
                </ul>
                <p className='text-secondary leading-relaxed'>
                  Your continued use of our website after any changes indicates your acceptance of the updated Cookies Policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-primary'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-serif mb-4 text-white'>
            Questions About Cookies?
          </h2>
          <p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto'>
            We&apos;re here to help. Reach out to us with any questions or concerns about our use of cookies and tracking technologies.
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
