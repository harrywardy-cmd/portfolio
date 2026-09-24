export interface ArchitectureLayer {
  name: string;
  description?: string;
  items: string[];
}

export interface ProjectMetadata {
  title: string;
  image?: string;

  technologies: string[];

  featured: boolean;

  overview: string;

  problem?: string;

  solution?: string;

  /** Rendered as a layered diagram on the project page. */
  architecture?: {
    title?: string;
    summary: string;
    layers: ArchitectureLayer[];
  };

  /** Key technical decisions and the reasoning behind them. */
  decisions?: {
    title: string;
    detail: string;
  }[];

  features: string[];

  challenges: string[];

  lessons: string[];

  /** Shown as "What I'd Do Differently". */
  improvements?: string[];

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
    demo: "https://lazuli-web.vercel.app/",
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
    demo: "https://harry-ward-portfolio.vercel.app/",
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
    image: "/images/projects/python-api-code.png",
    technologies: [
      "Python",
      "Flask",
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
    image: "/images/projects/python-web-scraping-tool-code.png",
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
    image: "/images/projects/command-line-interface-code.png",
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
      "A collection of 90+ Python solutions to LeetCode and NeetCode problems, organised by technique and data structure. Every solution is commented step by step, so the repository doubles as a set of revision notes for technical interviews.",

    problem:
      "Technical interviews require strong problem-solving skills and a deep understanding of algorithms and data structures. I wanted to build long-term consistency while strengthening my ability to analyse problems, optimise solutions, and communicate technical reasoning.",

    solution:
      "I solve problems regularly and commit each solution to a structured repository, grouped by the technique or data structure it exercises. Rather than keeping only the final answer, each file explains the reasoning line by line, and some problems keep more than one attempt so I can compare approaches when revising.",

    architecture: {
      title: "Repository Structure",
      summary:
        "Solutions are split into two top-level areas, then grouped by topic. My overall progress is tracked live from LeetCode and shown on this site.",
      layers: [
        {
          name: "algorithms/",
          description:
            "Technique-focused problems: greedy, dynamic programming, two pointers, recursion and sorting.",
          items: [
            "Dynamic programming — house-robber, climbing-stairs",
            "Greedy — jump-game, gas-station, candy",
            "Two pointers — trapping-rain-water",
            "Recursion/ — delete-node-in-a-bst",
            "merge sort/ — merge-k-sorted-lists",
          ],
        },
        {
          name: "data_structures/",
          description:
            "Problems built around a specific structure, including several implemented from scratch.",
          items: [
            "arrays/ — 22 solutions",
            "Linked-Lists/ — design-linked-list, design-browser-history",
            "Binary-Search/ — insert-into-a-binary-search-tree",
            "Stacks, queues and hash maps",
          ],
        },
        {
          name: "Live progress",
          description:
            "Accepted submissions pulled from LeetCode's API and shown on the Algorithms page.",
          items: [
            "Solved count by difficulty",
            "Topics covered",
            "Active days of practice",
          ],
        },
      ],
    },

    decisions: [
      {
        title: "Comment the reasoning, not just the code",
        detail:
          "Each solution explains why every step exists — for example, why trapping-rain-water moves the pointer on the side with the smaller maximum. Months later, the comments are what make a solution useful for revision.",
      },
      {
        title: "Keep more than one attempt",
        detail:
          "Problems like climbing stairs, maximum subarray and happy number have a second version. Keeping both shows how an approach improved, such as moving from recursion to an iterative dynamic programming solution.",
      },
      {
        title: "Organise by technique",
        detail:
          "Grouping by data structure and technique, rather than by difficulty or date, makes it easy to revise a whole pattern — all the linked list problems, say — before an interview.",
      },
    ],

    features: [
      "90+ commented Python solutions",
      "Data structures implemented from scratch (linked lists, browser history)",
      "Grouped by technique and data structure",
      "Multiple approaches kept for comparison",
      "Progress tracked live from LeetCode",
    ],

    challenges: [
      "Optimising time and space complexity",
      "Recognising which pattern a new problem needs",
      "Maintaining long-term consistency",
    ],

    lessons: [
      "Recognising common problem-solving patterns",
      "Two pointers, sliding window and binary search",
      "Dynamic programming from recursion to iteration",
      "Explaining solutions clearly, as in an interview",
    ],

    improvements: [
      "Add time and space complexity to the top of every solution, not just in the comments.",
      "Add pytest tests with edge cases so each solution can be checked automatically.",
      "Use one naming convention throughout — the repository currently mixes kebab-case, snake_case and a folder name with a space.",
      "Keep the README's folder structure in sync with the actual repository.",
    ],
  },
  "calorie-compass": {
    title: "Calorie Compass",
    image: "/images/projects/calorie-compass.png",
    featured: true,
    demo: "https://calorie-compass-kappa.vercel.app/",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
      "Gemini API",
      "Tailwind CSS",
      "Vitest",
    ],
    overview:
      "A full-stack calorie and macro tracker with AI-assisted meal logging. Describe a meal in plain English and Gemini estimates its calories and macros; the dashboard then tracks progress against personal goals, logging streaks and weight over time.",

    problem:
      "Many nutrition tracking applications feel cluttered, and the slowest part is always entering what you ate. I wanted an app that made logging fast enough to do every day, and that rewarded consistency rather than just counting numbers.",

    solution:
      "I built Calorie Compass with Next.js, Prisma and PostgreSQL, using Clerk for authentication. Meals can be logged manually, re-logged from suggestions based on what you eat most often, or estimated by AI from a short description. Progress is shown through goal tracking, streaks and a mascot that grows from a seed into a golden tree as you approach your daily goal.",

    architecture: {
      summary:
        "A Next.js App Router application where Server Components read directly from the database and Server Actions handle every change. Authentication and AI estimation are handled by external services.",
      layers: [
        {
          name: "Interface",
          description: "React Server and Client Components.",
          items: [
            "shadcn/ui and Tailwind CSS",
            "Recharts calorie and weight charts",
            "react-hook-form with zod validation",
          ],
        },
        {
          name: "Next.js server",
          description: "Protected routes and mutations.",
          items: [
            "Clerk middleware guards dashboard, meals and settings",
            "Server Actions for meals, weight and settings",
            "Ownership check on every change",
            "/api/estimate-meal route",
          ],
        },
        {
          name: "Services",
          description: "External APIs.",
          items: [
            "Gemini 2.5 Flash — meal estimation",
            "Clerk — sign-in with Google or email",
          ],
        },
        {
          name: "Data",
          description: "Type-safe persistence.",
          items: [
            "Prisma ORM",
            "PostgreSQL on Neon",
            "User, Meal and WeightEntry models",
          ],
        },
      ],
    },

    decisions: [
      {
        title: "Store the timezone with every entry",
        detail:
          "Each meal and weight entry records the timezone it was logged in. Days, streaks and history stay correct even if the user travels or changes their timezone setting later.",
      },
      {
        title: "Server Actions instead of a separate REST API",
        detail:
          "Creating, editing and deleting meals are Server Actions that check the signed-in user owns the record, then revalidate the page. There's no client-side data-fetching layer to maintain.",
      },
      {
        title: "Use the Clerk user ID as the primary key",
        detail:
          "The User table is keyed directly by Clerk's ID, so there's no mapping table between the auth provider and the database.",
      },
      {
        title: "One unit for storage, any unit for display",
        detail:
          "Weight is always stored in kilograms and converted for display, so switching between kg and lb never changes or rounds the underlying data.",
      },
      {
        title: "Suggest meals from real habits",
        detail:
          "Suggestions come from a grouped count of the meals a user logs most often, prefilled with the values from the most recent log rather than an average.",
      },
    ],

    features: [
      "AI meal estimation with a confidence score",
      "Calorie, protein, carb and fat goals",
      "Current and longest logging streaks",
      "Mascot that grows as you near your daily goal",
      "Recurring meal suggestions",
      "Weight tracking in kg or lb",
      "Meal history with date navigation and charts",
      "Daily logging reminders",
      "Timezone, week-start and date-format settings",
    ],

    challenges: [
      "Getting day boundaries and streaks right across timezones",
      "Turning free-form AI output into reliable structured data",
      "Handling AI rate limits gracefully",
      "Designing charts that work on both desktop and mobile",
    ],

    lessons: [
      "Full-stack development with the Next.js App Router",
      "Data modelling and migrations with Prisma",
      "Integrating third-party authentication",
      "Working with LLM APIs in production",
      "Unit and component testing with Vitest",
    ],

    improvements: [
      "Validate AI responses against a zod schema, or use Gemini's structured output, instead of cleaning up the text before parsing it.",
      "Add per-user rate limiting to AI meal estimation to keep API costs predictable.",
      "Combine the ownership check and the update into a single database query for each change.",
    ],
  },

  portfolio: {
    title: "Developer Portfolio",
    image: "/images/projects/portfolio.png",
    featured: true,
    demo: "https://portfolio-eight-flax-t0uyc3r3ew.vercel.app/",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GitHub REST API",
      "GitHub GraphQL API",
      "shadcn/ui",
      "MDX",
      "Vitest",
      "Playwright",
    ],

    overview:
      "The site you're on: a Next.js 16 portfolio that keeps itself up to date. Project counts, GitHub contributions and LeetCode progress are pulled live, the contribution graph is drawn from GitHub's own data, and every project and blog post is statically generated.",

    problem:
      "Traditional portfolio websites quickly become outdated because they rely on manually updated content. I wanted a portfolio that updates itself as I build and practise, while also demonstrating the engineering practices I'd bring to a team.",

    solution:
      "I built the site with the Next.js App Router, TypeScript and Tailwind CSS. Live data comes from GitHub's REST and GraphQL APIs and LeetCode's GraphQL API, refreshed every five minutes with Incremental Static Regeneration. Projects and blog posts are type-checked content in the repository, and the whole site is covered by unit tests, end-to-end tests and CI.",

    architecture: {
      summary:
        "Pages are rendered on the server and cached, so visitors always get a pre-built page while the data behind it refreshes in the background.",
      layers: [
        {
          name: "Sources",
          description: "Where the content comes from.",
          items: [
            "GitHub REST API — repositories and commits",
            "GitHub GraphQL API — contribution calendar",
            "LeetCode GraphQL API — solved problems",
            "Projects and MDX posts in the repo",
          ],
        },
        {
          name: "Data layer",
          description: "Fetch, combine and fail safely.",
          items: [
            "Five-minute revalidation on every fetch",
            "Failures become null instead of errors",
            "React cache() removes duplicate requests",
          ],
        },
        {
          name: "Rendering",
          description: "Next.js App Router.",
          items: [
            "Server Components",
            "Incremental Static Regeneration",
            "Static project and blog pages",
            "Generated social preview images",
          ],
        },
        {
          name: "Delivery",
          description: "Hosting and APIs.",
          items: [
            "Vercel with Analytics and Speed Insights",
            "Contact API: validation, honeypot and rate limit",
            "Email delivery with Resend",
          ],
        },
      ],
    },

    decisions: [
      {
        title: "Cache on the server instead of fetching in the browser",
        detail:
          "Incremental Static Regeneration means visitors never wait on GitHub or LeetCode, API tokens never reach the browser, and the site stays well within API rate limits.",
      },
      {
        title: "Let any data source fail on its own",
        detail:
          "Each API call resolves to null on failure, so an outage shows a dash instead of taking the page down. Sentences fall back to a known minimum solved count, which is always true because it only ever increases.",
      },
      {
        title: "Keep content as code",
        detail:
          "Projects, write-ups and blog posts live in TypeScript and MDX files, so they're type-checked and reviewed like code. Tests fail if a project and its write-up ever get out of sync.",
      },
      {
        title: "Draw the contribution graph from my own data",
        detail:
          "Instead of embedding an image from a third-party service, the graph is rendered from GitHub's contribution calendar. It matches the site's theme, including dark mode, and doesn't depend on another service staying online.",
      },
    ],

    features: [
      "Live project, contribution and LeetCode statistics",
      "Contribution graph drawn from GitHub data",
      "Current project and recent commits from GitHub",
      "Static project pages with architecture write-ups",
      "MDX blog with drafts",
      "Generated social preview image for every project",
      "Spam-protected contact form",
      "Dark and light mode",
    ],

    challenges: [
      "Keeping pages fast while showing live data",
      "Summing GitHub contributions across multiple years",
      "Handling slow or failing third-party APIs",
      "Building responsive layouts that work across all screen sizes",
    ],

    lessons: [
      "Caching and revalidation in the Next.js App Router",
      "Working with REST and GraphQL APIs",
      "Designing for failure in systems that depend on external services",
      "Testing server components and API routes",
      "Setting up CI for linting, type checks, tests and builds",
    ],

    improvements: [
      "Use a shared store such as Redis for rate limiting, so the limit applies across every server instance rather than per instance.",
      "Move each project's write-up into its own MDX file instead of one large TypeScript file.",
      "Add visual regression tests so layout changes are caught automatically.",
    ],
  },

  "unity-visual-novel": {
    title: "Unity Visual Novel",
    featured: false,
    image: "/images/projects/unity-visual-novel-code.png",
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
    title: "jeffLS Connect",
    featured: false,
    technologies: [
      "Next.js",
      "TypeScript",
      "tRPC",
      "Prisma",
      "NextAuth",
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
    image: "/images/projects/serverless-architecture.png",
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
    image: "/images/projects/inference-engine.png",
    featured: false,

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
    image: "/images/projects/apollos-gamble.jpg",
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

