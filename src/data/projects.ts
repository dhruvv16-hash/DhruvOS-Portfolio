export const projects = [
  {
    id: 1,
    title: "VendorOS — Multi-Tenant Food-Tech SaaS Platform",
    description: "Built a production POS, Kitchen Display System, and inventory-management PWA to replace a restaurant's paper-and-spreadsheet order flow. Implemented offline-first sync (localStorage queue → Supabase on reconnect) so staff keep taking and fulfilling orders through connectivity drops with zero order loss. Enforced Row-Level Security policies on every Supabase table and automated order intake through the Meta WhatsApp Cloud API.",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "WhatsApp API"],
    features: ["Offline-first sync", "Row-Level Security", "WhatsApp automated ordering"],
    link: "https://github.com/dhruvv16-hash/VendorOS",
    fileName: "syncQueue.ts",
    codeSnippet: `// Offline-first sync mechanism
window.addEventListener('online', async () => {
  const queue = JSON.parse(localStorage.getItem('offlineOrders') || '[]');
  if (queue.length > 0) {
    const { data, error } = await supabase.from('orders').insert(queue);
    if (!error) localStorage.removeItem('offlineOrders');
  }
});`,
  },
  {
    id: 2,
    title: "InvestorGPT — Multi-Agent AI Investment Platform",
    description: "Architected a 7-agent orchestration pipeline (financial-ingestion, valuation, technical, sentiment, Consensus, and Reviewer agents) that reconciles conflicting buy/sell signals into one research verdict. Implemented quantitative scoring models (Piotroski F-Score, Altman Z-Score, DCF) and an MPT portfolio studio for 500 Efficient Frontier configurations.",
    tech: ["Next.js", "FastAPI", "Python", "SQLAlchemy", "Agentic AI"],
    features: ["7-agent orchestration", "Quantitative scoring models", "MPT portfolio simulation"],
    link: "https://github.com/dhruvv16-hash/InvestorGPT",
    fileName: "orchestrator.py",
    codeSnippet: `def consensus_workflow(signals):
    reviewer = Agent(role="Reviewer", goal="Reconcile buy/sell signals")
    consensus = reviewer.execute(signals)
    if consensus.confidence > 0.8:
        return execute_trade(consensus.action)
    return request_human_review(consensus)`,
  },
  {
    id: 3,
    title: "AccidentZero AI — Industrial Safety Risk Monitoring",
    description: "Built a 5-model ensemble (XGBoost, LightGBM, CatBoost, LSTM, rule engine) that scores real-time accident risk from operational metrics, fused with a computer-vision pipeline for PPE-violation and scene-risk detection. Exposed predictions via FastAPI batch (Excel) and real-time endpoints with Chart.js dashboards.",
    tech: ["Python", "FastAPI", "XGBoost", "LightGBM", "CatBoost", "LSTM"],
    features: ["5-model ensemble", "Computer-vision pipeline", "Real-time safety dashboards"],
    link: "https://github.com/dhruvv16-hash/Accident-0-AI",
    fileName: "ensemble.py",
    codeSnippet: `def calculate_risk_score(metrics, cv_flags):
    preds = [
        xgb_model.predict(metrics),
        lgb_model.predict(metrics),
        cat_model.predict(metrics)
    ]
    ensemble_score = np.mean(preds)
    if cv_flags.get('no_ppe'):
        ensemble_score *= 1.5 # Apply risk multiplier
    return ensemble_score`,
  },
  {
    id: 4,
    title: "DeltaBridge — Algorithmic Trading Bot (ETH/USD)",
    description: "Designed a multi-timeframe strategy (UT Bot Alerts + Linear Regression + ADX trend-strength filtering) to suppress false entries in choppy price action. Built a production Flask bridge from TradingView alerts to Delta Exchange for 24/7 automated execution, secured with HMAC-SHA256 signed requests.",
    tech: ["Pine Script", "Python", "Flask", "SQLite", "Crypto APIs"],
    features: ["Multi-timeframe strategy", "24/7 automated execution", "HMAC-SHA256 security"],
    link: "https://github.com/dhruvv16-hash/DeltaBridge",
    fileName: "strategy.pine",
    codeSnippet: `//@version=5
strategy("ETH/USD Trend Following", overlay=true)
src = close
lr = ta.linreg(src, 14, 0)
[diplus, diminus, adx] = ta.dmi(14, 14)
buySignal = ta.crossover(src, lr) and adx > 25
if (buySignal)
    strategy.entry("Long", strategy.long)`,
  },
  {
    id: 5,
    title: "OpenBB — Open Source Contribution",
    description: "Merged a pull request resolving Poetry packaging conflicts between core modules for the OpenBB terminal. This eliminated installation failures on OS package managers with strict file ownership, directly contributing to one of the leading open-source financial platforms.",
    tech: ["Python", "Poetry", "Open Source", "Finance"],
    features: ["Package management fix", "Dependency resolution", "Core module stability"],
    link: "https://github.com/dhruvv16-hash/OpenBB",
    fileName: "pyproject.toml",
    codeSnippet: `[tool.poetry.dependencies]
python = ">=3.9,<3.12"
numpy = "^1.24.0"
# Resolved conflicting version constraints
pandas = ">=1.5.0,<3.0.0"`,
  },
  {
    id: 6,
    title: "Supabase — Open Source Contribution",
    description: "Diagnosed PostgreSQL privilege-leak and DNS-outage issues for Supabase. Built automated diagnostic suites and SQL reconciliation scripts to speed up platform-team triage and ensure database consistency across instances.",
    tech: ["TypeScript", "PostgreSQL", "SQL", "Diagnostics"],
    features: ["Privilege-leak patching", "DNS outage diagnostics", "Automated SQL reconciliation"],
    link: "https://github.com/dhruvv16-hash/supabase",
    fileName: "diagnostics.sql",
    codeSnippet: `-- SQL Reconciliation Script
DO $$
DECLARE
  leaked_role record;
BEGIN
  FOR leaked_role IN SELECT rolname FROM pg_roles WHERE rolsuper = true LOOP
    RAISE NOTICE 'Admin role found: %', leaked_role.rolname;
  END LOOP;
END;
$$;`,
  }
];
