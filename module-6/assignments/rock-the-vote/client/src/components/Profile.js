import React, { useContext } from 'react'
import IssueForm from './IssueForm'
import IssueList from './IssueList'
import { UserContext } from '../context/UserProvider'


export default function Profile() {
    const {
        user: { username }, addIssue, issues
    } = useContext(UserContext)
    return (
        <div className="profile">
            <h1>Welcome {username}!</h1>
            <h3>Add an Issue</h3>
            {/* The add issue function comes from context, because the issues are stored and updated in context */}
            <IssueForm addIssue={addIssue} /> 
            <h3>Your Political Issues</h3>
            {/* Issues comes from context  */}
            <IssueList issues={issues} />
        </div>
    )
}