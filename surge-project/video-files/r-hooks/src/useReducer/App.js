import React, {useReducer, useState} from "react"

// Reducer 
    // a function that takes a state object, and an action
    // updates the state object appropriately

// Actions (action object)
    // Object that defines what state update needs to take place

// Action Creators
    // Functions that returns an action object to be send to a reducer

// Store
    // State

// Dispatch
    // What triggers and action creator

function increment(){
    return {
        type: "INCREMENT"
    }
}

function decrement(){
    return {
        type: "DECREMENT"
    }
}

function setCount(newCount){
    return {
        type: "SET_COUNT",
        newCount
    }
}


function reducer(store, action){
    switch(action.type){
        case "INCREMENT":
            return {
                count: store.count + 1
            }
        case "DECREMENT":
            return {
                count: store.count - 1
            }
        case "SET_COUNT":
            return {
                count: action.newCount
            }
        default:
            return store
    }
}


export default function App(){
    const initState = { count: 0 }
    const [input, setInput] = useState("")
    const [store, dispatch] = useReducer(reducer, initState)

    function handleChange(e){
        const {value} = e.target
        setInput(value)
    }

    return (
        <div>
            <h1>{store.count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(setCount(input))}>
                Set new count to {input}
            </button>
            <input type="text" value={input} onChange={handleChange}/>
        </div>
    )
}