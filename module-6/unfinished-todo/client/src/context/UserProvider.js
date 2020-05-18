import React, { useState, useEffect } from "react";
import axios from "axios";

const userAxios = axios.create() // creates another version of Axios that we can then configure for specific reasons

export const UserContext = React.createContext();

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
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
        getUserTodos()
        setUserState(prevUserState => ({
          ...prevUserState, 
          user, 
          token
        }))
      })
      .catch((err) => console.log(err.response.data.errMsg));
  }

  function logout() {
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
    console.log('This is the add todo function')
    userAxios
      .post('/api/todo', newTodo)
      .then(res => {
        setUserState(prevState => ({
          ...prevState, 
          todos: [...prevState.todos, res.data]
        }))
      })
      .catch(err => console.log(err))
  }

  function getUserTodos() {
    userAxios.get('/api/todo/user')
      .then(res => {
        console.log(res);
        setUserState(prevState => ({
          ...prevState, 
          todos: [...res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  useEffect(() => {
    getUserTodos()
  }, [])

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
