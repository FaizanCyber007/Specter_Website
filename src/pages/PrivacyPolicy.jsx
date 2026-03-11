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
              We are committed to protecting your privacy. Specter does not
              collect, store, or sell any personal information.
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
                &ldquo;our&rdquo;) is a FIR (First Information Report) document
                scanning application that enables users to digitize and extract
                text from physical documents using on-device OCR and cloud-based
                AI extraction. This Privacy Policy explains how the App handles
                information when you use it.
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
                <li>Any biometric data</li>
              </ul>
              <p>
                The App does <strong>not</strong> require you to create an
                account or log in. There is no user registration, no email
                verification, and no persistent identity tied to your usage.
              </p>
            </section>

            {/* ── 3. Document Processing ── */}
            <section id="document-processing" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">3.</span> Document Images —
                How They Are Processed
              </h2>
              <p>
                When you scan a document using the App, the following occurs
                depending on the scan mode you select:
              </p>

              <div className="legal-card">
                <h3 className="legal-card-title">
                  📱 Instant Scan (On-Device Mode)
                </h3>
                <ul className="legal-list">
                  <li>
                    Your document image is processed{" "}
                    <strong>entirely on your device</strong> using local OCR
                    technology
                  </li>
                  <li>
                    No image or extracted text is sent to any external server
                  </li>
                  <li>Nothing leaves your device</li>
                </ul>
              </div>

              <div className="legal-card">
                <h3 className="legal-card-title">
                  ✨ Smart Extraction (AI Cloud Mode)
                </h3>
                <ul className="legal-list">
                  <li>
                    Your document image is{" "}
                    <strong>temporarily uploaded</strong> to a secure cloud
                    service for AI processing
                  </li>
                  <li>
                    The image is used <strong>only</strong> for the purpose of
                    extracting text and is not permanently stored by us
                  </li>
                  <li>
                    Extracted text results are returned to your device and
                    displayed in the App
                  </li>
                  <li>
                    We do not retain copies of your document images or the
                    extracted text on any server we own or control
                  </li>
                </ul>
              </div>
            </section>

            {/* ── 4. Permissions ── */}
            <section id="permissions" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">4.</span> Camera and
                Storage Permissions
              </h2>
              <p>
                The App requests the following device permissions solely to
                enable its core scanning functionality:
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
                      <td>To capture photos of documents for scanning</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Photo Library / Media Images</strong>
                      </td>
                      <td>
                        To select existing photos from your device for scanning
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Storage</strong>
                      </td>
                      <td>
                        To temporarily save images during processing on older
                        Android versions
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                These permissions are used <strong>only</strong> when you
                actively initiate a scan. The App does not access your camera
                or storage in the background.
              </p>
            </section>

            {/* ── 5. Data Retention ── */}
            <section id="data-retention" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">5.</span> Data Retention
              </h2>
              <ul className="legal-list">
                <li>
                  <strong>On-device processing:</strong> No data is stored
                  beyond your current session unless you explicitly save it
                  within the App.
                </li>
                <li>
                  <strong>Cloud processing:</strong> Document images uploaded
                  for AI extraction are temporary. We do not maintain any
                  database of your documents.
                </li>
                <li>
                  <strong>Extracted text:</strong> Displayed to you within the
                  App only. Not stored on any server by us. Any local storage
                  remains on your device under your control.
                </li>
              </ul>
            </section>

            {/* ── 6. Security ── */}
            <section id="security" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">6.</span> Data Security
              </h2>
              <p>
                All communications between the App and processing services use
                HTTPS encryption. For the Instant Scan mode, no data is
                transmitted at all — processing happens entirely on your device.
              </p>
              <p>
                We do not operate our own servers for document storage, so
                there is no server-side database that could be breached to
                expose your documents.
              </p>
            </section>

            {/* ── 7. Children ── */}
            <section id="children" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">7.</span> Children&apos;s
                Privacy
              </h2>
              <p>
                Specter is not directed at children under the age of 13. We do
                not knowingly collect any personal information from children. If
                you believe a child has submitted document images through the
                App, please contact us and we will work to ensure those images
                are removed from any processing service.
              </p>
            </section>

            {/* ── 8. Changes ── */}
            <section id="changes" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">8.</span> Changes to This
                Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any
                changes will be reflected with an updated &ldquo;Last
                Updated&rdquo; date at the top of this page. Continued use of
                the App after changes are posted constitutes your acceptance of
                the revised policy.
              </p>
            </section>

            {/* ── 9. Contact ── */}
            <section id="contact" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">9.</span> Contact Us
              </h2>
              <p>
                If you have any questions or concerns about this Privacy Policy
                or how your data is handled, please contact us:
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
                    <strong>App:</strong> Specter — FIR Document Scanner
                  </div>
                </div>
                <div className="legal-contact-row">
                  <HiShieldCheck className="legal-contact-icon" />
                  <div>
                    <strong>Package:</strong> {SITE_CONFIG.packageId}
                  </div>
                </div>
              </div>
              <p className="legal-note">
                This privacy policy was prepared for the Specter application
                published on the Google Play Store.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
