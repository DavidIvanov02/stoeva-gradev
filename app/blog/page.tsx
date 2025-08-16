"use client";

import Link from "next/link";
import { useState } from "react";

const blogPosts = [
    {
        id: 1,
        title: "The Future of Brand Identity Design",
        slug: "future-of-brand-identity-design",
        excerpt: "Exploring emerging trends and technologies that are reshaping how we approach brand identity design in the digital age.",
        content: "Full article content here...",
        author: "Stoeva Gradev",
        date: "2024-01-15",
        readTime: "5 min read",
        category: "Branding",
        tags: ["Design", "Branding", "Trends"],
        image: "/api/placeholder/600/400",
        featured: true
    },
    {
        id: 2,
        title: "10 Web Design Principles for Better User Experience",
        slug: "web-design-principles-user-experience",
        excerpt: "Essential principles every designer should know to create websites that not only look great but also provide exceptional user experiences.",
        content: "Full article content here...",
        author: "Stoeva Gradev",
        date: "2024-01-10",
        readTime: "8 min read",
        category: "Web Design",
        tags: ["UX", "Web Design", "Principles"],
        image: "/api/placeholder/600/400",
        featured: true
    },
    {
        id: 3,
        title: "Color Psychology in Print Design",
        slug: "color-psychology-print-design",
        excerpt: "Understanding how colors influence emotions and decision-making in print materials, and how to use this knowledge effectively.",
        content: "Full article content here...",
        author: "Stoeva Gradev",
        date: "2024-01-05",
        readTime: "6 min read",
        category: "Print Design",
        tags: ["Color", "Psychology", "Print"],
        image: "/api/placeholder/600/400",
        featured: false
    },
    {
        id: 4,
        title: "Building a Cohesive Visual Identity",
        slug: "building-cohesive-visual-identity",
        excerpt: "Step-by-step guide to creating a visual identity that works across all touchpoints and maintains consistency.",
        content: "Full article content here...",
        author: "Stoeva Gradev",
        date: "2023-12-28",
        readTime: "7 min read",
        category: "Branding",
        tags: ["Identity", "Branding", "Strategy"],
        image: "/api/placeholder/600/400",
        featured: false
    },
    {
        id: 5,
        title: "Responsive Design Best Practices",
        slug: "responsive-design-best-practices",
        excerpt: "Modern techniques and strategies for creating websites that look and function perfectly on any device.",
        content: "Full article content here...",
        author: "Stoeva Gradev",
        date: "2023-12-20",
        readTime: "9 min read",
        category: "Web Design",
        tags: ["Responsive", "Mobile", "CSS"],
        image: "/api/placeholder/600/400",
        featured: false
    },
    {
        id: 6,
        title: "Typography Trends for 2024",
        slug: "typography-trends-2024",
        excerpt: "Discover the latest typography trends that are defining modern design and how to implement them in your projects.",
        content: "Full article content here...",
        author: "Stoeva Gradev",
        date: "2023-12-15",
        readTime: "4 min read",
        category: "Design Trends",
        tags: ["Typography", "Trends", "2024"],
        image: "/api/placeholder/600/400",
        featured: false
    }
];

const categories = ["All", "Branding", "Web Design", "Print Design", "Design Trends"];

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredPosts = activeCategory === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeCategory);

    const featuredPosts = blogPosts.filter(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen bg-background">
            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-primary">
                        Design Blog
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto">
                        Insights, trends, and inspiration from the world of creative design
                    </p>
                </div>
            </section>

            {featuredPosts.length > 0 && (
                <section className="py-20 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                                Featured Articles
                            </h2>
                            <p className="text-xl text-secondary">
                                Our most popular and insightful posts
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {featuredPosts.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.slug}`}
                                    className="group block bg-muted rounded-2xl overflow-hidden hover-lift transition-all duration-300 hover:shadow-xl"
                                >
                                    <div className="aspect-video bg-muted relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/20 z-10" />
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center text-sm text-secondary mb-4">
                                            <span>{formatDate(post.date)}</span>
                                            <span className="mx-2">•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-secondary leading-relaxed mb-6">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-secondary">By {post.author}</span>
                                            <span className="text-primary font-medium group-hover:translate-x-1 transition-transform">
                                                Read More →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="py-8 bg-muted">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'bg-background text-secondary hover:bg-primary hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {regularPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {regularPosts.map((post) => (
                                <Link
                                    key={post.id}
                                    href={`/blog/${post.slug}`}
                                    className="group block bg-muted rounded-2xl overflow-hidden hover-lift transition-all duration-300 hover:shadow-xl"
                                >
                                    <div className="aspect-video bg-muted relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/20 z-10" />
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center text-sm text-secondary mb-3">
                                            <span>{formatDate(post.date)}</span>
                                            <span className="mx-2">•</span>
                                            <span>{post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-secondary leading-relaxed mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-secondary">By {post.author}</span>
                                            <span className="text-primary font-medium group-hover:translate-x-1 transition-transform">
                                                Read More →
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-serif text-foreground mb-4">No posts found</h3>
                            <p className="text-secondary">
                                No articles found in the selected category. Try selecting a different category.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <section className="py-20 bg-muted">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="bg-background p-8 md:p-12 rounded-3xl shadow-xl">
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                            Stay Updated
                        </h2>
                        <p className="text-xl text-secondary mb-8">
                            Subscribe to our newsletter and never miss our latest design insights and tips.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 rounded-xl border border-gray-200 dark:border-slate-700 bg-background text-foreground placeholder-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <button className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-blue-600 transition-colors font-semibold whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-secondary mb-8">
                        Let&apos;s bring your creative vision to life with our expert design services.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-primary text-white px-8 py-4 rounded-full hover:bg-blue-600 transition-colors hover-lift inline-block text-lg font-semibold"
                        >
                            Get In Touch
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
