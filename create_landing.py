import os

landing_code = """import { Link } from 'react-router-dom'
import { ArrowRight, Github, ExternalLink } from 'lucide-react'
import { projectsManifest } from '../data/projectsManifest'
import { motion } from 'framer-motion'

export function ProjectsLanding() {
  const personalProjects = projectsManifest.projects.filter(p => p.type === 'personal')

  return (
    <div className="min-h-screen bg-black pt-20 pb-24 font-sans text-zinc-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 border-b border-zinc-900 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">PROJECTS</h1>
          <p className="text-lg text-zinc-400 font-mono">Systems, products, and experiments I've built.</p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalProjects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-zinc-950 border border-zinc-900 rounded-lg overflow-hidden hover:border-zinc-700 transition-colors"
            >
              <Link to={`/projects/${project.slug}`} className="block relative aspect-video overflow-hidden border-b border-zinc-900">
                {project.thumbnail ? (
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-zinc-900 flex items-center justify-center text-zinc-700 font-mono text-sm">
                    No visual output available
                  </div>
                )}
                {project.status && (
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black/80 backdrop-blur-sm border border-zinc-800 text-xxs font-mono text-zinc-300 rounded uppercase tracking-widest">
                    {project.status}
                  </div>
                )}
              </Link>
              
              <div className="p-6 flex flex-col flex-grow space-y-4">
                <div>
                  <Link to={`/projects/${project.slug}`} className="block hover:text-white transition-colors">
                    <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
                  </Link>
                  <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-2 py-1 bg-zinc-900/50 border border-zinc-800 text-zinc-400 rounded text-xs font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-4 mt-auto flex items-center justify-between border-t border-zinc-900/50">
                  <Link 
                    to={`/projects/${project.slug}`}
                    className="text-sm font-semibold text-white hover:text-red-500 flex items-center gap-1.5 transition-colors"
                  >
                    View Project <ArrowRight className="w-4 h-4" />
                  </Link>
                  
                  <div className="flex items-center gap-4">
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}
"""

with open("src/sections/ProjectsLanding.tsx", "w", encoding="utf-8") as f:
    f.write(landing_code)

print("Created src/sections/ProjectsLanding.tsx")
