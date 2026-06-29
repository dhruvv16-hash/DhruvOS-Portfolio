import { motion } from 'framer-motion'
import { ArrowDown, Terminal, Zap } from 'lucide-react'

interface HeroProps {
  onExplore: () => void
  onSkip: () => void
  onHire: () => void
}

export function Hero({ onExplore, onSkip, onHire }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black grid-bg">
      {/* Glow Effects */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* HUD Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xxs font-mono text-zinc-500"
        >
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping" />
          <span>SYSTEM_INITIALIZATION: COMPLETED</span>
        </motion.div>

        {/* Headline */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl sm:text-8xl font-black text-white tracking-tight font-sans"
          >
            Dhruv Vira
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl sm:text-2xl font-semibold tracking-wider text-red-500 font-mono uppercase"
          >
            AI Engineer & Backend Developer
          </motion.p>
        </div>

        {/* Positioning Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-sans"
        >
          Building scalable AI products, robust backend infrastructures, and algorithmic trading systems that solve real-world business challenges.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button
            onClick={onExplore}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-black bg-white rounded-lg hover:bg-zinc-200 transition-all duration-300 hover:scale-102 font-sans"
          >
            <Terminal className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
            Explore Experience
          </button>
          
          <button
            onClick={onSkip}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-zinc-300 border border-zinc-800 rounded-lg hover:border-zinc-500 hover:bg-zinc-900/40 transition-all font-sans"
          >
            Skip →
          </button>

          <button
            onClick={onHire}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-red-500 border border-red-500/20 hover:border-red-500 rounded-lg hover:bg-red-500/5 transition-all font-sans"
          >
            <Zap className="w-4 h-4 animate-pulse" />
            Hire Me
          </button>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-12 left-12 w-20 h-20 border-l border-t border-white/20" />
          <div className="absolute top-12 right-12 w-20 h-20 border-r border-t border-white/20" />
          <div className="absolute bottom-12 left-12 w-20 h-20 border-l border-b border-white/20" />
          <div className="absolute bottom-12 right-12 w-20 h-20 border-r border-b border-white/20" />
        </motion.div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-500 hover:text-white transition-colors cursor-pointer text-xs font-mono">
        <span className="uppercase tracking-widest text-xxs">Initialize Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  )
}
