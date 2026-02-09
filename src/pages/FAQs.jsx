import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="faq-item" style={{ borderBottom: '1px solid var(--border-color)', padding: '1.5rem 0' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#d29457ff'
                }}
            >
                {question}
                <span style={{ fontSize: '1.5rem' }}>{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
                <div style={{ marginTop: '1rem', color: 'var(--text-light)', lineHeight: '1.7', fontSize: '1.05rem' }}>
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQs = () => {
    const faqs = [
        { question: "How can I join the RVH Group team?", answer: "You can visit our Careers page to explore openings across all subsidiary companies and submit your application directly." },
        { question: "Does RVH Group offer internships?", answer: "Yes, RVH Academy offers internships, skill development programs, and corporate training opportunities throughout the year." },
        { question: "Can I contact a specific department directly?", answer: "Yes, we provide direct contact options for IT, marketing, HR, finance, and training departments in the “Contact a Department” section." },
        { question: "Where is RVH Group headquartered?", answer: "Our headquarters is located in Hyderabad, Telangana, India. Online consultations & support are available for pan-India clients." },
        { question: "Do you offer services for startups and SMEs?", answer: "Yes, RVH Group works with startups, SMEs, and established enterprises. We offer scalable solutions tailored to your business stage." },
        { question: "Is it necessary to book an appointment before visiting?", answer: "For a smooth experience, we highly recommend booking an appointment before visiting. This ensures the right team member is available." },
        { question: "Does RVH Group have international opportunities?", answer: "Yes, some of our companies offer remote and overseas project-based roles. International opportunities are mentioned in job postings." },
        { question: "Does RVH Group provide corporate training for external organizations?", answer: "Yes, RVH Training Division offers customized corporate training programs for companies, teams, and educational institutions." }
    ];

    return (
        <div className="faqs-page" style={{ paddingTop: '80px' }}>
            <section className="section-padding">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <div className="section-header text-center mb-5">
                        <span className="section-subtitle">Help Center</span>
                        <h1 className="section-title">Frequently Asked Questions</h1>
                        <div className="section-line center"></div>
                        <p className="mt-4" style={{ color: 'var(--text-light)' }}>
                            Our team usually responds within 24–48 hours on working days. For urgent matters, you can reach out via phone.
                        </p>
                    </div>

                    <div className="faq-list mt-5">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>

                    <div className="text-center mt-5 p-5" style={{
                        background: 'linear-gradient(135deg, #d8cbad 0%, #cdba8b 100%)',
                        borderRadius: '16px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                        padding: '1rem',
                    }}>
                        <h3 style={{ color: '#784e4e', marginBottom: '1rem' }}>Still have questions?</h3>
                        <p className="mb-4" style={{ color: 'rgba(58, 57, 57, 0.85)', fontSize: '1.1rem' }}>We’re here to help you with any inquiries.</p>
                        <a href="mailto:info@rvhgroups.com" className="btn" style={{
                            padding: '0.8rem 2rem',
                            marginTop: '1rem',
                            background: '#784e4e',
                            color: '#fff',
                            borderRadius: '8px',
                            fontWeight: '700',
                        }}>Contact Support</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQs;
