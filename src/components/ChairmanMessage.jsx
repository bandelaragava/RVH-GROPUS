import React from 'react';
import './ChairmanMessage.css';

const ChairmanMessage = () => {
    return (
        <section className="section-padding bg-light" id="chairman">
            <div className="container chairman-container">
                <div className="chairman-image-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt="Chairman RVH Group"
                        className="chairman-image"
                    />
                    <div className="chairman-years">
                        <span>25+</span>
                        <p>Years of Leadership</p>
                    </div>
                </div>
                <div className="chairman-content">
                    <span className="section-subtitle">Leadership Perspective</span>
                    <h2 className="section-title">Message from our Chairman</h2>
                    <div className="message-quote">
                        "Capital discipline, governance-first mindset, and a long-term orientation are the pillars upon which RVH Group is built."
                    </div>
                    <p className="message-body">
                        Our journey is defined not just by the scale of our businesses, but by the integrity with which we operate. We believe in building durable assets that create value for generations. Our focus remains on sectors that power the future, while maintaining the highest weights of institutional responsibility.
                    </p>
                    <div className="chairman-sign">
                        <p className="chairman-name">Raghu Vamshi</p>
                        <p className="chairman-title">Chairman & Founder, RVH Group</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChairmanMessage;
