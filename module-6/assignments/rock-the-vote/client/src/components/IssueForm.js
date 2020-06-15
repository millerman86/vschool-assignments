import React, { useState } from 'react'
import { FaMicrophone } from 'react-icons/fa'
import styled from 'styled-components'


const initInputs = {
    issue: "", 
    description: "", 
    imgUrl: ""
}


const StyledDiv = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    width: 40%;
    padding: 5px 0;

    div {
        padding: 0 5px;
    }

    input {

    }
`
const IssuesContainer = styled.div`
   
`



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
            <StyledDiv>

            <div>
                <FaMicrophone />
            </div>
            <input type="text" placeholder="Create New Issue"/>
            </StyledDiv>
            {/* <div>
                <textarea 
                    type="text"
                    name="issue"
                    value={issue}
                    onChange={handleChange}
                    placeholder="Title Your Issue"
                    >

                </textarea>

            </div> */}



            {/* <input 
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
            <button>Add Todo</button> */}
        </form>
    )
}