// ContactSection.js
import React from 'react';

const ContactSection = () => {
    return (
        <div className="contact-container">
            <p className="contact-text">
                Submit your purposals here!
            </p>
            <p style={{color:"yellow", textAlign:"center"}}>
                The website is currently under construction, and planning for the Tech Fest is in progress.
                To ensure its success, we encourage you to submit project proposals to fully support and
                contribute to the essence of the event.</p>
            <a href="https://forms.gle/3CVCcKn9rTHa8ZEW7" className="social-button" target="_blank" rel="noopener noreferrer">
                <span className="button-text">
                    Click Here to redirect to google form
                </span>
            </a>
        </div>
    );
}

export default ContactSection;
