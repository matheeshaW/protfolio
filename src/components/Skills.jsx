import { siteData } from '../data'

function Skills() {
  return (
    <section id="skills" className="section skills reveal">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Expertise</p>
          <h2>Skills & Tooling</h2>
          <p>
            A blend of frontend craftsmanship, backend engineering, and hands-on
            product development.
          </p>
        </div>

        <div className="skills-grid">
          {siteData.skills.map((group) => (
            <div key={group.category} className="skill-card">
              <h3>{group.category}</h3>
              <div className="skill-items">
                {group.items.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <img src={skill.icon} alt={skill.name} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
