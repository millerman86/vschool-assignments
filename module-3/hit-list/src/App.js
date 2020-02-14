import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super()

    this.state = {

    }
  }

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json').then(response => {
      console.log(response)
    })
  }

  render() {
    return (
      <div>
       amren
      </div>
    );
  }
}

export default App;

