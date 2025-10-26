import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiDocumentText,
  HiScale,
  HiShieldCheck,
  HiLightningBolt,
  HiChartBar,
  HiClock,
} from "react-icons/hi";
import "./UseCases.css";

const UseCases = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const useCases = [
    {
      icon: <HiDocumentText />,
      title: "Contract Review",
      description:
        "Analyze contracts 10x faster with AI-powered clause extraction and risk assessment",
      benefits: [
        "90% faster review",
        "Risk identification",
        "Clause comparison",
      ],
      color: "gold",
    },
    {
      icon: <HiScale />,
      title: "Legal Research",
      description:
        "Access millions of case precedents and statutes with natural language search",
      benefits: [
        "Instant precedent matching",
        "Citation analysis",
        "Case summaries",
      ],
      color: "green",
    },
    {
      icon: <HiLightningBolt />,
      title: "Document Generation",
      description:
        "Create legal documents from templates with intelligent auto-fill capabilities",
      benefits: ["Template library", "Smart suggestions", "Version control"],
      color: "teal",
    },
    {
      icon: <HiShieldCheck />,
      title: "Compliance Monitoring",
      description:
        "Stay ahead of regulatory changes with automated compliance tracking",
      benefits: ["Real-time updates", "Risk alerts", "Audit trails"],
      color: "emerald",
    },
    {
      icon: <HiChartBar />,
      title: "Case Analytics",
      description:
        "Gain insights from historical data to predict case outcomes",
      benefits: [
        "Success predictions",
        "Strategy optimization",
        "Cost estimation",
      ],
      color: "amber",
    },
    {
      icon: <HiClock />,
      title: "Workflow Automation",
      description:
        "Automate repetitive tasks and streamline your legal workflows",
      benefits: [
        "Task automation",
        "Calendar integration",
        "Team collaboration",
      ],
      color: "cyan",
    },
  ];

  return (
    <section className="use-cases-section section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Built for <span className="gradient-text">Every Legal Need</span>
          </h2>
          <p className="section-description">
            From contract review to case management, Specter AI transforms how
            lawyers work
          </p>
        </motion.div>

        <div className="use-cases-grid">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              className={`use-case-card glass use-case-${useCase.color}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="use-case-icon-wrapper">
                <div className="use-case-icon">{useCase.icon}</div>
              </div>
              <h3 className="use-case-title">{useCase.title}</h3>
              <p className="use-case-description">{useCase.description}</p>
              <ul className="use-case-benefits">
                {useCase.benefits.map((benefit, i) => (
                  <li key={i}>
                    <span className="benefit-check">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
