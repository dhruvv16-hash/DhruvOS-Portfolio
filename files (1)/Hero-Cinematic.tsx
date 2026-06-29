import { motion, useAnimation } from 'framer-motion'
import { ArrowDown, Download, Github } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function Hero() {
  const name = 'Dhruv Vira'
  const nameChars = name.split('')
  const videoRef = useRef<HTMLVideoElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Container - Cinematic Zoom In */}
      <motion.div
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        {/* Multi-layer gradient overlay for depth */}
        <div className="absolute inset-0 z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
        </div>
        
        {/* Video */}
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

        {/* Animated scanline effect for tech feel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.03, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-white to-transparent"
          style={{ backgroundSize: '100% 2px' }}
        />
      </motion.div>

      {/* Dynamic gradient orbs */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            scale: [0.8, 1.3, 0.8], 
            opacity: [0, 0.2, 0],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-red-500/40 to-orange-500/40 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            scale: [1.3, 0.8, 1.3], 
            opacity: [0, 0.2, 0],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top line reveal */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-20 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mx-auto mb-8"
        />

        {/* Subtitle with fade and slide */}
        <motion.p
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/60 text-sm sm:text-base uppercase tracking-[0.3em] mb-8 font-light"
        >
          Computer Science Undergraduate
        </motion.p>

        {/* Name - Staggered character reveal with glow */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tight">
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 80, rotateX: -90, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.6 + i * 0.06, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="inline-block"
                style={{
                  textShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          {/* Underline animation */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-1 w-64 mx-auto mt-4 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full"
          />
        </div>

        {/* Role pills - staggered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          {['Backend Developer', 'Problem Solver', 'Tech Enthusiast'].map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium hover:bg-white/20 transition-all duration-300"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Building robust systems and scalable solutions with Python, Java, and modern web technologies.
        </motion.p>

        {/* CTA Buttons with hover glow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-black bg-white rounded-full overflow-hidden shadow-2xl"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            <Github className="w-4 h-4 relative z-10" />
            <span className="relative z-10">View My Work</span>
          </motion.a>
          
          <motion.a
            href="#resume"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-bold text-white border-2 border-white/40 rounded-full hover:border-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        {/* Stats or badges - optional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-6 text-white/50 text-xs uppercase tracking-wider"
        >
          <span className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Available
          </span>
          <span>•</span>
          <span>VIT Chennai</span>
          <span>•</span>
          <span>India</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 3.5 }}
          className="flex flex-col items-center text-white/60 hover:text-white transition-colors group"
        >
          <span className="text-xs mb-3 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            Discover More
          </span>
          <div className="w-8 h-12 border-2 border-white/40 rounded-full flex items-start justify-center p-2 group-hover:border-white transition-colors">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full group-hover:bg-white"
            />
          </div>
        </motion.a>
      </motion.div>

      {/* Corner frames - geometric design elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 3, duration: 1.2 }}
        className="absolute inset-0 pointer-events-none z-10"
      >
        <svg className="absolute top-8 left-8 w-20 h-20" viewBox="0 0 100 100">
          <motion.path
            d="M 0 30 L 0 0 L 30 0"
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 3 }}
          />
        </svg>
        <svg className="absolute top-8 right-8 w-20 h-20" viewBox="0 0 100 100">
          <motion.path
            d="M 70 0 L 100 0 L 100 30"
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 3.1 }}
          />
        </svg>
        <svg className="absolute bottom-8 left-8 w-20 h-20" viewBox="0 0 100 100">
          <motion.path
            d="M 0 70 L 0 100 L 30 100"
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 3.2 }}
          />
        </svg>
        <svg className="absolute bottom-8 right-8 w-20 h-20" viewBox="0 0 100 100">
          <motion.path
            d="M 100 70 L 100 100 L 70 100"
            stroke="white"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 3.3 }}
          />
        </svg>
      </motion.div>
    </section>
  )
}
