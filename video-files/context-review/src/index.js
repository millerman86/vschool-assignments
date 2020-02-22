import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App.js"
import UserProvider from "./UserProvider.js"


ReactDOM.render(
    <UserProvider>
        {/* <TodoProvider>   You can have as many of these as you need.*/}
            <App/>
        {/* </TodoProvider>    Just don't go crazy with it*/}
    </UserProvider>, 
document.getElementById("root"))