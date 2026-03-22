import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn, UserPlus } from 'lucide-react';
import './Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { duration: 0.5, type: 'spring' } 
    },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      className="login-page section-padding"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <div className="login-container glass">
        <div className="login-header">
          <h2>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
          <p>{isLogin ? 'Log in to sync your game progress' : 'Join the Hub to save your creations'}</p>
        </div>

        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <motion.input 
                whileFocus={{ scale: 1.02, borderColor: '#00e5ff' }}
                type="text" id="username" placeholder="Choose a username" 
              />
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="auth-email">Email</label>
            <motion.input 
              whileFocus={{ scale: 1.02, borderColor: '#00e5ff' }}
              type="email" id="auth-email" placeholder="Enter your email" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="auth-password">Password</label>
            <motion.input 
              whileFocus={{ scale: 1.02, borderColor: '#00e5ff' }}
              type="password" id="auth-password" placeholder="Enter your password" 
            />
          </div>

          <motion.button 
            type="submit" 
            className="btn btn-primary w-full login-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLogin ? <><LogIn size={18} /> Login</> : <><UserPlus size={18} /> Sign Up</>}
          </motion.button>
        </form>

        <div className="login-footer">
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <span 
              className="toggle-auth text-cyan"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
