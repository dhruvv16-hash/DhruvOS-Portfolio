import { motion } from 'framer-motion'
import { education, certifications, experience } from '../data/experience'
import { ScrollReveal } from '../components/ScrollReveal'
import { GraduationCap, Award, Briefcase } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-red-500 text-sm font-medium uppercase tracking-widest mb-4 block">Background</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Experience & Education</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My professional journey, academic background, and certifications.
            </p>
          </ScrollReveal>
        </div>

        {/* Professional & Open Source Experience */}
        <div className="mb-16">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-red-500" />
              Work & Open Source Experience
            </h3>
          </ScrollReveal>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8 border-l-2 border-border hover:border-red-500/50 transition-colors"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-red-500 border-4 border-card" />
                <div className="bg-card border border-border rounded-xl p-6 hover:border-red-500/30 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <h4 className="text-xl font-bold text-white">{exp.role} @ <span className="text-red-500">{exp.company}</span></h4>
                    <span className="text-sm text-red-500 font-medium">{exp.period}</span>
                  </div>
                  {exp.tech && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-xs text-red-500 bg-red-500/10 border border-red-500/20 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <ul className="space-y-3 list-none text-muted-foreground text-sm">
                    {exp.details.map((detail, idx) => (
                      <li key={idx} className="leading-relaxed flex items-start gap-2">
                        <span className="text-red-500 mt-1.5 flex-shrink-0">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-red-500" />
              Education
            </h3>
          </ScrollReveal>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative pl-8 border-l-2 border-border hover:border-red-500/50 transition-colors"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-red-500 border-4 border-card" />
                <div className="bg-card border border-border rounded-xl p-6 hover:border-red-500/30 transition-colors">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-sm text-red-500 font-medium">{edu.period}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{edu.institution}</h4>
                  <p className="text-muted-foreground mb-4">{edu.degree}</p>
                  {edu.details && (
                    <div className="flex flex-wrap gap-2">
                      {edu.details.map((detail) => (
                        <span key={detail} className="px-2 py-1 text-xs text-muted-foreground bg-card-elevated border border-border rounded">
                          {detail}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <ScrollReveal>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="w-6 h-6 text-red-500" />
              Certifications
            </h3>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, boxShadow: '0 0 20px rgba(239, 68, 68, 0.2)' }}
                className="bg-card border border-border rounded-xl p-6 hover:border-red-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                  <Award className="w-5 h-5 text-red-500" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-1">{cert.name}</h4>
                <p className="text-sm text-red-500 mb-3">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
