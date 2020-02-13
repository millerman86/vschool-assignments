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
        'num6': 0
      }
    }

    this.fiveRandomNumbers = this.fiveRandomNumbers.bind(this)

  }

  fiveRandomNumbers() {
    let diceFaceNames = [
        'num1', 
        'num2', 
        'num3', 
        'num4', 
        'num5', 
        'num6'
    ]

    let newState = {}

    for (let i = 0; i < 6; i++) {
      let randomNumber = getRandomInt(1, 7)
      newState[diceFaceNames[i]] = randomNumber
    }

    

    this.setState(() => {
      return {
        diceNumbers: {...newState}
      }
    })
  }

  render() {


    return (
      <div>

        <div onClick={this.fiveRandomNumbers}><button>roll the dice</button></div>
        <div>{this.state.diceNumbers['num1']}</div>
        <div>{this.state.diceNumbers['num2']}</div>
        <div>{this.state.diceNumbers['num3']}</div>
        <div>{this.state.diceNumbers['num4']}</div>
        <div>{this.state.diceNumbers['num5']}</div>
        <div>{this.state.diceNumbers['num6']}</div>
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


// Math.floor(Math.random() * 6