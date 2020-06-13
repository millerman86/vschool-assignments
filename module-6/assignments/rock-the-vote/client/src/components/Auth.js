import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";
import AuthForm from './AuthForm'
import styled from 'styled-components'

const initInputs = {username: "", password: ""}




const AuthContainer = styled.div`
  background: blue;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    padding: 0;
    margin: 0;
    text-align: center;
  }

  .form-container {
    background: white;
  }
  
  p {
    text-align: center;
  }

  .member-no-member {
    text-align: center;
    padding: 20px 0;
  }
`


export default () => {
  const { signup, login } = useContext(UserContext);
  const [inputs, setInputs] = useState(initInputs);
  const [toggle, setToggle] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  function handleSignup(e) {
      e.preventDefault()
      // I need to redirect after signup to profile
      signup(inputs)
  }

  function handleLogin(e) {
      e.preventDefault()
      login(inputs)
  }

  return (
    <AuthContainer>
      <div className="form-container">
        <h1>{!toggle ? "Sign up" : "Log in"}</h1>
        {!toggle ? 
          <>
            <AuthForm 
              handleChange={handleChange}
              handleSubmit={handleSignup}
              inputs={inputs}
              btnText="Sign up"
            />
            <div className="member-no-member">
              <span onClick={() => setToggle(prev => !prev)}>Already a member?</span>
            </div>
          </>
          : 
            <> 
              <AuthForm 
                handleChange={handleChange}
                handleSubmit={handleLogin}
                inputs={inputs}
                btnText="Login"
              />
              <div className="member-no-member">
                <span onClick={() => setToggle(prev => !prev)}>Not a member?</span>
              </div>
            </>
        }
      </div>
    </AuthContainer>
  );
};
