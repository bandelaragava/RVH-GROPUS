import React from 'react';
import Hero from '../components/Hero';
import SourcesOverview from '../components/SourcesOverview';

import ChairmanMessage from '../components/ChairmanMessage';
import VisionMission from '../components/VisionMission';
import { Link } from 'react-router-dom';
import '../components/VerticalsPreview.css';

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

const Home = () => {
    return (
        <>
            <Hero />
            <SourcesOverview />
            {/* Businesses Teaser */}
            <section className="section-padding bg-light" id="businesses">
                <div className="container text-center">
                    <span className="section-subtitle">Diverse Portfolios</span>
                    <h2 className="section-title">Institutional Leadership Across 18+ Companies</h2>
                    <div className="section-line center"></div>
                    <p style={{ maxWidth: '800px', margin: '0 auto 2rem', color: 'var(--text-light)' }}>
                        From Healthcare to Renewable Energy, our businesses are market leaders driven by governance and institutional excellence.
                    </p>

                    <div className="verticals-grid" style={{ marginBottom: '2rem' }}>
                        {sectors.map((sector, index) => (
                            <div key={index} className="minimal-card">
                                <span className="minimal-icon">{sector.icon}</span>
                                <span className="minimal-title">{sector.title}</span>
                            </div>
                        ))}
                    </div>
                    <Link to="/businesses" className="btn btn-primary">
                        Explore Our Sectors
                    </Link>
                </div>
            </section>
            <section className="section-padding" id="about" style={{ padding: '2rem 0' }}>
                <div className="container text-center">
                    <span className="section-subtitle">Heritage of Trust</span>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>Rooted in Excellence, Driven by Innovation</h2>
                    <div className="section-line center" style={{ margin: '1rem auto' }}></div>
                    <p style={{ maxWidth: '800px', margin: '0 auto 1.5rem', color: 'var(--text-light)' }}>
                        RVH Group is a multi-sector conglomerate with a distinguished legacy in institutional growth.
                        We specialize in sectors that form the backbone of modern civilization.
                    </p>
                    <Link to="/about" className="btn btn-outline" style={{ border: '1px solid var(--primary-color)', color: 'var(--primary-color)' }}>
                        Discover Our Story
                    </Link>
                </div>
            </section>

            {/* Latest News Section */}
            <section className="section-padding" id="news">
                <div className="container">
                    <div className="section-header text-center mb-3">
                        <span className="section-subtitle">Insights & Updates</span>
                        <h2 className="section-title">Latest from RVH</h2>
                        <div className="section-line center"></div>
                    </div>
                    <div className="news-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                        <div className="card">
                            <span style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>MAY 15, 2025</span>
                            <h4 style={{ margin: '1rem 0', fontSize: '1.1rem' }}>RVH Group Expands Healthcare Footprint with New Specialized Facility</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '1rem' }}>Continuing our commitment to institutional excellence, we are proud to announce the latest addition to our healthcare vertical...</p>
                            <a href="#news-1" style={{ color: 'var(--primary-color)', fontWeight: '600', fontSize: '0.85rem' }}>READ MORE →</a>
                        </div>
                        <div className="card">
                            <span style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>APRIL 22, 2025</span>
                            <h4 style={{ margin: '1rem 0', fontSize: '1.1rem' }}>Annual Sustainability Report: Achieving Carbon Neutrality Milestones</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '1rem' }}>Our ESG framework continues to guide our operations. This year's report highlights significant progress in resource efficiency...</p>
                            <a href="#news-2" style={{ color: 'var(--primary-color)', fontWeight: '600', fontSize: '0.85rem' }}>READ MORE →</a>
                        </div>
                        <div className="card">
                            <span style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>MARCH 10, 2025</span>
                            <h4 style={{ margin: '1rem 0', fontSize: '1.1rem' }}>Strategic Partnership for Infrastructure Development in South Asia</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '1rem' }}>RVH Infrastructure has entered into a strategic joint venture to develop sustainable logistics corridors across key regional hubs...</p>
                            <a href="#news-3" style={{ color: 'var(--primary-color)', fontWeight: '600', fontSize: '0.85rem' }}>READ MORE →</a>
                        </div>
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/media" className="btn btn-outline" style={{ border: '1px solid var(--primary-color)', color: 'var(--primary-color)' }}>
                            View All Updates
                        </Link>
                    </div>
                </div>
            </section>

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
