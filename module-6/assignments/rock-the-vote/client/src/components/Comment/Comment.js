import React from 'react'
import parse from 'html-react-parser'
import styled from 'styled-components'
import { FaArrowDown, FaCommentAlt } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'



const StyledIssue = styled.div`
    position: relative;
    background: lightgray;
    margin: 20px 0;
    background: rgba(255, 255, 255, 0.8);
    
    .content {
        min-height: 100px;
        background: white;
        margin-left: 40px;
        opacity: 1;
    }

    .content span.vote-count {
        font-size: 26px;
        font-weight: 800;
    }
    
    .voting-column {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        padding: 8px 4px 8px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40px;
    }

    .tool-bar > * {
        padding: 5px;
    }

    .tool-bar { 
        display: flex;
        align-items: center;
    }

    .voting-container {

    }

    .flipped, 
    .fa-arrow {
        cursor: pointer;
    }

    .flipped {
        transform: rotate(180deg);
    }

    .flipped:hover {
        transform: rotate(180deg) scale(1.4);
        transition: .2s ease-in-out;
    }

    .fa-arrow:hover {
        transform: scale(1.5);
        transition: .2s ease-in-out;
    }

    h1 {
        display: inline-block;
    }
`


export default function IssueAndComments(props) {
    
    const history = useHistory()

    const { issue, description, imgUrl, _id, commentCount, } = props
    return (
        <StyledIssue>
            <div className="voting-column">
                <FaArrowDown className="flipped" />
                <span className="vote-count">{}</span>
                <FaArrowDown className="fa-arrow" />
            </div>
            <div className="content">
            
                {/* {parse(issue)}
                {parse(description)} */}
                <div className="tool-bar">
                    <FaCommentAlt />

                    <span onClick={() => {
                            history.push(`/comment/${_id}`)
                            }}>
                        {commentCount > 1 ? commentCount + " comments" : ""} 
                    </span>
                </div>
            </div>
        </StyledIssue>
    )
}