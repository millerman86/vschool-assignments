import React from 'react'
import parse from 'html-react-parser'
import styled from 'styled-components'
import { FaArrowDown } from 'react-icons/fa'




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

    .content span {
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


export default function Issue(props) {
    
    const { issue, description, imgUrl, _id } = props
    console.log(issue)
    return (
        <StyledIssue>
            <div className="voting-column">
                <FaArrowDown className="flipped" />
                <span>34</span>
                <FaArrowDown className="fa-arrow" />
            </div>
            <div className="content">
                {parse(issue)}
                {parse(description)}
            </div>
        </StyledIssue>
    )
}