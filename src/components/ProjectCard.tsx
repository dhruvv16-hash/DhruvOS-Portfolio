import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tech: string[]
  features: string[]
  link?: string
  codeSnippet?: string
  fileName?: string
  index: number
}

export function ProjectCard({ title, description, tech, features, link, codeSnippet, fileName, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
    >
      <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative bg-card-elevated border border-border rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-card border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-4 text-xs text-muted-foreground font-mono">{fileName || 'project.cpp'}</span>
            </div>
            <pre className="p-4 text-sm font-mono text-muted-foreground overflow-x-auto">
              <code>{codeSnippet || '// Code snippet coming soon'}</code>
            </pre>
          </div>
        </motion.div>
      </div>
      <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item) => (
            <span key={item} className="px-3 py-1 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-full">
              {item}
            </span>
          ))}
        </div>
        <ul className="space-y-2 mb-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-center text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3" />
              {feature}
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <a href={link || '#'} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-black bg-white rounded-lg hover:bg-gray-100 transition-colors">
            <Github className="w-4 h-4" />
            View Code
          </a>
          <a href={link || '#'} className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white border border-border rounded-lg hover:border-red-500/50 hover:bg-red-500/5 transition-colors">
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}
