import React from 'react'
import {ThemeContextConsumer} from '../ThemeProvider'

function Footer() {
    return (
        <ThemeContextConsumer>
            {context => (
                <footer id="footer" className={`${context.theme}-theme`}>
                    The amazing footer!
                    The amazing footer!
                    The amazing footer!
                    The amazing footer!
                    The amazing footer!
                    The amazing footer!
                    The amazing footer!
                    The amazing footer!
                </footer>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer