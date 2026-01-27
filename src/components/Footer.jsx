import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">RVH <span className="logo-accent">GROUP</span></Link>
                    <p className="footer-desc">A diversified business group committed to capital discipline and long-term value creation through institutional governance.</p>
                </div>
                <div className="footer-links">
                    <h4>About RVH</h4>
                    <ul>
                        <li><Link to="/about#chairman">Chairman's Message</Link></li>
                        <li><Link to="/about#vision">Vision & Mission</Link></li>
                        <li><Link to="/about#leadership">Board of Directors</Link></li>
                        <li><Link to="/about#governance">Code of Ethics</Link></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h4>Businesses</h4>
                    <ul>
                        <li><Link to="/businesses#businesses">Sectors</Link></li>
                        <li><Link to="/businesses#subsidiaries">Subsidiaries</Link></li>
                        <li><Link to="/businesses">Strategic Portfolios</Link></li>
                        <li><Link to="/businesses#partnerships">Partnerships</Link></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h4>Institutional</h4>
                    <ul>
                        <li><Link to="/sustainability">Sustainability</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/about#governance">Compliance</Link></li>
                        <li><Link to="/media">Media Center</Link></li>
                        <li><Link to="/investor-relations">Investor Relations</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} RVH Group. All rights reserved. Institutional | Investor-Ready | Zero-Fluff</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
