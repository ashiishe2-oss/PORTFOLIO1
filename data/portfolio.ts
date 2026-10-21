export interface ProfileData {
  name: string;
  brandTitle: string;
  location: string;
  education: {
    degree: string;
    institution: string;
    duration: string;
    status: string;
    cgpa: string;
    coursework: string[];
  };
  github: string;
  linkedin: string;
  email: string;
  phone: string;
  heroHeadline: string;
  heroIntro: string;
  aboutParagraph: string;
}

export const PROFILE_DATA: ProfileData = {
  name: "Ashish P.",
  brandTitle: "ASHISH P.",
  location: "Bengaluru, Karnataka, India",
  education: {
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "Dayananda Sagar University, Bengaluru",
    duration: "2025–2029",
    status: "Second year",
    cgpa: "9.73",
    coursework: [
      "Linear Algebra",
      "Multivariable Calculus",
      "Matrices",
      "Electrical Circuit Analysis",
      "Operational Amplifiers",
      "LTspice Simulation",
    ],
  },
  github: "https://github.com/ashiishe2-oss",
  linkedin: "https://linkedin.com/in/ashish-p-11bba8384",
  email: "ashiishe2@gmail.com",
  phone: "+91 6363835963",
  heroHeadline: "AI/ML STUDENT. DEVELOPER. BUILDER.",
  heroIntro:
    "I'm an AIML student who enjoys building practical software, exploring AI systems, and learning by turning ideas into working projects.",
  aboutParagraph:
    "I'm an AI & Machine Learning student who enjoys building practical software and understanding how things work under the hood. From developing Micro-RAG, a semantic search system for PDFs, to building full-stack applications and interactive web experiences, I enjoy turning ideas into working products. I'm currently strengthening my Python and computer science fundamentals while exploring AI engineering and web development.",
};

export interface DecorativeImageSpec {
  id: string;
  alt: string;
  url: string;
  positionClass: string;
  sizeClass: string;
  initialX: number;
  initialY: number;
  delay: number;
  duration: number;
}

export const ABOUT_DECORATIVE_IMAGES: DecorativeImageSpec[] = [
  {
    id: "moon-icon",
    alt: "Decorative floating moon artwork",
    url: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    positionClass: "top-[4%] left-[1%] sm:left-[2%] md:left-[4%]",
    sizeClass: "w-[120px] sm:w-[160px] md:w-[210px] h-auto",
    initialX: -80,
    initialY: 0,
    delay: 0.1,
    duration: 0.9,
  },
  {
    id: "bottom-left-3d",
    alt: "Decorative bottom-left 3D object",
    url: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    positionClass: "bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%]",
    sizeClass: "w-[100px] sm:w-[140px] md:w-[180px] h-auto",
    initialX: -80,
    initialY: 0,
    delay: 0.25,
    duration: 0.9,
  },
  {
    id: "lego-icon",
    alt: "Decorative top-right Lego artwork",
    url: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    positionClass: "top-[4%] right-[1%] sm:right-[2%] md:right-[4%]",
    sizeClass: "w-[120px] sm:w-[160px] md:w-[210px] h-auto",
    initialX: 80,
    initialY: 0,
    delay: 0.15,
    duration: 0.9,
  },
  {
    id: "bottom-right-3d-group",
    alt: "Decorative bottom-right 3D group artwork",
    url: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
    positionClass: "bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%]",
    sizeClass: "w-[130px] sm:w-[170px] md:w-[220px] h-auto",
    initialX: 80,
    initialY: 0,
    delay: 0.3,
    duration: 0.9,
  },
];

export const MICRO_RAG_PIPELINE_STEPS: string[] = [
  "PDF UPLOAD",
  "TEXT EXTRACTION",
  "CHUNKING",
  "EMBEDDINGS",
  "SEMANTIC SEARCH",
  "RETRIEVED CONTEXT",
  "ANSWER WITH SOURCE PAGES",
];

export interface FeaturedProject {
  id: string;
  title: string;
  subtitle?: string;
  featuredLead?: boolean;
  statusNote: string;
  description: string;
  technologies: string[];
  highlights: string[];
  engineeringNote?: string;
  achievementBanner?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  visualType: "rag-pipeline" | "pwa-workout" | "health-risk" | "aiis-infra" | "cosmic-scroll" | "dsa-python";
}

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: "micro-rag",
    title: "Micro-RAG: Semantic Search and Question Answering for PDFs",
    subtitle: "Leading Featured Project · Core Python Implementation",
    featuredLead: true,
    statusNote:
      "Runs locally. The latest web interface and functionality have not yet been pushed to the public repository.",
    description:
      "Micro-RAG is a lightweight retrieval-augmented generation system that explores how semantic search works under the hood. It extracts text from PDFs, divides content into overlapping chunks, generates embeddings, retrieves relevant passages using cosine similarity, and uses the retrieved context to generate document-grounded answers with source page references.",
    technologies: [
      "Python",
      "pypdf",
      "NumPy",
      "Google Gemini embedding API",
      "Google Gemini answer generation API",
      "Embeddings and semantic search",
      "Retrieval-augmented generation",
    ],
    highlights: [
      "PDF text extraction & text chunking with overlap",
      "Embedding generation & NumPy cosine similarity calculation",
      "Ranking and retrieval of relevant document chunks",
      "Context-grounded answer generation with source page references",
      "Multiple-PDF support & local web interface for uploading PDFs and asking questions",
    ],
    engineeringNote:
      "Implemented in individual Python modules rather than relying on a high-level RAG framework such as LangChain. Grounds answers in retrieved document context with source page references available for verification.",
    githubUrl: "https://github.com/ashiishe2-oss/-BASIC-RAG-SYSTEM",
    visualType: "rag-pipeline",
  },
  {
    id: "gymlog",
    title: "GymLog: Mobile-First Workout Tracking PWA",
    subtitle: "Progressive Web Application · UI & Build Refinement",
    statusNote: "Developed and refined through an AI-assisted workflow",
    description:
      "A mobile-first progressive web application designed to make workout tracking practical, with rep counting, rest timers, gym check-ins, and workout progress analytics.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "PWA Concepts"],
    highlights: [
      "Frontend layout, mobile-first ergonomics, and UI design",
      "Interactive animations and smooth visual transitions",
      "Testing and refining an AI-assisted implementation",
      "Diagnosing and resolving a Tailwind CSS v3/v4 build conflict",
      "Improving code organization and component maintainability",
    ],
    visualType: "pwa-workout",
  },
  {
    id: "healthsync",
    title: "AI Health Risk Early Warning System / HealthSync",
    subtitle: "Smart India Hackathon (SIH) Team Concept & Prototype",
    statusNote: "Selected for the government round after clearing internal selection rounds — results pending.",
    achievementBanner:
      "Selected for the government round after clearing internal selection rounds — results pending.",
    description:
      "An AI-assisted healthcare risk monitoring concept designed to model potential disease-outbreak risk and visualize healthcare infrastructure strain through interactive dashboards.",
    technologies: [
      "Python",
      "Flask",
      "Supabase",
      "Random Forest Strain Model",
      "Role-Based Access Control",
      "Interactive Dashboards",
    ],
    highlights: [
      "Documented prototype covering a 36-facility dataset across 11 Karnataka districts",
      "Experimental Random Forest-based Strain Risk Index for hospital capacity and resource data",
      "Role-based access views for public users, hospital administrators, and health authorities",
      "Contributed to backend/API, frontend UI, database integration, and testing/refinement with AI-assisted development",
    ],
    engineeringNote:
      "Experimental prototype modeling infrastructure strain; dataset and risk scores are not clinically validated or deployed in live government systems.",
    visualType: "health-risk",
  },
  {
    id: "aiis",
    title: "Arogya Infrastructure Intelligence System (AIIS)",
    subtitle: "Techflix 24-Hour Internal Hackathon · Dayananda Sagar University",
    statusNote: "Submitted by a 3-member team during the 24-hour internal Techflix hackathon at DSU",
    description:
      "A healthcare infrastructure intelligence prototype exploring hospital capacity monitoring, resource data visualization, role-based dashboards, and experimental hospital strain scoring.",
    technologies: [
      "Python",
      "Flask",
      "Supabase",
      "Random Forest Model Pipeline",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    highlights: [
      "Flask backend paired with Supabase database, authentication integration, and access-control policies",
      "Python model-training pipeline with experimental Random Forest-based hospital strain scoring",
      "Multiple HTML, CSS, and JavaScript dashboard views for the public, hospitals, and state authorities",
      "Explores a 36-facility dataset across 11 Karnataka districts for facility capacity monitoring",
    ],
    engineeringNote:
      "Hackathon prototype built in a 3-member team at Dayananda Sagar University; uses an experimental dataset and scoring model.",
    visualType: "aiis-infra",
  },
  {
    id: "cosmic-scroll",
    title: "Cosmic Scroll: Interactive Scrollytelling Experience",
    subtitle: "3D WebGL & Web Audio Narrative",
    statusNote: "Developed using an AI-assisted workflow and refined through testing",
    description:
      "An immersive, scroll-driven web experience combining 3D visuals, particle systems, and audio interactions to create an interactive narrative.",
    technologies: ["Three.js", "WebGL", "JavaScript", "Web Audio API"],
    highlights: [
      "Scroll-synchronized 3D scene progression and particle field transitions",
      "Interactive Web Audio API synthesis tied to user scroll velocity and narrative milestones",
      "Iterative testing, visual tuning, and bug refinement of an AI-assisted implementation",
    ],
    visualType: "cosmic-scroll",
  },
  {
    id: "dsa-python",
    title: "Data Structures and Algorithms in Python",
    subtitle: "Ongoing Computer Science Fundamentals & Problem Solving",
    statusNote: "Ongoing learning alongside coursework (~20–30 LeetCode problems solved, ~50% of DSA course completed)",
    description:
      "An ongoing collection of algorithmic practice focused on developing stronger computer science fundamentals through Python.",
    technologies: [
      "Python",
      "Arrays & Range Operations",
      "Searching & Sorting",
      "Binary Search Variants",
      "Python Standard Library",
    ],
    highlights: [
      "Approximately 20–30 LeetCode problems solved independently in Python",
      "Around 50% of structured Data Structures & Algorithms course completed",
      "Focused practice on arrays, searching and sorting, binary search variants, and standard library tools",
    ],
    visualType: "dsa-python",
  },
];

export interface EarlyProject {
  id: string;
  title: string;
  category: string;
  description: string;
}

export const MORE_PROJECTS: EarlyProject[] = [
  {
    id: "calculator",
    title: "Calculator Application",
    category: "Early Python Project",
    description: "Foundational arithmetic program practicing input handling, functions, and control flow in Python.",
  },
  {
    id: "number-guessing",
    title: "Number Guessing Game",
    category: "Early Python Project",
    description: "Interactive loop-based game implementing conditional branching, state tracking, and random number generation.",
  },
  {
    id: "rock-paper-scissors",
    title: "Rock Paper Scissors",
    category: "Early Python Project",
    description: "Classic command-line game exercising rule evaluation, user input validation, and score tracking.",
  },
  {
    id: "qr-generator",
    title: "QR Code Generator",
    category: "Early Python Project",
    description: "Utility script exploring Python package usage to encode text and links into scannable QR code images.",
  },
];

export interface SkillItem {
  name: string;
  context: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  note: string;
  skills: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    note: "Core languages & problem solving",
    skills: [
      {
        name: "Python",
        context: "Primary language; comfortable writing and debugging programs independently",
      },
      {
        name: "Java",
        context: "Basic programming knowledge; continuing practice",
      },
      {
        name: "C",
        context: "Fundamentals",
      },
    ],
  },
  {
    id: "ai-ir",
    title: "AI & Information Retrieval",
    note: "Explored through Micro-RAG & coursework",
    skills: [
      { name: "Embeddings", context: "Vector representations for document passages" },
      { name: "Semantic Search", context: "Passage ranking & context retrieval" },
      { name: "Cosine Similarity using NumPy", context: "Vector similarity computation" },
      { name: "Retrieval-Augmented Generation Concepts", context: "Document-grounded Q&A workflows" },
      { name: "Prompt Engineering", context: "Context structuring & instruction design" },
      { name: "Google Gemini API Usage", context: "Embedding & answer generation in Micro-RAG" },
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    note: "Basics & project-assisted implementation",
    skills: [
      { name: "HTML", context: "Document structure & semantic markup" },
      { name: "CSS", context: "Responsive styling & layout fundamentals" },
      { name: "JavaScript", context: "Interactive UI behavior (basics / project-assisted)" },
      { name: "React", context: "Component-based interfaces (basics / project-assisted)" },
      { name: "Tailwind CSS", context: "Utility-first styling & layout refinement" },
      { name: "Flask", context: "Python web views & API routing" },
    ],
  },
  {
    id: "backend-db",
    title: "Backend & Database",
    note: "Application integration & data persistence",
    skills: [
      { name: "Flask Backend Development", context: "REST endpoints & server-side logic" },
      { name: "API & Database Connections", context: "Connecting client interfaces with backend data" },
      { name: "Supabase", context: "Database tables, authentication & access policies" },
      { name: "SQL Fundamentals", context: "Relational querying & schema basics" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    note: "Development environment & iteration",
    skills: [
      { name: "Git", context: "Version control & repository management" },
      { name: "GitHub", context: "Code hosting & project tracking" },
      { name: "VS Code", context: "Primary development environment" },
      {
        name: "AI-Assisted Development Tools",
        context: "Used to accelerate implementation alongside manual testing, debugging, and refinement",
      },
    ],
  },
];

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "google-ai-essentials",
    title: "Google AI Essentials",
    issuer: "Google",
    status: "Completed · Posted on LinkedIn",
  },
  {
    id: "google-prompting-essentials",
    title: "Google Prompting Essentials",
    issuer: "Google",
    status: "Completed · Posted on LinkedIn",
  },
  {
    id: "deeplearning-prompt-eng",
    title: "Prompt Engineering for Developers",
    issuer: "DeepLearning.AI",
    status: "Completed · Posted on LinkedIn",
  },
  {
    id: "python-bootcamp-cwh",
    title: "Python Bootcamp",
    issuer: "CodeWithHarry",
    status: "Completed · Posted on LinkedIn",
  },
];

export interface AchievementItem {
  id: string;
  title: string;
  context: string;
  points: string[];
}

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    id: "sih",
    title: "Smart India Hackathon (SIH)",
    context: "HealthSync — Healthcare Risk Early-Warning Concept",
    points: [
      "Developed and submitted the HealthSync healthcare risk early-warning concept with a team.",
      "Cleared internal selection rounds at Dayananda Sagar University.",
      "Selected for the government round, with results pending when last reported.",
    ],
  },
  {
    id: "techflix",
    title: "Techflix Hackathon — Dayananda Sagar University",
    context: "24-Hour Internal Hackathon · Team of 3",
    points: [
      "Participated in a 24-hour internal hackathon in a three-member team.",
      "Submitted the Arogya Infrastructure Intelligence System (AIIS) prototype.",
      "Outcome not yet specified.",
    ],
  },
  {
    id: "leadership",
    title: "Sustained Student Leadership",
    context: "High School Class Leadership",
    points: [
      "Served as a class leader for approximately four to five years during high school.",
    ],
  },
  {
    id: "technical-learning",
    title: "Ongoing Technical Learning & Implementation",
    context: "Algorithmic Practice & Independent Python Projects",
    points: [
      "Consistent Data Structures and Algorithms practice in Python (~20–30 LeetCode problems solved, ~50% of DSA course completed).",
      "Building and refining personal Python utilities, semantic search modules, and full-stack prototypes alongside AIML coursework.",
    ],
  },
];

export const GITHUB_USERNAME = "ashiishe2-oss";

export const GITHUB_FALLBACK_REPOS = [
  {
    id: "basic-rag-system",
    name: "-BASIC-RAG-SYSTEM",
    description:
      "Micro-RAG: Lightweight retrieval-augmented generation system in Python exploring PDF text extraction, overlapping chunking, Gemini embeddings, and NumPy cosine similarity search.",
    htmlUrl: "https://github.com/ashiishe2-oss/-BASIC-RAG-SYSTEM",
    language: "Python",
    stargazersCount: 1,
    forksCount: 0,
    updatedAt: "2026-10-01T00:00:00Z",
    topics: ["python", "rag", "semantic-search", "numpy", "gemini-api"],
  },
  {
    id: "python-dsa-practice",
    name: "python-dsa-fundamentals",
    description:
      "Ongoing collection of Data Structures & Algorithms practice in Python covering arrays, binary search variants, sorting, and standard library problem solving.",
    htmlUrl: "https://github.com/ashiishe2-oss",
    language: "Python",
    stargazersCount: 0,
    forksCount: 0,
    updatedAt: "2026-09-20T00:00:00Z",
    topics: ["python", "dsa", "algorithms"],
  },
  {
    id: "healthcare-strain-prototype",
    name: "healthcare-strain-intelligence",
    description:
      "Flask, Supabase, and Random Forest healthcare facility capacity and strain scoring prototype explored for SIH (HealthSync) and Techflix (AIIS).",
    htmlUrl: "https://github.com/ashiishe2-oss",
    language: "Python",
    stargazersCount: 0,
    forksCount: 0,
    updatedAt: "2026-09-10T00:00:00Z",
    topics: ["python", "flask", "supabase", "random-forest"],
  },
];

export interface ContributionPillar {
  id: string;
  title: string;
  metric: string;
  detail: string;
}

export const OPEN_SOURCE_PILLARS: ContributionPillar[] = [
  {
    id: "rag-modules",
    title: "Modular Python RAG Pipeline",
    metric: "-BASIC-RAG-SYSTEM",
    detail:
      "Built core PDF extraction, chunking, embedding retrieval, and NumPy cosine similarity modules from scratch without high-level frameworks.",
  },
  {
    id: "algorithmic-practice",
    title: "Algorithmic Problem Solving",
    metric: "20–30 LeetCode · 50% DSA",
    detail:
      "Consistent Python implementation of array manipulation, binary search variants, and sorting fundamentals alongside AIML coursework.",
  },
  {
    id: "fullstack-prototypes",
    title: "Full-Stack & AI Prototypes",
    metric: "Flask · Supabase · React",
    detail:
      "Developing and refining interactive web experiences, mobile-first PWAs, and role-based healthcare analytics dashboards.",
  },
];

