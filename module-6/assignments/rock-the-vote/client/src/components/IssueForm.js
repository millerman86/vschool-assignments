import React, { useState } from 'react'

const initInputs = {
    title: "", 
    description: "", 
    imgUrl: ""
}

export default function IssueForm(props) {
    const [inputs, setInputs] = useState(initInputs)
    const { title, description, imgUrl } = inputs
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
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Title"
            />
            <input 
                type="text"
                name="title"
                value={description}
                onChange={handleChange}
                placeholder="Description"
            />
            <input 
                type="text"
                name="title"
                value={imgUrl}
                onChange={handleChange}
                placeholder="Image Url"
            />
            <button>Add Todo</button>
        </form>
    )
}