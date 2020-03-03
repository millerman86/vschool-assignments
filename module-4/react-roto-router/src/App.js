import React from 'react'
import './App.css'

import {Switch, Route} from 'react-router-dom'

import Footer from './pages/Footer'
import NavBar from './pages/NavBar'

import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'



function App() {
  return (
    <div className="app-wrap">
      
      <NavBar />

      <Switch>
        <Route exact path="/" component={Home}>
          
        </Route>
        <Route path="/about" component={About}>

        </Route>
        <Route path="/services" component={Services}>

        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
