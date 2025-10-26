import { motion } from "framer-motion";
import "./LawBalanceIcon.css";

const LawBalanceIcon = ({ size = 120, animated = true }) => {
  const baseVariants = animated
    ? {
        initial: { rotate: -5 },
        animate: {
          rotate: 5,
          transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        },
      }
    : {};

  return (
    <div
      className="law-balance-container"
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="law-balance-svg"
      >
        {/* Base */}
        <motion.rect
          x="70"
          y="180"
          width="60"
          height="8"
          rx="2"
          fill="url(#goldGradient)"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />

        {/* Center Pole */}
        <motion.rect
          x="97"
          y="60"
          width="6"
          height="120"
          rx="3"
          fill="url(#goldGradient)"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "center bottom" }}
        />

        {/* Horizontal Bar */}
        <motion.rect
          x="40"
          y="67"
          width="120"
          height="4"
          rx="2"
          fill="url(#goldGradient)"
          {...baseVariants}
          style={{ transformOrigin: "center center" }}
        />

        {/* Left Scale Plate */}
        <motion.g {...baseVariants}>
          <motion.line
            x1="55"
            y1="69"
            x2="55"
            y2="95"
            stroke="url(#goldGradient)"
            strokeWidth="2"
          />
          <motion.ellipse
            cx="55"
            cy="100"
            rx="25"
            ry="5"
            fill="url(#goldGradient)"
            opacity="0.9"
          />
          <motion.path
            d="M 30 95 Q 30 90 35 90 L 75 90 Q 80 90 80 95 L 80 100 Q 80 105 75 105 L 35 105 Q 30 105 30 100 Z"
            fill="url(#goldGradient)"
          />
        </motion.g>

        {/* Right Scale Plate */}
        <motion.g {...baseVariants}>
          <motion.line
            x1="145"
            y1="69"
            x2="145"
            y2="95"
            stroke="url(#goldGradient)"
            strokeWidth="2"
          />
          <motion.ellipse
            cx="145"
            cy="100"
            rx="25"
            ry="5"
            fill="url(#goldGradient)"
            opacity="0.9"
          />
          <motion.path
            d="M 120 95 Q 120 90 125 90 L 165 90 Q 170 90 170 95 L 170 100 Q 170 105 165 105 L 125 105 Q 120 105 120 100 Z"
            fill="url(#goldGradient)"
          />
        </motion.g>

        {/* Top Ornament */}
        <motion.circle
          cx="100"
          cy="57"
          r="8"
          fill="url(#goldGradient)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
        />

        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f4d03f" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#b8932f" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Glow Effect */}
      <div className="balance-glow"></div>
    </div>
  );
};

export default LawBalanceIcon;
