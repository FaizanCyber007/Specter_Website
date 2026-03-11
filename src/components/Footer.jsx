import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { SITE_CONFIG, FOOTER_LINKS, SOCIAL_LINKS } from "../data/siteData";
import "./Footer.css";

const SOCIAL_ICONS = {
  Twitter: <FaTwitter />,
  LinkedIn: <FaLinkedin />,
  GitHub: <FaGithub />,
  YouTube: <FaYoutube />,
};

const Footer = () => {
  const navigate = useNavigate();

  const handleLink = (link) => {
    if (link.isHash) {
      // In-page anchor — navigate (may include /#id)
      if (link.href.startsWith("/#")) {
        navigate(link.href);
      } else {
        window.location.hash = link.href;
      }
    } else {
      navigate(link.href);
    }
  };

  const renderLink = (link, index) => (
    <li key={index}>
      <button
        onClick={() => handleLink(link)}
        className="footer-link footer-link-btn"
      >
        {link.name}
      </button>
    </li>
  );

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-row">
              <span className="footer-logo-icon">⚖️</span>
              <h3 className="footer-logo gradient-text">{SITE_CONFIG.name}</h3>
            </div>
            <p className="footer-tagline">{SITE_CONFIG.shortDescription}</p>
            <div className="footer-social">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="social-link glass"
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {SOCIAL_ICONS[social.platform]}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h4 className="link-title">Product</h4>
              <ul className="link-list">
                {FOOTER_LINKS.product.map(renderLink)}
              </ul>
            </div>

            <div className="link-column">
              <h4 className="link-title">Company</h4>
              <ul className="link-list">
                {FOOTER_LINKS.company.map(renderLink)}
              </ul>
            </div>

            <div className="link-column">
              <h4 className="link-title">Resources</h4>
              <ul className="link-list">
                {FOOTER_LINKS.resources.map(renderLink)}
              </ul>
            </div>

            <div className="link-column">
              <h4 className="link-title">Legal</h4>
              <ul className="link-list">
                {FOOTER_LINKS.legal.map(renderLink)}
              </ul>
            </div>
          </div>

          <div className="footer-contact">
            <h4 className="link-title">Contact Us</h4>
            <div className="contact-item">
              <HiMail className="contact-icon" />
              <span>{SITE_CONFIG.email}</span>
            </div>
            <div className="contact-item">
              <HiPhone className="contact-icon" />
              <span>{SITE_CONFIG.phone}</span>
            </div>
            <div className="contact-item">
              <HiLocationMarker className="contact-icon" />
              <span>{SITE_CONFIG.address}</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="footer-sub">
            Built with pride for Pakistan's legal community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
