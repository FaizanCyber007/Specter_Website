import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import PageNav from "../components/PageNav";
import { SITE_CONFIG, TEAM, VALUES, MILESTONES } from "../data/siteData";
import "./Company.css";

const SECTIONS = [
  { id: "about", label: "About Us" },
  { id: "story", label: "Our Story" },
  { id: "values", label: "Values" },
  { id: "team", label: "Team" },
  { id: "milestones", label: "Milestones" },
  { id: "contact", label: "Contact" },
];

const Company = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="company-page">
      <PageNav sections={SECTIONS} title="Company" />

      {/* ── Hero ── */}
      <section id="about" className="company-hero">
        <div className="container">
          <motion.div
            className="company-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="company-hero-badge glass">
              <span>⚖️ About Specter</span>
            </div>
            <h1 className="company-title">
              Digitizing Pakistan&apos;s{" "}
              <span className="gradient-text">Legal Records</span> with AI
            </h1>
            <p className="company-subtitle">
              We are on a mission to make Pakistan&apos;s FIR documents
              accessible, searchable, and intelligent — empowering every actor
              in the legal system, from citizens to courts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Story ── */}
      <section id="story" className="section" ref={ref}>
        <div className="container">
          <div className="story-grid">
            <motion.div
              className="story-content"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Our Story</h2>
              <p className="story-text">
                Specter was founded in 2025 by{" "}
                <strong>Shamoil Aslam</strong>,{" "}
                <strong>Faizan Javed</strong>, and{" "}
                <strong>Siddique Umar</strong> after witnessing firsthand the
                challenges facing Pakistan&apos;s legal professionals. Physical FIR
                documents — the foundation of every criminal case — were buried
                in filing cabinets, inaccessible, unsearchable, and prone to
                loss.
              </p>
              <p className="story-text">
                Shamoil, an AI/ML engineer with expertise in deep learning, and
                Faizan, a full-stack developer and AI specialist, saw an
                opportunity to apply intelligent document processing to solve
                this real problem. Siddique, with his background in legal
                technology, ensured the solution was built around actual legal
                workflows.
              </p>
              <p className="story-text">
                Together, they built Specter — a platform that doesn&apos;t replace
                legal professionals but dramatically amplifies their
                capabilities by making FIR documentation intelligent.
              </p>
            </motion.div>

            <motion.div
              className="story-image glass"
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="story-image-content">
                <div className="story-mission-icon">🏛️</div>
                <h3>Our Mission</h3>
                <p>
                  To digitize, democratize, and make intelligent Pakistan&apos;s FIR
                  documentation system — ensuring that every legal professional,
                  organization, and citizen can access and understand the
                  information they need.
                </p>
                <div className="story-stats">
                  <div className="story-stat">
                    <span className="story-stat-number gradient-text">
                      {SITE_CONFIG.founded}
                    </span>
                    <span className="story-stat-label"> Founded</span>
                  </div>
                  <div className="story-stat">
                    <span className="story-stat-number gradient-text">
                      Pakistan
                    </span>
                    <span className="story-stat-label"> Headquarters</span>
                  </div>
                  <div className="story-stat">
                    <span className="story-stat-number gradient-text">3</span>
                    <span className="story-stat-label"> Co-Founders</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section id="values" className="section values-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="section-description">
              The principles that guide every decision we make
            </p>
          </motion.div>

          <div className="values-grid">
            {VALUES.map((value, index) => (
              <motion.div
                key={index}
                className="value-card glass"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <div className="value-number gradient-text">
                  0{index + 1}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="team" className="section team-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="section-description">
              The people building Pakistan&apos;s premier legal document intelligence platform
            </p>
          </motion.div>

          <div className="team-grid">
            {TEAM.map((member, index) => (
              <motion.div
                key={index}
                className="team-card glass"
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div className="team-avatar">{member.image}</div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role gradient-text">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Milestones ── */}
      <section id="milestones" className="section timeline-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="section-description">
              Key milestones in Specter&apos;s growth
            </p>
          </motion.div>

          <div className="timeline">
            {MILESTONES.map((milestone, index) => (
              <motion.div
                key={index}
                className="timeline-item glass"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <div className="timeline-year gradient-text">
                  {milestone.year}
                </div>
                <h3 className="timeline-title">{milestone.title}</h3>
                <p className="timeline-description">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section id="contact" className="section company-cta-section">
        <div className="container">
          <motion.div
            className="company-cta glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="company-cta-title">
              Join Us in Building the Future of{" "}
              <span className="gradient-text">Legal Tech</span>
            </h2>
            <p className="company-cta-description">
              Interested in joining our team or partnering with Specter?
              We&apos;d love to hear from you.
            </p>
            <div className="company-cta-actions">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/careers")}
              >
                View Open Positions
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Company;
