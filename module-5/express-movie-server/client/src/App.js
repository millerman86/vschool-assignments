import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Movie from './components/Movie'
import AddMovieForm from './components/AddMovieForm'

function App() {
  const [movies, setMovies] = useState([])

  function getMovies() {
    axios.get('/movies')
      .then(res => {
        setMovies(res.data)
      })
      .catch(err => {
        console.log(err.response.data.errMsg)
        console.log(err.response);
      })
  }

  function addMovie(newMovie) {
    console.log(newMovie);
    axios.post('/movies', newMovie)
      .then(res => {
        setMovies(prevMovies => [...prevMovies, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteMovie(movieId) {
    axios.delete(`/movies/${movieId}`)
      .then(res => {
        setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
      })
      .catch(err => console.log(err))
  }

  function editMovie(updates, movieId) {
    axios.put(`/movies/${movieId}`, updates)
      .then(res => {
        setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
      })
      .catch(err => console.log(err))
  }

  const handleFilter = (e) => {
    if (e.target.value === 'reset') {
      return getMovies()
       
    }
    axios.get(`/movies/search/genre?genre=${e.target.value}`)
      .then(res => setMovies(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getMovies()
  }, []) // will only refire if data is loaded in as an argument and it sees a change

  return (
    <div className="movie-container">
      
      <AddMovieForm submit={addMovie} btnText="Add Movie" />

      <h4>Filter by Genre</h4>
      <select onChange={handleFilter} className="filter-form" id="">
        <option value="reset">Select a Genre</option>
        <option value="action">Action</option>
        <option value="fantasy">Fantasy</option>
        <option value="horror">Horror</option>
      </select>

      {movies.map((movie, i) => <Movie {...movie} key={i} deleteMovie={deleteMovie} editMovie={editMovie} />)}
    </div>
  );
}

export default App;