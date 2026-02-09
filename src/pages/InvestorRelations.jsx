import React from 'react';
import { Link } from 'react-router-dom';
import './InvestorRelations.css';

const InvestorRelations = () => {
    const reports = [
        { year: '2024', title: 'Annual Report 2024', type: 'Annual', date: 'May 15, 2024' },
        { year: '2023', title: 'Q4 Financial Results', type: 'Quarterly', date: 'Feb 10, 2024' },
        { year: '2023', title: 'Annual Report 2023', type: 'Annual', date: 'May 20, 2023' },
        { year: '2023', title: 'ESG Sustainability Report', type: 'Special', date: 'June 12, 2023' },
    ];

    const highlights = [
        { label: 'Revenue Growth', value: '+18%', period: 'YoY' },
        { label: 'EBITDA Margin', value: '24.5%', period: 'FY24' },
        { label: 'Total Assets', value: '$840M', period: 'Current' },
        { label: 'Market Presence', value: '5+', period: 'Countries' },
    ];

    return (
        <div className="ir-page" style={{ paddingTop: '80px' }}>
            <section className="ir-hero section-padding text-white">
                <div className="container">
                    <span className="section-subtitle" style={{ color: 'var(--secondary-color)' }}>Financial Excellence</span>
                    <h1 className="section-title text-white">Investor Relations</h1>
                    <div className="section-line"></div>
                    <p style={{ maxWidth: '700px', fontSize: '1.2rem', opacity: '0.9' }}>
                        RVH Group is committed to delivering sustainable long-term value to our shareholders through disciplined capital allocation, institutional governance, and operational excellence.
                    </p>
                </div>
            </section>

            <section className="highlights-section section-padding">
                <div className="container">
                    <div className="section-header text-center mb-3">
                        <span className="section-subtitle">Performance</span>
                        <h2 className="section-title">Financial Highlights</h2>
                        <div className="section-line center"></div>
                    </div>
                    <div className="highlights-grid">
                        {highlights.map((item, index) => (
                            <div key={index} className="highlight-card">
                                <span className="highlight-label">{item.label}</span>
                                <span className="highlight-value">{item.value}</span>
                                <span className="highlight-period">{item.period}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="reports-section section-padding bg-light">
                <div className="container">
                    <div className="section-header mb-3">
                        <span className="section-subtitle">Transparency</span>
                        <h2 className="section-title">Reports & Filings</h2>
                        <div className="section-line"></div>
                    </div>

                    <div className="reports-list card">
                        <table className="ir-table">
                            <thead>
                                <tr>
                                    <th>Year</th>
                                    <th>Title</th>
                                    <th>Type</th>
                                    <th>Publication Date</th>
                                    <th>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reports.map((report, index) => (
                                    <tr key={index}>
                                        <td className="fw-700">{report.year}</td>
                                        <td>{report.title}</td>
                                        <td><span className={`tag tag-${report.type.toLowerCase()}`}>{report.type}</span></td>
                                        <td>{report.date}</td>
                                        <td>
                                            <button className="btn-text">Download PDF ↓</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="ir-contact section-padding">
                <div className="container text-center">
                    <div className="card ir-services-card">
                        <h2 className="mb-2">Investor Services</h2>
                        <p className="mb-3">For specific inquiries regarding shareholding, financial statements, or institutional investment opportunities, please reach out to our IR team.</p>
                        <div className="ir-actions">
                            <a href="mailto:ir@rvhgroups.com" className="btn btn-primary">Email IR Team</a>
                            <Link to="/contact" className="btn btn-outline-blue">General Inquiries</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InvestorRelations;
