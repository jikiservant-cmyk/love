"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  MapPin,
  Menu,
  Monitor,
  Search,
  ShieldCheck,
  Users,
  Utensils,
  X,
} from "lucide-react";

const heroImages = [
  "/images/kazo-pupils.jpg",
  "/images/kazo-classroom.jpg",
  "/images/kazo-tree-planting.jpg",
];

const schoolFacts = [
  {
    name: "Private & Co-educational",
    role: "Mixed Elementary School",
    image: "/images/kazo-pupils.jpg",
    detail: "Kazo Junior School is a private school for girls and boys in the Kazo-Lugoba area.",
  },
  {
    name: "Nursery to Primary Seven",
    role: "ECD · P.1–P.7",
    image: "/images/kazo-classroom.jpg",
    detail: "Learning begins in Early Childhood Development and continues through the full primary cycle.",
  },
  {
    name: "UNEB Curriculum",
    role: "Preparing for PLE",
    image: "/images/kazo-classroom.jpg",
    detail: "The school follows the Uganda National Examinations Board framework and prepares pupils for PLE.",
  },
];

const notices = [
  {
    title: "Tree Planting & Plastic Waste Management",
    category: "Africa for SDGs Uganda",
    image: "/images/kazo-tree-planting.jpg",
    copy: "Students join scheduled tree-planting drives and community plastic-waste management activities.",
  },
  {
    title: "Youth Character & Integrity Camps",
    category: "ICY Uganda",
    image: "/images/kazo-mentorship.jpg",
    copy: "Periodic youth mentorship camps support character development and integrity.",
  },
  {
    title: "SchoolPay and PegPay",
    category: "Digital Payment Channels",
    image: "/images/kazo-classroom.jpg",
    copy: "The school is enrolled on SchoolPay; see the active SchoolSuite directory for payment IDs. PegPay provides a local mobile-money and commercial-bank agent clearing channel.",
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
          <div className="utility-links"><a href="#home">Home</a><a href="#programmes">Programs</a><a href="#contact">Contact</a><a href="#about">About Kazo</a></div>
          <div className="utility-social"><a aria-label="SchoolSuite directory" href="https://schoolsuite.co.ug/site/schools-and-channels?page=366" target="_blank" rel="noreferrer">Pay</a><a aria-label="Africa for SDGs Uganda" href="https://www.facebook.com/AfricaYouthSDGs/posts/global-goals-start-with-local-actions-africa-for-sdgs-uganda-loved-inspiring-the/1343510314630838/" target="_blank" rel="noreferrer">SDGs</a><a aria-label="ICY Uganda" href="https://www.facebook.com/ICYAFRICA/posts/transforming-the-next-generation-starts-from-within-icy-uganda-had-a-powerful-ti/1347817084197776/" target="_blank" rel="noreferrer">ICY</a></div>
        </div>
      </div>
      <div className="desktop-brand"><div className="site-width desktop-brand-inner"><span>Kazo Junior School Nursery and Primary</span><small>Kazo · Kampala, Uganda</small></div></div>
      <header className="main-header">
        <div className="mobile-header-inner">
          <a className="mobile-wordmark" href="#home" aria-label="Home">KAZO</a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={25} /> : <Menu size={29} />}
          </button>
        </div>
        <nav className={`primary-nav ${menuOpen ? "primary-nav-open" : ""}`} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About Kazo</a>
          <a href="#admissions" onClick={closeMenu}>Admissions</a>
          <a href="#curriculum" onClick={closeMenu}>Curriculum</a>
          <a href="#programmes" onClick={closeMenu}>Programs</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>
    </>
  );
}

function Hero({ onDayBoardingClick }: { onDayBoardingClick: () => void }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setImageIndex((index) => (index + 1) % heroImages.length), 7000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home" aria-label="Kazo Junior School Nursery and Primary">
      {heroImages.map((image, index) => (
        <div key={image} className={`hero-image ${index === imageIndex ? "hero-image-active" : ""}`} style={{ backgroundImage: `url("${image}")` }} aria-hidden="true" />
      ))}
      <div className="hero-tint" />
      <div className="hero-content">
        <h1>A STRONG<br />START FOR<br className="mobile-break" /> A BRIGHT FUTURE</h1>
        <p className="hero-description">Kazo Junior School Nursery and Primary is a private, co-educational school in Kawempe, Kampala. We offer day and boarding from Nursery through Primary Seven, following the UNEB curriculum and preparing pupils for the Primary Leaving Examinations.</p>
        <p className="hero-codes"><span><b><u>NURSERY</u></b> TO <b><u>PRIMARY 7</u></b></span><span><b><u>DAY</u></b> &amp; <b><u>BOARDING</u></b></span></p>
        <div className="hero-actions" id="admissions">
          <a href="#curriculum" className="join-button"><GraduationCap aria-hidden="true" /><span>NURSERY &amp; PRIMARY</span></a>
          <button className="join-button" onClick={onDayBoardingClick}><GraduationCap aria-hidden="true" /><span>DAY &amp; BOARDING</span></button>
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
        <h2 id="stats-title" className="section-title stats-title">Kazo at a Glance</h2>
        <div className="stats-card">
          <div className="stat"><span className="stat-label">School Levels</span><strong>2</strong></div>
          <div className="stat"><span className="stat-label">Primary Grades</span><strong>7</strong></div>
          <div className="stat"><span className="stat-label">Study Options</span><strong>2</strong></div>
        </div>
      </div>
    </section>
  );
}

function PurposeSection() {
  return (
    <section id="mission" className="purpose-section" aria-label="School curriculum and programs">
      <article className="purpose-item">
        <div className="purpose-copy"><h2>OUR CURRICULUM</h2><p>Kazo Junior School follows the Uganda National Examinations Board (UNEB) framework, preparing pupils for the Primary Leaving Examinations (PLE).</p></div>
        <BookOpen className="purpose-icon" strokeWidth={2.5} aria-hidden="true" />
      </article>
      <article className="purpose-item">
        <Search className="purpose-icon" strokeWidth={2.5} aria-hidden="true" />
        <div className="purpose-copy"><h2>OUR SCHOOL</h2><p>A private, co-educational nursery and primary school serving learners from Early Childhood Development through Primary Seven.</p></div>
      </article>
      <article className="purpose-item purpose-last">
        <div className="purpose-copy"><h2>DAY &amp; BOARDING</h2><p>Families can choose a day or boarding program for their child.</p></div>
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
      <Hero onDayBoardingClick={() => setAnnouncementOpen(true)} />
      <StatCard />

      <section className="welcome-section" id="about">
        <div className="site-width welcome-inner">
          <h2 className="welcome-title"><span className="welcome-to">Welcome to</span><span className="welcome-school">Kazo Junior School<br className="welcome-break" /> Nursery and Primary</span></h2>
          <p className="welcome-copy">Kazo Junior School Nursery and Primary is a private, mixed elementary school located on Lugoba Road in Kazo, Kawempe Division, Kampala. The school offers day and boarding programs from Early Childhood Development (Nursery) to Primary Seven (P.1–P.7). The school is situated in the Kazo–Lugoba suburban corridor bordering Kampala and Wakiso districts.</p>
          <img className="welcome-photo" src="/images/kazo-pupils.jpg" alt="Illustrative photograph of primary school pupils in Uganda" />
        </div>
      </section>

      <PurposeSection />

      <section className="principal-message">
        <div className="site-width">
          <h2 className="section-title">School Profile &amp; Curriculum</h2>
          <div className="principal-layout">
            <img src="/images/kazo-classroom.jpg" alt="Illustrative photograph of a teacher supporting primary learners" loading="lazy" />
            <div className="principal-copy"><p>Nursery and Primary Education</p><p>Kazo Junior School serves learners from Early Childhood Development through Primary Seven. It follows the Uganda National Examinations Board framework and prepares pupils for the Primary Leaving Examinations.</p><p>The school is private and co-educational, with both day and boarding programs.</p><p><b>Kazo Junior School Nursery and Primary</b></p></div>
          </div>
        </div>
      </section>

      <section className="principal-message cambridge-message">
        <div className="site-width">
          <h2 className="section-title">Community &amp; Student Programmes</h2>
          <div className="principal-layout reverse-principal">
            <img src="/images/kazo-tree-planting.jpg" alt="Illustrative photograph of pupils planting a tree" loading="lazy" />
            <div className="principal-copy"><p>Environmental Care</p><p>Through a conservation initiative partnered with Africa for SDGs Uganda, students take part in scheduled tree-planting drives and community plastic-waste management.</p><p>Youth character development and integrity mentorship camps are also held periodically with ICY Uganda.</p><p><b>Learning through community participation</b></p></div>
          </div>
        </div>
      </section>

      <section className="best-child-section" id="life">
        <div className="best-child-image" />
        <div className="best-child-text"><h2>A Strong Start For Every Child</h2><p>From Nursery to Primary Seven, Kazo Junior School provides a UNEB-based education for girls and boys, with both day and boarding options in the Kazo-Lugoba area of Kampala.</p><a href="#contact" className="apply-button">ADMISSIONS INFORMATION <ArrowRight size={18} /></a></div>
      </section>

      <section className="offers-section" id="curriculum">
        <div className="site-width"><h2 className="section-title">Kazo Junior School at a Glance</h2><div className="offers-grid">
          <article><ShieldCheck /><h3>Private &amp; Co-educational</h3><p>A mixed elementary school welcoming girls and boys.</p></article>
          <article><BookOpen /><h3>Nursery to Primary Seven</h3><p>Early Childhood Development followed by P.1 through P.7.</p></article>
          <article><Users /><h3>Day &amp; Boarding</h3><p>Day and boarding programs are available for learners.</p></article>
          <article><GraduationCap /><h3>UNEB &amp; PLE</h3><p>Follows the UNEB framework and prepares pupils for PLE.</p></article>
        </div></div>
      </section>

      <section className="team-section" id="programmes">
        <div className="site-width"><h2 className="section-title">School Profile</h2><div className="team-grid">
          {schoolFacts.map((fact) => <article className="team-card" key={fact.name}><img src={fact.image} alt={`Illustrative photograph related to ${fact.name}`} loading="lazy" /><div><h3>{fact.name}</h3><h4>{fact.role}</h4><p>{fact.detail}</p><a href="#contact">Learn More</a></div></article>)}
        </div></div>
      </section>

      <section className="notices-section">
        <div className="site-width"><h2 className="section-title">Programs &amp; School Payments</h2><div className="notices-grid">
          {notices.map((notice) => <article className="notice-card" key={notice.title}><img src={notice.image} alt={`Illustrative photograph for ${notice.title}`} loading="lazy" /><div><h3>{notice.title}</h3><h4>{notice.category}</h4><p>{notice.copy}</p><a href={notice.title === "SchoolPay and PegPay" ? "https://schoolsuite.co.ug/site/schools-and-channels?page=366" : "#contact"} target={notice.title === "SchoolPay and PegPay" ? "_blank" : undefined} rel={notice.title === "SchoolPay and PegPay" ? "noreferrer" : undefined}>Learn More <ArrowRight size={15} /></a></div></article>)}
        </div></div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="site-width footer-grid">
          <div className="footer-intro"><h2>Kazo Junior School Nursery and Primary</h2><p>A private, co-educational nursery and primary school offering day and boarding in Kazo, Kampala.</p></div>
          <div><h3>Location &amp; Address</h3><p>Kazo Junior School Nursery and Primary</p><p><MapPin size={15} /> Lugoba Road, Kazo, Kawempe Division, Kampala, Uganda</p><p><MapPin size={15} /> P.O. Box 8904, Kampala, Uganda</p></div>
          <div><h3>School &amp; Payment Links</h3><a href="https://schoolsuite.co.ug/site/schools-and-channels?page=366" target="_blank" rel="noreferrer">SchoolSuite / SchoolPay directory</a><a href="https://pegasus.co.ug:8895/PegPaySchoolsPortal/FindStudent.aspx" target="_blank" rel="noreferrer">PegPay Schools Portal</a><a href="https://uneb.ac.ug/" target="_blank" rel="noreferrer">Uganda National Examinations Board</a><a href="https://www.facebook.com/AfricaYouthSDGs/posts/global-goals-start-with-local-actions-africa-for-sdgs-uganda-loved-inspiring-the/1343510314630838/" target="_blank" rel="noreferrer">Africa for SDGs Uganda</a><a href="https://www.facebook.com/ICYAFRICA/posts/transforming-the-next-generation-starts-from-within-icy-uganda-had-a-powerful-ti/1347817084197776/" target="_blank" rel="noreferrer">ICY Uganda</a></div>
        </div>
        <div className="footer-bottom"><span>Kazo Junior School Nursery and Primary</span><span>Kazo · Kampala, Uganda</span></div>
      </footer>

      {announcementOpen && <div className="modal-backdrop" onMouseDown={(event) => { if (event.target === event.currentTarget) setAnnouncementOpen(false); }}><div className="announcement-dialog" role="dialog" aria-modal="true" aria-labelledby="boarding-title"><button className="dialog-close" onClick={() => setAnnouncementOpen(false)} aria-label="Close"><X size={20} /></button><h2 id="boarding-title">Day &amp; Boarding Programs</h2><p>Kazo Junior School offers both day and boarding options for pupils from Nursery through Primary Seven. For admissions details, contact the school at Lugoba Road, Kazo, Kawempe Division, Kampala.</p><a href="#contact" className="apply-button" onClick={() => setAnnouncementOpen(false)}>View School Details <ArrowRight size={16} /></a><button className="dialog-dismiss" onClick={() => setAnnouncementOpen(false)}>Close</button></div></div>}
    </main>
  );
}

export default Home;
