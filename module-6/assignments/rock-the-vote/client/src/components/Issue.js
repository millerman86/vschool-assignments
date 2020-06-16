import React from 'react'
import parse from 'html-react-parser'
import styled from 'styled-components'

const string = `<p>asdf</p>`


const StyledIssue = styled.div`
    background: white;
`


export default function Issue(props) {
    // title 
    // description
    // upvote or downvote (once per issue per person only)
    // Each item should show the total number of votes
    const { issue, description, imgUrl, _id } = props
    console.log('description', description);
    return (
        <StyledIssue>
            <h1>{issue}</h1>
            <div>
                {parse(description)}
            </div>
            <img src={imgUrl} alt={imgUrl} width={300} />
        </StyledIssue>
    )
}