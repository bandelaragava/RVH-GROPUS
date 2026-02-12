import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './InsightsUpdates.css';

const newsData = [
    {
        id: 1,
        date: 'MAY 15, 2025',
        category: 'Healthcare',
        title: 'RVH Group Expands Healthcare Footprint with New Specialized Facility',
        excerpt: 'Continuing our commitment to institutional excellence, we are proud to announce the latest addition to our healthcare vertical...',
        fullContent: `
            <p>RVH Group is proud to announce the grand opening of its newest specialized healthcare facility, a state-of-the-art center dedicated to advanced surgical procedures and rehabilitative care. This expansion marks a significant milestone in our mission to provide world-class medical services to the region.</p>
            <p>The new facility features 150 beds, cutting-edge diagnostic imaging technology, and a team of internationally trained specialists. By integrating digital health records and AI-driven patient monitoring systems, RVH Group continues to set new benchmarks for surgical innovation and patient outcomes.</p>
            <p>"Our commitment to healthcare excellence is unwavering," stated the RVH Executive Board. "This facility represents our largest investment in medical infrastructure to date, ensuring that specialized care is accessible and governed by the highest institutional standards."</p>
        `,
        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 2,
        date: 'APRIL 22, 2025',
        category: 'Sustainability',
        title: 'Annual Sustainability Report: Achieving Carbon Neutrality Milestones',
        excerpt: 'Our ESG framework continues to guide our operations. This year\'s report highlights significant progress in resource efficiency...',
        fullContent: `
            <p>The RVH Group Annual Sustainability Report 2024 results are in, showcasing a 25% reduction in overall carbon emissions across our industrial verticals. This progress is a testament to our strategic shift toward renewable energy integration and circular economy practices.</p>
            <p>Key highlights include the transition of three manufacturing plants to 100% solar power and the implementation of a zero-waste-to-landfill policy across our logistics network. These initiatives are part of our broader "Legacy 2030" plan to achieve net-zero status.</p>
            <p>RVH Group remains dedicated to transparent governance, ensuring that every subsidiary operates with a deep respect for environmental impact and social responsibility.</p>
        `,
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200'
    },
    {
        id: 3,
        date: 'MARCH 10, 2025',
        category: 'Infrastructure',
        title: 'Strategic Partnership for Infrastructure Development in South Asia',
        excerpt: 'RVH Infrastructure has entered into a strategic joint venture to develop sustainable logistics corridors across key regional hubs...',
        fullContent: `
            <p>RVH Infrastructure has signed a landmark joint venture agreement with global logistics partners to develop three new sustainable industrial corridors. These corridors will serve as strategic hubs for multi-modal transport, connecting emerging markets with international trade routes.</p>
            <p>The project emphasizes the use of smart-grid technology and eco-friendly construction materials, aligning with our commitment to industrial excellence. The first phase of development is expected to create over 5,000 jobs and significantly enhance regional trade efficiency.</p>
            <p>This partnership underscores RVH Group's role as a leader in strategic infrastructure, driving economic growth while maintaining disciplined governance and institutional standards.</p>
        `,
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200'
    }
];

const NewsModal = ({ isVisible, onClose, news }) => {
    if (!isVisible || !news) return null;

    return (
        <div className="news-modal-overlay active" onClick={onClose}>
            <div className="news-modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>×</button>
                <div className="modal-scroll-area">
                    <div className="modal-image-wrapper">
                        <img src={news.image} alt={news.title} className="modal-hero-image" />
                        <div className="modal-overlay-glow"></div>
                    </div>
                    <div className="modal-header-content">
                        <div className="modal-meta">
                            <span className="modal-category">{news.category}</span>
                            <span className="modal-date">{news.date}</span>
                        </div>
                        <h2 className="modal-title">{news.title}</h2>
                    </div>
                    <div className="modal-body-content" dangerouslySetInnerHTML={{ __html: news.fullContent }}></div>
                    <div className="modal-footer">
                        <button className="modal-btn-close" onClick={onClose}>Close Article</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InsightsUpdates = () => {
    const [selectedNews, setSelectedNews] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (news) => {
        setSelectedNews(news);
        setIsModalOpen(true);
        // Prevent scrolling on body
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Re-enable scrolling on body
        document.body.style.overflow = 'unset';
    };

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
                                <button className="card-link" onClick={() => openModal(news)}>
                                    Read More
                                    <span className="link-arrow">→</span>
                                </button>
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

            <NewsModal
                isVisible={isModalOpen}
                onClose={closeModal}
                news={selectedNews}
            />
        </section>
    );
};

export default InsightsUpdates;

