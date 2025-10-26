import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiArrowRight,
  HiLightningBolt,
  HiShieldCheck,
  HiSparkles,
} from "react-icons/hi";
import "./CTA.css";

const CTA = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    { icon: <HiLightningBolt />, text: "Get started in minutes" },
    { icon: <HiShieldCheck />, text: "No credit card required" },
    { icon: <HiSparkles />, text: "14-day free trial" },
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
              <HiSparkles className="badge-icon" />
              <span>Limited Time Offer</span>
            </motion.div>

            <motion.h2
              className="cta-title"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Transform Your Legal Practice{" "}
              <span className="gradient-text">Today</span>
            </motion.h2>

            <motion.p
              className="cta-description"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Join thousands of legal professionals who are already saving time
              and winning more cases with Specter AI
            </motion.p>

            <motion.div
              className="cta-benefits"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  {benefit.icon}
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
                  boxShadow: "0 20px 50px rgba(139, 92, 246, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Free Trial
                <HiArrowRight className="btn-icon" />
              </motion.button>
              <motion.button
                className="btn-secondary btn-large"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </motion.div>

            <motion.p
              className="cta-note"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              ✓ No credit card required · ✓ Cancel anytime · ✓ Free onboarding
              support
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
