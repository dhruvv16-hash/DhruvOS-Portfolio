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
      text: "System initialized. I've indexed Dhruv's entire engineering footprint. Ask me about system architecture, RAG agent loops, quantitative trading systems, SaaS, or Vue stale-state debugging.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  // Conversational memory hooks
  const [memory, setMemory] = useState({
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
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
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
    
    // Check suggestions / direct prompts
    if (q.includes('agent') || q.includes('rag') || q.includes('langgraph') || q.includes('vector') || q === 'agents') {
      const prefix = memory.discussedFintech 
        ? "Connecting back to your question on fintech: in InvestorGPT, we combine financial APIs with semantic vector search. "
        : memory.discussedSaaS
        ? "Adding to our discussion about SaaS apps: AI agents form the intelligent core of modern SaaS. "
        : ""
      
      setMemory(prev => ({ ...prev, discussedAgents: true }))
      return prefix + "Yes, I build robust RAG and reasoning agents. In my InvestorGPT project, I designed a dual-agent layout: a Retrieval Agent chunked and indexed SEC filings in Pinecone DB, and a Synthesis Agent verified LLM replies against original text indices, resulting in a 90% drop in hallucinations compared to naive LLM setups."
    }

    if (q.includes('fintech') || q.includes('trading') || q.includes('quant') || q.includes('backtest') || q === 'fintech') {
      const prefix = memory.discussedAgents 
        ? "Connecting back to the retrieval patterns in InvestorGPT: my quantitative systems use real-time market streams. "
        : ""
      
      setMemory(prev => ({ ...prev, discussedFintech: true }))
      return prefix + "Yes. I designed a multi-timeframe ETH/USD trading indicator in Pine Script using UT Bot Alerts, Linear Regression lines, and ADX filters. I backtested it across 742 historical candle sets to verify Profit Factors (achieved 1.84) and control drawdowns. I also wrote a Python middleware to dispatch TradingView webhook orders to the Crypto.com API."
    }

    if (q.includes('saas') || q.includes('web') || q.includes('chrome') || q.includes('extension') || q === 'saas') {
      setMemory(prev => ({ ...prev, discussedSaaS: true }))
      return "Yes. I build full-stack SaaS. Recently I shipped a Chrome Extension + Spring Boot AI Email Writer. It uses DOM observers (MutationObserver) to inject an 'AI Reply' button directly into Gmail's inbox page, dispatching email chains securely to a Java Spring backend that queries Google Gemini API for contextual responses."
    }

    if (q.includes('stack') || q.includes('technology') || q.includes('expert') || q.includes('skills') || q === 'stack') {
      return "Dhruv's technical stack is: Expert in Python, Spring Boot, FastAPI, React, and C++. Advanced in Docker, SQL, TradingView Pine Script, Git CI/CD, and TypeScript/Vue.js. Currently learning LangGraph, Agentic AI, MCP (Model Context Protocol), and Rust."
    }

    if (q.includes('hire') || q.includes('resume') || q.includes('work') || q.includes('contact')) {
      return "To download Dhruv's resume, you can scroll to the specs section or toggle 'Recruiter Mode' at the top of the page. You can reach out directly via the Connect Terminal at the bottom of the page, or email him at dhruvvira17@gmail.com."
    }

    if (q.includes('omega') || q.includes('open source') || q.includes('contribution') || q.includes('gsoc')) {
      return "I am an active contributor to omegaUp (Vue 3, Jest, PHP). I resolved an admin page stale-state bug by replacing static payloads with reactive Vue 3 refs, ensuring out-of-sync tabs update instantly. I also wrote debounced search controllers to eliminate concurrency race conditions on concurrent API responses."
    }

    // Default fallback
    return "I am Dhruv's OS concierge. I can explain his engineering principles, SaaS capabilities, Pine Script trading strategies, and open-source contributions. What specific project or engineering skill can I explain for you?"
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
          <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs md:text-sm">
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
            <div ref={messagesEndRef} />
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
