import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const useStyles = makeStyles({});

const MyButton = styled(Button)({});

const StyledExample = styled.div``;

const BountyUl = styled.ul`
padding: 0;
margin: 0;
  li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

function App() {
  const classes = useStyles();

  const [bounties, setBounties] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    living: false,
    bountyAmount: 0,
    type: "df",
  });

  const getBounties = () => {
    axios.get("/bounties").then((response) => {
      setBounties(response.data);
      console.log(response);
    });
  };

  const postBounty = (newBounty) => {
    console.log(newBounty);
    axios.post("/bounties", newBounty).then((response) => {
      console.log("data", response.data);
    });
  };

  const putBounty = (bountyId) => {
    axios.put(`/bounties/${bountyId}`).then((response) => {
      console.log(response);
    });
  };

  const deleteBounty = (bountyId) => {
    axios.delete(`/bounties/${bountyId}`).then((response) => {
      console.log(response);
      setBounties(response.data)
    });
  };

  useEffect(() => {
    getBounties();
  }, []);

  const updateForm = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();

    postBounty(form);
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={updateForm}
        />
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          onChange={updateForm}
        />
        <input
          type="text"
          name="living"
          value={form.living}
          onChange={updateForm}
        />
        <input
          type="text"
          name="bountyAmount"
          value={form.bountyAmount}
          onChange={updateForm}
        />
        <input
          type="text"
          name="type"
          value={form.type}
          onChange={updateForm}
        />
        <input type="text" name="id" value={form.id} />

        <button onClick={formSubmit}>Submit new bounty</button>
      </form>

      
      <BountyUl>
        {bounties.map((bounty, i) => {
          return (
            <li key={i} className={classes.bountyItem}>
              {bounty.firstName + " " + bounty.lastName}
              <button onClick={() => deleteBounty(bounty.id)}>Delete</button>
              <button onClick={() => putBounty(bounty.id)}>Put</button>
            </li>
          );
        })}
      </BountyUl>
    </div>
  );
}

export default App;
