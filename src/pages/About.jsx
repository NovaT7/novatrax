import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, BookOpen, Code, Palette, Video, PenTool } from 'lucide-react';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div 
      className="about-page"
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0 }}
      variants={containerVariants}
    >
      <section className="about-hero-section">
        <motion.div variants={itemVariants} className="about-hero-content">
          <h1>About Me</h1>
          <p className="subtitle">Fresh Indie Developer | Creative Designer | Self-Taught Coder</p>
        </motion.div>
      </section>

      <section className="about-content-section section-padding">
        <div className="section-container">
          
          <motion.div variants={itemVariants} className="about-block glass">
            <h2>Who I Am</h2>
            <p>Hey there! I'm <strong>Anik Paul</strong>, a 20-year-old indie game developer and graphic designer based in Assam, India. I'm a completely self-taught creator who believes in learning by doing and coding for the pure joy of it.</p>
            <p>My journey into the world of digital creation began in 2021 when I started exploring graphic design and editing. What started as a curiosity quickly turned into a passion that fuels everything I do today.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="about-block">
            <h2>What I Do</h2>
            <div className="skills-grid">
              <motion.div whileHover={{ scale: 1.05 }} className="skill-card glass border-neon">
                <Code className="skill-icon text-cyan" size={40} />
                <h3>Game Development</h3>
                <p>I create games using <strong>Unity</strong> and <strong>Godot</strong>, bringing unique ideas to life. Currently working on my dream project: <em>The Legend of Tenma</em>, a 2D adventure game with a Japanese theme.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="skill-card glass border-neon">
                <Palette className="skill-icon text-pink" size={40} />
                <h3>Graphic Design</h3>
                <p>Expert in <strong>Photoshop</strong> and <strong>Illustrator</strong>, I've been crafting stunning visuals since 2021. From 2D designs to 3D edits, I love pushing creative boundaries.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="skill-card glass border-neon">
                <Video className="skill-icon text-cyan" size={40} />
                <h3>Video Editing</h3>
                <p>I create engaging video content and cinematic edits. Whether it's gameplay trailers or creative montages, I bring stories to life through motion.</p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="skill-card glass border-neon">
                <PenTool className="skill-icon text-pink" size={40} />
                <h3>Programming</h3>
                <p>Proficient in <strong>C, C++, Java, Python, HTML, CSS, and JavaScript</strong>. I love coding and learning new technologies to expand my toolkit.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="about-block glass">
            <h2>What Inspires Me</h2>
            <p>I'm deeply inspired by puzzle-adventure games like <strong>Assassin's Creed Mirage</strong> and Japanese-themed action games like <strong>Shadow Fight 2</strong> and <strong>Ninja Arashi 2</strong>. These games showed me how creativity, storytelling, and mechanics can create unforgettable experiences.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="about-block highlight-block glass">
            <h2>My Philosophy</h2>
            <p className="quote">"I do and learn for fun."</p>
            <p>That's my mantra. I believe the best creations come from pure passion and curiosity. Being self-taught has taught me that limitations are just opportunities to innovate.</p>
          </motion.div>

        </div>
      </section>
    </motion.div>
  );
};

export default About;
