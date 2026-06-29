import { ProjectCard } from '../components/ProjectCard'
import { projects as projectsData } from '../data/projects'
import { ScrollReveal } from '../components/ScrollReveal'

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <ScrollReveal>
            <span className="text-red-500 text-sm font-medium uppercase tracking-widest mb-4 block">Portfolio</span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A selection of my recent work showcasing my skills in backend development, 
              system design, and problem-solving.
            </p>
          </ScrollReveal>
        </div>
        <div className="space-y-24">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              features={project.features}
              link={project.link}
              codeSnippet={project.codeSnippet}
              fileName={project.fileName}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
