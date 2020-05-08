import React, { useContext } from 'react'
import { CountContext } from "./CountProvider.js"

export default function App(){
    const {count, increment} = useContext(CountContext)

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}
