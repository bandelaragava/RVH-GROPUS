import React from 'react';
import ChairmanMessage from '../components/ChairmanMessage';
import VisionMission from '../components/VisionMission';
import './About.css';

// Sample Leadership Data
const leaders = [
    {
        name: 'Dr. R.V. Rao',
        role: 'Chairman & Founder',
        image: '/assets/leader_1_rao.png',
        bio: 'A visionary leader with over 40 years of experience in building institutional frameworks. Dr. Rao founded RVH Group with a mission to create sustainable value across diverse sectors.'
    },
    {
        name: 'S. Mehta',
        role: 'Chief Executive Officer',
        image: '/assets/leader_2_mehta.png',
        bio: 'Driving the group’s strategic expansion and operational excellence. Mr. Mehta brings a modern approach to leadership, ensuring agility and innovation in a changing global market.'
    },
    {
        name: 'A. Sharma',
        role: 'Director - Finance',
        image: '/assets/leader_3_sharma.png',
        bio: 'Overseeing financial governance and capital allocation strategies. Ms. Sharma ensures fiscal discipline and robustness, safeguarding the group’s long-term financial health.'
    },
];

const About = () => {
    return (
        <div className="about-page">
            <section className="about-intro-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-badge-col">
                            <span className="about-badge">WHO WE ARE</span>
                        </div>
                        <div className="about-content-col">
                            <h2 className="about-main-title">
                                Institutional Excellence <br />
                                <span className="highlight-text">Since Inception</span>
                            </h2>
                            <p className="about-desc">
                                RVH Group is a diversified conglomerate with a strong presence across Healthcare, Infrastructure, Logistics, and Technology. Our journey is defined by a commitment to governance, sustainability, and building value for all stakeholders.
                            </p>

                            <div className="about-stats">
                                <div className="stat-item">
                                    <span className="stat-number">18+</span>
                                    <span className="stat-label">Companies</span>
                                </div>
                                <div className="stat-divider"></div>
                                <div className="stat-item">
                                    <span className="stat-number">4</span>
                                    <span className="stat-label">Key Sectors</span>
                                </div>
                                <div className="stat-divider"></div>
                                <div className="stat-item">
                                    <span className="stat-number">30+</span>
                                    <span className="stat-label">Years Legacy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div id="chairman">
                <ChairmanMessage />
            </div>

            <div id="vision">
                <VisionMission />
            </div>

            <section className="section-padding bg-light" id="leadership">
                <div className="container">
                    <div className="section-header text-center mb-3">
                        <span className="section-subtitle">Our Leaders</span>
                        <h2 className="section-title">Leadership Team</h2>
                        <div className="section-line center"></div>
                    </div>
                    <div className="leadership-grid">
                        {leaders.map((leader, index) => (
                            <div key={index} className="leader-card">
                                <div className="leader-img-wrapper">
                                    <img src={leader.image} alt={leader.name} className="leader-img" />
                                </div>
                                <div className="leader-info">
                                    <h4 className="leader-name">{leader.name}</h4>
                                    <p className="leader-role">{leader.role}</p>
                                    <p className="leader-bio" style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginTop: '0.75rem', lineHeight: '1.6' }}>
                                        {leader.bio}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding" id="governance">
                <div className="container">
                    <div className="section-header text-center mb-3">
                        <span className="section-subtitle">Integrity & Ethics</span>
                        <h2 className="section-title">Corporate Governance</h2>
                        <div className="section-line center"></div>
                    </div>
                    <div className="governance-content">
                        <div>
                            <h3>Our Approach</h3>
                            <p>We maintain the highest standards of transparency and accountability. Our governance framework is designed to protect stakeholder interests and ensure long-term sustainability.</p>
                        </div>
                        <div>
                            <h3>Board Committees</h3>
                            <p>Strategic oversight is provided by our dedicated committees specializing in Audit, Risk Management, and Ethics.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
