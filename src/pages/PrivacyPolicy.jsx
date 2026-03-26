import { motion } from "framer-motion";
import { HiShieldCheck, HiDocumentText, HiMail } from "react-icons/hi";
import PageNav from "../components/PageNav";
import { SITE_CONFIG } from "../data/siteData";
import "./LegalPage.css";

const SECTIONS = [
  { id: "introduction", label: "Introduction" },
  { id: "not-collected", label: "What We Don't Collect" },
  { id: "document-processing", label: "Document Processing" },
  { id: "permissions", label: "Permissions" },
  { id: "data-retention", label: "Data Retention" },
  { id: "security", label: "Security" },
  { id: "children", label: "Children's Privacy" },
  { id: "changes", label: "Policy Changes" },
  { id: "contact", label: "Contact" },
];

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <PageNav sections={SECTIONS} title="Privacy Policy" />

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
            <h1 className="legal-title">Privacy Policy</h1>
            <p className="legal-subtitle">
              We are committed to protecting your privacy. Specter is designed to
              help you extract text securely and reliably.
            </p>
            <div className="legal-meta">
              <span>
                <strong>Effective Date:</strong>{" "}
                {SITE_CONFIG.privacyPolicyEffectiveDate}
              </span>
              <span className="legal-meta-divider">|</span>
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
            {/* ── 1. Introduction ── */}
            <section id="introduction" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">1.</span> Introduction
              </h2>
              <p>
                Specter (&ldquo;the App&rdquo;, &ldquo;we&rdquo;,
                &ldquo;our&rdquo;) is a document scanning application that enables
                users to digitize and extract text from physical documents. This
                Privacy Policy explains how the App handles information when you
                use it.
              </p>
              <div className="legal-highlight">
                <HiShieldCheck className="legal-highlight-icon" />
                <p>
                  <strong>
                    Specter does not collect, store, or sell any personal
                    information.
                  </strong>{" "}
                  The App does not require you to create an account or log in.
                </p>
              </div>
            </section>

            {/* ── 2. What We Don't Collect ── */}
            <section id="not-collected" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">2.</span> Information We Do
                NOT Collect
              </h2>
              <p>Specter does <strong>not</strong> collect:</p>
              <ul className="legal-list">
                <li>
                  Your name, email address, phone number, or any account
                  information
                </li>
                <li>Your location data</li>
                <li>Device identifiers or advertising IDs</li>
                <li>Usage analytics or behavioral tracking data</li>
                <li>
                  Any information from your contacts, call logs, or messages
                </li>
              </ul>
              <p>
                The App requires absolutely no user registration, meaning there is
                no persistent identity tied to your usage context.
              </p>
            </section>

            {/* ── 3. Document Processing ── */}
            <section id="document-processing" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">3.</span> Document Processing
              </h2>
              <p>
                When you use the app&apos;s scanning features, your files are used
                only to perform the tasks you request.
              </p>

              <div className="legal-card">
                <h3 className="legal-card-title">
                  📄 Extraction and Processing
                </h3>
                <ul className="legal-list">
                  <li>
                    The app processes only the specific documents and images you
                    explicitly choose to scan.
                  </li>
                  <li>
                    To provide high-quality text extraction, selected files and the
                    resulting text may be securely processed through designated
                    cloud services.
                  </li>
                  <li>
                    These transfers are required strictly for core app functionality
                    and happen only when you actively trigger a scan.
                  </li>
                  <li>
                    We do not sell your files, images, or extracted text to anyone.
                  </li>
                </ul>
              </div>
            </section>

            {/* ── 4. Permissions ── */}
            <section id="permissions" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">4.</span> Permissions
              </h2>
              <p>
                The App requests only the device permissions solely needed to enable
                its core scanning operations:
              </p>
              <div className="legal-table-wrapper">
                <table className="legal-table">
                  <thead>
                    <tr>
                      <th>Permission</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>Camera</strong>
                      </td>
                      <td>To capture photos of documents for scanning.</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Photo Library / Files</strong>
                      </td>
                      <td>
                        To let you select existing documents and images from your
                        device.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Specter does not request unrelated permissions such as contacts,
                call logs, or precise location mapping.
              </p>
            </section>

            {/* ── 5. Data Retention ── */}
            <section id="data-retention" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">5.</span> Data Retention
              </h2>
              <ul className="legal-list">
                <li>
                  Files and extracted outputs are retained temporarily and only as
                  needed to ensure service operation and reliable text output.
                </li>
                <li>
                  Your files remain private to your usage session and are not
                  shared publicly by the app.
                </li>
                <li>
                  If you need support for the removal of any stored data related to
                  your usage, you can reach out directly via our contact email.
                </li>
              </ul>
            </section>

            {/* ── 6. Security ── */}
            <section id="security" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">6.</span> Data Security
              </h2>
              <p>
                We apply reasonable safeguards to protect your files, including
                using encrypted transfer channels (HTTPS) during active processing
                and enforcing restricted operational access to our systems. While no
                digital system can offer a 100% guarantee, we consistently work to
                protect user files and extracted data.
              </p>
            </section>

            {/* ── 7. Children ── */}
            <section id="children" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">7.</span> Children&apos;s
                Privacy
              </h2>
              <p>
                Specter is not directed at children under the age of 13. We do not
                knowingly collect any personal information from children under 13.
              </p>
            </section>

            {/* ── 8. Changes ── */}
            <section id="changes" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">8.</span> Changes to This
                Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be reflected with an updated &ldquo;Last Updated&rdquo; date
                at the top of this page. Continued use of the App after changes are
                posted constitutes your acceptance of the revised policy.
              </p>
            </section>

            {/* ── 9. Contact ── */}
            <section id="contact" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">9.</span> Contact Us
              </h2>
              <p>
                If you have questions, concerns, or data deletion requests, please
                contact us:
              </p>
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
                <div className="legal-contact-row">
                  <HiDocumentText className="legal-contact-icon" />
                  <div>
                    <strong>App Name:</strong> Specter
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

export default PrivacyPolicy;
