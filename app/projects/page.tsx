import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <div className="page-container">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      <div className="space-y-8">
        {projects.map((project) => (
          <div 
            key={project.title}
            className="border border-gray-200 rounded-lg p-6 hover:border-gray-300 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <div className="flex gap-3">
                {project.github && (
                  <a 
                    href={project.github}
                    className="text-sm text-secondary hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                )}
                {project.link && (
                  <a 
                    href={project.link}
                    className="text-sm text-accent hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-secondary mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-xs bg-gray-100 text-secondary rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}