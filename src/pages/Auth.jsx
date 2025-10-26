import { useState } from "react";
import { motion } from "framer-motion";
import { HiMail, HiLockClosed, HiUser, HiOfficeBuilding } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
    alert(
      isLogin
        ? "Login functionality will be implemented"
        : "Registration functionality will be implemented"
    );
  };

  return (
    <div className="auth-page">
      <div className="auth-background">
        <div className="auth-glow auth-glow-1"></div>
        <div className="auth-glow auth-glow-2"></div>
      </div>

      <div className="auth-container">
        <motion.div
          className="auth-card glass"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="auth-header">
            <h1 className="auth-title">
              {isLogin ? "Welcome Back" : "Get Started"}
            </h1>
            <p className="auth-subtitle">
              {isLogin
                ? "Sign in to access your legal intelligence platform"
                : "Create your account and transform your legal practice"}
            </p>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <div className="input-wrapper">
                    <HiUser className="input-icon" />
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="firm">Law Firm / Organization</label>
                  <div className="input-wrapper">
                    <HiOfficeBuilding className="input-icon" />
                    <input
                      type="text"
                      id="firm"
                      placeholder="Smith & Associates"
                      required
                    />
                  </div>
                </div>
              </>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <div className="input-wrapper">
                <HiMail className="input-icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="you@lawfirm.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <HiLockClosed className="input-icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <div className="input-wrapper">
                  <HiLockClosed className="input-icon" />
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>
            )}

            <motion.button
              type="submit"
              className="btn-primary auth-submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isLogin ? "Sign In" : "Create Account"}
            </motion.button>
          </form>

          <div className="auth-divider">
            <span>or</span>
          </div>

          <div className="auth-toggle">
            <p>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="toggle-btn"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate("/")}
            className="back-home"
          >
            ← Back to Home
          </button>
        </motion.div>

        <motion.div
          className="auth-features"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Why Specter AI?</h3>
          <ul>
            <li>
              <span className="feature-check">✓</span>
              <div>
                <strong>75% Faster</strong>
                <p>Complete legal research in record time</p>
              </div>
            </li>
            <li>
              <span className="feature-check">✓</span>
              <div>
                <strong>Bank-Level Security</strong>
                <p>SOC 2 certified with end-to-end encryption</p>
              </div>
            </li>
            <li>
              <span className="feature-check">✓</span>
              <div>
                <strong>AI-Powered</strong>
                <p>Advanced NLP trained on millions of cases</p>
              </div>
            </li>
            <li>
              <span className="feature-check">✓</span>
              <div>
                <strong>Trusted by 1000+</strong>
                <p>Law firms and legal departments worldwide</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Auth;
