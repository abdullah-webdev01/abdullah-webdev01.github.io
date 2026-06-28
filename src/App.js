import React, { useState, useEffect } from 'react';
// ===== INPORTS MEIN INSTAGRAM AUR FACEBOOK ADD KAR DIYE HAIN =====
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaReact, FaJava, FaPython, FaDatabase, FaArrowUp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { SiJavascript, SiBootstrap, SiCplusplus } from 'react-icons/si';
import profilePic from './pic.png'; // Apni photo ka naam yahan likhein

function App() {
  // ===== STATE FOR BACK TO TOP BUTTON =====
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ===== FUNCTION: SCROLL TO TOP =====
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ===== CV DOWNLOAD =====
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Abdullah_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ===== CONTACT FORM =====
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("❗ Please fill in all fields before sending.");
      return;
    }

    const subject = `Portfolio Message from ${encodeURIComponent(name)}`;
    const body = `Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
    const mailtoLink = `mailto:theabdullah.webdev@gmail.com?subject=${subject}&body=${body}`;

    window.open(mailtoLink, '_blank');
    alert("✅ Your email client is opening! Please hit send to complete.");
    form.reset();
  };

  return (
    <div className="app-root">
      <div className="particles-bg"></div>

      {/* ===== BACK TO TOP BUTTON ===== */}
      {showTopBtn && (
        <button onClick={scrollToTop} className="back-to-top" aria-label="Back to top">
          <FaArrowUp />
        </button>
      )}

      <nav className="navbar">
        <div className="logo">Abdullah</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="main-content">
        <div className="container">

          {/* HERO */}
          <section className="hero" id="home">
            <h1>Hi, I'm <span>Abdullah</span></h1>
            <div className="tagline">BS Software Engineering Graduate</div>
            <p>I build modern, interactive web applications using <strong>React.js</strong>, Java, Python, and Bootstrap.</p>
            <div className="btn-group">
              <button onClick={handleDownloadCV} className="btn-primary">📄 Download CV</button>
              <a href="#contact" className="btn-secondary">💬 Contact Me</a>
            </div>
          </section>

          {/* ABOUT */}
          <section className="section" id="about">
            <div className="about-grid">
              <div className="about-text">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">Passionate developer dedicated to crafting digital experiences.</p>
                <p>I'm a recent graduate from PMAS-Arid Agriculture University with a strong foundation in full-stack development.</p>
                <div className="stats">
                  <div className="stat-item"><div className="stat-number">2+</div><div className="stat-label">Projects</div></div>
                  <div className="stat-item"><div className="stat-number">1</div><div className="stat-label">Experience</div></div>
                  <div className="stat-item"><div className="stat-number">5+</div><div className="stat-label">Tech Stack</div></div>
                </div>
              </div>
              <div className="profile-pic-placeholder">
                <img src={profilePic} alt="Abdullah" className="profile-img" />
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section className="section" id="skills">
            <h2 className="section-title">My Skills</h2>
            <p className="section-subtitle">Tools & technologies I work with.</p>
            <div className="skills-grid">
              {['React.js', 'JavaScript', 'Java', 'Python', 'Bootstrap', 'SQL', 'C++', 'HTML/CSS'].map((skill) => (
                <div key={skill} className="skill-card">
                  <div className="icon">
                    {skill === 'React.js' && <FaReact />}
                    {skill === 'JavaScript' && <SiJavascript />}
                    {skill === 'Java' && <FaJava />}
                    {skill === 'Python' && <FaPython />}
                    {skill === 'Bootstrap' && <SiBootstrap />}
                    {skill === 'SQL' && <FaDatabase />}
                    {skill === 'C++' && <SiCplusplus />}
                    {skill === 'HTML/CSS' && <span>🌐</span>}
                  </div>
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section className="section" id="projects">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">Some of the work I've done.</p>
            <div className="project-grid">
              <div className="project-card">
                <h3>📚 Thesis Management System</h3>
                <p>A platform for MS students to track their thesis progress.</p>
                <div className="project-tech">  <span>Next.js</span>
  <span>TypeScript</span>
  <span>Prisma</span>
  <span>Tailwind CSS</span></div>
                <a href="https://github.com/abdullah-webdev01/Research-Connect" className="project-link" target="_blank" rel="noreferrer">🔗 Repo →</a>
              </div>
              <div className="project-card">
  <h3>👑 Princess Birthday Memory</h3>
  <p>Digital invitation &amp; memory archive for a 1st birthday with guest interactions and admin dashboard.</p>
  <div className="project-tech">
    <span>React</span>
    <span>FastAPI</span>
    <span>Supabase</span>
    <span>Tailwind</span>
  </div>
  <a href="https://github.com/abdullah-webdev01/princess-birthday" className="project-link" target="_blank" rel="noreferrer">🔗 Repo →</a>
</div>
            </div>
          </section>

          {/* ===== CONTACT SECTION ===== */}
          <section className="section" id="contact">
            <h2 className="section-title">Let's Connect</h2>
            <p className="section-subtitle">I'm always open to new opportunities.</p>
            <div className="contact-grid">
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <a href="mailto:theabdullah.webdev@gmail.com"><FaEnvelope /> theabdullah.webdev@gmail.com</a>
                <a href="https://wa.me/923092728992" target="_blank" rel="noreferrer"><FaWhatsapp /> +92 309 2728992</a>
                <a href="https://github.com/abdullah-webdev01" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
                <a href="https://www.linkedin.com/in/abdullah-webdev01/" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
                
                
                <a href="https://instagram.com/gujjar123_786" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a>
                <a href="https://www.facebook.com/abdullah.gujjar.503645" target="_blank" rel="noreferrer"><FaFacebook /> Facebook</a>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message..." required></textarea>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message 🚀</button>
              </form>
            </div>
          </section>

          {/* ===== FOOTER (Bilkul Last Main - Yahan bhi Social Icons daal diye) ===== */}
          <footer className="footer">
            <div style={{ marginBottom: '10px' }}>
              <a href="https://github.com/abdullah-webdev01" target="_blank" rel="noreferrer" style={{ color: '#a0a0a0', margin: '0 10px', fontSize: '1.2rem' }}><FaGithub /></a>
              <a href="https://www.linkedin.com/in/abdullah-webdev01/" target="_blank" rel="noreferrer" style={{ color: '#a0a0a0', margin: '0 10px', fontSize: '1.2rem' }}><FaLinkedin /></a>
              <a href="https://instagram.com/gujjar123_786" target="_blank" rel="noreferrer" style={{ color: '#a0a0a0', margin: '0 10px', fontSize: '1.2rem' }}><FaInstagram /></a>
              <a href="https://www.facebook.com/abdullah.gujjar.503645" target="_blank" rel="noreferrer" style={{ color: '#a0a0a0', margin: '0 10px', fontSize: '1.2rem' }}><FaFacebook /></a>
            </div>
            <span>© 2025 Abdullah. Built with React </span>
          </footer>

        </div>
      </div>
    </div>
  );
}
export default App;