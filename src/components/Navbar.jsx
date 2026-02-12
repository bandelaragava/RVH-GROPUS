import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../assets/image1.jpg';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // On subpages, the navbar should always have a background and dark text
  const navbarClasses = `navbar ${scrolled || !isHomePage ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`;

  return (
    <nav className={navbarClasses}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src={logoImg} alt="RVH Logo" className="navbar-logo-img" />
          <span className="logo-text">RVH <span className="logo-accent">GROUP</span></span>
        </Link>

        {/* Hamburger Icon */}
        <button
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${mobileMenuOpen ? 'mobile-active' : ''}`}>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li className="dropdown">
            <NavLink to="/about">About RVH</NavLink>
            <ul className="dropdown-menu">
              <li><Link to="/about#chairman">Chairman's Message</Link></li>
              <li><Link to="/about#vision">Vision & Mission</Link></li>
              <li><Link to="/about#leadership">Leadership</Link></li>
              <li><Link to="/about#governance">Governance</Link></li>
            </ul>
          </li>
          <li className="dropdown">
            <NavLink to="/businesses">Businesses</NavLink>
            <ul className="dropdown-menu">
              <li><Link to="/businesses#businesses">Sectors</Link></li>
              <li><Link to="/businesses#subsidiaries">Subsidiaries</Link></li>
            </ul>
          </li>
          <li><NavLink to="/our-journey">Our Journey</NavLink></li>
          <li><NavLink to="/careers">Careers</NavLink></li>
          <li><NavLink to="/faqs">FAQ's</NavLink></li>
          <li><NavLink to="/media">Media</NavLink></li>
          <li><NavLink to="/contact" className="nav-cta">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
