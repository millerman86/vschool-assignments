import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'


function App() {

  const [bounties, setBounties] = useState([])
  const [form, setForm] = useState({
    firstName: "", 
    lastName: "", 
    living: false, 
    bountyAmount: 0, 
    type: "", 
  })

  const getBounties = () => {
    axios.get('/bounties').then((response) => {
      setBounties(response.data)
      console.log(response);
    })
  }

  const postBounty = (newBounty) => {
    console.log(newBounty);
    axios.post('/bounties', newBounty).then((response) => {
      console.log('data', response.data);
    })
  }

  const putBounty = () => {
    axios.put('/bounties').then((response) => {
      console.log(response);
    })
  }

  const deleteBounty = () => {
    axios.delete('/bounties').then((response) => {
      console.log(response);
    })
  }

  useEffect(() => {
    getBounties()
  }, [])
  

  const updateForm = (event) => {
    const {name, value} = event.target;
    setForm(prevState => {
      return {
        ...prevState, 
        [name]: value
      }
    })
  }


  const formSubmit = (e) => {
    e.preventDefault()
    
    postBounty(form)
  }


  
  return (
    <div>

      <form onSubmit={formSubmit}>
        <input type="text" name="firstName" value={form.firstName} onChange={updateForm} />
        <input type="text" name="lastName" value={form.lastName} onChange={updateForm}/>
        <input type="text" name="living" value={form.living} onChange={updateForm}/>
        <input type="text" name="bountyAmount" value={form.bountyAmount} onChange={updateForm}/>
        <input type="text" name="type" value={form.type} onChange={updateForm}/>
        <input type="text" name="id" value={form.id}/>

        <button onClick={formSubmit}>Submit new bounty</button>
      </form>
      {JSON.stringify(bounties)}
    </div>
  );
}

export default App;
