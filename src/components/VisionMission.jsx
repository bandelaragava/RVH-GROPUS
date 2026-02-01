import React, { useState } from 'react';
import './VisionMission.css';
import visionBg from '../assets/vision-bg.png';
import missionBg from '../assets/mission-bg.png';
import valuesBg from '../assets/values-bg.png';

const VisionMission = () => {
    const [hoveredSection, setHoveredSection] = useState(null);

    return (
        <section className="vision-mission-section" id="vision">
            <div className="vm-container">

                {/* Vision Block */}
                <div
                    className={`vm-block vision-block ${hoveredSection === 'vision' ? 'active' : ''}`}
                    onMouseEnter={() => setHoveredSection('vision')}
                    onMouseLeave={() => setHoveredSection(null)}
                    style={{ backgroundImage: `url(${visionBg})` }}
                >
                    <div className="vm-overlay"></div>
                    <div className="vm-content">
                        <h2 className="vm-title">OUR VISION</h2>
                        <div className="vm-details">
                            <p>To be a globally recognized, multi-sector business group that transforms industries through innovation, integrity, and excellence.</p>
                        </div>
                    </div>
                </div>

                {/* Mission Block */}
                <div
                    className={`vm-block mission-block ${hoveredSection === 'mission' ? 'active' : ''}`}
                    onMouseEnter={() => setHoveredSection('mission')}
                    onMouseLeave={() => setHoveredSection(null)}
                    style={{ backgroundImage: `url(${missionBg})` }}
                >
                    <div className="vm-overlay"></div>
                    <div className="vm-content">
                        <h2 className="vm-title">OUR MISSION</h2>
                        <div className="vm-details">
                            <p>To deliver high-quality, customer-centric services and solutions that create lasting value while empowering people, businesses, and communities.</p>
                        </div>
                    </div>
                </div>

                {/* Core Values Block */}
                <div
                    className={`vm-block values-block ${hoveredSection === 'values' ? 'active' : ''}`}
                    onMouseEnter={() => setHoveredSection('values')}
                    onMouseLeave={() => setHoveredSection(null)}
                    style={{ backgroundImage: `url(${valuesBg})` }}
                >
                    <div className="vm-overlay"></div>
                    <div className="vm-content">
                        <h2 className="vm-title">OUR CORE VALUES</h2>
                        <div className="vm-details">
                            <ul className="vm-values-list">
                                <li>Integrity</li>
                                <li>Innovation</li>
                                <li>Excellence</li>
                                <li>Customer Focus</li>
                                <li>Sustainability</li>
                                <li>Collaboration</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default VisionMission;
