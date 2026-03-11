import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { HERO_STATS, SITE_CONFIG } from "../data/siteData";
import LawBalanceIcon from "../components/LawBalanceIcon";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-container container">

        {/* ── Left column — text ───────────────────────── */}
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="badge-dot" />
            ⚖️ {SITE_CONFIG.tagline}
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            FIR Scanning,
            <br />
            <span className="gradient-text">Made Intelligent</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Pakistan&apos;s leading AI platform to digitize, extract, and manage
            First Information Reports — purpose-built for legal professionals who
            need precision and speed.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.button
              className="btn-primary btn-large"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Download on Google Play
              <FiArrowRight className="btn-icon" />
            </motion.button>
            <motion.button
              className="btn-ghost btn-large"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate("/solutions")}
            >
              <FiPlay size={16} />
              See How It Works
            </motion.button>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {HERO_STATS.map((stat, index) => (
              <React.Fragment key={index}>
                {index > 0 && <div className="stat-divider" />}
                <div className="stat-item">
                  <h3 className="stat-number gradient-text">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right column — visual ────────────────────── */}
        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.9 }}
        >
          {/*
            hero-visual-wrap is a flex column — balance icon and mockup
            share the same center axis naturally. No absolute offset needed.
          */}
          <div className="hero-visual-wrap">

            {/* Balance icon — absolute, floats above the mockup, zero layout impact */}
            <motion.div
              className="hero-balance-decor"
              initial={{ opacity: 0, y: -16, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            >
              <LawBalanceIcon size={160} animated />
            </motion.div>

            {/* Product mockup — only in-flow element in the right column */}
            <div className="product-mockup">

              {/* Window chrome */}
              <div className="mockup-header glass">
                <div className="mockup-dots">
                  <span /><span /><span />
                </div>
                <span className="mockup-title">Specter AI — FIR Analysis</span>
                <span className="mockup-status">● Scanning</span>
              </div>

              {/* Document data card */}
              <div className="mockup-doc glass">
                <div className="doc-scan-bar" />
                <div className="doc-fields">
                  <div className="doc-field">
                    <span className="field-label">FIR Number</span>
                    <span className="field-value">FIR-2026/LHR-0847</span>
                  </div>
                  <div className="doc-field">
                    <span className="field-label">Police Station</span>
                    <span className="field-value">Gulberg, Lahore</span>
                  </div>
                  <div className="doc-field">
                    <span className="field-label">Crime Sections</span>
                    <span className="field-value gold">302, 34 PPC</span>
                  </div>
                  <div className="doc-field">
                    <span className="field-label">Date Filed</span>
                    <span className="field-value">March 11, 2026</span>
                  </div>
                  <div className="doc-field">
                    <span className="field-label">OCR Confidence</span>
                    <div className="confidence-bar">
                      <div className="confidence-track">
                        <div className="confidence-fill" />
                      </div>
                      <span className="confidence-text">99.5%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action bar */}
              <div className="mockup-actions glass">
                <button className="mockup-action-btn active">📋 Extract</button>
                <button className="mockup-action-btn">🔍 Search</button>
                <button className="mockup-action-btn">📊 Analyze</button>
              </div>

              {/* Floating notification badges — absolute inside mockup */}
              <motion.div
                className="floating-card glass"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="floating-icon">✓</span>
                <div>
                  <p className="floating-title">Extraction Complete</p>
                  <p className="floating-sub">12 fields extracted in 0.8s</p>
                </div>
              </motion.div>

              <motion.div
                className="floating-card floating-card-2 glass"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="floating-icon">🔒</span>
                <div>
                  <p className="floating-title">End-to-End Encrypted</p>
                  <p className="floating-sub">AES-256 bank-level security</p>
                </div>
              </motion.div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
