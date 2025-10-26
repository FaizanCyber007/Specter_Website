import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiStar } from "react-icons/hi";
import "./Testimonials.css";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Senior Partner, Mitchell & Associates",
      image: "👩‍⚖️",
      rating: 5,
      text: "Specter AI has revolutionized our case preparation process. What used to take days now takes hours. The precedent search is incredibly accurate.",
    },
    {
      name: "James Chen",
      role: "Corporate Counsel, Tech Corp",
      image: "👨‍💼",
      rating: 5,
      text: "The document scanning and Q&A features are game-changers. Our legal team is more efficient than ever, and we can handle more cases with the same resources.",
    },
    {
      name: "Emily Rodriguez",
      role: "Managing Partner, Rodriguez Law Firm",
      image: "👩‍💻",
      rating: 5,
      text: "Security and compliance were our top concerns. Specter AI exceeded all expectations with their vault system. SOC 2 compliance gives us peace of mind.",
    },
    {
      name: "Michael Thompson",
      role: "Legal Director, Fortune 500 Company",
      image: "👨‍⚖️",
      rating: 5,
      text: "The ROI has been phenomenal. We've reduced research time by 75% and improved our case success rate. Best investment we've made in legal tech.",
    },
    {
      name: "Patricia Williams",
      role: "Criminal Defense Attorney",
      image: "👩‍⚖️",
      rating: 5,
      text: "As a solo practitioner, Specter AI gives me capabilities of a large firm. The AI assistant feels like having a team of researchers at my fingertips.",
    },
    {
      name: "David Kumar",
      role: "Head of Legal, Global Enterprise",
      image: "👨‍💼",
      rating: 5,
      text: "Implementing Specter AI across our international offices was seamless. The platform scales beautifully and the support team is exceptional.",
    },
  ];

  return (
    <section className="testimonials section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Trusted by{" "}
            <span className="gradient-text">Legal Professionals</span>
          </h2>
          <p className="section-description">
            Join thousands of lawyers who are transforming their practice with
            Specter AI
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card glass"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.image}</div>
                <div className="testimonial-info">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="stats-banner glass"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="stat-item-banner">
            <h3 className="stat-number-banner gradient-text">98%</h3>
            <p className="stat-label-banner">Client Satisfaction</p>
          </div>
          <div className="stat-divider-banner"></div>
          <div className="stat-item-banner">
            <h3 className="stat-number-banner gradient-text">4.9/5</h3>
            <p className="stat-label-banner">Average Rating</p>
          </div>
          <div className="stat-divider-banner"></div>
          <div className="stat-item-banner">
            <h3 className="stat-number-banner gradient-text">50+</h3>
            <p className="stat-label-banner">Countries</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
