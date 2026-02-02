import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
// Modern, Unique and Professional Hero Images (Curated set related to Vision/Mission aesthetic)
const carouselImages = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2400', // Premium Architectural Vision
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2400', // Modern Collaboration (Mission Related)
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2400', // Abstract Cyber Security/Tech (Values/Verticals Related)
    'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2400', // Professional Integrity
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2400', // Intelligent Innovation
];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        // Auto-rotate images every 3 seconds
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % carouselImages.length
            );
        }, 3000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero" id="home">
            {/* Carousel Images */}
            {carouselImages.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    className={`hero-background ${index === currentImageIndex ? 'active' : ''}`}
                    alt={`RVH Group Background ${index + 1}`}
                />
            ))}
            <div className="container hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Empowering Ideas With<br /><span className="accent">Intelligent Innovation</span></h1>
                    <p className="hero-subtitle">Operating across multiple industries, we provide practical technology, operations, and growth engines for companies of every size.</p>
                    <div className="hero-actions">
                        <Link to="/about" className="btn btn-primary">Our Legacy</Link>
                        <Link to="/businesses" className="btn btn-outline" style={{ marginLeft: '1rem', border: '1px solid var(--primary-color)', color: 'white' }}>Our Businesses</Link>
                    </div>
                </div>
            </div>
            <div className="hero-snapshot">
                <div className="container">
                    <div className="snapshot-grid">
                        <div className="snapshot-item">
                            <span className="snapshot-number">25+</span>
                            <span className="snapshot-label">Years of IMPACT</span>
                        </div>
                        <div className="snapshot-item">
                            <span className="snapshot-number">18+</span>
                            <span className="snapshot-label">Business VERTICALS</span>
                        </div>
                        <div className="snapshot-item">
                            <span className="snapshot-number">5000+</span>
                            <span className="snapshot-label">Workforce strength</span>
                        </div>
                        <div className="snapshot-item">
                            <span className="snapshot-number">5+</span>
                            <span className="snapshot-label">Global REGIONS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
