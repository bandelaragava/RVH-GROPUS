import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OrbitingLogos from '../components/OrbitingLogos';
import '../components/Partnerships.css';

const Businesses = () => {
    const [selectedSector, setSelectedSector] = useState({
        name: 'Industrial Ecosystem',
        desc: 'Select a sector icon in the orbits to explore our diversified industrial capabilities and institutional excellence.',
        subs: 'Multi-Sector Integration'
    });

    return (
        <div className="businesses-page">
            <section className="businesses-hero" style={{
                height: '85vh',
                background: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
            }}>
                <div className="hero-split-overlay">
                    <div className="container">
                        <div style={{ maxWidth: '700px', textAlign: 'left' }}>
                            <span className="section-subtitle" style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>The Enterprise Standard</span>
                            <h1 style={{ fontSize: '4.5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem', color: 'white' }}>Institutional <br />Excellence</h1>
                            <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', borderLeft: '3px solid var(--accent-gold)', paddingLeft: '1.5rem' }}>
                                Driving multi-sector progress through governed innovation and strategic industrial integration.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* 
            <section className="section-padding section-light-transition">
                <div className="container">
                    <div className="section-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span className="section-subtitle">Governance & Growth</span>
                            <h2 className="section-title">The Foundation of Success</h2>
                            <div className="section-line"></div>
                        </div>
                        <div>
                            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--text-light)' }}>
                                At RVH Group, we believe talent is the foundation of every successful company. As a growing Group of Companies operating across multiple industries, we offer diverse career opportunities that enable individuals to lead and grow within a dynamic ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}


            <section className="subsidiaries-institutional" id="subsidiaries">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-subtitle">The Ecosystem</span>
                        <h2 className="section-title">Subsidiary Architecture</h2>
                        <div className="section-line center"></div>
                    </div>

                    <div className="orbit-split-grid">
                        <div className="orbit-content-side">
                            <div className="intelligence-panel" key={selectedSector.name} style={{
                                padding: '2rem',
                                background: 'rgba(255, 255, 255, 0.4)',
                                backdropFilter: 'blur(20px)',
                                borderRadius: '24px',
                                border: '1px solid rgba(197, 160, 89, 0.1)',
                                boxShadow: '0 20px 50px rgba(0, 51, 102, 0.03)'
                            }}>
                                <span className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 1rem 0', color: '#A67C00', fontWeight: 700, letterSpacing: '2px', fontSize: '0.8rem' }}>GLOBAL OPERATIONS HUB</span>
                                <h3 style={{
                                    fontSize: '2.0rem',
                                    fontWeight: '900',
                                    background: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    marginBottom: '0.4rem',
                                    lineHeight: '1.1',
                                    fontFamily: "'Outfit', sans-serif",
                                    letterSpacing: '-0.02em',
                                }}>
                                    {selectedSector.name.split(' & ')[0]} <br />
                                    <span style={{
                                        WebkitTextFillColor: '#b9277cff',
                                        opacity: 0.9,
                                        fontSize: '1.4rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        fontFamily: "'Inter', sans-serif"
                                    }}>
                                        {selectedSector.name.split(' & ')[1] || 'Sector'}
                                    </span>
                                </h3>
                                <p style={{
                                    fontSize: '0.98rem',
                                    color: '#475569',
                                    lineHeight: '1.7',
                                    marginBottom: '1rem'
                                }}>
                                    {selectedSector.desc}
                                </p>

                                <div className="sector-meta" style={{
                                    borderLeft: '4px solid var(--accent-gold)',
                                    paddingLeft: '1.5rem',
                                    marginBottom: '3rem'
                                }}>
                                    <h4 style={{ color: '#ac27b9ff', fontSize: '0.8rem', marginBottom: '0.5rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>Sector Focus</h4>
                                    <p style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '1.2rem' }}>{selectedSector.subs}</p>
                                </div>

                                <div className="stat-hub-grid" style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: '1rem',
                                    marginTop: '2rem',
                                    padding: '1.2rem',
                                    background: 'rgba(248, 250, 252, 0.6)',
                                    borderRadius: '16px',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(197, 160, 89, 0.15)'
                                }}>
                                    <div className="stat-item">
                                        <span style={{
                                            display: 'block',
                                            fontSize: '1.3rem',
                                            fontWeight: 900,
                                            background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}>15+</span>
                                        <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.1em', fontWeight: 700 }}>Associates</span>
                                    </div>
                                    <div className="stat-item">
                                        <span style={{
                                            display: 'block',
                                            fontSize: '1.3rem',
                                            fontWeight: 900,
                                            background: 'linear-gradient(135deg, #D97706 0%, #B45309 100%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}>100%</span>
                                        <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.1em', fontWeight: 700 }}>Governed</span>
                                    </div>
                                    <div className="stat-item">
                                        <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 800, color: 'var(--deep-navy)' }}>Global</span>
                                        <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--text-light)', letterSpacing: '1px' }}>Vision</span>
                                    </div>
                                </div>
                            </div>


                            <div style={{ marginTop: '3rem' }}>
                                <Link to="/about" className="btn-partnership-secondary" style={{ padding: '1rem 2.5rem', marginLeft: '0' }}>
                                    Learn Our Strategy →
                                </Link>
                            </div>
                        </div>

                        <div className="orbit-visual-side">
                            <OrbitingLogos
                                onSectorSelect={(sector) => setSelectedSector(sector)}
                            />
                        </div>
                    </div>

                    <div className="subsidiaries-grid-premium">
                        <div className="subsidiary-card-minimal">
                            <span className="subsidiary-index">01 / TECH</span>
                            <h3>FutureInvo</h3>
                            <p>Specialized in enterprise software solutions and digital infrastructure. A leader in network excellence and digital transformation.</p>
                            <a href="https://www.futureinvo.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Access Platform →</a>
                        </div>
                        <div className="subsidiary-card-minimal">
                            <span className="subsidiary-index">02 / ACADEMY</span>
                            <h3>Gyantrix Academy</h3>
                            <p>Our dedicated wing for training and professional development, empowering talent with industry-focused learning systems.</p>
                            <Link to="/careers" style={{ color: 'var(--accent-gold)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>View Courses →</Link>
                        </div>
                        <div className="subsidiary-card-minimal">
                            <span className="subsidiary-index">03 / CREATIVE</span>
                            <h3>RVH Digital Marketing</h3>
                            <p>Integrated marketing strategies focusing on brand equity, search dominance, and creative social engagement.</p>
                        </div>
                        <div className="subsidiary-card-minimal">
                            <span className="subsidiary-index">04 / TALENT</span>
                            <h3>RVH HR & Talent</h3>
                            <p>Strategic human capital management, focused on recruitment architecture and sustainable career development.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="partnerships-executive" id="partnerships">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-subtitle">Capital & Collaboration</span>
                        <h2 className="section-title">Strategic Partnerships</h2>
                        <div className="section-line center"></div>
                        <p className="section-intro">
                            We invite institutional partners and industry leaders to collaborate on transformative projects that shape the future of multi-sector enterprise.
                        </p>
                    </div>

                    <div className="partnerships-grid-premium">
                        {/* Featured Partnership */}
                        <div className="partnership-card-featured">
                            <span className="partnership-badge">Featured Opportunity</span>
                            <h3>Strategic Joint Ventures</h3>
                            <p>
                                Partner with RVH Group on large-scale co-investment opportunities across Healthcare, Energy, and Infrastructure. We seek institutional partners ready to commit capital and expertise to projects with significant regional impact.
                            </p>
                            <div className="partnership-features">
                                <span className="feature-tag">$50M+ Projects</span>
                                <span className="feature-tag">Multi-Year Commitments</span>
                                <span className="feature-tag">Equity Participation</span>
                            </div>
                        </div>

                        {/* Standard Partnership 1 */}
                        <div className="partnership-card-pro" style={{ backgroundImage: `url('/src/assets/strategic-alliances.png')` }}>
                            <div className="card-pro-overlay"></div>
                            <div className="card-pro-content">
                                <div className="card-pro-header">
                                    <div className="partnership-number">01</div>
                                    <div className="partnership-icon-modern">🤝</div>
                                </div>
                                <div className="card-pro-body">
                                    <h3>Strategic Alliances</h3>
                                    <p>
                                        Global collaborations for large-scale infrastructure and industrial projects requiring shared expertise and resources.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Standard Partnership 2 */}
                        <div className="partnership-card-pro" style={{ backgroundImage: `url('/src/assets/supply-chain.png')` }}>
                            <div className="card-pro-overlay"></div>
                            <div className="card-pro-content">
                                <div className="card-pro-header">
                                    <div className="partnership-number">02</div>
                                    <div className="partnership-icon-modern">🌐</div>
                                </div>
                                <div className="card-pro-body">
                                    <h3>Supply Chain Integration</h3>
                                    <p>
                                        Vendor partnerships and logistical integration opportunities within our diversified industrial ecosystem.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Standard Partnership 3 */}
                        <div className="partnership-card-pro" style={{ backgroundImage: `url('/src/assets/tech-rnd.png')` }}>
                            <div className="card-pro-overlay"></div>
                            <div className="card-pro-content">
                                <div className="card-pro-header">
                                    <div className="partnership-number">03</div>
                                    <div className="partnership-icon-modern">💡</div>
                                </div>
                                <div className="card-pro-body">
                                    <h3>Technology & R&D</h3>
                                    <p>
                                        Research partnerships and technology transfer programs driving digital transformation across traditional industries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="partnership-cta-modern">
                        <h3>Ready to Explore Partnership Opportunities?</h3>
                        <p>
                            Our investment team is available to discuss strategic collaboration, co-investment structures, and partnership frameworks tailored to your institutional objectives.
                        </p>
                        <Link to="/contact" className="btn-partnership-primary">
                            Schedule Consultation
                        </Link>
                        <Link to="/investor-relations" className="btn-partnership-secondary">
                            View Investment Deck
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Businesses;
