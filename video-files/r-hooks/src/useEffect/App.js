import React, { useState, useEffect } from "react"

// componentDidMount
// componentDidUpdate
// componentWillUnmount

export default function App(){
    const [color, setColor] = useState("blue")

    useEffect(() => {
        window.addEventListener("keydown", (e) => {
            console.log(e)
            if(e.which === 66){
                setColor("blue")
            } else if(e.which === 82){
                setColor("red")
            }
        })
       return () => {
           window.removeEventListener("keydown", null)
       } 
    }, [])
  
    return (
        <div style={{backgroundColor: color}}>
            <h1>Use Effect</h1>
        </div>
    )
}