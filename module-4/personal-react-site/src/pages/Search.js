import React, { useState, useRef } from "react";
import DataFetcher from '../datacomponents/DataFetcher';



const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_APIKEY}&`;

function Search() {
  const [tvShowOrMovie, settvShowOrMovie] = useState("");
  const [searchType, setSearchType] = useState("");
  const [plotLength, setPlotLength] = useState("");
  const [sendUrl, setSendUrl] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();

    const encodedSearchValue = encodeURIComponent(searchType).toLowerCase();
    const encodedtvShowOrMovie = encodeURIComponent(tvShowOrMovie).toLowerCase();
    const encodedPlotLength = encodeURIComponent(plotLength).toLowerCase();

    const sendUrl = `${url}t=${encodedtvShowOrMovie}&type=${encodedSearchValue}&plot=${encodedPlotLength ? encodedPlotLength : "short"}`;

    setSendUrl(sendUrl)

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
  const plotOptions = ["", "short", "full"];
  return (
    <form id="search-form" onSubmit={submitSearch}>

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
      <select
        defaultValue=""
        name=""
        id="shortorfull"
        onChange={(e) => setPlotLength(e.target.value)}
      >
        {plotOptions.map((plotOption, index) => (
          <option
            key={index}
            value={plotOption}
            disabled={plotOption === "" ? true : null}
          >
            {plotOption}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>

      <div>
        {sendUrl && (
          <DataFetcher url={sendUrl}>
            {(data, loading) => {
              return (
                loading ?
                  (<h1>Loading...</h1>) :
                  (<p>{JSON.stringify(data)}</p>)
              )
            }}
          </DataFetcher>)}
      </div>
    </form>
  );
}

export default Search






// function App() {    url
//   return (
//       <div>
//           <DataFetcher url="https://swapi.co/api/people/1">
//               {(data, loading) => (
//                   loading ? 
//                   <h1>Loading...</h1> :
//                   <p>{JSON.stringify(data)}</p>
//               )}
//           </DataFetcher>
//       </div>
//   )
// }



























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
