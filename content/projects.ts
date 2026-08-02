export interface Project {
  slug: string;

  title: string;

  description: string;

  technologies: string[];

  githubUrl?: string;

  demo?: string;

  pdf?: string;

  image?: string;

  featured: boolean;

  source: "github" | "local";

  categories: string[];
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
    source: "github",
    categories: [
      "Web",
      "Frontend",
    ],
  },

  {
    slug: "calorie-compass",
    title: "Calorie Compass",
    description:
      "A responsive calorie counting application designed to simplify nutrition tracking with an intuitive interface and real-time calorie calculations.",
    technologies: ["React", "TypeScript"],
    githubUrl: "https://github.com/harrywardy-cmd/calorie-compass",
    featured: true,
    source: "github",
    categories: [
      "Web",
      "Frontend",
      "React",
    ],
  },
  {
    slug: "crud-app",
    title: "CRUD App",
    description:
      "Full-stack CRUD application demonstrating database operations.",
    technologies: ["React", "Node.js"],
    githubUrl: "https://github.com/harrywardy-cmd/CRUD-App",
    featured: false,
    source: "github",
    categories: [
      "Web",
      "Full Stack",
    ],
  },
  {
    slug: "lazuli-web",
    title: "Lazuli Web",
    description:
      "A responsive eCommerce website developed for Lazuli, providing an intuitive shopping experience with modern web technologies.",
    technologies: ["React", "JavaScript"],
    githubUrl: "https://github.com/harrywardy-cmd/lazuli-web",
    featured: false,
    source: "github",
    categories: [
      "Web",
      "Frontend",
    ],
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A responsive personal portfolio website built with HTML, CSS, and JavaScript to showcase my projects, technical skills, and software development journey.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/harrywardy-cmd/Portfolio-Website",
    featured: false,
    source: "github",
    categories: [
      "Web",
      "Frontend",
    ],
  },
  {
    slug: "python-calculator",
    title: "Python Calculator",
    description:
      "A desktop calculator application built with Python, demonstrating GUI development, event-driven programming, and arithmetic operations through an intuitive user interface.",
    technologies: ["Python"],
    githubUrl: "https://github.com/harrywardy-cmd/Python-Calculator",
    featured: false,
    source: "github",
    categories: [
      "Python",
      "Desktop",
    ],
  },
  {
    slug: "python-api",
    title: "Python API",
    description:
      "A RESTful API built with Python, demonstrating backend development, HTTP request handling, and structured API design for modern web applications.",
    technologies: ["Python"],
    githubUrl: "https://github.com/harrywardy-cmd/Python-API",
    featured: false,
    source: "github",
    categories: [
      "Python",
      "Backend",
    ],
  },
  {
    slug: "python-web-scraping-tool",
    title: "Python Web Scraping Tool",
    description:
      "A Python web scraping application that automates data extraction from websites using BeautifulSoup and Requests, demonstrating data collection, HTML parsing, and automation.",
    technologies: ["Python", "BeautifulSoup"],
    githubUrl:
      "https://github.com/harrywardy-cmd/Python-Web-Scraping-Tool",
    featured: false,
    source: "github",
    categories: [
      "Python",
      "Automation",
    ],
  },
  {
    slug: "ai-python-snake-game",
    title: "AI Python Snake Game",
    description:
      "A Python-based Snake game featuring AI-controlled gameplay, demonstrating game development, pathfinding, and algorithmic decision-making using Pygame.",
    technologies: ["Python"],
    githubUrl:
      "https://github.com/harrywardy-cmd/AI-PYTHON-SNAKE-GAME",
    featured: false,
    source: "github",
    categories: [
      "Python",
      "AI",
      "Game",
    ],
  },
  {
    slug: "command-line-interface",
    title: "Command Line Interface",
    description:
      "A command-line application developed as part of the BrightSpark Labs Software Engineering Assessment, showcasing clean code, user interaction, and problem-solving through a terminal-based interface.",
    technologies: ["Python"],
    githubUrl:
      "https://github.com/harrywardy-cmd/command-line-interface",
    featured: false,
    source: "github",
    categories: [
      "Python",
      "CLI",
    ],
  },
  {
    slug: "algorithms-datastructures",
    title: "Algorithms & Data Structures",
    description:
      "Collection of algorithms and data structure implementations with 1,100+ LeetCode and NeetCode solutions covering arrays, trees, graphs, dynamic programming, and system design fundamentals.",
    technologies: ["Python", "Algorithms", "Data Structures"],
    githubUrl:
      "https://github.com/harrywardy-cmd/algorithms-datastructures",
    featured: true,
    source: "github",
    categories: [
      "Algorithms",
      "Python",
      "Interview Prep",
    ],
  },
  {
    slug: "neetcode-submissions-s5rzyvb1",
    title: "NeetCode Submissions",
    description:
      "A curated collection of NeetCode and LeetCode solutions in Python, documenting my journey through coding interview preparation, data structures, algorithms, and problem-solving.",
    technologies: ["Python"],
    githubUrl:
      "https://github.com/harrywardy-cmd/neetcode-submissions-s5rzyvb1",
    featured: false,
    source: "github",
    categories: [
      "Algorithms",
      "Python",
      "Interview Prep",
    ],
  },

  {
    slug: "serverless-event-driven-architecture",
    title: "Serverless Event-Driven Architecture",
    description:
      "Designed a production-ready serverless architecture for a cloud-based photo album application using AWS managed services.",
    technologies: [
      "AWS",
      "AWS Lambda",
      "API Gateway",
      "Amazon S3",
      "DynamoDB",
      "CloudFront",
    ],
    pdf: "/documents/Serverless_Event-driven Architectural Design Report.pdf",
    featured: false,
    source: "local",
    categories: [
      "Cloud",
      "AWS",
      "Architecture",
      "University",
    ],

  },
  {
    slug: "inference-engine",
    title: "AI Inference Engine",
    description:
      "An artificial intelligence inference engine implementing multiple propositional logic algorithms.",
    technologies: [
      "Python",
      "Artificial Intelligence",
      "Propositional Logic",
    ],
    source: "local",
    pdf: "/documents/Assignment 2 – Inference Engine for Propositional Logicnt.pdf",
    featured: false,
    categories: [
      "AI",
      "Python",
      "University",
    ],
  },

  {
    slug: "apollos-gamble",
    title: "Apollo's Gamble",
    description:
      "A strategy tabletop card game inspired by Greek mythology, featuring prediction-based gameplay, dynamic narratives, and competitive multiplayer mechanics.",
    technologies: [
      "Game Design",
      "Systems Design",
      "Prototyping",
    ],
    source: "local",
    pdf: "/documents/Apollo's Gamble Game Design Document.pdf",
    featured: false,
    categories: [
      "Game Design",
      "University",
    ],
  },


];