import React, {Component} from 'react';
import Routing from './Routes'

import Header from './ProjectComponents/shared/Header';
import Sidebar from './ProjectComponents/shared/Sidebar';

import './App.css';
import './semantic-ui/semantic.min.css';
import './fingerprint.css';

export default class extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sidebar/>
        <Routing />
      </div>
    );
  }
}