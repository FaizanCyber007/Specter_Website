import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiStar } from "react-icons/hi";
import { TESTIMONIALS } from "../data/siteData";
import "./Testimonials.css";

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            <span className="gradient-text">Pakistan&apos;s Legal Community</span>
          </h2>
          <p className="section-description">
            Join legal professionals across Pakistan who are transforming
            document management with Specter
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((testimonial, index) => (
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
