import { motion } from "framer-motion";
import { HiCog, HiMail } from "react-icons/hi";
import PageNav from "../components/PageNav";
import { SITE_CONFIG } from "../data/siteData";
import "./LegalPage.css";

const SECTIONS = [
  { id: "what-are-cookies", label: "What Are Cookies" },
  { id: "how-we-use", label: "How We Use Cookies" },
  { id: "types", label: "Types of Cookies" },
  { id: "control", label: "Managing Cookies" },
  { id: "contact", label: "Contact" },
];

const CookiePolicy = () => {
  return (
    <div className="legal-page">
      <PageNav sections={SECTIONS} title="Cookie Policy" />

      <div className="legal-hero">
        <div className="container">
          <motion.div
            className="legal-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="legal-hero-icon">
              <HiCog />
            </div>
            <h1 className="legal-title">Cookie Policy</h1>
            <p className="legal-subtitle">
              This Cookie Policy explains how Specter uses cookies and similar
              tracking technologies on our website.
            </p>
            <div className="legal-meta">
              <span>
                <strong>Last Updated:</strong>{" "}
                {SITE_CONFIG.privacyPolicyLastUpdated}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="legal-body">
        <div className="container">
          <div className="legal-content">
            {/* ── 1 ── */}
            <section id="what-are-cookies" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">1.</span> What Are Cookies?
              </h2>
              <p>
                Cookies are small text files placed on your device by a website
                when you visit it. They are widely used to make websites work
                efficiently and to provide information to website owners.
              </p>
              <p>
                This policy applies to <strong>this website</strong>{" "}
                (specterapp.com). The Specter mobile app itself does not use
                browser cookies — please refer to our{" "}
                <a href="/privacy-policy" className="legal-link">
                  Privacy Policy
                </a>{" "}
                for mobile app data practices.
              </p>
            </section>

            {/* ── 2 ── */}
            <section id="how-we-use" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">2.</span> How We Use
                Cookies
              </h2>
              <div className="legal-highlight">
                <p>
                  <strong>
                    Specter&apos;s website uses minimal cookies.
                  </strong>{" "}
                  We do not use cookies for advertising, tracking, or selling
                  data to third parties.
                </p>
              </div>
              <p>
                We use cookies only for the following essential purposes:
              </p>
              <ul className="legal-list">
                <li>
                  <strong>Session management:</strong> To maintain your session
                  state when you are logged into the web dashboard (Professional
                  / Enterprise plans)
                </li>
                <li>
                  <strong>User preferences:</strong> To remember settings such
                  as display preferences during your session
                </li>
                <li>
                  <strong>Security:</strong> To help detect and prevent
                  fraudulent activity and protect your account
                </li>
              </ul>
            </section>

            {/* ── 3 ── */}
            <section id="types" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">3.</span> Types of Cookies
                We Use
              </h2>
              <div className="legal-table-wrapper">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Type</th>
                      <th>Purpose</th>
                      <th>Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Strictly Necessary</strong>
                      </td>
                      <td>
                        Essential for website operation, authentication, and
                        security
                      </td>
                      <td>Session</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Preference</strong>
                      </td>
                      <td>
                        Remember user preferences (e.g., theme, language
                        settings)
                      </td>
                      <td>30 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                We do <strong>not</strong> use analytics cookies, advertising
                cookies, or social media tracking cookies.
              </p>
            </section>

            {/* ── 4 ── */}
            <section id="control" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">4.</span> Managing Cookies
              </h2>
              <p>
                Most browsers allow you to manage cookies through their settings.
                You can typically:
              </p>
              <ul className="legal-list">
                <li>View and delete cookies stored on your device</li>
                <li>Block specific or all cookies</li>
                <li>Be notified when a cookie is set</li>
              </ul>
              <p>
                Note that disabling strictly necessary cookies may affect the
                functionality of the web dashboard for Professional and
                Enterprise users.
              </p>
              <p>
                To learn how to manage cookies in your browser, visit your
                browser&apos;s help section or the documentation provided by
                your browser vendor.
              </p>
            </section>

            {/* ── 5 ── */}
            <section id="contact" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">5.</span> Contact
              </h2>
              <p>For questions about our cookie practices:</p>
              <div className="legal-contact-card">
                <div className="legal-contact-row">
                  <HiMail className="legal-contact-icon" />
                  <div>
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${SITE_CONFIG.email}`}>
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
