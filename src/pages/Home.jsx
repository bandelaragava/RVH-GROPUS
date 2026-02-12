import React from 'react';
import Hero from '../components/Hero';
import SourcesOverview from '../components/SourcesOverview';
import WhyChoose from '../components/WhyChoose';
import InsightsUpdates from '../components/InsightsUpdates';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <Hero />
            <SourcesOverview />

            <WhyChoose />
            <section className="section-padding" id="momentum">
                <div className="container text-center">
                    <span className="section-subtitle">Leadership & Future Momentum</span>
                    <h2 className="section-title" style={{ marginBottom: '1rem' }}>Digital Transformation & Human Development</h2>
                    <div className="section-line center" style={{ margin: '1rem auto' }}></div>
                    <p style={{ maxWidth: '800px', margin: '0 auto 1.5rem', color: 'var(--text-light)' }}>
                        RVH Group is committed to building a connected ecosystem that delivers end-to-end solutions across technology, infrastructure, marketing, and talent development.
                    </p>
                    <Link to="/about" className="btn btn-primary">
                        Know More About Us
                    </Link>
                </div>
            </section>

            {/* Latest News Section - Now using InsightsUpdates component */}
            <InsightsUpdates />


        </>
    );
};

export default Home;
