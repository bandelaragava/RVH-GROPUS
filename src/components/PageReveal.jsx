import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PageReveal.css';

const PageReveal = () => {
    const location = useLocation();
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);
    const [displayText, setDisplayText] = useState('RVH GROUP');
    const [counter, setCounter] = useState(0);

    // Counter Animation
    useEffect(() => {
        if (isVisible) {
            let start = 0;
            const interval = setInterval(() => {
                start += Math.floor(Math.random() * 5) + 1;
                if (start > 100) start = 100;
                setCounter(start);
                if (start === 100) clearInterval(interval);
            }, 30);
            return () => clearInterval(interval);
        }
    }, [isVisible]);

    useEffect(() => {
        let text = 'RVH GROUP';
        const path = location.pathname;

        if (path === '/') text = 'RVH GROUP';
        else if (path.includes('about')) text = 'ABOUT RVH';
        else if (path.includes('businesses')) text = 'BUSINESSES';
        else if (path.includes('careers')) text = 'CAREERS';
        else if (path.includes('our-journey')) text = 'OUR JOURNEY';
        else if (path.includes('faqs')) text = "FAQ'S";
        else if (path.includes('media')) text = 'MEDIA';
        else if (path.includes('contact')) text = 'CONTACT';
        else if (path.includes('investor')) text = 'INVESTORS'; // Not in main nav but good to keep

        setDisplayText(text);
        setIsVisible(true);
        setIsExiting(false);
        setCounter(0);

        // Exit sequence
        const exitTimer = setTimeout(() => {
            setIsExiting(true);
        }, 1100);

        const hideTimer = setTimeout(() => {
            setIsVisible(false);
        }, 1900); // Allow time for exit animation + overlay slide

        return () => {
            clearTimeout(exitTimer);
            clearTimeout(hideTimer);
        };
    }, [location.pathname]);

    if (!isVisible) return null;

    return (
        <div className={`page-reveal-overlay ${isExiting ? 'hidden' : ''}`}>
            <div className="reveal-text-container">
                {displayText.split('').map((char, index) => (
                    <span
                        key={index}
                        className={`reveal-char ${isExiting ? 'exit' : ''}`}
                        style={{ animationDelay: `${index * 0.04}s` }}
                    >
                        {char === ' ' ? '\u00A0' : char}
                    </span>
                ))}
            </div>

            <div className="sys-loader">
                <span className="sys-text">SYSTEM_INIT... {counter}%</span>
                <div className="sys-bar"></div>
            </div>
        </div>
    );
};

export default PageReveal;
