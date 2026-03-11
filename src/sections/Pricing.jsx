import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiCheck } from "react-icons/hi";
import { PRICING_PLANS } from "../data/siteData";
import "./Pricing.css";

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="pricing section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="section-description">
            Choose the plan that fits your legal work
          </p>
        </motion.div>

        <div className="pricing-grid">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card glass ${
                plan.highlighted ? "highlighted" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
            >
              {plan.highlighted && (
                <div className="popular-badge">Most Popular</div>
              )}
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price-amount gradient-text">
                    {plan.price}
                  </span>
                  <span className="price-period">{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>

              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="feature-item">
                    <HiCheck className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                className={
                  plan.highlighted
                    ? "btn-primary btn-full"
                    : "btn-secondary btn-full"
                }
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
