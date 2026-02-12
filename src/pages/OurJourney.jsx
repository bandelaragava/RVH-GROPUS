import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './OurJourney.css';
import careerRoadImage from '../assets/careerRoad.png';
import journeyImg from '../assets/generated-image-1.png';

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

const Sustainability = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const storySectionRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            if (!storySectionRef.current) return;
            const element = storySectionRef.current;
            const rect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate progress: 0 when top is at sticky point, 1 when bottom reaches sticky point
            const start = rect.top;
            const total = rect.height;
            const progress = Math.max(0, Math.min(1, -start / (total - viewportHeight)));
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="sustainability-page">
            {/* Split Reveal Story Section */}
            <section className="story-reveal-outer" ref={storySectionRef}>
                <div className="story-sticky" style={{ '--progress': scrollProgress }}>
                    <div className="story-content-layer">
                        {/* Layer 1: Initial Titles (Fade OUT) */}
                        <div className="story-text-top">
                            <h2 className="our-title">Our</h2>
                            <span className="story-subtitle">SINCE 2023</span>
                            <h2 className="story-title">story</h2>
                        </div>

                        {/* Layer 2: The Core Reveal (Clip-path Split) */}
                        <div className="reveal-mask-container">
                            <div className="reveal-image-wrapper">
                                <img src={careerRoadImage} alt="Our Journey" className="reveal-main-image" />
                                <div className="image-overlay"></div>
                            </div>
                        </div>

                        {/* Layer 3: Bottom Title (Fade OUT) */}
                        <div className="story-text-bottom">
                            <h2 className="bottom-reveal-title">IN EVERY MILESTONE</h2>
                        </div>

                        {/* Layer 4: Final Narrative (Fade IN) */}
                        <div className="story-paragraph-wrapper">
                            <p className="story-paragraph">
                                From our vision to reality — creating a legacy of innovation, integrity, and impact.
                                We build not just for today, but for a sustainable future across every sector we touch.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Purpose Section (Amrit Palace Inspired) */}
            <section className="career-purpose-section">
                <div className="container">
                    <h2 className="section-main-heading">Our Journey</h2>
                    <div className="journey-grid-layout">
                        <div className="journey-image-side">
                            <img src={journeyImg} alt="Journey Vision" className="journey-side-image" />
                        </div>
                        <div className="career-content-card">
                            <span className="section-subtitle">Join Our Vision</span>
                            <h2 className="career-title">Build a Career with Purpose</h2>
                            <div className="section-line"></div>
                            <p className="career-description">
                                Discover opportunities across our 9+ business verticals. At RVH Group, we don't just offer jobs —
                                we provide the platform to lead, innovate, and grow in a multi-sector ecosystem.
                            </p>
                            <div className="career-actions">
                                <Link to="/careers" className="btn btn-premium">Explore Roles</Link>
                                <Link to="/about#values" className="btn btn-outline-gold">Our Values</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="milestones-curtain-section" id="milestones">
                <div className="section-header text-center mb-5">
                    <span className="section-subtitle">Our Evolution</span>
                    <h2 className="section-title">Our Journey & Growth</h2>
                    <div className="section-line center"></div>
                </div>

                <div className="milestones-curtain-container">
                    {milestones.map((item, index) => (
                        <div
                            key={index}
                            className={`milestone-curtain-item ${item.isFuture ? 'future' : ''}`}
                            style={{ '--index': index, zIndex: index + 1 }}
                        >
                            <div className="milestone-curtain-card">

                                <div className="milestone-glass-shine"></div>
                                <div className="milestone-bg-year">{item.year}</div>
                                <div className="milestone-content">
                                    <div className="milestone-number-badge">0{index + 1}</div>
                                    <div className="milestone-year-tag">{item.year}</div>
                                    <h3 className="milestone-title">{item.title}</h3>
                                    <p className="milestone-desc">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Sustainability;