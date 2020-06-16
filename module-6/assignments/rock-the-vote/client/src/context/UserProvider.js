import React, { useState, useEffect } from "react";
import axios from "axios";
import userAxios from '../config/requestinterceptor'

export const UserContext = React.createContext();


export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || "",
    token: localStorage.getItem("token") || "",
    issues: [],
  }

  const [userState, setUserState] = useState(initState);

  function signup(credentials) {
    axios
      .post("/auth/signup", credentials)
      .then((res) => {
        window.location = '/profile'

        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => console.log(err));
  }

  function login(credentials) {
    axios
      .post("/auth/login", credentials)
      .then((res) => {
        window.location = '/profile'

        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => console.log(err.response));
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
        console.log('res', res);
        setUserState(prevState => ({
          ...prevState, 
          issues: [...prevState.issues, res.data]
        }))
      })
      .catch(err => console.log(err))
  }

  // Get an individual user's issues
  function getUserIssues() {
    if (!localStorage.getItem('token')) return
    userAxios.get('/api/issue/user')
      .then(res => {
        console.log(res);
        console.log('hello');
        setUserState(prevState => ({
          ...prevState, 
          issues: [...res.data]
        }))
      })
      .catch(err => {
        console.log(err.response.data.errMsg)
        console.log('ERROR');
      })
  }

  useEffect(() => {
    getUserIssues()
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
