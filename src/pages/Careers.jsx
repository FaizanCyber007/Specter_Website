import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiOfficeBuilding, HiLightningBolt, HiHeart, HiTrendingUp } from "react-icons/hi";
import PageNav from "../components/PageNav";
import { SITE_CONFIG, OPEN_POSITIONS } from "../data/siteData";
import "./Careers.css";

const SECTIONS = [
  { id: "why-join", label: "Why Join Us" },
  { id: "open-positions", label: "Open Positions" },
  { id: "culture", label: "Our Culture" },
  { id: "apply", label: "Apply" },
];

const WHY_JOIN = [
  {
    icon: <HiTrendingUp />,
    title: "Mission-Driven Work",
    description:
      "Every line of code you write improves access to justice in Pakistan. Your work has real, measurable impact on millions of people navigating the legal system.",
  },
  {
    icon: <HiLightningBolt />,
    title: "Move Fast & Build",
    description:
      "Small team, big scope. You'll own meaningful problems, ship quickly, and see your work used by real legal professionals across Pakistan.",
  },
  {
    icon: <HiOfficeBuilding />,
    title: "Competitive Compensation",
    description:
      "Market-competitive salary, equity participation, flexible work arrangements, and professional development budget.",
  },
  {
    icon: <HiHeart />,
    title: "Great Team",
    description:
      "Join a tight-knit team of engineers, legal technology specialists, and product thinkers who are passionate about what they build.",
  },
];

const PositionCard = ({ position }) => {
  const [expanded, setExpanded] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="position-card glass"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="position-header" onClick={() => setExpanded(!expanded)}>
        <div className="position-info">
          <h3 className="position-title">{position.title}</h3>
          <div className="position-meta">
            <span className="position-dept">{position.department}</span>
            <span className="position-divider">·</span>
            <span className="position-location">{position.location}</span>
            <span className="position-divider">·</span>
            <span className="position-type">{position.type}</span>
          </div>
        </div>
        <motion.button
          className="position-toggle"
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          ▾
        </motion.button>
      </div>

      {expanded && (
        <motion.div
          className="position-body"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="position-description">{position.description}</p>
          <a
            href={`mailto:${SITE_CONFIG.email}?subject=Application: ${position.title}`}
            className="btn-primary position-apply-btn"
          >
            Apply for this Role
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};

const Careers = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="careers-page">
      <PageNav sections={SECTIONS} title="Careers" />

      {/* Hero */}
      <section className="careers-hero">
        <div className="container">
          <motion.div
            className="careers-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="careers-badge glass">
              <span>⚖️ We&apos;re Hiring</span>
            </div>
            <h1 className="careers-title">
              Build the Future of{" "}
              <span className="gradient-text">Legal Technology</span> in
              Pakistan
            </h1>
            <p className="careers-subtitle">
              Join a team on a mission to digitize and democratize Pakistan&apos;s
              legal system. We&apos;re looking for passionate engineers, designers,
              and legal tech specialists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section id="why-join" className="section">
        <div className="container">
          <motion.div
            ref={heroRef}
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">
              Why Join <span className="gradient-text">Specter</span>?
            </h2>
          </motion.div>
          <div className="why-join-grid">
            {WHY_JOIN.map((item, index) => (
              <motion.div
                key={index}
                className="why-join-card glass"
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <div className="why-join-icon">{item.icon}</div>
                <h3 className="why-join-title">{item.title}</h3>
                <p className="why-join-description">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="section-description">
              We&apos;re growing. If you don&apos;t see the right role, send us your
              resume anyway.
            </p>
          </div>
          <div className="positions-list">
            {OPEN_POSITIONS.map((position, index) => (
              <PositionCard key={index} position={position} />
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section id="culture" className="section">
        <div className="container">
          <div className="culture-grid">
            <div className="culture-content">
              <h2 className="section-title">
                Our <span className="gradient-text">Culture</span>
              </h2>
              <p className="culture-text">
                We are a small team with a large mission. We believe that great
                software is built by people who care deeply about the problem
                they&apos;re solving — and we care deeply about making Pakistan&apos;s
                legal system more accessible, transparent, and just.
              </p>
              <p className="culture-text">
                We work hard, move fast, and take pride in our craft. We&apos;re
                remote-friendly, results-oriented, and we celebrate both
                technical excellence and the human impact of our work.
              </p>
              <p className="culture-text">
                Diversity of thought, background, and experience makes us
                better. We actively seek team members from diverse backgrounds —
                including from Pakistan&apos;s legal community itself.
              </p>
            </div>
            <div className="culture-values glass">
              <h3 className="culture-values-title">We Value</h3>
              <ul className="culture-values-list">
                <li>🎯 Impact over activity</li>
                <li>🔍 Thoughtful craft and attention to detail</li>
                <li>🤝 Transparent communication</li>
                <li>📚 Continuous learning</li>
                <li>⚖️ User empathy — especially for legal professionals</li>
                <li>🛡️ Security and privacy as first-class concerns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section id="apply" className="section">
        <div className="container">
          <motion.div
            className="careers-cta glass"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="careers-cta-title">
              Don&apos;t see your role?{" "}
              <span className="gradient-text">Reach out anyway.</span>
            </h2>
            <p className="careers-cta-description">
              We&apos;re always looking for exceptional people. Send your resume and
              a note about what you&apos;d like to build at Specter.
            </p>
            <a
              href={`mailto:${SITE_CONFIG.email}?subject=General Application — Specter`}
              className="btn-primary"
            >
              Send Your Application
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
