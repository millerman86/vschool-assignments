import React from 'react'
import ReactDOM from 'react-dom'
// 1
import App from './useState/App.js'

// 2
// import App from './useEffect/App.js'

// 3
// import App from './useContext/App.js'
// import CountProvider from "./useContext/CountProvider.js"

// 4
// import App from "./useReducer/App.js"

ReactDOM.render(
    // <CountProvider>
        <App />,
    // </CountProvider>,
document.getElementById('root'))