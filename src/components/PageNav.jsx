import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./PageNav.css";

/**
 * PageNav — sticky horizontal in-page navigation for sub-pages.
 * Props:
 *   sections: [{ id: string, label: string }]
 *   title?: string  (displays page title before the links)
 */
const PageNav = ({ sections = [], title }) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || "");
  const navRef = useRef(null);

  // Observe each section and highlight the one in view
  useEffect(() => {
    if (!sections.length) return;

    const observers = sections.map((section) => {
      const el = document.getElementById(section.id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(section.id);
          });
        },
        { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((obs) => obs?.disconnect());
  }, [sections]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    // Fixed offset: 76px (navbar) + 52px (PageNav bar) + 16px (breathing room)
    const OFFSET = 144;
    const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: elementTop - OFFSET, behavior: "smooth" });
  };

  return (
    <div className="page-nav" ref={navRef}>
      <div className="page-nav-container">
        {title && <span className="page-nav-title">{title}</span>}
        <div className="page-nav-links" role="navigation" aria-label="Page sections">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              className={`page-nav-link${activeSection === section.id ? " active" : ""}`}
              onClick={() => scrollToSection(section.id)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              {section.label}
              {activeSection === section.id && (
                <motion.span
                  className="page-nav-indicator"
                  layoutId="page-nav-indicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageNav;
