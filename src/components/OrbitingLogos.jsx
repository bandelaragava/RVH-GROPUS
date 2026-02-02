import React, { useState } from 'react';
import './OrbitingLogos.css';

import logoMain from '../assets/logo.png';

const innerSectors = [
    { id: 'IT', icon: '💻', name: 'SOFTWARE & IT', shortName: 'IT', desc: 'Enterprise digital core systems and scaled infrastructure.', subs: 'FutureInvo Systems' },
    { id: 'FIN', icon: '📈', name: 'FINANCE & COMPLIANCE', shortName: 'FIN', desc: 'Regulated asset management and institutional governance.', subs: 'RVH Capital' },
    { id: 'HR', icon: '🤝', name: 'HR & TALENT', shortName: 'HR', desc: 'Strategic workforce planning and leadership development.', subs: 'RVH Global Talent' },
    { id: 'EDU', icon: '🎓', name: 'EDUCATION', shortName: 'EDU', desc: 'Industry-integrated academic frameworks and advanced learning.', subs: 'Gyantrix Academy' },
    { id: 'VER', icon: '📝', name: 'VERIFICATION', shortName: 'ID', desc: 'Data-driven identity intelligence and compliance systems.', subs: 'Verify360' },
    { id: 'SUPP', icon: '🛠️', name: 'TECHNICAL SUPPORT', shortName: 'TECH', desc: 'Managed specialized industrial and technical support infra.', subs: 'FutureInvo Support' }
];

const outerSectors = [
    { id: 'INF', icon: '🏗️', name: 'INFRASTRUCTURE', shortName: 'INFRA', desc: 'Large-scale industrial civil engineering and development.', subs: 'RVH Projects' },
    { id: 'MED', icon: '🏥', name: 'MEDICAL SYSTEMS', shortName: 'MED', desc: 'Technology-enabled medical excellence and patient systems.', subs: 'RVH Health' },
    { id: 'NRG', icon: '⚡', name: 'RENEWABLE ENERGY', shortName: 'NRG', desc: 'Sustainable energy production and smart grid integration.', subs: 'RVH Renewables' },
    { id: 'RE', icon: '🏠', name: 'DESIGN & ESTATE', shortName: 'RE', desc: 'Institutional asset management and architectural interior excellence.', subs: 'RVH Estates' },
    { id: 'SEC', icon: '🛡️', name: 'SECURITY SYSTEMS', shortName: 'SEC', desc: 'End-to-end industrial and digital security frameworks.', subs: 'RVH Shield' },
    { id: 'ESG', icon: '🌍', name: 'ESG INTEGRATION', shortName: 'ESG', desc: 'Governed ESG integration and circular economy strategies.', subs: 'RVH Impact' },
    { id: 'AGRI', icon: '🌾', name: 'AGRICULTURE', shortName: 'AGRI', desc: 'Agri-processing systems and precision farming technology.', subs: 'RVH Agri' },
    { id: 'MFG', icon: '🏭', name: 'MANUFACTURING', shortName: 'MFG', desc: 'Precision industrial manufacturing and factory excellence.', subs: 'RVH Mfg' },
    { id: 'LOG', icon: '🚛', name: 'LOGISTICS', shortName: 'LOG', desc: 'Smart supply network and multi-modal industrial logistics.', subs: 'RVH Logistics' },
    { id: 'TRD', icon: '🌐', name: 'INTL TRADE', shortName: 'TRADE', desc: 'Cross-border trade architectures and market expansion.', subs: 'RVH International' }
];

const OrbitingLogos = ({ onSectorSelect, onHoverChange }) => {
    const [activeSector, setActiveSector] = useState(null);

    const handleSelect = (sector) => {
        setActiveSector(sector.id);
        if (onSectorSelect) {
            onSectorSelect(sector);
        }
    };

    const handleMouseEnter = () => {
        if (onHoverChange) onHoverChange(true);
    };

    const handleMouseLeave = () => {
        if (onHoverChange) onHoverChange(false);
    };



    return (
        <div className="orbit-container">
            {/* Guide Rings */}
            <div className="orbit-guide guide-inner"></div>
            <div className="orbit-guide guide-outer"></div>

            <div className="orbit-group-wrapper">
                {/* Center Core */}
                <div className="center-logo-wrapper">
                    <img src={logoMain} alt="RVH Group" />
                </div>

                {/* Inner Orbiting Nodes */}
                {innerSectors.map((sector, index) => {
                    const delay = -(index / innerSectors.length) * 30;
                    const delayStr = `${delay}s`;
                    return (
                        <div
                            key={sector.id}
                            className={`orbit-item-wrapper orbit-item-inner-wrapper ${activeSector === sector.id ? 'active' : ''}`}
                            style={{
                                '--duration': '30s',
                                animationDelay: delayStr
                            }}
                        >
                            <div
                                className="orbit-item"
                                style={{ animationDelay: delayStr }}
                                onClick={() => handleSelect(sector)}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span>{sector.icon}</span>
                                <span className="node-label">{sector.shortName}</span>
                            </div>
                        </div>
                    );
                })}

                {/* Outer Orbiting Nodes */}
                {outerSectors.map((sector, index) => {
                    const delay = -(index / outerSectors.length) * 45;
                    const delayStr = `${delay}s`;
                    return (
                        <div
                            key={sector.id}
                            className={`orbit-item-wrapper orbit-item-outer-wrapper ${activeSector === sector.id ? 'active' : ''}`}
                            style={{
                                '--duration': '45s',
                                animationDelay: delayStr
                            }}
                        >
                            <div
                                className="orbit-item"
                                style={{ animationDelay: delayStr }}
                                onClick={() => handleSelect(sector)}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span>{sector.icon}</span>
                                <span className="node-label">{sector.shortName}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OrbitingLogos;
