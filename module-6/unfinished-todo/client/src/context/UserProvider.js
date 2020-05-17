import React, { useState } from "react";
import axios from "axios";

const userAxios = axios.create()

export const UserContext = React.createContext();

userAxios.interceptors.request.use(config => {
  const token = localStorage.getITem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem('user')) || '', // JSON gets stringified for storage
    token: localStorage.getItem('token') || '',
    todos: [],
  };

  const [userState, setUserState] = useState(initState);

  function signup(credentials) {
    axios
      .post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState, 
          user, 
          token
        }))
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function login(credentials) {
    axios
      .post("/auth/login", credentials)
      .then((res) => {
        const { user, token } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        setUserState(prevUserState => ({
          ...prevUserState, 
          user, 
          token
        }))
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function logout() {
    console.log('hello');
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUserState({
      user: {}, 
      token: '', 
      todos: []
    })
    window.location = '/'
  }

  function addTodo(newTodo) {
    axios
      .post('/api/todo', newTodo)
      .then(res => console.log(res))
      .catch(err => console.log(err.response.data.errMsg))
      
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout, 
        addTodo
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
