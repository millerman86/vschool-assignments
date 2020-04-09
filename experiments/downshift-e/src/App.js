import React from 'react';
import './App.css';
import Downshift from 'downshift';
import {all as starWarsNames} from 'starwars-names';


console.log(starWarsNames);

console.log('this is a test')

const items = starWarsNames.map(name => ({
  name, 
  id: name.toLowerCase()
}))

const itemToString = (item) => item ? item.name : ''


class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Autocomplete rocks!</h1>
        <div>
          <Downshift itemToString={itemToString}>
            {({getInputProps, getLabelProps, getMenuProps, isOpen, selectItem}) => (
              <div>
                <label {...getLabelProps()}>Select a Star Wars Character</label>
                <input {...getInputProps()}/>
                <ul {...getMenuProps()}>
                  {isOpen ? items.map(item => (
                    <li key={item.id} onClick={() => selectItem(item)}>{item.name}</li>
                  )) : null}
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
