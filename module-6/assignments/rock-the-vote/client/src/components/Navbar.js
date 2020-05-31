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
`

export default function Navbar(props) {
    const { logout } = props
    return (
        <Nav>
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
        </Nav>
    )
}