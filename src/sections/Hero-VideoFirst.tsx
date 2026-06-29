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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Container - Appears First */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />
        
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/profile-video.mp4" type="video/mp4" />
        </video>

        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/50 z-10" />
      </motion.div>

      {/* Animated gradient orbs - subtle background glow */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ scale: [1, 1.2, 1], opacity: [0, 0.15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0, 0.15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        />
      </div>

      {/* Text Content - Animates After Video */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-sm sm:text-base uppercase tracking-widest mb-6"
        >
          Computer Science Undergraduate
        </motion.p>

        {/* Name - Character by character animation */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-6 tracking-tight">
          {nameChars.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 1.5 + i * 0.05, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="inline-block"
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </h1>

        {/* Role description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8"
        >
          Backend Developer | Problem Solver | Tech Enthusiast
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground max-w-xl mx-auto mb-12"
        >
          Building robust systems and scalable solutions with Python, Java, and modern web technologies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-black bg-white rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Github className="w-4 h-4" />
            View My Work
          </a>
          <a
            href="#resume"
            className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white border-2 border-white/30 rounded-lg hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
        />
      </div>

      {/* Scroll indicator - appears last */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
        >
          <span className="text-xs mb-2 uppercase tracking-wider">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>

      {/* Corner frame accents - subtle design touch */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute inset-0 pointer-events-none z-10"
      >
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/30" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/30" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/30" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/30" />
      </motion.div>
    </section>
  )
}
