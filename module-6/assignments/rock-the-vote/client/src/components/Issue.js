import React from 'react'
import parse from 'html-react-parser'
import styled from 'styled-components'



const StyledIssue = styled.div`
    background: white;
    margin: 20px 0;
    position: relative;

    .content {
        margin-left: 35px;
        padding-left: 10px;
    }

    .column {
        position: absolute;
        top: 0;
        bottom: 0; 
        width: 35px;
        background: #e7e7e7;
    }
`


export default function Issue(props) {
    
    const { issue, description, imgUrl, _id } = props
    console.log('description', description);
    return (
        <StyledIssue>
            <div className="column">
                
            </div>
            <div className="content">

            <h1>{issue}</h1>
            <div>
                {parse(description)}
            </div>
            <img src={imgUrl} alt={imgUrl} width={300} />
            </div>
        </StyledIssue>
    )
}