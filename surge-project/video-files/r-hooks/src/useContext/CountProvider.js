import React, { useState } from 'react'

export const CountContext = React.createContext()
// <CountContext.Provider value={{ name: "steve" }}>
// <CountContext.Consumer>

export default function CountProvider(props){
    const [count, setCount] = useState(0)
    function increment(){ setCount(prev => prev + 1) }
    return (
        <CountContext.Provider 
            value={{
                count,
                increment
            }}>
            { props.children }
        </CountContext.Provider>
    )
}