import { translations } from '../lang'
import ProjectCard from './ProjectCard'

function Projects({ language }) {
  const text = translations[language].projects

  return (
    <section id="projects" className="px-8 py-24 border-t border-gray-800">
      <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-10">
        {text.heading}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {text.items.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            inDevelopmentLabel={text.inDevelopment}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects