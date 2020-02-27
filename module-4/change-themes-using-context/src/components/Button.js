import React from "react"
import {ThemeContextConsumer} from "../ThemeProvider"

function Button(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <button id="theme-switcher" onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
            )}
        </ThemeContextConsumer>
    )    
}

export default Button
