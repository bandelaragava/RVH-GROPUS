import React from 'react';
import { Link } from 'react-router-dom';
import './Media.css';

const newsItems = [
    {
        date: 'MAY 15, 2025',
        title: 'RVH Group Expands Healthcare Footprint with New Specialized Facility',
        excerpt: 'Continuing our commitment to institutional excellence, we are proud to announce the latest addition to our healthcare vertical...',
        link: '#news-1'
    },
    {
        date: 'APRIL 22, 2025',
        title: 'Annual Sustainability Report: Achieving Carbon Neutrality Milestones',
        excerpt: 'Our ESG framework continues to guide our operations. This year\'s report highlights significant progress in resource efficiency...',
        link: '#news-2'
    },
    {
        date: 'MARCH 10, 2025',
        title: 'Strategic Partnership for Infrastructure Development in South Asia',
        excerpt: 'RVH Infrastructure has entered into a strategic joint venture to develop sustainable logistics corridors across key regional hubs...',
        link: '#news-3'
    },
    {
        date: 'FEBRUARY 28, 2025',
        title: 'Innovation Lab Launch: Pioneering AI in Logistics Operations',
        excerpt: 'The new RVH Innovation Lab will focus on developing proprietary algorithms to optimize multi-modal transport networks...',
        link: '#news-4'
    },
    {
        date: 'JANUARY 15, 2025',
        title: 'Quarterly Financial Results: Robust Growth Across Portfolio Companies',
        excerpt: 'RVH Group reports a 15% YoY increase in consolidated revenue, driven by strong performance in our core infrastructure and finance verticals...',
        link: '#news-5'
    },
    {
        date: 'DECEMBER 05, 2024',
        title: 'Community Empowerment Initiative Reaches 10,000 Beneficiaries',
        excerpt: 'Our social impact program continues to deliver value through vocational training and healthcare access in underserved regions...',
        link: '#news-6'
    }
];

const Media = () => {
    return (
        <div className="media-page" style={{ paddingTop: '80px' }}>
            <section className="section-padding">
                <div className="container text-center">
                    <span className="section-subtitle">News & Updates</span>
                    <h1 className="section-title">Media Center</h1>
                    <div className="section-line center"></div>
                    <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-light)' }}>
                        Stay updated with the latest institutional milestones, strategic announcements, and industry insights from the RVH Group.
                    </p>
                </div>
            </section>

            <section className="section-padding bg-light">
                <div className="container">
                    <div className="news-grid">
                        {newsItems.map((item, index) => (
                            <div key={index} className="news-card-wrapper">
                                <article className="news-card">
                                    <div className="news-index">{(index + 1).toString().padStart(2, '0')}</div>
                                    <div className="news-card-image">
                                        <img
                                            src={`https://images.unsplash.com/photo-${[
                                                '1504384308090-c894fdcc538d',
                                                '1460925895917-afdab827c52f',
                                                '1551288049-bebda4e38f71',
                                                '1451187580459-43490279c0fa',
                                                '1526628953301-3e589a6a8b74',
                                                '1517245386807-bb43f82c33c4'
                                            ][index]}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                                            alt={item.title}
                                        />
                                    </div>
                                    <div className="news-card-content">
                                        <span className="news-date">{item.date}</span>
                                        <h4 className="news-title">{item.title}</h4>
                                        <p className="news-excerpt">{item.excerpt}</p>
                                        <a href={item.link} className="news-link">
                                            READ FULL ARTICLE
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </a>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="press-section">
                <div className="press-bg-decor"></div>
                <div className="container">
                    <div className="press-contact-card">
                        <h2 style={{ color: '#784e4e' }}>Press Contacts</h2>
                        <p style={{ color: 'rgba(58, 57, 57, 0.85)' }}>For media inquiries, interview requests, or official brand assets, please reach out to our global communications team.</p>
                        <Link to="/contact" className="btn-modern">Contact PR Team</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Media;
