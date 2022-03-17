import React from 'react';
import './App.css';
const firebase = require('firebase');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedNoteIndex: null, 
      selecctedNote: null, 
      notes: null
    }
  }
  
  componentDidMount = () => {
    firebase 
      .firestore()
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data()
          data['id'] = _doc.id;
          return data;
        })
        console.log(notes)
        this.setState({ notes: notes})
      }) // Whenever notes gets updated in the database, the function here will be called
  }

  render() {
    return (
      <div>hello world</div>
    )
  }
}

export default App;
