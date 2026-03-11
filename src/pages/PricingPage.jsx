import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Pricing from "../sections/Pricing";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import "./PricingPage.css";

const PricingPage = () => {
  const navigate = useNavigate();

  return (
    <main className="pricing-page">
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">💳 Pricing</span>
            <h1 className="page-hero-title">
              Simple, Transparent{" "}
              <span className="gradient-text">Pricing</span>
            </h1>
            <p className="page-hero-description">
              No hidden fees. No surprises. Choose the plan that fits your
              caseload and get full access to Pakistan&apos;s most powerful FIR
              intelligence platform.
            </p>
            <div className="page-hero-actions">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Start Free Trial
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => navigate("/contact")}
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Pricing />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default PricingPage;
