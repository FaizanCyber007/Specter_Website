import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import "./CTA.css";

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const navigate = useNavigate();

  const benefits = [
    { icon: "⚡", text: "Download free on Google Play" },
    { icon: "🔒", text: "On-device processing available" },
    { icon: "✨", text: "99.5% OCR accuracy" },
  ];

  return (
    <section className="cta-section section" ref={ref}>
      <div className="container">
        <motion.div
          className="cta-container glass"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <motion.div
              className="cta-badge glass"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span>⚖️ Now Available on Android</span>
            </motion.div>

            <motion.h2
              className="cta-title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Digitize Pakistan&apos;s FIR Records{" "}
              <span className="gradient-text">Today</span>
            </motion.h2>

            <motion.p
              className="cta-description"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Join legal professionals across Pakistan who are already saving
              hours of manual work and digitizing FIRs with Specter
            </motion.p>

            <motion.div
              className="cta-benefits"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <span>{benefit.icon}</span>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="cta-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.button
                className="btn-primary btn-large cta-btn"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 50px rgba(201, 162, 42, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Download Free on Google Play
                <HiArrowRight className="btn-icon" />
              </motion.button>
              <motion.button
                className="btn-secondary btn-large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
              >
                Contact Sales
              </motion.button>
            </motion.div>

            <motion.p
              className="cta-note"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              ✓ Free Individual plan · ✓ On-device privacy option · ✓ Works offline
            </motion.p>
          </div>

          <div className="cta-decoration">
            <div className="decoration-circle circle-1"></div>
            <div className="decoration-circle circle-2"></div>
            <div className="decoration-circle circle-3"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
