import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../context/UserProvider'
import styled from 'styled-components'
import { useParams} from 'react-router-dom'
import Background from '../rockthevoteimage.jpeg'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import userAxios from '../../config/requestinterceptor'
import CommentList from '../Comment/CommentList'
import parse from 'html-react-parser'
import isUrl from 'is-url'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import '../quillstyles.css'



const IssuesLayout = styled.div`
    padding: 0 15px;
    background: #DAE0E6;
    min-height: 100vh;
    background-image: url("${Background}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    p {
        margin: 0;
    }

    .first-column {
        margin: 20px 0;
        background: white;
    }

    .second-column {
        margin: 20px 0;
    }
    .second-column div {
        background: white;
    }

    .second-column {
        display: none;
    }

    .fa-icon {
        margin: 0 5px;
    }

    .create-new-issue-container {
        margin: 20px 0;
    }

    @media only screen and (min-width: 768px) {
        .grid-parent {
            width: 100%;
            align-self: center;
            max-width: 915px;
    
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-gap: 20px;
        }

        .second-column {
            display: block;
        }

    }

`


const CreateNewIssueDiv = styled.div`
    border: 1px solid #DCDCDC;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 5px 0;
    background: white;
    margin-bottom: 20px;


    div {
        padding: 0 5px;
    }

    input {
        flex: 1;
        margin-right: 10px;
        font-size: 1.2em;
        line-height: 1.5em;
        padding-left: 10px;
    }
`


const SortingDiv = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    background: white;

    p { 
        margin: 0;
    }

    input {
        
    }
`


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
    border: none;
}

.ql-editor {
    background: white;
}

.quill {
    border: 1px solid lightgray;
}

.quill:selected {
    border: 1px solid blue;
}


`

export default function CommentLayout() {
    const history = useHistory()
    const [issue, setIssue] = useState('')
    const initInputs = {description: ""}
    const [inputs, setInputs] = useState(initInputs)
    
    
    const { issueId } = useParams()
    function getComments(issueId) {
        userAxios
          .get(`/api/issue/user/${issueId}`)
          .then(res => {
              setIssue(res.data.issue)
        }).catch(e => console.log(e))
    }

    useEffect(() => {
        getComments(issueId)
    }, [])

    function removeBorder() {
        document.querySelector('.quill').style.border = '1px solid lightgray'
    } 

    function addBorder() {
        document.querySelector('.quill').style.border = '1px solid black'
    }

    function handleQuillChange(html) {
        setInputs(prevInputs => ({
            ...prevInputs, 
            description: html
        }))
    }


    return (
        <IssuesLayout>
            <div className="grid-parent">
                <div className="first-column">
                    <div className="comment">issue</div>
                    <div>this is the add comment box</div>

                    <Styled>
                        <ReactQuill 
                            onFocus={addBorder}
                            onBlur={removeBorder}
                            onChange={handleQuillChange}
                            value={inputs['description']}
                            theme="snow" 
                            bounds={'.app'} 
                            modules={CommentLayout.modules}
                            formats={CommentLayout.formats}
                        />
                    </Styled> 

                </div>
                <div className="second-column">
                    <div>
                        <p>Today's top issues</p>
                        <ol>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                        <div className="button-container">
                            <button>View All</button>

                        </div>
                    </div>
                    <div>
                        <p>Rules Posting to Rock The Vote</p>
                        <ol>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ol>
                    </div>
                </div>
            </div>
        </IssuesLayout>
    )
}



CommentLayout.modules = {
    toolbar: [
      [{size: []}],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
    //   ['link', 'image', 'video'],
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
  CommentLayout.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ]

