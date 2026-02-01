import React, { useState, useEffect } from 'react';
import './MarketingSection.css';

import market5Img from '../assets/market5.png';
import interiorImg from '../assets/interior.png';
import construct5Img from '../assets/construct5.png';

const MarketingSection = () => {
    const images = [market5Img, interiorImg, construct5Img];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="marketing-section section-padding">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <span className="section-subtitle">Our Expertise</span>
                    <h2 className="section-title">Strategic Marketing & Design</h2>
                    <div className="section-line center"></div>
                </div>

                <div className="marketing-display">
                    <div className="marketing-content">
                        <h3>Innovative Solutions for Modern Brands</h3>
                        <p>We combine creative storytelling with data-driven strategies to build powerful brand connections. Our integrated approach ensures your message reaches the right audience at the right time.</p>
                        <ul className="marketing-features">
                            <li><span className="feature-icon">✨</span> Creative Campaign Strategy</li>
                            <li><span className="feature-icon">🔍</span> Digital Market Research</li>
                            <li><span className="feature-icon">📱</span> Social Media Integration</li>
                        </ul>
                    </div>

                    <div className="marketing-visual">
                        <div className="image-frame-container">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Marketing ${index + 1}`}
                                    className={`marketing-image-transition ${index === currentIndex ? 'active' : ''}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketingSection;
