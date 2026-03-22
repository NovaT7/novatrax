import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Loader.css';

// Draws a twinkling starfield on a canvas element
const StarfieldCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.2,
      alpha: Math.random(),
      speed: Math.random() * 0.012 + 0.005,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0) star.speed *= -1;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(13, 231, 242, ${star.alpha * 0.8})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return <canvas ref={canvasRef} className="loader-starfield" />;
};

const Loader = () => {
  return (
    <motion.div
      className="loader-container"
      initial={{ y: 0 }}
      exit={{ y: '-100%' }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Twinkling Stars */}
      <StarfieldCanvas />

      {/* Atmospheric glow */}
      <div className="loader-glow" />

      {/* Content */}
      <motion.div
        className="loader-content"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Rocket Icon — animated launch */}
        <motion.div
          className="loader-rocket-wrapper"
          animate={{
            y: [0, -14, 0],
            rotate: [0, 3, -3, 0],
          }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        >
          {/* Rocket SVG (inline, no dependency needed) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className="loader-rocket-icon"
          >
            <path
              d="M12 2C12 2 7 6 7 13h10C17 6 12 2 12 2Z"
              fill="#0de7f2"
              opacity="0.9"
            />
            <path
              d="M9 13v4l3 3 3-3v-4H9Z"
              fill="#0de7f2"
            />
            <path
              d="M7 13c0 0-3 1-3 4h5"
              fill="#062d30"
              stroke="#0de7f2"
              strokeWidth="0.5"
            />
            <path
              d="M17 13c0 0 3 1 3 4h-5"
              fill="#062d30"
              stroke="#0de7f2"
              strokeWidth="0.5"
            />
            <circle cx="12" cy="9" r="1.5" fill="#000" stroke="#0de7f2" strokeWidth="0.8" />
            {/* Flame */}
            <motion.path
              d="M10 17 Q12 21 14 17"
              stroke="#0de7f2"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              animate={{ opacity: [1, 0.3, 1], scaleY: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 0.6 }}
              style={{ transformOrigin: 'bottom center' }}
            />
          </svg>
        </motion.div>

        {/* Logo Text */}
        <motion.h2
          className="loader-title"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Nova<span className="loader-accent">Trax</span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="loader-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Preparing for launch...
        </motion.p>

        {/* Progress bar */}
        <div className="loader-bar-track">
          <motion.div
            className="loader-bar-fill"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
