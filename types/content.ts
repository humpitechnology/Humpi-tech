export type IconName =
  | "code"
  | "globe"
  | "smartphone"
  | "database"
  | "cloud"
  | "server"
  | "shield"
  | "search"
  | "megaphone"
  | "bot"
  | "headphones"
  | "briefcase"
  | "chart"
  | "sparkles"
  | "workflow"
  | "rocket";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: IconName;
  features: string[];
  benefits: string[];
};

export type Industry = {
  slug: string;
  title: string;
  description: string;
  useCases: string[];
};

export type PortfolioProject = {
  slug: string;
  title: string;
  client: string;
  category: string;
  duration: string;
  image: string;
  description: string;
  technologies: string[];
  results: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
  content: string[];
};

export type Testimonial = {
  name: string;
  company: string;
  designation: string;
  image: string;
  rating: number;
  review: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Job = {
  title: string;
  location: string;
  type: string;
  experience: string;
  description: string;
};

export type Product = {
  title: string;
  category: string;
  image: string;
  description: string;
  price: string;
  features: string[];
  status: "Active" | "Draft" | "Archived";
};
