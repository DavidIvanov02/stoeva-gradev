"use client";

import Link from "next/link";
import { useState } from "react";

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO",
        company: "TechStart Inc.",
        image: "/api/placeholder/80/80",
        rating: 5,
        text: "Working with Stoeva Gradev was an absolute game-changer for our brand. Their creative vision and attention to detail transformed our entire visual identity. The team's professionalism and ability to understand our needs exceeded all expectations.",
        project: "Complete Brand Identity",
        category: "branding"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Marketing Director",
        company: "GreenLeaf Solutions",
        image: "/api/placeholder/80/80",
        rating: 5,
        text: "The website design they created for us is simply stunning. Not only does it look incredible, but it's also incredibly functional and user-friendly. Our conversion rates have increased by 40% since the launch.",
        project: "E-commerce Website",
        category: "web"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Founder",
        company: "Artisan Bakery",
        image: "/api/placeholder/80/80",
        rating: 5,
        text: "The print materials they designed for our bakery are absolutely beautiful. Every brochure, business card, and packaging design perfectly captures our artisanal brand. Customers constantly compliment our visual materials.",
        project: "Print Design Package",
        category: "print"
    },
    {
        id: 4,
        name: "David Thompson",
        role: "Product Manager",
        company: "InnovateTech",
        image: "/api/placeholder/80/80",
        rating: 5,
        text: "Their UI/UX design expertise is unmatched. They created an intuitive and visually appealing interface for our complex software platform. User engagement has improved dramatically since implementing their design.",
        project: "Software Interface Design",
        category: "web"
    },
    {
        id: 5,
        name: "Lisa Park",
        role: "Brand Manager",
        company: "Wellness Co.",
        image: "/api/placeholder/80/80",
        rating: 5,
        text: "From concept to execution, the team delivered exceptional results. Our new brand identity perfectly reflects our values and resonates with our target audience. The process was smooth and collaborative throughout.",
        project: "Brand Redesign",
        category: "branding"
    },
    {
        id: 6,
        name: "James Wilson",
        role: "Restaurant Owner",
        company: "Coastal Bistro",
        image: "/api/placeholder/80/80",
        rating: 5,
        text: "The menu design and restaurant branding they created elevated our entire dining experience. The cohesive visual identity across all touchpoints has significantly enhanced our brand perception and customer satisfaction.",
        project: "Restaurant Branding",
        category: "print"
    }
];

const stats = [
    { number: "150+", label: "Happy Clients", icon: "👥" },
    { number: "98%", label: "Satisfaction Rate", icon: "⭐" },
    { number: "5+", label: "Years Experience", icon: "🏆" },
    { number: "300+", label: "Projects Completed", icon: "🎯" }
];

export default function Testimonials() {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredTestimonials = activeFilter === "all"
        ? testimonials
        : testimonials.filter(testimonial => testimonial.category === activeFilter);

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <div className="min-h-screen bg-background">
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-primary">
                        Client Testimonials
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto">
                        Discover what our clients say about their experience working with us and the results we&apos;ve achieved together
                    </p>
                </div>
            </section>

            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl mb-2">{stat.icon}</div>
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                                <div className="text-secondary font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-8 bg-muted">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            { key: "all", label: "All Projects" },
                            { key: "branding", label: "Branding" },
                            { key: "web", label: "Web Design" },
                            { key: "print", label: "Print Design" }
                        ].map((filter) => (
                            <button
                                key={filter.key}
                                onClick={() => setActiveFilter(filter.key)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === filter.key
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-background text-secondary hover:bg-primary hover:text-white'
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredTestimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="bg-muted p-8 rounded-2xl hover-lift transition-all duration-300 hover:shadow-xl"
                            >
                                <div className="flex items-center mb-4">
                                    {renderStars(testimonial.rating)}
                                </div>

                                <blockquote className="text-secondary mb-6 leading-relaxed">
                                    &ldquo;{testimonial.text}&rdquo;
                                </blockquote>

                                <div className="mb-6">
                                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                        {testimonial.project}
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                                        <div className="text-sm text-secondary">
                                            {testimonial.role} at {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-muted">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-background p-8 md:p-12 rounded-3xl shadow-xl">
                        <div className="flex justify-center mb-6">
                            {renderStars(5)}
                        </div>
                        <blockquote className="text-2xl md:text-3xl font-serif text-foreground mb-8 leading-relaxed">
                            &ldquo;Stoeva Gradev doesn&apos;t just create designs; they create experiences. Their work has fundamentally transformed how our customers perceive and interact with our brand.&rdquo;
                        </blockquote>
                        <div className="flex items-center justify-center">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                                A
                            </div>
                            <div className="text-left">
                                <div className="font-semibold text-foreground text-lg">Alexandra Martinez</div>
                                <div className="text-secondary">Creative Director, Design Studio Pro</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                            Why Clients Choose Us
                        </h2>
                        <p className="text-xl text-secondary max-w-3xl mx-auto">
                            Our commitment to excellence and client satisfaction sets us apart
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-serif mb-4 text-foreground">Fast Delivery</h3>
                            <p className="text-secondary">
                                We deliver high-quality results on time, every time, without compromising on excellence.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-serif mb-4 text-foreground">Personal Touch</h3>
                            <p className="text-secondary">
                                Every project receives personalized attention and care, ensuring unique solutions for each client.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center text-white mb-6 mx-auto">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-serif mb-4 text-foreground">Proven Results</h3>
                            <p className="text-secondary">
                                Our track record speaks for itself with measurable improvements in brand perception and engagement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-muted">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                        Ready to Join Our Success Stories?
                    </h2>
                    <p className="text-xl text-secondary mb-8">
                        Let&apos;s create something amazing together and add your testimonial to our growing collection.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-primary text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-colors hover-lift inline-block text-lg font-semibold"
                        >
                            Start Your Project
                        </Link>
                        <Link
                            href="/portfolio"
                            className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-colors hover-lift inline-block text-lg font-semibold"
                        >
                            View Our Work
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
