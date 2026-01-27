import React, { useState } from 'react';
import './SourcesOverview.css';

import energyImg from '../assets/renewable-energy.png';

const sourcesData = [
    {
        id: 'finance',
        title: 'Financial Services',
        icon: '🏦',
        heroTitle: 'Finance: Institutional Fiscal Governance',
        heroDesc: 'Strategic wealth management and corporate finance solutions built on a foundation of capital discipline.',
        bubbles: [
            { name: 'Sarah Miller', comment: 'Yield optimization is consistently meeting our targets.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150' },
            { name: 'Arthur Reed', comment: 'Every transaction is mapped to institutional guidelines.', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150' },
            { name: 'S. Mehta', comment: 'The asset allocation strategy is extremely balanced.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150' }
        ],
        mainImage: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=1000',
        cta: 'Investment Advisory'
    },
    {
        id: 'it',
        title: 'Technology',
        icon: '💻',
        heroTitle: 'Technology: Driving Digital Prowess',
        heroDesc: 'Harnessing enterprise-grade architecture and cloud scalability to build the future of institutional infrastructure.',
        bubbles: [
            { name: 'Elena Vance', comment: 'The cloud scalability here is unmatched for enterprise needs.', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150' },
            { name: 'David Cho', comment: 'Security protocols are strictly governance-aligned.', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150' },
            { name: 'Anil Kumar', comment: 'AI integration has optimized our backend latency by 40%.', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150' }
        ],
        mainImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
        cta: 'Tech Consult'
    },
    {
        id: 'logistics',
        title: 'Logistics & Infra',
        icon: '🏗️',
        heroTitle: 'Logistics: Building Global Corridors',
        heroDesc: 'Optimizing supply chain networks and sustainable infrastructure for multi-modal transport efficiency.',
        bubbles: [
            { name: 'Mark Jensen', comment: 'Fleet management is now fully real-time and automated.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150' },
            { name: 'Suman Singh', comment: 'Our last-mile delivery cost dropped significantly.', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150' },
            { name: 'Vikram', comment: 'The new logistics hub is a masterpiece of efficiency.', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150' }
        ],
        mainImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
        cta: 'Explore Networks'
    },
    {
        id: 'healthcare',
        title: 'Healthcare',
        icon: '🏥',
        heroTitle: 'Healthcare: Medical Excellence',
        heroDesc: 'Pioneering diagnostic technology and hospital management systems with a focus on patient outcomes.',
        bubbles: [
            { name: 'Dr. Shruti', comment: 'The new diagnostic suite is incredibly accurate.', avatar: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=150' },
            { name: 'Leo Martinez', comment: 'User interface for patient records is very intuitive.', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?auto=format&fit=crop&q=80&w=150' },
            { name: 'Hospital Admin', comment: 'Resource allocation has never been this balanced.', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150' }
        ],
        mainImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000',
        cta: 'View Facilities'
    },
    {
        id: 'energy',
        title: 'Renewable Energy',
        icon: '⚡',
        heroTitle: 'Energy: Powering a Greener Tomorrow',
        heroDesc: 'Investing in large-scale solar and wind projects to achieve carbon neutrality and sustainable growth.',
        bubbles: [
            { name: 'Impact Lead', comment: 'Solar yield has exceeded our initial projections.', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150' },
            { name: 'Erik Storm', comment: 'The storage integration is perfectly stable.', avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&q=80&w=150' },
            { name: 'ESG Analyst', comment: 'We saved 50,000 tons of CO2 this quarter.', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150' }
        ],
        mainImage: energyImg,
        cta: 'ESG Goals'
    },
    {
        id: 'realestate',
        title: 'Real Estate',
        icon: '🏢',
        heroTitle: 'Real Estate: Urban Landmarks',
        heroDesc: 'Developing premium residential and commercial spaces that redefine urban living and workspace efficiency.',
        bubbles: [
            { name: 'Ar. Khanna', comment: 'The architectural symmetry in the new tower is flawless.', avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=150' },
            { name: 'Project Lead', comment: 'Occupancy rates have hit 95% within the first month.', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=150' },
            { name: 'Mia Wong', comment: 'Sustainable materials have been integrated seamlessly.', avatar: 'https://images.unsplash.com/photo-1567532939847-8a5020de98d7?auto=format&fit=crop&q=80&w=150' }
        ],
        mainImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
        cta: 'View Projects'
    }
];

const SourcesOverview = () => {
    const [selectedId, setSelectedId] = useState(sourcesData[0].id);
    const active = sourcesData.find(s => s.id === selectedId);

    return (
        <section className="sources-ref">
            <div className="container">
                {/* Section Header */}
                <div className="section-header-ref">
                    <h2 className="section-main-title">Our Sources</h2>
                    <p className="section-main-subtitle">Discover our diverse portfolio of businesses driving innovation across multiple industries</p>
                </div>

                {/* Top Navigation */}
                <div className="sources-nav">
                    {sourcesData.map(item => (
                        <div
                            key={item.id}
                            className={`nav-btn ${selectedId === item.id ? 'active' : ''}`}
                            onClick={() => setSelectedId(item.id)}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-text">{item.title}</span>
                            <div className="active-line"></div>
                        </div>
                    ))}
                </div>

                {/* Content Hero */}
                <div className="sources-hero">
                    <h2 className="hero-heading">{active.heroTitle}</h2>
                    <p className="hero-subtext">{active.heroDesc}</p>
                    <button className="cta-btn">{active.cta} <span className="arrow">→</span></button>
                </div>

                {/* Visual Area */}
                <div className="visual-container">
                    {/* Bubbles Side */}
                    <div className="bubbles-side">
                        {active.bubbles.map((b, i) => (
                            <div key={i} className={`bubble-card bubble-${i}`}>
                                <div className="bubble-header">
                                    <div className="avatar-placeholder" style={{ backgroundImage: `url(${b.avatar})` }}></div>
                                    <span className="bubble-name">{b.name}</span>
                                </div>
                                <p className="bubble-text">{b.comment}</p>
                            </div>
                        ))}
                    </div>

                    {/* Image Frame Side */}
                    <div className="frame-side">
                        <div className="image-frame">
                            <img src={active.mainImage} alt={active.title} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SourcesOverview;
