import React from 'react';
import './App.css';

class DiceBox extends React.Component { 
  
  constructor() {
    super()

    this.state = {
      diceNumbers: {
        'num1': 0, 
        'num2': 0, 
        'num3': 0, 
        'num4': 0, 
        'num5': 0, 
      }
    }

    this.fiveRandomNumbers = this.fiveRandomNumbers.bind(this)

  }

  fiveRandomNumbers() {
    let newDiceState = {}

    for (let diceProperty in this.state.diceNumbers) {
      newDiceState[diceProperty] = getRandomInt(1, 7)
    }

    this.setState(() => {
      return {
        diceNumbers: {...newDiceState}
      }
    })
  }

  render() {
    let renderedDice = []; 

    for (let dice in this.state.diceNumbers) {
    let individualDie = (
      <div>
        {this.state.diceNumbers[dice]}
      </div>)
      renderedDice.push(individualDie)
    }

    return (
      <div>
        <div onClick={this.fiveRandomNumbers}><button>roll the dice</button></div>
        {renderedDice}
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <DiceBox />
    </div>
  )
}

export default App;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
