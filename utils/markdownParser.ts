import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { marked } from 'marked';

import type { BlogPost, BlogPostMetadata } from '@/types/blog';
import type { PortfolioProject, PortfolioProjectMetadata } from '@/types/portfolio';

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
 * Get the projects directory path
 */
const getProjectsDirectory = () => {
  return path.join(process.cwd(), 'content', 'projects');
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

/**
 * Get all project directories (each project should be in its own folder with README.md)
 */
export function getAllProjectSlugs(): string[] {
  const projectsDirectory = getProjectsDirectory();

  try {
    const entries = fs.readdirSync(projectsDirectory, { withFileTypes: true });
    return entries.filter(entry => entry.isDirectory()).map(entry => entry.name);
  } catch {
    console.warn('Projects directory not found, returning empty array');
    return [];
  }
}

/**
 * Read and parse a single portfolio project
 */
export function getProjectBySlug(slug: string): PortfolioProject | null {
  try {
    const projectsDirectory = getProjectsDirectory();
    const projectPath = path.join(projectsDirectory, slug, 'README.md');

    if (!fs.existsSync(projectPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(projectPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Parse markdown to HTML
    const htmlContent = marked.parse(content, { async: false }) as string;

    // Validate required frontmatter fields
    const metadata = data as PortfolioProjectMetadata;
    if (!metadata.title || !metadata.description || !metadata.category) {
      throw new Error(`Invalid frontmatter in ${slug}/README.md`);
    }

    return {
      id: slug,
      slug,
      title: metadata.title,
      description: metadata.description,
      content: htmlContent,
      category: metadata.category,
      tags: metadata.tags || [],
      image: metadata.image,
      featured: metadata.featured || false,
      client: metadata.client || 'Confidential',
      date: metadata.date || new Date().toISOString(),
      duration: metadata.duration || '2-4 weeks',
      technologies: metadata.technologies || [],
      results: metadata.results || [],
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

/**
 * Get all portfolio projects
 */
export function getAllProjects(): PortfolioProject[] {
  const slugs = getAllProjectSlugs();
  const projects = slugs.map(slug => getProjectBySlug(slug)).filter(project => project !== null) as PortfolioProject[];

  // Sort projects by date (newest first)
  return projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get projects by category
 */
export function getProjectsByCategory(category: string): PortfolioProject[] {
  const allProjects = getAllProjects();
  if (category === 'All') {
    return allProjects;
  }
  return allProjects.filter(project => project.category === category);
}

/**
 * Get all project categories
 */
export function getAllProjectCategories(): string[] {
  const allProjects = getAllProjects();
  const categories = [...new Set(allProjects.map(project => project.category))];
  return ['All', ...categories.sort()];
}
