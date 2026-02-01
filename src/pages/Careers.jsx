import React from 'react';
import './About.css'; // Common styles
import './Careers.css'; // Specific timeline styles

const Careers = () => {
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

    return (
        <div className="careers-page">
            <section className="career-hero" style={{
                height: '80vh',
                background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center',
                paddingTop: '80px'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '900', marginBottom: '1rem', color: 'white' }}>Build Your Future With Us</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>Join a collective of innovative companies and take the next leap in your career journey.</p>
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

                    <div className="timeline-section">
                        <div className="timeline-stepper">
                            {milestones.map((item, index) => (
                                <div key={index} className={`timeline-node ${item.isFuture ? 'future' : ''}`}>
                                    <div className="node-marker"></div>
                                    <div className="node-content">
                                        <div className="node-year">{item.year}</div>
                                        <h3 className="node-title">{item.title}</h3>
                                        <p className="node-desc">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
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
