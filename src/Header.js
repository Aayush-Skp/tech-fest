import React from 'react';
import logo from "./logo.png"

const Header = () => {
    return (

        <div className="container">
            <div className="custom-shape-divider-top-1711884854">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill"></path>
                </svg>
            </div>
            <div className="header">
                <div className="logo">
                    <img height="250px" src={logo} alt="" />
                </div>
                <div className="title">
                    <h2>1st Technical Festival</h2>
                    <h3>Graduate School of Engineering, Mid-West University</h3>
                </div>
                <div className="description">
                    Empower-Innovate-Create
                </div>
            </div>
            <div className="custom-shape-divider-bottom-1711885425">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
    </svg>
</div>
</div>
        
    );
}

export default Header;
