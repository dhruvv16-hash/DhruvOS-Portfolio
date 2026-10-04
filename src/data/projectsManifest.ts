export interface ProjectModule {
  id: string;
  slug: string;
  type: 'personal' | 'open-source';
  title: string;
  shortDescription: string;
  description: string;
  thumbnail?: string;
  heroImage?: string;
  tech: string[];
  features: string[];
  architecture?: string[];
  engineeringHighlights?: string[];
  screenshots?: string[];
  link: string;
  demoUrl?: string;
  status?: string;
}

export interface SandboxModule {
  id: string;
  category: 'AI' | 'Finance' | 'Systems & Automation' | 'Security';
  title: string;
  description: string;
}

export interface TimelineNode {
  period: string;
  title: string;
  subtitle: string;
  details: string[];
  type: 'journey' | 'experience' | 'education';
}

export interface SkillSpec {
  name: string;
  level: 'Expert' | 'Advanced' | 'Learning';
}

export interface ArchitectureNode {
  id: string;
  label: string;
  role: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  projectTitle: string;
  metrics: { label: string; value: string }[];
  problem: string;
  constraints: string;
  tradeoffs: string;
  architectureNodes: ArchitectureNode[];
  architectureConnections: { from: string; to: string }[];
  implementation: string;
  results: string;
  businessImpact: string;
  timeline: { label: string; days: number }[];
}

export interface OpenSourcePR {
  date: string;
  title: string;
  repo: string;
  status: 'merged' | 'in-review';
  link: string;
  details: string;
}

export interface WhyDhruvNode {
  title: string;
  description: string;
}

export const projectsManifest = {
  projects: [
    {
      id: "vendoros",
      slug: "vendoros",
      type: "personal",
      title: "VendorOS",
      status: "Active",
      shortDescription: "Multi-tenant POS and SaaS platform.",
      description: "Multi-Tenant Food-Tech SaaS Platform with offline-first sync (localStorage queue → Supabase). Automated order intake through WhatsApp Cloud API and secured with HMAC.",
      thumbnail: "https://raw.githubusercontent.com/dhruvv16-hash/VendorOS/master/public/screenshots/readme/02_home_dashboard.png",
      heroImage: "https://raw.githubusercontent.com/dhruvv16-hash/VendorOS/master/public/screenshots/readme/home_desktop.png",
      tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
      features: [
        "Offline-first sync",
        "Row-Level Security",
        "WhatsApp automated ordering",
        "HMAC signature validation"
      ],
      architecture: [
        "Frontend -> Next.js PWA with IndexedDB",
        "API -> Next.js API Routes (Serverless)",
        "Database -> Supabase (PostgreSQL with RLS)"
      ],
      engineeringHighlights: [
        "Implemented robust offline-first synchronization to ensure continuous POS operation during network drops.",
        "Built multi-tenant data isolation strictly enforced at the database level via PostgreSQL Row-Level Security.",
        "Integrated secure webhooks for Razorpay and WhatsApp, protected by SHA-256 HMAC signature validation."
      ],
      screenshots: [
        "https://raw.githubusercontent.com/dhruvv16-hash/VendorOS/master/public/screenshots/readme/01_auth_login.png",
        "https://raw.githubusercontent.com/dhruvv16-hash/VendorOS/master/public/screenshots/readme/04_orders_view.png",
        "https://raw.githubusercontent.com/dhruvv16-hash/VendorOS/master/public/screenshots/readme/09_analytics_charts.png"
      ],
      link: "https://github.com/dhruvv16-hash/VendorOS",
      demoUrl: "https://vendoros.in"
    },
    {
      id: "investorgpt",
      slug: "investorgpt",
      type: "personal",
      title: "InvestorGPT",
      status: "Completed",
      shortDescription: "7-agent orchestration pipeline for financial research.",
      description: "7-agent orchestration pipeline (financial-ingestion, valuation, technical, sentiment) reconciling signals into one verdict. Implemented quantitative scoring models (Piotroski F-Score).",
      thumbnail: '/images/projects/investorgpt_thumb.png',
      heroImage: "https://raw.githubusercontent.com/dhruvv16-hash/InvestorGPT/main/docs/assets/portfolio_dashboard.png",
      tech: ["Next.js", "FastAPI", "Python", "SQLAlchemy", "Agentic AI"],
      features: [
        "7-agent orchestration",
        "Quantitative scoring models",
        "MPT portfolio simulation",
        "Debate-and-consensus workflow"
      ],
      architecture: [
        "UI -> React / Next.js",
        "Gateway -> FastAPI",
        "Agentic Engine -> LangChain / Gemini Pro",
        "Vector DB -> Pinecone",
        "Data Feeds -> Yahoo Finance API"
      ],
      engineeringHighlights: [
        "Orchestrated a 7-agent debate system where multiple models independently analyze financial data before reaching a consensus.",
        "Integrated the Piotroski F-Score algorithm for deterministic valuation alongside LLM-driven sentiment analysis.",
        "Built a high-performance FastAPI gateway handling parallel microservice execution and rate limiting."
      ],
      screenshots: [
        "https://raw.githubusercontent.com/dhruvv16-hash/InvestorGPT/main/docs/assets/company_research.png",
        "https://raw.githubusercontent.com/dhruvv16-hash/InvestorGPT/main/docs/assets/technical_analysis.png"
      ],
      link: "https://github.com/dhruvv16-hash/InvestorGPT"
    },
    {
      id: "accidentzero",
      slug: "accidentzero-ai",
      type: "personal",
      title: "AccidentZero AI",
      status: "Completed",
      shortDescription: "5-model ensemble scoring real-time accident risk.",
      description: "5-model ensemble scoring real-time accident risk from operational metrics, fused with a computer-vision pipeline for PPE-violation and scene-risk detection.",
      thumbnail: "https://raw.githubusercontent.com/dhruvv16-hash/Accident-0-AI/main/Visual%20Output/Screenshot%202026-04-06%20102115.png",
      heroImage: "https://raw.githubusercontent.com/dhruvv16-hash/Accident-0-AI/main/Visual%20Output/Screenshot%202026-04-06%20102143.png",
      tech: ["Python", "FastAPI", "XGBoost", "LightGBM", "CatBoost"],
      features: [
        "5-model ensemble",
        "Computer-vision pipeline",
        "Real-time safety dashboards",
        "FastAPI batch processing"
      ],
      architecture: [
        "Dashboard -> React",
        "API -> FastAPI",
        "Machine Learning -> XGBoost / LightGBM",
        "Computer Vision -> OpenCV / YOLO"
      ],
      engineeringHighlights: [
        "Engineered an ensemble ML pipeline using XGBoost, LightGBM, and CatBoost to maximize prediction stability.",
        "Processed real-time video streams for PPE compliance using a low-latency computer vision pipeline.",
        "Deployed a highly optimized FastAPI backend capable of ingesting high-throughput sensor telemetry."
      ],
      screenshots: [
        "https://raw.githubusercontent.com/dhruvv16-hash/Accident-0-AI/main/Visual%20Output/Screenshot%202026-04-06%20102220.png"
      ],
      link: "https://github.com/dhruvv16-hash/Accident-0-AI"
    },
    {
      id: "trading",
      slug: "deltabridge",
      type: "personal",
      title: "DeltaBridge Trading Bot",
      status: "Active",
      shortDescription: "Algorithmic Trading Bot for ETH/USD execution.",
      description: "Algorithmic Trading Bot (ETH/USD). Multi-timeframe strategy suppressing false entries. Flask bridge from TradingView to Delta Exchange for 24/7 automated execution.",
      thumbnail: '/images/projects/deltabridge_thumb.png',
      heroImage: "https://raw.githubusercontent.com/dhruvv16-hash/DeltaBridge/main/screenshots/dashboard_accounts.jpg",
      tech: ["Pine Script", "Python", "Flask", "Crypto APIs", "SQLite"],
      features: [
        "Multi-timeframe strategy",
        "24/7 automated execution",
        "HMAC-SHA256 security",
        "Dynamic position sizing"
      ],
      architecture: [
        "Strategy -> TradingView Pine Script",
        "Middleware -> Flask Webhook Receiver",
        "Execution -> Delta Exchange API",
        "Storage -> SQLite"
      ],
      engineeringHighlights: [
        "Authored a robust Pine Script strategy executing cross-timeframe trend verification to minimize false entry signals.",
        "Built a secure Flask middleware service parsing TradingView webhooks and dispatching to crypto exchanges.",
        "Implemented rigorous HMAC-SHA256 request validation and dynamic, volatility-adjusted position sizing."
      ],
      link: "https://github.com/dhruvv16-hash/DeltaBridge"
    },
    {
      id: "1-click",
      slug: "1-click",
      type: "personal",
      title: "1-CLICK",
      status: "Experimental",
      shortDescription: "TradingView strategy scanning and automation architecture.",
      description: "Browser automation and data extraction architecture for executing multi-symbol/timeframe workflows across TradingView.",
      tech: ["Python", "Browser Automation", "Web Scraping", "Trading Architecture"],
      features: [
        "Automated strategy scanning",
        "Multi-symbol workflow",
        "Data extraction pipeline"
      ],
      engineeringHighlights: [
        "Designed a highly resilient DOM parsing strategy to reliably extract indicator values from dynamic web applications.",
        "Automated repetitive multi-timeframe chart analysis, vastly accelerating the strategy screening process."
      ],
      link: "https://github.com/dhruvv16-hash/1-CLICK"
    },
    {
      id: "emailwriter",
      slug: "ai-email-writer",
      type: "personal",
      title: "AI Email Writer",
      status: "Completed",
      shortDescription: "Context-aware email generation via browser extension.",
      description: "A Chrome extension integrating directly with Gmail. Composes context-aware replies using Google's Gemini AI with configurable tones and length parameters.",
      thumbnail: '/images/projects/ai_email_thumb.png',
      heroImage: "https://raw.githubusercontent.com/dhruvv16-hash/EMAIL_WRITER-AI/main/preview/email-generator-ui.png",
      tech: ["JavaScript", "Chrome Extensions", "Gemini API", "HTML/CSS"],
      features: [
        "Gmail DOM injection",
        "Context-aware AI replies",
        "Configurable tone selection"
      ],
      engineeringHighlights: [
        "Engineered a reliable DOM injection system that safely embeds native-looking UI controls directly into the Gmail composition window.",
        "Managed secure cross-origin communication between the extension background script and external AI APIs."
      ],
      link: "https://github.com/dhruvv16-hash/EMAIL_WRITER-AI"
    },
    {
      id: "openbb",
      slug: "openbb-core",
      type: "open-source",
      title: "OpenBB Core",
      shortDescription: "Poetry packaging and dependency resolution.",
      description: "Merged a PR resolving Poetry packaging conflicts between core modules, eliminating install failures on OS package managers with strict file ownership.",
      tech: ["Python", "Poetry", "Open Source", "Finance"],
      features: [
        "Package management fix",
        "Dependency resolution",
        "Core module stability"
      ],
      link: "https://github.com/dhruvv16-hash/OpenBB"
    },
    {
      id: "supabase-os",
      slug: "supabase-core",
      type: "open-source",
      title: "Supabase Core",
      shortDescription: "Privilege-leak diagnostics and SQL reconciliation.",
      description: "Diagnosed PostgreSQL privilege-leak and DNS-outage issues; built automated diagnostic suites and SQL reconciliation scripts to speed up platform-team triage.",
      tech: ["TypeScript", "PostgreSQL", "SQL", "Diagnostics"],
      features: [
        "Privilege-leak patching",
        "DNS outage diagnostics",
        "Automated SQL reconciliation"
      ],
      link: "https://github.com/dhruvv16-hash/supabase"
    }
  ] as ProjectModule[],

  sandboxes: [
    {
      id: "investorgpt",
      category: "AI",
      title: "InvestorGPT",
      description: "Interact with an AI agent. Ask questions about mock stock tickers and examine data citations."
    },
    {
      id: "email-writer",
      category: "AI",
      title: "AI Email Writer",
      description: "Compose email prompts and select custom tones to generate contextual text in real-time."
    },
    {
      id: "trading",
      category: "Finance",
      title: "Trading Engine",
      description: "Adjust ATR, Key Value, and ADX filters. Backtest strategy and plot entries on ETH/USD candle graphs."
    },
    {
      id: "api-orchestrator",
      category: "Systems & Automation",
      title: "API Orchestration",
      description: "Trigger a client request and trace live logs as it routes through Rate Limiting, Caching, and Service calls."
    },
    {
      id: "password-checker",
      category: "Security",
      title: "Password Entropy",
      description: "Type credentials to calculate Shannon entropy and view brute-force crack-time estimation."
    },
    {
      id: "mcp-server",
      category: "AI",
      title: "Model Context Protocol",
      description: "Simulate an LLM context server connection calling filesystem and calculator tools over JSON-RPC."
    }
  ] as SandboxModule[],

  journey: [
    {
      period: "2024",
      title: "First Line of Code",
      subtitle: "Academics & Core Programming",
      details: [
        "Started Computer Science and Engineering B.Tech at VIT Chennai.",
        "Mastered object-oriented logic in C++ and compiled standard Library Management systems with file storage.",
        "Built algorithms analyzing data structures (DSA) to reduce compute complexities."
      ],
      type: "journey"
    },
    {
      period: "2025",
      title: "Quantitative Trading & Systems",
      subtitle: "Pine Script Indicators & APIs",
      details: [
        "Engineered the DeltaBridge Algorithmic Trading Bot utilizing Pine Script multi-timeframe strategies.",
        "Built a robust Flask bridging service processing 24/7 webhooks securely into Delta Exchange API calls.",
        "Gained deep expertise in Python, RESTful API integrations, and backend message queueing."
      ],
      type: "experience"
    },
    {
      period: "2026",
      title: "Agentic AI & Product Engineering",
      subtitle: "Full Stack SaaS & Machine Learning",
      details: [
        "Developed InvestorGPT using 7-agent LLM orchestration and vector embeddings for real-time financial reporting.",
        "Engineered VendorOS, an offline-first POS platform with Supabase Row-Level Security and automated WhatsApp ordering.",
        "Analyzed accident metrics with a 5-model ensemble pipeline (AccidentZero AI) combining CatBoost, XGBoost, and OpenCV."
      ],
      type: "experience"
    }
  ] as TimelineNode[],

  skills: [
    { name: "TypeScript / JavaScript", level: "Expert" },
    { name: "Python", level: "Expert" },
    { name: "React / Next.js", level: "Expert" },
    { name: "FastAPI / Flask", level: "Expert" },
    { name: "Agentic AI / LLMs", level: "Advanced" },
    { name: "PostgreSQL / Supabase", level: "Advanced" },
    { name: "Tailwind CSS", level: "Advanced" },
    { name: "Pine Script / Trading APIs", level: "Advanced" },
    { name: "Docker / Containerization", level: "Learning" },
    { name: "C++ / DSA", level: "Learning" },
    { name: "Computer Vision / OpenCV", level: "Learning" }
  ] as SkillSpec[],

  caseStudies: [
    {
      id: "vendoros",
      projectTitle: "VendorOS SaaS Platform",
      metrics: [
        { label: "Offline Sync", value: "IndexedDB -> PostgreSQL" },
        { label: "Security", value: "RLS + HMAC SHA-256" },
        { label: "Automation", value: "WhatsApp Cloud API" }
      ],
      problem: "Food-tech SaaS clients frequently experience internet outages during peak hours, leading to dropped orders and corrupt state. Additionally, multi-tenant databases risk cross-restaurant data leakage.",
      constraints: "Required a zero-configuration web platform that could run entirely offline in browsers, securely queue transactions, and automatically sync to a single PostgreSQL cluster without risking data crossover.",
      tradeoffs: "Opted for localStorage and IndexedDB queues over heavy desktop client installation, accepting higher frontend complexity to guarantee cross-device compatibility.",
      architectureNodes: [
        { id: "pwa", label: "Next.js PWA", role: "Frontend", description: "Registers Service Workers and manages IndexedDB/localStorage offline queues." },
        { id: "api", label: "Next.js API Routes", role: "Gateway", description: "Verifies Razorpay webhooks via SHA-256 HMAC and processes WhatsApp Cloud API messages." },
        { id: "db", label: "Supabase", role: "Database", description: "Enforces PostgreSQL Row-Level Security so each tenant only queries their own restaurant's data." }
      ],
      architectureConnections: [
        { from: "pwa", to: "api" },
        { from: "api", to: "db" },
        { from: "pwa", to: "db" }
      ],
      implementation: "Built a robust sync engine that intercepts failing POST requests, serializes them to IndexedDB, and replays them upon 'online' window events. Implemented strict PostgreSQL Row-Level Security policies tied to JWT claims.",
      results: "Platform guarantees 100% order retention during outages. Successful mitigation of multi-tenant data leaks and automated 0-touch onboarding through secure WhatsApp integration.",
      businessImpact: "Allowed small restaurant owners to operate without investing in dedicated desktop POS hardware or worrying about network instability.",
      timeline: [
        { label: "Architecture", days: 3 },
        { label: "Offline Sync", days: 7 },
        { label: "RLS & Backend", days: 5 },
        { label: "Deploy", days: 2 }
      ]
    },
    {
      id: "investorgpt",
      projectTitle: "InvestorGPT",
      metrics: [
        { label: "Agents", value: "7-Node Pipeline" },
        { label: "Latency", value: "< 12s Analysis" },
        { label: "Models", value: "Gemini Pro + Pinecone" }
      ],
      problem: "Financial research requires synthesizing disparate data sources: SEC 10-K filings, real-time news sentiment, and quantitative metrics (Piotroski F-Score). LLMs alone hallucinate and cannot perform deterministic math.",
      constraints: "Needed an automated system that could independently run mathematical models, read news, and parse vector embeddings of annual reports without exceeding context windows or API rate limits.",
      tradeoffs: "Traded single-shot speed for multi-agent accuracy. A 7-agent pipeline takes longer to resolve but eliminates hallucinated financial metrics by delegating math to deterministic Python functions.",
      architectureNodes: [
        { id: "front", label: "React UI", role: "Frontend", description: "Streamlines user prompt commands and visualizes tables/charts." },
        { id: "gate", label: "FastAPI Gateway", role: "Orchestrator", description: "Handles CORS, rate limiting, and parallel microservice execution." },
        { id: "sec_db", label: "Pinecone DB", role: "Vector Store", description: "Houses chunked embeddings of financial annual 10-K reports." },
        { id: "llm", label: "Gemini Pro Agent", role: "Reasoning Loop", description: "Iteratively generates search coordinates, analyzes metrics, and synthesizes answers." },
        { id: "fin_api", label: "Yahoo Finance API", role: "Data Feeds", description: "Provides real-time price tickers, financials, and news headlines." }
      ],
      architectureConnections: [
        { from: "front", to: "gate" },
        { from: "gate", to: "llm" },
        { from: "llm", to: "sec_db" },
        { from: "llm", to: "fin_api" }
      ],
      implementation: "Architected a LangChain ReAct (Reasoning and Acting) loop. The primary agent routes tasks: technical analysis queries trigger Yahoo Finance API fetches, while deep qualitative queries trigger RAG searches against the Pinecone 10-K database.",
      results: "Successfully built an AI capable of scoring a stock based on strict Piotroski F-Score logic and defending its thesis using retrieved text from specific pages of a 10-K filing.",
      businessImpact: "Condenses hours of manual equity research and 10-K parsing into a 12-second automated briefing.",
      timeline: [
        { label: "Data Ingestion", days: 4 },
        { label: "Agent Config", days: 6 },
        { label: "API Gateway", days: 3 },
        { label: "UI Polish", days: 3 }
      ]
    },
    {
      id: "accidentzero",
      projectTitle: "AccidentZero AI",
      metrics: [
        { label: "Models", value: "5-Ensemble ML" },
        { label: "Pipeline", value: "XGBoost + OpenCV" },
        { label: "API", value: "FastAPI Async" }
      ],
      problem: "Industrial workplaces face high accident rates due to delayed detection of hazards and PPE non-compliance. Single-model approaches either miss systemic data (sensor logs) or visual data (cameras).",
      constraints: "System required processing both structured operational telemetry and unstructured video streams in near real-time without overwhelming backend compute.",
      tradeoffs: "Utilized an ensemble of highly optimized gradient boosting models (XGBoost/LightGBM) rather than a monolithic deep neural network to ensure sub-second inference on standard hardware.",
      architectureNodes: [
        { id: "cv", label: "OpenCV / YOLO", role: "Vision Pipeline", description: "Detects hardhats, vests, and hazardous proximity." },
        { id: "ml", label: "Ensemble API", role: "Risk Scoring", description: "Fuses XGBoost, LightGBM, and CatBoost probabilities." },
        { id: "backend", label: "FastAPI", role: "Data Aggregator", description: "Ingests telemetry and vision triggers asynchronously." },
        { id: "dash", label: "React UI", role: "Control Center", description: "Plots live incident alerts and systemic risk scores." }
      ],
      architectureConnections: [
        { from: "cv", to: "backend" },
        { from: "backend", to: "ml" },
        { from: "backend", to: "dash" }
      ],
      implementation: "Constructed a dual-pipeline architecture. Pipeline A runs localized YOLO models for immediate PPE violation alerts. Pipeline B aggregates historical shift data through a 5-model ensemble to predict macro-level incident probability.",
      results: "The ensemble approach smoothed out false positives inherent in individual models, creating a highly stable, actionable risk score for safety managers.",
      businessImpact: "Transitions industrial safety from reactive incident reporting to proactive hazard intervention.",
      timeline: [
        { label: "Model Training", days: 6 },
        { label: "CV Pipeline", days: 5 },
        { label: "FastAPI Integration", days: 4 },
        { label: "Dashboard", days: 3 }
      ]
    }
  ] as CaseStudy[],

  openSourceTimeline: [
    {
      date: "2026-03",
      title: "GSoC Proposal Submitted & PR Merged",
      repo: "omegaUp",
      status: "merged",
      link: "https://github.com/omegaUp",
      details: "Merged a production PR fixing a stale-state UI bug in the reactive Vue 3 layer; authoring a Google Summer of Code (GSoC) 2026 proposal."
    },
    {
      date: "2026-02",
      title: "Diagnosed PostgreSQL privilege-leaks",
      repo: "supabase",
      status: "merged",
      link: "https://github.com/dhruvv16-hash/supabase",
      details: "Built automated diagnostic suites and SQL reconciliation scripts to speed up platform-team triage for privilege-leaks and DNS-outage issues."
    },
    {
      date: "2026-01",
      title: "Fixed CI Pipeline Failures",
      repo: "kubernetes/sig-windows",
      status: "merged",
      link: "https://github.com/kubernetes/sig-windows",
      details: "Authored a Python janitor script to cleanly destroy lingering Azure AD and resource-group artifacts, resolving flaky E2E testing pipelines."
    },
    {
      date: "2025-11",
      title: "Resolved Core Dependency Conflicts",
      repo: "OpenBB",
      status: "merged",
      link: "https://github.com/dhruvv16-hash/OpenBB",
      details: "Identified and patched severe Poetry packaging conflicts between submodules, unblocking deployments for users on strict package managers."
    }
  ] as OpenSourcePR[],

  whyDhruv: [
    {
      title: "Full-Stack + Systems Thinking",
      description: "I don't just build UIs. I architect the underlying databases, configure the reverse proxies, and orchestrate the background task queues."
    },
    {
      title: "Domain Adaptability",
      description: "From quantitative TradingView indicator algorithms to multi-agent financial LLM pipelines, I adapt quickly to rigorous, math-heavy domains."
    },
    {
      title: "Open Source Contributor",
      description: "Proven ability to dive into massive, undocumented enterprise codebases (Supabase, Kubernetes) and successfully merge production fixes."
    }
  ] as WhyDhruvNode[]
};
