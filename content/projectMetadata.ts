export interface ProjectMetadata {
  title: string;
  image: string;
  technologies: string[];
  demo?: string;
  featured: boolean;
}

export const projectMetadata: Record<
  string,
  ProjectMetadata
> = {
  portfolio: {
    title: "Developer Portfolio",
    image: "/images/projects/portfolio.png",
    featured: true,
    demo: "https://your-domain.com",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GitHub API",
    ],
  },

  "calorie-compass": {
    title: "Calorie Compass",
    image: "/images/projects/calorie-compass.png",
    featured: true,
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Vite",
    ],
  },

  "algorithms-datastructures": {
    title: "Algorithms & Data Structures",
    image: "/images/projects/algorithms-datastructures.png",
    featured: true,
    technologies: [
      "Python",
      "Algorithms",
      "Data Structures",
      "LeetCode",
    ],
  },

  "crud-app": {
    title: "CRUD Application",
    image: "/images/projects/crud-app.png",
    featured: false,
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
    ],
  },

  "lazuli-web": {
    title: "Lazuli Web",
    image: "/images/projects/lazuli-web.png",
    featured: false,
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "React",
    ],
  },

  "portfolio-website": {
    title: "Portfolio Website",
    image: "/images/projects/portfolio-website.png",
    featured: false,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },

  "python-api": {
    title: "Python REST API",
    image: "/images/projects/python-api.png",
    featured: false,
    technologies: [
      "Python",
      "REST API",
      "FastAPI",
    ],
  },

  "python-web-scraping-tool": {
    title: "Web Scraping Tool",
    image: "/images/projects/python-web-scraping-tool.png",
    featured: false,
    technologies: [
      "Python",
      "BeautifulSoup",
      "Requests",
    ],
  },

  "ai-python-snake-game": {
    title: "AI Snake Game",
    image: "/images/projects/ai-python-snake-game.png",
    featured: false,
    technologies: [
      "Python",
      "Pygame",
      "AI",
    ],
  },

  "python-calculator": {
    title: "Python Calculator",
    image: "/images/projects/python-calculator.png",
    featured: false,
    technologies: [
      "Python",
      "Tkinter",
    ],
  },

  "command-line-interface": {
    title: "Command Line Interface",
    image: "/images/projects/command-line-interface.png",
    featured: false,
    technologies: [
      "Python",
      "CLI",
    ],
  },

  "neetcode-submissions-s5rzyvb1": {
    title: "NeetCode Submissions I",
    image: "/images/projects/neetcode-submissions-1.png",
    featured: false,
    technologies: [
      "Python",
      "LeetCode",
    ],
  },

  "neetcode-submissions-h7zt2hks": {
    title: "NeetCode Submissions II",
    image: "/images/projects/neetcode-submissions-2.png",
    featured: false,
    technologies: [
      "Python",
      "LeetCode",
    ],
  },
};