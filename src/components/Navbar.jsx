import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { useNavigate, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../data/siteData";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /**
   * Navigate to a section anchor link, smooth-scrolling if already on the target page.
   */
  const handleSectionClick = (href) => {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);

    if (href.includes("#")) {
      const hashIdx = href.indexOf("#");
      const path = href.slice(0, hashIdx) || "/";
      const hash = href.slice(hashIdx + 1);

      if (location.pathname === path) {
        const el = document.getElementById(hash);
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
      } else {
        navigate(href);
      }
    } else {
      navigate(href);
    }
  };

  const isPageActive = (item) => location.pathname === item.href;

  return (
    <motion.nav
      ref={navRef}
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container container">
        {/* Logo */}
        <motion.div
          className="navbar-logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
        >
          <span className="logo-icon">⚖️</span>
          <span className="logo-text gradient-text">Specter</span>
        </motion.div>

        {/* Desktop Menu */}
        <nav className="navbar-menu desktop-menu" aria-label="Main navigation">
          {NAV_ITEMS.map((item, index) => (
            <div
              key={item.name}
              className="nav-item-wrapper"
              onMouseEnter={() => setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <motion.button
                onClick={() => navigate(item.href)}
                className={`nav-link nav-link-btn${isPageActive(item) ? " nav-link-active" : ""}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
              >
                {item.name}
                {item.sections?.length > 0 && (
                  <HiChevronDown
                    className={`nav-chevron${openDropdown === item.name ? " open" : ""}`}
                  />
                )}
              </motion.button>

              {/* Dropdown panel */}
              <AnimatePresence>
                {openDropdown === item.name && item.sections?.length > 0 && (
                  <motion.div
                    className="nav-dropdown"
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                  >
                    {item.sections.map((section) => (
                      <button
                        key={section.name}
                        className="dropdown-item"
                        onClick={() => handleSectionClick(section.href)}
                      >
                        {section.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="navbar-actions desktop-menu">
          <motion.button
            className="btn-primary nav-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
          >
            Get in Touch
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <motion.button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <HiX size={26} /> : <HiMenu size={26} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu glass"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_ITEMS.map((item, index) => (
              <div key={item.name} className="mobile-nav-item">
                <motion.button
                  className={`mobile-nav-link mobile-nav-btn${isPageActive(item) ? " mobile-nav-active" : ""}`}
                  onClick={() => {
                    if (item.sections?.length > 0) {
                      setMobileExpanded(
                        mobileExpanded === item.name ? null : item.name
                      );
                    } else {
                      navigate(item.href);
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07 }}
                >
                  <span>{item.name}</span>
                  {item.sections?.length > 0 && (
                    <HiChevronDown
                      className={`nav-chevron mobile-chevron${mobileExpanded === item.name ? " open" : ""}`}
                    />
                  )}
                </motion.button>

                <AnimatePresence>
                  {mobileExpanded === item.name && item.sections?.length > 0 && (
                    <motion.div
                      className="mobile-sections"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.sections.map((section) => (
                        <button
                          key={section.name}
                          className="mobile-section-link"
                          onClick={() => handleSectionClick(section.href)}
                        >
                          {section.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="mobile-menu-actions">
              <button
                className="btn-primary"
                onClick={() => {
                  navigate("/contact");
                  setIsMobileMenuOpen(false);
                }}
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
