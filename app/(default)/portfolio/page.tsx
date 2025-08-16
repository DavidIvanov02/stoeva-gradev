import PortfolioPageContent from '@/app/(default)/portfolio/PortfolioPageContent';
import { getAllProjects, getAllProjectCategories } from '@/utils/markdownParser';

export default function Portfolio() {
  const allProjects = getAllProjects();
  const categories = getAllProjectCategories();

  return <PortfolioPageContent initialProjects={allProjects} initialCategories={categories} />;
}
