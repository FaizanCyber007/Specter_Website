import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker, HiChat } from "react-icons/hi";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import PageNav from "../components/PageNav";
import { SITE_CONFIG } from "../data/siteData";
import "./Contact.css";

const SECTIONS = [
  { id: "reach-us", label: "Reach Us" },
  { id: "message", label: "Send a Message" },
  { id: "support", label: "Support" },
];

const CONTACT_ITEMS = [
  {
    icon: <HiMail />,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: <HiPhone />,
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
  },
  {
    icon: <HiLocationMarker />,
    label: "Address",
    value: SITE_CONFIG.address,
    href: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link
    const mailtoSubject = encodeURIComponent(
      formData.subject || "Contact from Specter Website"
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${SITE_CONFIG.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <PageNav sections={SECTIONS} title="Contact Us" />

      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-hero-icon">
              <HiChat />
            </div>
            <h1 className="contact-title">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="contact-subtitle">
              Have a question, need support, or interested in an Enterprise
              plan? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section id="reach-us" className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Info cards */}
            <div className="contact-info">
              <h2 className="contact-section-title">
                How to <span className="gradient-text">Reach Us</span>
              </h2>
              <div className="contact-items">
                {CONTACT_ITEMS.map((item, index) => (
                  <motion.div
                    key={index}
                    className="contact-item-card glass"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="contact-item-icon">{item.icon}</div>
                    <div className="contact-item-body">
                      <span className="contact-item-label">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="contact-item-value">
                          {item.value}
                        </a>
                      ) : (
                        <span className="contact-item-value">{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="contact-social">
                <h3 className="contact-social-title">Follow Us</h3>
                <div className="contact-social-links">
                  <a href="#" className="contact-social-btn glass" aria-label="Twitter">
                    <FaTwitter />
                  </a>
                  <a href="#" className="contact-social-btn glass" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="contact-social-btn glass" aria-label="GitHub">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>

            {/* Form */}
            <div id="message" className="contact-form-wrapper">
              <h2 className="contact-section-title">
                Send a <span className="gradient-text">Message</span>
              </h2>
              {submitted ? (
                <motion.div
                  className="contact-success glass"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="contact-success-icon">✅</div>
                  <h3>Thank you!</h3>
                  <p>
                    Your email client should have opened. If not, email us
                    directly at{" "}
                    <a href={`mailto:${SITE_CONFIG.email}`}>
                      {SITE_CONFIG.email}
                    </a>
                    .
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  className="contact-form glass"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="organization">Organization</label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Law firm, company, or department"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a topic</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Enterprise Sales">Enterprise Sales</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Privacy / Legal">Privacy / Legal</option>
                        <option value="Press / Media">Press / Media</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn-primary contact-submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Send Message
                  </motion.button>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section id="support" className="section">
        <div className="container">
          <div className="support-section glass">
            <h2 className="support-title">
              Need <span className="gradient-text">Quick Support</span>?
            </h2>
            <p className="support-subtitle">
              Check our Resources page for guides, tutorials, and answers to
              common questions.
            </p>
            <div className="support-actions">
              <a href="/resources#guides" className="btn-primary">
                Browse Guides
              </a>
              <a href="/resources#support" className="btn-secondary">
                Support Center
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
