import { projectsManifest } from '../data/projectsManifest'
import { CheckCircle2 } from 'lucide-react'

export function EngineeringPrinciples() {
  const principles = [
    {
      title: 'Performance First',
      desc: 'Optimizing execution latency at every level. Database indexing, REST payload serialization compression, and memory caching strategies are fundamental steps.'
    },
    {
      title: 'Clean & Readable Code',
      desc: 'Writing code for human developers. Prioritizing descriptive variable namings, strict TypeScript bindings, modular components, and SOLID design patterns.'
    },
    {
      title: 'Scalable API Architectures',
      desc: 'Designing endpoints for resilience. Implementing token-bucket rate limiting, secure CORS, redis caches, and graceful degradation models.'
    },
    {
      title: 'Testing & Automation',
      desc: 'Eliminating regressions. Authoring Jest units, Cypress integration logs, and lint guardrails embedded directly inside Git CI workflows.'
    }
  ]

  // Group skills by proficiency level
  const skillTiers = {
    Expert: projectsManifest.skills.filter(s => s.level === 'Expert'),
    Advanced: projectsManifest.skills.filter(s => s.level === 'Advanced'),
    Learning: projectsManifest.skills.filter(s => s.level === 'Learning')
  }

  return (
    <section id="specs" className="py-24 bg-zinc-950 border-b border-zinc-900 grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Why Dhruv / Positioning Section */}
        <div>
          <div className="mb-16 text-center">
            <span className="text-red-500 text-xs font-mono uppercase tracking-widest block mb-2">Engineering Fit</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Why Choose Dhruv?</h2>
            <p className="text-zinc-500 text-xs md:text-sm font-mono mt-2">
              Core positioning strategies bridging backend infrastructure, quant trade indicators, and AI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsManifest.whyDhruv.map((item, idx) => (
              <div 
                key={idx}
                className="bg-black border border-zinc-900 rounded-xl p-5 hover:border-zinc-800 transition-colors space-y-3"
              >
                <div className="flex items-center gap-2 text-red-500">
                  <span className="w-1.5 h-3 bg-red-500 rounded" />
                  <h4 className="text-sm font-bold text-white font-mono">{item.title}</h4>
                </div>
                <p className="text-xs md:text-sm text-zinc-400 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Specs System Radar */}
        <div className="grid lg:grid-cols-2 gap-12 pt-12 border-t border-zinc-900">
          <div>
            <span className="text-red-500 text-xs font-mono uppercase tracking-widest block mb-2">Systems specs</span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Core Tech Radar</h3>
            <p className="text-zinc-500 text-xs md:text-sm font-mono mt-2 mb-8">
              Classified by actual engineering proficiency levels.
            </p>

            <div className="space-y-6">
              {/* Expert */}
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-3">
                  1. Fluent Expert (Production-Ready)
                </span>
                <div className="flex flex-wrap gap-2">
                  {skillTiers.Expert.map(s => (
                    <span 
                      key={s.name}
                      className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/25 rounded-md font-mono text-xs"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Advanced */}
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-3">
                  2. Advanced (Capable Integrator)
                </span>
                <div className="flex flex-wrap gap-2">
                  {skillTiers.Advanced.map(s => (
                    <span 
                      key={s.name}
                      className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-md font-mono text-xs hover:border-zinc-700 transition-colors"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learning */}
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-3">
                  3. Learning (Researching / Deploying next)
                </span>
                <div className="flex flex-wrap gap-2">
                  {skillTiers.Learning.map(s => (
                    <span 
                      key={s.name}
                      className="px-3 py-1 bg-zinc-950 border border-zinc-900 text-zinc-500 rounded-md font-mono text-xs border-dashed"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* How I Build Cards */}
          <div>
            <span className="text-red-500 text-xs font-mono uppercase tracking-widest block mb-2">Work Ethic</span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Engineering Principles</h3>
            <p className="text-zinc-500 text-xs md:text-sm font-mono mt-2 mb-8">
              The cognitive workflow behind writing production code.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {principles.map((pr) => (
                <div 
                  key={pr.title}
                  className="bg-black/60 border border-zinc-900 hover:border-zinc-800 transition-colors p-4 rounded-xl space-y-2"
                >
                  <h4 className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" />
                    {pr.title}
                  </h4>
                  <p className="text-xxs md:text-xs text-zinc-550 leading-relaxed font-sans">
                    {pr.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
export default EngineeringPrinciples
