import React from 'react'
import Issue from '../components/Issue'
import authService from '../services/authService'

const issuesEndpoint = "http://localhost:9000/api/issues"


export default function PoliticalIssuesPage() {
    // Items will be ordered by upvotes (the most being at the top)
    const test = () => {
        authService.isAuthenticated = !authService.isAuthenticated
    }
    return (
        <div onClick={test}>Political Issues</div>
    )
}