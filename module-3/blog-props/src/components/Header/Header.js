import React from 'react';
import './styles.css';
import Navbar from '../Navbar/Navbar';

function Header() {
    return (
        <section id="header-section">
            <Navbar />

            <div class="intro-titles">
                <h1>Clean Blog</h1>
                <h3>A Theme by Start Bootstrap</h3>
            </div>
            
        </section>
    )
}

export default Header;