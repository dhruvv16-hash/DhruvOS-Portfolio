import { motion } from 'framer-motion'
import { Code2, Brain, Server, Database, BarChart3, Wrench } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, Brain, Server, Database, BarChart3, Wrench,
}

interface SkillCardProps {
  category: string
  items: string[]
  icon: string
  index: number
}

export function SkillCard({ category, items, icon, index }: SkillCardProps) {
  const Icon = iconMap[icon] || Code2

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, boxShadow: '0 0 20px rgba(239, 68, 68, 0.2)' }}
      className="group relative bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-red-500/50"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
          <Icon className="w-6 h-6 text-red-500" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-3">{category}</h3>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span key={item} className="px-3 py-1 text-sm text-muted-foreground bg-card-elevated border border-border rounded-full hover:border-red-500/30 hover:text-white transition-colors">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
