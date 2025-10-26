import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiSparkles, HiLightningBolt, HiShieldCheck } from "react-icons/hi";
import "./Resources.css";

const Resources = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const guides = [
    {
      category: "Getting Started",
      title: "Quick Start Guide",
      description: "Get up and running with Specter AI in 10 minutes",
      readTime: "5 min read",
      color: "gold",
    },
    {
      category: "Best Practices",
      title: "Effective Legal Research with AI",
      description: "Master advanced search techniques and AI-powered workflows",
      readTime: "12 min read",
      color: "green",
    },
    {
      category: "Security",
      title: "Data Protection & Compliance",
      description:
        "Understanding our security measures and compliance certifications",
      readTime: "8 min read",
      color: "teal",
    },
    {
      category: "Case Studies",
      title: "Smith & Associates Success Story",
      description: "How a mid-size firm reduced research time by 75%",
      readTime: "10 min read",
      color: "amber",
    },
    {
      category: "Features",
      title: "Document Scanning Deep Dive",
      description: "Advanced OCR techniques and entity extraction",
      readTime: "15 min read",
      color: "emerald",
    },
    {
      category: "Tutorials",
      title: "Building Your Case Q&A System",
      description:
        "Step-by-step guide to creating an intelligent case assistant",
      readTime: "20 min read",
      color: "cyan",
    },
  ];

  const webinars = [
    {
      title: "AI in Legal Practice: 2025 Trends",
      date: "March 15, 2025",
      duration: "45 minutes",
      status: "Upcoming",
    },
    {
      title: "Advanced Document Analysis Techniques",
      date: "February 28, 2025",
      duration: "60 minutes",
      status: "Watch Recording",
    },
    {
      title: "Security & Compliance for Law Firms",
      date: "February 10, 2025",
      duration: "30 minutes",
      status: "Watch Recording",
    },
  ];

  return (
    <div className="resources-page">
      {/* Hero Section */}
      <section className="resources-hero">
        <div className="container">
          <motion.div
            className="resources-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="resources-title">
              Learn & <span className="gradient-text">Grow</span>
            </h1>
            <p className="resources-subtitle">
              Guides, tutorials, and best practices to help you master Specter
              AI and transform your legal practice
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="section" ref={ref}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              <HiSparkles className="title-icon" />
              Guides & Tutorials
            </h2>
          </motion.div>

          <div className="guides-grid">
            {guides.map((guide, index) => (
              <motion.div
                key={index}
                className={`guide-card glass guide-${guide.color}`}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
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
      <section className="section webinars-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              <HiLightningBolt className="title-icon" />
              Webinars & Events
            </h2>
          </motion.div>

          <div className="webinars-list">
            {webinars.map((webinar, index) => (
              <motion.div
                key={index}
                className="webinar-card glass"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
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
      <section className="section support-section">
        <div className="container">
          <motion.div
            className="support-card glass"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <HiShieldCheck className="support-icon" />
            <h2>Need Help?</h2>
            <p>Our support team is available 24/7 to assist you</p>
            <div className="support-actions">
              <button className="btn-primary">Contact Support</button>
              <button className="btn-secondary">View Documentation</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
