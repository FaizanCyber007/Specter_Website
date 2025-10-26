import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import LogoCloud from "./sections/LogoCloud";
import Stats from "./sections/Stats";
import Features from "./sections/Features";
import UseCases from "./sections/UseCases";
import Solutions from "./sections/Solutions";
import HowItWorks from "./sections/HowItWorks";
import Testimonials from "./sections/Testimonials";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Auth from "./pages/Auth";
import Resources from "./pages/Resources";
import Company from "./pages/Company";
import "./App.css";

// Home Page Component
const HomePage = () => (
  <main>
    <Hero />
    <LogoCloud />
    <Stats />
    <Features />
    <UseCases />
    <Solutions />
    <HowItWorks />
    <Testimonials />
    <Pricing />
    <FAQ />
    <CTA />
  </main>
);

function App() {
  return (
    <Router>
      <div className="app">
        <div className="animated-bg"></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/company" element={<Company />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
