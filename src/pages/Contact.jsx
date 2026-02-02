import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page" style={{ paddingTop: '80px' }}>
            <section className="section-padding">
                <div className="container">
                    <div className="section-header text-center mb-3">
                        <span className="section-subtitle">Reach Out</span>
                        <h1 className="section-title">Connect with RVH Group</h1>
                        <div className="section-line center"></div>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-light)' }}>
                            We’re here to support you with any inquiries related to our services, partnerships, training programs or business opportunities. Connect with us and our team will be happy to assist you.
                        </p>
                    </div>

                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2 className="mb-2">Institutional Hubs</h2>
                            <div className="info-item mb-2">
                                <h3>Corporate Headquarters</h3>
                                <p>RVH Tower, Financial District</p>
                                <p>Hyderabad, TS 500032</p>
                            </div>
                            <div className="info-item mb-2">
                                <h3>Regional Office (North)</h3>
                                <p>Institutional Plaza, Sector 44</p>
                                <p>Gurugram, HR 122003</p>
                            </div>
                            <div className="info-item mb-2">
                                <h3>Contact Details</h3>
                                <p><strong>Email:</strong> info@rvhgroups.com</p>
                                <p><strong>Investor Relations:</strong> ir@rvhgroups.com</p>
                                <p><strong>Phone:</strong> +91-73868-79818</p>
                            </div>
                        </div>

                        <div className="contact-form-container">
                            <h2 className="mb-2">Inquiry Form</h2>
                            <form className="contact-form">
                                <div className="form-group mb-1">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="John Doe" />
                                </div>
                                <div className="form-group mb-1">
                                    <label>Email Address</label>
                                    <input type="email" placeholder="john@example.com" />
                                </div>
                                <div className="form-group mb-1">
                                    <label>Organization</label>
                                    <input type="text" placeholder="Company Name" />
                                </div>
                                <div className="form-group mb-2">
                                    <label>Message</label>
                                    <textarea rows="4" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="submit" className="btn-submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="map-section">
                <div className="container text-center">
                    <h2 className="mb-2">Global Presence</h2>
                    <div className="map-placeholder">
                        <p style={{ display: 'none' }}>Interactive Presence Map Loading...</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
