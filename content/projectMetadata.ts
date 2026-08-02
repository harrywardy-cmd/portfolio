interface ProjectMetadata {
  title: string;
  image?: string;

  technologies: string[];

  featured: boolean;

  overview: string;

  problem?: string;

  solution?: string;

  architecture?: string;

  gallery?: string[];

  features: string[];

  challenges: string[];

  lessons: string[];

  demo?: string;

  pdf?: string;
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
      "A modern, responsive website designed with a strong focus on performance, accessibility, and user experience while showcasing contemporary frontend development practices.",

    problem:
      "The project aimed to create a fast, visually appealing, and fully responsive website that provided an intuitive browsing experience across desktop and mobile devices while maintaining clean, maintainable code.",

    solution:
      "I developed the application using React, Next.js, and Tailwind CSS, building reusable components, responsive layouts, and an optimized frontend architecture that prioritised accessibility, performance, and scalability.",

    features: [
      "Responsive layouts for desktop, tablet, and mobile",
      "Reusable component-based architecture",
      "Modern UI built with Tailwind CSS",
      "Optimised performance and accessibility",
    ],

    challenges: [
      "Designing reusable layouts across multiple pages",
      "Maintaining consistent responsive behaviour",
      "Balancing visual design with performance optimisation",
    ],

    lessons: [
      "Building scalable component architectures",
      "Applying responsive design best practices",
      "Improving accessibility and frontend performance",
      "Creating maintainable Next.js applications",
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

    problem:
      "I wanted a dedicated space to showcase my software development projects, technical skills, and experience while learning the fundamentals of frontend web development and responsive design.",

    solution:
      "I designed and developed a responsive portfolio website using HTML, CSS, and JavaScript. The project focused on creating a clean user interface, intuitive navigation, and a professional online presence while applying best practices for semantic HTML and responsive layouts.",

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

    problem:
      "Technical interviews require strong problem-solving skills and a deep understanding of algorithms and data structures. I wanted to build long-term consistency while strengthening my ability to analyse problems, optimise solutions, and communicate technical reasoning.",

    solution:
      "I created a structured repository containing more than 1,100 algorithm and data structure solutions, organised by topic and difficulty. Each solution focuses on writing clean, efficient code while applying optimal time and space complexity techniques across a broad range of interview-style problems.",

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
    ],
    overview:
      "A nutrition and calorie tracking application designed to help users monitor their daily food intake, manage calorie goals, and build healthier eating habits through a clean and intuitive user experience.",

    problem:
      "Many nutrition tracking applications can feel cluttered or difficult to use, making it harder for users to consistently monitor their calorie intake and eating habits. I wanted to create a simple, responsive application that focused on usability and fast data entry.",

    solution:
      "I developed Calorie Compass using React, TypeScript, and Firebase, providing a responsive interface for logging meals, tracking calorie goals, and securely storing user data in real time. The application emphasises clean design, maintainable code, and an intuitive user experience.",

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

    problem:
      "Traditional portfolio websites quickly become outdated because they rely on manually updated content. I wanted to build a portfolio that could automatically showcase my latest projects, coding activity, and technical growth while also demonstrating modern frontend architecture.",

    solution:
      "I designed and developed a dynamic portfolio using Next.js App Router, TypeScript, and Tailwind CSS. The application integrates GitHub APIs, reusable project metadata, local projects, and responsive component architecture to create a maintainable portfolio that evolves alongside my software engineering journey.",

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

  "serverless-event-driven-architecture": {
    title: "Serverless Event-Driven Architecture",
    featured: false,
    technologies: [
      "AWS",
      "AWS Lambda",
      "API Gateway",
      "Amazon S3",
      "DynamoDB",
      "CloudFront",
      "AWS Step Functions",
      "SNS",
      "SQS",
    ],

    overview:
      "Designed a production-ready serverless architecture for a cloud-based photo album application using AWS managed services. The solution demonstrates event-driven workflows, automated media processing, global content delivery, security best practices, scalable infrastructure, and cloud cost optimisation.",

    problem:
      "Design a highly scalable and cost-effective cloud architecture capable of storing, processing, and delivering user-uploaded photos while maintaining strong security, high availability, and minimal operational overhead.",

    solution:
      "Designed an event-driven serverless architecture using AWS managed services including API Gateway, AWS Lambda, Amazon S3, DynamoDB, SNS, SQS, CloudFront, and Step Functions. The architecture automates media processing, orchestrates asynchronous workflows, scales automatically based on demand, and optimises operational costs by eliminating server management.",

    features: [
      "Serverless event-driven architecture",
      "Automated image and video processing pipelines",
      "Global content delivery with Amazon CloudFront",
      "Media storage using Amazon S3 and DynamoDB",
      "AWS Step Functions workflow orchestration",
      "Detailed cloud cost estimation and budgeting",
    ],

    challenges: [
      "Designing scalable cloud-native workflows",
      "Coordinating asynchronous services with SNS and SQS",
      "Balancing scalability, performance, and operational costs",
      "Designing secure authentication and access control",
    ],

    lessons: [
      "Cloud architecture design",
      "Serverless application development",
      "Event-driven system design",
      "AWS managed services",
      "Cloud security best practices",
      "Cloud cost optimisation",
    ],
  },

  "inference-engine": {
    title: "AI Inference Engine",
    featured: false,
    image: "/images/projects/project-placeholder.png",

    technologies: [
      "Python",
      "Artificial Intelligence",
      "Propositional Logic",
      "Forward Chaining",
      "Backward Chaining",
      "Truth Tables",
      "Resolution",
    ],

    overview:
      "Developed an inference engine for propositional logic capable of determining logical entailment using multiple reasoning algorithms. The application supports Truth Table, Forward Chaining, Backward Chaining, and Resolution-based theorem proving, providing a flexible framework for knowledge representation and automated reasoning.",

    problem:
      "Build an inference engine capable of determining whether a query can be logically inferred from a Horn-form knowledge base using multiple reasoning strategies while providing a consistent interface for comparing different inference algorithms.",

    solution:
      "Implemented a modular Python application supporting Truth Table evaluation, Forward Chaining, Backward Chaining, and Resolution-based theorem proving. Each algorithm was developed independently, allowing logical queries to be processed using different reasoning techniques while sharing a common knowledge base and command-line interface.",

    features: [
      "Truth Table inference algorithm",
      "Forward Chaining reasoning",
      "Backward Chaining reasoning",
      "Resolution-based theorem proving",
      "Horn-form knowledge base parsing",
      "Command-line interface supporting multiple inference methods",
    ],

    challenges: [
      "Implementing multiple logical inference algorithms",
      "Parsing and representing Horn-form knowledge bases",
      "Managing recursive reasoning and rule evaluation",
      "Designing a modular architecture for multiple inference strategies",
    ],

    lessons: [
      "Knowledge representation",
      "Automated reasoning",
      "Artificial intelligence fundamentals",
      "Algorithm design",
      "Recursive problem solving",
      "Modular software architecture",
    ],
  },

  "apollos-gamble": {
    title: "Apollo's Gamble",
    featured: false,
    image: "/images/projects/project-placeholder.png",
    technologies: [
      "Game Design",
      "Tabletop Games",
      "Systems Design",
      "Prototyping",
      "Game Balancing",
    ],

    overview:
      "Designed and developed a tabletop strategy card game inspired by Greek mythology, where players compete to become Apollo's next Oracle by predicting the outcomes of heroic quests. The project focused on creating engaging gameplay mechanics, strategic decision-making, and replayability through dynamic event combinations.",

    problem:
      "The goal was to design an original tabletop game that encouraged strategic thinking, replayability, and player interaction while remaining easy to learn. The challenge was balancing competitive gameplay with narrative storytelling inspired by Greek mythology.",

    solution:
      "Apollo's Gamble combines prediction-based mechanics with hero, monster, and event cards to create unique scenarios every round. Players commit to success or failure predictions using dedicated cards, while boon and curse mechanics introduce additional strategy and opportunities to influence the outcome of each quest.",

    features: [
      "Original strategy card game mechanics",
      "Greek mythology-inspired setting and narrative",
      "Success and failure prediction system",
      "Dynamic hero and event combinations",
      "Collaborative and competitive gameplay",
      "Unique boon and curse card mechanics",
    ],

    challenges: [
      "Balancing game mechanics for fairness",
      "Designing strategic yet accessible gameplay",
      "Creating replayability through card combinations",
      "Integrating narrative with player decision-making",
    ],

    lessons: [
      "Game systems design",
      "Gameplay balancing",
      "Player experience design",
      "Iterative prototyping",
      "Collaborative design and development",
    ],
  },

};

