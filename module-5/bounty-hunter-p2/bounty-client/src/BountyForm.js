import React, { useRef } from "react";

export default function BountyForm(props) {

  const inputController = [
      useRef(null), 
      useRef(null), 
      useRef(null), 
      useRef(null), 
      useRef(null), 
  ]
  
  return (
    <form onSubmit={props.formSubmit} className="">
      <div className="column1">
        <p onClick={() => inputController[0].current.focus()}>First Name:</p>
        <p onClick={() => inputController[1].current.focus()}>Last Name:</p>
        <p onClick={() => inputController[2].current.focus()}>Living:</p>
        <p onClick={() => inputController[3].current.focus()}>Head Price:</p>
        <p onClick={() => inputController[4].current.focus()}>Type:</p>
      </div>
      <div className="column2">
        <input
          ref={inputController[0]}
          type="text"
          name="firstName"
          value={props.form.firstName}
          onChange={props.updateForm}
        />

        <input
          ref={inputController[1]}
          type="text"
          name="lastName"
          value={props.form.lastName}
          onChange={props.updateForm}
        />

        <input
          ref={inputController[2]}
          type="text"
          name="living"
          value={props.form.living}
          onChange={props.updateForm}
        />

        <input
          ref={inputController[3]}
          type="text"
          name="bountyAmount"
          value={props.form.bountyAmount}
          onChange={props.updateForm}
        />

        <input
          ref={inputController[4]}
          type="text"
          name="type"
          value={props.form.type}
          onChange={props.updateForm}
        />
        <button onClick={props.formSubmit}>Submit new bounty</button>
      </div>
    </form>
  );
}
