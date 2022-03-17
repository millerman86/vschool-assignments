import React from 'react'
import Issue from './Issue'

export default function IssueList(props) {
    const { issues } = props
    return (
        <div>
            {issues.map((issue, i) => <Issue {...issue} indexOfIssue={i} key={issue._id}/>)}
        </div>
    )
}