import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { USE_CASES } from "../data/siteData";
import "./UseCases.css";

const USE_CASE_ICONS = ["📄", "🔍", "🏛️", "👥", "⚖️", "🏗️"];

const UseCases = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="use-cases" className="use-cases-section section" ref={ref}>
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
            From FIR digitization to case management, Specter serves Pakistan&apos;s
            entire legal ecosystem
          </p>
        </motion.div>

        <div className="use-cases-grid">
          {USE_CASES.map((useCase, index) => (
            <motion.div
              key={index}
              className={`use-case-card glass use-case-${useCase.colorKey}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="use-case-icon-wrapper">
                <div className="use-case-icon">{USE_CASE_ICONS[index % USE_CASE_ICONS.length]}</div>
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
