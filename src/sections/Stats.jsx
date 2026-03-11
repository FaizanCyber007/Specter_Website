import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { STATS } from "../data/siteData";
import "./Stats.css";

const COLOR_MAP = {
  gold: "#C9A22A",
  green: "#15803D",
  maroon: "#9B2335",
};

const STAT_ICONS = ["⚡", "🎯", "📄", "👥", "🔒", "📅"];

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            Real impact for Pakistan&apos;s legal professionals
          </p>
        </motion.div>

        <div className="stats-grid">
          {STATS.map((stat, index) => {
            const color = COLOR_MAP[stat.colorKey] || "#C9A22A";
            return (
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
                  background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
                }}
              >
                <div className="stat-icon" style={{ color }}>
                  {STAT_ICONS[index % STAT_ICONS.length]}
                </div>
              </div>
              <h3
                className="stat-number"
                style={{
                  background: `linear-gradient(135deg, ${color} 0%, ${color}99 100%)`,
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
