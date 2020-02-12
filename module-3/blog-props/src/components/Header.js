import React from 'react';


function Header() {
    return (
        <section id="header-section">
            <div class="header-banner-wrap">
                <div class="flex header container header-banner">
                    <div class="start-bootstrap">
                        <h2>Start Bootstrap</h2>
                    </div>

                    <button>
                        <div class="menu">MENU</div>
                        <div class="menu-hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>

        <div class="intro-titles">
            <h1>Clean Blog</h1>
            <h3>A Theme by Start Bootstrap</h3>
        </div>

        </section>


    )
}

export default Header;