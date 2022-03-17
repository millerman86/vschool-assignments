import React from 'react';
import './styles.css';
import Navbar from '../Navbar/Navbar';

function Header() {
    return (
        <section id="header-section">
            <Navbar />

            <div className="intro-titles">
                <h1>Clean Blog</h1>
                <span className="sub-heading">A Theme by Start Bootstrap</span>
            </div>
            
        </section>
    )
}

export default Header;