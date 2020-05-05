import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Movie from './components/Movie'

function App() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get('/movies')
      .then(res => setMovies(res.data))
      .catch(err => console.log(err))
  }, []) // will only refire if data is loaded in as an argument and it sees a change

  const click = () => {
    setMovies(['blah'])
  }

  return (
    <div className="movie-container">
      {movies.map(movie => <Movie {...movie} key={movie.title} />)}
      <button onClick={click}>Button</button>
    </div>
  );
}

export default App;