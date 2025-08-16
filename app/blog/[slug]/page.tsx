"use client";

import Link from "next/link";
import { notFound } from "next/navigation";

// This would typically come from a CMS or database
const blogPosts = [
    {
        id: 1,
        title: "The Future of Brand Identity Design",
        slug: "future-of-brand-identity-design",
        excerpt: "Exploring emerging trends and technologies that are reshaping how we approach brand identity design in the digital age.",
        content: `
      <p>Brand identity design is evolving at an unprecedented pace, driven by technological advances and changing consumer expectations. As we look toward the future, several key trends are emerging that will fundamentally reshape how we approach brand identity design.</p>

      <h2>The Rise of Dynamic Identities</h2>
      <p>Gone are the days when a brand identity consisted of a single, static logo. Today's most innovative brands are embracing dynamic identity systems that can adapt and evolve across different contexts and platforms. These flexible systems maintain brand consistency while allowing for creative expression and contextual relevance.</p>

      <h2>Technology-Driven Design</h2>
      <p>Artificial intelligence and machine learning are beginning to play significant roles in brand identity design. From automated logo generation to data-driven color palette selection, technology is becoming an invaluable tool for designers. However, the human touch remains irreplaceable when it comes to strategic thinking and emotional connection.</p>

      <h2>Sustainability and Purpose</h2>
      <p>Modern consumers increasingly expect brands to stand for something beyond profit. This shift is driving the creation of identity systems that communicate values, sustainability efforts, and social responsibility. Designers must now consider not just how a brand looks, but what it represents.</p>

      <h2>Cross-Platform Consistency</h2>
      <p>With the proliferation of digital touchpoints, maintaining brand consistency across platforms has become more challenging and more important than ever. Future brand identity systems must be designed with flexibility in mind, ensuring they work seamlessly across everything from social media to augmented reality experiences.</p>

      <p>The future of brand identity design is bright, filled with opportunities for innovation and meaningful connection. As designers, our role is to embrace these changes while never losing sight of the fundamental principles that make great design timeless.</p>
    `,
        author: "Stoeva Gradev",
        date: "2024-01-15",
        readTime: "5 min read",
        category: "Branding",
        tags: ["Design", "Branding", "Trends"],
        image: "/api/placeholder/800/400",
        featured: true
    },
    {
        id: 2,
        title: "10 Web Design Principles for Better User Experience",
        slug: "web-design-principles-user-experience",
        excerpt: "Essential principles every designer should know to create websites that not only look great but also provide exceptional user experiences.",
        content: `
      <p>Creating exceptional user experiences requires more than just beautiful visuals. It demands a deep understanding of user behavior, accessibility principles, and design psychology. Here are ten fundamental principles that every web designer should master.</p>

      <h2>1. Clarity is King</h2>
      <p>Your website should communicate its purpose within seconds of a user landing on it. Clear navigation, obvious calls-to-action, and intuitive layout are essential for user comprehension.</p>

      <h2>2. Consistency Builds Trust</h2>
      <p>Consistent design patterns, color schemes, and typography create a cohesive experience that users can rely on. When users know what to expect, they feel more confident navigating your site.</p>

      <h2>3. Mobile-First Approach</h2>
      <p>With mobile traffic dominating web usage, designing for mobile devices first ensures your site works well on all screen sizes. This approach forces you to prioritize content and functionality.</p>

      <h2>4. Loading Speed Matters</h2>
      <p>Users expect fast-loading websites. Optimize images, minimize code, and use efficient hosting to ensure your site loads quickly across all devices and connection speeds.</p>

      <h2>5. Accessibility for All</h2>
      <p>Design with accessibility in mind from the start. Use proper contrast ratios, alt text for images, and keyboard navigation support to ensure your site is usable by everyone.</p>

      <p>These principles form the foundation of great web design. By implementing them consistently, you'll create websites that not only look beautiful but also provide exceptional user experiences that drive results.</p>
    `,
        author: "Stoeva Gradev",
        date: "2024-01-10",
        readTime: "8 min read",
        category: "Web Design",
        tags: ["UX", "Web Design", "Principles"],
        image: "/api/placeholder/800/400",
        featured: true
    },
    {
        id: 3,
        title: "Color Psychology in Print Design",
        slug: "color-psychology-print-design",
        excerpt: "Understanding how colors influence emotions and decision-making in print materials, and how to use this knowledge effectively.",
        content: `
      <p>Color is one of the most powerful tools in a designer's arsenal, especially in print design where the tactile experience amplifies visual impact. Understanding color psychology can dramatically improve the effectiveness of your print materials.</p>

      <h2>The Science Behind Color Perception</h2>
      <p>Colors trigger emotional and psychological responses that are both universal and culturally specific. Red can evoke passion and urgency, while blue often conveys trust and stability. These associations aren't arbitrary—they're rooted in human psychology and cultural conditioning.</p>

      <h2>Strategic Color Application</h2>
      <p>In print design, color choices should align with your message and audience. A financial services brochure might use blues and grays to convey trustworthiness, while a children's book might employ bright, playful colors to capture attention and spark imagination.</p>

      <h2>Print-Specific Considerations</h2>
      <p>Print design presents unique challenges and opportunities for color use. Unlike digital displays, print colors are created through ink combinations, which can produce rich, saturated results that feel more permanent and substantial than their digital counterparts.</p>

      <p>Mastering color psychology in print design requires both technical knowledge and intuitive understanding of human behavior. When used strategically, color becomes a powerful communication tool that enhances your message and connects with your audience on an emotional level.</p>
    `,
        author: "Stoeva Gradev",
        date: "2024-01-05",
        readTime: "6 min read",
        category: "Print Design",
        tags: ["Color", "Psychology", "Print"],
        image: "/api/placeholder/800/400",
        featured: false
    }
];

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export default function BlogPost({ params }: BlogPostPageProps) {
    const post = blogPosts.find(p => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    // Get related posts (same category, excluding current post)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

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
            {/* Hero Section */}
            <section className="py-20 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <ol className="flex items-center space-x-2 text-sm text-secondary">
                            <li>
                                <Link href="/" className="hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>/</li>
                            <li>
                                <Link href="/blog" className="hover:text-primary transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>/</li>
                            <li className="text-foreground">{post.title}</li>
                        </ol>
                    </nav>

                    {/* Article Header */}
                    <div className="text-center">
                        <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                            {post.category}
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-foreground leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary mb-8 leading-relaxed">
                            {post.excerpt}
                        </p>
                        <div className="flex items-center justify-center space-x-6 text-secondary">
                            <div className="flex items-center space-x-2">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                                    {post.author.charAt(0)}
                                </div>
                                <span>By {post.author}</span>
                            </div>
                            <span>•</span>
                            <span>{formatDate(post.date)}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="py-8 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="aspect-video bg-muted rounded-2xl overflow-hidden shadow-xl">
                        <div className="w-full h-full bg-muted flex items-center justify-center">
                            <div className="text-center">
                                <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p className="text-secondary">Featured Image</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-16 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <div
                            className="text-secondary leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                            style={{
                                fontSize: '1.125rem',
                                lineHeight: '1.75'
                            }}
                        />
                    </div>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-200 dark:border-slate-700">
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-block bg-muted text-secondary px-3 py-1 rounded-full text-sm hover:bg-primary hover:text-white transition-colors cursor-pointer"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Share Section */}
                    <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-700">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-foreground">Share this article</h3>
                            <div className="flex space-x-4">
                                <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </button>
                                <button className="w-10 h-10 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                                    </svg>
                                </button>
                                <button className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-20 bg-muted">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">
                                Related Articles
                            </h2>
                            <p className="text-xl text-secondary">
                                More insights from the same category
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    href={`/blog/${relatedPost.slug}`}
                                    className="group block bg-background rounded-2xl overflow-hidden hover-lift transition-all duration-300 hover:shadow-xl"
                                >
                                    <div className="aspect-video bg-muted relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/20 z-10" />
                                        <div className="absolute bottom-4 left-4 z-20">
                                            <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                                {relatedPost.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center text-sm text-secondary mb-3">
                                            <span>{formatDate(relatedPost.date)}</span>
                                            <span className="mx-2">•</span>
                                            <span>{relatedPost.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-secondary leading-relaxed mb-4">
                                            {relatedPost.excerpt}
                                        </p>
                                        <span className="text-primary font-medium group-hover:translate-x-1 transition-transform">
                                            Read More →
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
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
                            href="/blog"
                            className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-colors hover-lift inline-block text-lg font-semibold"
                        >
                            Back to Blog
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
} 