import { useState } from 'react'
import { Shield, TrendingUp, Sparkles, X, Play, Layers } from 'lucide-react'

import { AnimatePresence } from 'framer-motion'

interface ProductPlaygroundProps {
  onSandboxRun: (sandboxId: string) => void
}

export function ProductPlayground({ onSandboxRun }: ProductPlaygroundProps) {
  const [activeSandbox, setActiveSandbox] = useState<string | null>(null)

  const openSandbox = (id: string) => {
    setActiveSandbox(id)
    onSandboxRun(id) // Increment telemetry exploration stats
  }

  return (
    <section id="sandbox" className="py-24 bg-zinc-950 border-b border-zinc-900 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <span className="text-red-500 text-xs font-mono uppercase tracking-widest block mb-2">Sandbox Labs</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">The Product Playground</h2>
          <p className="text-zinc-500 text-xs md:text-sm font-mono mt-2">
            Open sandboxes to compile live quantitative models, trigger backend pipeline caches, and generate AI insights.
          </p>
        </div>

        {/* Categories Sandbox Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* AI Category */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-2">
              Artificial Intelligence
            </div>
            
            {/* InvestorGPT Card */}
            <div className="bg-black border border-zinc-900 rounded-xl p-5 hover:border-zinc-700 transition-all flex flex-col justify-between h-48">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <Sparkles className="w-5 h-5 text-red-500" />
                  <span className="text-xxs px-2 py-0.5 bg-red-500/10 text-red-400 rounded-full border border-red-500/20 font-mono">FLAGSHIP</span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">InvestorGPT</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                  Multi-agent retrieval reasoning loop analyzing SEC 10-Ks with numeric citations.
                </p>
              </div>
              <button
                onClick={() => openSandbox('investorgpt')}
                className="w-full text-center py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-semibold font-mono transition-colors border border-zinc-880"
              >
                Open Sandbox
              </button>
            </div>

            {/* AI Email Card */}
            <div className="bg-black border border-zinc-900 rounded-xl p-5 hover:border-zinc-700 transition-all flex flex-col justify-between h-48">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <Sparkles className="w-5 h-5 text-zinc-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">AccidentZero AI</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                  Ensemble model simulator fusing XGBoost telemetry and computer-vision PPE detection.
                </p>
              </div>
              <button
                onClick={() => openSandbox('accidentzero')}
                className="w-full text-center py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-semibold font-mono transition-colors border border-zinc-800"
              >
                Open Sandbox
              </button>
            </div>
          </div>

          {/* Finance Category */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-2">
              Quantitative Finance
            </div>

            {/* Trading Engine Card */}
            <div className="bg-black border border-zinc-900 rounded-xl p-5 hover:border-zinc-700 transition-all flex flex-col justify-between h-48">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">DeltaBridge Trading Backtester</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                  ETH/USD backtesting dashboard calculating UT Bot + Linear Regression + ADX filters.
                </p>
              </div>
              <button
                onClick={() => openSandbox('deltabridge')}
                className="w-full text-center py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-semibold font-mono transition-colors border border-zinc-800"
              >
                Open Sandbox
              </button>
            </div>
          </div>

          {/* Systems & Security Category */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-2">
              Systems & Security
            </div>

            {/* API Orchestrator Card */}
            <div className="bg-black border border-zinc-900 rounded-xl p-5 hover:border-zinc-700 transition-all flex flex-col justify-between h-48">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <Layers className="w-5 h-5 text-green-500" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">VendorOS</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                  Offline-first PWA sync simulator. Queueing orders in localStorage before dispatching to Supabase.
                </p>
              </div>
              <button
                onClick={() => openSandbox('vendoros')}
                className="w-full text-center py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-semibold font-mono transition-colors border border-zinc-800"
              >
                Open Sandbox
              </button>
            </div>

            {/* Open Source Diagnostics Card */}
            <div className="bg-black border border-zinc-900 rounded-xl p-5 hover:border-zinc-700 transition-all flex flex-col justify-between h-48">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <Shield className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">Open Source Diagnostics</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                  Trigger automated SQL reconciliation scripts and Azure AD Janitor daemon cleanup pipelines.
                </p>
              </div>
              <button
                onClick={() => openSandbox('opensource')}
                className="w-full text-center py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-semibold font-mono transition-colors border border-zinc-800"
              >
                Open Sandbox
              </button>
            </div>
          </div>

        </div>

        {/* Sandbox Overlays rendering */}
        <AnimatePresence>
          {activeSandbox && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto">
              <div className="w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
                
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 bg-zinc-900 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="text-sm font-mono text-zinc-300">
                      DHRUVOS_SANDBOX: {activeSandbox.toUpperCase()}
                    </span>
                  </div>
                  <button 
                    onClick={() => setActiveSandbox(null)}
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Sandbox Body Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  {activeSandbox === 'investorgpt' && <InvestorGPTSandbox />}
                  {activeSandbox === 'accidentzero' && <AccidentZeroSandbox />}
                  {activeSandbox === 'deltabridge' && <DeltaBridgeSandbox />}
                  {activeSandbox === 'vendoros' && <VendorOSSandbox />}
                  {activeSandbox === 'opensource' && <OpenSourceSandbox />}
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

// ----------------------------------------------------
// 1. INVESTORGPT SANDBOX MODULE
// ----------------------------------------------------
function InvestorGPTSandbox() {
  const [ticker, setTicker] = useState('AAPL')
  const [question, setQuestion] = useState('Analyze liquidity risk')
  const [logs, setLogs] = useState<string[]>([])
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [activeCitation, setActiveCitation] = useState<{ source: string; text: string } | null>(null)

  const mockQuotes: Record<string, string> = {
    AAPL: "Based on Apple's FY2025 10-K report, their quick ratio stands at 0.94 [1] (cash of $26.4B and marketable securities of $44.8B against current liabilities of $124.2B). Liquidity risk is low due to strong operating cashflows ($104.7B) [2].",
    TSLA: "Tesla's FY2025 financial disclosures reveal a quick ratio of 1.25 [1] (cash assets of $31.2B against current liabilities of $28.5B). Tesla relies heavily on automated production capital, leaving them vulnerable to supply-chain disruptions [2].",
    ETH: "Ethereum financial models trace liquidity risk across validator exits [1]. Current network active staked assets stand at 34.2M ETH [2] with exit times averaging 4.2 days. Slippage concerns remain during extreme volatility bounds."
  }

  const mockCitations: Record<string, Record<string, string>> = {
    AAPL: {
      '[1]': "SEC Form 10-K p. 44 (Apple Inc. FY25 Consolidated Balance Sheets): cash assets $26,420M, securities $44,800M, liabilities $124,242M.",
      '[2]': "SEC Form 10-K p. 52 (Apple Inc. Statements of Cash Flows): cash generated by operations $104,742M."
    },
    TSLA: {
      '[1]': "SEC Form 10-K p. 28 (Tesla Inc. Balance Sheet): Cash and cash equivalents $31,210M, liabilities $28,502M.",
      '[2]': "SEC Form 10-K p. 11 (Tesla Inc. Risk Factors): Capital spending metrics and supply chain vulnerability analysis."
    },
    ETH: {
      '[1]': "Ethereum Core specs (EIP-4844 update): Exit queue parameters and queue churn limits.",
      '[2]': "Beaconcha.in network state: 34.2M ETH locked, queue length 1,240 validators."
    }
  }

  // Mock RAG vector nodes
  const vectorNodes: Record<string, Array<{ id: string; x: number; y: number; val: string; sim: number; text: string }>> = {
    AAPL: [
      { id: '[1]', x: 180, y: 70, val: 'SEC 10-K Cash Flow (p. 52)', sim: 0.91, text: "SEC Form 10-K p. 52 (Apple Inc. Statements of Cash Flows): cash generated by operations $104,742M." },
      { id: '[2]', x: 220, y: 120, val: 'SEC 10-K Assets Balance (p. 44)', sim: 0.94, text: "SEC Form 10-K p. 44 (Apple Inc. Consolidated Balance Sheets): cash assets $26,420M, securities $44,800M, liabilities $124,242M." },
      { id: 'Noise A', x: 80, y: 180, val: 'Corporate Store Count (p. 12)', sim: 0.45, text: "Unrelated store metrics chunk matching minor keyword indices. Distance score low." },
      { id: 'Noise B', x: 120, y: 220, val: 'Component Sourcing Spec (p. 48)', sim: 0.62, text: "General supply chain warnings, filtered out by semantic rank thresholding." }
    ],
    TSLA: [
      { id: '[1]', x: 210, y: 90, val: 'SEC 10-K Balance Sheet (p. 28)', sim: 0.95, text: "SEC Form 10-K p. 28 (Tesla Inc. Balance Sheet): Cash and cash equivalents $31,210M, liabilities $28,502M." },
      { id: '[2]', x: 170, y: 140, val: 'SEC 10-K Risk Factors (p. 11)', sim: 0.88, text: "SEC Form 10-K p. 11 (Tesla Inc. Risk Factors): Capital spending metrics and supply chain vulnerability analysis." },
      { id: 'Noise A', x: 90, y: 200, val: 'Gigafactory Output (p. 4)', sim: 0.58, text: "Factory assembly rates, excluded from synthesis block." }
    ],
    ETH: [
      { id: '[1]', x: 220, y: 80, val: 'EIP-4844 exit queue limits', sim: 0.96, text: "Ethereum Core specs (EIP-4844 update): Exit queue parameters and queue churn limits." },
      { id: '[2]', x: 180, y: 130, val: 'Beaconcha.in network state', sim: 0.92, text: "Beaconcha.in network state: 34.2M ETH locked, queue length 1,240 validators." },
      { id: 'Noise A', x: 100, y: 190, val: 'EIP-1559 Base fee config', sim: 0.48, text: "Transaction base fee history logs. Low vector similarity score." }
    ]
  }

  const runQuery = () => {
    setIsLoading(true)
    setLogs([])
    setResponse('')
    setActiveCitation(null)

    const bootLogs = [
      'Initializing RAG retrieval pipeline...',
      `handshake: Yahoo Finance API fetch ticker: ${ticker}`,
      `Querying Pinecone DB for embeddings matching '${question}'...`,
      'Retrieved 2 text segments (similarity score 0.88)...',
      'Routing query to Gemini inference agent...',
      'Formatting citations and numerical outputs...'
    ]

    let currentLogIdx = 0
    const logInterval = setInterval(() => {
      if (currentLogIdx < bootLogs.length) {
        setLogs((prev) => [...prev, bootLogs[currentLogIdx]])
        currentLogIdx++
      } else {
        clearInterval(logInterval)
        setResponse(mockQuotes[ticker])
        setIsLoading(false)
      }
    }, 450)
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 font-mono text-xs md:text-sm text-green-500">
      <div className="space-y-4 bg-zinc-900/20 p-5 rounded-lg border border-zinc-900">
        <h4 className="text-zinc-200 font-bold border-b border-zinc-800 pb-2">INPUT PARAMETERS</h4>
        
        <div className="space-y-2">
          <label className="text-zinc-500">Select Asset Ticker:</label>
          <select
            value={ticker}
            onChange={(e) => setTicker(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded p-2 text-zinc-300 outline-none"
          >
            <option value="AAPL">Apple Inc. (AAPL)</option>
            <option value="TSLA">Tesla Motors (TSLA)</option>
            <option value="ETH">Ethereum (ETH/USD)</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-zinc-500">Query Agent:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded p-2 text-zinc-300 outline-none"
          />
        </div>

        <button
          onClick={runQuery}
          disabled={isLoading}
          className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white rounded font-bold transition-colors flex items-center justify-center gap-2 border border-red-500/20"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Execute Agent Loop</span>
        </button>
      </div>

      {/* Console logs & Response */}
      <div className="flex flex-col h-[230px] bg-black rounded-lg border border-zinc-900 overflow-hidden">
        <div className="px-4 py-2 bg-zinc-900 text-zinc-400 font-bold border-b border-zinc-850 flex justify-between items-center text-xxs">
          <span>CONSOLE LOGS</span>
          <span>Inference: Gemini Pro</span>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-[11px] text-zinc-400">
          {logs.map((log, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-zinc-650">&gt;&gt;</span>
              <span>{log}</span>
            </div>
          ))}

          {response && (
            <div className="border-t border-zinc-900 pt-3 mt-3 text-green-400 animate-in fade-in duration-300 leading-relaxed">
              <span className="font-bold text-white block mb-1">AGENT RESPONSE:</span>
              <p>
                {response.split(' ').map((word, i) => {
                  if (word.includes('[1]') || word.includes('[2]')) {
                    const cit = word.replace(/[.,]/g, '')
                    return (
                      <button
                        key={i}
                        onClick={() => setActiveCitation({
                          source: cit,
                          text: mockCitations[ticker][cit]
                        })}
                        className="bg-red-500/20 text-red-400 border border-red-500/30 px-1 rounded mx-0.5 hover:bg-red-500 hover:text-white transition-colors animate-pulse"
                      >
                        {cit}
                      </button>
                    )
                  }
                  return word + ' '
                })}
              </p>
            </div>
          )}
        </div>

        {activeCitation && (
          <div className="p-3 bg-zinc-900/90 border-t border-red-500/40 text-xxs text-zinc-300 animate-in slide-in-from-bottom duration-250 flex items-start justify-between">
            <div>
              <span className="font-bold text-red-500 block uppercase tracking-wider mb-1">
                FACT CITATION SOURCE: {activeCitation.source}
              </span>
              <p className="leading-relaxed">{activeCitation.text}</p>
            </div>
            <button 
              onClick={() => setActiveCitation(null)}
              className="text-zinc-500 hover:text-white text-xs ml-2"
            >
              ×
            </button>
          </div>
        )}
      </div>

      {/* RAG Vector Scatter Plot panel */}
      <div className="col-span-2 bg-black border border-zinc-900 rounded-lg p-5 flex flex-col items-center justify-between min-h-[300px]">
        <div className="w-full border-b border-zinc-900 pb-2 mb-4 flex justify-between items-center text-xxs">
          <span className="text-zinc-200 font-bold uppercase tracking-widest">RAG SEMANTIC VECTOR SCATTER PLOT</span>
          <span className="text-zinc-500">Query Ticker: {ticker}</span>
        </div>
        
        <div className="relative w-full max-w-lg aspect-[2/1] border border-zinc-900/60 rounded bg-zinc-950/40 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-grid-cyber opacity-10" />
          
          <svg className="w-full h-full p-6 overflow-visible" viewBox="0 0 300 150">
            {/* Center query node */}
            <circle cx="150" cy="75" r="8" fill="#ef4444" className="animate-pulse" />
            <text x="150" y="60" textAnchor="middle" fill="#ef4444" className="text-[8px] font-mono font-bold">Query Embedding</text>
            
            {/* Vector lines and match nodes */}
            {vectorNodes[ticker]?.map((node) => {
              const color = node.sim >= 0.85 ? '#22c55e' : '#52525b'
              const isSelected = activeCitation?.source === node.id && activeCitation?.text === node.text
              
              // Scale cx, cy offsets to fit nicely in 300x150
              const cx = 150 + (node.x - 150) * 0.8
              const cy = 75 + (node.y - 120) * 0.4
              
              return (
                <g key={node.id} className="cursor-pointer" onClick={() => setActiveCitation({ source: node.id, text: node.text })}>
                  <line x1="150" y1="75" x2={cx} y2={cy} stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity={node.sim >= 0.85 ? 0.6 : 0.2} />
                  <circle 
                    cx={cx} 
                    cy={cy} 
                    r={isSelected ? 7 : 5} 
                    fill={color} 
                    stroke={isSelected ? '#fff' : 'none'} 
                    strokeWidth="1.5"
                    className="hover:scale-125 transition-transform" 
                  />
                  <text x={cx} y={cy - 8} textAnchor="middle" fill={isSelected ? '#fff' : '#888'} className="text-[7px] font-mono font-semibold">
                    {node.id} ({node.sim.toFixed(2)})
                  </text>
                </g>
              )
            })}
          </svg>
        </div>
        
        <div className="w-full text-xxs text-zinc-500 text-center font-mono mt-3 leading-relaxed">
          The chart maps similarity vectors around the Query Embedding center node. Green circles represent semantic matches with similarity scores exceeding the 0.85 RAG thresholds. Click nodes to inspect their text indices.
        </div>
      </div>
    </div>
  )
}

// ----------------------------------------------------
// 2. ACCIDENTZERO AI SANDBOX MODULE
// ----------------------------------------------------
function AccidentZeroSandbox() {
  const [isSimulating, setIsSimulating] = useState(false)
  const [logs, setLogs] = useState<string[]>([])
  const [riskScore, setRiskScore] = useState(12)

  const runSimulation = () => {
    setIsSimulating(true)
    setLogs(['Initializing XGBoost telemetry ingest...'])
    setRiskScore(12)
    
    setTimeout(() => {
      setLogs(prev => [...prev, 'CV Pipeline: Processing feed CCTV_04...'])
      setRiskScore(24)
    }, 800)
    
    setTimeout(() => {
      setLogs(prev => [...prev, 'CatBoost Module: Thermal deviation detected (Zone 3).'])
      setRiskScore(58)
    }, 1600)

    setTimeout(() => {
      setLogs(prev => [...prev, 'LightGBM: Correlating with worker proximity metrics...'])
    }, 2400)

    setTimeout(() => {
      setLogs(prev => [...prev, 'CV Pipeline: ALERT! Missing hardhat detected (Confidence: 0.94).'])
      setRiskScore(92)
    }, 3200)

    setTimeout(() => {
      setLogs(prev => [...prev, 'Ensemble fused output: CRITICAL RISK. Firing webhook.'])
      setIsSimulating(false)
    }, 4000)
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 font-mono text-xs md:text-sm text-green-500">
      <div className="space-y-4 bg-zinc-900/20 p-5 rounded-lg border border-zinc-900">
        <h4 className="text-zinc-200 font-bold border-b border-zinc-800 pb-2">ACCIDENTZERO TELEMETRY DASHBOARD</h4>
        
        <div className="space-y-4 pt-2">
          <div className="flex justify-between items-center text-zinc-400">
            <span>Active Worker Count</span>
            <span className="text-white">42</span>
          </div>
          <div className="flex justify-between items-center text-zinc-400">
            <span>Thermal Averages (Zone 3)</span>
            <span className="text-yellow-500">48.2C [ELEVATED]</span>
          </div>
          <div className="flex justify-between items-center text-zinc-400">
            <span>CV Processing Latency</span>
            <span className="text-white">42ms</span>
          </div>
        </div>

        <button
          onClick={runSimulation}
          disabled={isSimulating}
          className="mt-6 w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded font-bold transition-colors disabled:opacity-50"
        >
          {isSimulating ? 'Fusing Models...' : 'Inject Anomaly (Simulate Risk)'}
        </button>
      </div>

      <div className="space-y-4">
        <div className="bg-black border border-zinc-900 rounded p-4 h-[200px] flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-cyber opacity-10" />
          <div className="text-zinc-500 mb-2 font-bold tracking-widest z-10">ENSEMBLE RISK SCORE</div>
          <div className={`text-6xl font-black z-10 transition-colors duration-500 ${riskScore > 80 ? 'text-red-500 animate-pulse' : riskScore > 50 ? 'text-yellow-500' : 'text-green-500'}`}>
            {riskScore}%
          </div>
          <div className="w-full bg-zinc-900 h-2 mt-4 rounded overflow-hidden z-10">
            <div className={`h-full transition-all duration-500 ${riskScore > 80 ? 'bg-red-500' : riskScore > 50 ? 'bg-yellow-500' : 'bg-green-500'}`} style={{ width: `${riskScore}%` }} />
          </div>
        </div>

        <div className="bg-black border border-zinc-900 rounded p-4 h-[150px] overflow-y-auto">
          {logs.length === 0 ? (
            <div className="text-zinc-600">Awaiting system activation...</div>
          ) : (
            logs.map((log, i) => (
              <div key={i} className={`mb-1 ${log.includes('ALERT') ? 'text-red-500' : 'text-green-500/80'}`}>
                &gt; {log}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

// 3. DELTABRIDGE SANDBOX MODULE
// ----------------------------------------------------
function DeltaBridgeSandbox() {
  const [logs, setLogs] = useState<string[]>([])
  const [isRunning, setIsRunning] = useState(false)
  
  const startBacktest = () => {
    setIsRunning(true)
    setLogs(['Initializing DeltaBridge ETH/USD Backtester...'])
    
    setTimeout(() => setLogs(prev => [...prev, 'Loading historical candles (2024-2025)...']), 500)
    setTimeout(() => setLogs(prev => [...prev, 'Applying UT Bot parameters (Sensitivity: 2, ATR Period: 1)...']), 1200)
    setTimeout(() => setLogs(prev => [...prev, 'Applying Linear Regression & ADX noise filters...']), 1800)
    setTimeout(() => setLogs(prev => [...prev, 'Execution: Found 742 valid setups.']), 2500)
    setTimeout(() => setLogs(prev => [...prev, 'Results: Profit Factor 1.84. Win Rate 68%. Max Drawdown 4.2%']), 3200)
    setTimeout(() => setIsRunning(false), 3300)
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 font-mono text-xs md:text-sm text-green-500">
      <div className="space-y-4 bg-zinc-900/20 p-5 rounded-lg border border-zinc-900">
         <h4 className="text-zinc-200 font-bold border-b border-zinc-800 pb-2">STRATEGY CONFIGURATION</h4>
         <div className="space-y-2 text-zinc-400">
           <div><span className="text-white">Asset:</span> ETH/USD Perpetual</div>
           <div><span className="text-white">Timeframe:</span> 15m / 1H Multi-Timeframe</div>
           <div><span className="text-white">Indicator 1:</span> UT Bot Alerts</div>
           <div><span className="text-white">Indicator 2:</span> Linear Regression</div>
           <div><span className="text-white">Indicator 3:</span> ADX (Threshold &gt; 25)</div>
         </div>
         <button onClick={startBacktest} disabled={isRunning} className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded font-bold disabled:opacity-50 mt-4">
           {isRunning ? 'Running Simulation...' : 'Execute Backtest'}
         </button>
      </div>
      <div className="bg-black border border-zinc-900 rounded p-4 h-[300px] overflow-y-auto">
        <div className="text-zinc-500 mb-2 font-bold tracking-widest border-b border-zinc-900 pb-2">EXECUTION LOGS</div>
        {logs.length === 0 ? (
          <div className="text-zinc-700 italic">Ready to run strategy...</div>
        ) : (
          logs.map((log, i) => (
            <div key={i} className="mb-2 text-blue-400">
              <span className="text-zinc-600">[{new Date().toISOString().split('T')[1].slice(0,8)}]</span> {log}
            </div>
          ))
        )}
      </div>
    </div>
  )
}

// ----------------------------------------------------
﻿﻿// 4. VENDOROS SANDBOX MODULE
// ----------------------------------------------------
function VendorOSSandbox() {
  const [isOnline, setIsOnline] = useState(true)
  const [queue, setQueue] = useState<string[]>([])
  const [supabaseDB, setSupabaseDB] = useState<string[]>([])

  const addOrder = () => {
    const orderId = 'ORD-' + (Math.floor(Math.random() * 9000) + 1000)
    if (isOnline) {
      setSupabaseDB(prev => [...prev, orderId])
    } else {
      setQueue(prev => [...prev, orderId])
    }
  }

  const toggleNetwork = () => {
    if (!isOnline && queue.length > 0) {
      // Reconnected! Flush queue
      setSupabaseDB(prev => [...prev, ...queue])
      setQueue([])
    }
    setIsOnline(!isOnline)
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 font-mono text-xs md:text-sm text-green-500">
      <div className="space-y-4 bg-zinc-900/20 p-5 rounded-lg border border-zinc-900">
         <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
           <h4 className="text-zinc-200 font-bold">VENDOR-OS POS DEVICE</h4>
           <button onClick={toggleNetwork} className={`px-2 py-1 rounded text-white ${isOnline ? 'bg-green-600' : 'bg-red-600'}`}>
             {isOnline ? 'WiFi: Connected' : 'WiFi: Offline'}
           </button>
         </div>
         <button onClick={addOrder} className="w-full py-12 border-2 border-dashed border-zinc-700 hover:border-zinc-500 text-zinc-400 rounded-xl flex items-center justify-center font-bold text-lg">
           + Add POS Order
         </button>
         <div className="pt-4 text-zinc-400">
           <strong>localStorage Queue:</strong> {queue.length} pending orders
         </div>
         <div className="flex gap-2 flex-wrap">
           {queue.map(q => <span key={q} className="bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded border border-yellow-500/30">{q}</span>)}
         </div>
      </div>

      <div className="bg-black border border-zinc-900 rounded p-4 h-[350px] overflow-y-auto">
        <div className="text-zinc-500 mb-2 font-bold tracking-widest border-b border-zinc-900 pb-2">SUPABASE CLOUD DB (Row-Level Security)</div>
        <div className="space-y-2 mt-4">
          {supabaseDB.map(db => (
            <div key={db} className="bg-green-500/10 text-green-400 p-2 rounded border border-green-500/20 flex justify-between items-center">
              <span>{db}</span>
              <span className="text-[10px] bg-green-500/20 px-1 rounded">SYNCED</span>
            </div>
          ))}
          {supabaseDB.length === 0 && <div className="text-zinc-700 italic">No orders in cloud DB...</div>}
        </div>
      </div>
    </div>
  )
}


// 5. OPEN SOURCE DIAGNOSTICS SANDBOX MODULE
// ----------------------------------------------------
function OpenSourceSandbox() {
  const [logs, setLogs] = useState<string[]>([])
  
  const runJanitor = () => {
    setLogs(['[K8s-SIG-WINDOWS] Initiating Azure AD Janitor Script...'])
    setTimeout(() => setLogs(prev => [...prev, 'Scanning for dangling E2E resource groups...']), 500)
    setTimeout(() => setLogs(prev => [...prev, 'Found 14 orphaned identities from failed CI runs.']), 1200)
    setTimeout(() => setLogs(prev => [...prev, 'Purging resources to restore quota...']), 1800)
    setTimeout(() => setLogs(prev => [...prev, 'SUCCESS: CI pipeline unblocked.']), 2500)
  }

  const runTriage = () => {
    setLogs(['[SUPABASE] Initiating PostgreSQL Privilege Triage...'])
    setTimeout(() => setLogs(prev => [...prev, 'Scanning roles for unauthorized escalation paths...']), 500)
    setTimeout(() => setLogs(prev => [...prev, 'WARN: Found public schema grant anomaly.']), 1200)
    setTimeout(() => setLogs(prev => [...prev, 'Executing automated REVOKE reconciliation...']), 1800)
    setTimeout(() => setLogs(prev => [...prev, 'SUCCESS: Privilege leak secured. DNS healthy.']), 2500)
  }

  return (
    <div className="flex flex-col gap-6 font-mono text-xs md:text-sm text-purple-500">
      <div className="flex gap-4">
        <button onClick={runJanitor} className="flex-1 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 rounded font-bold transition-colors">
          Run Kubernetes Azure Janitor
        </button>
        <button onClick={runTriage} className="flex-1 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 rounded font-bold transition-colors">
          Run Supabase Auto-Triage
        </button>
      </div>
      <div className="bg-black border border-zinc-900 rounded p-4 h-[250px] overflow-y-auto">
        <div className="text-zinc-500 mb-2 font-bold tracking-widest border-b border-zinc-900 pb-2">DIAGNOSTIC TERMINAL</div>
        {logs.map((log, i) => (
          <div key={i} className={`mb-1 ${log.includes('SUCCESS') ? 'text-green-400' : log.includes('WARN') ? 'text-yellow-400' : 'text-purple-400'}`}>
            &gt; {log}
          </div>
        ))}
      </div>
    </div>
  )
}
