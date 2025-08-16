import BlogPageContent from "./BlogPageContent";
import { getAllPosts, getAllCategories } from "@/utils/markdownParser";

export default function Blog() {
    const allPosts = getAllPosts();
    const categories = getAllCategories();

    return <BlogPageContent initialPosts={allPosts} initialCategories={categories} />;
}