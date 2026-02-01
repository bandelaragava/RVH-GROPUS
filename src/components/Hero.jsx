import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import heroBg from '../assets/hero-bg.png';

// Carousel images - you can add more images here
const carouselImages = [
    heroBg,
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000', // Modern architecture
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000', // Diverse business collaboration (3rd)
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000', // Office/Corporate
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000', // Modern Tech/Innovation Center (5th)
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
                    <h1 className="hero-title">Empowering Ideas With<br />Intelligent Innovation</h1>
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
