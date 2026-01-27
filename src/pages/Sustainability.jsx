import React, { useEffect } from 'react';
import ESGContent from '../components/ESGContent';

const Sustainability = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="sustainability-page" style={{ paddingTop: '120px' }}>
            <div className="container" style={{ textAlign: 'center', marginBottom: '4rem', marginTop: '2rem' }}>
                <span className="section-subtitle">Our Framework</span>
                <h1 className="section-title">The Three Pillars of ESG</h1>
                <div className="section-line" style={{ margin: '0 auto' }}></div>
            </div>
            <ESGContent showHeader={false} />

            <section className="section-padding bg-white">
                <div className="container">
                    <div className="card" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h3>Policy Documents</h3>
                        <p style={{ margin: '1rem 0' }}>Access our comprehensive policy documents and annual sustainability reports.</p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                            <button className="btn btn-outline" style={{ border: '1px solid var(--primary-color)' }}>ESG Report 2024 (PDF)</button>
                            <button className="btn btn-outline" style={{ border: '1px solid var(--primary-color)' }}>Governance Code (PDF)</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Sustainability;
