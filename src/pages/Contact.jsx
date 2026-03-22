import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Briefcase, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setStatus('loading');
    
    const submitData = new FormData();
    submitData.append('access_key', '9c73a469-468d-426f-8856-8b4c3e440e1f');
    submitData.append('name', formData.name);
    submitData.append('email', formData.email);
    submitData.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitData
      });
      const result = await response.json();
      
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage('Failed to send message. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error occurred. Try again later.');
    }

    // Auto-clear status
    setTimeout(() => {
      if (status !== 'loading') setStatus('idle');
    }, 5000);
  };

  const pageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, staggerChildren: 0.2 } },
    exit: { opacity: 0, x: 50, transition: { duration: 0.5 } }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="contact-page section-padding"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageVariants}
    >
      <div className="section-container">
        <motion.div variants={childVariants} className="contact-header text-center">
          <h1>Get In Touch</h1>
          <p>Have a question, project idea, or just want to say hi? I'd love to hear from you!</p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Form */}
          <motion.div variants={childVariants} className="contact-form-wrapper glass">
            <h2>Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <motion.input 
                  whileFocus={{ scale: 1.02, borderColor: '#00e5ff' }}
                  type="text" id="name" name="name" 
                  value={formData.name} onChange={handleChange}
                  placeholder="Enter your name" required 
                />
              </div>
              <div class="form-group">
                <label htmlFor="email">Your Email</label>
                <motion.input 
                  whileFocus={{ scale: 1.02, borderColor: '#00e5ff' }}
                  type="email" id="email" name="email" 
                  value={formData.email} onChange={handleChange}
                  placeholder="Enter your email" required 
                />
              </div>
              <div class="form-group">
                <label htmlFor="message">Your Message</label>
                <motion.textarea 
                  whileFocus={{ scale: 1.02, borderColor: '#00e5ff' }}
                  id="message" name="message" rows="6" 
                  value={formData.message} onChange={handleChange}
                  placeholder="Write your message here..." required 
                />
              </div>
              
              <motion.button 
                type="submit" 
                className="btn btn-primary submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? <Loader2 className="spinner" /> : <><Send size={18} /> Send Message</>}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={childVariants} className="contact-info-wrapper">
            <div className="info-cards glass">
              <h2>Contact Information</h2>
              <motion.div whileHover={{ x: 10 }} className="info-item">
                <Mail className="text-cyan info-icon" size={32} />
                <div>
                  <h3>Email</h3>
                  <p>paulanik055@gmail.com</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 10 }} className="info-item">
                <MapPin className="text-pink info-icon" size={32} />
                <div>
                  <h3>Location</h3>
                  <p>Assam, India</p>
                </div>
              </motion.div>
              <motion.div whileHover={{ x: 10 }} className="info-item">
                <Briefcase className="text-cyan info-icon" size={32} />
                <div>
                  <h3>Availability</h3>
                  <p>Open for collaborations & projects</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Status Toasts via Framer Motion AnimatePresence */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div 
            className="toast toast-success glass"
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
          >
            <CheckCircle size={24} /> Message Sent Successfully!
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div 
            className="toast toast-error glass"
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
          >
            <XCircle size={24} /> {errorMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Contact;
