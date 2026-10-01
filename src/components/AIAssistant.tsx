import { useState, useEffect, useRef } from 'react'
import { Terminal, Send, Bot, User } from 'lucide-react'

interface Message {
  sender: 'ai' | 'user'
  text: string
  timestamp: string
}

interface AIAssistantProps {
  onInteraction: () => void
}

export function AIAssistant({ onInteraction }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: "System initialized. Ask me about system architecture, Agentic AI, multi-tenant SaaS, computer vision ensembles, or open-source PRs.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  
  // Conversational memory hooks
  const [, setMemory] = useState({
    discussedAgents: false,
    discussedFintech: false,
    discussedSaaS: false
  })

  const suggestions = [
    { label: 'Can you build AI agents?', value: 'agents' },
    { label: 'Can you build fintech systems?', value: 'fintech' },
    { label: 'Can you build SaaS products?', value: 'saas' },
    { label: 'What is your technology stack?', value: 'stack' }
  ]

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [messages, isTyping])

  const handleSend = (text: string) => {
    if (!text.trim()) return

    onInteraction() // Increment exploration telemetry

    const userMessage: Message = {
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI thinking and typing speed
    setTimeout(() => {
      const responseText = generateResponse(text)
      const aiMessage: Message = {
        sender: 'ai',
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, 1000)
  }

  const generateResponse = (query: string): string => {
    const q = query.toLowerCase()

    if (q.includes('agent') || q.includes('ai') || q.includes('gpt') || q === 'agents' || q.includes('investorgpt')) {
      setMemory(prev => ({ ...prev, discussedAgents: true }))
      return "Yes, Dhruv engineered InvestorGPT. It's a 7-agent orchestration pipeline leveraging Agentic AI. The system uses dedicated agents (financial-ingestion, valuation, technical, sentiment) that execute a debate-and-consensus workflow to reconcile contradictory market signals into one final verdict. It's built with Next.js, FastAPI, Python, and SQLAlchemy, and strictly implements quantitative scoring models like the Piotroski F-Score and MPT portfolio simulations."
    }
    
    if (q.includes('accident') || q.includes('vision') || q.includes('machine learning') || q.includes('ml')) {
      return "Dhruv built AccidentZero AI, a hybrid predictive and computer-vision system. It features a 5-model ensemble (XGBoost, LightGBM, CatBoost) to score real-time accident risk from operational metrics, fused seamlessly with a CV pipeline designed for PPE-violation and scene-risk detection, entirely built using Python and FastAPI."
    }

    if (q.includes('fintech') || q.includes('trade') || q.includes('crypto') || q === 'fintech' || q.includes('deltabridge')) {
      setMemory(prev => ({ ...prev, discussedFintech: true }))
      return "Absolutely. He built DeltaBridge, an algorithmic trading bot specifically for ETH/USD. He designed a multi-timeframe strategy in Pine Script to aggressively suppress false entries. The system communicates via a custom Python/Flask bridge from TradingView to Delta Exchange through Crypto APIs, running completely automated 24/7 execution backed by a SQLite ledger."
    }

    if (q.includes('saas') || q.includes('web') || q.includes('vendoros') || q === 'saas') {
      setMemory(prev => ({ ...prev, discussedSaaS: true }))
      return "Yes. Dhruv recently shipped VendorOS, a production multi-tenant Food-Tech SaaS and POS PWA. He engineered an offline-first sync mechanism utilizing localStorage queues that securely flush to Supabase upon reconnection, preventing any order loss. It enforces strict PostgreSQL Row-Level Security for tenant isolation, and automatically handles orders via WhatsApp Cloud API webhooks validated mathematically through SHA-256 HMAC signatures. Stack: Next.js, React, TypeScript, Supabase, PostgreSQL."
    }
    
    if (q.includes('openbb') || q.includes('poetry') || q.includes('package')) {
      return "For OpenBB Core, Dhruv merged a crucial pull request resolving deep Poetry packaging conflicts between core modules. This eliminated severe installation failures on OS package managers that enforce strict file ownership, streamlining OpenBB deployments for finance researchers."
    }
    
    if (q.includes('kubernetes') || q.includes('k8s') || q.includes('azure')) {
      return "Within the Kubernetes sig-windows open source community, Dhruv fixed End-to-End (E2E) CI pipeline failures by writing a robust Python janitor script to correctly clean up dangling Azure AD resources that were exhausting test-runner quotas."
    }

    if (q.includes('stack') || q.includes('technology') || q.includes('expert') || q.includes('skills') || q === 'stack') {
      return "I've fetched and synced data directly from Dhruv's latest PDF resume and github.com/dhruvv16-hash. His core stack is: Expert in Python, Next.js, React, TypeScript, FastAPI, and PostgreSQL/Supabase. Advanced in Spring Boot, Docker & Kubernetes, Machine Learning (XGBoost, LightGBM), and C++/Java. He's also expanding into Agentic AI workflows."
    }
    
    if (q.includes('data') || q.includes('source') || q.includes('fetch') || q.includes('resume') || q.includes('github') || q.includes('sync')) {
      return "All my responses are rigorously grounded. I've fetched and synced data from Dhruv's latest PDF resume and his GitHub profile (github.com/dhruvv16-hash). I do not hallucinate external details."
    }

    if (q.includes('hire') || q.includes('contact') || q.includes('email') || q.includes('reach')) {
      return "To download Dhruv's latest PDF resume, you can toggle 'Recruiter Mode' at the top of the page. You can reach out directly via dhruvvira17@gmail.com or call +91 9303000832."
    }

    if (q.includes('omega') || q.includes('open source') || q.includes('contribution') || q.includes('gsoc')) {
      return "Dhruv is an active contributor to omegaUp. He merged a production PR fixing a severe stale-state UI bug in their Vue 3 layer, and he authored a comprehensive GSoC 2026 proposal. He also contributed automated triage scripts for PostgreSQL privilege-leaks and DNS-outages at Supabase."
    }

    // Default fallback
    return "I am Dhruv's OS concierge. I've fetched and synced data from Dhruv's latest PDF resume and github.com/dhruvv16-hash to accurately answer your questions. I can explain his SaaS capabilities (VendorOS), ML systems (AccidentZero, InvestorGPT), Trading bots (DeltaBridge), or open-source PRs. What would you like to know?"
  }

  return (
    <section id="assistant" className="py-20 bg-zinc-950 border-y border-zinc-900 grid-bg-cyber scanlines">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8 text-center space-y-2">
          <span className="text-red-500 text-xs font-mono uppercase tracking-widest block mb-2">System Concierge</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">Dhruv AI System Assistant</h2>
          <p className="text-zinc-500 text-xs md:text-sm font-mono">
            Ask questions to inspect engineering capabilities and build details.
          </p>
        </div>

        {/* Terminal Chat Box */}
        <div className="bg-black/90 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col h-[480px]">
          {/* Terminal Tab Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-850">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-zinc-400 font-mono text-xs ml-2 select-none flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" /> console@dhruvos:~/assistant
              </span>
            </div>
            <div className="text-xxs text-zinc-600 font-mono">MEM_ROUTE: Gemini-Pro-Engine</div>
          </div>

          {/* Messages Stream */}
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs md:text-sm">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`flex gap-3 max-w-[85%] ${
                  msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
                }`}
              >
                {/* Avatar Icon */}
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  msg.sender === 'user' 
                    ? 'bg-zinc-850 text-zinc-300 border border-zinc-750' 
                    : 'bg-red-500/10 text-red-500 border border-red-500/20'
                }`}>
                  {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Body */}
                <div className={`rounded-lg p-3 border ${
                  msg.sender === 'user'
                    ? 'bg-zinc-900 border-zinc-800 text-zinc-200'
                    : 'bg-zinc-950 border-zinc-900 text-green-400/90 leading-relaxed'
                }`}>
                  <p>{msg.text}</p>
                  <span className="text-[10px] text-zinc-650 block text-right mt-1">{msg.timestamp}</span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 border border-red-500/20 flex items-center justify-center">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-3 text-green-400 flex items-center gap-1.5">
                  <span className="text-xxs text-zinc-500 font-sans">thinking...</span>
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {/* Quick Suggestions Buttons */}
          <div className="p-3 bg-zinc-900/40 border-t border-zinc-850/60 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s.value}
                onClick={() => handleSend(s.label)}
                disabled={isTyping}
                className="px-3 py-1 bg-zinc-900 hover:bg-zinc-800/80 text-zinc-400 hover:text-white rounded border border-zinc-850 hover:border-zinc-700 font-mono text-xxs transition-all disabled:opacity-50"
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Prompt Entry Form */}
          <form 
            onSubmit={(e) => {
              e.preventDefault()
              handleSend(input)
            }}
            className="flex items-center gap-2 p-3 bg-zinc-900 border-t border-zinc-850"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isTyping}
              placeholder="Ask a question (e.g. Can you write C++? What was your omegaUp PR?)..."
              className="flex-1 bg-zinc-950 border border-zinc-800 focus:border-zinc-700 outline-none rounded-lg px-4 py-2.5 text-zinc-200 placeholder-zinc-650 font-mono text-xs md:text-sm transition-colors"
            />
            <button
              type="submit"
              disabled={isTyping || !input.trim()}
              className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center justify-center disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
