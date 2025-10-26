import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const footerLinks = {
    product: [
      { name: "Features", href: "/#features", isHash: true },
      { name: "Pricing", href: "/#pricing", isHash: true },
      { name: "Solutions", href: "/#solutions", isHash: true },
      { name: "Use Cases", href: "/#use-cases", isHash: true },
    ],
    company: [
      { name: "About Us", href: "/company", isHash: false },
      { name: "Resources", href: "/resources", isHash: false },
      { name: "Careers", href: "/company#careers", isHash: false },
      { name: "Contact", href: "/company#contact", isHash: false },
    ],
    resources: [
      { name: "Documentation", href: "/resources", isHash: false },
      { name: "Guides & Tutorials", href: "/resources#guides", isHash: false },
      { name: "Webinars", href: "/resources#webinars", isHash: false },
      { name: "Support", href: "/resources#support", isHash: false },
    ],
    legal: [
      { name: "Privacy Policy", href: "#", isHash: true },
      { name: "Terms of Service", href: "#", isHash: true },
      { name: "Cookie Policy", href: "#", isHash: true },
      { name: "Compliance", href: "#", isHash: true },
    ],
  };

  const socialLinks = [
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
    { icon: <FaGithub />, href: "#", label: "GitHub" },
    { icon: <FaYoutube />, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo gradient-text">Specter AI</h3>
            <p className="footer-tagline">
              Empowering legal professionals with AI-driven intelligence
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="social-link glass"
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h4 className="link-title">Product</h4>
              <ul className="link-list">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    {link.isHash ? (
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => navigate(link.href)}
                        className="footer-link footer-link-btn"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h4 className="link-title">Company</h4>
              <ul className="link-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    {link.isHash ? (
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => navigate(link.href)}
                        className="footer-link footer-link-btn"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h4 className="link-title">Resources</h4>
              <ul className="link-list">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    {link.isHash ? (
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => navigate(link.href)}
                        className="footer-link footer-link-btn"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-column">
              <h4 className="link-title">Legal</h4>
              <ul className="link-list">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-contact">
            <h4 className="link-title">Contact Us</h4>
            <div className="contact-item">
              <HiMail className="contact-icon" />
              <span>support@specterai.com</span>
            </div>
            <div className="contact-item">
              <HiPhone className="contact-icon" />
              <span>+92 332 0436737</span>
            </div>
            <div className="contact-item">
              <HiLocationMarker className="contact-icon" />
              <span>Defence Road, Lahore</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2025 Specter AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
