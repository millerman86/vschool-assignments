import React, {BrowserRouter as Router} from 'react';
import './App.css';
import axios from 'axios';
import Chart from 'react-google-charts'



const options = {
  width: 400,
  height: 120,
  redFrom: 90,
  redTo: 100,
  yellowFrom: 75,
  yellowTo: 90,
  minorTicks: 10
};


class GaugeChart extends React.Component {
  state = {
    IMDB: 0,
    Metacritic: 0,
    RottenTomatoes: 0
  };
  intervalID = null;
  getData = () => {
    return [
      ["Label", "Value"],
      ["IMDB", this.state.IMDB],
      ["Rotten Tomatoes", this.state.Metacritic],
      ["Metacritic", this.state.RottenTomatoes]
    ];
  };

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="App">
        <Chart
          chartType="Gauge"
          width="100%"
          height="120px"
          data={this.getData()}
          options={options}
        />
      </div>
    );
  }
}





class App extends React.Component {

  state = {
    
    _loading: false
  }
  
  componentDidMount() {
    this.axiosGet()
  }

  axiosGet = () => {
    axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&t=back%20to%20the%20future`)
      .then(response => this.setState({}))
  }


  
  render() {
    return (
      <div>
      <header>
      
      </header>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/root" component={Root}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route exact path="/stats" component={stats}></Route>
        </Switch>
      </Router> */}


        {/* <Home /> */}


         <GaugeChart />
        <meter></meter>
      </div>
    )
  }
}



export default App;
