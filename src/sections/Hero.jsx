import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi";
import LawBalanceIcon from "../components/LawBalanceIcon";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero section">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-badge glass"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <HiSparkles className="badge-icon" />
            <span>AI-Powered Legal Intelligence</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Legal work, <span className="gradient-text">without limits</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Streamline case preparation with AI-powered document scanning,
            intelligent precedent retrieval, and secure case management. Spend
            less time on research, more time winning cases.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className="btn-primary btn-large"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(139, 92, 246, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
              <FiArrowRight className="btn-icon" />
            </motion.button>
            <motion.button
              className="btn-secondary btn-large"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Demo
            </motion.button>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="stat-item">
              <h3 className="stat-number gradient-text">10,000+</h3>
              <p className="stat-label">Cases Analyzed</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-number gradient-text">95%</h3>
              <p className="stat-label">Time Saved</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-number gradient-text">500+</h3>
              <p className="stat-label">Law Firms</p>
            </div>
          </motion.div>

          {/* Law Balance Icon */}
          <motion.div
            className="hero-icon-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <LawBalanceIcon size={150} animated={true} />
          </motion.div>

        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          <div className="features-grid">
            <motion.div
              className="feature-card glass"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon gold">📄</div>
              <h4 className="feature-title">Document Scanning</h4>
              <p className="feature-text">
                AI-powered OCR analysis for instant document processing
              </p>
            </motion.div>

            <motion.div
              className="feature-card glass"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon green">⚖️</div>
              <h4 className="feature-title">Precedent Search</h4>
              <p className="feature-text">
                Search millions of cases in seconds with AI
              </p>
            </motion.div>

            <motion.div
              className="feature-card glass"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon teal">🔒</div>
              <h4 className="feature-title">Secure Vault</h4>
              <p className="feature-text">
                Bank-level encryption for sensitive case files
              </p>
            </motion.div>

            <motion.div
              className="feature-card glass"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="feature-icon amber">💬</div>
              <h4 className="feature-title">Case Q&A</h4>
              <p className="feature-text">
                Get intelligent answers about your cases instantly
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
