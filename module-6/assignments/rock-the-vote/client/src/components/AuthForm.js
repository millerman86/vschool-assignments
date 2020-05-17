import React from "react";

export default function AuthForm(props) {
  const {
    handleChange,
    handleSubmit,
    btnText,
    inputs: { username, password }, // nested destructuring
  } = props;

  return (
    <form onSubmit={handleSubmit}>
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
        name="username"
        onChange={handleChange}
        placeholder="Username"
      />
      <button>{ btnText }</button>
    </form>
  );
}
