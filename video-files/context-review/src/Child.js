import React, { useState, useContext } from "react"
import { UserContext } from "./UserProvider.js"

export default function Child(props){
    const {
        username,
        age,
        haveBirthday,
        setAge
    } = useContext(UserContext)

    const [input, setInput] = useState("")

    function handleChange(e){
        setInput(e.target.value)
    }
    
    function handleSubmit(e){
        e.preventDefault()
        setAge(input)
    }

    return (
        <div>
            {/* <UserContext.Consumer>
                { (value) =>  */}
                    <div>
                        <h1>Hello @{username}</h1>
                        <p>Age: {age}</p>
                        <button onClick={haveBirthday}>Have Birthday</button>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="input" value={input} onChange={handleChange}/>
                            <button>Button</button>
                        </form>
                    </div>
                {/* }
            </UserContext.Consumer> */}
        </div>
    )
}