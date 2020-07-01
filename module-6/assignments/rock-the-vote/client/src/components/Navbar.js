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
    
`

export default function Navbar(props) {
    const { logout } = props
    return (
        <Nav>
            <div className="banner">
                <span>Rock the Vote</span>
            </div>
            <hr />
            <div className="menu-container">
                <ul>
                    <li onClick={logout}>
                        <a href="#">logout</a>
                    </li>
                    <li>
                        <a href="#">Other</a>
                    </li>
                    <li>
                        <a href="#">Pages</a>
                    </li>
                    <li>
                        <a href="#">Profile</a>
                    </li>
                </ul>
            </div>
        </Nav>
    )
}