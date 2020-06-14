import React, { useState } from 'react'


const initInputs = {
    issue: "", 
    description: "", 
    imgUrl: ""
}

export default function IssueForm(props) {
    const [inputs, setInputs] = useState(initInputs)
    const { issue, description, imgUrl } = inputs
    const { addIssue } = props 

    
    function handleChange(e) {
        const {name, value} = e.target 
        setInputs(prevInputs => ({
            ...prevInputs, 
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addIssue(inputs)
        setInputs(initInputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="issue"
                value={issue}
                onChange={handleChange}
                placeholder="Title Your Issue"
            />
            <input 
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Description"
            />
            <input 
                type="text"
                name="imgUrl"
                value={imgUrl}
                onChange={handleChange}
                placeholder="Image Url"
            />
            <button>Add Todo</button>
        </form>
    )
}