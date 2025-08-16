import { getAllPosts, getAllCategories } from '@/utils/markdownParser';

import BlogPageContent from './BlogPageContent';

export default function Blog() {
  const allPosts = getAllPosts();
  const categories = getAllCategories();

  return <BlogPageContent initialPosts={allPosts} initialCategories={categories} />;
}
