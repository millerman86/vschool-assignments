import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserProvider";
import AuthForm from './AuthForm'
import styled from 'styled-components'
import Background from './greywave.jpeg'
import { FaUser } from 'react-icons/fa'


const initInputs = {username: "", password: ""}


const AuthContainer = styled.div`
  background: #DAE0E6;
  min-height: 100vh;
  background-image: url("${Background}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  overflow: hidden;

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
    width: 400px;
    height: 400px;
    margin: auto;

    display: flex;
    flex-direction: column;
  }
  
  p {
    text-align: center;
  }

  .member-no-member {
    text-align: center;
    padding: 20px 0;
  }

  .sign-in {
      flex-grow: 0;
      padding: 15px 0;
  }

  .grid2x2 {
    flex-grow: 1;
  }

  .grid2x2 {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0 20px;
  }

  .grid2x2 > div {
    display: flex; 
    flex-basis: calc(50%);  
    justify-content: center;
    flex-direction: column;
    border: 1px solid white;
    box-sizing: border-box;
  }

  .user-container {
      display: flex;
      align-items: center;
  }

  .fa-user {
      font-size: 60px;
  }

  .user-flex {
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  .user-flex p {
      margin: 5px;
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
      signup(inputs)
  }

  function handleLogin(e) {
      e.preventDefault()
      login(inputs)
  }

  return (
    <AuthContainer>
      <div className="form-container">
        <h1>Demo User Login</h1>
        <div className="grid2x2">
            <div className="user-container">
                <div className="user-flex">
                    <FaUser className="fa-user">

                    </FaUser>
                    <p>Admin</p>
                </div>
            </div>
            <div className="user-container">
                <div className="user-flex">
                    <FaUser className="fa-user">

                    </FaUser>
                    <p>Project Manager</p>
                </div>
            </div>
            <div className="user-container">
                <div className="user-flex">
                    <FaUser className="fa-user">

                    </FaUser>
                    <p>Developer</p>
                </div>
            </div>
            <div className="user-container">
                <div className="user-flex">
                    <FaUser className="fa-user">

                    </FaUser>
                    <p>Submitter</p>
                </div>
            </div>
        </div>
        <div className="sign-in-container">
            <p className="sign-in">Have an account? Sign in!</p>
        </div>

        {/* {!toggle ? 
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
        } */}
      </div>
    </AuthContainer>
  );
};
