function ProjectCard({project: { title, description, tags, link, inDevelopment }, inDevelopmentLabel}) {
  return (
    
    <a  href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-gray-800 rounded-lg p-6 flex flex-col gap-3 hover:border-gray-600 transition-colors"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-white font-medium text-lg">{title}</h3>
        {inDevelopment && (
          <span className="text-xs text-amber-400 border border-amber-400/40 rounded-full px-2 py-0.5">
            {inDevelopmentLabel}
          </span>
        )}
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="text-xs text-gray-500 border border-gray-700 rounded-full px-2 py-0.5">
            {tag}
          </span>
        ))}
      </div>
    </a>
  )
}

export default ProjectCard