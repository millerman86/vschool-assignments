import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';
import {FaSearch} from 'react-icons/fa'


// const ThemeProvider = React.createContext(); // Should probably put this into its own file
// const {Provider, Consumer} = ThemeProvider;



// ThemeProvider // Should at least use createContext
// Should probably use state at the root of the application
class App extends React.Component {
  // state = {
  //   theme: 'light'
  // }

  render() {
    return (
      <div id="app">
        <FaSearch />
        <NavBar />
        <Main />
        <Footer />
      </div>
    )
  }
  
}

export default App;
