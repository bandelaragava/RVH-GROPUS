import React from 'react';
import { Link } from 'react-router-dom';

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
                    <div className="news-grid" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                        {newsItems.map((item, index) => (
                            <div key={index} className="card">
                                <span style={{ color: 'var(--text-light)', fontSize: '0.8rem' }}>{item.date}</span>
                                <h4 style={{ margin: '1rem 0', fontSize: '1.1rem' }}>{item.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '1rem' }}>{item.excerpt}</p>
                                <a href={item.link} style={{ color: 'var(--primary-color)', fontWeight: '600', fontSize: '0.85rem' }}>READ MORE →</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-padding">
                <div className="container">
                    <div className="card" style={{ padding: '3rem', textAlign: 'center', background: 'var(--primary-color)', color: 'white' }}>
                        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Press Contacts</h2>
                        <p style={{ marginBottom: '2rem', opacity: '0.9' }}>For media inquiries, interview requests, or official brand assets, please reach out to our communications team.</p>
                        <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'white', color: 'var(--primary-color)' }}>Contact PR Team</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Media;
