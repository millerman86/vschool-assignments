import React from 'react';


function Navbar() {
    return (
        <nav id="navbar">
            <div class="header-banner-wrap">
                <header class="flex container header-banner">
                    <div class="start-bootstrap">
                        <h2>Start Bootstrap</h2>
                    </div>

                    <button class="menu-button">
                        <div class="menu">MENU</div>
                        <div class="menu-hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>

                    <ul className="desktop-navbar">
                        <li>
                            <a>HOME</a>
                        </li>
                        <li>
                            <a>ABOUT</a>
                        </li>
                        <li>
                            <a>SAMPLE POSTS</a>
                        </li>
                    </ul>
                </header>
            </div>
        </nav>
    )
}

export default Navbar;