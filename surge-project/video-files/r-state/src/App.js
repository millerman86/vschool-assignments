import React, { Component, useState } from 'react'
import NameForm from "./NameForm.js"
import ContactList from "./ContactList.js"


// export default function App(){
//     const [appState, setAppState] = useState({ contacts: [], count: 0})
//     const updateContacts = newContact => 
//         setAppState(prev => ({...prev, contacts: [...prev.contacts, newContact]}))
//     const increment = () => setAppState(prev => ({...prev, count: prev.count + 1}))
//     return (
//         <div>
//             <h1>{appState.count}</h1>
//             <button onClick={increment}>Increment</button>
//             <NameForm updateContacts={updateContacts}/>
//             <ContactList contacts={appState.contacts}/>
//         </div>
//     )
// }


export default class App extends Component {
    constructor(){
        super()
        this.state = {
            contacts: []
        }
    }

    updateContacts = newContact => {
        this.setState(prev => ({
            contacts: [...prev.contacts, newContact]
        }))
    }

    render(){
        return (
            <div>
                <NameForm updateContacts={this.updateContacts}/>
                <ContactList contacts={this.state.contacts}/>
            </div>
        )
    }
}
