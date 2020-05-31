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
    border: 1px solid black;
    outline: none;
  }

  input:focus {
    border: 1px solid black;
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
          type="text"
          value={username}
          name="username"
          onChange={handleChange}
          placeholder="Username"
        />
        <input
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

