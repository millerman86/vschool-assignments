import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div className="navbar-grid-container">
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/services">Services</Link>
                </div>
                <div>
                    <Link to="/about">About</Link>
                </div>
            </div>

        </nav>
    )
}

export default Navbar