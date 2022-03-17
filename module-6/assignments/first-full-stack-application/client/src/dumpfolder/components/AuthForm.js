import React from "react";
import styled from 'styled-components'


const StyledAuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 50%;
  }

  input {
    width: 100%;
    margin: 10px 0;
    border: 2px solid black;
    outline: none;
    font-size: 16px;
    line-height: 1.3em;
    padding-left: 5px;
  }

  input:focus {
    border: 2px solid black;
  }
`

export default function AuthForm(props) {
  const {
    handleChange,
    handleSubmit,
    btnText,
    inputs: { username, password }, // nested destructuring
  } = props;

  return (
    <StyledAuthForm onSubmit={handleSubmit}>
      <div>
        <input
          autocomplete="off"
          type="text"
          value={username}
          name="username"
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          autocomplete="off"
          type="text"
          value={password}
          name="password"
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
      <button>{ btnText }</button>
    </StyledAuthForm>
  );
}

