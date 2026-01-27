import React from 'react';
import './VisionMission.css';

const VisionIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="vm-icon-svg">
        <path d="M32 56C45.2548 56 56 45.2548 56 32C56 18.7452 45.2548 8 32 8C18.7452 8 8 18.7452 8 32C8 45.2548 18.7452 56 32 56Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 44C38.6274 44 44 38.6274 44 32C44 25.3726 38.6274 20 32 20C25.3726 20 20 25.3726 20 32C20 38.6274 25.3726 44 32 44Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 36C34.2091 36 36 34.2091 36 32C36 29.7909 34.2091 28 32 28C29.7909 28 28 29.7909 28 32C28 34.2091 29.7909 36 32 36Z" fill="currentColor" />
        <path d="M2.5 32H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M56 32H61.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 2.5V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 56V61.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const MissionIcon = () => (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="vm-icon-svg">
        <path d="M50.5 13.5L38.5 25.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M47.5 16.5C53.0228 10.9772 56 5 56 5C56 5 50.0228 7.97715 44.5 13.5L47.5 16.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M25.5 38.5L13.5 50.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M28.5 35.5C22.9772 30.0228 17 27 17 27C17 27 19.9772 32.9772 25.5 38.5L28.5 35.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M38.5 25.5L25.5 38.5C21.9003 42.0997 19.5 45.5 19.5 45.5L13.5 50.5L8 56L13.5 50.5L18.5 44.5C18.5 44.5 21.9003 42.0997 25.5 38.5L38.5 25.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M52 52L44 44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const VisionMission = () => {
    return (
        <section className="section-padding vision-mission-section" id="vision">
            <div className="container">
                <div className="vision-mission-grid">
                    <div className="vm-card vision-box">
                        <div className="vm-icon-wrapper">
                            <VisionIcon />
                        </div>
                        <h3 className="vm-title">Our Vision</h3>
                        <p className="vm-text">
                            To be the most trusted and diversified business group, creating sustainable value through institutional excellence and innovative leadership across all our sectors.
                        </p>
                    </div>

                    <div className="vm-card mission-box">
                        <div className="vm-icon-wrapper">
                            <MissionIcon />
                        </div>
                        <h3 className="vm-title">Our Mission</h3>
                        <p className="vm-text">
                            We are committed to building long-term, high-growth businesses that empower communities, drive economic progress, and uphold the highest standards of governance and capital discipline.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
