import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiChevronDown } from "react-icons/hi";
import "./FAQ.css";

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How secure is Specter AI?",
      answer:
        "Specter AI employs bank-level encryption with end-to-end security. We are SOC 2 Type II certified, GDPR compliant, and ISO 27001 certified. Your data is encrypted both in transit and at rest, and we never train our AI models on your confidential information.",
    },
    {
      question: "How accurate is the AI precedent search?",
      answer:
        "Our AI achieves over 95% accuracy in precedent retrieval, using advanced semantic search and natural language processing. The system understands legal context, jurisdiction-specific nuances, and can identify relevant cases even when using different terminology.",
    },
    {
      question: "Can I integrate Specter AI with my existing tools?",
      answer:
        "Yes! Specter AI integrates seamlessly with popular legal management systems including Clio, MyCase, and PracticePanther. We also offer API access for Enterprise plans, allowing custom integrations with your existing workflow.",
    },
    {
      question: "What file formats are supported for document scanning?",
      answer:
        "Specter AI supports PDF, DOCX, DOC, TXT, RTF, and image formats (JPG, PNG, TIFF). Our OCR technology can extract text from scanned documents and images with high accuracy, even from handwritten notes.",
    },
    {
      question: "How long does it take to get started?",
      answer:
        "You can start using Specter AI within minutes. Simply sign up, upload your first documents, and our AI will begin analyzing them immediately. We provide free onboarding support and training for all new users.",
    },
    {
      question: "What happens to my data if I cancel?",
      answer:
        "You maintain complete ownership of your data. If you cancel, you can export all your documents and data in standard formats. We retain your data for 30 days after cancellation for easy reactivation, then permanently delete it per your request.",
    },
    {
      question: "Do you offer training and support?",
      answer:
        "Absolutely! All plans include comprehensive documentation, video tutorials, and email support. Professional and Enterprise plans get priority support with faster response times and dedicated account managers for Enterprise clients.",
    },
    {
      question: "Can multiple team members use one account?",
      answer:
        "Yes, all our plans support team collaboration with role-based access controls. Professional plans include up to 10 users, and Enterprise plans offer unlimited users with advanced permission management.",
    },
  ];

  return (
    <section className="faq section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-description">
            Everything you need to know about Specter AI
          </p>
        </motion.div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`faq-item glass ${
                openIndex === index ? "active" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="question-text">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiChevronDown className="chevron-icon" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    className="faq-answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="faq-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3>Still have questions?</h3>
          <p>Our team is here to help you get started</p>
          <motion.button
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
