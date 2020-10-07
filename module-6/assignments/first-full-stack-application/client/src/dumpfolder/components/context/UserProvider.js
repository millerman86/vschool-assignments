import React, { useState, useEffect } from "react";
import axios from "axios";
// import userAxios from '../config/requestinterceptor'

export const UserContext = React.createContext();


export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || "",
    token: localStorage.getItem("token") || "",
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
      .catch((err) => {
        console.log(err.response)
      });
  }

  function logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      setUserState({
          user: {}, 
          token: '', 
      })
  }
  
  useEffect(() => {

  }, [])

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout, 
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
