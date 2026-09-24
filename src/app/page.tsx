"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Utensils,
  UsersRound,
  X,
} from "lucide-react";

type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
};

const slides: Slide[] = [
  {
    image: "/images/students-campus.webp",
    eyebrow: "Welcome to Hana International School",
    title: "A better education",
    accent: "for a better world.",
    description:
      "An integrated school in Nsangi, Uganda, where academic excellence and personal growth go hand in hand.",
  },
  {
    image: "/images/science-lab.png",
    eyebrow: "Curiosity starts here",
    title: "Think boldly.",
    accent: "Learn by doing.",
    description:
      "We give every learner the confidence, guidance, and room to discover what they can become.",
  },
  {
    image: "/images/graduation.jpg",
    eyebrow: "Every learner. Every possibility.",
    title: "A community",
    accent: "made to flourish.",
    description:
      "A caring school community, dedicated teachers, and learning pathways designed for the future.",
  },
];

const staff = [
  {
    name: "Mr. Agaba Redeemer",
    title: "Director of Studies · UNEB",
    image: "https://hanainternational.ac.ug/wp-content/uploads/2026/08/redimer-225x300.jpeg",
    note: "Committed to academic excellence and meaningful student development.",
  },
  {
    name: "Ms. Mildred Chekwech",
    title: "Director of Studies · Cambridge",
    image: "https://hanainternational.ac.ug/wp-content/uploads/2026/05/mildren-225x300.jpg",
    note: "Enriching every learner’s journey through guidance and high expectations.",
  },
  {
    name: "Mr. Ssentongo Denis",
    title: "Quality Assurance Officer",
    image: "https://hanainternational.ac.ug/wp-content/uploads/2024/11/MR-SSENTONGO.jpeg",
    note: "Helping our school community keep growing, learning, and improving.",
  },
];

const news = [
  {
    category: "School life",
    title: "Candidates’ Dedication 2024",
    text: "Candidates in prayer, dedication in action — success is the goal.",
    image: "/images/prefect-speech.png",
    date: "November 2024",
  },
  {
    category: "Arts & culture",
    title: "Music, Dance and Drama",
    text: "Celebrating the talent, creativity, and vibrant culture of our learners.",
    image: "https://hanainternational.ac.ug/wp-content/uploads/2026/02/MDD-2048x1366.jpg",
    date: "2025",
  },
  {
    category: "Sport",
    title: "Sports Day Celebrations",
    text: "Teamwork, discipline, and healthy competition — all part of growing up.",
    image: "https://hanainternational.ac.ug/wp-content/uploads/2026/04/20260406_094353-1463x2048.jpg",
    date: "2026",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
    const element = elementRef.current;
    if (!element || !("IntersectionObserver" in window)) {
      element?.classList.add("revealed");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={elementRef}
      className={`reveal-pending ${ready ? "reveal-ready" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

function Wordmark() {
  return (
    <a className="wordmark" href="#home" aria-label="Hana International School Uganda home">
      <span className="wordmark-name">Hana International</span>
      <span className="wordmark-sub">School <i /> Uganda</span>
    </a>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modal-open", newsOpen);
    return () => document.body.classList.remove("modal-open");
  }, [newsOpen]);

  const slide = slides[activeSlide];
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <main id="home" className="school-site">
      <div className="topline">
        <div className="site-container topline-inner">
          <div className="topline-location"><MapPin size={13} /> Kampala – Masaka Rd, Nsangi Town</div>
          <div className="topline-contact">
            <a href="tel:+256759766060"><Phone size={12} /> +256 759 766 060</a>
            <span className="topline-separator" />
            <a href="mailto:hanainternationalschool2023@gmail.com"><Mail size={13} /> Email us</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="site-container header-inner">
          <Wordmark />
          <button
            className="menu-toggle"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
          <nav className={`main-nav ${mobileMenuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
            <a className="nav-link nav-current" href="#home" onClick={closeMenu}>Home</a>
            <a className="nav-link" href="#about" onClick={closeMenu}>About us</a>
            <a className="nav-link" href="#programmes" onClick={closeMenu}>Academics <ChevronDown size={14} /></a>
            <a className="nav-link" href="#admissions" onClick={closeMenu}>Admissions <ChevronDown size={14} /></a>
            <a className="nav-link" href="#life" onClick={closeMenu}>Student life</a>
            <a className="nav-link" href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-apply" href="#admissions" onClick={closeMenu}>Apply now <ArrowRight size={15} /></a>
          </nav>
        </div>
      </header>

      <section className="hero" aria-label="Welcome">
        {slides.map((item, index) => (
          <div
            key={item.image}
            className={`hero-photo ${activeSlide === index ? "hero-photo-active" : ""}`}
            style={{ backgroundImage: `url("${item.image}")` }}
            aria-hidden="true"
          />
        ))}
        <div className="hero-shade" />
        <div className="site-container hero-content-wrap">
          <div className="hero-content" key={slide.title}>
            <div className="hero-eyebrow"><span className="eyebrow-line" />{slide.eyebrow}</div>
            <h1>{slide.title}<br /><em>{slide.accent}</em></h1>
            <p>{slide.description}</p>
            <div className="hero-actions">
              <a className="button button-green" href="#admissions">Discover our school <ArrowRight size={17} /></a>
              <a className="button button-outline-light" href="#about"><span className="play-icon">▶</span> Learn about us</a>
            </div>
            <div className="hero-register"><span className="register-mark"><CheckCircle2 size={15} /></span> Centre No. <b>U4146</b><span className="register-divider" /> Selection Code: <b>2661</b></div>
          </div>
          <div className="hero-side-note"><span>01 — 03</span><i /> LEARN WITH PURPOSE</div>
          <div className="hero-controls" aria-label="Hero slides">
            <button className="hero-scroll" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} aria-label="Scroll to about us"><ArrowDown size={18} /></button>
            <div className="hero-dots">
              {slides.map((item, index) => (
                <button
                  key={item.eyebrow}
                  className={`hero-dot ${activeSlide === index ? "dot-active" : ""}`}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={activeSlide === index}
                />
              ))}
            </div>
            <span className="hero-counter">0{activeSlide + 1}<i />0{slides.length}</span>
          </div>
        </div>
        <div className="hero-ticker"><span>NSANGI · UGANDA</span><i /> Growing minds. Building tomorrow.</div>
      </section>

      <section id="admissions" className="pathways" aria-label="Admission pathways">
        <div className="pathway-intro">
          <span className="mini-label">Find your path</span>
          <p>One community.<br /><b>Two great pathways.</b></p>
        </div>
        <a className="pathway-card pathway-uneb" href="https://hanainternational.ac.ug/admissions/join-uneb/" target="_blank" rel="noreferrer">
          <span className="pathway-icon"><BookOpen size={22} /></span>
          <span className="pathway-copy"><small>National curriculum</small><strong>Join UNEB</strong></span>
          <span className="pathway-arrow"><ArrowRight size={18} /></span>
        </a>
        <a className="pathway-card pathway-cambridge" href="https://hanainternational.ac.ug/join-cambridge/" target="_blank" rel="noreferrer">
          <span className="pathway-icon"><GraduationCap size={24} /></span>
          <span className="pathway-copy"><small>International curriculum</small><strong>Join Cambridge</strong></span>
          <span className="pathway-arrow"><ArrowRight size={18} /></span>
        </a>
        <button className="day-section-callout" onClick={() => setNewsOpen(true)}>
          <span className="callout-dot" /><span><b>Now enrolling</b><small>Cambridge Day Section</small></span><ArrowRight size={15} />
        </button>
      </section>

      <section className="stats-band">
        <div className="site-container stats-grid">
          <div className="stats-intro"><span className="mini-label mini-label-light">A place to belong</span><h2>We are HISU</h2></div>
          <div className="stat-item"><strong>2</strong><span>Learning pathways</span></div>
          <div className="stat-item"><strong>360<span>°</span></strong><span>Whole-child growth</span></div>
          <div className="stat-item"><strong>1</strong><span>Welcoming community</span></div>
          <div className="stats-tail"><HeartHandshake size={35} strokeWidth={1.35} /></div>
        </div>
      </section>

      <section id="about" className="welcome-section section-pad">
        <div className="site-container welcome-grid">
          <Reveal className="welcome-visual">
            <div className="welcome-image-main"><img src="/images/graduation.jpg" alt="A Hana International School learner taking part in a graduation celebration" /></div>
            <div className="welcome-image-small"><img src="/images/prefect-speech.png" alt="A student speaking at a school event" /></div>
            <div className="welcome-note"><span>LEARNER FIRST</span><b>Growing minds,<br />building tomorrow.</b></div>
            <div className="welcome-caption"><span>01</span> LEARN · LEAD · FLOURISH</div>
          </Reveal>
          <Reveal className="welcome-copy" delay={120}>
            <div className="section-kicker"><span /> Welcome to HISU</div>
            <h2>A school where<br /><em>every learner</em><br />can flourish.</h2>
            <p className="welcome-lead">Hana International School Uganda is an integrated school in Nsangi, focused on academic excellence and personal growth.</p>
            <p className="welcome-body">Just 30 minutes from Kampala, our nurturing environment brings together dedicated teachers, supportive staff, and curious learners. We believe every child deserves the encouragement and opportunity to discover their strengths and shape a bright future.</p>
            <a className="text-link" href="#mission">Discover our story <span><ArrowRight size={16} /></span></a>
            <div className="welcome-signoff"><span className="signoff-rule" /><span>Learning with purpose, every day.</span></div>
          </Reveal>
        </div>
      </section>

      <section id="mission" className="purpose-section">
        <div className="purpose-leaf purpose-leaf-one" />
        <div className="site-container purpose-grid">
          <Reveal className="purpose-intro">
            <div className="section-kicker section-kicker-light"><span /> What guides us</div>
            <h2>Education with<br /><em>heart &amp; purpose.</em></h2>
            <p>We help young people grow into thoughtful, capable, and compassionate citizens of the world.</p>
            <a className="button button-outline-light purpose-link" href="#programmes">Explore our approach <ArrowRight size={16} /></a>
          </Reveal>
          <Reveal className="purpose-cards" delay={130}>
            <article className="purpose-card">
              <span className="purpose-icon"><span>M</span></span><small>01 / WHY WE ARE HERE</small><h3>Our Mission</h3>
              <p>To enhance the educational experience of young adolescents with the vision, knowledge, and resources to become productive and ethical citizens.</p>
            </article>
            <article className="purpose-card">
              <span className="purpose-icon"><span>V</span></span><small>02 / WHERE WE ARE GOING</small><h3>Our Vision</h3>
              <p>To provide the best quality education, creating lasting satisfaction for our learners, families, and wider community.</p>
            </article>
            <article className="purpose-card purpose-motto">
              <span className="purpose-icon"><span>✳</span></span><small>03 / THE WORDS WE LIVE BY</small><h3>Our Motto</h3>
              <p>In God We Trust</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section id="programmes" className="offer-section section-pad">
        <div className="site-container">
          <Reveal className="section-heading-row">
            <div><div className="section-kicker"><span /> The HISU difference</div><h2>Room to learn.<br /><em>Support to thrive.</em></h2></div>
            <p>From the classroom to the playing field, we make sure every child has what they need to feel safe, supported, and ready to grow.</p>
          </Reveal>
          <div className="offer-grid">
            {[
              { icon: ShieldCheck, title: "Safety & security", text: "A secure campus and attentive staff help every learner feel protected, settled, and ready to focus." },
              { icon: UsersRound, title: "A caring community", text: "Our teachers and support teams know that encouragement and belonging are essential to success." },
              { icon: BookOpen, title: "Learning that inspires", text: "Thoughtful teaching and hands-on discovery give students the confidence to ask questions and go further." },
              { icon: Utensils, title: "Healthy, balanced meals", text: "Nutritious meals help learners stay energised, focused, and ready for everything the day brings." },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 90}>
                  <article className="offer-card"><div className="offer-card-top"><span className="offer-icon"><Icon size={24} strokeWidth={1.6} /></span><span className="offer-number">0{index + 1}</span></div><h3>{item.title}</h3><p>{item.text}</p><a href="#contact" aria-label={`Learn more about ${item.title}`}><ArrowRight size={17} /></a></article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="principal-section">
        <div className="site-container principal-grid">
          <Reveal className="principal-image">
            <img src="/images/students-campus.webp" alt="Hana International School learners" />
            <div className="principal-image-tag">A community that cares</div>
          </Reveal>
          <Reveal className="principal-quote" delay={130}>
            <div className="section-kicker"><span /> A message from our school</div>
            <div className="quote-mark">“</div>
            <blockquote>Every child is valued and cared for here. Together, we give our learners the confidence to face challenges and the skills to thrive in a changing world.</blockquote>
            <p>We look forward to a strong partnership with every family, built on shared care, trust, and a belief in each child’s potential.</p>
            <div className="principal-name"><span className="principal-line" /><div><b>Kimera Abdul Karim</b><small>Head Teacher · UNEB</small></div></div>
          </Reveal>
        </div>
      </section>

      <section id="life" className="team-section section-pad">
        <div className="site-container">
          <Reveal className="team-heading">
            <div><div className="section-kicker"><span /> The people behind the progress</div><h2>Meet our <em>team.</em></h2></div>
            <p>Every learner’s success is a team effort. Meet some of the people who help make it happen.</p>
          </Reveal>
          <div className="team-grid">
            {staff.map((person, index) => (
              <Reveal key={person.name} delay={index * 100}>
                <article className="team-card">
                  <div className="team-photo"><img src={person.image} alt={person.name} loading="lazy" onError={(event) => { event.currentTarget.src = "/images/prefect-speech.png"; }} /><span className="team-index">0{index + 1}</span></div>
                  <div className="team-card-content"><small>{person.title}</small><h3>{person.name}</h3><p>{person.note}</p><a href="#contact" aria-label={`Contact about ${person.name}`}><ArrowRight size={16} /></a></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="admissions-band">
        <div className="site-container admissions-inner">
          <div className="admissions-icon"><GraduationCap size={34} strokeWidth={1.4} /></div>
          <div className="admissions-copy"><span>Take the next step</span><h2>Give your child a place to grow.</h2><p>Find the right pathway for your family and start a conversation with our admissions team.</p></div>
          <div className="admissions-actions"><a className="button button-white" href="https://hanainternational.ac.ug/admissions/" target="_blank" rel="noreferrer">Explore admissions <ArrowRight size={16} /></a><a className="admissions-phone" href="tel:+256759766060"><Phone size={15} /> Talk to admissions</a></div>
        </div>
      </section>

      <section className="news-section section-pad">
        <div className="site-container">
          <Reveal className="team-heading news-heading">
            <div><div className="section-kicker"><span /> From our school community</div><h2>News &amp; <em>notices.</em></h2></div>
            <a className="text-link" href="https://hanainternational.ac.ug/students-life/" target="_blank" rel="noreferrer">Explore student life <span><ArrowRight size={16} /></span></a>
          </Reveal>
          <div className="news-grid">
            {news.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <article className="news-card">
                  <a className="news-image" href="https://hanainternational.ac.ug/students-life/" target="_blank" rel="noreferrer"><img src={item.image} alt={item.title} loading="lazy" onError={(event) => { event.currentTarget.src = "/images/students-campus.webp"; }} /><span className="news-image-arrow"><ArrowRight size={18} /></span></a>
                  <div className="news-content"><div className="news-meta"><span>{item.category}</span><time>{item.date}</time></div><h3>{item.title}</h3><p>{item.text}</p><a className="news-read" href="https://hanainternational.ac.ug/students-life/" target="_blank" rel="noreferrer">Read story <ArrowRight size={15} /></a></div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="site-footer">
        <div className="site-container footer-main">
          <div className="footer-brand"><Wordmark /><p>An integrated school in Nsangi, Uganda — nurturing confident learners and a brighter future.</p><a className="footer-map" href="https://maps.google.com/?q=Hana+International+School+Uganda" target="_blank" rel="noreferrer"><MapPin size={16} /> Kampala – Masaka Rd, Nsangi Town</a></div>
          <div className="footer-col"><h3>Explore</h3><a href="#about">About us</a><a href="#programmes">Academics</a><a href="#admissions">Admissions</a><a href="#life">Student life</a></div>
          <div className="footer-col"><h3>Learning pathways</h3><a href="https://hanainternational.ac.ug/admissions/join-uneb/" target="_blank" rel="noreferrer">UNEB Section</a><a href="https://hanainternational.ac.ug/join-cambridge/" target="_blank" rel="noreferrer">Cambridge Section</a><a href="#admissions">Day section</a><a href="#contact">How to apply</a></div>
          <div className="footer-col footer-contact"><h3>Get in touch</h3><a href="tel:+256759766060"><Phone size={14} /> +256 759 766 060</a><a href="tel:+256772987550"><Phone size={14} /> +256 772 987 550</a><a href="mailto:hanainternationalschool2023@gmail.com"><Mail size={14} /> Email the school</a><span className="footer-open"><CalendarDays size={14} /> Admissions open for 2026</span></div>
        </div>
        <div className="site-container footer-bottom"><span>© 2026 Hana International School Uganda</span><span>In God We Trust <i /> Nsangi, Uganda</span><a href="#home">Back to top ↑</a></div>
      </footer>

      {newsOpen && (
        <div className="modal-scrim" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setNewsOpen(false); }}>
          <section className="announcement-modal" role="dialog" aria-modal="true" aria-labelledby="announcement-title">
            <button className="modal-close" aria-label="Close announcement" onClick={() => setNewsOpen(false)}><X size={20} /></button>
            <div className="modal-art"><img src="/images/graduation.jpg" alt="A learner celebrating a school graduation" /><span>CAMBRIDGE · 2026</span></div>
            <div className="modal-content"><div className="section-kicker"><span /> A new way to learn</div><h2 id="announcement-title">Cambridge now has a <em>day section.</em></h2><p>Your child can enjoy a world-class Cambridge education during the day and be home with family every evening.</p><a className="button button-green" href="https://hanainternational.ac.ug/cambridge/" target="_blank" rel="noreferrer" onClick={() => setNewsOpen(false)}>Explore Cambridge <ArrowRight size={16} /></a><button className="modal-dismiss" onClick={() => setNewsOpen(false)}>Maybe later</button></div>
          </section>
        </div>
      )}
    </main>
  );
}
