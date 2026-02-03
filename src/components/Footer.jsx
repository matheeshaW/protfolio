import { siteData } from '../data'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>{siteData.footerText}</span>
        <div className="footer-links">
          {siteData.socials.map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
