import React from 'react';
import './ESGContent.css';

const ESGContent = ({ showHeader = true }) => {
    const pillars = [
        {
            title: 'Environmental Stewardship',
            icon: '🌿',
            desc: 'Commitment to net-zero operations and sustainable resource management across all industrial verticals.',
            points: ['Carbon Neutrality Goal 2040', 'Water Circularity', 'Renewable Energy Adoption']
        },
        {
            title: 'Social Responsibility',
            icon: '🤝',
            desc: 'Empowering communities through inclusive employment and impactful CSR initiatives in education and health.',
            points: ['Safe Work Environments', 'Community Development', 'Diversity & Inclusion']
        },
        {
            title: 'Governance Excellence',
            icon: '⚖️',
            desc: 'Zero-compromise approach to transparency, ethical conduct, and shareholder value protection.',
            points: ['Institutional Board Oversight', 'Ethical Code of Conduct', 'Risk Management Framework']
        }
    ];

    return (
        <section className="section-padding esg-section" id="sustainability-details">
            <div className="container">
                {showHeader && (
                    <div className="section-header text-center mb-3">
                        <span className="section-subtitle">Our Framework</span>
                        <h2 className="section-title">The Three Pillars of ESG</h2>
                        <div className="section-line"></div>
                    </div>
                )}
                <div className="esg-grid">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="esg-card card">
                            <div className="esg-icon">{pillar.icon}</div>
                            <h3>{pillar.title}</h3>
                            <p>{pillar.desc}</p>
                            <ul className="esg-list">
                                {pillar.points.map((point, i) => (
                                    <li key={i}><span>→</span> {point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ESGContent;
