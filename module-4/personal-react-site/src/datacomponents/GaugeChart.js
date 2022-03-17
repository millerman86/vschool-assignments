import Chart from "react-google-charts";
import React from "react";

const options = {
  width: 400,
  height: 120,
  redFrom: 90,
  redTo: 100,
  yellowFrom: 75,
  yellowTo: 90,
  minorTicks: 10,
};

class GaugeChart extends React.Component {
  state = {
    IMDB: 0,
    Metacritic: 0,
    RottenTomatoes: 0,
  };
  intervalID = null;
  getData = () => {
    return [
      ["Label", "Value"],
      ["IMDB", this.state.IMDB],
      ["Rotten Tomatoes", this.state.Metacritic],
      ["Metacritic", this.state.RottenTomatoes],
    ];
  };

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <h1 className="bring-me-the-ratings">Bring me the ratings!</h1>
        <Chart
          chartType="Gauge"
          width="100%"
          height="120px"
          data={this.getData()}
          options={options}
        />
        <h3>There are 3 ratings you can view</h3>
        Please enter the NAME of your requested movie
        <input />
        <h3>Miller</h3>
      </div>
    );
  }
}

export default GaugeChart;
