import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super()

    this.state = {
      name: "amren"
    }

    this.nameChange = this.nameChange.bind(this)
  }

  nameChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <input name="name" value={this.state.name} onChange={this.nameChange}/>
        <ol></ol>
        <button></button>
      </div>
    );
  }
}

export default App;
