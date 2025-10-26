import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiDocumentText,
  HiScale,
  HiShieldCheck,
  HiChatAlt2,
  HiLightningBolt,
  HiChartBar,
} from "react-icons/hi";
import "./Features.css";

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <HiDocumentText />,
      title: "Document Scanning",
      description:
        "AI-powered OCR and analysis extracts key information from thousands of legal documents in seconds.",
      color: "#8b5cf6",
    },
    {
      icon: <HiScale />,
      title: "Precedent Retrieval",
      description:
        "Access millions of relevant case precedents with intelligent search and contextual matching.",
      color: "#3b82f6",
    },
    {
      icon: <HiShieldCheck />,
      title: "Secure Vault",
      description:
        "Bank-level encryption protects your sensitive case files with granular access controls.",
      color: "#ec4899",
    },
    {
      icon: <HiChatAlt2 />,
      title: "Case Q&A Assistant",
      description:
        "Ask questions about your cases and get instant, accurate answers with source citations.",
      color: "#06b6d4",
    },
    {
      icon: <HiLightningBolt />,
      title: "Lightning Fast",
      description:
        "Process thousands of pages in minutes with our optimized AI infrastructure.",
      color: "#f59e0b",
    },
    {
      icon: <HiChartBar />,
      title: "Analytics & Insights",
      description:
        "Track case patterns, identify trends, and make data-driven legal strategies.",
      color: "#10b981",
    },
  ];

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
          <h2 className="section-title">
            Powerful Features for{" "}
            <span className="gradient-text">Modern Legal Practice</span>
          </h2>
          <p className="section-description">
            Everything you need to streamline your legal workflow and deliver
            exceptional results
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
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
                  background: `linear-gradient(135deg, ${feature.color}20 0%, ${feature.color}10 100%)`,
                }}
              >
                <div className="feature-icon" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <motion.div className="feature-link" whileHover={{ x: 5 }}>
                Learn more →
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
