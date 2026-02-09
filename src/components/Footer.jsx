import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import bgVideo from '../assets/animationBag.mp4';

const Footer = () => {
    return (
        <footer className="footer-modern">
            {/* Background Video */}
            <div className="footer-video-bg">
                <video autoPlay muted loop playsInline>
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <div className="footer-video-overlay"></div>
            </div>

            {/* Architectural Blueprint Lines */}
            <div className="blueprint-lines">
                <div className="line-h line-1"></div>
                <div className="line-h line-2"></div>
                <div className="line-v line-left"></div>
                <div className="line-v line-right"></div>
            </div>

            <div className="container footer-pro-grid">
                <div className="footer-pro-brand">
                    <Link to="/" className="footer-logo">
                        RVH <span className="logo-accent">GROUP</span>
                    </Link>
                    <p className="footer-pro-desc">
                        Engineering multi-sector growth through innovation, governance, and industrial excellence. Building the future of global enterprise solutions.
                    </p>
                </div>

                <div className="footer-pro-links-wrapper">
                    <div className="footer-links-col">
                        <h4 className="footer-col-title">Navigation</h4>
                        <ul>
                            <li><Link to="/about">About RVH</Link></li>
                            <li><Link to="/businesses">Businesses</Link></li>
                            <li><Link to="/our-journey">Our Journey</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                        </ul>
                    </div>
                    <div className="footer-links-col">
                        <h4 className="footer-col-title">Resources</h4>
                        <ul>
                            <li><Link to="/media">Media Center</Link></li>
                            <li><Link to="/faqs">FAQ's</Link></li>
                            <li><Link to="/investor-relations">Investor Relations</Link></li>
                            <li><Link to="/contact">Connect</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-pro-social">
                    <h4 className="footer-col-title">Contact & Social</h4>

                    <div className="footer-contact-items-mini">
                        <div className="contact-item">
                            <span className="contact-label">ENQUIRIES</span>
                            <span className="contact-value">contact@rvh-group.com</span>
                        </div>
                        <div className="contact-item">
                            <span className="contact-label">LOCATION</span>
                            <span className="contact-value">Corporate HQ / Mumbai, IN</span>
                        </div>
                    </div>

                    <div className="social-links-minimal">
                        <a href="#" className="social-icon-link" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </a>
                        <a href="#" className="social-icon-link" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                        <a href="#" className="social-icon-link" aria-label="Twitter X">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-pro-bottom">
                <div className="container bottom-flex">
                    <p className="copyright">&copy; {new Date().getFullYear()} RVH GROUP. ALL RIGHTS RESERVED.</p>
                    <div className="bottom-links">
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
