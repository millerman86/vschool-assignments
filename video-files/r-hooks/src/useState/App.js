 import React, { useState } from 'react'

export default function App() {
    const [appState, setAppState] = useState({count: 0, colors: ["cornflowerblue", "rebeccapurple", "green", "orange"]})

    function increment(){
        setAppState(prev => ({...prev, count: prev.count + 1}))
    }

    const { colors, count } = appState

    return (
        <div style={{ backgroundColor: colors[count % colors.length] }}>
            <h1>{appState.count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

// export default class App extends Component {
//     constructor(){
//         super()
//         this.state = {
//             count: 0
//         }
//     }

//     increment = () => {
//         this.setState(prev => ({ count: prev.count + 1 }))
//     }

//     render(){
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.increment}>Increment</button>
//             </div>
//         )
//     }
// }