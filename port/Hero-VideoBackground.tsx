import { motion } from 'framer-motion'
import { ArrowDown, Download, Github } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function Hero() {
  const name = 'Dhruv Vira'
  const nameChars = name.split('')
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background z-10" />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/profile-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground text-sm sm:text-base uppercase tracking-widest mb-6"
        >
          Computer Science Undergraduate
        </motion.p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-6 tracking-tight">
          {nameChars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Backend Developer | Problem Solver | Tech Enthusiast
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-muted-foreground max-w-xl mx-auto mb-12"
        >
          Building robust systems and scalable solutions with Python, Java, and modern web technologies.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-black bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            <Github className="w-4 h-4" />
            View My Work
          </a>
          <a
            href="#resume"
            className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-border rounded-lg hover:border-red-500/50 hover:bg-red-500/5 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center text-muted-foreground hover:text-white transition-colors"
        >
          <span className="text-xs mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  )
}
