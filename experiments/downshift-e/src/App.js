import React from "react";
import "./App.css";
import Downshift from "downshift";
import { all as starWarsNames } from "starwars-names";
import matchSorter from "match-sorter";

const items = starWarsNames.map((name) => ({
  name,
  id: name.toLowerCase(),
}));

const itemToString = (item) => (item ? item.name : "");

const getItems = (value) => {
  return value ? matchSorter(items, value, { keys: ["value"] }) : items;
};

const stateReducer = (state, changes) => {
  if (changes.type === Downshift.stateChangeTypes.blurButton) {
    return { ...changes, isOpen: true };
  }
  return changes;
};

console.log(Downshift.stateChangeTypes);

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Autocomplete rocks!</h1>
        <div>
          <Downshift stateReducer={stateReducer} itemToString={itemToString}>
            {({
              getInputProps,
              getLabelProps,
              getMenuProps,
              getItemProps,
              getToggleButtonProps,
              isOpen,
              highlightedIndex,
              clearSelection,
              selectItem,
              inputValue,
            }) => (
              <div>
                <label {...getLabelProps()}>Select a Star Wars Character</label>
                <input {...getInputProps()} />
                <button {...getToggleButtonProps()}>
                  {isOpen ? "close" : "open"}
                </button>
                {selectItem ? (
                  <button onClick={clearSelection}>x</button>
                ) : null}
                <ul
                  {...getMenuProps({
                    style: { height: 200, overflowY: "scroll" },
                  })}
                >
                  {isOpen
                    ? getItems(inputValue).map((item, index) => (
                        <li
                          key={item.id}
                          {...getItemProps({
                            item,
                            key: item.id,
                            style: {
                              backgroundColor:
                                index === highlightedIndex ? "gray" : null,
                            },
                          })}
                        >
                          {item.name}
                        </li>
                      ))
                    : null}
                </ul>
              </div>
            )}
          </Downshift>
        </div>
      </div>
    );
  }
}

export default App;
