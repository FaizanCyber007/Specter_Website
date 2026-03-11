import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LOGO_CLOUD_ITEMS } from "../data/siteData";
import "./LogoCloud.css";

const LogoCloud = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    { name: "AI-Powered", icon: "🤖", description: "Advanced NLP" },
    { name: "OCR Technology", icon: "📄", description: "99.5% Accuracy" },
    { name: "Secure Encryption", icon: "�", description: "AES-256" },
    { name: "Cloud Native", icon: "☁️", description: "Scalable" },
    {
      name: "Real-time Search",
      icon: "⚡",
      description: "Millisecond Response",
    },
    { name: "Multi-Language", icon: "�", description: "50+ Languages" },
    { name: "API Integration", icon: "�", description: "RESTful APIs" },
    { name: "Version Control", icon: "📋", description: "Auto-tracking" },
    { name: "Collaboration", icon: "�", description: "Team Sync" },
    { name: "Mobile Ready", icon: "📱", description: "iOS & Android" },
    { name: "Analytics", icon: "📊", description: "Deep Insights" },
    { name: "24/7 Support", icon: "💬", description: "Always Available" },
  ];

  return (
    <section className="logo-cloud section" ref={ref}>
      <div className="container">
        <motion.div
          className="logo-cloud-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3 className="logo-cloud-title">
            Built for Pakistan&apos;s Legal System
          </h3>
          <p className="logo-cloud-subtitle">
            Purpose-built capabilities for FIR document intelligence
          </p>
        </motion.div>

        <div className="logo-marquee">
          <div className="logo-track">
            {[...LOGO_CLOUD_ITEMS, ...LOGO_CLOUD_ITEMS].map((tech, index) => (
              <motion.div
                key={index}
                className="logo-item glass"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: (index % LOGO_CLOUD_ITEMS.length) * 0.05,
                  duration: 0.4,
                }}
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)",
                  borderColor: "rgba(212, 175, 55, 0.5)",
                }}
              >
                <div className="logo-icon">{tech.icon}</div>
                <span className="logo-name">{tech.name}</span>
                <span className="logo-description">{tech.description}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
