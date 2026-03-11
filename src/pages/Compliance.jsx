import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { HiShieldCheck, HiLockClosed, HiDocumentText, HiMail } from "react-icons/hi";
import PageNav from "../components/PageNav";
import { SITE_CONFIG } from "../data/siteData";
import "./LegalPage.css";
import "./Compliance.css";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "data-security", label: "Data Security" },
  { id: "encryption", label: "Encryption" },
  { id: "access-controls", label: "Access Controls" },
  { id: "data-minimization", label: "Data Minimization" },
  { id: "incident-response", label: "Incident Response" },
  { id: "contact", label: "Contact" },
];

const SecurityCard = ({ icon, title, items }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div
      ref={ref}
      className="compliance-card glass"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="compliance-card-icon">{icon}</div>
      <h3 className="compliance-card-title">{title}</h3>
      <ul className="legal-list">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const Compliance = () => {
  return (
    <div className="legal-page compliance-page">
      <PageNav sections={SECTIONS} title="Compliance" />

      <div className="legal-hero">
        <div className="container">
          <motion.div
            className="legal-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="legal-hero-icon">
              <HiShieldCheck />
            </div>
            <h1 className="legal-title">Security & Compliance</h1>
            <p className="legal-subtitle">
              Specter is built with security and privacy at its foundation —
              not as an afterthought. Here is how we protect your documents and
              data.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="legal-body">
        <div className="container">
          <div className="legal-content">
            {/* ── Overview ── */}
            <section id="overview" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">1.</span> Security Overview
              </h2>
              <p>
                FIR documents are sensitive legal records that require the
                highest levels of protection. Specter is designed with a
                privacy-first philosophy — we collect the minimum data
                necessary, we encrypt what we store, and we give users full
                control over their information.
              </p>
              <div className="compliance-security-cards">
                <SecurityCard
                  icon={<HiLockClosed />}
                  title="End-to-End Encryption"
                  items={[
                    "AES-256 encryption for all stored documents",
                    "TLS 1.3 for all data in transit",
                    "Device-level encryption for offline storage",
                  ]}
                />
                <SecurityCard
                  icon={<HiShieldCheck />}
                  title="Privacy by Design"
                  items={[
                    "On-device processing — nothing leaves your device",
                    "No user accounts required for core features",
                    "No behavioral tracking or analytics",
                  ]}
                />
                <SecurityCard
                  icon={<HiDocumentText />}
                  title="Data Minimization"
                  items={[
                    "Only process data you explicitly provide",
                    "No retention of cloud-processed images",
                    "Transparent data handling at every step",
                  ]}
                />
              </div>
            </section>

            {/* ── Data Security ── */}
            <section id="data-security" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">2.</span> Data Security
                Architecture
              </h2>
              <p>
                Our security architecture is designed around the principle that
                documents should be processed as locally as possible, with cloud
                services used only when necessary and with minimal data
                exposure.
              </p>
              <ul className="legal-list">
                <li>
                  <strong>Instant Scan Mode:</strong> All OCR processing occurs
                  on your device. No image data, extracted text, or metadata is
                  ever transmitted off-device in this mode.
                </li>
                <li>
                  <strong>Smart Extraction Mode:</strong> Images are transmitted
                  over encrypted HTTPS to a secure processing service. Images
                  are used only for the extraction request and are not
                  permanently stored.
                </li>
                <li>
                  <strong>Local Storage:</strong> Documents saved to the local
                  vault are encrypted at rest using device-level encryption.
                </li>
                <li>
                  <strong>Cloud Vault (Professional/Enterprise):</strong>{" "}
                  Documents are encrypted with AES-256 before transmission and
                  stored encrypted. Encryption keys are managed separately from
                  stored data.
                </li>
              </ul>
            </section>

            {/* ── Encryption ── */}
            <section id="encryption" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">3.</span> Encryption
                Standards
              </h2>
              <div className="legal-table-wrapper">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Layer</th>
                      <th>Standard</th>
                      <th>Applied To</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Storage</td>
                      <td>
                        <strong>AES-256</strong>
                      </td>
                      <td>All stored documents and extracted data</td>
                    </tr>
                    <tr>
                      <td>Transit</td>
                      <td>
                        <strong>TLS 1.3</strong>
                      </td>
                      <td>All API communications and cloud sync</td>
                    </tr>
                    <tr>
                      <td>Device</td>
                      <td>
                        <strong>Android Keystore</strong>
                      </td>
                      <td>Local vault encryption keys</td>
                    </tr>
                    <tr>
                      <td>Passwords</td>
                      <td>
                        <strong>bcrypt</strong>
                      </td>
                      <td>User credentials (Professional/Enterprise)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── Access Controls ── */}
            <section id="access-controls" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">4.</span> Access Controls
              </h2>
              <p>
                For Professional and Enterprise plans, Specter provides
                granular access controls to protect sensitive case documents:
              </p>
              <ul className="legal-list">
                <li>
                  Role-based permissions: Admin, Editor, Viewer roles with
                  configurable access levels
                </li>
                <li>
                  Document-level sharing controls — share specific documents
                  or folders with specific team members
                </li>
                <li>
                  Time-limited sharing links with optional password protection
                </li>
                <li>
                  Complete audit log of all document accesses and modifications
                </li>
                <li>
                  Remote wipe capability for devices with access to your vault
                </li>
              </ul>
            </section>

            {/* ── Data Minimization ── */}
            <section id="data-minimization" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">5.</span> Data Minimization
              </h2>
              <p>
                We collect only what is necessary to operate the App and
                provide the services you request:
              </p>
              <ul className="legal-list">
                <li>
                  Individual plan users: No account registration, no personal
                  data collected whatsoever
                </li>
                <li>
                  Professional/Enterprise plans: Only email address and
                  organization name required for account creation
                </li>
                <li>
                  Document images: Never permanently stored by us. Used only
                  for the immediate processing request
                </li>
                <li>
                  No advertising IDs, location data, behavioral analytics, or
                  device identifiers collected from any user
                </li>
              </ul>
            </section>

            {/* ── Incident Response ── */}
            <section id="incident-response" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">6.</span> Incident Response
              </h2>
              <p>
                In the unlikely event of a security incident affecting user
                data, we commit to:
              </p>
              <ul className="legal-list">
                <li>
                  Notifying affected Professional / Enterprise users within
                  72 hours of becoming aware of the incident
                </li>
                <li>
                  Providing a clear description of what data was affected,
                  the likely cause, and recommended actions
                </li>
                <li>
                  Working promptly to contain the incident and prevent
                  recurrence
                </li>
                <li>
                  Cooperating with any legitimate regulatory investigations
                </li>
              </ul>
              <p>
                Note: Because Specter does not store document images or
                extracted text on our servers, a platform breach would not
                expose your FIR documents.
              </p>
            </section>

            {/* ── Contact ── */}
            <section id="contact" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">7.</span> Security Contact
              </h2>
              <p>
                To report a security vulnerability or for security-related
                inquiries, please contact our security team directly:
              </p>
              <div className="legal-contact-card">
                <div className="legal-contact-row">
                  <HiMail className="legal-contact-icon" />
                  <div>
                    <strong>Security Email:</strong>{" "}
                    <a href={`mailto:security@${SITE_CONFIG.email.split("@")[1]}`}>
                      security@{SITE_CONFIG.email.split("@")[1]}
                    </a>
                  </div>
                </div>
                <div className="legal-contact-row">
                  <HiMail className="legal-contact-icon" />
                  <div>
                    <strong>General:</strong>{" "}
                    <a href={`mailto:${SITE_CONFIG.email}`}>
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>
              <p className="legal-note">
                We appreciate responsible disclosure and will acknowledge valid
                security reports within 48 hours.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
