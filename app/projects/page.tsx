import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <div className="page-container">
      <div className="mb-2">
        <h1
          className="text-3xl font-semibold mb-1"
          style={{ fontFamily: 'var(--font-family-mono)' }}
        >
          Projects
        </h1>
        <p
          className="text-sm text-secondary"
          style={{ fontFamily: 'var(--font-family-mono)' }}
        >
          {'// '}
          {projects.length} {projects.length === 1 ? 'entry' : 'entries'}
        </p>
      </div>

      <div className="mt-6">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className="py-7"
            style={{
              borderBottom: '1px solid var(--color-line)',
              borderTop: i === 0 ? '1px solid var(--color-line)' : undefined,
            }}
          >
            <div className="flex items-baseline justify-between gap-4 mb-2.5">
              <h2
                className="text-lg font-semibold"
                style={{ fontFamily: 'var(--font-family-mono)' }}
              >
                {project.title}
              </h2>
              <span
                className="text-xs px-2 py-0.5 rounded shrink-0 whitespace-nowrap"
                style={{
                  fontFamily: 'var(--font-family-mono)',
                  border: `1px solid ${project.status === 'stable' ? 'var(--color-stable)' : 'var(--color-accent)'}`,
                  color: project.status === 'stable' ? 'var(--color-stable)' : 'var(--color-accent)',
                }}
              >
                {project.status === 'stable' ? 'stable' : 'in progress'}
              </span>
            </div>

            <p className="text-secondary text-sm leading-relaxed mb-3.5 max-w-2xl">
              {project.description}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex gap-2 flex-wrap">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2.5 py-0.5 rounded text-secondary"
                    style={{
                      fontFamily: 'var(--font-family-mono)',
                      border: '1px solid var(--color-line)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  className="text-xs text-accent hover:underline"
                  style={{ fontFamily: 'var(--font-family-mono)' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  view source →
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  className="text-xs text-accent hover:underline"
                  style={{ fontFamily: 'var(--font-family-mono)' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  live demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}