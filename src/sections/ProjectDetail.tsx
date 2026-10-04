import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Github, ExternalLink, Zap, Box, Server } from 'lucide-react'
import { projectsManifest } from '../data/projectsManifest'

export function ProjectDetail() {
  const { slug } = useParams()
  
  const project = projectsManifest.projects.find(p => p.slug === slug && p.type === 'personal')
  
  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const hasScreenshots = project.screenshots && project.screenshots.length > 0;

  return (
    <div className="min-h-screen bg-black pt-24 pb-32 font-sans text-zinc-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back Navigation */}
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 hover:text-white transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        {/* Project Header */}
        <header className="space-y-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-4 flex-wrap">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{project.title}</h1>
              {project.status && (
                <span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 rounded uppercase tracking-widest">
                  {project.status}
                </span>
              )}
            </div>
            <p className="text-xl text-zinc-400 font-mono leading-relaxed">{project.shortDescription}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-white text-black hover:bg-zinc-200 text-sm font-bold rounded flex items-center gap-2 transition-colors">
              <Github className="w-4 h-4" /> GitHub <span className="font-sans font-normal">→</span>
            </a>
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 border border-zinc-800 text-white hover:border-zinc-600 hover:bg-zinc-900 text-sm font-bold rounded flex items-center gap-2 transition-colors">
                <ExternalLink className="w-4 h-4" /> Live Demo <span className="font-sans font-normal">→</span>
              </a>
            )}
          </div>
        </header>

        {/* Hero Image / Fallback */}
        <div className="w-full aspect-video md:aspect-[21/9] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 mb-20 shadow-2xl shadow-black/50">
          {(project.heroImage || project.thumbnail) ? (
            <img 
              src={project.heroImage || project.thumbnail} 
              alt={`${project.title} Hero`} 
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full bg-zinc-950 flex flex-col items-center justify-center font-mono text-center p-8 space-y-6">
              <div className="text-white font-bold text-3xl md:text-5xl tracking-widest">{project.title}</div>
              <div className="text-red-500 text-sm md:text-base font-bold tracking-widest uppercase">TradingView Strategy Scanner</div>
              <div className="flex flex-wrap justify-center gap-8 text-xs md:text-sm text-zinc-500 mt-4">
                <span className="flex flex-col items-center gap-1"><span className="text-zinc-300 font-bold">Browser</span> Automation</span>
                <span className="flex flex-col items-center gap-1"><span className="text-zinc-300 font-bold">Strategy</span> Extraction</span>
                <span className="flex flex-col items-center gap-1"><span className="text-zinc-300 font-bold">Multi</span> Timeframe</span>
                <span className="flex flex-col items-center gap-1"><span className="text-zinc-300 font-bold">NSE</span> Universe</span>
              </div>
            </div>
          )}
        </div>

        {/* Two Column Layout for Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Main Content */}
          <div className="md:col-span-8 space-y-20">
            
            {/* Overview */}
            <section className="space-y-6">
              <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-4">Overview</h2>
              <div className="text-base text-zinc-300 leading-relaxed space-y-4">
                <p>{project.description}</p>
              </div>
            </section>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-4">What I Built</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="bg-zinc-950 border border-zinc-900 p-5 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Box className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold text-white">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Technical Architecture */}
            {project.architecture && project.architecture.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-4">Technical Architecture</h2>
                <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-6 sm:p-8">
                  <div className="space-y-6">
                    {project.architecture.map((layer, idx) => {
                      const parts = layer.split('->');
                      return (
                        <div key={idx} className="flex flex-col">
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                              <Server className="w-4 h-4 text-zinc-400" />
                            </div>
                            <div>
                              {parts.length > 1 ? (
                                <>
                                  <div className="text-xs font-mono text-zinc-500">{parts[0].trim()}</div>
                                  <div className="text-sm font-semibold text-white">{parts[1].trim()}</div>
                                </>
                              ) : (
                                <div className="text-sm font-semibold text-white">{layer.trim()}</div>
                              )}
                            </div>
                          </div>
                          {idx !== project.architecture!.length - 1 && (
                            <div className="w-0.5 h-6 bg-zinc-900 ml-4 my-2"></div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </section>
            )}

            {/* Engineering Highlights */}
            {project.engineeringHighlights && project.engineeringHighlights.length > 0 && (
              <section className="space-y-6">
                <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-4">Engineering Highlights</h2>
                <ul className="space-y-4">
                  {project.engineeringHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex gap-4">
                      <Zap className="w-5 h-5 text-zinc-500 shrink-0" />
                      <span className="text-sm text-zinc-300 leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Screenshots Gallery */}
            {hasScreenshots && (
              <section className="space-y-6">
                <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest border-b border-zinc-900 pb-4">Gallery</h2>
                <div className="grid grid-cols-1 gap-6">
                  {project.screenshots?.map((screenshot, idx) => (
                    <div key={idx} className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
                      <img src={screenshot} alt={`Screenshot ${idx + 1}`} className="w-full h-auto" loading="lazy" />
                    </div>
                  ))}
                </div>
              </section>
            )}
            
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-12">
            
            {/* Tech Stack */}
            <section className="space-y-6 bg-zinc-950 border border-zinc-900 p-6 rounded-xl">
              <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1.5 bg-black border border-zinc-800 text-zinc-300 rounded font-mono text-xs">
                    {t}
                  </span>
                ))}
              </div>
            </section>

            {/* Links */}
            <section className="space-y-6 border-t border-zinc-900 pt-8">
              <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Links</h2>
              <div className="flex flex-col gap-3">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-zinc-950 border border-zinc-900 hover:border-zinc-700 rounded-lg group transition-colors">
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                    <span className="text-sm font-semibold text-white">Repository</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                </a>
                
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-zinc-950 border border-zinc-900 hover:border-zinc-700 rounded-lg group transition-colors">
                    <div className="flex items-center gap-3">
                      <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                      <span className="text-sm font-semibold text-white">Live Demo</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                  </a>
                )}
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}
