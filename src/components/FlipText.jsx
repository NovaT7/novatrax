import React from 'react';
import { motion } from 'framer-motion';
import './FlipText.css';

const DURATION = 0.3;
const STAGGER = 0.04;

const FlipText = ({ text }) => {
  return (
    <motion.span
      initial="initial"
      animate="hovered"
      className="flip-text-wrapper"
    >
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          variants={{
            initial: { rotateX: 0 },
            hovered: { rotateX: 0 },
          }}
          className="flip-char"
          style={{ '--index': i }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

/**
 * FlipTextCycle - Cycles between two texts with a flip effect on a timer.
 * Used for "Anik Paul" ↔ "Web Designer"
 */
const FlipTextCycle = ({ texts = [], className = '' }) => {
  const [index, setIndex] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setVisible(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const currentText = texts[index];

  return (
    <span className={`flip-cycle-wrapper ${className}`} aria-label={currentText}>
      {currentText.split('').map((char, i) => (
        <motion.span
          key={`${index}-${i}`}
          className="flip-char-animated"
          initial={{ rotateX: -90, opacity: 0, y: -10 }}
          animate={visible ? { rotateX: 0, opacity: 1, y: 0 } : { rotateX: 90, opacity: 0, y: 10 }}
          transition={{
            duration: DURATION,
            delay: visible ? i * STAGGER : (currentText.length - i) * STAGGER * 0.5,
            ease: [0.23, 1, 0.32, 1],
          }}
          style={{ display: 'inline-block', transformOrigin: '50% 100%' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};

export { FlipText, FlipTextCycle };
export default FlipTextCycle;
