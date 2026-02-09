import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
// Modern, Unique and Professional Hero Images (Curated set for minimalist ASL-inspired aesthetic)
const carouselImages = [
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=2400', // Minimalist Architecture (ASL Style)
    'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=2400', // Committed Governance
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2400', // Modern Perspective / Corporate Clarity
    'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=2400', // Geometric Precision
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2400', // Surgical/Industrial Excellence
];

const Counter = ({ target, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        const timeoutId = setTimeout(() => {
            window.requestAnimationFrame(step);
        }, 1500);

        return () => clearTimeout(timeoutId);
    }, [target, duration]);

    return <span>{count}{suffix}</span>;
};

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % carouselImages.length
            );
        }, 5000); // Slower, more cinematic transition
        return () => clearInterval(interval);
    }, []);

    return (
        <>
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
                <div className="hero-overlay-minimal"></div>

                <div className="container hero-container">
                    <div className="hero-content">
                        {/* <div className="hero-tagline">Operating with Purpose</div> */}
                        <h1 className="hero-title">Empowering Ideas with<br /><span className="accent">Surgical Innovation</span></h1>
                        <p className="hero-subtitle">Leading multi-sector progress through governed excellence and strategic industrial integration.</p>
                        <div className="hero-actions">
                            <Link to="/about" className="btn-modern-primary">The Enterprise Standard →</Link>
                            <Link to="/businesses" className="btn-modern-outline">Explore Verticals</Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="hero-snapshot-surgical">
                <div className="container">
                    <div className="snapshot-surgical-grid">
                        <div className="snapshot-surgical-item">
                            <span className="surgical-number">
                                <Counter target={25} suffix="+" />
                            </span>
                            <span className="surgical-label">Years of Impact</span>
                        </div>
                        <div className="snapshot-surgical-item">
                            <span className="surgical-number">
                                <Counter target={18} suffix="+" />
                            </span>
                            <span className="surgical-label">Business Verticals</span>
                        </div>
                        <div className="snapshot-surgical-item">
                            <span className="surgical-number">
                                <Counter target={5} suffix="K+" />
                            </span>
                            <span className="surgical-label">Workforce Strength</span>
                        </div>
                        <div className="snapshot-surgical-item">
                            <span className="surgical-number">GLBL</span>
                            <span className="surgical-label">Global Presence</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
