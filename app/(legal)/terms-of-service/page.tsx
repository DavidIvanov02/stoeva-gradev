"use client";

import Link from "next/link";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-background">
            <section className="py-20 bg-muted/20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-serif mb-6 text-primary">
                        Terms of Service
                    </h1>
                    <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
                        These terms govern your use of our services and establish the foundation for our professional relationship.
                    </p>
                    <div className="text-sm text-secondary">
                        Last updated: {new Date().toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif mb-6 text-foreground">Agreement to Terms</h2>
                            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/10">
                                <p className="text-secondary leading-relaxed mb-4">
                                    By accessing and using Stoeva Gradev&apos;s services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                                </p>
                                <div className="bg-background p-6 rounded-xl border border-border">
                                    <h3 className="text-lg font-serif mb-3 text-primary">Key Points:</h3>
                                    <ul className="list-disc list-inside text-secondary space-y-2 ml-4">
                                        <li>These terms apply to all users of our website and services</li>
                                        <li>By using our services, you agree to these terms in full</li>
                                        <li>We reserve the right to update these terms at any time</li>
                                        <li>Continued use after changes constitutes acceptance</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif mb-6 text-foreground">Our Services</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                                    <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-serif mb-3 text-primary">Brand Identity</h3>
                                    <p className="text-secondary text-sm leading-relaxed">
                                        Complete brand identity design including logos, color palettes, and brand guidelines.
                                    </p>
                                </div>
                                <div className="bg-accent/5 p-6 rounded-xl border border-accent/10">
                                    <div className="w-12 h-12 bg-accent rounded-lg mb-4 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-serif mb-3 text-accent">Web Design</h3>
                                    <p className="text-secondary text-sm leading-relaxed">
                                        Modern, responsive web design with seamless functionality and user experience.
                                    </p>
                                </div>
                                <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                                    <div className="w-12 h-12 bg-primary rounded-lg mb-4 flex items-center justify-center">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-serif mb-3 text-primary">Print Design</h3>
                                    <p className="text-secondary text-sm leading-relaxed">
                                        Professional print materials including brochures, business cards, and marketing collateral.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif mb-6 text-foreground">Client Responsibilities</h2>
                            <div className="bg-muted p-8 rounded-2xl">
                                <p className="text-secondary leading-relaxed mb-6">
                                    To ensure successful project completion, clients are expected to fulfill the following responsibilities:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-serif text-foreground mb-1">Timely Communication</h4>
                                                <p className="text-sm text-secondary">Respond to requests and provide feedback within agreed timeframes</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-serif text-foreground mb-1">Content Provision</h4>
                                                <p className="text-sm text-secondary">Supply all necessary content, images, and materials as requested</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-serif text-foreground mb-1">Clear Requirements</h4>
                                                <p className="text-sm text-secondary">Provide detailed project requirements and specifications</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-serif text-foreground mb-1">Payment Terms</h4>
                                                <p className="text-sm text-secondary">Make payments according to the agreed schedule and terms</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-serif text-foreground mb-1">Approval Process</h4>
                                                <p className="text-sm text-secondary">Review and approve deliverables within specified timeframes</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1 flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-serif text-foreground mb-1">Legal Compliance</h4>
                                                <p className="text-sm text-secondary">Ensure all provided content complies with applicable laws</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif mb-6 text-foreground">Payment Terms</h2>
                            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-serif mb-4 text-primary">Payment Schedule</h3>
                                        <ul className="space-y-3 text-secondary">
                                            <li className="flex items-start space-x-3">
                                                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                                <span><strong className="text-foreground">50% Deposit:</strong> Required before project commencement</span>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                                <span><strong className="text-foreground">50% Final Payment:</strong> Due upon project completion</span>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                                                <span><strong className="text-foreground">Large Projects:</strong> May be divided into milestone payments</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif mb-4 text-accent">Payment Methods</h3>
                                        <div className="space-y-3">
                                            <div className="bg-background p-4 rounded-lg border border-border">
                                                <p className="text-sm text-secondary mb-2">Accepted payment methods:</p>
                                                <ul className="text-sm text-secondary space-y-1">
                                                    <li>• Bank transfer</li>
                                                    <li>• PayPal</li>
                                                    <li>• Credit/Debit cards</li>
                                                    <li>• Cryptocurrency (upon request)</li>
                                                </ul>
                                            </div>
                                            <p className="text-sm text-secondary">
                                                <strong className="text-foreground">Late Payment:</strong> 2% monthly fee applies to overdue invoices
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif mb-6 text-foreground">Intellectual Property</h2>
                            <div className="bg-muted p-8 rounded-2xl">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                                        <h3 className="text-lg font-serif mb-4 text-primary">Client Rights</h3>
                                        <ul className="space-y-2 text-secondary text-sm">
                                            <li>• Full ownership of final deliverables upon payment</li>
                                            <li>• Right to use, modify, and distribute completed work</li>
                                            <li>• Exclusive rights to approved designs</li>
                                            <li>• Source files provided upon project completion</li>
                                        </ul>
                                    </div>
                                    <div className="bg-accent/5 p-6 rounded-xl border border-accent/10">
                                        <h3 className="text-lg font-serif mb-4 text-accent">Our Rights</h3>
                                        <ul className="space-y-2 text-secondary text-sm">
                                            <li>• Portfolio and promotional usage rights</li>
                                            <li>• Credit attribution in case studies</li>
                                            <li>• Retention of working files and process documentation</li>
                                            <li>• Right to showcase work in professional contexts</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-6 p-6 bg-background rounded-xl border border-border">
                                    <h4 className="font-serif text-foreground mb-3">Important Notes:</h4>
                                    <p className="text-secondary text-sm leading-relaxed">
                                        Ownership transfer occurs only upon full payment. Until then, all work remains the property of Stoeva Gradev.
                                        Third-party assets (stock photos, fonts, etc.) may require separate licensing by the client.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif mb-6 text-foreground">Revisions and Changes</h2>
                            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/10">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-2xl font-bold text-white">3</span>
                                        </div>
                                        <h3 className="font-serif text-foreground mb-2">Included Revisions</h3>
                                        <p className="text-sm text-secondary">Three rounds of revisions included in base price</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                            </svg>
                                        </div>
                                        <h3 className="font-serif text-foreground mb-2">Additional Revisions</h3>
                                        <p className="text-sm text-secondary">Charged at hourly rate for revisions beyond included amount</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                            </svg>
                                        </div>
                                        <h3 className="font-serif text-foreground mb-2">Scope Changes</h3>
                                        <p className="text-sm text-secondary">Major scope changes require new project agreement</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif mb-6 text-foreground">Limitation of Liability</h2>
                            <div className="bg-muted p-8 rounded-2xl">
                                <p className="text-secondary leading-relaxed mb-6">
                                    While we strive for excellence in all our work, the following limitations apply to our liability:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="bg-background p-6 rounded-xl border border-border">
                                        <h4 className="font-serif text-foreground mb-3">Maximum Liability</h4>
                                        <p className="text-secondary text-sm leading-relaxed">
                                            Our total liability for any claim shall not exceed the total amount paid by the client for the specific project in question.
                                        </p>
                                    </div>
                                    <div className="bg-background p-6 rounded-xl border border-border">
                                        <h4 className="font-serif text-foreground mb-3">Excluded Damages</h4>
                                        <p className="text-secondary text-sm leading-relaxed">
                                            We are not liable for indirect, incidental, special, or consequential damages, including lost profits or business interruption.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-6 p-6 bg-primary/5 rounded-xl border border-primary/10">
                                    <h4 className="font-serif text-primary mb-3">Client Responsibility</h4>
                                    <p className="text-secondary text-sm leading-relaxed">
                                        Clients are responsible for backing up their data and ensuring compliance with all applicable laws and regulations
                                        regarding the use of our deliverables.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif mb-6 text-foreground">Project Termination</h2>
                            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-primary/10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-serif mb-4 text-primary">By Client</h3>
                                        <ul className="space-y-3 text-secondary">
                                            <li className="flex items-start space-x-3">
                                                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                                <span>Client may terminate project with 7 days written notice</span>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                                <span>Payment due for all work completed to date</span>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                                <span>Deposit is non-refundable</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-serif mb-4 text-accent">By Stoeva Gradev</h3>
                                        <ul className="space-y-3 text-secondary">
                                            <li className="flex items-start space-x-3">
                                                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                                                <span>We may terminate for non-payment or breach of terms</span>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                                                <span>Client receives work completed to termination date</span>
                                            </li>
                                            <li className="flex items-start space-x-3">
                                                <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                                                <span>Outstanding payments remain due</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif mb-6 text-foreground">Questions About These Terms?</h2>
                            <div className="bg-muted/50 p-8 rounded-2xl border border-primary/20">
                                <p className="text-secondary leading-relaxed mb-6">
                                    If you have any questions about these Terms of Service, please don&apos;t hesitate to contact us:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-foreground">Email</p>
                                            <p className="text-secondary">legal@stoevagradev.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-medium text-foreground">Address</p>
                                            <p className="text-secondary">Sofia, Bulgaria</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-primary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4 text-white">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Now that you understand our terms, let&apos;s create something amazing together.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-all duration-300 hover-lift"
                        >
                            Get Started
                        </Link>
                        <Link
                            href="/"
                            className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
