import { Sparkles, BarChart3, Settings, Zap } from 'lucide-react'

export function ClientSolutions() {
  const solutions = [
    {
      title: 'AI Chatbots & Intelligent Agents',
      desc: 'Context-aware RAG pipelines using LLMs (Gemini, GPT) and Vector Databases (Pinecone) to read filings, generate insights, and cite sources.',
      icon: <Sparkles className="w-5 h-5 text-red-500" />,
      projectLink: '#sandbox',
      cta: 'Launch InvestorGPT Sandbox'
    },
    {
      title: 'Quantitative & Algorithmic Dashboards',
      desc: 'Custom TradingView Pine Script indicators, data parsers, and charts mapping metrics like Win Rate, drawdown, and Net Profits.',
      icon: <BarChart3 className="w-5 h-5 text-blue-500" />,
      projectLink: '#sandbox',
      cta: 'Launch Backtest Sandbox'
    },
    {
      title: 'Enterprise APIs & Service Orchestration',
      desc: 'Scalable REST services built with FastAPI or Spring Boot, featuring rate-limiting buckets, caching layers, and microservice piping.',
      icon: <Settings className="w-5 h-5 text-green-500" />,
      projectLink: '#sandbox',
      cta: 'Launch API Orchestrator Sandbox'
    },
    {
      title: 'Productivity Extensions & Automation',
      desc: 'Seamless Chrome Extensions altering web interfaces using MutationObservers to inject custom client features.',
      icon: <Zap className="w-5 h-5 text-cyan-500" />,
      projectLink: '#sandbox',
      cta: 'Launch Email Writer Sandbox'
    }
  ]

  return (
    <section id="solutions" className="py-24 bg-zinc-950 border-b border-zinc-900 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center md:text-left">
          <span className="text-red-500 text-xs font-mono uppercase tracking-widest block mb-2">Capabilities Mapping</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">What Can I Build For You?</h2>
          <p className="text-zinc-500 text-xs md:text-sm font-mono mt-2">
            Translating complex backend architectures into concrete business solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((sol) => (
            <div 
              key={sol.title}
              className="bg-black border border-zinc-900 rounded-xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                  {sol.icon}
                </div>
                <h3 className="text-lg font-bold text-white font-sans">{sol.title}</h3>
                <p className="text-xs md:text-sm text-zinc-400 font-mono leading-relaxed">
                  {sol.desc}
                </p>
              </div>
              <div className="border-t border-zinc-900 pt-4 mt-6">
                <a 
                  href={sol.projectLink}
                  className="text-xs text-red-500 hover:text-red-400 font-bold font-mono transition-colors inline-flex items-center gap-1"
                >
                  {sol.cta} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default ClientSolutions
