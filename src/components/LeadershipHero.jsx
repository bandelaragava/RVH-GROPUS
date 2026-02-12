import React, { useEffect, useRef, useState } from 'react';
import './LeadershipHero.css';

const LeadershipHero = () => {
    const sectionRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionHeight = rect.height;

            // Calculate progress: 0 when top of section hits viewport, 1 when bottom hits viewport
            let progress = 0;
            if (sectionHeight > windowHeight) {
                progress = -rect.top / (sectionHeight - windowHeight);
            }

            // Clamp between 0 and 1
            progress = Math.max(0, Math.min(1, progress));
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to render the content so we can duplicate it exactly for both layers
    const renderContent = () => (
        <div className="leadership-hero-section">
            <div className="leadership-state">
                <span className="hero-label">THAT'S THE</span>
                <h1 className="hero-title">
                    {/* R (Keep) */}
                    <span className="hero-char-keep">R</span>

                    {/* AGHU (Hide) */}
                    <span className="hero-char-hide">AGHU</span>

                    {/* Space (Hide) */}
                    <span className="hero-char-hide">&nbsp;</span>

                    {/* V (Keep) */}
                    <span className="hero-char-keep">V</span>

                    {/* AMSHI (Hide) */}
                    <span className="hero-char-hide">AMSHI</span>

                    {/* Space (Hide) */}
                    <span className="hero-char-hide">&nbsp;</span>

                    {/* H (Keep) */}
                    <span className="hero-char-keep">H</span>

                    {/* AARIPURI (Hide) */}
                    <span className="hero-char-hide">AARIPURI</span>
                </h1>
                <div className="hero-description">
                    Leadership Perspective from our Chairman
                </div>
            </div>
        </div>
    );

    return (
        <section
            className="leadership-hero-container"
            ref={sectionRef}
            style={{ '--scroll-progress': scrollProgress }}
        >
            <div className="leadership-sticky-wrapper">

                {/* Layer 1: Base (Dark BG, White Text) */}
                <div className="leadership-layer layer-base">
                    {renderContent()}
                </div>

                {/* Layer 2: Overlay (Beige BG, Brown Text) - Clipped via CSS */}
                <div className="leadership-layer layer-overlay">
                    {renderContent()}
                </div>

            </div>
        </section>
    );
};

export default LeadershipHero;
