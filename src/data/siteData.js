// ============================================================
// SPECTER — Centralized Site Data
// Update content here once and it reflects everywhere.
// ============================================================

export const SITE_CONFIG = {
  name: "Specter",
  fullName: "Specter AI",
  tagline: "FIR Document Intelligence",
  description:
    "Pakistan's leading platform for digitizing, analyzing, and managing First Information Reports with AI-powered precision.",
  shortDescription:
    "AI-powered FIR document scanning and management for Pakistan's legal professionals.",
  email: "contact@specterapp.com",
  supportEmail: "support@specterapp.com",
  phone: "+923276272478",
  address: "Lahore, Punjab, Pakistan",
  playStoreUrl: "#",
  packageId: "com.specterapp.app",
  founded: "2025",
  privacyPolicyLastUpdated: "March 11, 2026",
  privacyPolicyEffectiveDate: "March 11, 2026",
};

// ── Navigation ──────────────────────────────────────────────

export const NAV_ITEMS = [
  {
    name: "Home",
    href: "/",
    sections: [
      { name: "Features", href: "/#features" },
      { name: "How It Works", href: "/#how-it-works" },
      { name: "FAQ", href: "/#faq" },
    ],
  },
  {
    name: "Solutions",
    href: "/solutions",
    sections: [
      { name: "Platform Overview", href: "/solutions" },
      { name: "Use Cases", href: "/solutions#use-cases" },
      { name: "Performance Stats", href: "/solutions#stats" },
    ],
  },
  {
    name: "Pricing",
    href: "/pricing",
    sections: [],
  },
  {
    name: "Resources",
    href: "/resources",
    sections: [
      { name: "Documentation", href: "/resources#documentation" },
      { name: "Guides & Tutorials", href: "/resources#guides" },
      { name: "Webinars", href: "/resources#webinars" },
      { name: "Support", href: "/resources#support" },
    ],
  },
  {
    name: "Company",
    href: "/company",
    sections: [
      { name: "About Us", href: "/company#about" },
      { name: "Our Story", href: "/company#story" },
      { name: "Team", href: "/company#team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

export const FOOTER_LINKS = {
  product: [
    { name: "Features", href: "/#features", isHash: true },
    { name: "Pricing", href: "/#pricing", isHash: true },
    { name: "Solutions", href: "/#solutions", isHash: true },
    { name: "Use Cases", href: "/#use-cases", isHash: true },
  ],
  company: [
    { name: "About Us", href: "/company", isHash: false },
    { name: "Resources", href: "/resources", isHash: false },
    { name: "Careers", href: "/careers", isHash: false },
    { name: "Contact", href: "/contact", isHash: false },
  ],
  resources: [
    { name: "Documentation", href: "/resources#documentation", isHash: false },
    { name: "Guides & Tutorials", href: "/resources#guides", isHash: false },
    { name: "Webinars", href: "/resources#webinars", isHash: false },
    { name: "Support", href: "/resources#support", isHash: false },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy", isHash: false },
    { name: "Terms of Service", href: "/terms", isHash: false },
    { name: "Cookie Policy", href: "/cookie-policy", isHash: false },
    { name: "Compliance", href: "/compliance", isHash: false },
  ],
};

export const SOCIAL_LINKS = [
  { platform: "Twitter", href: "#", label: "Twitter" },
  { platform: "LinkedIn", href: "#", label: "LinkedIn" },
  { platform: "GitHub", href: "#", label: "GitHub" },
  { platform: "YouTube", href: "#", label: "YouTube" },
];

// ── Hero ────────────────────────────────────────────────────

export const HERO_STATS = [
  { number: "50,000+", label: "FIRs & Judgements Digitized" },
  { number: "99.5%", label: "OCR Accuracy" },
  { number: "5+", label: "Legal Professionals" },
];

// ── Stats Section ────────────────────────────────────────────

export const STATS = [
  {
    number: "75%",
    label: "Faster Processing",
    description: "Reduce FIR digitization time dramatically",
    colorKey: "gold",
  },
  {
    number: "99.5%",
    label: "OCR Accuracy Rate",
    description: "Industry-leading text recognition",
    colorKey: "green",
  },
  {
    number: "50,000+",
    label: "FIRs & Judgements Digitized",
    description: "Processed with AI precision",
    colorKey: "gold",
  },
  {
    number: "5+",
    label: "Legal Professionals",
    description: "Using Specter daily across Pakistan",
    colorKey: "green",
  },
  {
    number: "100%",
    label: "Secure & Encrypted",
    description: "End-to-end encryption on all data",
    colorKey: "maroon",
  },
  {
    number: "24/7",
    label: "Always Available",
    description: "Round-the-clock access to your FIRs",
    colorKey: "green",
  },
];

// ── Features ────────────────────────────────────────────────

export const FEATURES = [
  {
    title: "Instant Scan",
    description:
      "Capture FIR documents with your device camera. On-device processing extracts text instantly — nothing ever leaves your device.",
    colorKey: "gold",
  },
  {
    title: "Smart Extraction",
    description:
      "AI intelligently extracts structured fields from FIR documents — case number, FIR number, station, sections, accused details — with superior accuracy.",
    colorKey: "green",
  },
  {
    title: "Secure Vault",
    description:
      "All documents are end-to-end encrypted. Your sensitive FIR data stays protected with bank-level security and granular access controls.",
    colorKey: "maroon",
  },
  {
    title: "Full-Text Search",
    description:
      "Instantly search across all digitized FIRs by case number, accused name, crime section, date, or any extracted field.",
    colorKey: "gold",
  },
  {
    title: "Case Management",
    description:
      "Organize FIR cases with intelligent categorization. Link related cases, track hearing schedules, and maintain a complete audit trail.",
    colorKey: "green",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Gain insights from your FIR data. Track patterns, case types, and generate reports for informed legal strategy.",
    colorKey: "gold",
  },
];

// ── Use Cases ────────────────────────────────────────────────

export const USE_CASES = [
  {
    title: "FIR Digitization",
    description:
      "Convert physical FIR documents into digital records with automatic field extraction — case number, sections, accused details, and more.",
    benefits: ["90% faster digitization", "Error-free data capture", "Instant searchability"],
    colorKey: "gold",
  },
  {
    title: "Legal Research",
    description:
      "Search and analyze FIR patterns, precedents, and case histories to build stronger legal arguments and identify trends.",
    benefits: ["Full-text search", "Pattern analysis", "Case precedents"],
    colorKey: "green",
  },
  {
    title: "Police Records Management",
    description:
      "Digitize and organize station-level FIR records. Build a searchable digital archive of all FIRs registered at your station.",
    benefits: ["Digital archives", "Instant retrieval", "Secure storage"],
    colorKey: "teal",
  },
  {
    title: "Citizen Assistance",
    description:
      "Help citizens understand the status and contents of their FIR, empowering them to navigate the legal system confidently.",
    benefits: ["Easy comprehension", "Status tracking", "No technical expertise needed"],
    colorKey: "emerald",
  },
  {
    title: "Legal Aid Organizations",
    description:
      "Process high volumes of FIR cases for legal aid clients quickly and accurately, enabling more people to receive legal help.",
    benefits: ["High-volume processing", "Collaboration tools", "Cost-effective"],
    colorKey: "amber",
  },
  {
    title: "Judicial Administration",
    description:
      "Streamline court processes with digitized FIR records that are easily accessible, searchable, and shareable with authorized parties.",
    benefits: ["Court-ready formats", "Authorized sharing", "Audit trails"],
    colorKey: "cyan",
  },
];

// ── Solutions ────────────────────────────────────────────────

export const SOLUTIONS = [
  {
    title: "Document Scanning",
    description:
      "Transform physical FIR documents into searchable, analyzable digital records in seconds.",
    features: [
      "Instant on-device OCR processing",
      "Smart AI field extraction",
      "Automatic categorization",
      "Multi-format support",
    ],
    gradient: "linear-gradient(135deg, #C9A22A 0%, #E4B840 100%)",
    detailedInfo: {
      overview:
        "Our advanced Document Scanning transforms physical FIR documents into searchable digital records using AI-powered OCR technology. Both on-device and secure cloud processing modes are available based on your security requirements.",
      keyFeatures: [
        "Industry-leading OCR accuracy (99.5%+) for printed text in Urdu and English",
        "Intelligent extraction of key fields: case number, FIR number, station name, accused details, sections",
        "Automatic categorization by crime type and jurisdiction",
        "Support for photos, scanned PDFs, and direct camera capture",
        "Batch processing for multiple documents simultaneously",
        "Privacy-first: on-device processing mode available for sensitive cases",
      ],
      benefits: [
        "Reduce document digitization time by 90%",
        "Eliminate manual data entry errors",
        "Find critical information instantly across thousands of FIRs",
        "Build searchable digital archives from physical records",
      ],
    },
  },
  {
    title: "Case Management",
    description:
      "Organize, track, and manage FIR cases with intelligent tools built for Pakistan's legal system.",
    features: [
      "Case timeline tracking",
      "Related case linking",
      "Status monitoring",
      "Team collaboration",
    ],
    gradient: "linear-gradient(135deg, #0A5B2E 0%, #15803D 100%)",
    detailedInfo: {
      overview:
        "Specter's Case Management system allows legal professionals to organize FIR cases, track their progression through the legal system, and maintain comprehensive case files with all related documents.",
      keyFeatures: [
        "Create and organize case folders with linked FIR documents",
        "Track case status: registered, under investigation, challan filed, court proceedings",
        "Link related cases and identify connections automatically",
        "Assign cases to team members with role-based permissions",
        "Automated reminders for hearing dates and filing deadlines",
        "Complete audit trail of all actions and document accesses",
      ],
      benefits: [
        "Never miss a critical deadline",
        "Find any case in seconds",
        "Collaborate securely with your legal team",
        "Maintain a complete record of every case",
      ],
    },
  },
  {
    title: "Secure Data Vault",
    description:
      "Bank-level encryption and granular access controls protect your sensitive FIR data.",
    features: [
      "End-to-end AES-256 encryption",
      "Role-based access controls",
      "Secure sharing",
      "Compliance ready",
    ],
    gradient: "linear-gradient(135deg, #7B1A2C 0%, #B03A2E 100%)",
    detailedInfo: {
      overview:
        "Security is paramount when dealing with FIR documents. Specter's Secure Data Vault ensures your documents are protected with the highest standards of encryption and access control.",
      keyFeatures: [
        "AES-256 end-to-end encryption for all stored documents",
        "Role-based access control for team members",
        "Secure document sharing with time-limited access links",
        "Complete activity log for compliance and accountability",
        "Offline access with device-level encryption",
        "Automatic backup with encrypted synchronization",
      ],
      benefits: [
        "Protect sensitive FIR data from unauthorized access",
        "Meet data compliance requirements",
        "Share documents securely with authorized parties",
        "Maintain accountability with complete audit trails",
      ],
    },
  },
  {
    title: "AI Field Extraction",
    description:
      "Automatically extract and structure data from FIR documents with AI intelligence.",
    features: [
      "FIR-specific entity extraction",
      "Urdu & English support",
      "Structured data output",
      "Custom field mapping",
    ],
    gradient: "linear-gradient(135deg, #C9A22A 0%, #0A5B2E 100%)",
    detailedInfo: {
      overview:
        "Our AI Field Extraction is trained specifically on Pakistan's FIR document formats, enabling accurate extraction of all standard fields from any police station's FIR format.",
      keyFeatures: [
        "Recognizes 50+ FIR field types across all Pakistani police station formats",
        "Bilingual support for FIRs in both Urdu and English",
        "Structured output for system integration",
        "Custom field mapping for organization-specific workflows",
        "Confidence scoring for extracted fields",
        "Manual correction interface for verification",
      ],
      benefits: [
        "Eliminate hours of manual data entry per case",
        "Build structured databases from historical FIR records",
        "Integrate FIR data into existing systems",
        "Ensure consistent data quality across your organization",
      ],
    },
  },
];

// ── How It Works ─────────────────────────────────────────────

export const HOW_IT_WORKS = [
  {
    number: "01",
    title: "Scan Your FIR",
    description:
      "Open Specter and use your device camera to capture the FIR document, or select an existing photo from your gallery.",
  },
  {
    number: "02",
    title: "Choose Processing Mode",
    description:
      "Select Instant Scan for on-device processing (nothing leaves your device) or Smart Extraction for AI-powered cloud analysis.",
  },
  {
    number: "03",
    title: "Review Extracted Data",
    description:
      "Review the automatically extracted fields, make any corrections, and confirm the digitized record is accurate.",
  },
  {
    number: "04",
    title: "Manage & Act",
    description:
      "Save to your secure vault, search across all your FIRs, share with colleagues, or export for your case management system.",
  },
];

// ── Testimonials ─────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    name: "Advocate Tariq Mehmood",
    role: "Senior Partner, Mehmood & Associates, Lahore",
    image: "👨‍⚖️",
    rating: 5,
    text: "Specter has transformed how we handle FIR documentation. What used to take our clerks hours now takes minutes. The accuracy of AI extraction is remarkable.",
  },
  {
    name: "Rabia Hassan",
    role: "Legal Aid Officer, Karachi",
    image: "👩‍⚖️",
    rating: 5,
    text: "This app has been invaluable for legal aid work. We can quickly digitize and search through FIRs to find relevant cases for clients who need urgent help.",
  },
  {
    name: "Inspector Asif Raza",
    role: "SHO, Gulberg Police Station, Lahore",
    image: "👨‍💼",
    rating: 5,
    text: "The scanning accuracy for our FIR formats is impressive. Both Urdu and English sections are extracted correctly. A game-changer for record management.",
  },
  {
    name: "Dr. Sana Qureshi",
    role: "Legal Researcher, Punjab University",
    image: "👩‍💻",
    rating: 5,
    text: "For legal research, the ability to search across thousands of digitized FIRs instantly has made our academic work significantly more productive.",
  },
  {
    name: "Barrister Khalid Farooq",
    role: "Criminal Defense Lawyer, Islamabad",
    image: "👨‍⚖️",
    rating: 5,
    text: "Smart Extraction handles complex multi-page FIRs brilliantly. The secure vault feature gives me full confidence that sensitive client documents are protected.",
  },
  {
    name: "Advocate Nadia Siddiqui",
    role: "Managing Partner, Siddiqui Law Chambers",
    image: "👩‍⚖️",
    rating: 5,
    text: "We manage hundreds of FIR cases. Specter's case management features help us stay organized, meet deadlines, and serve our clients more effectively.",
  },
];

// ── Pricing ──────────────────────────────────────────────────

export const PRICING_PLANS = [
  {
    name: "Individual",
    price: "Free",
    period: "",
    description: "For citizens and individual users",
    features: [
      "Instant Scan (on-device OCR)",
      "50 Smart Extractions/month",
      "Secure local storage",
      "Full-text search",
      "Export to PDF & Text",
    ],
    highlighted: false,
    cta: "Download Free",
  },
  {
    name: "Professional",
    price: "PKR 2,999",
    period: "/month",
    description: "For lawyers and legal professionals",
    features: [
      "Unlimited Smart Extractions",
      "Cloud secure vault (10GB)",
      "Advanced case management",
      "Team sharing (up to 5)",
      "Analytics dashboard",
      "Priority support",
    ],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For law firms and organizations",
    features: [
      "Everything in Professional",
      "Unlimited storage",
      "Unlimited team members",
      "API integration",
      "Custom field mappings",
      "Dedicated account manager",
      "On-premise deployment",
      "SLA guarantee",
    ],
    highlighted: false,
    cta: "Contact Sales",
  },
];

// ── FAQ ──────────────────────────────────────────────────────

export const FAQ_ITEMS = [
  {
    question: "What is a FIR and how does Specter help?",
    answer:
      "An FIR (First Information Report) is the document filed with Pakistan Police when a cognizable offence is reported. It is the foundation of Pakistan's criminal justice process. Specter helps you digitize, extract, search, and manage FIR documents using AI — making them accessible, searchable, and easy to work with.",
  },
  {
    question: "How secure is my document data in Specter?",
    answer:
      "Specter employs end-to-end AES-256 encryption for all stored documents. For the most sensitive cases, our Instant Scan mode processes everything entirely on your device — no data is ever transmitted. For cloud features, all communications are encrypted via HTTPS, and we do not retain copies of your documents.",
  },
  {
    question: "Does Specter require an internet connection?",
    answer:
      "No! The Instant Scan mode works entirely offline using on-device OCR. You can scan, extract, and search documents without any internet connection. The Smart Extraction mode and cloud sync features optionally require internet for enhanced AI processing.",
  },
  {
    question: "What languages does Specter support?",
    answer:
      "Specter supports both Urdu and English, the two languages used in Pakistani FIR documents. Our OCR and AI extraction are trained specifically on Pakistan Police FIR formats across all provinces and regions.",
  },
  {
    question: "What file formats does Specter accept?",
    answer:
      "You can scan documents using your device camera directly in the app, or import existing images (JPG, PNG) and PDFs from your device. Our OCR engine handles both printed and image-based documents.",
  },
  {
    question: "Is Specter available on iOS?",
    answer:
      "Currently, Specter is available on Android (Google Play Store). An iOS version is in development and will be released soon. You can sign up to be notified when the iOS version launches.",
  },
  {
    question: "Can I use Specter for organizational use?",
    answer:
      "Yes! Our Professional and Enterprise plans are designed for organizations including law firms, police departments, and legal aid offices. They include team sharing, cloud storage, API access, and dedicated support. Enterprise plans include on-premise deployment for agencies with strict data sovereignty requirements.",
  },
  {
    question: "What happens to my data if I uninstall the app?",
    answer:
      "For the free Individual plan, data is stored locally on your device — uninstalling removes all app data. For Professional/Enterprise plans with cloud sync, your data remains in your secure account. You can export all your data at any time in standard formats.",
  },
];

// ── Team ─────────────────────────────────────────────────────

export const TEAM = [
  {
    name: "Shamoil Aslam",
    role: "CEO & Co-Founder",
    bio: "AI/ML Engineer with a passion for building technology that serves Pakistan's legal system.",
    image: "👨‍💻",
  },
  {
    name: "Faizan Javed",
    role: "CTO & Co-Founder",
    bio: "AI/ML Engineer, Full-stack Engineer & AI specialist focused on making document intelligence fast, accurate, and secure.",
    image: "👨‍💻",
  },
  {
    name: "Siddique Umar",
    role: "COO & Co-Founder",
    bio: "3+ years building legal technology products, bridging the gap between complex legal workflows and elegant software.",
    image: "👨‍💻",
  },
];

// ── Company Values ────────────────────────────────────────────

export const VALUES = [
  {
    title: "Privacy First",
    description:
      "Your documents are yours alone. We never sell or share your data, and on-device processing keeps your most sensitive documents completely private.",
  },
  {
    title: "Pakistan-Focused",
    description:
      "Built specifically for Pakistan's legal system, FIR formats, and languages. Not a generic tool adapted for Pakistan — built for Pakistan from day one.",
  },
  {
    title: "Accuracy Above All",
    description:
      "OCR that fails at the wrong moment is worse than no OCR. We obsess over accuracy so you can trust extracted data for real legal work.",
  },
  {
    title: "Accessible Justice",
    description:
      "Technology should empower everyone in the legal system — from a citizen grappling with an FIR to a senior advocate managing complex criminal defense.",
  },
];

// ── Milestones ────────────────────────────────────────────────

export const MILESTONES = [
  {
    year: "2025",
    title: "Founded",
    description:
      "Specter was founded with a vision to make Pakistan's FIR records accessible, intelligent, and secure.",
  },
  {
    year: "2025",
    title: "First Prototype",
    description:
      "Launched the first working FIR scanning prototype achieving 95%+ accuracy on Pakistani police station formats.",
  },
  {
    year: "2025",
    title: "Google Play Launch",
    description:
      "Published on Google Play Store, gaining thousands of downloads in the first weeks from legal professionals across Pakistan.",
  },
  {
    year: "2026",
    title: "Enterprise Platform",
    description:
      "Launched the enterprise SaaS platform for law firms, legal organizations, and government agencies.",
  },
];

// ── Logo Cloud / Technology Highlights ───────────────────────

export const LOGO_CLOUD_ITEMS = [
  { name: "On-Device OCR", icon: "📱", description: "100% Private" },
  { name: "Urdu Support", icon: "🔤", description: "Full Bilingual" },
  { name: "AES-256 Encryption", icon: "🔒", description: "Bank-grade" },
  { name: "Offline Mode", icon: "✈️", description: "No Internet Needed" },
  { name: "Smart Extraction", icon: "✨", description: "AI Field Detection" },
  { name: "All FIR Formats", icon: "📄", description: "All Pakistan Stations" },
  { name: "Case Management", icon: "⚖️", description: "Complete Solution" },
  { name: "Team Collaboration", icon: "👥", description: "Shared Secure Vaults" },
  { name: "Export Ready", icon: "📤", description: "PDF & Structured Data" },
  { name: "Google Play", icon: "▶️", description: "Free Download" },
  { name: "Analytics", icon: "📊", description: "Deep Insights" },
  { name: "24/7 Support", icon: "💬", description: "Always Available" },
];

// ── Open Positions (Careers) ──────────────────────────────────

export const OPEN_POSITIONS = [
  {
    title: "Senior ML Engineer",
    department: "Engineering",
    location: "Lahore / Remote",
    type: "Full-time",
    description:
      "Work on advancing our OCR and AI extraction pipelines for Urdu and English FIR documents.",
  },
  {
    title: "Full-Stack Developer",
    department: "Engineering",
    location: "Lahore / Remote",
    type: "Full-time",
    description:
      "Build and scale the Specter web platform and APIs that power our enterprise customers.",
  },
  {
    title: "Legal Technology Specialist",
    department: "Product",
    location: "Lahore",
    type: "Full-time",
    description:
      "Bridge the gap between Pakistan's legal workflows and our product development to ensure we solve real problems.",
  },
  {
    title: "Customer Success Manager",
    department: "Operations",
    location: "Lahore / Remote",
    type: "Full-time",
    description:
      "Help our law firm and enterprise customers get maximum value from Specter's platform and products.",
  },
];

// ── Resources Content ────────────────────────────────────────

export const GUIDES = [
  {
    category: "Getting Started",
    title: "Scanning Your First FIR",
    description: "Get up and running with Specter in under 5 minutes",
    readTime: "5 min read",
    colorKey: "gold",
  },
  {
    category: "Best Practices",
    title: "Maximizing OCR Accuracy",
    description: "Tips for capturing FIR documents with highest extraction quality",
    readTime: "8 min read",
    colorKey: "green",
  },
  {
    category: "Security",
    title: "Data Protection & Privacy",
    description: "Understanding Specter's security measures and how your data is handled",
    readTime: "10 min read",
    colorKey: "maroon",
  },
  {
    category: "Case Studies",
    title: "Mehmood & Associates Success Story",
    description: "How a Lahore law firm reduced FIR processing time by 80%",
    readTime: "7 min read",
    colorKey: "gold",
  },
  {
    category: "Features",
    title: "Smart Extraction Deep Dive",
    description: "Advanced AI techniques for extracting complex FIR fields",
    readTime: "12 min read",
    colorKey: "green",
  },
  {
    category: "Enterprise",
    title: "Setting Up Team Vaults",
    description: "Step-by-step guide to configuring shared secure vaults for your firm",
    readTime: "15 min read",
    colorKey: "gold",
  },
];

export const WEBINARS = [
  {
    title: "AI in Pakistani Legal Practice: 2026 Trends",
    date: "April 20, 2026",
    duration: "45 minutes",
    status: "Upcoming",
  },
  {
    title: "Advanced FIR Document Analysis Techniques",
    date: "March 5, 2026",
    duration: "60 minutes",
    status: "Watch Recording",
  },
  {
    title: "Security & Compliance for Law Firms",
    date: "February 18, 2026",
    duration: "30 minutes",
    status: "Watch Recording",
  },
  {
    title: "Introduction to Case Management with Specter",
    date: "January 25, 2026",
    duration: "45 minutes",
    status: "Watch Recording",
  },
];
