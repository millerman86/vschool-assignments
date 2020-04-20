import React, { useState, useRef } from "react";
import axios from 'axios'

const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&`;

function Search() {
  const [tvShowOrMovie, settvShowOrMovie] = useState("");
  const [searchType, setSearchType] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();

    const encodedSearchValue = encodeURIComponent(searchType).toLowerCase();
    const encodedtvShowOrMovie = encodeURIComponent(tvShowOrMovie).toLowerCase();

    const sendUrl = `${url}t=${encodedtvShowOrMovie}&type=${encodedSearchValue}`

    axios.get(sendUrl).then((data) => console.log(data))
  };

  const input1 = useRef(null)
  const input2 = useRef(null)

  const input1Click = () => {
    input1.current.focus()
  }

  const input2Click = () => {
    input2.current.focus()
  }

  const searchOptions = ["", "Movie", "Series", "Episode"];
  return (
    <form onSubmit={submitSearch}>

      <h3>Please enter the title of the movie, series, or episode that you would
      like to search</h3>
      <label htmlFor="title" onClick={input1Click}>
        Title:
      <input
          ref={input1}
          name="title"
          type="text"
          value={tvShowOrMovie}
          onChange={(e) => settvShowOrMovie(e.target.value)}
        />
      </label>


      <label htmlFor="year" onClick={input2Click}>
        Year:
        <input
          ref={input2}
          type="text"
          name="year"
        />
      </label>

      <select
        defaultValue=""
        name=""
        id="type"
        onChange={(e) => setSearchType(e.target.value)}
      >
        {searchOptions.map((searchOption, index) => (
          <option
            key={index}
            value={searchOption}
            disabled={searchOption === "" ? true : null}
          >
            {searchOption}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Search;
// axiosGet = () => {
//   axios
//     .get(
//       `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&`
//     )
//     .then((response) => this.setState({}));
// };

// useEffect(() => {}, []);

// Parameters
// i or t are optional on their own, but need to use either or
// i: A valid IMDb ID ( tt1285016)  -> How could I use this? Maybe use it to cache the previously used search?
// t: Movie title to search for  -> Default: <empty>
// type: movie, series, episode  -> type of result to return
// type=movie  type=series  type=episode

// y: Year of release  -> Default: empty
// plot: short full  -> plot=short  plot=full
// r
