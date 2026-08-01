export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "Developer Portfolio",
    description:
      "Modern developer portfolio built with Next.js, TypeScript and Tailwind CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/harrywardy-cmd/portfolio",
    featured: true,
  },
  {
    slug: "calorie-compass",
    title: "Calorie Compass",
    description:
      "Nutrition and calorie tracking application.",
    technologies: ["React", "TypeScript"],
    githubUrl: "https://github.com/harrywardy-cmd/calorie-compass",
    featured: true,
  },
  {
    slug: "crud-app",
    title: "CRUD App",
    description:
      "Full-stack CRUD application demonstrating database operations.",
    technologies: ["React", "Node.js"],
    githubUrl: "https://github.com/harrywardy-cmd/CRUD-App",
    featured: true,
  },
  {
    slug: "lazuli-web",
    title: "Lazuli Web",
    description:
      "Modern responsive web application.",
    technologies: ["React", "JavaScript"],
    githubUrl: "https://github.com/harrywardy-cmd/lazuli-web",
    featured: true,
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "Previous generation personal portfolio website.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/harrywardy-cmd/Portfolio-Website",
    featured: false,
  },
  {
    slug: "python-calculator",
    title: "Python Calculator",
    description:
      "Desktop calculator built using Python.",
    technologies: ["Python"],
    githubUrl: "https://github.com/harrywardy-cmd/Python-Calculator",
    featured: false,
  },
  {
    slug: "python-api",
    title: "Python API",
    description:
      "REST API built with Python.",
    technologies: ["Python"],
    githubUrl: "https://github.com/harrywardy-cmd/Python-API",
    featured: false,
  },
  {
    slug: "python-web-scraping-tool",
    title: "Python Web Scraping Tool",
    description:
      "Automated web scraping application using Python.",
    technologies: ["Python", "BeautifulSoup"],
    githubUrl: "https://github.com/harrywardy-cmd/Python-Web-Scraping-Tool",
    featured: false,
  },
  {
    slug: "ai-python-snake-game",
    title: "AI Python Snake Game",
    description:
      "Snake game featuring AI gameplay.",
    technologies: ["Python"],
    githubUrl: "https://github.com/harrywardy-cmd/AI-PYTHON-SNAKE-GAME",
    featured: false,
  },
  {
    slug: "command-line-interface",
    title: "Command Line Interface",
    description:
      "Command-line application demonstrating terminal interactions.",
    technologies: ["Python"],
    githubUrl: "https://github.com/harrywardy-cmd/command-line-interface",
    featured: false,
  },
  {
    slug: "algorithms-datastructures",
    title: "Algorithms & Data Structures",
    description:
      "Collection of algorithms and data structure implementations.",
    technologies: ["Python"],
    githubUrl: "https://github.com/harrywardy-cmd/algorithms-datastructures",
    featured: false,
  },
  {
    slug: "neetcode-submissions-s5rzyvb1",
    title: "NeetCode Submissions (1)",
    description:
      "Solutions to NeetCode and LeetCode problems.",
    technologies: ["Python"],
    githubUrl: "https://github.com/harrywardy-cmd/neetcode-submissions-s5rzyvb1",
    featured: false,
  },
  {
    slug: "neetcode-submissions-h7zt2hks",
    title: "NeetCode Submissions (2)",
    description:
      "Additional NeetCode and LeetCode solutions.",
    technologies: ["Python"],
    githubUrl: "https://github.com/harrywardy-cmd/neetcode-submissions-h7zt2hks",
    featured: false,
  },
];