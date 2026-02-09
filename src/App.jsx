import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Businesses from './pages/Businesses';
import OurJourney from './pages/OurJourney';
import Contact from './pages/Contact';
import Media from './pages/Media';
import InvestorRelations from './pages/InvestorRelations';
import Careers from './pages/Careers';
import FAQs from './pages/FAQs';

import PageReveal from './components/PageReveal';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  // Scroll Reveal Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target); // Reveal once
        }
      });
    }, observerOptions);

    // Select all sections and add the reveal class initially
    const sections = document.querySelectorAll('section, footer');
    sections.forEach(section => {
      section.classList.add('section-reveal');
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]); // Re-run on route change

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          const headerOffset = 90; // Approx navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return <PageReveal />;
};

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      <main key={location.pathname} className="page-reveal">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/businesses" element={<Businesses />} />
          <Route path="/our-journey" element={<OurJourney />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/media" element={<Media />} />
          <Route path="/investor-relations" element={<InvestorRelations />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
