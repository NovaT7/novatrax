import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronRight } from 'lucide-react';
import './Help.css';

const Help = () => {
  const faqs = [
    { q: "How do I download your games?", a: "Navigate to the Home page, scroll to the 'My Games' section, and click 'Download Now' on any released game. The APK or installer will start downloading." },
    { q: "What engines do you use?", a: "I primarily use Unity for 3D and complex projects, and Godot for fast, efficient 2D games." },
    { q: "Are your games free to play?", a: "Yes, currently all my indie titles, including Tiny Trax 2D, are completely free to play." },
    { q: "Can I use your graphic designs?", a: "My personal edits and graphics are copyrighted. If you want a specific design or collaboration, please use the Contact page to get in touch!" }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <motion.div 
      className="help-page section-padding"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-container help-container">
        <div className="help-header text-center">
          <HelpCircle size={64} className="text-cyan block mx-auto mb-4" />
          <h1>Help Center & FAQ</h1>
          <p>Find answers to common questions about Anik's games, designs, and downloads.</p>
        </div>

        <div className="faq-list glass">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              layout
            >
              <div className="faq-question">
                <h3>{faq.q}</h3>
                <motion.div 
                  animate={{ rotate: activeIndex === index ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronRight className="text-cyan" />
                </motion.div>
              </div>
              <motion.div 
                className="faq-answer"
                initial={false}
                animate={{ 
                  height: activeIndex === index ? 'auto' : 0, 
                  opacity: activeIndex === index ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
              >
                <p>{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Help;
