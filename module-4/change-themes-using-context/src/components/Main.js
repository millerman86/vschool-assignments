import React from 'react'
import {ThemeContextConsumer} from '../ThemeProvider'


function Main() {
    return (
        <ThemeContextConsumer>
            {context => (
                <main className={`${context.theme}-theme`}>
                    blah
                </main>
            )}
        </ThemeContextConsumer>
    )
}

export default Main