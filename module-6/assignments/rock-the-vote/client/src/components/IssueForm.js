import React, { useState } from 'react'
import { FaMicrophone } from 'react-icons/fa'
import styled from 'styled-components'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './quillstyles.css'

const Styled = styled.div`
body {
    background: #DAE0E6; 
}

.app {
    margin: 1rem 4rem;
    background: blue;
}


.app .ql-container {
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
}

.app .ql-snow.ql-toolbar {
    display: block;
    background: #eaecec;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
}

.app .ql-bubble .ql-editor {
    border: 1px solid #ccc;
    border-radius: 0.5em;
}

.app .ql-editor {
    min-height: 18em;   
}

.themeSwitcher {
    margin-top: 0.5em;
    font-size: small;
}


.ql-blank {
    background: white;
}

.ql-snow {
    background: #eaecec;
}

.ql-editor {
    background: white;
}
`



const StyledForm = styled.form`
    background: white;

    padding-top: 10px;
    padding-bottom: 10px;


    input, 
    textarea {
        border: 1px solid lightgray;
        border-radius: 3px;
        line-height: 2;
        padding-left: 10px;
        resize: vertical;
    }

    input:focus, 
    textarea:focus {
        outline: 1px solid black;
        border: 1px solid lightgray;
    }

    .inputs {
        margin: 0 10px;
        display: flex;
        flex-direction: column;
    }

    .type-of-submission {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    .type-of-submission .type {
        margin-top: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid lightgray;
        margin-top: unset;
        border-right: none;
        cursor: pointer;
    } 

    .type-of-submission .type:last-child {
        border-right: 1px solid lightgray;
    }

    .type-of-submission .type div {
        margin-top: unset;
        padding: 10px 0;
    }
    
    .type-of-submission .type:hover {
        background-color: rgba(0, 121, 211, 0.05);
    }

    .input, 
    .textarea {
        margin-top: 10px;
    }

    .input-title {
        margin-bottom: 10px;
    }
   
`


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
        <StyledForm onSubmit={handleSubmit}>
            {/* <div className="type-of-submission">
                <div className="type">
                    <div>Post</div>
                </div>
                <div className="type">
                    <div>Image and Video</div>  
                </div>
                <div className="type">
                    <div>Link</div>  
                </div>
                <div className="type">
                    <div>Poll</div>
                </div>
            </div> */}
                
            <div className="inputs">
                <input 
                    className="input-title"
                    type="text"
                    placeholder="Title Your Issue"
                    />

                <Styled>
                    <ReactQuill 
                        theme="snow" 
                        bounds={'.app'} 
                        modules={IssueForm.modules}
                        formats={IssueForm.formats}
                    />
                </Styled>


                <input 
                    className="input"
                    type="text"
                    name="description"
                    value={description}
                    onChange={handleChange}
                    placeholder="Description"
                    />
                <input
                    className="input" 
                    type="text"
                    name="imgUrl"
                    value={imgUrl}
                    onChange={handleChange}
                    placeholder="Image Url"
                    />
                <button>Add Todo</button>
            </div>
        </StyledForm>
    )
}


IssueForm.modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  }
  /* 
   * Quill editor formats
   * See https://quilljs.com/docs/formats/
   */
  IssueForm.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]
