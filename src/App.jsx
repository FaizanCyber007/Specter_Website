import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopFAB from "./components/ScrollToTopFAB";
import Hero from "./sections/Hero";
import LogoCloud from "./sections/LogoCloud";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import FAQ from "./sections/FAQ";
import Auth from "./pages/Auth";
import Resources from "./pages/Resources";
import Company from "./pages/Company";
import PricingPage from "./pages/PricingPage";
import SolutionsPage from "./pages/SolutionsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import CookiePolicy from "./pages/CookiePolicy";
import Compliance from "./pages/Compliance";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

// Home Page — lean and focused
const HomePage = () => (
  <main>
    <Hero />
    <LogoCloud />
    <Features />
    <HowItWorks />
    <FAQ />
  </main>
);

function App() {
  return (
    <Router>
      <div className="app">
        <div className="animated-bg"></div>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/company" element={<Company />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ScrollToTopFAB />
      </div>
    </Router>
  );
}

export default App;
