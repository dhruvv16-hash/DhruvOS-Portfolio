import { motion } from 'framer-motion'
import { ScrollReveal } from '../components/ScrollReveal'
import { useEffect, useRef, useState } from 'react'
import { Play, Pause } from 'lucide-react'

export function VideoIntro() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="py-32 bg-gradient-to-b from-background to-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-96 h-96 bg-red-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="text-red-500 text-sm font-medium uppercase tracking-widest bg-red-500/10 px-4 py-2 rounded-full">
                Introduction
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Meet <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">Dhruv Vira</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A passionate developer dedicated to creating innovative solutions
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="relative max-w-3xl mx-auto">
            {/* Main video container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              {/* Animated glow border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              
              {/* Video wrapper */}
              <div className="relative bg-card border-2 border-border rounded-3xl overflow-hidden shadow-2xl">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src="/profile-video.mp4" type="video/mp4" />
                </video>

                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Play/Pause button overlay */}
                <button
                  onClick={togglePlay}
                  className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/20 transition-all duration-300 hover:scale-110 group"
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-white" />
                  ) : (
                    <Play className="w-5 h-5 text-white ml-0.5" />
                  )}
                </button>

                {/* Animated corner accents */}
                <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-red-500/50 rounded-tl-2xl" />
                <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-blue-500/50 rounded-tr-2xl" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-blue-500/50 rounded-bl-2xl" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-red-500/50 rounded-br-2xl" />
              </div>

              {/* Info card below video */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-card border border-border rounded-2xl px-8 py-4 shadow-xl min-w-[280px]"
              >
                <div className="text-center">
                  <div className="text-white font-bold text-lg mb-1">Dhruv Vira</div>
                  <div className="text-muted-foreground text-sm mb-2">Backend Developer</div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-muted-foreground">Available for opportunities</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Bottom spacing for the floating card */}
        <div className="h-16" />
      </div>
    </section>
  )
}
