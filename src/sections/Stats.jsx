import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiCheckCircle,
  HiClock,
  HiTrendingUp,
  HiLightningBolt,
  HiShieldCheck,
  HiChartBar,
} from "react-icons/hi";
import "./Stats.css";

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: <HiLightningBolt />,
      number: "75%",
      label: "Faster Research",
      description: "Reduce legal research time",
      color: "#d4af37",
    },
    {
      icon: <HiTrendingUp />,
      number: "3x",
      label: "Higher Productivity",
      description: "Handle more cases efficiently",
      color: "#10b981",
    },
    {
      icon: <HiCheckCircle />,
      number: "95%",
      label: "Accuracy Rate",
      description: "AI-powered precision",
      color: "#f4d03f",
    },
    {
      icon: <HiClock />,
      number: "1000+",
      label: "Hours Saved",
      description: "Per firm monthly",
      color: "#0a6638",
    },
    {
      icon: <HiShieldCheck />,
      number: "100%",
      label: "Secure & Compliant",
      description: "Bank-level encryption",
      color: "#059669",
    },
    {
      icon: <HiChartBar />,
      number: "10M+",
      label: "Documents Processed",
      description: "Analyzed with AI",
      color: "#0d9488",
    },
  ];

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Results That <span className="gradient-text">Matter</span>
          </h2>
          <p className="section-description">
            Real impact on legal practice efficiency and success rates
          </p>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card glass"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div
                className="stat-icon-wrapper"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}20 0%, ${stat.color}10 100%)`,
                }}
              >
                <div className="stat-icon" style={{ color: stat.color }}>
                  {stat.icon}
                </div>
              </div>
              <h3
                className="stat-number"
                style={{
                  background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}99 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.number}
              </h3>
              <h4 className="stat-label">{stat.label}</h4>
              <p className="stat-description">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
