import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  
  componentDidMount() {
    document.querySelector('.color-api').style.background = 'blue'


    // You will need to dig out a color from a json object
    // axios.get('http://www.colr.org/color/random').then(response => {
    //   console.log(response);
    // })
  }

  // componentDidMount() {
  //   axios.get('https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json').then(response => {
  //     console.log(response);
  //     this.setState({
  //       targets: response.data
  //     })
  //   })
  // }

  render() {
    return (
      <div className="color-api">
        sd
      </div>
    );
  }
  
}

export default App;
