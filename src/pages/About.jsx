import React, { useEffect } from 'react';
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

const milestones = [
    {
        year: '2023',
        title: 'The Foundation of Innovation',
        desc: 'We began as a lean, agile IT solutions company with a bold vision: to innovate far beyond software.'
    },
    {
        year: '2024',
        title: 'The Leap to Infrastructure',
        desc: 'Expanded into Real Estate, Interior Design & Digital Marketing, creating strong business synergies and diversified service reach.'
    },
    {
        year: '2025',
        title: 'The Human & Operational Engine',
        desc: 'Launched dedicated Training, Tech Support & BPO divisions, strengthening the human and operational foundation for scalable impact.'
    },
    {
        year: 'Future',
        title: 'Global & Cognitive',
        desc: 'Next phase includes global expansion with AI-driven solutions, sustainable operations, and internationally recognized infrastructure excellence.',
        isFuture: true
    }
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
                                Empowering Ideas With<br />
                                <span className="highlight-text">Intelligent Innovation</span>
                            </h2>
                            <p className="about-desc">
                                RVH Group is a business solutions & services group that builds practical technology, operations, and growth engines for companies of every size. We combine startup speed with enterprise-grade delivery to launch products, scale operations, and unlock new revenue channels — faster and with purpose.
                            </p>
                            <p className="about-desc" style={{ marginTop: '-2rem', borderLeft: 'none', paddingTop: '0' }}>
                                We partner with organisations across IT, tech support, digital marketing, HR, training and finance to deliver measurable outcomes — from idea to execution.
                            </p>

                            <div className="about-stats">
                                <div className="stat-item">
                                    <span className="stat-number">IT</span>
                                    <span className="stat-label">Services</span>
                                </div>
                                <div className="stat-divider"></div>
                                <div className="stat-item">
                                    <span className="stat-number">Digital</span>
                                    <span className="stat-label">Marketing</span>
                                </div>
                                <div className="stat-divider"></div>
                                <div className="stat-item">
                                    <span className="stat-number">Finance</span>
                                    <span className="stat-label">& HR</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="section-padding" id="what-we-do">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title">What We Do</h2>
                        <div className="section-line center"></div>
                    </div>
                    <div className="wwd-grid">
                        <div className="wwd-text">
                            <p>We provide a wide range of professional services designed to help individuals, startups, and businesses grow with confidence in the digital age. Our focus is on delivering high-quality, innovative and result-oriented solutions.</p>
                            <p>From IT services, digital marketing, and business support to training & professional development — RVH Group is committed to empowering growth through expertise and excellence.</p>
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
                                    <p className="leader-bio" style={{ fontSize: '0.9rem', color: 'rgba(58, 57, 57, 0.85)', marginTop: '0.75rem', lineHeight: '1.6' }}>
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
                        <span className="section-subtitle">Impact & Reach</span>
                        <h2 className="section-title">Our Global Presence</h2>
                        <div className="section-line center"></div>
                    </div>
                    <div className="governance-content">
                        <div>
                            <h3>RVH Group</h3>
                            <p>RVH Group refers to the global organization, and may refer to one or more, of the member firms, each of which is a separate legal entity. We provide comprehensive services to clients.</p>
                        </div>
                        <div>
                            <h3>Our Approach</h3>
                            <p>We maintenance the highest standards of transparency and accountability. Our governance framework is designed to protect stakeholder interests and ensure long-term sustainability.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
