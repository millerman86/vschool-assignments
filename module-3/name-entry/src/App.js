import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super()

    this.state = {
      name: "", 
      enteredNames: []
    }

    this.nameChange = this.nameChange.bind(this)
    this.submitName = this.submitName.bind(this)
  }

  nameChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  submitName(event) {
    event.preventDefault()
    if (!this.state.name) return 
    this.setState((previousState) => {
      return {
        name: '',
        enteredNames: [...previousState.enteredNames, this.state.name]
      }

    })
  }

  render() {
    const names = this.state.enteredNames.map((name, index) => {
      return <li key={index}>{name}</li>
    })
    return (
      <form onSubmit={this.submitName}>
        <input name="name" value={this.state.name} onChange={this.nameChange}/>
        {(this.state.name ? (<h1>{this.state.name}</h1>) : <h1>&nbsp;</h1>)}
        <ol>{names}</ol>
        <button></button>
      </form>
    );
  }
}

export default App;
