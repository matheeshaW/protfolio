import { siteData } from '../data'

function Hero() {
  return (
    <section id="home" className="section hero reveal">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">Hello, I&apos;m</p>
          <h1 className="hero-title glitch" data-text={siteData.name}>
            {siteData.name}
          </h1>
          <div className="typewriter" aria-label={siteData.title}>
            <span>{siteData.title}</span>
          </div>
          <p className="hero-bio">{siteData.bio}</p>

          <div className="hero-actions">
            <a className="btn btn-primary" href={siteData.hero.ctaPrimary.href}>
              {siteData.hero.ctaPrimary.label}
            </a>
            <a
              className="btn btn-ghost"
              href={siteData.hero.ctaSecondary.href}
              download
            >
              {siteData.hero.ctaSecondary.label}
            </a>
          </div>

          <div className="social-row">
            {siteData.socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="social-chip"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-frame">
            <img src={siteData.hero.profileImage} alt={siteData.name} />
          </div>
          <div className="hero-card-meta">
            <p className="hero-card-title">{siteData.title}</p>
            <div className="hero-card-details">
              <span>{siteData.contact.email}</span>
              <span>{siteData.contact.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
