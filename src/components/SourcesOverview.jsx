import React, { useState, useEffect } from 'react';
import './SourcesOverview.css';

import energyImg from '../assets/renewable-energy.png';
import itLogo from '../assets/logo.png';
import techSupportLogo from '../assets/tech-support-logo.png';
import dmLogo1 from '../assets/skill3-removebg-preview.png';
import dmLogo2 from '../assets/hero3-removebg-preview.png';
import trainingsLogo from '../assets/gyantrix.png';
import hrLogo1 from '../assets/verify3-removebg-preview.png';
import hrLogo2 from '../assets/ghs3-removebg-preview.png';
import frLogo1 from '../assets/tax3-removebg-preview.png';
import frLogo2 from '../assets/qfl3-removebg-preview.png';
import market5Img from '../assets/market5.png';
import interiorImg from '../assets/interior.png';
import construct5Img from '../assets/construct5.png';

const sourcesData = [
    {
        id: 'it',
        title: 'Information Technology',
        icon: '💻',
        heroTitle: 'Information Technology: Driving Digital Growth',
        heroDesc: 'Information Technology (IT) refers to the development, management, and use of computer-based systems, networks, software, and digital applications to collect, store, process, secure, and distribute information. It enables organizations to improve efficiency, enhance communication, automate operations, and deliver innovative solutions that create business value in a digital-first world drive innovation and digital growth across industries.',
        bubbles: [
            { name: 'FutureInvo', comment: 'Visit us for cutting-edge IT solutions.', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150' },
            { name: 'Efficiency', comment: 'Organizations are increasingly adopting IT solutions to enhance performance, improve customer service, and reduce costs.', avatar: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=150' },
            { name: 'Innovation', comment: 'IT plays a critical role in shaping innovation, improving decision-making, and driving long-term growth.', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150' }
        ],
        mainImage: itLogo,
        cta: 'Visit Website'
    },
    {
        id: 'tech-support',
        title: 'Tech Support',
        icon: '🛠️',
        heroTitle: 'Tech Support: Fast & Reliable Assistance',
        heroDesc: 'Our Tech Support Services are designed to provide quick, reliable, and expert assistance to keep your technology running without interruption. From diagnosing technical issues to offering step-by-step guidance, our team ensures timely support for computers, software, networks, and digital applications.',
        bubbles: [
            { name: 'Efficiency', comment: 'Proactive monitoring to prevent problems before they occur and minimize downtime.', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150' },
            { name: 'Solutions', comment: 'Help with system setup, troubleshooting, installation, or updates for smooth experience.', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150' },
            { name: 'Commitment', comment: 'Fast responses, clear communication, and user-friendly solutions that matter.', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150' }
        ],
        mainImage: techSupportLogo,
        cta: 'Get Support'
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        icon: '📈',
        heroTitle: 'Digital Marketing: Data-Driven Strategies',
        heroDesc: 'Digital Marketing is a strategic approach to promoting brands, products, and services through online platforms. It involves using tools like social media, search engines, email campaigns, and content marketing to reach the right audience at the right time.',
        bubbles: [
            { name: 'Targeting', comment: 'Using social media and search engines to reach the right audience at the right time.', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=150' },
            { name: 'Engagement', comment: 'Optimizing visibility and delivering targeted content for stronger customer engagement.', avatar: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&q=80&w=150' },
            { name: 'Growth', comment: 'Data-driven strategies and creative campaigns to drive measurable and long-term success.', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150' }
        ],
        mainImages: [dmLogo1, dmLogo2],
        cta: 'Boost Growth'
    },
    {
        id: 'trainings',
        title: 'Trainings',
        icon: '🎓',
        heroTitle: 'Trainings: Practical Skill Development',
        heroDesc: 'Training plays a vital role in enhancing knowledge, improving skills, and shaping individuals for professional growth. Our Training & Skill Development programs are designed to provide practical, industry-focused learning that empowers participants to excel in their careers.',
        bubbles: [
            { name: 'Hands-on', comment: 'Learners gain hands-on experience and confidence with real-world application.', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=150' },
            { name: 'Interactive', comment: 'Sessions delivered by experienced trainers focusing on interactive learning and performance.', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150' },
            { name: 'Expertise', comment: 'Equipping teams with the right skills to meet evolving industry standards.', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150' }
        ],
        mainImage: trainingsLogo,
        cta: 'Explore Academy'
    },
    {
        id: 'human-resources',
        title: 'Human Resources',
        icon: '🤝',
        heroTitle: 'Human Resources: Empowering People',
        heroDesc: "Human Resources (HR) is the core function that manages and supports an organization's most valuable asset — its people. HR focuses on recruitment, employee welfare, performance management, training, and creating a positive work environment that encourages growth and productivity.",
        bubbles: [
            { name: 'Nurturing Talent', comment: 'Ensuring the right talent is hired and nurtured through effective policies.', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150' },
            { name: 'Workplace Culture', comment: 'Building a positive environment and aligning people strategies with business goals.', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=150' },
            { name: 'Proffessionalism', comment: 'Fostering communication, trust, and professionalism for a motivated workforce.', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150' }
        ],
        mainImages: [hrLogo1, hrLogo2],
        cta: 'Career Opportunities'
    },
    {
        id: 'finance-registration',
        title: 'Finance Registration',
        icon: '📝',
        heroTitle: 'Finance & Registration: Building Formal Foundations',
        heroDesc: 'Finance and Registration services play a crucial role in helping individuals and businesses establish a strong legal and financial foundation. These services include business registration, financial documentation, compliance support, tax filing, and statutory registrations.',
        bubbles: [
            { name: 'Compliance', comment: 'Hassle-free processing focused on growth while we handle legal and financial formalities.', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150' },
            { name: 'Transparency', comment: 'Avoiding legal complications and maintaining financial transparency with expert guidance.', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150' },
            { name: 'Foundations', comment: 'Company registration, GST filing, and financial planning for a seamless business journey.', avatar: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&q=80&w=150' }
        ],
        mainImages: [frLogo1, frLogo2],
        cta: 'Get Registered'
    },
    {
        id: 'others',
        title: 'Marketing',
        icon: '🌐',
        heroTitle: 'Strategic Marketing: Building Brand Connections',
        heroDesc: 'Marketing is the strategic process of understanding customer needs, creating value, and building strong brand connections to drive business growth. Effective marketing not only increases brand visibility but also builds trust.',
        bubbles: [
            { name: 'Branding', comment: 'Developing compelling messages and promoting products through the right channels.', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=150' },
            { name: 'Strategy', comment: 'Combining creativity with data-driven strategies to stay competitive and reach the right audience.', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150' },
            { name: 'Growth', comment: 'Establishing long-term customer relationships and achieving sustainable success.', avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150' }
        ],
        mainImages: [market5Img, interiorImg, construct5Img],
        cta: 'Contact Us'
    }
];

const SourcesOverview = () => {
    const [selectedId, setSelectedId] = useState(sourcesData[0].id);
    const active = sourcesData.find(s => s.id === selectedId);

    return (
        <section className="sources-ref">
            <div className="container">
                {/* Section Header */}
                <div className="section-header-ref">
                    <h2 className="section-main-title">Our Sources</h2>
                    <p className="section-main-subtitle">Discover our diverse portfolio of businesses driving innovation across multiple industries</p>
                </div>

                {/* Top Navigation */}
                <div className="sources-nav">
                    {sourcesData.map(item => (
                        <div
                            key={item.id}
                            className={`nav-btn ${selectedId === item.id ? 'active' : ''}`}
                            onClick={() => setSelectedId(item.id)}
                        >
                            <span className="nav-icon">{item.icon}</span>
                            <span className="nav-text">{item.title}</span>
                            <div className="active-line"></div>
                        </div>
                    ))}
                </div>

                {/* Content Hero */}
                <div className="sources-hero">
                    <h2 className="hero-heading">{active.heroTitle}</h2>
                    <p className="hero-subtext">{active.heroDesc}</p>
                    <button className="cta-btn">{active.cta} <span className="arrow">→</span></button>
                </div>

                {/* Visual Area */}
                <div className="visual-container">
                    {/* Bubbles Side */}
                    <div className="bubbles-side">
                        {active.bubbles.map((b, i) => (
                            <div key={i} className={`bubble-card bubble-${i}`}>
                                <div className="bubble-header">
                                    <div className="avatar-placeholder" style={{ backgroundImage: `url(${b.avatar})` }}></div>
                                    <span className="bubble-name">{b.name}</span>
                                </div>
                                <p className="bubble-text">{b.comment}</p>
                            </div>
                        ))}
                    </div>

                    {/* Image Frame Side - Show all logos if multiple, or single logo */}
                    <div className="frame-side">
                        {active.mainImages ? (
                            // Multiple logos - display all in a grid
                            <div className={`logos-grid ${active.id === 'others' ? 'marketing-logos' : ''} ${active.id === 'finance-registration' ? 'finance-logos' : ''} ${active.id === 'digital-marketing' ? 'digital-marketing-logos' : ''} ${active.id === 'human-resources' ? 'hr-logos' : ''}`}>
                                {active.mainImages.map((img, idx) => (
                                    <div key={idx} className={`image-frame ${active.id === 'it' || active.id === 'tech-support' || active.id === 'digital-marketing' || active.id === 'trainings' || active.id === 'human-resources' || active.id === 'finance-registration' || active.id === 'others' ? 'it-white-bg' : ''}`}>
                                        <img
                                            src={img}
                                            alt={`${active.title} ${idx + 1}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // Single logo
                            <div className={`image-frame ${active.id === 'it' || active.id === 'tech-support' || active.id === 'digital-marketing' || active.id === 'trainings' || active.id === 'human-resources' || active.id === 'finance-registration' || active.id === 'others' ? 'it-white-bg' : ''} ${active.id === 'trainings' ? 'trainings-logo' : ''}`}>
                                <img
                                    src={active.mainImage}
                                    alt={active.title}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SourcesOverview;
