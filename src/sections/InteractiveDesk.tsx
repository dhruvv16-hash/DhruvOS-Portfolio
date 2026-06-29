import { useState, useEffect } from 'react'
import { Laptop, Monitor as MonitorIcon, Cpu, Coffee, Phone, BookOpen, Terminal } from 'lucide-react'

interface InteractiveDeskProps {
  onInteraction: (itemId: string) => void
  isCyberMode: boolean
  onToggleTheme: () => void
}

export function InteractiveDesk({ onInteraction, isCyberMode, onToggleTheme }: InteractiveDeskProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null)
  const [phoneRinging, setPhoneRinging] = useState(true)
  const [typedCommits, setTypedCommits] = useState<string[]>([])
  const [currentCommitIdx, setCurrentCommitIdx] = useState(0)
  const [gpuLoad, setGpuLoad] = useState<number[]>([15, 20, 18, 30, 45, 25, 20])

  const githubCommitsMock = [
    'git status: 1 file modified',
    'git add . && git commit -m "fix: team reactives"',
    'Pushing to omegaUp/frontend/main...',
    'handshake: github.com/dhruvv16-hash',
    'Merged PR #682 into main [OK]',
    'Executing Jest unit tests...',
    'All 42 tests passing. Clean build!'
  ]

  // Type out commits on the laptop
  useEffect(() => {
    const timer = setInterval(() => {
      setTypedCommits((prev) => {
        const nextLog = githubCommitsMock[currentCommitIdx]
        const newLogs = [...prev, nextLog].slice(-5) // keep last 5
        setCurrentIndexNext()
        return newLogs
      })
    }, 3000)
    return () => clearInterval(timer)
  }, [currentCommitIdx])

  const setCurrentIndexNext = () => {
    setCurrentCommitIdx((prev) => (prev + 1) % githubCommitsMock.length)
  }

  // Animate GPU load chart spikes
  useEffect(() => {
    const timer = setInterval(() => {
      setGpuLoad((prev) => {
        const nextVal = Math.floor(Math.random() * 55) + 15
        return [...prev.slice(1), nextVal]
      })
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  // Stop phone ringing on click
  const clickPhone = () => {
    setPhoneRinging(false)
    handleItemClick('phone')
  }

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId)
    onInteraction(itemId) // Increment explorer progress
  }

  const deskItems = [
    {
      id: 'monitor',
      title: 'Currently Building',
      subtitle: 'Monitor',
      icon: <MonitorIcon className="w-6 h-6 text-red-500" />,
      info: 'Flagship Project: InvestorGPT. Developing a multi-agent retrieval loop that chunks SEC 10-K filings and crawls live Yahoo Finance tables to answer complex quantitative requests with verifiable numerical source citations.',
      cta: 'View Case Study',
      scrollId: '#build-logs'
    },
    {
      id: 'laptop',
      title: 'Latest GitHub Commits',
      subtitle: 'Laptop',
      icon: <Laptop className="w-6 h-6 text-blue-500" />,
      info: 'Active contributor on omegaUp. Merged reactive state fixes solving asynchronous tab desyncs in administration workflows. Shipped debounced request cancellation methods to resolve search concurrency API races.',
      cta: 'Explore Open Source PRs',
      scrollId: '#open-source-wall'
    },
    {
      id: 'gpu',
      title: 'Simulated Inference Layer',
      subtitle: 'GPU Engine',
      icon: <Cpu className="w-6 h-6 text-green-500" />,
      info: 'Deploying client-side cosine similarity recommendations and password Shannon entropy calculations. Visualizes real-time VRAM allocation and neural model routing checks.',
      cta: 'Open Sandbox Labs',
      scrollId: '#sandbox'
    },
    {
      id: 'coffee',
      title: 'Current Thoughts & Bio',
      subtitle: 'Coffee Mug',
      icon: <Coffee className="w-6 h-6 text-yellow-600" />,
      info: 'CS Undergrad at VIT Chennai. Passionate about quant financial strategy indicators, rate-limited REST services, and AI architectures. Believes that engineering polish and fast execution are non-negotiable features.',
      cta: 'Read Philosophy',
      scrollId: '#specs'
    },
    {
      id: 'phone',
      title: 'Available for Projects',
      subtitle: 'Mobile Device',
      icon: <Phone className="w-6 h-6 text-cyan-500" />,
      info: 'Open for AI agents development, custom dashboards design, Chrome extension modules, and scalable REST backends. Response speed: usually < 24 hours.',
      cta: 'Send Project Brief',
      scrollId: '#connect'
    },
    {
      id: 'notebook',
      title: 'Future Learning Roadmap',
      subtitle: 'Physical Notebook',
      icon: <BookOpen className="w-6 h-6 text-purple-500" />,
      info: 'Expanding knowledge coordinates. Actively researching LangGraph stateful multi-agent workflows, Model Context Protocol (MCP) servers integration, and Rust systems programming.',
      cta: 'View Skills Spec',
      scrollId: '#specs'
    }
  ]

  return (
    <section id="desk" className={`py-24 border-b border-zinc-900 transition-colors duration-300 ${
      isCyberMode ? 'bg-black text-green-500 cyber-hud scanlines' : 'bg-zinc-950 text-zinc-300'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <span className="text-red-500 text-xs font-mono uppercase tracking-widest block mb-2">Workspace Layer</span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">Interactive Desk Lab</h2>
            <p className="text-zinc-500 text-xs md:text-sm font-mono mt-1">
              Select elements to inspect active project statuses, git streams, and roadmaps.
            </p>
          </div>
          
          {/* Custom Theme Switcher */}
          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="text-zinc-500">Theme:</span>
            <button
              onClick={onToggleTheme}
              className={`px-3 py-1.5 border rounded-lg transition-all ${
                isCyberMode 
                  ? 'bg-green-950/30 border-green-500 text-green-400 glow-green' 
                  : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white'
              }`}
            >
              {isCyberMode ? 'Cyber HUD Active' : 'Sleek Dark Mode'}
            </button>
          </div>
        </div>

        {/* Desktop View - High Fidelity Schematic Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Grid of Interactive Elements */}
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4">
            
            {/* Monitor Widget */}
            <button
              onClick={() => handleItemClick('monitor')}
              className={`relative flex flex-col justify-between items-start p-5 bg-black rounded-xl border text-left transition-all overflow-hidden h-40 ${
                activeItem === 'monitor' 
                  ? 'border-red-500 bg-red-500/5 glow-red' 
                  : 'border-zinc-900 hover:border-zinc-700 bg-zinc-900/10'
              }`}
            >
              <div className="flex justify-between items-center w-full">
                <MonitorIcon className={`w-6 h-6 ${activeItem === 'monitor' ? 'text-red-500' : 'text-zinc-500'}`} />
                <span className="text-[10px] text-zinc-600 font-mono">SYS_MONITOR</span>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-zinc-500 font-mono">Currently Building:</div>
                <div className="text-sm font-bold text-white tracking-wide truncate max-w-full">InvestorGPT Agent</div>
              </div>
            </button>

            {/* Laptop Widget (with live logs scrolling) */}
            <button
              onClick={() => handleItemClick('laptop')}
              className={`relative flex flex-col justify-between items-start p-5 bg-black rounded-xl border text-left transition-all overflow-hidden h-40 ${
                activeItem === 'laptop' 
                  ? 'border-blue-500 bg-blue-500/5' 
                  : 'border-zinc-900 hover:border-zinc-700 bg-zinc-900/10'
              }`}
            >
              <div className="flex justify-between items-center w-full">
                <Laptop className="w-5 h-5 text-zinc-500" />
                <span className="text-[10px] text-green-500/80 font-mono animate-pulse">● LIVE_FEED</span>
              </div>
              <div className="w-full bg-zinc-950/85 p-2 rounded border border-zinc-900 h-16 overflow-hidden flex flex-col justify-end font-mono text-[9px] text-zinc-400 select-none">
                {typedCommits.map((log, i) => (
                  <div key={i} className="truncate">
                    <span className="text-green-500 font-bold">&gt;</span> {log}
                  </div>
                ))}
              </div>
            </button>

            {/* GPU Widget (with simulated load graph spikes) */}
            <button
              onClick={() => handleItemClick('gpu')}
              className={`relative flex flex-col justify-between items-start p-5 bg-black rounded-xl border text-left transition-all overflow-hidden h-40 ${
                activeItem === 'gpu' 
                  ? 'border-green-500 bg-green-500/5 glow-green' 
                  : 'border-zinc-900 hover:border-zinc-700 bg-zinc-900/10'
              }`}
            >
              <div className="flex justify-between items-center w-full">
                <Cpu className="w-5 h-5 text-zinc-500" />
                <span className="text-[10px] text-zinc-600 font-mono">GPU_INFERENCE</span>
              </div>
              <div className="w-full flex items-end gap-1 h-8 select-none">
                {gpuLoad.map((val, i) => (
                  <div 
                    key={i} 
                    className="flex-1 bg-green-500/20 border-t border-green-500/50 rounded-sm"
                    style={{ height: `${val}%` }}
                  />
                ))}
              </div>
              <div className="text-[10px] text-zinc-400 font-mono">
                [Inference Mode Active]
              </div>
            </button>

            {/* Coffee Cup Widget (steam animations on hover) */}
            <button
              onClick={() => handleItemClick('coffee')}
              className={`relative flex flex-col justify-between items-start p-5 bg-black rounded-xl border text-left transition-all overflow-hidden h-40 group ${
                activeItem === 'coffee' 
                  ? 'border-yellow-600 bg-yellow-600/5' 
                  : 'border-zinc-900 hover:border-zinc-700 bg-zinc-900/10'
              }`}
            >
              <div className="flex justify-between items-center w-full">
                <div className="relative">
                  <Coffee className="w-5 h-5 text-zinc-500 group-hover:scale-105 transition-transform" />
                  {/* Coffee Steam */}
                  <div className="steam-container opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="steam-line" />
                    <div className="steam-line" />
                    <div className="steam-line" />
                  </div>
                </div>
                <span className="text-[10px] text-zinc-600 font-mono">DEV_BIO</span>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-zinc-500 font-mono">Current Status:</div>
                <div className="text-sm font-bold text-white tracking-wide">Writing clean code</div>
              </div>
            </button>

            {/* Phone Widget (flashes inquiry warnings) */}
            <button
              onClick={clickPhone}
              className={`relative flex flex-col justify-between items-start p-5 bg-black rounded-xl border text-left transition-all overflow-hidden h-40 ${
                activeItem === 'phone' 
                  ? 'border-cyan-500 bg-cyan-500/5 glow-cyan' 
                  : 'border-zinc-900 hover:border-zinc-700 bg-zinc-900/10'
              } ${phoneRinging ? 'border-cyan-500/50 bg-cyan-900/5 animate-pulse' : ''}`}
            >
              <div className="flex justify-between items-center w-full">
                <Phone className={`w-5 h-5 ${phoneRinging ? 'text-cyan-400 animate-bounce' : 'text-zinc-500'}`} />
                <span className="text-[10px] text-zinc-600 font-mono">INQUIRY</span>
              </div>
              {phoneRinging ? (
                <div className="bg-cyan-500/10 border border-cyan-500/30 p-2 rounded text-[10px] text-cyan-400 font-mono animate-bounce w-full text-center">
                  📞 NEW CLIENT LEADER BRIEF!
                </div>
              ) : (
                <div className="space-y-1">
                  <div className="text-xs text-zinc-500 font-mono">Project brief:</div>
                  <div className="text-sm font-bold text-white tracking-wide">Response time &lt; 24h</div>
                </div>
              )}
            </button>

            {/* Notebook Widget (Roadmap) */}
            <button
              onClick={() => handleItemClick('notebook')}
              className={`relative flex flex-col justify-between items-start p-5 bg-black rounded-xl border text-left transition-all overflow-hidden h-40 ${
                activeItem === 'notebook' 
                  ? 'border-purple-500 bg-purple-500/5' 
                  : 'border-zinc-900 hover:border-zinc-700 bg-zinc-900/10'
              }`}
            >
              <div className="flex justify-between items-center w-full">
                <BookOpen className="w-5 h-5 text-zinc-500" />
                <span className="text-[10px] text-zinc-600 font-mono">ROADMAP</span>
              </div>
              <div className="space-y-1">
                <div className="text-xs text-zinc-500 font-mono">Learning coordinates:</div>
                <div className="text-sm font-bold text-white tracking-wide">LangGraph & Rust</div>
              </div>
            </button>

          </div>

          {/* Details Sidebar Panel */}
          <div className="bg-zinc-950 border border-zinc-850 rounded-xl p-6 min-h-[340px] flex flex-col justify-between">
            <div>
              {activeItem ? (
                (() => {
                  const data = deskItems.find((item) => item.id === activeItem)
                  if (!data) return null
                  return (
                    <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                          {data.icon}
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-white">{data.title}</h3>
                          <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
                            {data.subtitle}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs md:text-sm text-zinc-400 font-mono leading-relaxed bg-black/40 p-3 rounded-lg border border-zinc-900">
                        {data.info}
                      </p>
                      <a
                        href={data.scrollId}
                        className="inline-flex items-center gap-1.5 text-xs text-red-500 hover:text-red-400 font-bold font-mono transition-colors"
                      >
                        {data.cta} →
                      </a>
                    </div>
                  )
                })()
              ) : (
                <div className="text-center py-16 text-zinc-600 font-mono text-xs space-y-3">
                  <Terminal className="w-8 h-8 mx-auto text-zinc-700 animate-pulse" />
                  <p>Click any object inside the workspace to inspect system components.</p>
                </div>
              )}
            </div>

            {activeItem && (
              <div className="border-t border-zinc-900 pt-4 mt-6 flex justify-between items-center text-xxs text-zinc-600 font-mono">
                <span>DHRUVOS SYSTEM_LOG: OK</span>
                <button
                  onClick={() => setActiveItem(null)}
                  className="hover:text-white transition-colors"
                >
                  Clear Selection
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  )
}
