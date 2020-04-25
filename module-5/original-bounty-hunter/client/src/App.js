import React from 'react';
import './App.css';
import axios from 'axios'

axios.get('/bounties').then(data => console.log(data)).catch(err => console.log('error'))
axios.post('/bounties', {firstName: 'blah'}).then(data => console.log(data)).catch(err => console.log(err))
axios.put('/bounties/1788d37d-2f44-4f98-be82-3a7a6f3fca6b').then(data => console.log(data)).catch(err => console.log('error'))
axios.delete('/bounties/1788d37d-2f44-4f98-be82-3a7a6f3fca6b').then(data => console.log(data)).catch(err => console.log('error'))


function App() {
  return (
    <div></div>
  );
}

export default App;
