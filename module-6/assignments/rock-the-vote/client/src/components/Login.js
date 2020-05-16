import React, {useState} from 'react'
import authService from '../services/authService'

export default () => {
    const [form, updateForm] = useState({
        username: "",
        password: ""
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target
        updateForm(prevState => {
            return {
                ...prevState, 
                [name]: value
            } 
        })
    }

    const login = (e) => {
        e.preventDefault()
        authService
            .authenticate(form.username, form.password)
            .then(() => {
            })
            .catch(() => console.log("rejected"));
    }

    return (
        <form onSubmit={login}>
            <input placeholder="username" name="username" onChange={handleChange} />
            <input placeholder="password" name="password" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    )
}