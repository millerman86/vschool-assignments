import React, { useContext, useEffect, useState } from 'react'
import parse from 'html-react-parser'
import styled from 'styled-components'
import { FaArrowDown, FaCommentAlt, FaRulerVertical } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import axios from 'axios'
import userAxios from '../config/requestinterceptor'

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
        position: relative;
        padding-bottom: 30px;
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
        position: absolute;
        bottom: 0;
    }

    .voting-container {

    }

    .flipped-up, 
    .fa-arrow {
        cursor: pointer;
    }

    .flipped-up {
        transform: rotate(180deg);
    }

    .flipped-up:hover {
        transform: rotate(180deg) scale(1.4);
        transition: .2s ease-in-out;
    }

    .fa-arrow:hover {
        transform: scale(1.5);
        transition: .2s ease-in-out;
    }


    .issue {
        margin: 0;
        text-align: center;
    }

    .comments {
        cursor: pointer;
    }

    .description-container {
        margin: 20px 0;
    }
`


export default function Issue(props) {
    const history = useHistory()
    
    const { issue, description, imgUrl, _id, commentCount, voteCount, upVotedIssues, downVotedIssues, indexOfIssue } = props

    console.log('here is vote count', voteCount);
    let [voteCountState, setVoteCountState] = useState(voteCount)
    const { upVoteIssue, downVoteIssue, issues } = useContext(UserContext)
    useEffect(() => {
        // find the issue by id
        userAxios.get(`/api/issue/${_id}`)
            .then(res => {
                setVoteCountState(res.data.voteCount)
            })
    }, [issues])

    return (
        <StyledIssue>
            <div className="voting-column">
                <FaArrowDown className="flipped-up" onClick={() => {
                    if (window.location.pathname !== '/profile') {
                        upVoteIssue(_id)    
                    }
                    }} />
                <span className="vote-count">{voteCountState}</span>
                <FaArrowDown className="fa-arrow" onClick={() => {   
                    if (window.location.pathname !== '/profile') {
                        downVoteIssue(_id)
                    }
                }} />
            </div>
            <div className="content">
                <h1 className="issue">Issue</h1>
                <hr />
                {parse(issue)}
                <h2>Description</h2>
                <hr />
                <div className="description-container">
                {parse(description)}
                </div>

                <div className="tool-bar">
                    <FaCommentAlt />

                    <span className="comments" onClick={() => {
                            // I will only need the issue id to grab both the comments and the issue in question
                            let issueId = _id
                            history.push(`/comment/${issueId}`)
                            }}>
                        {commentCount > 1 ? commentCount + " comments" : "0" + " comments"} 
                    </span>
                </div>
            </div>
        </StyledIssue>
    )
}