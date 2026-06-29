import { motion } from 'framer-motion'
import { ScrollReveal } from '../components/ScrollReveal'
import { useEffect, useRef } from 'react'

export function About() {
  const stats = [
    { value: '4+', label: 'Projects Completed' },
    { value: '3+', label: 'Certifications' },
    { value: '2024', label: 'Started Journey' },
  ]

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <span className="text-red-500 text-sm font-medium uppercase tracking-widest mb-4 block">About Me</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Building the future, <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">one line of code</span> at a time.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I'm a Computer Science undergraduate at Vellore Institute of Technology, Chennai, 
                passionate about building efficient backend systems and solving complex problems. 
                With hands-on experience in Python and Java-based applications, I specialize in 
                creating API-integrated tools, security systems, and data-driven solutions.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-muted-foreground leading-relaxed mb-8">
                My foundation in Data Structures, Algorithms, and OOP principles drives me to write 
                clean, maintainable code. I'm constantly exploring new technologies and applying them 
                to real-world projects.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} direction="right">
            <div className="relative">
              {/* Animated glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/30 to-blue-500/30 rounded-2xl blur-2xl opacity-75 animate-pulse" />
              
              {/* Video container with border animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative bg-card border-2 border-border rounded-2xl overflow-hidden">
                  {/* Gradient border animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 opacity-50 blur-xl animate-pulse" />
                  
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="relative w-full h-auto rounded-2xl"
                  >
                    <source src="/profile-video.mp4" type="video/mp4" />
                  </video>
                  
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Floating name tag */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-6 py-2 shadow-xl"
                >
                  <span className="text-white font-semibold">Dhruv Vira</span>
                  <span className="ml-2 text-red-500">●</span>
                </motion.div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
