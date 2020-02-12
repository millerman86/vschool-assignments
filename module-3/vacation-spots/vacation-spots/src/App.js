import React from 'react';
import './App.css';
import Card from './components/Card';
import vacationSpots from './data/vacation-spots';

console.log(vacationSpots)

const vacationCards = vacationSpots.map((vacationSpot, i) => {
  return <Card key={i} vacationSpot={vacationSpot.place} />
})

function App() {
  return (
    <div>
      {vacationCards}
    </div>
  )
}


export default App;
