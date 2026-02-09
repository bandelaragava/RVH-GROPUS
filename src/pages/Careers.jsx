import React from 'react';
import './About.css'; // Common styles
import './Careers.css'; // Specific timeline styles

const Careers = () => {
    return (
        <div className="careers-page">
            <section className="career-hero-surgical">
                <div className="hero-surgical-bg">
                    <img
                        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2400"
                        alt="Modern Workspace"
                    />
                    <div className="hero-surgical-overlay-dark"></div>
                </div>
                <div className="container">
                    <div className="hero-surgical-content-centered">
                        <span className="hero-surgical-tagline">Join the Intelligence</span>
                        <h1 className="hero-surgical-title">
                            Build Your <br />
                            <span className="accent-outline">Future Legacy</span>
                        </h1>
                        <p className="hero-surgical-subtitle-centered">
                            Become part of a elite multi-sector collective driving industrial progress and operational excellence across the globe.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding bg-light">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <span className="section-subtitle">Join Our Team</span>
                        <h1 className="section-title">Careers at RVH Group</h1>
                        <div className="section-line center"></div>
                        <p className="lead-text mt-4" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-light)' }}>
                            At RVH Group, we believe talent is the foundation of every successful company. As a growing Group of Companies operating across multiple industries, we offer diverse career opportunities that enable individuals to learn, lead, and grow within a dynamic ecosystem.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <h2 className="section-title">Grow your career across multiple companies</h2>
                        <p style={{ maxWidth: '800px', margin: '1rem auto', color: 'var(--text-light)' }}>
                            We are a group of specialized companies — technology, marketing, HR, finance, training and more. Find roles by company, function or location.
                        </p>
                    </div>


                    <div className="text-center mt-5">
                        <div className="card" style={{ display: 'inline-block', padding: '3rem', maxWidth: '600px', border: 'none', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                            <h3 className="mb-2" style={{ color: 'var(--primary-color)' }}>Quick Apply</h3>
                            <p className="mb-3" style={{ color: 'var(--text-light)' }}>Apply for a role or send your CV to be considered across the group.</p>
                            <a href="mailto:careers@rvhgroups.com" className="btn career-cta-btn">Submit Your CV</a>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Careers;
