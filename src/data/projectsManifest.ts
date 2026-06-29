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
      id: "investorgpt",
      title: "InvestorGPT",
      description: "An AI-powered financial intelligence agent that retrieves, aggregates, and summarizes earnings reports, SEC filings, and real-time market news. Built using a multi-agent orchestration architecture to handle complex financial queries, reduce LLM hallucination, and deliver direct source citations.",
      tech: ["FastAPI", "Gemini AI", "Pinecone DB", "Yahoo Finance API", "React"],
      features: [
        "Multi-agent retrieval reasoning loops",
        "Semantic search across SEC 10-K filings",
        "Direct numerical & textual source citations",
        "Streamed financial insights & charts"
      ],
      link: "https://github.com/dhruvv16-hash"
    },
    {
      id: "trading",
      title: "Algorithmic ETH/USD Trading System",
      description: "Designed and backtested a multi-timeframe quantitative ETH/USD strategy. Combines UT Bot Alerts, Linear Regression lines, and ADX filter variables. Implemented on TradingView with real-time data backtesting dashboard logs to evaluate profitability and risk metrics.",
      tech: ["Pine Script", "TradingView", "Python", "Crypto.com API", "Recharts"],
      features: [
        "ADX trend strength filtering",
        "Linear Regression crossovers",
        "ATR-based dynamic stop-loss adjustments",
        "Quantitative statistics console output"
      ],
      link: "https://github.com/dhruvv16-hash/DeltaBridge"
    },
    {
      id: "email-writer",
      title: "AI Email Writer (Chrome Extension)",
      description: "A productivity tool that injects context-aware reply actions into Gmail interfaces using MutationObservers. Communicates with a secure Spring Boot gateway to process threads and synthesize Gemini drafts.",
      tech: ["Java", "Spring Boot", "Gemini AI API", "Chrome Extension API", "JavaScript"],
      features: [
        "Real-time DOM mutation observers",
        "Spring Boot gateway caching",
        "Contextual tone adjustments",
        "Direct inject integration"
      ],
      link: "https://github.com/dhruvv16-hash/EMAIL_WRITER-AI"
    },
    {
      id: "api-orchestrator",
      title: "FastAPI Service Orchestration Pipeline",
      description: "A robust middleware orchestrator demonstrating advanced enterprise API design: rate-limiting buckets, redis cache hits, standard token verification, microservice orchestration, and graceful degradation protocols.",
      tech: ["FastAPI", "Redis", "Docker", "Python", "REST APIs"],
      features: [
        "Token bucket rate limiting",
        "Caching and cache invalidation",
        "Concurrent microservice polling",
        "Detailed request execution console tracing"
      ],
      link: "https://github.com/dhruvv16-hash"
    },
    {
      id: "password-checker",
      title: "Password Strength & Entropy Analyzer",
      description: "Calculates character distribution Shannon entropy and evaluates brute-force time-to-crack. Detects credential vulnerabilities and details custom remediation vectors.",
      tech: ["Python", "JavaScript", "Information Theory", "Security"],
      features: [
        "Shannon entropy mathematics",
        "Brute-force crack time calculator",
        "Real-time vulnerability checklists",
        "Strength-tier diagnostics"
      ],
      link: "https://github.com/dhruvv16-hash"
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
      period: "2026",
      title: "Open Source Contributor",
      subtitle: "omegaUp (Vue 3, TypeScript, Jest, Cypress, PHP)",
      details: [
        "Diagnosed and fixed stale-state bug in Teams Group admin page using Vue 3 reactive refs, bypassing full page reloads.",
        "Shipped a debounced, Enter-key-aware search experience with synchronised URL routing for problem boards.",
        "Resolved a concurrent API response race condition using request-cancellation patterns.",
        "Authored GSoC 2026 proposal to migrate admin panels and integrate ESLint regression checks."
      ],
      type: "experience"
    },
    {
      period: "2024 - 2028",
      title: "B.Tech in Computer Science and Engineering",
      subtitle: "Vellore Institute of Technology, Chennai",
      details: [
        "Data Structures and Algorithms (DSA), Object-Oriented Programming (OOP), Operating Systems, Computer Networks, and Business Analytics."
      ],
      type: "education"
    }
  ] as TimelineNode[],

  skills: [
    { name: "Python", level: "Expert" },
    { name: "Spring Boot", level: "Expert" },
    { name: "FastAPI", level: "Expert" },
    { name: "React", level: "Expert" },
    { name: "C++", level: "Expert" },
    { name: "Docker", level: "Advanced" },
    { name: "SQL", level: "Advanced" },
    { name: "TradingView", level: "Advanced" },
    { name: "Git & CI/CD", level: "Advanced" },
    { name: "TypeScript / Vue", level: "Advanced" },
    { name: "LangGraph", level: "Learning" },
    { name: "Agentic AI", level: "Learning" },
    { name: "MCP", level: "Learning" },
    { name: "Rust", level: "Learning" }
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
      title: "GSoC Proposal Submitted",
      repo: "omegaUp",
      status: "in-review",
      link: "https://github.com/omegaUp",
      details: "Detailed a comprehensive plan to rewrite stale state administrative flows in Vue 3 and establish ESLint guardrails against future state regressions."
    },
    {
      date: "2026-02",
      title: "Fixed Search Concurrency Race Conditions",
      repo: "omegaUp/frontend",
      status: "merged",
      link: "https://github.com/omegaUp/frontend",
      details: "Resolved concurrent API responses race conditions in the Problems board search field. Implemented a debounced request-cancellation signal pattern."
    },
    {
      date: "2026-01",
      title: "Resolved Stale-State Admin Bug",
      repo: "omegaUp/frontend",
      status: "merged",
      link: "https://github.com/omegaUp/frontend",
      details: "Diagnosed stale-state bug in Teams Group admin page. Swapped immutable server payload with reactive ref state, fixing out-of-sync tabs."
    },
    {
      date: "2025-12",
      title: "API Docs Layout Bug Fix",
      repo: "omegaUp/docs",
      status: "merged",
      link: "https://github.com/omegaUp",
      details: "Fixed malformed HTML tables rendering in Contest public endpoint developers reference guide."
    }
  ] as OpenSourcePR[]
};
