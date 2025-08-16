export default function About() {
    return (
        <div className="min-h-screen bg-background">
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-primary">
                        About Our Studio
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto">
                        Passionate designers creating exceptional visual experiences since 2019
                    </p>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                                Our Story
                            </h2>
                            <p className="text-lg text-secondary mb-6">
                                We are a creative design studio dedicated to crafting exceptional visual experiences.
                                Our team combines artistic vision with strategic thinking to deliver designs that not only
                                look beautiful but also achieve your business objectives.
                            </p>
                            <p className="text-lg text-secondary mb-8">
                                With years of experience in the industry, we specialize in creating cohesive brand
                                identities, engaging digital experiences, and memorable visual communications that
                                resonate with your target audience.
                            </p>
                            <p className="text-lg text-secondary">
                                Every project we undertake is approached with fresh eyes and innovative thinking.
                                We believe that great design is not just about aesthetics—it&apos;s about solving problems,
                                telling stories, and creating meaningful connections between brands and their audiences.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="w-full h-96 bg-muted rounded-2xl flex items-center justify-center">
                                <div className="text-secondary text-lg">Studio Image</div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">50+</div>
                            <div className="text-secondary">Projects Completed</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">5+</div>
                            <div className="text-secondary">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">25+</div>
                            <div className="text-secondary">Happy Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">3</div>
                            <div className="text-secondary">Team Members</div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-foreground text-center">
                            Our Values
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary rounded-lg mb-6 mx-auto flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-serif mb-4 text-foreground">Innovation</h3>
                                <p className="text-secondary">
                                    We constantly push boundaries and explore new creative possibilities to deliver cutting-edge solutions.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-accent rounded-lg mb-6 mx-auto flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-serif mb-4 text-foreground">Passion</h3>
                                <p className="text-secondary">
                                    Every project is infused with our genuine love for design and commitment to excellence.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary rounded-lg mb-6 mx-auto flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-serif mb-4 text-foreground">Collaboration</h3>
                                <p className="text-secondary">
                                    We work closely with our clients as partners to ensure their vision becomes reality.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-foreground text-center">
                            Our Process
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                                    1
                                </div>
                                <h3 className="text-xl font-serif mb-3 text-foreground">Discovery</h3>
                                <p className="text-secondary text-sm">
                                    We start by understanding your goals, target audience, and project requirements.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                                    2
                                </div>
                                <h3 className="text-xl font-serif mb-3 text-foreground">Strategy</h3>
                                <p className="text-secondary text-sm">
                                    We develop a comprehensive strategy that aligns with your business objectives.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                                    3
                                </div>
                                <h3 className="text-xl font-serif mb-3 text-foreground">Design</h3>
                                <p className="text-secondary text-sm">
                                    Our creative team brings your vision to life with innovative design solutions.
                                </p>
                            </div>

                            <div className="text-center">
                                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                                    4
                                </div>
                                <h3 className="text-xl font-serif mb-3 text-foreground">Delivery</h3>
                                <p className="text-secondary text-sm">
                                    We deliver polished, professional results that exceed your expectations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 