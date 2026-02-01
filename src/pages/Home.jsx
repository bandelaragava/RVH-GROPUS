import React from 'react';
import Hero from '../components/Hero';
import SourcesOverview from '../components/SourcesOverview';
import WhyChoose from '../components/WhyChoose';
import careerRoad from '../assets/careerRoad.png';

import ChairmanMessage from '../components/ChairmanMessage';
import VisionMission from '../components/VisionMission';
import InsightsUpdates from '../components/InsightsUpdates';
import { Link } from 'react-router-dom';
import '../components/CareerCTA.css';


const Home = () => {
    return (
        <>
            <Hero />
            <SourcesOverview />

            {/* Career Section with roadMap image */}
            <section className="career-cta-section">
                <div className="container">
                    <div className="career-content-grid">
                        <div className="career-image-col">
                            <img src={careerRoad} alt="RVH Road Map" className="career-road-map" />
                        </div>
                        <div className="career-text-col">
                            <span className="section-subtitle">Join the Evolution</span>
                            <h2 className="section-title">Build a Career with Purpose</h2>
                            <p className="career-p">
                                Discover opportunities across our 9+ business verticals. At RVH Group, we don't just offer jobs — we provide the platform to lead, innovate, and grow in a multi-sector ecosystem.
                            </p>
                            <div className="cta-buttons">
                                <Link to="/careers" className="btn btn-primary" style={{ marginRight: '1rem' }}>Explore Roles</Link>
                                <Link to="/about" className="btn btn-outline">Our Values</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WhyChoose />
            <section className="section-padding" id="momentum">
                <div className="container text-center">
                    <span className="section-subtitle">Leadership & Future Momentum</span>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>Digital Transformation & Human Development</h2>
                    <div className="section-line center" style={{ margin: '1rem auto' }}></div>
                    <p style={{ maxWidth: '800px', margin: '0 auto 1.5rem', color: 'var(--text-light)' }}>
                        RVH Group is committed to building a connected ecosystem that delivers end-to-end solutions across technology, infrastructure, marketing, and talent development.
                    </p>
                    <Link to="/about" className="btn btn-primary">
                        Know More About Us
                    </Link>
                </div>
            </section>

            {/* Latest News Section - Now using InsightsUpdates component */}
            <InsightsUpdates />

            {/* Sustainability CTA */}
            <section className="section-padding bg-light" id="sustainability">
                <div className="container text-center">
                    <h2 className="mb-1">Commitment to ESG</h2>
                    <p className="mb-2" style={{ maxWidth: '700px', margin: '0 auto 2rem' }}>We operate with a deep sense of responsibility towards our environment, our society, and our stakeholders. Our governance-first mindset ensures sustainable growth across all sectors.</p>
                    <Link to="/sustainability" className="btn btn-primary">Learn About Our ESG Pillars</Link>
                </div>
            </section>
        </>
    );
};

export default Home;
