import React from 'react';
import './VerticalsPreview.css';

const sectors = [
    { title: 'Financial Services', icon: '🏦' },
    { title: 'Logistics & Infra', icon: '🏗️' },
    { title: 'Healthcare', icon: '🏥' },
    { title: 'Technology', icon: '💻' },
    { title: 'Renewable Energy', icon: '⚡' },
    { title: 'Real Estate', icon: '🏢' },
    { title: 'Hospitality', icon: '🏨' },
    { title: 'Education', icon: '🎓' },
    { title: 'Manufacturing', icon: '🏭' },
];

const VerticalsPreview = () => {
    return (
        <section className="section-padding" id="businesses">
            <div className="container">
                <div className="section-header text-center mb-3">
                    <span className="section-subtitle">Our Portfolios</span>
                    <h2 className="section-title">A Diversified Ecosystem of 18+ Companies</h2>
                    <div className="section-line center"></div>
                </div>
                <div className="verticals-grid">
                    {sectors.map((sector, index) => (
                        <div key={index} className="minimal-card">
                            <span className="minimal-icon">{sector.icon}</span>
                            <span className="minimal-title">{sector.title}</span>
                        </div>
                    ))}
                </div>
                <p className="text-center mt-3" style={{ color: 'var(--text-light)', fontStyle: 'italic' }}>
                    Leading with innovation and governance across multiple high-growth sectors.
                </p>
            </div>
        </section>
    );
};

export default VerticalsPreview;
