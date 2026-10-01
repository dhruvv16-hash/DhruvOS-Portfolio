export interface ProjectModule {
  id: string;
  title: string;
  description: string;
  tech: string[];
  features: string[];
  link: string;
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
      title: "VendorOS",
      description: "Multi-Tenant Food-Tech SaaS Platform with offline-first sync (localStorage queue → Supabase). Automated order intake through WhatsApp Cloud API and secured with HMAC.",
      tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
      features: [
        "Offline-first sync",
        "Row-Level Security",
        "WhatsApp automated ordering",
        "HMAC signature validation"
      ],
      link: "https://github.com/dhruvv16-hash/VendorOS"
    },
    {
      id: "investorgpt",
      title: "InvestorGPT",
      description: "7-agent orchestration pipeline (financial-ingestion, valuation, technical, sentiment) reconciling signals into one verdict. Implemented quantitative scoring models (Piotroski F-Score).",
      tech: ["Next.js", "FastAPI", "Python", "SQLAlchemy", "Agentic AI"],
      features: [
        "7-agent orchestration",
        "Quantitative scoring models",
        "MPT portfolio simulation",
        "Debate-and-consensus workflow"
      ],
      link: "https://github.com/dhruvv16-hash/InvestorGPT"
    },
    {
      id: "accidentzero",
      title: "AccidentZero AI",
      description: "5-model ensemble scoring real-time accident risk from operational metrics, fused with a computer-vision pipeline for PPE-violation and scene-risk detection.",
      tech: ["Python", "FastAPI", "XGBoost", "LightGBM", "CatBoost"],
      features: [
        "5-model ensemble",
        "Computer-vision pipeline",
        "Real-time safety dashboards",
        "FastAPI batch processing"
      ],
      link: "https://github.com/dhruvv16-hash/Accident-0-AI"
    },
    {
      id: "trading",
      title: "DeltaBridge Trading Bot",
      description: "Algorithmic Trading Bot (ETH/USD). Multi-timeframe strategy suppressing false entries. Flask bridge from TradingView to Delta Exchange for 24/7 automated execution.",
      tech: ["Pine Script", "Python", "Flask", "Crypto APIs", "SQLite"],
      features: [
        "Multi-timeframe strategy",
        "24/7 automated execution",
        "HMAC-SHA256 security",
        "Dynamic position sizing"
      ],
      link: "https://github.com/dhruvv16-hash/DeltaBridge"
    },
    {
      id: "openbb",
      title: "OpenBB Core",
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
      title: "Supabase Core",
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
        "Designed ETH/USD quantitative strategy incorporating ATR stop losses and ADX filters in Pine Script.",
        "Wrote automated Python connectors querying Crypto.com APIs for real-time order placements.",
        "Constructed a high-fidelity REST API gateway in Spring Boot caching client responses."
      ],
      type: "journey"
    },
    {
      period: "2026",
      title: "Open Source & AI Agentics",
      subtitle: "omegaUp Contributor & InvestorGPT",
      details: [
        "Became open-source contributor to omegaUp, resolving Vue 3 reactive-state administrative bugs and search concurrency race conditions.",
        "Submitted a Google Summer of Code (GSoC) 2026 proposal.",
        "Designed and shipped InvestorGPT - combining vector indexes (Pinecone) and LLM agent routing."
      ],
      type: "journey"
    },
    {
      period: "Present",
      title: "Building Scalable Products",
      subtitle: "DhruvOS Launch",
      details: [
        "Synthesizing production-grade software products and custom developer integrations.",
        "Open for select AI engineer, backend infrastructure, and quant system roles."
      ],
      type: "journey"
    }
  ] as TimelineNode[],

  experienceList: [
    {
      period: "2024 - Present",
      title: "Open Source Contributor & Hackathon Winner",
      subtitle: "Multiple Organizations (Supabase, omegaUp, Kubernetes, OpenBB)",
      details: [
        "iQOO Connect Hackathon: Winner — prototype under fixed deadline.",
        "omegaUp: Merged production PR fixing stale-state UI bug in Vue 3 layer; authored GSoC 2026 proposal.",
        "Supabase: Diagnosed PostgreSQL privilege-leak and DNS-outage issues; built automated triage scripts.",
        "Kubernetes (sig-windows): Fixed E2E CI pipeline failures via Python janitor script for Azure AD resources."
      ],
      type: "experience"
    },
    {
      period: "2024 - 2028",
      title: "B.Tech in Computer Science and Engineering",
      subtitle: "Vellore Institute of Technology, Chennai",
      details: [
        "Coursework: Data Structures & Algorithms, OOP, Computer Networks, Operating Systems, Computer Organization & Architecture, Theory of Computation."
      ],
      type: "education"
    }
  ] as TimelineNode[],

  skills: [
    { name: "Python", level: "Expert" },
    { name: "Next.js & React", level: "Expert" },
    { name: "TypeScript", level: "Expert" },
    { name: "FastAPI", level: "Expert" },
    { name: "PostgreSQL & Supabase", level: "Expert" },
    { name: "Spring Boot", level: "Advanced" },
    { name: "Docker & Kubernetes", level: "Advanced" },
    { name: "Machine Learning (XGBoost)", level: "Advanced" },
    { name: "C++ & Java", level: "Advanced" },
    { name: "Agentic AI", level: "Learning" }
  ] as SkillSpec[],

  whyDhruv: [
    {
      title: "Systems Thinking",
      description: "I build code with deep constraints in mind. I prioritize database query indexing, memory profiling, and REST standards over quick hacks."
    },
    {
      title: "AI-First Development",
      description: "I go beyond wrappers. I design multi-agent feedback loops, robust caching layers, semantic vector search, and precise citation formatting."
    },
    {
      title: "Open Source Rigor",
      description: "Active contributor to platforms like omegaUp. I write test suites in Jest/Cypress, manage API concurrency, and submit well-documented PRs."
    },
    {
      title: "Finance & Quantitative Skills",
      description: "I bridge math, finance, and engineering, designing indicators (Pine Script) and backtesting strategies based on metrics like profit factors and drawdowns."
    },
    {
      title: "Rapid MVP Execution",
      description: "From design and OpenAPI documentation to building Chrome extensions, FastAPI backends, and responsive UIs, I ship robust code fast."
    }
  ] as WhyDhruvNode[],

  caseStudies: [
    {
      id: "vendoros",
      projectTitle: "VendorOS SaaS Platform",
      metrics: [
        { label: "Offline Sync Queue", value: "localStorage" },
        { label: "Data Security", value: "Supabase RLS" },
        { label: "Order Automation", value: "WhatsApp API" },
        { label: "Webhook Auth", value: "HMAC-SHA256" }
      ],
      problem: "Restaurants face severe order loss during connectivity drops. Traditional POS systems require expensive local servers to stay online, while cloud-only solutions fail during internet outages.",
      constraints: "The system must take orders fully offline and sync transparently on reconnect without conflicts. Tenant data must be completely isolated at the database layer using Row-Level Security.",
      tradeoffs: "We sacrificed real-time websocket delivery guarantees for a robust offline-first background queue. This creates minor delays during sync loops but mathematically eliminates order-loss during outages.",
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
      implementation: "Built a React custom hook useOfflineSync that polls network state. Leveraged Supabase RLS with custom claim JWTs for tenant isolation.",
      results: "Deployed production multi-tenant architecture. Zero order loss recorded during localized internet outages.",
      businessImpact: "Cut manual order reconciliation time by 4 hours per week per vendor. Allowed restaurant staff to keep operating seamlessly under harsh network conditions.",
      timeline: [
        { label: "Schema Design", days: 3 },
        { label: "RLS Policies", days: 2 },
        { label: "PWA Offline", days: 5 },
        { label: "Webhooks", days: 4 }
      ]
    },
    {
      id: "investorgpt",
      projectTitle: "InvestorGPT",
      metrics: [
        { label: "Document Vector Index", value: "Pinecone DB" },
        { label: "Average Query Latency", value: "480ms" },
        { label: "Hallucination Reduction", value: "~90%" },
        { label: "Data Providers", value: "Yahoo Finance & News APIs" }
      ],
      problem: "Traditional financial search queries often hallucinate numbers or cite outdated reports. SEC documents are long and exhausting for investors to cross-reference.",
      constraints: "Financial answers must be backed by literal numeric facts. Latency must remain low even when pulling files and doing live summarizations. Token costs must be strictly optimized.",
      tradeoffs: "We chose a dual-agent architecture (Retrieval Agent + Synthesis Agent) over a single massive context window. This added minor routing latency but drastically reduced LLM input costs and improved citation accuracy.",
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
        { from: "llm", to: "fin_api" },
        { from: "llm", to: "gate" },
        { from: "gate", to: "front" }
      ],
      implementation: "Developed a Python backend utilizing FastAPI for stream responses. Programmed semantic chunking that maps files into Pinecone vectors. Implemented multi-agent loops that verify claims against raw SEC datasets.",
      results: "InvestorGPT answers queries with specific numeric coordinates (e.g. Page 12, paragraph 3 of 10-K). Backtesting showed a 90% reduction in false statements compared to standard OpenAI zero-shot attempts.",
      businessImpact: "Investors save hours of manual review. Delivers enterprise-grade, audit-ready data directly to client dashboards, proving the viability of factual AI agents.",
      timeline: [
        { label: "Research", days: 3 },
        { label: "Architecture", days: 2 },
        { label: "Backend", days: 6 },
        { label: "Frontend", days: 4 },
        { label: "Testing", days: 3 },
        { label: "Deployment", days: 2 }
      ]
    },
    {
      id: "trading",
      projectTitle: "ETH/USD Algorithmic Trading System",
      metrics: [
        { label: "Backtests Executed", value: "742 Runs" },
        { label: "Profit Factor", value: "1.84" },
        { label: "Trend Filters", value: "ADX > 25" },
        { label: "Timeframe Crossover", value: "15m & 1h Crossovers" }
      ],
      problem: "Crypto markets are highly volatile. Standard trend-following strategies fail during consolidation (sideways chop), leading to account drawdowns.",
      constraints: "Trading signals must execute immediately to avoid slippage. Risk management must handle extreme spikes (like liquidations). Execution code must be clean, verified, and backtestable.",
      tradeoffs: "We traded execution frequency for win rate: by requiring ADX > 25 (confirming a strong trend) before entries, the bot takes 40% fewer trades but filters out false breakout signals.",
      architectureNodes: [
        { id: "tv", label: "Pine Script Engine", role: "Strategy Indicators", description: "Computes trend values, LR, and outputs entries on TradingView." },
        { id: "bridge", label: "Python Middleware", role: "Order Dispatcher", description: "Polls alert webhooks and processes payload requests." },
        { id: "crypto_api", label: "Crypto.com Exchange", role: "Liquidity Provider", description: "Executes trade orders and updates wallet balances." }
      ],
      architectureConnections: [
        { from: "tv", to: "bridge" },
        { from: "bridge", to: "crypto_api" }
      ],
      implementation: "Authored Pinescript logic utilizing multi-timeframe variables. Integrated Linear Regression crossovers as trigger vectors. Designed a local Python bridge executing orders in less than 90ms.",
      results: "Achieved a 1.84 Profit Factor over 2 years of simulated historical ETH/USD candles. Cut lateral market losses by 45%.",
      businessImpact: "Proves quantitative engineering competencies. Eliminates emotional bias, protecting capital through automated stop-losses and risk controls.",
      timeline: [
        { label: "Research", days: 4 },
        { label: "Design", days: 2 },
        { label: "Strategy Code", days: 5 },
        { label: "API Bridge", days: 4 },
        { label: "Testing", days: 3 },
        { label: "Deployment", days: 1 }
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
      link: "https://github.com/kubernetes",
      details: "Fixed recurring E2E CI pipeline failures via a Python janitor script that auto-purges soft-deleted Azure AD resources."
    },
    {
      date: "2025-12",
      title: "Resolved Poetry Packaging Conflicts",
      repo: "OpenBB",
      status: "merged",
      link: "https://github.com/dhruvv16-hash/OpenBB",
      details: "Merged a PR resolving Poetry packaging conflicts between core modules, eliminating install failures on OS package managers."
    }
  ] as OpenSourcePR[]
};
