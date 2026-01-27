import React from 'react';
import { Link } from 'react-router-dom';
import VerticalsPreview from '../components/VerticalsPreview';

const Businesses = () => {
    return (
        <div className="businesses-page" style={{ paddingTop: '70px' }}>
            <section className="section-padding">
                <div className="container text-center">
                    <span className="section-subtitle">Our Portfolios</span>
                    <h1 className="section-title">Diversified Growth, Shared Values</h1>
                    <div className="section-line center"></div>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-light)' }}>
                        RVH Group operates a diverse portfolio of companies across key industrial sectors.
                        Our businesses are unified by a common commitment to institutional excellence, governance, and long-term value creation.
                    </p>
                </div>
            </section>

            <VerticalsPreview />

            <section className="section-padding bg-light" id="subsidiaries">
                <div className="container">
                    <div className="section-header text-center mb-3">
                        <span className="section-subtitle">Strategic Entities</span>
                        <h2 className="section-title">Key Subsidiaries</h2>
                        <div className="section-line center"></div>
                    </div>

                    <div className="subsidiaries-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
                        <div className="card">
                            <h3>RVH Healthcare Solutions</h3>
                            <p>Specializing in advanced diagnostic equipment and hospital management systems, setting new standards in medical technology.</p>
                        </div>
                        <div className="card">
                            <h3>RVH Infra & Logistics</h3>
                            <p>Building the foundation of tomorrow with sustainable infrastructure projects and optimized supply chain networks.</p>
                        </div>
                        <div className="card">
                            <h3>RVH Digital Synergy</h3>
                            <p>Driving digital transformation through AI-led solutions and bespoke enterprise software development.</p>
                        </div>
                        <div className="card">
                            <h3>RVH Green Energy</h3>
                            <p>Investing in solar and wind power generation to power a cleaner, more sustainable future for the region.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-padding" id="partnerships">
                <div className="container">
                    <div className="section-header text-center mb-3">
                        <span className="section-subtitle">Collaborate With Us</span>
                        <h2 className="section-title">Strategic Partnerships</h2>
                        <div className="section-line center"></div>
                    </div>

                    <div className="partnerships-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                        <div className="card">
                            <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>🤝</span>
                            <h3>Strategic Alliances</h3>
                            <p>Global collaborations aimed at large-scale infrastructure and industrial projects that require shared expertise and resources.</p>
                        </div>
                        <div className="card">
                            <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>📊</span>
                            <h3>Joint Ventures</h3>
                            <p>Targeted co-investment opportunities in our core sectors including Healthcare, Energy, and Logistics for mutual growth.</p>
                        </div>
                        <div className="card">
                            <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>🌐</span>
                            <h3>Supply Chain Integration</h3>
                            <p>For vendors and logistical partners looking to integrate into our diversified industrial ecosystem.</p>
                        </div>
                        <div className="card">
                            <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>💡</span>
                            <h3>Digital & R&D</h3>
                            <p>Technology transfer and research partnerships focused on driving digital transformation across traditional industries.</p>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <p className="mb-2">Are you ready to build the future with us?</p>
                        <Link to="/contact" className="btn btn-primary">Connect With Our Investment Team</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Businesses;
