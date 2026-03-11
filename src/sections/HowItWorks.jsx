import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HOW_IT_WORKS } from "../data/siteData";
import "./HowItWorks.css";

const STEP_ICONS = ["📷", "⚙️", "🔍", "📊"];

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="how-it-works" className="how-it-works section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">🔄 Process</span>
          <h2 className="section-title">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="section-description">
            Four simple steps to digitize any FIR document
          </p>
        </motion.div>

        <div className="steps-container">
          {HOW_IT_WORKS.map((step, index) => (
            <motion.div
              key={index}
              className="step-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="step-line"></div>
              <div className="step-content glass">
                <div className="step-number gradient-text">{step.number}</div>
                <div className="step-icon-wrapper">
                  <div className="step-icon">{STEP_ICONS[index]}</div>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="cta-section glass"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="cta-title">Ready to Digitize Your First FIR?</h3>
          <p className="cta-description">
            Join legal professionals across Pakistan using Specter
          </p>
          <motion.button
            className="btn-primary btn-large"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Free
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
