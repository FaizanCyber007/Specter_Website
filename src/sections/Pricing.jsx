import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiCheck } from "react-icons/hi";
import "./Pricing.css";

const Pricing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for solo practitioners",
      features: [
        "100 documents/month",
        "Basic document scanning",
        "Precedent search",
        "5GB secure storage",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "For growing law firms",
      features: [
        "Unlimited documents",
        "Advanced AI analysis",
        "Priority precedent search",
        "100GB secure storage",
        "Case Q&A assistant",
        "Analytics dashboard",
        "24/7 priority support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Unlimited storage",
        "Custom AI training",
        "API access",
        "Dedicated account manager",
        "On-premise deployment",
        "SLA guarantee",
      ],
      highlighted: false,
    },
  ];

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
            Choose the plan that fits your practice
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
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
                {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
