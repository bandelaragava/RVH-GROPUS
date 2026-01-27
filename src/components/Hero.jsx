import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';

// Carousel images - you can add more images here
const carouselImages = [
    heroBg,
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000', // Modern architecture
    'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=2000', // Business/Finance
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000', // Office/Corporate
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000', // Technology
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
                    <h1 className="hero-title">A Diversified Group Building Durable Businesses</h1>
                    <p className="hero-subtitle">Operating across multiple sectors with long-term focus and institutional governance.</p>
                    <div className="hero-actions">
                        <a href="#about" className="btn btn-primary">Our Legacy</a>
                        <a href="#businesses" className="btn btn-outline" style={{ marginLeft: '1rem', border: '1px solid var(--primary-color)', color: 'white' }}>Our Businesses</a>
                    </div>
                </div>
            </div>
            <div className="hero-snapshot">
                <div className="container">
                    <div className="snapshot-grid">
                        <div className="snapshot-item">
                            <span className="snapshot-number">25+</span>
                            <span className="snapshot-label">Years of Operation</span>
                        </div>
                        <div className="snapshot-item">
                            <span className="snapshot-number">18+</span>
                            <span className="snapshot-label">Business Units</span>
                        </div>
                        <div className="snapshot-item">
                            <span className="snapshot-number">5000+</span>
                            <span className="snapshot-label">Employees</span>
                        </div>
                        <div className="snapshot-item">
                            <span className="snapshot-number">5+</span>
                            <span className="snapshot-label">Global Regions</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
