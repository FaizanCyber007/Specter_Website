import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FEATURES } from "../data/siteData";
import "./Features.css";

const COLOR_MAP = {
  gold: "#C9A22A",
  green: "#15803D",
  maroon: "#9B2335",
};

const FEATURE_ICONS = ["📷", "✨", "🔒", "🔍", "⚖️", "📊"];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="features" className="features section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">⚡ Core Features</span>
          <h2 className="section-title">
            Powerful Features for{" "}
            <span className="gradient-text">Legal Professionals</span>
          </h2>
          <p className="section-description">
            Everything you need to digitize, manage, and analyze FIR documents
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {FEATURES.map((feature, index) => {
            const color = COLOR_MAP[feature.colorKey] || "#C9A22A";
            return (
            <motion.div
              key={index}
              className="feature-card glass"
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
            >
              <div
                className="feature-icon-wrapper"
                style={{
                  background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
                }}
              >
                <div className="feature-icon" style={{ color }}>
                  {FEATURE_ICONS[index % FEATURE_ICONS.length]}
                </div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <motion.div className="feature-link" whileHover={{ x: 5 }}>
                Learn more →
              </motion.div>
            </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
