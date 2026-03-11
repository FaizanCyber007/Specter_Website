import { motion } from "framer-motion";
import { HiDocumentText, HiMail } from "react-icons/hi";
import PageNav from "../components/PageNav";
import { SITE_CONFIG } from "../data/siteData";
import "./LegalPage.css";

const SECTIONS = [
  { id: "acceptance", label: "Acceptance" },
  { id: "description", label: "App Description" },
  { id: "acceptable-use", label: "Acceptable Use" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "privacy", label: "Privacy" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "limitation", label: "Limitation of Liability" },
  { id: "governing-law", label: "Governing Law" },
  { id: "contact", label: "Contact" },
];

const Terms = () => {
  return (
    <div className="legal-page">
      <PageNav sections={SECTIONS} title="Terms of Service" />

      <div className="legal-hero">
        <div className="container">
          <motion.div
            className="legal-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="legal-hero-icon">
              <HiDocumentText />
            </div>
            <h1 className="legal-title">Terms of Service</h1>
            <p className="legal-subtitle">
              Please read these Terms of Service carefully before using the
              Specter application. By using Specter, you agree to be bound by
              these terms.
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
            {/* ── 1. Acceptance ── */}
            <section id="acceptance" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">1.</span> Acceptance of
                Terms
              </h2>
              <p>
                By downloading, installing, or using the Specter application
                (&ldquo;App&rdquo;, &ldquo;Service&rdquo;), you agree to be
                bound by these Terms of Service (&ldquo;Terms&rdquo;). If you
                do not agree to these Terms, do not use the App.
              </p>
              <p>
                These Terms apply to all users of the App, including individuals
                using the free Individual plan and organizations using
                Professional or Enterprise plans.
              </p>
              <p>
                We reserve the right to update these Terms at any time. We will
                notify users of significant changes through the App or email
                (for subscribed plans). Continued use of the App after changes
                constitutes acceptance of the updated Terms.
              </p>
            </section>

            {/* ── 2. Description ── */}
            <section id="description" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">2.</span> Description of
                Service
              </h2>
              <p>
                Specter is a FIR (First Information Report) document scanning
                and management application that enables users to:
              </p>
              <ul className="legal-list">
                <li>
                  Capture and digitize physical FIR documents using device
                  camera
                </li>
                <li>
                  Extract structured data from FIR documents using on-device
                  OCR (Instant Scan) or AI-assisted cloud processing (Smart
                  Extraction)
                </li>
                <li>Organize and manage digitized FIR records securely</li>
                <li>
                  Search across digitized documents and export data in standard
                  formats
                </li>
                <li>
                  Collaborate with team members on FIR case management
                  (Professional/Enterprise plans)
                </li>
              </ul>
              <p>
                The App is intended for use by legal professionals, law
                enforcement personnel, citizens, and organizations involved in
                Pakistan&apos;s legal system. It is published on the Google Play
                Store under the package identifier:{" "}
                <code className="legal-code">{SITE_CONFIG.packageId}</code>
              </p>
            </section>

            {/* ── 3. Acceptable Use ── */}
            <section id="acceptable-use" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">3.</span> Acceptable Use
              </h2>
              <p>
                You agree to use Specter only for lawful purposes and in
                accordance with these Terms. You agree <strong>not</strong> to:
              </p>
              <ul className="legal-list">
                <li>
                  Use the App to scan, extract, or process documents without
                  lawful authority or authorization
                </li>
                <li>
                  Violate any applicable laws, including Pakistan&apos;s
                  Electronic Crimes Act (PECA 2016) or data protection
                  regulations
                </li>
                <li>
                  Attempt to gain unauthorized access to any portion of the App
                  or its infrastructure
                </li>
                <li>
                  Use the App to store, transmit, or process content that is
                  illegal, defamatory, or infringes on third-party rights
                </li>
                <li>
                  Reverse-engineer, decompile, or disassemble the App or
                  attempt to extract its source code
                </li>
                <li>
                  Use the App in any way that could damage, disable, or impair
                  the App or servers connected to it
                </li>
                <li>
                  Share account credentials (Professional/Enterprise plans) with
                  unauthorized parties
                </li>
              </ul>
            </section>

            {/* ── 4. Intellectual Property ── */}
            <section id="intellectual-property" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">4.</span> Intellectual
                Property
              </h2>
              <p>
                The App, including its design, user interface, functionality,
                source code, and all associated content, is owned by Specter and
                its founders and is protected by applicable intellectual property
                laws.
              </p>
              <p>
                You are granted a limited, non-exclusive, non-transferable
                license to use the App for personal or organizational purposes in
                accordance with these Terms.
              </p>
              <p>
                <strong>Your Documents:</strong> You retain full ownership of
                all FIR documents and data you scan and store using the App. We
                claim no ownership over your content.
              </p>
            </section>

            {/* ── 5. Privacy ── */}
            <section id="privacy" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">5.</span> Privacy
              </h2>
              <p>
                Your use of Specter is also governed by our{" "}
                <a href="/privacy-policy" className="legal-link">
                  Privacy Policy
                </a>
                , which is incorporated into these Terms by reference. By using
                the App, you consent to the data practices described in the
                Privacy Policy.
              </p>
              <p>
                We are committed to protecting your privacy. Specter does not
                collect personal information, and document scanning in Instant
                Scan mode occurs entirely on your device with no data
                transmission.
              </p>
            </section>

            {/* ── 6. Disclaimers ── */}
            <section id="disclaimers" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">6.</span> Disclaimers
              </h2>
              <div className="legal-highlight">
                <p>
                  <strong>
                    Specter is provided &ldquo;as is&rdquo; without warranties
                    of any kind.
                  </strong>{" "}
                  We do not warrant that the App will be uninterrupted,
                  error-free, or that extracted text will be 100% accurate.
                </p>
              </div>
              <ul className="legal-list">
                <li>
                  OCR and AI extraction results should be verified against
                  original documents before being relied upon for legal
                  proceedings
                </li>
                <li>
                  Specter does not provide legal advice. The App is a
                  productivity tool — consult qualified legal professionals for
                  legal guidance
                </li>
                <li>
                  We do not guarantee continuous availability of cloud
                  processing features
                </li>
              </ul>
            </section>

            {/* ── 7. Limitation of Liability ── */}
            <section id="limitation" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">7.</span> Limitation of
                Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Specter and
                its founders, officers, and employees shall not be liable for:
              </p>
              <ul className="legal-list">
                <li>
                  Any indirect, incidental, special, or consequential damages
                  arising from use of the App
                </li>
                <li>
                  Loss of data, documents, or information resulting from use of
                  the App
                </li>
                <li>
                  Inaccuracies in extracted text or AI processing results
                </li>
                <li>
                  Any legal, professional, or financial consequences of relying
                  on App outputs without independent verification
                </li>
              </ul>
            </section>

            {/* ── 8. Governing Law ── */}
            <section id="governing-law" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">8.</span> Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of the <strong>Islamic Republic of Pakistan</strong>
                , without regard to conflict of law principles.
              </p>
              <p>
                Any disputes arising from these Terms shall be subject to the
                exclusive jurisdiction of the courts of{" "}
                <strong>Lahore, Punjab, Pakistan</strong>.
              </p>
            </section>

            {/* ── 9. Contact ── */}
            <section id="contact" className="legal-section">
              <h2 className="legal-section-title">
                <span className="legal-section-num">9.</span> Contact Us
              </h2>
              <p>
                For questions about these Terms of Service, contact us at:
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
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
