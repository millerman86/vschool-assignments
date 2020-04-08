import React from 'react';
import './App.css';
import Downshift from 'downshift';
import {all as starWarsNames} from 'starwars-names';


console.log(starWarsNames);

const items = starWarsNames.map(name => ({
  name, 
  id: name.toLowerCase()
}))


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Autocomplete rocks!</h1>
        <div>
          <Downshift>
            {({getInputProps, getLabelProps}) => (
              <div>
                <label {...getLabelProps()}>Select a Star Wars Character</label>
                <input {...getInputProps()}/>
                <ul>
                  {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </Downshift>
        </div>
      </div>
    )
  }
}


export default App;
