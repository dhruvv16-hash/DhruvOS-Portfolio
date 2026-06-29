import { motion } from 'framer-motion'
import { Download, FileText, Eye } from 'lucide-react'
import { ScrollReveal } from '../components/ScrollReveal'

export function Resume() {
  return (
    <section id="resume" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <ScrollReveal>
              <span className="text-red-500 text-sm font-medium uppercase tracking-widest mb-4 block">Resume</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">My Resume</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Download my complete resume to learn more about my experience, skills, 
                and education. I'm always open to new opportunities and collaborations.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/Dhruv_Vira_Resume.docx"
                  download="Dhruv_Vira_Resume.docx"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-black bg-white rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Resume (DOCX)
                </motion.a>
                <motion.a
                  href="/Dhruv_Vira_Resume.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white border border-border rounded-lg hover:border-red-500/50 hover:bg-red-500/5 transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  View Online
                </motion.a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Format</div>
                    <div className="text-white font-medium">DOCX</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <Download className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Size</div>
                    <div className="text-white font-medium">~12 KB</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2} direction="right">
            <motion.a 
              href="/Dhruv_Vira_Resume.docx"
              download="Dhruv_Vira_Resume.docx"
              whileHover={{ scale: 1.02 }} 
              transition={{ duration: 0.3 }} 
              className="relative group block cursor-pointer"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-blue-500/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-card-elevated border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-xs text-muted-foreground">Dhruv_Vira_Resume.docx</span>
                </div>
                <div className="p-8 space-y-6">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">Dhruv Mayur Vira</div>
                    <div className="text-red-500">Computer Science Undergraduate</div>
                  </div>
                  <div className="border-t border-border" />
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-semibold text-white mb-2">Education</div>
                      <div className="text-sm text-muted-foreground">B.Tech in Computer Science</div>
                      <div className="text-xs text-muted-foreground">VIT Chennai, 2024-2028</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white mb-2">Skills</div>
                      <div className="flex flex-wrap gap-1">
                        {['C++', 'Python', 'Java', 'Spring Boot', 'TypeScript', 'Vue.js'].map((skill) => (
                          <span key={skill} className="px-2 py-0.5 text-xs text-muted-foreground bg-card-elevated border border-border rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="w-full py-2 text-center text-sm text-white bg-red-500 rounded-lg">Click to Download</div>
                  </div>
                </div>
              </div>
            </motion.a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
