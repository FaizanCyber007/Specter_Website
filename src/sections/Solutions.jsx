import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "../components/Modal";
import { SOLUTIONS } from "../data/siteData";
import "./Solutions.css";

const SOLUTION_ICONS = ["📄", "⚖️", "🔒", "✨"];

const Solutions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeModal, setActiveModal] = useState(null);

  return (
    <section id="solutions" className="solutions section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Comprehensive <span className="gradient-text">Solutions</span>
          </h2>
          <p className="section-description">
            Four core modules built for Pakistan&apos;s FIR document workflows
          </p>
        </motion.div>

        <div className="solutions-grid">
          {SOLUTIONS.map((solution, index) => (
            <motion.div
              key={index}
              className="solution-card glass"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div
                className="solution-header"
                style={{ background: solution.gradient }}
              >
                <div className="solution-icon">{SOLUTION_ICONS[index % SOLUTION_ICONS.length]}</div>
              </div>
              <div className="solution-content">
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>
                <ul className="solution-features">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="solution-feature">
                      <span className="feature-dot"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveModal(index)}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Modal */}
      {activeModal !== null && (
        <Modal
          isOpen={activeModal !== null}
          onClose={() => setActiveModal(null)}
          title={SOLUTIONS[activeModal].title}
        >
          <p style={{ fontSize: "17px", marginBottom: "24px" }}>
            {SOLUTIONS[activeModal].detailedInfo.overview}
          </p>

          <h3>Key Features</h3>
          <ul>
            {SOLUTIONS[activeModal].detailedInfo.keyFeatures.map(
              (feature, idx) => (
                <li key={idx}>{feature}</li>
              )
            )}
          </ul>

          <h3>Benefits</h3>
          <ul>
            {SOLUTIONS[activeModal].detailedInfo.benefits.map(
              (benefit, idx) => (
                <li key={idx}>{benefit}</li>
              )
            )}
          </ul>
        </Modal>
      )}
    </section>
  );
};

export default Solutions;
