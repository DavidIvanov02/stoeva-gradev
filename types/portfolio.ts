export interface PortfolioProjectMetadata {
  title: string;
  description: string;
  category: string;
  tags?: string[];
  image?: string;
  featured?: boolean;
  client?: string;
  date?: string;
  duration?: string;
  technologies?: string[];
  results?: string[];
}

export interface PortfolioProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  tags: string[];
  image?: string;
  featured: boolean;
  client: string;
  date: string;
  duration: string;
  technologies: string[];
  results: string[];
}
