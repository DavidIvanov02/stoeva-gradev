import BlogClient from "./BlogClient";
import { getAllPosts, getAllCategories } from "@/utils/markdownParser";

export default function Blog() {
    const allPosts = getAllPosts();
    const categories = getAllCategories();

    return <BlogClient initialPosts={allPosts} initialCategories={categories} />;
}