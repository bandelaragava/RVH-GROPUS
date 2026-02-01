import React, { useState } from 'react';
import './ESGContent.css';
import socialImg from '../assets/social_responsibility.png';

const ESGContent = ({ showHeader = true }) => {
    const [activePillar, setActivePillar] = useState(0);
    const hoverTimeoutRef = React.useRef(null);

    const handleMouseEnter = (index) => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        hoverTimeoutRef.current = setTimeout(() => {
            setActivePillar(index);
        }, 150); // Small delay to prevent rapid flickering
    };

    const handleMouseLeave = () => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    };

    const pillars = [
        {
            title: 'Environmental Stewardship',
            icon: '🌿',
            desc: 'Commitment to net-zero operations and sustainable resource management across all industrial verticals.',
            points: ['Carbon Neutrality Goal 2040', 'Water Circularity', 'Renewable Energy Adoption'],
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
        },
        {
            title: 'Social Responsibility',
            icon: '🤝',
            desc: 'Empowering communities through inclusive employment and impactful CSR initiatives in education and health.',
            points: ['Safe Work Environments', 'Community Development', 'Diversity & Inclusion'],
            image: socialImg
        },
        {
            title: 'Governance Excellence',
            icon: '⚖️',
            desc: 'Zero-compromise approach to transparency, ethical conduct, and shareholder value protection.',
            points: ['Institutional Board Oversight', 'Ethical Code of Conduct', 'Risk Management Framework'],
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80"
        }
    ];

    return (
        <section className="section-padding esg-section" id="sustainability-details">
            <div className="container">
                {showHeader && (
                    <div className="section-header text-center mb-5">
                        <span className="section-subtitle">Our Framework</span>
                        <h2 className="section-title">The Three Pillars of ESG</h2>
                        <div className="section-line center"></div>
                    </div>
                )}

                <div className="esg-interactive-layout">
                    {/* Left Column - Interactive Menu */}
                    <div className="esg-menu-column">
                        {pillars.map((pillar, index) => (
                            <div
                                key={index}
                                className={`esg-menu-item ${activePillar === index ? 'active' : ''}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => setActivePillar(index)}
                            >
                                <div className="esg-header">
                                    <span className="esg-icon-small">{pillar.icon}</span>
                                    <h3 className="esg-title">{pillar.title}</h3>
                                </div>
                                <div className={`esg-details ${activePillar === index ? 'expanded' : ''}`}>
                                    <p className="esg-description">{pillar.desc}</p>
                                    <ul className="esg-points">
                                        {pillar.points.map((point, i) => (
                                            <li key={i}>
                                                <span className="point-arrow">→</span> {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Dynamic Visuals */}
                    <div className="esg-visual-column">
                        {pillars.map((pillar, index) => (
                            <div
                                key={index}
                                className={`esg-image-container ${activePillar === index ? 'visible' : ''}`}
                            >
                                <img src={pillar.image} alt={pillar.title} />
                                <div className="visual-overlay"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ESGContent;
