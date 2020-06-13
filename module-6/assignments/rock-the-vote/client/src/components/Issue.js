import React from 'react'

export default function Issue(props) {
    // title 
    // description
    // upvote or downvote (once per issue per person only)
    // Each item should show the total number of votes
    const { issue, description, imgUrl, _id } = props
    console.log('props', props);
    return (
        <div className="issue">
            <h1>{issue}</h1>
            <h3>{description}</h3>
            <img src={imgUrl} alt={imgUrl} width={300} />
        </div>
    )
}