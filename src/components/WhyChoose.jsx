import React from 'react';
import './WhyChoose.css';

const WhyChoose = () => {
    const coreValues = [
        { title: 'Integrity', icon: '⚖️', desc: 'Operating with unwavering ethics and transparency.' },
        { title: 'Innovation', icon: '💡', desc: 'Pushing boundaries with forward-thinking solutions.' },
        { title: 'Excellence', icon: '🏆', desc: 'Commitment to the highest standards of quality.' },
        { title: 'Customer Focus', icon: '🤝', desc: 'Placing our clients at the heart of everything.' },
        { title: 'Sustainability', icon: '🌿', desc: 'Building for the future with responsible growth.' },
        { title: 'Collaboration', icon: '👥', desc: 'Empowering teams to achieve unified success.' },
    ];

    return (
        <section className="why-choose-section section-padding" id="why-choose">
            <div className="container">
                <div className="why-header text-center mb-5">
                    <span className="section-subtitle">The RVH Advantage</span>
                    <h2 className="section-title">Why Choose RVH</h2>
                    <div className="section-line center"></div>
                    <p className="lead-text-centered">
                        Cross-domain expertise, pragmatic execution, and a single partner that runs the end-to-end lifecycle — from planning to scale.
                    </p>
                </div>

                <div className="why-scroll-wrapper">
                    <div className="scrolling-container">
                        <div className="scrolling-track">
                            {/* First set of cards */}
                            {coreValues.map((value, index) => (
                                <div key={`first-${index}`} className="value-card-modern">
                                    <div className="value-icon-wrapper">
                                        <span className="value-icon">{value.icon}</span>
                                    </div>
                                    <div className="value-content">
                                        <h4 className="value-title">{value.title}</h4>
                                        <p className="value-description">{value.desc}</p>
                                    </div>
                                </div>
                            ))}
                            {/* Duplicated set for seamless loop */}
                            {coreValues.map((value, index) => (
                                <div key={`second-${index}`} className="value-card-modern">
                                    <div className="value-icon-wrapper">
                                        <span className="value-icon">{value.icon}</span>
                                    </div>
                                    <div className="value-content">
                                        <h4 className="value-title">{value.title}</h4>
                                        <p className="value-description">{value.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
