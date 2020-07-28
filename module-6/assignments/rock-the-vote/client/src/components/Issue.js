import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import userAxios from '../config/requestinterceptor'
import parse from 'html-react-parser'
import styled from 'styled-components'
import { FaArrowDown, FaCommentAlt } from 'react-icons/fa'

const StyledIssue = styled.div`
    position: relative;
    background: lightgray;
    margin: 20px 0;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 5px;

    .content {
        min-height: 100px;
        background: white;
        margin-left: 40px;
        opacity: 1;
        position: relative;
        padding-bottom: 30px;
        border-radius: 5px;
        padding: 20px;
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
        padding: 0 10px;
    }

    .description {
        margin: 0 10px;
    }

    .issue-text {
        padding: 0 10px;
    }

    .image-from-url {
        width: 100%;
        height: auto;
    }

    .link-url {
        color: blue;
    }

    .link-url-container {
        margin-bottom: 10px;
    }
`


export default function Issue(props) {
    const history = useHistory()
    
    const { issue, description, _id, commentCount, voteCount, imgUrl, link, type } = props

    console.log('here are your props', props);

    let [voteCountState, setVoteCountState] = useState(voteCount)

    function upVoteIssue(id) {
        userAxios.get(`/api/issue/user/upvote/${id}`)
          .then(res => {
            setVoteCountState(res.data.issue.voteCount)
      })
    }
    
    function downVoteIssue(id) {
        userAxios.get(`/api/issue/user/downvote/${id}`)
          .then(res => {
            setVoteCountState(res.data.issue.voteCount)
      })
    }
    
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
            {type === 'post' ? (<div className="content">
                <div className="issue-text">
                    {parse(issue)}
                </div>
                <h2 className="description">Description</h2>
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
                        {commentCount > 1 ? commentCount + " comments" : "0 comments"} 
                    </span>
                </div>
            </div>) : null}


            {type === 'image' ? (<div className="content">
                <div className="issue-text">
                    {parse(issue)}
                </div>
                <img className="image-from-url" src={imgUrl} />
                <div className="tool-bar">
                    <FaCommentAlt />

                    <span className="comments" onClick={() => {
                            // I will only need the issue id to grab both the comments and the issue in question
                            let issueId = _id
                            history.push(`/comment/${issueId}`)
                            }}>
                        {commentCount > 1 ? commentCount + " comments" : "0 comments"} 
                    </span>
                </div>
            </div>) : null}


            {type === 'link' ? (<div className="content">
                <div className="issue-text">
                    {parse(issue)}
                </div>
                <div className="link-url-container">
                    <span className="link-url">{link}</span>
                </div>

                <div className="tool-bar">
                    <FaCommentAlt />

                    <span className="comments" onClick={() => {
                            // I will only need the issue id to grab both the comments and the issue in question
                            let issueId = _id
                            history.push(`/comment/${issueId}`)
                            }}>
                        {commentCount > 1 ? commentCount + " comments" : "0 comments"} 
                    </span>
                </div>
            </div>) : null}
        </StyledIssue>
    )
}

