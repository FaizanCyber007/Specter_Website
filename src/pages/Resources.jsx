import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav";
import { GUIDES, WEBINARS, SITE_CONFIG } from "../data/siteData";
import "./Resources.css";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "guides", label: "Guides" },
  { id: "webinars", label: "Webinars" },
  { id: "support", label: "Support" },
];

const Resources = () => {
  const navigate = useNavigate();

  return (
    <div className="resources-page">
      <PageNav sections={SECTIONS} title="Resources" />

      {/* Hero */}
      <section id="overview" className="resources-hero">
        <div className="container">
          <motion.div
            className="resources-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="resources-hero-badge glass">
              <span>📚 Knowledge Base</span>
            </div>
            <h1 className="resources-title">
              Learn &amp; <span className="gradient-text">Master</span> Specter
            </h1>
            <p className="resources-subtitle">
              Guides, tutorials, and best practices to help you digitize
              Pakistan&apos;s FIR documentation with confidence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Guides &amp; <span className="gradient-text">Tutorials</span>
            </h2>
            <p className="section-description">
              Step-by-step documentation to get the most out of Specter
            </p>
          </motion.div>

          <div className="guides-grid">
            {GUIDES.map((guide, index) => (
              <motion.div
                key={index}
                className={`guide-card glass guide-${guide.color}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <span className="guide-category">{guide.category}</span>
                <h3 className="guide-title">{guide.title}</h3>
                <p className="guide-description">{guide.description}</p>
                <div className="guide-footer">
                  <span className="read-time">{guide.readTime}</span>
                  <button className="read-btn">Read →</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Webinars Section */}
      <section id="webinars" className="section webinars-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Webinars &amp; <span className="gradient-text">Events</span>
            </h2>
            <p className="section-description">
              Live sessions and recordings with legal technology experts
            </p>
          </motion.div>

          <div className="webinars-list">
            {WEBINARS.map((webinar, index) => (
              <motion.div
                key={index}
                className="webinar-card glass"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <div className="webinar-info">
                  <h3 className="webinar-title">{webinar.title}</h3>
                  <div className="webinar-meta">
                    <span>{webinar.date}</span>
                    <span>•</span>
                    <span>{webinar.duration}</span>
                  </div>
                </div>
                <button
                  className={`webinar-btn ${
                    webinar.status === "Upcoming" ? "upcoming" : "recording"
                  }`}
                >
                  {webinar.status}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="section support-section">
        <div className="container">
          <motion.div
            className="support-card glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="support-icon">🛡️</div>
            <h2>Need Help?</h2>
            <p>Our support team is ready to assist you with any questions about Specter</p>
            <div className="support-actions">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
              >
                Contact Support
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(`mailto:${SITE_CONFIG.email}`)}
              >
                Email Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
