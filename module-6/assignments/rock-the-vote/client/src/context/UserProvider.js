import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export const UserContext = React.createContext();

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || "",
    token: localStorage.getItem("token") || "",
    issues: [],
  }

  const [userState, setUserState] = useState(initState);

  function signup(credentials) {
    console.log('credentials', credentials);
    axios
      .post("/auth/signup", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
        window.location = '/profile'
      })
      .catch((err) => console.log(err));
  }

  function login(credentials) {
    axios
      .post("/auth/login", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      setUserState({
          user: {}, 
          token: '', 
          issues: []
      })
  }

  function addIssue(newIssue) {
    userAxios
      // Since we're hitting the api endpoint, it's going to require that we have a token
      .post('/api/issue', newIssue)
      .then(res => {
        setUserState(prevState => ({
          ...prevState, 
          issues: [...prevState.issues, res.data]
        }))
      })
      .catch(err => console.log(err))
  }

  // Get an individual user's issues
  function getUserIssues() {
    userAxios.get('/api/issue/user')
      .then(res => {
        console.log(res);
        setUserState(prevState => ({
          ...prevState, 
          issues: [...res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  useEffect(() => {
    getUserIssues()
    addIssue()
  }, [])

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout, 
        addIssue
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
