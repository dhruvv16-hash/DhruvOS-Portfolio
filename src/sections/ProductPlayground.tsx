import { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as ChartTooltip, ResponsiveContainer, ReferenceDot } from 'recharts'
import { Shield, TrendingUp, Sparkles, X, Sliders, Play, Copy, RefreshCw, Layers } from 'lucide-react'
import { toast } from 'sonner'
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
                <h3 className="text-base font-bold text-white mb-1">AI Email Writer</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                  Chrome Extension compiler composing tone-aware, DOM-injected Gmail replies.
                </p>
              </div>
              <button
                onClick={() => openSandbox('email-writer')}
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
                <h3 className="text-base font-bold text-white mb-1">Trading Backtester</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                  Bloomberg-style ETH/USD backtesting dashboard recalculating indicator inputs.
                </p>
              </div>
              <button
                onClick={() => openSandbox('trading')}
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
                <h3 className="text-base font-bold text-white mb-1">API Orchestration</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                  Middleware request routing visualizer charting cache-hits and rate limiter buckets.
                </p>
              </div>
              <button
                onClick={() => openSandbox('api-orchestrator')}
                className="w-full text-center py-2 bg-zinc-900 hover:bg-zinc-800 text-white rounded-lg text-xs font-semibold font-mono transition-colors border border-zinc-800"
              >
                Open Sandbox
              </button>
            </div>

            {/* Password Entropy Card */}
            <div className="bg-black border border-zinc-900 rounded-xl p-5 hover:border-zinc-700 transition-all flex flex-col justify-between h-48">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <Shield className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="text-base font-bold text-white mb-1">Password Entropy</h3>
                <p className="text-xs text-zinc-500 leading-relaxed font-mono">
                  Information theory Shannon entropy calculator parsing credential vulnerabilities.
                </p>
              </div>
              <button
                onClick={() => openSandbox('password-checker')}
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
                  {activeSandbox === 'email-writer' && <EmailWriterSandbox />}
                  {activeSandbox === 'trading' && <TradingSandbox />}
                  {activeSandbox === 'api-orchestrator' && <APIOrchestratorSandbox />}
                  {activeSandbox === 'password-checker' && <PasswordCheckerSandbox />}
                  {activeSandbox === 'mcp-server' && <MCPSandbox />}
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
// 2. EMAIL WRITER SANDBOX MODULE
// ----------------------------------------------------
function EmailWriterSandbox() {
  const [topic, setTopic] = useState('Requesting extension on deliverable')
  const [tone, setTone] = useState<'professional' | 'casual' | 'urgent' | 'apologetic'>('professional')
  const [output, setOutput] = useState('')
  const [metrics, setMetrics] = useState({ latency: 0, promptTokens: 0, compTokens: 0 })
  const [isLoading, setIsLoading] = useState(false)

  const mockEmails: Record<string, Record<string, string>> = {
    'Requesting extension on deliverable': {
      professional: "Dear Team,\n\nI am writing to formally request a brief extension on the deliverable scheduled for this Friday. Due to integration bottlenecks, we require an additional 48 hours to complete rigorous unit testing.\n\nThank you for your understanding.\n\nBest regards,\nDhruv Vira",
      casual: "Hey team,\n\nRunning into a few API delays, so I need to push our deadline back by 2 days. Want to make sure we squish all bugs before shipping.\n\nThanks!\nDhruv",
      urgent: "Hi Team,\n\nWe require an emergency 48-hour extension on the release pipeline. API rate-limiting is failing deployment validations. Critical adjustments in progress.\n\nBest,\nDhruv Vira",
      apologetic: "Dear Team,\n\nI sincerely apologize, but we will not meet the deliverable timeline. I took longer than expected to fix a race condition on concurrent API calls. I request an extension until Monday.\n\nThank you,\nDhruv"
    }
  }

  const generateEmail = () => {
    setIsLoading(true)
    setOutput('')
    
    // Simulate API calls
    setTimeout(() => {
      const prompt = mockEmails[topic] || mockEmails['Requesting extension on deliverable']
      setOutput(prompt[tone])
      setMetrics({
        latency: Math.floor(Math.random() * 120) + 240,
        promptTokens: Math.floor(topic.length / 3) + 20,
        compTokens: Math.floor((prompt[tone]?.length || 0) / 4)
      })
      setIsLoading(false)
    }, 800)
  }

  const copyText = () => {
    navigator.clipboard.writeText(output)
    toast.success('Email draft copied to clipboard!')
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 font-mono text-xs md:text-sm text-green-500">
      <div className="space-y-4 bg-zinc-900/20 p-5 rounded-lg border border-zinc-900">
        <h4 className="text-zinc-200 font-bold border-b border-zinc-800 pb-2">INPUT PARAMETERS</h4>
        
        <div className="space-y-2">
          <label className="text-zinc-500">Email Topic / Prompt:</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded p-2 text-zinc-350 outline-none"
          />
        </div>

        <div className="space-y-2">
          <label className="text-zinc-500">Select Tone:</label>
          <div className="grid grid-cols-2 gap-2">
            {(['professional', 'casual', 'urgent', 'apologetic'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTone(t)}
                className={`py-1.5 border rounded capitalize font-mono text-xs ${
                  tone === t 
                    ? 'border-red-500 bg-red-500/10 text-red-400' 
                    : 'border-zinc-800 hover:border-zinc-700 bg-zinc-900/20 text-zinc-500'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={generateEmail}
          disabled={isLoading || !topic.trim()}
          className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white rounded font-bold transition-colors flex items-center justify-center gap-2 border border-red-500/20"
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          <span>Generate Reply Draft</span>
        </button>
      </div>

      {/* Output preview */}
      <div className="flex flex-col h-[340px] bg-black rounded-lg border border-zinc-900 overflow-hidden">
        <div className="px-4 py-2 bg-zinc-900 text-zinc-400 font-bold border-b border-zinc-850 flex justify-between items-center text-xxs">
          <span>OUTPUT PREVIEW</span>
          <button 
            onClick={copyText}
            disabled={!output}
            className="flex items-center gap-1 hover:text-white transition-colors disabled:opacity-50"
          >
            <Copy className="w-3.5 h-3.5" /> Copy Draft
          </button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto font-mono text-zinc-300 whitespace-pre-wrap leading-relaxed">
          {output ? output : (
            <div className="text-zinc-650 italic text-center py-20">
              Click Generate Draft to synthesize response using mock Gemini routing...
            </div>
          )}
        </div>

        {output && (
          <div className="px-4 py-2 bg-zinc-950 border-t border-zinc-900 text-xxs text-zinc-500 flex justify-between font-mono">
            <span>Latency: {metrics.latency}ms</span>
            <span>Prompt: {metrics.promptTokens}t</span>
            <span>Completion: {metrics.compTokens}t</span>
          </div>
        )}
      </div>
    </div>
  )
}

// ----------------------------------------------------
// 3. TRADING SANDBOX MODULE (BLOOMBERG LITE)
// ----------------------------------------------------
function TradingSandbox() {
  const [keyValue, setKeyValue] = useState(3.0)
  const [atrPeriod, setAtrPeriod] = useState(10)
  const [adxThreshold, setAdxThreshold] = useState(25)
  const [tradeLogs, setTradeLogs] = useState<string[]>([])
  const [stats, setStats] = useState({ netProfit: 0, winRate: 0, drawdown: 0 })

  // Static price data for ETH/USD over 10 intervals
  const rawPriceData = [
    { name: 'T1', price: 2320, adx: 22 },
    { name: 'T2', price: 2340, adx: 24 },
    { name: 'T3', price: 2330, adx: 23 },
    { name: 'T4', price: 2370, adx: 26 }, // Crossover (Buy!)
    { name: 'T5', price: 2390, adx: 28 },
    { name: 'T6', price: 2420, adx: 32 },
    { name: 'T7', price: 2410, adx: 30 },
    { name: 'T8', price: 2460, adx: 35 }, // Exits at target or stays long
    { name: 'T9', price: 2450, adx: 33 },
    { name: 'T10', price: 2490, adx: 37 }
  ]

  // Re-run backtest on slider adjustments
  useEffect(() => {
    const runLocalBacktest = () => {
      const logs: string[] = []
      let entries = 0
      let wins = 0
      let capital = 10000

      // Simplistic indicator simulation
      rawPriceData.forEach((data, i) => {
        // If price crosses above regression average and trend strength is high (ADX threshold)
        if (data.price > 2350 && data.adx > adxThreshold) {
          if (i === 3) {
            logs.push(`[${data.name}] BUY LONG @ $${data.price} (ADX: ${data.adx} > ${adxThreshold})`)
            entries++
          } else if (i === 7) {
            logs.push(`[${data.name}] SELL CLOSE @ $${data.price} (Net: +$${data.price - 2370})`)
            wins++
            capital += (data.price - 2370) * 4 // size
          }
        }
      })

      const winRatio = entries > 0 ? Math.round((wins / entries) * 100) : 68
      const netPct = Math.round(((capital - 10000) / 10000) * 100)
      
      // Fine-tune outputs based on parameters
      const multiplier = keyValue > 3.0 ? 0.9 : 1.15
      
      setStats({
        netProfit: Math.round(netPct * multiplier),
        winRate: Math.round(winRatio * (keyValue > 3.5 ? 0.85 : 1.05)),
        drawdown: Math.round(4.2 * (keyValue > 4.0 ? 0.6 : 1.2))
      })
      setTradeLogs(logs.length > 0 ? logs : ['Strategy scanned: sideways chop detected. Filters prevented entries.'])
    }

    runLocalBacktest()
  }, [keyValue, atrPeriod, adxThreshold])

  return (
    <div className="grid lg:grid-cols-3 gap-6 font-mono text-xs md:text-sm text-green-500">
      
      {/* Parameters Controls */}
      <div className="bg-zinc-900/20 p-5 rounded-lg border border-zinc-900 space-y-5">
        <h4 className="text-zinc-200 font-bold border-b border-zinc-800 pb-2 flex items-center gap-1.5">
          <Sliders className="w-4 h-4 text-blue-500" /> STRATEGY INPUTS
        </h4>
        
        <div className="space-y-1">
          <div className="flex justify-between text-xxs">
            <span className="text-zinc-500">Key Value (UT Alerts):</span>
            <span className="text-blue-400 font-bold">{keyValue.toFixed(1)}</span>
          </div>
          <input
            type="range"
            min="1.0"
            max="5.0"
            step="0.5"
            value={keyValue}
            onChange={(e) => setKeyValue(parseFloat(e.target.value))}
            className="w-full accent-blue-500 h-1 bg-zinc-850 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xxs">
            <span className="text-zinc-500">ATR Period:</span>
            <span className="text-blue-400 font-bold">{atrPeriod}</span>
          </div>
          <input
            type="range"
            min="5"
            max="20"
            step="1"
            value={atrPeriod}
            onChange={(e) => setAtrPeriod(parseInt(e.target.value))}
            className="w-full accent-blue-500 h-1 bg-zinc-850 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-xxs">
            <span className="text-zinc-500">ADX Trend Filter Threshold:</span>
            <span className="text-blue-400 font-bold">{adxThreshold}</span>
          </div>
          <input
            type="range"
            min="10"
            max="50"
            step="5"
            value={adxThreshold}
            onChange={(e) => setAdxThreshold(parseInt(e.target.value))}
            className="w-full accent-blue-500 h-1 bg-zinc-850 rounded-lg appearance-none cursor-pointer"
          />
        </div>

        {/* Backtest metrics */}
        <div className="space-y-2 pt-3 border-t border-zinc-900">
          <div className="text-[10px] text-zinc-500 uppercase tracking-widest">Performance Stats:</div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="bg-black/60 p-2 border border-zinc-900 rounded">
              <span className="text-xxs text-zinc-500 block">Net Profit</span>
              <span className="text-green-500 font-bold">+{stats.netProfit}%</span>
            </div>
            <div className="bg-black/60 p-2 border border-zinc-900 rounded">
              <span className="text-xxs text-zinc-500 block">Win Rate</span>
              <span className="text-white font-bold">{stats.winRate}%</span>
            </div>
            <div className="bg-black/60 p-2 border border-zinc-900 rounded">
              <span className="text-xxs text-zinc-500 block">Max DD</span>
              <span className="text-red-500 font-bold">-{stats.drawdown}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chart (Recharts) */}
      <div className="bg-black rounded-lg border border-zinc-900 p-4 h-[320px] flex flex-col lg:col-span-2">
        <div className="text-xxs text-zinc-500 uppercase tracking-widest mb-3 border-b border-zinc-900 pb-2 flex justify-between">
          <span>ETH/USD 15M CANDLE CHART</span>
          <span className="text-green-500 text-xxs font-bold">UT Bot Strategy</span>
        </div>

        <div className="flex-1 min-h-0">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={rawPriceData} margin={{ top: 10, right: 10, left: -25, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1c1c1f" />
              <XAxis dataKey="name" stroke="#52525b" style={{ fontSize: '10px' }} />
              <YAxis domain={[2300, 2520]} stroke="#52525b" style={{ fontSize: '10px' }} />
              <ChartTooltip contentStyle={{ background: '#09090b', borderColor: '#27272a' }} />
              <Line type="monotone" dataKey="price" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              {/* Crossover dot highlights */}
              <ReferenceDot x="T4" y={2370} r={6} fill="#22c55e" stroke="none" label={{ value: 'B', fill: '#fff', fontSize: 10, fontWeight: 'bold', position: 'top' }} />
              <ReferenceDot x="T8" y={2460} r={6} fill="#ef4444" stroke="none" label={{ value: 'S', fill: '#fff', fontSize: 10, fontWeight: 'bold', position: 'top' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Backtester log output */}
        <div className="mt-3 bg-zinc-950 p-2 rounded border border-zinc-900 font-mono text-[10px] text-zinc-400 max-h-16 overflow-y-auto">
          {tradeLogs.map((log, i) => (
            <div key={i} className="truncate">
              <span className="text-blue-500">&gt;&gt;</span> {log}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

// ----------------------------------------------------
// 4. API ORCHESTRATION SANDBOX MODULE
// ----------------------------------------------------
function APIOrchestratorSandbox() {
  const [logs, setLogs] = useState<string[]>([])
  const [tokens, setTokens] = useState(10)
  const [isCaching, setIsCaching] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const executePipeline = () => {
    if (isLoading) return
    
    // Check Rate Limit Bucket
    if (tokens <= 0) {
      setLogs((prev) => [
        ...prev,
        `[${new Date().toLocaleTimeString()}] INCOMING REQUEST GET /api/v1/data`,
        `[${new Date().toLocaleTimeString()}] rate_limit check: tokens remaining 0/10 [BLOCKED]`,
        `[${new Date().toLocaleTimeString()}] RESPONSE: [429] Too Many Requests. Burst Limit Exceeded.`
      ].slice(-10))
      return
    }

    setIsLoading(true)
    setTokens((prev) => Math.max(0, prev - 1))

    const pipeLogs = [
      `[${new Date().toLocaleTimeString()}] INCOMING REQUEST GET /api/v1/data`,
      `[${new Date().toLocaleTimeString()}] rate_limit validation: tokens remaining ${tokens - 1}/10 [OK]`,
      `[${new Date().toLocaleTimeString()}] redis_cache check: query key 'manifest_data' [${isCaching ? 'CACHE_HIT' : 'CACHE_MISS'}]`,
      isCaching 
        ? `[${new Date().toLocaleTimeString()}] Cache record fetched (0.8ms). Skipping database query routing.`
        : `[${new Date().toLocaleTimeString()}] Routing query pipeline to Postgres DB (34ms). Syncing redis cache...`,
      `[${new Date().toLocaleTimeString()}] Microservice handshake: executing remote API payload fetch (110ms)...`,
      `[${new Date().toLocaleTimeString()}] pipeline serialization: mapping DTO payloads to JSON response... [OK]`,
      `[${new Date().toLocaleTimeString()}] RESPONSE: [200] Success. Bytes: 1.8KB. Latency: ${isCaching ? '112ms' : '154ms'}`
    ]

    let logIdx = 0
    const interval = setInterval(() => {
      if (logIdx < pipeLogs.length) {
        setLogs((prev) => [...prev, pipeLogs[logIdx]].slice(-10))
        logIdx++
      } else {
        clearInterval(interval)
        setIsLoading(false)
      }
    }, 200)
  }

  const drainRateLimiter = () => {
    setTokens(0)
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] Action: Drained Token Bucket rate limiter manually.`].slice(-10))
  }

  const resetPipeline = () => {
    setTokens(10)
    setLogs([])
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 font-mono text-xs md:text-sm text-green-500">
      
      {/* Inputs controls */}
      <div className="bg-zinc-900/20 p-5 rounded-lg border border-zinc-900 space-y-4">
        <h4 className="text-zinc-200 font-bold border-b border-zinc-800 pb-2">MIDDLEWARE PIPELINE SETTINGS</h4>
        
        <div className="flex justify-between items-center bg-black/60 p-3 border border-zinc-900 rounded">
          <div>
            <span className="text-zinc-300 font-bold block">Redis Caching State</span>
            <span className="text-xxs text-zinc-500">Toggle CACHE_HIT or CACHE_MISS performance path.</span>
          </div>
          <button
            onClick={() => setIsCaching(!isCaching)}
            className={`px-3 py-1 border rounded text-xs font-semibold ${
              isCaching 
                ? 'border-green-500/50 bg-green-500/10 text-green-400' 
                : 'border-zinc-850 bg-zinc-900 text-zinc-500'
            }`}
          >
            {isCaching ? 'Cache: Enabled' : 'Cache: Disabled'}
          </button>
        </div>

        <div className="flex justify-between items-center bg-black/60 p-3 border border-zinc-900 rounded">
          <div>
            <span className="text-zinc-300 font-bold block">Token Limiter Bucket</span>
            <span className="text-xxs text-zinc-500">Current available tokens: {tokens} / 10</span>
          </div>
          <button
            onClick={drainRateLimiter}
            className="px-3 py-1 border border-red-500/30 hover:border-red-500 bg-red-950/20 text-red-400 text-xs rounded transition-all"
          >
            Drain Bucket
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={executePipeline}
            disabled={isLoading}
            className="py-2.5 bg-green-600 hover:bg-green-700 text-white rounded font-bold transition-colors flex items-center justify-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 fill-white" />
            <span>Call API</span>
          </button>
          <button
            onClick={resetPipeline}
            className="py-2.5 border border-zinc-855 bg-zinc-900/40 text-zinc-500 hover:text-white rounded transition-colors"
          >
            Clear logs
          </button>
        </div>
      </div>

      {/* Terminal log panel */}
      <div className="flex flex-col h-[340px] bg-black rounded-lg border border-zinc-900 overflow-hidden">
        <div className="px-4 py-2 bg-zinc-900 text-zinc-400 font-bold border-b border-zinc-850 flex justify-between items-center text-xxs">
          <span>PIPELINE ROUTING CONSOLE</span>
          <span>Gateway: FastAPI</span>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-2.5 font-mono text-[10px] text-zinc-400">
          {logs.length > 0 ? (
            logs.map((log, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-zinc-700">&gt;&gt;</span>
                <span className={log.includes('RESPONSE') ? 'text-green-400 font-bold' : log.includes('BLOCKED') ? 'text-red-400 font-bold' : ''}>
                  {log}
                </span>
              </div>
            ))
          ) : (
            <div className="text-zinc-650 italic text-center py-20">
              Click 'Call API' to trigger incoming requests and view server pipeline execution tracing.
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

// ----------------------------------------------------
// 5. PASSWORD CHECKER SANDBOX MODULE
// ----------------------------------------------------
function PasswordCheckerSandbox() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  // Actual Shannon Entropy formula calculation
  const calculateEntropy = (str: string) => {
    if (!str) return 0
    const len = str.length
    const frequencies: Record<string, number> = {}
    
    // count frequencies
    for (let char of str) {
      frequencies[char] = (frequencies[char] || 0) + 1
    }

    let entropy = 0
    for (let char in frequencies) {
      const p = frequencies[char] / len
      entropy -= p * Math.log2(p)
    }

    return entropy * len // total bits
  }

  const entropyBits = calculateEntropy(password)

  // Calculations for Brute force calculations
  const calculateCrackTime = (bits: number) => {
    if (bits === 0) return 'Instant'
    
    // Guesses per second on a standard GPU rig (100 Billion / sec)
    const guessesPerSec = 1e11
    const totalCombinations = Math.pow(2, bits)
    const seconds = totalCombinations / guessesPerSec
    
    if (seconds < 1) return `${(seconds * 1000).toFixed(2)} ms`
    if (seconds < 60) return `${seconds.toFixed(1)} seconds`
    if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`
    if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`
    if (seconds < 3.154e7) return `${Math.round(seconds / 86400)} days`
    if (seconds < 3.154e10) return `${Math.round(seconds / 3.154e7)} years`
    return 'Centuries'
  }

  const crackTime = calculateCrackTime(entropyBits)

  // Verify requirements
  const checks = {
    length: password.length >= 10,
    hasUpper: /[A-Z]/.test(password),
    hasLower: /[a-z]/.test(password),
    hasDigit: /\d/.test(password),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password)
  }

  const getStrengthTier = (bits: number) => {
    if (bits === 0) return { label: 'Empty', color: 'text-zinc-650' }
    if (bits < 28) return { label: 'Very Weak', color: 'text-red-500' }
    if (bits < 40) return { label: 'Weak', color: 'text-orange-500' }
    if (bits < 60) return { label: 'Moderate', color: 'text-yellow-500' }
    if (bits < 80) return { label: 'Strong', color: 'text-green-500' }
    return { label: 'Extremely Secure', color: 'text-emerald-400' }
  }

  const tier = getStrengthTier(entropyBits)

  return (
    <div className="grid md:grid-cols-2 gap-6 font-mono text-xs md:text-sm text-green-500">
      
      {/* Inputs */}
      <div className="bg-zinc-900/20 p-5 rounded-lg border border-zinc-900 space-y-4">
        <h4 className="text-zinc-200 font-bold border-b border-zinc-800 pb-2">CREDENTIAL PORTAL</h4>
        
        <div className="space-y-2">
          <label className="text-zinc-500">Enter Password Key:</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-850 rounded p-2.5 text-zinc-200 outline-none pr-16"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white rounded text-xxs transition-colors"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        {/* Requirements check list */}
        <div className="space-y-2 pt-2">
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Remediation checklist:</span>
          <ul className="space-y-1.5 font-mono text-xxs">
            <li className={`flex items-center gap-2 ${checks.length ? 'text-green-500' : 'text-zinc-650'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" /> Minimum 10 characters length
            </li>
            <li className={`flex items-center gap-2 ${checks.hasUpper ? 'text-green-500' : 'text-zinc-650'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" /> Incorporates UPPERCASE letters
            </li>
            <li className={`flex items-center gap-2 ${checks.hasLower ? 'text-green-500' : 'text-zinc-650'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" /> Incorporates lowercase letters
            </li>
            <li className={`flex items-center gap-2 ${checks.hasDigit ? 'text-green-500' : 'text-zinc-650'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" /> Incorporates numbers [0-9]
            </li>
            <li className={`flex items-center gap-2 ${checks.hasSpecial ? 'text-green-500' : 'text-zinc-650'}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current" /> Incorporates specials [!@#$%^&*]
            </li>
          </ul>
        </div>
      </div>

      {/* Diagnostics outputs */}
      <div className="bg-black rounded-lg border border-zinc-900 p-5 space-y-6">
        <h4 className="text-zinc-200 font-bold border-b border-zinc-900 pb-2 text-xxs uppercase tracking-widest">
          ENTROPY DIAGNOSTICS
        </h4>

        <div className="space-y-4">
          <div>
            <span className="text-zinc-500 block text-xxs">Shannon Entropy:</span>
            <div className="text-lg font-bold text-white flex items-baseline gap-1">
              <span>{entropyBits.toFixed(2)}</span>
              <span className="text-xs text-zinc-500">total bits</span>
            </div>
          </div>

          <div>
            <span className="text-zinc-500 block text-xxs">Strength Tier:</span>
            <div className={`text-base font-bold uppercase tracking-wider ${tier.color}`}>
              {tier.label}
            </div>
          </div>

          <div>
            <span className="text-zinc-500 block text-xxs">Est. Brute-Force Break Time:</span>
            <div className="text-sm font-bold text-white">
              {crackTime}
            </div>
            <span className="text-[9px] text-zinc-600 block mt-0.5">
              (Benchmarked at 100 Billion guesses/second cluster rate)
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}

// ----------------------------------------------------
// 6. MODEL CONTEXT PROTOCOL SANDBOX MODULE
// ----------------------------------------------------
export function MCPSandbox() {
  const [logs, setLogs] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedTool, setSelectedTool] = useState<string | null>(null)

  const mcpTools = [
    { name: 'list_tools', desc: 'Queries list of tools exposed by the MCP server' },
    { name: 'call: read_file', desc: 'Invokes tool to read file contents over protocol channel' },
    { name: 'call: calculator', desc: 'Invokes tool to calculate math expression' }
  ]

  const triggerMCP = (toolName: string) => {
    setIsLoading(true)
    setSelectedTool(toolName)
    setLogs([])

    const time = new Date().toLocaleTimeString()
    
    let actions: string[] = []
    if (toolName === 'list_tools') {
      actions = [
        `[${time}] --> SEND: { "jsonrpc": "2.0", "id": 1, "method": "tools/list" }`,
        `[${time}] [MCP Client] Connection channel established: IPC (Stdio)`,
        `[${time}] <-- RECV: { "jsonrpc": "2.0", "id": 1, "result": { "tools": [{ "name": "read_file", "description": "Read file from disk" }, { "name": "calculator", "description": "Execute basic math operations" }] } }`
      ]
    } else if (toolName === 'call: read_file') {
      actions = [
        `[${time}] --> SEND: { "jsonrpc": "2.0", "id": 2, "method": "tools/call", "params": { "name": "read_file", "arguments": { "path": "src/App.tsx" } } }`,
        `[${time}] [MCP Client] Executing standard read_file script (Path: src/App.tsx)...`,
        `[${time}] <-- RECV: { "jsonrpc": "2.0", "id": 2, "result": { "content": [{ "type": "text", "text": "import React from 'react';\\nexport default function App() { ... }" }] } }`
      ]
    } else {
      actions = [
        `[${time}] --> SEND: { "jsonrpc": "2.0", "id": 3, "method": "tools/call", "params": { "name": "calculator", "arguments": { "expression": "42 * 10" } } }`,
        `[${time}] [MCP Client] Executing basic compute logic...`,
        `[${time}] <-- RECV: { "jsonrpc": "2.0", "id": 3, "result": { "content": [{ "type": "text", "text": "Result: 420" }] } }`
      ]
    }

    let i = 0
    const interval = setInterval(() => {
      if (i < actions.length) {
        setLogs(prev => [...prev, actions[i]])
        i++
      } else {
        clearInterval(interval)
        setIsLoading(false)
      }
    }, 400)
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 font-mono text-xs md:text-sm text-green-500">
      <div className="space-y-4 bg-zinc-900/20 p-5 rounded-lg border border-zinc-900">
        <h4 className="text-zinc-200 font-bold border-b border-zinc-800 pb-2">EXPOSE PROTOCOL ACTIONS</h4>
        
        <div className="flex flex-col gap-3">
          {mcpTools.map((tool) => (
            <button
              key={tool.name}
              onClick={() => triggerMCP(tool.name)}
              disabled={isLoading}
              className={`p-3 border rounded-lg text-left transition-all ${
                selectedTool === tool.name 
                  ? 'border-red-500 bg-red-500/10 text-red-400 font-bold' 
                  : 'border-zinc-800 hover:border-zinc-700 bg-zinc-950/40 text-zinc-400'
              }`}
            >
              <div className="text-xs text-white">{tool.name}</div>
              <div className="text-[10px] text-zinc-500 mt-1">{tool.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* JSON-RPC console stream */}
      <div className="flex flex-col h-[300px] bg-black rounded-lg border border-zinc-900 overflow-hidden">
        <div className="px-4 py-2 bg-zinc-900 text-zinc-400 font-bold border-b border-zinc-850 flex justify-between items-center text-xxs">
          <span>JSON-RPC FRAME INSPECTOR</span>
          <span>Client: Model-Context-Client v1</span>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-[10px] text-zinc-400">
          {logs.length > 0 ? (
            logs.map((log, i) => (
              <div key={i} className="flex gap-2">
                <span className="text-zinc-700">&gt;&gt;</span>
                <span className={log.includes('SEND') ? 'text-blue-400' : log.includes('RECV') ? 'text-green-400 font-bold' : ''}>
                  {log}
                </span>
              </div>
            ))
          ) : (
            <div className="text-zinc-650 italic text-center py-16">
              Click a protocol method to trigger dynamic Stdin JSON-RPC request-response exchanges.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
