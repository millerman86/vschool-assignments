import React, { useContext } from 'react'
import IssueForm from './IssueForm'
import IssueList from './IssueList'
// import Issue from './Issue'
import { UserContext } from '../context'

export default function Profile() {
    const {
        user: { username }, addIssue, issues
    } = useContext(UserContext)
    return (
        <div className="profile">
            <h1>Welcom {username}!</h1>
            <h3>Add A Todo</h3>
            {/* The add issue function comes from context, because the issues are stored and updated in context */}
            <IssueForm addIssue={addIssue} /> 
            <h3>Your Todos</h3>
            {/* Issues comes from context  */}
            <IssueList issues={issues} />
        </div>
    )
}