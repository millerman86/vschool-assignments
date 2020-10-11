import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    ul {
        display: flex;
        margin: 0;
        padding: 0;
    }
    ul li {
        list-style: none;
    }
    ul li a {
        text-decoration: none;
        color: inherit;
    }

    .banner {
        margin-top: 40px;
        display: flex;
        justify-content: center;
    }

    .menu-container {
        display: flex;
        justify-content: center;
    }

    ul li {
        margin-left: 20px;
    }

    ul li:first-child {
        margin-left: 0;
    }
    
    .site-title {
        font-size: 50px;
        font-weight: 700;
    }
`

export default function Navbar(props) {
    const { logout } = props
    return (
        <Nav>
            <div className="banner">
                <span className="site-title">Rock the Vote</span>
            </div>
            <hr />
            <div className="menu-container">
                <ul>
                    <li>
                        <a href="/public">Home</a>
                    </li>
                    <li>
                        <a href="/profile">Profile</a>
                    </li>
                    <li onClick={logout}>
                        <a href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </Nav>
    )
}