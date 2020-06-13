import React, { useEffect } from 'react'
import Issue from './Issue'
import authService from '../services/authService'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const issuesEndpoint = "http://localhost:9000/api/issues"

const userAxios = axios.create()

// A user will need to be logged in at all times, starting from the log in screen. While sending a user token 
// for every request isn't strictly necessary, it simplifies the code for the application.
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function PoliticalIssuesPage() {
    // Items will be ordered by upvotes (the most being at the top)
    const test = () => {
        authService.isAuthenticated = !authService.isAuthenticated
    }

    useEffect(() => {
        userAxios
            .get('/api/issue')
            .then(res => console.log(res))
            .catch(res => console.log(res))
    }, [])

    return (
        <div onClick={test}>Political Issues</div>
    )
}