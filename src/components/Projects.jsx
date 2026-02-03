import { siteData } from '../data'

function Projects() {
  return (
    <section id="projects" className="section projects reveal">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Portfolio</p>
          <h2>Featured Projects</h2>
          <p>
            A snapshot of my recent work across web platforms, product systems,
            and embedded experimentation.
          </p>
        </div>

        <div className="projects-grid">
          {siteData.projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-media">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-actions">
                <a
                  className="btn btn-ghost"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Code
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
