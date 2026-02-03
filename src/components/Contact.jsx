import { siteData } from '../data'

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section id="contact" className="section contact reveal">
      <div className="container contact-grid">
        <div className="contact-info">
          <p className="eyebrow">Get in touch</p>
          <h2>Let&apos;s build something impactful</h2>
          <p>
            Ready to collaborate on full-stack applications, mobile experiences,
            or embedded solutions. Drop a message anytime.
          </p>
          <div className="contact-details">
            <a href={`mailto:${siteData.contact.email}`}>
              {siteData.contact.email}
            </a>
            <a href={`tel:${siteData.contact.phone}`}>
              {siteData.contact.phone}
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@email.com"
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
