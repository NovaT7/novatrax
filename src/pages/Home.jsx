import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import FlipTextCycle from '../components/FlipText';
import './Home.css';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const SKILLS = [
  { icon: '⌨️', title: 'Core Programming', desc: 'Strong foundation in systems and algorithmic programming.', tag: 'C · C++ · Java · Python', color: '#f59e0b' },
  { icon: '💻', title: 'Web Development', desc: 'Building interactive and responsive web experiences.', tag: 'HTML · CSS · JS', color: '#10b981' },
  { icon: '🎨', title: 'UI/UX & Design', desc: 'Crafting intuitive user experiences and striking visuals.', tag: 'Figma · Photoshop · UI/UX', color: '#8b5cf6' },
  { icon: '🎮', title: 'Game Development', desc: 'Developing immersive games from concept to interactive products.', tag: 'Godot', color: '#0de7f2' },
];

const MARQUEE = ['GAME DEV', '•', 'GRAPHIC DESIGN', '•', 'WEB DEV', '•', 'VIDEO EDIT', '•', 'CREATOR', '•', 'INDIE DEV', '•'];

export default function Home() {
  const [mousePos, setMousePos] = React.useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  React.useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const xOffset = (mousePos.x - window.innerWidth / 2) * 0.04;
  const yOffset = (mousePos.y - window.innerHeight / 2) * 0.04;

  return (
    <motion.div className="home-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>

      {/* ════════════════════════════
          HERO — exact VengenceUI layout
      ════════════════════════════ */}
      <section className="hero">
        {/* Subtle ambient blobs */}
        <motion.div 
          className="hero-glow hero-glow-1" 
          animate={{ x: xOffset, y: yOffset }} 
          transition={{ type: 'spring', stiffness: 50, damping: 20 }} 
        />
        <motion.div 
          className="hero-glow hero-glow-2" 
          animate={{ x: -xOffset * 1.5, y: -yOffset * 1.5 }} 
          transition={{ type: 'spring', stiffness: 50, damping: 20 }} 
        />

        <div className="hero-body">
          {/* Badge — like VengenceUI's "Backed by Vercel" */}
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="hero-badge">
            <span className="badge-pulse" />&nbsp; Based in Assam, India
          </motion.div>

          {/* Giant layered headline — VengenceUI exact typographic feel */}
          <motion.div className="hero-headline" custom={1} variants={fadeUp} initial="hidden" animate="visible">
            <div className="hero-line hero-line-1">
              Create{' '}
              <span className="hero-line-highlight">immersive</span>
            </div>
            <div className="hero-line hero-line-2">
              games &amp; worlds
            </div>
            <div className="hero-line hero-line-3">
              with <FlipTextCycle texts={['creativity', 'precision', 'passion', 'code']} className="flip-accent" /> and flair
            </div>
          </motion.div>

          {/* Sub text */}
          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="hero-sub">
            Game developer, graphic designer, and creator. I craft digital{' '}
            experiences that blend immersive gameplay with striking visuals.
          </motion.p>

          {/* CTA */}
          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="hero-cta">
            <a href="#games" className="btn-hero-primary">View My Games</a>
            <Link to="/contact" className="btn-hero-outline">Let's Connect →</Link>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════
          Marquee Strip
      ════════════════════════════ */}
      <div className="marquee-strip" aria-hidden>
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((w, i) => (
            <span key={i} className={w === '•' ? 'mdot' : 'mword'}>{w}</span>
          ))}
        </div>
      </div>

      {/* ════════════════════════════
          What I Do
      ════════════════════════════ */}
      <motion.section className="section-padding" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
        <div className="section-container">
          <motion.div variants={fadeUp}>
            <p className="section-eyebrow">What I Do</p>
            <h2 className="section-title">Crafting experiences<br />that stand out.</h2>
            <div className="section-underline" />
          </motion.div>
          <div className="skills-grid">
            {SKILLS.map((s, i) => (
              <motion.div key={s.title} custom={i} variants={fadeUp}>
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.015} transitionSpeed={2500} style={{ height: '100%' }}>
                  <div className="skill-card" style={{ '--c': s.color }}>
                    <div className="skill-icon">{s.icon}</div>
                    <h3 className="skill-title">{s.title}</h3>
                    <p className="skill-desc">{s.desc}</p>
                    <span className="skill-tag">{s.tag}</span>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ════════════════════════════
          My Games
      ════════════════════════════ */}
      <motion.section id="games" className="section-padding section-alt" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
        <div className="section-container">
          <motion.div variants={fadeUp}>
            <p className="section-eyebrow">My Projects & Games</p>
            <h2 className="section-title">Shipped &amp; coming soon.</h2>
            <div className="section-underline" />
          </motion.div>
          <div className="games-grid">
            {/* Medichat AI */}
            <motion.div variants={fadeUp}>
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.015} transitionSpeed={2000} style={{ height: '100%' }}>
                <div className="game-card">
                  <div className="game-img-box">
                    <div className="game-img-placeholder" style={{ background: 'linear-gradient(45deg, #10b981, #0de7f2)', color: '#fff' }}>🤖</div>
                    <span className="gbadge gbadge-live">Live AI</span>
                  </div>
                  <div className="game-body">
                    <h3>Medichat AI</h3>
                    <p>An intelligent medical assistant AI ready to help you with health-related queries.</p>
                    <a href="https://medichat-ai.netlify.app/" target="_blank" rel="noopener noreferrer" className="game-btn-primary">Try Medichat AI ↗</a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
            {/* Tiny Trax */}
            <motion.div variants={fadeUp}>
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.015} transitionSpeed={2000} style={{ height: '100%' }}>
                <div className="game-card">
                  <div className="game-img-box">
                    <img src="/tiny.png" alt="Tiny Trax 2D" className="game-img" />
                    <span className="gbadge gbadge-live">Available</span>
                  </div>
                  <div className="game-body">
                    <h3>Tiny Trax 2D</h3>
                    <p>A high-octane neon platformer designed for precision movement and visual flair.</p>
                    <a href="/game/tiny-trax-2d.apk" download className="game-btn-primary">Download APK ↓</a>
                  </div>
                </div>
              </Tilt>
            </motion.div>
            {/* Tenma */}
            <motion.div variants={fadeUp}>
              <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} scale={1.015} transitionSpeed={2000} style={{ height: '100%' }}>
                <div className="game-card">
                  <div className="game-img-box">
                    <img src="/images/20251025_233436.jpg" alt="Legend of Tenma" className="game-img" />
                    <span className="gbadge gbadge-soon">Coming Soon</span>
                  </div>
                  <div className="game-body">
                    <h3>The Legend of Tenma</h3>
                    <p>A mythical 2D adventure through ancient Japan — story-driven and visually stunning.</p>
                    <button className="game-btn-locked" disabled>Wishlist (Locked) 🔒</button>
                  </div>
                </div>
              </Tilt>
            </motion.div>
            {/* TBA */}
            <motion.div variants={fadeUp}>
              <div className="game-card game-card-tba">
                <div className="game-img-placeholder">?</div>
                <div className="game-body" style={{ textAlign: 'center' }}>
                  <h3>Project TBA</h3>
                  <p style={{ fontStyle: 'italic' }}>Something epic is currently in the forge...</p>
                  <div className="tba-tag">STATUS: TBA</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ════════════════════════════
          Graphics Gallery
      ════════════════════════════ */}
      <motion.section id="graphics" className="section-padding" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <div className="section-container">
          <p className="section-eyebrow">Graphics Gallery</p>
          <h2 className="section-title">Visuals that speak.</h2>
          <div className="section-underline" />
        </div>
        <div className="gfx-marquee">
          <div className="gfx-track">
            {['/images/giveawayposter1.png','/images/serdipc.png','/images/new.png','/images/serqr.png','/images/shedinbest.png','/images/Tournament 2.png',
              '/images/giveawayposter1.png','/images/serdipc.png','/images/new.png','/images/serqr.png','/images/shedinbest.png','/images/Tournament 2.png',
            ].map((src, i) => (
              <div key={i} className="gfx-item">
                <img src={src} alt="" className="gfx-img" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ════════════════════════════
          CTA banner
      ════════════════════════════ */}
      <motion.section className="section-padding section-alt" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="section-container">
          <div className="cta-card">
            <p className="section-eyebrow">Get In Touch</p>
            <h2 className="cta-title">Have a project in mind?<br />Let's build it together.</h2>
            <p className="cta-sub">Open for game dev collabs, design projects, and freelance work.</p>
            <Link to="/contact" className="btn-hero-primary">Start a Conversation →</Link>
          </div>
        </div>
      </motion.section>

    </motion.div>
  );
}
