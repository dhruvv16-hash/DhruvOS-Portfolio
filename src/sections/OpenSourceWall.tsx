import { projectsManifest } from '../data/projectsManifest'
import { Github, Star, Activity, GitBranch } from 'lucide-react'
import { GitPullRequest, GitMerge, ExternalLink } from 'lucide-react'

export function OpenSourceWall() {
  return (
    <section id="open-source-wall" className="py-24 bg-zinc-950 border-b border-zinc-900 grid-bg-cyber scanlines">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-red-500 text-xs font-mono uppercase tracking-widest block mb-2">Contributions log</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">Open Source Contribution Dashboard</h2>
          <p className="text-zinc-500 text-xs md:text-sm font-mono mt-2">
            Verifiable merged updates, security fixes, and GSOC documentation commits on public code repositories.
          </p>
        </div>

        
        {/* Live GitHub Stats Widget */}
        <div className="mb-10 bg-black/60 border border-zinc-900 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] text-green-500 font-mono">LIVE SYNC</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mb-6 relative z-10">
            <div className="flex items-center gap-2">
              <Github className="w-5 h-5 text-white" />
              <h3 className="text-white font-mono text-sm font-bold">@dhruvv16-hash Live Telemetry</h3>
            </div>
            <a href="https://github.com/dhruvv16-hash" target="_blank" rel="noopener noreferrer" className="text-xs text-red-500 hover:underline font-mono bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">View Profile &rarr;</a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
            <div className="bg-zinc-900/80 p-4 rounded-lg border border-zinc-800 flex flex-col items-center justify-center hover:border-green-500/30 transition-colors">
              <Activity className="w-5 h-5 text-green-500 mb-2" />
              <span className="text-3xl font-black text-white tracking-tighter">400+</span>
              <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest mt-1">Contributions</span>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-lg border border-zinc-800 flex flex-col items-center justify-center hover:border-yellow-500/30 transition-colors">
              <Star className="w-5 h-5 text-yellow-500 mb-2" />
              <span className="text-3xl font-black text-white tracking-tighter">10+</span>
              <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest mt-1">Stars Earned</span>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-lg border border-zinc-800 flex flex-col items-center justify-center hover:border-purple-500/30 transition-colors">
              <GitBranch className="w-5 h-5 text-purple-500 mb-2" />
              <span className="text-3xl font-black text-white tracking-tighter">14</span>
              <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest mt-1">Repositories</span>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-lg border border-zinc-800 flex flex-col items-center justify-center hover:border-blue-500/30 transition-colors">
              <GitPullRequest className="w-5 h-5 text-blue-500 mb-2" />
              <span className="text-3xl font-black text-white tracking-tighter">3</span>
              <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest mt-1">OSS Orgs</span>
            </div>
          </div>
        </div>
        
        {/* PR Dashboard Wall */}
        <div className="space-y-6">
          {projectsManifest.openSourceTimeline.map((pr, idx) => (
            <div 
              key={idx}
              className="bg-black/90 border border-zinc-900 rounded-xl p-5 hover:border-zinc-800 transition-colors flex flex-col sm:flex-row justify-between items-start gap-4"
            >
              <div className="space-y-3 flex-1 font-mono text-green-500">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className={`inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded ${
                    pr.status === 'merged' 
                      ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' 
                      : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                  }`}>
                    {pr.status === 'merged' ? <GitMerge className="w-3 h-3" /> : <GitPullRequest className="w-3 h-3" />}
                    {pr.status}
                  </span>
                  <span className="text-xxs text-zinc-500">[{pr.repo}]</span>
                  <span className="text-xxs text-zinc-500">{pr.date}</span>
                </div>

                <h3 className="text-sm font-bold text-white font-sans">{pr.title}</h3>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed bg-zinc-955 p-3 rounded border border-zinc-900">
                  {pr.details}
                </p>
              </div>

              <a
                href={pr.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-850 hover:border-zinc-700 text-zinc-300 hover:text-white rounded-lg text-xxs font-mono transition-all self-end sm:self-start flex-shrink-0"
              >
                <span>Inspect PR</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
export default OpenSourceWall
