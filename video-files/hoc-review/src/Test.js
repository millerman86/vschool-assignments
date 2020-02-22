import React from 'react'
import {withToggle} from "./Toggle.js"

function Test(props){
    return (
        <div>
            <h1>The toggle is{props.toggle ? " On" : " Off"}</h1>
            <button onClick={props.toggler}>Toggle</button>
        </div>
    )
}

export default withToggle(Test)