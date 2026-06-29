import { SkillCard } from '../components/SkillCard'
import { skills as skillsData } from '../data/skills'
import { ScrollReveal } from '../components/ScrollReveal'

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-red-500 text-sm font-medium uppercase tracking-widest mb-4 block">Expertise</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I work with to build robust and scalable solutions.
            </p>
          </ScrollReveal>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={skill.category}
              category={skill.category}
              items={skill.items}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
