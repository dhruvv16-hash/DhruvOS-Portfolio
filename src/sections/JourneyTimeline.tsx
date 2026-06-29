import { projectsManifest } from '../data/projectsManifest'
import { ChevronRight } from 'lucide-react'

export function JourneyTimeline() {
  return (
    <section id="journey" className="py-24 bg-zinc-950 border-b border-zinc-900 grid-bg">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-red-500 text-xs font-mono uppercase tracking-widest block mb-2">Milestones</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">The Journey Log</h2>
          <p className="text-zinc-500 text-xs md:text-sm font-mono mt-2">
            A chronological timeline detailing milestones from my first line of C++ code to engineering core AI systems.
          </p>
        </div>

        {/* Chronological List */}
        <div className="relative pl-6 border-l-2 border-zinc-900 space-y-12">
          {projectsManifest.journey.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Dot indicator */}
              <div className="absolute left-0 top-1.5 w-4.5 h-4.5 -translate-x-[29px] rounded-full bg-zinc-950 border-2 border-zinc-800 flex items-center justify-center group-hover:border-red-500 transition-all">
                <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full group-hover:bg-red-500 transition-all" />
              </div>

              {/* Box container */}
              <div className="bg-black/60 border border-zinc-900 rounded-xl p-5 hover:border-zinc-800 transition-colors space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-900 pb-2">
                  <div>
                    <h4 className="text-sm font-bold text-white font-mono">{item.title}</h4>
                    <span className="text-xxs text-zinc-500 font-mono block">{item.subtitle}</span>
                  </div>
                  <span className="text-xs text-red-500 font-mono font-bold bg-red-500/5 px-2 py-0.5 border border-red-500/10 rounded">
                    {item.period}
                  </span>
                </div>

                <ul className="space-y-2 font-sans text-xs md:text-sm text-zinc-400">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-red-500/70 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
export default JourneyTimeline
