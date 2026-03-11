import { motion } from "framer-motion";
import Solutions from "../sections/Solutions";
import UseCases from "../sections/UseCases";
import Stats from "../sections/Stats";
import "./SolutionsPage.css";

const SolutionsPage = () => {
  return (
    <main className="solutions-page">
      {/* Page hero */}
      <section className="page-hero">
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-eyebrow">⚖️ Solutions</span>
            <h1 className="page-hero-title">
              Built for{" "}
              <span className="gradient-text">Every Legal Need</span>
            </h1>
            <p className="page-hero-description">
              Comprehensive FIR intelligence tools engineered for lawyers, police
              officers, and every professional in Pakistan&apos;s legal ecosystem.
              See what Specter can do for your workflow.
            </p>
          </motion.div>
        </div>
      </section>

      <Stats />
      <Solutions />
      <UseCases />
    </main>
  );
};

export default SolutionsPage;
