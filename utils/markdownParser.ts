import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { marked } from 'marked';

import type { BlogPost, BlogPostMetadata } from '@/types/blog';

// Configure marked for better HTML output
marked.setOptions({
  breaks: true,
  gfm: true,
});

/**
 * Get the posts directory path
 */
const getPostsDirectory = () => {
  return path.join(process.cwd(), 'content', 'posts');
};

/**
 * Get all post directories (each post should be in its own folder with README.md)
 */
export function getAllPostSlugs(): string[] {
  const postsDirectory = getPostsDirectory();

  try {
    const entries = fs.readdirSync(postsDirectory, { withFileTypes: true });
    return entries.filter(entry => entry.isDirectory()).map(entry => entry.name);
  } catch {
    console.warn('Posts directory not found, returning empty array');
    return [];
  }
}

/**
 * Read and parse a single blog post
 */
export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const postsDirectory = getPostsDirectory();
    const postPath = path.join(postsDirectory, slug, 'README.md');

    if (!fs.existsSync(postPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(postPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Parse markdown to HTML
    const htmlContent = marked.parse(content, { async: false }) as string;

    // Validate required frontmatter fields
    const metadata = data as BlogPostMetadata;
    if (!metadata.title || !metadata.excerpt || !metadata.date) {
      throw new Error(`Invalid frontmatter in ${slug}/README.md`);
    }

    return {
      id: slug,
      slug,
      title: metadata.title,
      excerpt: metadata.excerpt,
      content: htmlContent,
      author: metadata.author || 'Stoeva Gradev',
      date: metadata.date,
      readTime: metadata.readTime || '5 min read',
      category: metadata.category || 'Design',
      tags: metadata.tags || [],
      image: metadata.image,
      featured: metadata.featured || false,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * Get all blog posts
 */
export function getAllPosts(): BlogPost[] {
  const slugs = getAllPostSlugs();
  const posts = slugs.map(slug => getPostBySlug(slug)).filter(post => post !== null) as BlogPost[];

  // Sort posts by date (newest first)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts();
  if (category === 'All') {
    return allPosts;
  }
  return allPosts.filter(post => post.category === category);
}

/**
 * Get featured posts
 */
export function getFeaturedPosts(): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.featured);
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = new Set(['All']);

  allPosts.forEach(post => {
    categories.add(post.category);
  });

  return Array.from(categories);
}

/**
 * Get related posts by category (excluding the current post)
 */
export function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit: number = 3
): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts
    .filter(post => post.category === category && post.slug !== currentSlug)
    .slice(0, limit);
}

/**
 * Calculate estimated read time from content
 */
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}
