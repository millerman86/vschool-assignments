import React from 'react'
import {ThemeContextConsumer} from '../ThemeProvider'
import Button from './Button'

function NavBar() {
    return (
        <ThemeContextConsumer>
            {context => (
                <nav id="navigation" className={`${context.theme}-theme`}>
                    <div className="nav-item">Home</div>
                    <div className="nav-item">About</div>
                    <div className="nav-item">Contact</div>
                    <div className="nav-item">
                        <Button>Change Theme</Button>
                    </div>

                </nav> 
            )}
        </ThemeContextConsumer>
    )
}

export default NavBar