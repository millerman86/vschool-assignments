import React from 'react';
import axios from 'axios';
import './App.css'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      targets: []
    }
  }

  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json').then(response => {
      console.log(response);
      this.setState({
        targets: response.data
      })
    })
  }

  render() {
    const targets = this.state.targets.map((target, index) => {
      return (<div key={index}>
                {target.name}
                <img src={target.image} />
              </div>)
    })
    return (
      <div>
        <h1>Don Corleone's Hit List</h1>
       {targets}
      </div>
    );
  }
}

export default App;

