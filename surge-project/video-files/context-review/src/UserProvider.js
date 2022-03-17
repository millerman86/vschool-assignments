import React, { useState } from "react"

export const UserContext = React.createContext()
// <Provider value={}>
// <Consumer>

// class UserProvider extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             user: {
//                 username: "Dave",
//                 age: 10
//             }
//         }
//     }

//     haveBirthday = () => this.setState(prev => ({
//         user: { 
//             ...prev.user, 
//             age: prev.user.age + 1
//         }
//     }))

//     render(){
//         return (
//             <UserContext.Provider
//                 value={{
//                     ...this.state.user,
//                     haveBirthday: this.haveBirthday
//                 }}>
//                 { this.props.children }
//             </UserContext.Provider>
//         )
//     }
// }

// export default UserProvider

export default function UserProvider(props){
    const [user, setUser] = useState({username: "Dave", age: 10})

    function haveBirthday(){
        setUser(prevUser => ({...prevUser, age: prevUser.age + 1}))
    }

    function setAge(newAge){
        setUser(prevUser => ({ ...prevUser, age: newAge }))
    }

    return (
        <UserContext.Provider
            value={{
                ...user,
                haveBirthday,
                setAge
            }}>
            { props.children }
        </UserContext.Provider>
    )
}