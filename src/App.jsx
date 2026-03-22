import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Loader from './components/Loader';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Login from './pages/Login';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function AppInner() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <div key="app" className="app-container">
            <div className="space-grid-overlay" />
            <Navbar />
            <AnimatePresence mode="wait">
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/help" element={<Help />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </main>
            </AnimatePresence>
            <Footer />
            <Chatbot />
          </div>
        )}
      </AnimatePresence>
    </Router>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}

export default App;
