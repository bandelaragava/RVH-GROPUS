import React from 'react';
import { Link } from 'react-router-dom';
import './InsightsUpdates.css';

const newsData = [
    {
        id: 1,
        date: 'MAY 15, 2025',
        category: 'Healthcare',
        title: 'RVH Group Expands Healthcare Footprint with New Specialized Facility',
        excerpt: 'Continuing our commitment to institutional excellence, we are proud to announce the latest addition to our healthcare vertical...',
        link: '#news-1'
    },
    {
        id: 2,
        date: 'APRIL 22, 2025',
        category: 'Sustainability',
        title: 'Annual Sustainability Report: Achieving Carbon Neutrality Milestones',
        excerpt: 'Our ESG framework continues to guide our operations. This year\'s report highlights significant progress in resource efficiency...',
        link: '#news-2'
    },
    {
        id: 3,
        date: 'MARCH 10, 2025',
        category: 'Infrastructure',
        title: 'Strategic Partnership for Infrastructure Development in South Asia',
        excerpt: 'RVH Infrastructure has entered into a strategic joint venture to develop sustainable logistics corridors across key regional hubs...',
        link: '#news-3'
    }
];

const InsightsUpdates = () => {
    return (
        <section className="insights-updates-section" id="news">
            <div className="container">
                <div className="insights-header">
                    <span className="insights-subtitle">Insights & Updates</span>
                    <h2 className="insights-title">Latest from RVH</h2>
                    <div className="insights-divider"></div>
                </div>

                <div className="insights-grid">
                    {newsData.map((news) => (
                        <div key={news.id} className="insight-card">
                            <div className="card-gradient-border"></div>
                            <div className="card-content">
                                <div className="card-header">
                                    <span className="card-category">{news.category}</span>
                                    <span className="card-date">{news.date}</span>
                                </div>
                                <h4 className="card-title">{news.title}</h4>
                                <p className="card-excerpt">{news.excerpt}</p>
                                <a href={news.link} className="card-link">
                                    Read More
                                    <span className="link-arrow">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="insights-cta">
                    <Link to="/media" className="btn-view-all">
                        <span>View All Updates</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default InsightsUpdates;
