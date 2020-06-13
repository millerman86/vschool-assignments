import React from 'react'
import Issue from './Issue'

export default function IssueList(props) {
    const { issues } = props
    console.log('Here are your issues: ', issues[0]);
    return (
        <div className="todo-list">
            <Issue {...issues[0]} />
            {issues.map(issue => <Issue {...issue} key={issue._id}/>)}
        </div>
    )
}