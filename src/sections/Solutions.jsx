import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HiDocumentSearch,
  HiLibrary,
  HiLockClosed,
  HiChatAlt,
} from "react-icons/hi";
import Modal from "../components/Modal";
import "./Solutions.css";

const Solutions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeModal, setActiveModal] = useState(null);

  const solutions = [
    {
      icon: <HiDocumentSearch />,
      title: "Document Scanning",
      description:
        "Transform thousands of legal documents into searchable, analyzable data",
      features: [
        "OCR technology for scanned documents",
        "Intelligent entity extraction",
        "Automatic categorization",
        "Multi-format support",
      ],
      gradient: "linear-gradient(135deg, #d4af37 0%, #f4d03f 100%)",
      detailedInfo: {
        overview:
          "Our advanced Document Scanning module uses cutting-edge AI and OCR technology to transform your physical and digital documents into searchable, analyzable legal intelligence.",
        keyFeatures: [
          "Industry-leading OCR accuracy (99.5%+) for printed and handwritten text",
          "Automatic extraction of key entities: names, dates, clauses, obligations",
          "Smart categorization using machine learning trained on millions of legal documents",
          "Support for PDF, Word, images, and 50+ file formats",
          "Batch processing of thousands of documents simultaneously",
          "Redaction detection and privacy compliance",
        ],
        benefits: [
          "Reduce document review time by 90%",
          "Eliminate manual data entry errors",
          "Find critical information instantly",
          "Build searchable knowledge bases from legacy files",
        ],
      },
    },
    {
      icon: <HiLibrary />,
      title: "Precedent Retrieval",
      description: "Access relevant case law and legal precedents instantly",
      features: [
        "Semantic search across millions of cases",
        "Jurisdiction-specific filtering",
        "Relevance scoring",
        "Citation tracking",
      ],
      gradient: "linear-gradient(135deg, #10b981 0%, #0a6638 100%)",
      detailedInfo: {
        overview:
          "Access the most comprehensive legal database with AI-powered semantic search. Our Precedent Retrieval system understands legal concepts, not just keywords, to find the most relevant cases for your arguments.",
        keyFeatures: [
          "Search across 50M+ cases, statutes, and regulations",
          "Semantic understanding of legal concepts and doctrine",
          "Filter by jurisdiction, court level, date range, and judge",
          "AI-powered relevance ranking based on your case context",
          "Automatic citation verification and Shepardization",
          "Visual citation mapping and case relationship graphs",
        ],
        benefits: [
          "Find supporting precedents 3x faster than traditional research",
          "Discover overlooked cases that could win your argument",
          "Verify citations instantly to avoid legal malpractice",
          "Build stronger arguments with comprehensive legal support",
        ],
      },
    },
    {
      icon: <HiLockClosed />,
      title: "Secure Vault",
      description: "Store and organize case files with military-grade security",
      features: [
        "End-to-end encryption",
        "Role-based access control",
        "Audit logs",
        "Compliance certifications",
      ],
      gradient: "linear-gradient(135deg, #0d9488 0%, #06b6d4 100%)",
      detailedInfo: {
        overview:
          "Your case files deserve bank-level security. Our Secure Vault provides military-grade encryption, comprehensive access controls, and full compliance with legal industry regulations.",
        keyFeatures: [
          "AES-256 end-to-end encryption at rest and in transit",
          "Granular role-based access control (RBAC) for team collaboration",
          "Complete audit trail of all document access and modifications",
          "SOC 2 Type II, HIPAA, and GDPR compliant infrastructure",
          "Multi-factor authentication (MFA) and biometric security",
          "Automatic version control and document history tracking",
        ],
        benefits: [
          "Protect client confidentiality and attorney-client privilege",
          "Meet bar association security requirements",
          "Collaborate securely with co-counsel and clients",
          "Defend against data breaches and cyber attacks",
        ],
      },
    },
    {
      icon: <HiChatAlt />,
      title: "Case Q&A",
      description: "Get instant answers to complex legal questions",
      features: [
        "Natural language processing",
        "Contextual understanding",
        "Source citations",
        "Multi-document analysis",
      ],
      gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      detailedInfo: {
        overview:
          "Ask questions in plain English and get precise answers from your case documents. Our Case Q&A assistant understands legal context and can analyze multiple documents simultaneously to provide comprehensive answers.",
        keyFeatures: [
          "Natural language interface - ask questions like you would a colleague",
          "Contextual understanding of legal terminology and concepts",
          "Multi-document analysis across your entire case file",
          "Automatic source citation with page and paragraph references",
          "Follow-up question support for deeper exploration",
          "Answer confidence scoring and alternative interpretations",
        ],
        benefits: [
          "Get answers to case questions in seconds, not hours",
          "Never miss critical details buried in thousands of pages",
          "Prepare for depositions and trials more effectively",
          "Onboard new team members to complex cases instantly",
        ],
      },
    },
  ];

  return (
    <section id="solutions" className="solutions section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Comprehensive <span className="gradient-text">Solutions</span>
          </h2>
          <p className="section-description">
            Four powerful modules designed to transform your legal workflow
          </p>
        </motion.div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="solution-card glass"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div
                className="solution-header"
                style={{ background: solution.gradient }}
              >
                <div className="solution-icon">{solution.icon}</div>
              </div>
              <div className="solution-content">
                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>
                <ul className="solution-features">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="solution-feature">
                      <span className="feature-dot"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveModal(index)}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Modal */}
      {activeModal !== null && (
        <Modal
          isOpen={activeModal !== null}
          onClose={() => setActiveModal(null)}
          title={solutions[activeModal].title}
        >
          <p style={{ fontSize: "17px", marginBottom: "24px" }}>
            {solutions[activeModal].detailedInfo.overview}
          </p>

          <h3>Key Features</h3>
          <ul>
            {solutions[activeModal].detailedInfo.keyFeatures.map(
              (feature, idx) => (
                <li key={idx}>{feature}</li>
              )
            )}
          </ul>

          <h3>Benefits</h3>
          <ul>
            {solutions[activeModal].detailedInfo.benefits.map(
              (benefit, idx) => (
                <li key={idx}>{benefit}</li>
              )
            )}
          </ul>
        </Modal>
      )}
    </section>
  );
};

export default Solutions;
