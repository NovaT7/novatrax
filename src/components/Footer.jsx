import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h4>About Anik</h4>
          <p>Passionate indie game developer and graphic designer creating unique digital experiences with a neon cyber aesthetic.</p>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/help">Help</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4>Contact Info</h4>
          <div className="contact-info">
            <p><Mail size={16} /> paulanik055@gmail.com</p>
            <p><MapPin size={16} /> Assam, India</p>
          </div>
        </motion.div>

        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4>Follow Me</h4>
          <div className="social-links">
            <motion.a whileHover={{ y: -5, color: '#00e5ff' }} href="#"><Facebook size={24} /></motion.a>
            <motion.a whileHover={{ y: -5, color: '#00e5ff' }} href="#"><Twitter size={24} /></motion.a>
            <motion.a whileHover={{ y: -5, color: '#ff0055' }} href="#"><Instagram size={24} /></motion.a>
            <motion.a whileHover={{ y: -5, color: '#ff0055' }} href="#"><Youtube size={24} /></motion.a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p>&copy; {new Date().getFullYear()} Anik's Game Hub. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
