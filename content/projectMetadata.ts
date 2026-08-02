export interface ProjectMetadata {
  title: string;
  image?: string;

  technologies: string[];

  demo?: string;

  featured: boolean;

  overview: string;

  features: string[];

  challenges: string[];

  lessons: string[];
}

export const projectMetadata: Record<
  string,
  ProjectMetadata
> = {

  "crud-app": {
    title: "CRUD Application",
    featured: false,
    image: "/images/projects/mern.png",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
    ],
    overview:
      "A full-stack CRUD application built to demonstrate complete Create, Read, Update, and Delete functionality using a React frontend and Node.js backend with MongoDB persistence.",
    features: [
      "Complete CRUD operations",
      "RESTful API",
      "MongoDB database integration",
      "Responsive user interface",
    ],
    challenges: [
      "Designing REST endpoints",
      "Managing client and server state",
      "Connecting React with MongoDB",
    ],
    lessons: [
      "REST API design",
      "Database modelling",
      "Full-stack application architecture",
    ],
  },

  "lazuli-web": {
    title: "Lazuli Web",
    image: "/images/projects/lazuli-web.png",
    featured: true,
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
    ],
    overview:
      "A modern responsive website focused on clean design, accessibility, and performance using contemporary frontend technologies.",
    features: [
      "Responsive layouts",
      "Reusable UI components",
      "Modern styling",
      "Optimised user experience",
    ],
    challenges: [
      "Creating reusable layouts",
      "Responsive design",
      "Performance optimisation",
    ],
    lessons: [
      "Component composition",
      "Responsive design principles",
      "UI consistency",
    ],
  },

  "portfolio-website": {
    title: "Portfolio Website",
    featured: false,
    image: "/images/projects/portfolio-img.png",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    overview:
      "The first version of my personal portfolio that introduced me to responsive web development and personal branding.",
    features: [
      "Responsive design",
      "Project showcase",
      "Contact information",
    ],
    challenges: [
      "Learning frontend fundamentals",
      "Building responsive layouts",
    ],
    lessons: [
      "HTML semantics",
      "CSS layouts",
      "Vanilla JavaScript",
    ],
  },

  "python-api": {
    title: "Python REST API",
    featured: false,
    image: "/images/projects/python.png",
    technologies: [
      "Python",
      "FastAPI",
      "REST API",
    ],
    overview:
      "A REST API built with Python that exposes endpoints for managing application data while following modern backend development practices.",
    features: [
      "REST endpoints",
      "JSON responses",
      "Modular backend architecture",
    ],
    challenges: [
      "API design",
      "Route organisation",
      "Request validation",
    ],
    lessons: [
      "Backend architecture",
      "HTTP fundamentals",
      "RESTful design",
    ],
  },

  "python-web-scraping-tool": {
    title: "Python Web Scraping Tool",
    featured: false,
    image: "/images/projects/python.png",
    technologies: [
      "Python",
      "BeautifulSoup",
      "Requests",
    ],
    overview:
      "A Python application that extracts structured information from websites and demonstrates automation using web scraping techniques.",
    features: [
      "Automated scraping",
      "Data extraction",
      "Structured output",
    ],
    challenges: [
      "Parsing HTML",
      "Handling inconsistent page structures",
      "Building reusable scrapers",
    ],
    lessons: [
      "HTML parsing",
      "Automation",
      "Working with external data",
    ],
  },

  "ai-python-snake-game": {
    title: "AI Snake Game",
    featured: false,
    image: "/images/projects/snake-img.jpg",
    technologies: [
      "Python",
      "Pygame",
      "AI",
    ],
    overview:
      "A classic Snake game enhanced with AI gameplay to explore game development and algorithmic decision-making.",
    features: [
      "AI-controlled gameplay",
      "Real-time rendering",
      "Score tracking",
    ],
    challenges: [
      "Game loop implementation",
      "AI movement logic",
      "Collision detection",
    ],
    lessons: [
      "Game development",
      "State management",
      "Algorithmic thinking",
    ],
  },

  "python-calculator": {
    title: "Python Calculator",
    featured: false,
    image: "/images/projects/python-calculator.png",
    technologies: [
      "Python",
      "Tkinter",
    ],
    overview:
      "A desktop calculator application developed with Python to explore GUI development and event-driven programming.",
    features: [
      "Desktop interface",
      "Arithmetic operations",
      "Interactive controls",
    ],
    challenges: [
      "GUI layout",
      "Handling user input",
    ],
    lessons: [
      "Tkinter fundamentals",
      "Event-driven programming",
    ],
  },

  "command-line-interface": {
    title: "Command Line Interface",
    featured: false,
    image: "/images/projects/python.png",
    technologies: [
      "Python",
      "CLI",
    ],
    overview:
      "A command-line application demonstrating terminal interactions, user input handling, and Python scripting.",
    features: [
      "Interactive commands",
      "User input validation",
      "Modular command structure",
    ],
    challenges: [
      "Designing intuitive commands",
      "Input validation",
    ],
    lessons: [
      "CLI application design",
      "Python scripting",
    ],
  },

  "neetcode-submissions-s5rzyvb1": {
    title: "NeetCode Submissions I",
    featured: false,
    image: "/images/projects/neetcode.png",
    technologies: [
      "Python",
      "LeetCode",
      "Algorithms",
    ],
    overview:
      "A collection of solutions to NeetCode and LeetCode problems covering fundamental computer science concepts and coding interview preparation.",
    features: [
      "Documented solutions",
      "Multiple algorithm categories",
      "Regular updates",
    ],
    challenges: [
      "Maintaining consistency",
      "Learning new problem-solving techniques",
    ],
    lessons: [
      "Pattern recognition",
      "Data structures",
      "Algorithm optimisation",
    ],
  },

  "neetcode-submissions-h7zt2hks": {
    title: "NeetCode Submissions II",
    featured: false,
    image: "/images/projects/neetcode.png",
    technologies: [
      "Python",
      "LeetCode",
      "Algorithms",
    ],
    overview:
      "A continuation of my algorithm practice repository, showcasing consistent problem-solving and ongoing technical growth.",
    features: [
      "Expanded solution library",
      "Topic-based organisation",
      "Continuous practice",
    ],
    challenges: [
      "Advanced algorithms",
      "Optimising time and space complexity",
    ],
    lessons: [
      "Advanced data structures",
      "Dynamic programming",
      "Interview preparation",
    ],
  },
  "algorithms-datastructures": {
    title: "Algorithms & Data Structures",
    featured: true,
    image: "/images/projects/leet-code-img.png",
    technologies: [
      "Python",
      "Algorithms",
      "Data Structures",
      "LeetCode",
    ],
    overview:
      "A comprehensive collection of algorithm and data structure solutions developed through consistent LeetCode practice, covering a wide range of coding interview topics and computer science fundamentals.",
    features: [
      "1,100+ algorithm solutions",
      "Multiple data structure implementations",
      "Topic-based organisation",
      "Well-documented problem solutions",
    ],
    challenges: [
      "Optimising time and space complexity",
      "Solving advanced algorithmic problems",
      "Maintaining long-term consistency",
    ],
    lessons: [
      "Advanced problem-solving techniques",
      "Algorithm optimisation",
      "Data structure mastery",
      "Technical interview preparation",
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
    overview:
      "A nutrition and calorie tracking application designed to help users monitor their daily food intake, manage calorie goals, and build healthier eating habits through a clean and intuitive user experience.",
    features: [
      "Daily calorie tracking",
      "Food logging and management",
      "Responsive user interface",
      "Real-time data storage with Firebase",
    ],
    challenges: [
      "Managing application state",
      "Designing a scalable data model",
      "Integrating Firebase services",
    ],
    lessons: [
      "React state management",
      "Building with TypeScript",
      "Working with Firebase",
      "Designing user-focused applications",
    ],
  },

  portfolio: {
  title: "Developer Portfolio",
  image: "/images/projects/portfolio.png",
  featured: true,
  demo: "https://your-domain.com",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "GitHub REST API",
    "GitHub GraphQL API",
    "shadcn/ui",
  ],
  overview:
    "A modern developer portfolio built with Next.js 16, TypeScript, and Tailwind CSS to showcase my software engineering projects, technical skills, and continuous learning. The application integrates live GitHub and LeetCode data, providing a dynamic portfolio that automatically updates as I build new projects and solve coding challenges.",

  features: [
    "Dynamic Featured Projects powered by the GitHub API",
    "Live GitHub repository and recent commit activity",
    "Real-time developer statistics and contribution tracking",
    "Responsive design for desktop, tablet, and mobile",
    "Dark and light mode support",
    "Dynamic project pages with reusable metadata",
    "Modern component-based architecture using Server Components",
    "Reusable UI built with shadcn/ui and Tailwind CSS",
  ],

  challenges: [
    "Designing a scalable and reusable component architecture",
    "Integrating GitHub REST and GraphQL APIs",
    "Creating a dynamic metadata system for projects",
    "Building responsive layouts that work across all screen sizes",
    "Managing server-side data fetching with Next.js App Router",
  ],

  lessons: [
    "Building scalable Next.js applications",
    "Working with REST and GraphQL APIs",
    "Designing reusable React components",
    "Structuring large TypeScript projects",
    "Improving UI/UX through iterative design",
    "Managing dynamic content with Server Components",
  ],
},

"unity-visual-novel": {
  title: "Unity Visual Novel",
  featured: false,
  image: "/images/projects/unity.png",
  technologies: [
    "Unity",
    "C#",
    "Visual Novel",
    "Game Development",
  ],
  overview:
    "A narrative-driven visual novel built with Unity, featuring interactive dialogue, branching story paths, and immersive storytelling to explore game development and player-driven experiences.",
  features: [
    "Interactive dialogue system",
    "Branching narrative paths",
    "Scene management",
    "Player choice mechanics",
  ],
  challenges: [
    "Designing branching story logic",
    "Managing scene transitions",
    "Building reusable dialogue systems",
  ],
  lessons: [
    "Unity development",
    "C# scripting",
    "Narrative game design",
    "State management",
  ],
},

"music-app": {
  title: "Music App",
  featured: false,
  technologies: [
    "React",
    "TypeScript",
    "Music API",
    "Tailwind CSS",
  ],
  overview:
    "A modern music streaming application built to deliver an intuitive listening experience through responsive design, music discovery, and interactive user interfaces.",
  features: [
    "Music browsing and discovery",
    "Responsive user interface",
    "Playlist management",
    "Modern audio player interface",
  ],
  challenges: [
    "Managing application state",
    "Integrating external music APIs",
    "Building a responsive media interface",
  ],
  lessons: [
    "API integration",
    "React component architecture",
    "State management",
    "User experience design",
  ],
},

"jeffls-connect": {
  title: "JeffLS Connect",
  featured: false,
  technologies: [
    "React",
    "Node.js",
    "MongoDB",
    "Express",
  ],
  overview:
    "A full-stack social media platform built to connect users through posts, profiles, and real-time interactions while exploring modern web application development and scalable full-stack architecture.",
  features: [
    "User authentication and profiles",
    "Create, edit, and delete posts",
    "Like and comment functionality",
    "Responsive social media interface",
  ],
  challenges: [
    "Designing secure authentication",
    "Managing user relationships and data",
    "Building a scalable full-stack architecture",
  ],
  lessons: [
    "Full-stack application development",
    "REST API integration",
    "Database design with MongoDB",
    "Authentication and user management",
  ],
},
};