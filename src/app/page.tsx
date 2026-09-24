"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Monitor,
  Phone,
  Search,
  ShieldCheck,
  Utensils,
  Users,
  X,
} from "lucide-react";

const heroImages = [
  "/images/graduation.jpg",
  "/images/prefect-speech.png",
  "/images/students-campus.webp",
];

const staff = [
  {
    name: "Mr. Agaba Redeemer",
    role: "DOS - UNEB",
    image: "https://hanainternational.ac.ug/wp-content/uploads/2026/08/redimer-225x300.jpeg",
    detail: "The Director of Studies office is committed to academic excellence and student development.",
  },
  {
    name: "Ms. Mildred Chekwech",
    role: "DOS - Cambridge",
    image: "https://hanainternational.ac.ug/wp-content/uploads/2026/05/mildren-225x300.jpg",
    detail: "The Dean of Students’ office is dedicated to academic excellence and holistic development.",
  },
  {
    name: "Mr. Ssentongo Denis",
    role: "Quality Assurance Officer",
    image: "https://hanainternational.ac.ug/wp-content/uploads/2024/11/MR-SSENTONGO.jpeg",
    detail: "The Quality Assurance Office upholds high standards in student development and learning.",
  },
];

const notices = [
  {
    title: "Candidates’ Dedication 2024",
    category: "Dedication",
    image: "/images/prefect-speech.png",
    copy: "Candidates in prayer, dedication in action — success is the goal.",
  },
  {
    title: "Candidates’ Prom Party 2025",
    category: "Prom Party",
    image: "https://hanainternational.ac.ug/wp-content/uploads/2026/02/prom-1536x2048.jpeg",
    copy: "Where style meets celebration, and memories are made to last a lifetime!",
  },
  {
    title: "Sports Day Celebrations",
    category: "Sports",
    image: "https://hanainternational.ac.ug/wp-content/uploads/2026/04/20260406_094353-1463x2048.jpg",
    copy: "Teamwork, discipline, and healthy competition help our students grow.",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", menuOpen);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="desktop-utility">
        <div className="site-width utility-inner">
          <div className="utility-links"><a href="#home">Home</a><a href="#staff">Staff</a><a href="#contact">Contact Us</a><a href="#about">About Hana</a></div>
          <div className="utility-social"><a aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noreferrer">f</a><a aria-label="X" href="https://x.com/HisuOfficial" target="_blank" rel="noreferrer">♥</a><a aria-label="Instagram" href="https://instagram.com/hanaintschooluganda" target="_blank" rel="noreferrer">◎</a></div>
        </div>
      </div>
      <div className="desktop-brand"><div className="site-width desktop-brand-inner"><span>Hana International School Uganda</span><small>In God We Trust</small></div></div>
      <header className="main-header">
        <div className="mobile-header-inner">
          <a className="mobile-wordmark" href="#home" aria-label="Home">HISU</a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={25} /> : <Menu size={29} />}
          </button>
        </div>
        <nav className={`primary-nav ${menuOpen ? "primary-nav-open" : ""}`} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Hana</a>
          <a href="#admissions" onClick={closeMenu}>Admission</a>
          <a href="#mission" onClick={closeMenu}>Curriculum</a>
          <a href="#life" onClick={closeMenu}>School</a>
          <a href="#contact" onClick={closeMenu}>Contact Us</a>
        </nav>
      </header>
    </>
  );
}

function Hero({ onCambridgeClick }: { onCambridgeClick: () => void }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setImageIndex((index) => (index + 1) % heroImages.length), 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home" aria-label="Welcome to Hana International School Uganda">
      {heroImages.map((image, index) => (
        <div key={image} className={`hero-image ${index === imageIndex ? "hero-image-active" : ""}`} style={{ backgroundImage: `url("${image}")` }} aria-hidden="true" />
      ))}
      <div className="hero-tint" />
      <div className="hero-content">
        <h1>A BETTER<br />EDUCATION<br className="mobile-break" /> FOR A BETTER WORLD</h1>
        <p className="hero-description">An integrated school in Nsangi, Uganda, focused on academic excellence and personal growth. HISU offers a nurturing environment with dedicated teachers and support staff. Our commitment ensures each student’s well-being and development in all aspects</p>
        <p className="hero-codes"><span>CENTRE NO. <b><u>U4146</u></b></span><span>SELECTION CODE: <b><u>2661</u></b></span></p>
        <div className="hero-actions" id="admissions">
          <a href="https://hanainternational.ac.ug/admissions/join-uneb/" target="_blank" rel="noreferrer" className="join-button"><GraduationCap aria-hidden="true" /><span>JOIN UNEB</span></a>
          <button className="join-button" onClick={onCambridgeClick}><GraduationCap aria-hidden="true" /><span>JOIN CAMBRIDGE</span></button>
        </div>
      </div>
      <div className="hero-dots" aria-label="Choose background image">
        {heroImages.map((image, index) => <button key={image} onClick={() => setImageIndex(index)} className={index === imageIndex ? "active" : ""} aria-label={`Show school photo ${index + 1}`} />)}
      </div>
    </section>
  );
}

function StatCard() {
  return (
    <section className="stats-section" aria-labelledby="stats-title">
      <div className="site-width">
        <h2 id="stats-title" className="section-title stats-title">We Are HISU</h2>
        <div className="stats-card">
          <div className="stat"><span className="stat-label">Years of Experience</span><strong>23</strong></div>
          <div className="stat"><span className="stat-label">Happy Learners</span><strong>730</strong></div>
          <div className="stat"><span className="stat-label">Experienced Staff Members</span><strong>111</strong></div>
        </div>
      </div>
    </section>
  );
}

function PurposeSection() {
  return (
    <section id="mission" className="purpose-section" aria-label="Our mission, motto and vision">
      <article className="purpose-item">
        <div className="purpose-copy"><h2>OUR MISSION</h2><p>Hana International School Uganda – Nsangi is dedicated to enhancing the educational experience of young adolescents by providing vision, knowledge, and resources to all students, fostering the development of productive and ethical citizens.</p></div>
        <BookOpen className="purpose-icon" strokeWidth={2.5} aria-hidden="true" />
      </article>
      <article className="purpose-item">
        <Search className="purpose-icon" strokeWidth={2.5} aria-hidden="true" />
        <div className="purpose-copy"><h2>OUR MOTTO</h2><p>In God We Trust</p></div>
      </article>
      <article className="purpose-item purpose-last">
        <div className="purpose-copy"><h2>OUR VISION</h2><p>To provide the best quality education that ensures satisfaction of our customers and other stake holders.</p></div>
        <Monitor className="purpose-icon" strokeWidth={2.5} aria-hidden="true" />
      </article>
    </section>
  );
}

function Home() {
  const [announcementOpen, setAnnouncementOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("modal-open", announcementOpen);
    return () => document.body.classList.remove("modal-open");
  }, [announcementOpen]);

  return (
    <main className="school-site">
      <Header />
      <Hero onCambridgeClick={() => setAnnouncementOpen(true)} />
      <StatCard />

      <section className="welcome-section" id="about">
        <div className="site-width welcome-inner">
          <h2 className="welcome-title"><span className="welcome-to">Welcome to</span><span className="welcome-school">Hana International School,<br className="welcome-break" /> Uganda</span></h2>
          <p className="welcome-copy">Hana International School Uganda (HISU) is an integrated school in Nsangi, Uganda, focused on academic excellence and personal growth. Just 30 minutes from Kampala, HISU offers a nurturing environment with dedicated teachers and support staff. Our commitment ensures each student’s well-being and development in all aspects</p>
          <img className="welcome-photo" src="/images/students-campus.webp" alt="Students at Hana International School Uganda" />
        </div>
      </section>

      <PurposeSection />

      <section className="principal-message">
        <div className="site-width">
          <h2 className="section-title">Message from the Principal - UNEB</h2>
          <div className="principal-layout">
            <img src="https://hanainternational.ac.ug/wp-content/uploads/2024/11/HM-1.jpg" alt="Kimera Abdul Karim, Head Teacher" loading="lazy" onError={(event) => { event.currentTarget.src = "/images/prefect-speech.png"; }} />
            <div className="principal-copy"><p>Dear Parents,</p><p>On behalf of the staff at Hana International School, I am happy to welcome you to the 2026 school year! Our mission is to provide each child with the highest quality education possible so that each student will graduate with the skills needed to contribute and thrive in a changing world.</p><p>We look forward to a productive partnership with you to ensure our children can achieve their highest potential. Every child is valued and cared for at Hana International School.</p><p><b>Kimera Abdul Karim, Head Teacher.</b></p></div>
          </div>
        </div>
      </section>

      <section className="principal-message cambridge-message">
        <div className="site-width">
          <h2 className="section-title">Message from the Principal - Cambridge</h2>
          <div className="principal-layout reverse-principal">
            <img src="https://hanainternational.ac.ug/wp-content/uploads/2026/02/Abigail-e1771505320348.jpeg" alt="Ms. Atwemereireho Abigail, Head of School" loading="lazy" onError={(event) => { event.currentTarget.src = "/images/students-campus.webp"; }} />
            <div className="principal-copy"><p>Dear Parents,</p><p>We are looking forward to a productive partnership with you to ensure our children can achieve their highest potential. Together, we share the responsibility for our children’s success and will do our very best to support them.</p><p><b>Ms. Atwemereireho Abigail, Head of School.</b></p></div>
          </div>
        </div>
      </section>

      <section className="best-child-section" id="life">
        <div className="best-child-image" />
        <div className="best-child-text"><h2>We Are The Best For Your Child</h2><p>Choose Hana International School Uganda for a balanced education that nurtures academic excellence and personal growth. With dedicated staff and a supportive environment, we prepare students for a bright future.</p><a href="https://hanainternational.ac.ug/admissions/" target="_blank" rel="noreferrer" className="apply-button">APPLY NOW <ArrowRight size={18} /></a></div>
      </section>

      <section className="offers-section">
        <div className="site-width"><h2 className="section-title">What We Offer For Your Child</h2><div className="offers-grid">
          <article><ShieldCheck /><h3>Safety and Security</h3><p>HISU is equipped with secure facilities, round-the-clock trained staff, and surveillance systems, ensuring a safe environment where students feel protected at all times.</p></article>
          <article><BookOpen /><h3>Conducive Environment</h3><p>Our well-maintained campus offers an ideal atmosphere for both learning and relaxation, helping students feel comfortable and focused.</p></article>
          <article><Users /><h3>Experienced and Supportive Staff</h3><p>Our dedicated teachers and dorm staff are committed to fostering both academic success and personal growth.</p></article>
          <article><Utensils /><h3>Nutritious Meals</h3><p>We provide a variety of healthy, balanced meals to support students’ growth, energy, and concentration.</p></article>
        </div></div>
      </section>

      <section className="team-section" id="staff">
        <div className="site-width"><h2 className="section-title">Message from the Senior Management Team</h2><div className="team-grid">
          {staff.map((person) => <article className="team-card" key={person.name}><img src={person.image} alt={person.name} loading="lazy" onError={(event) => { event.currentTarget.src = "/images/prefect-speech.png"; }} /><div><h3>{person.name}</h3><h4>{person.role}</h4><p>{person.detail}</p><a href="#contact">Read More</a></div></article>)}
        </div></div>
      </section>

      <section className="notices-section">
        <div className="site-width"><h2 className="section-title">NEWS &amp; NOTICES</h2><div className="notices-grid">
          {notices.map((notice) => <article className="notice-card" key={notice.title}><img src={notice.image} alt={notice.title} loading="lazy" onError={(event) => { event.currentTarget.src = "/images/students-campus.webp"; }} /><div><h3>{notice.title}</h3><h4>{notice.category}</h4><p>{notice.copy}</p><a href="https://hanainternational.ac.ug/students-life/" target="_blank" rel="noreferrer">Read More <ArrowRight size={15} /></a></div></article>)}
        </div></div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="site-width footer-grid">
          <div className="footer-intro"><h2>Welcome to Hana International School, Uganda</h2><p>An integrated school in Nsangi, Uganda, focused on academic excellence and personal growth.</p></div>
          <div><h3>Our Contacts</h3><p>Hana International School Uganda</p><p><MapPin size={15} /> Kampala – Masaka Rd, Nsangi Town</p><a href="tel:+256759766060"><Phone size={15} /> UNEB: 0759766060 | 0772987550</a><a href="tel:+256790010667"><Phone size={15} /> Cambridge: 0790010667 | 0758461002</a><a href="mailto:hanainternationalschool2023@gmail.com"><Mail size={15} /> hanainternationalschool2023@gmail.com</a></div>
          <div><h3>Important Links</h3><a href="#home">Home</a><a href="#about">About Us</a><a href="#admissions">Admissions</a><a href="#contact">Contact Us</a><a href="https://hanainternational.ac.ug/admissions/join-uneb/" target="_blank" rel="noreferrer">UNEB Section</a><a href="https://hanainternational.ac.ug/join-cambridge/" target="_blank" rel="noreferrer">Cambridge Section</a></div>
        </div>
        <div className="footer-bottom"><span>Copyright © 2026 Hana International School Uganda</span><span>In God We Trust</span></div>
      </footer>

      {announcementOpen && <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setAnnouncementOpen(false); }}><div className="announcement-dialog" role="dialog" aria-modal="true" aria-labelledby="cambridge-title"><button className="dialog-close" onClick={() => setAnnouncementOpen(false)} aria-label="Close"><X size={20} /></button><h2 id="cambridge-title">Big News! Cambridge Now Has a Day Section!</h2><p>Your child can now enjoy Cambridge’s world-class education during the day and be home with family every evening.</p><a href="https://hanainternational.ac.ug/cambridge/" target="_blank" rel="noreferrer" className="apply-button">Enroll Now <ArrowRight size={16} /></a><button className="dialog-dismiss" onClick={() => setAnnouncementOpen(false)}>No thanks, Maybe Later!</button></div></div>}
    </main>
  );
}

export default Home;
