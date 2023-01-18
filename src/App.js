import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

 //627e2ad3

// API URL
const API_URL = 'http://www.omdbapi.com?apikey=627e2ad3'

const movie1 = {
  "Title": "James Bond 007: Blood Stone",
  "Year": "2010",
  "imdbID": "tt1692489",
  "Type": "game",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTcxMzE4NDg0NF5BMl5BanBnXkFtZTgwMjg5Mjc1MDE@._V1_SX300.jpg"
}

const  App = () => {

  const [movies, setMovies] = useState([]);

  //Function for searching movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json(); 
    setMovies(data.Search);
  }

  //Retrieving data from API once browser has loaded
  useEffect(() => {
      searchMovies('James Bond');
  }, []);
 
  return (
    <div className="app">
      <h1> Movie App</h1>
      <div className='search'>
        <input 
          placeholder='search for movies'
          value='Batman'
          onChange={() => {}}
        />
        <img 
          src={SearchIcon}
          alt='search'
          onClick={() => {}}
        />
      </div>

      {
        movies?.length > 0
        ?  (
          <div className='container'>
            {movies.map((movie) =>
              <MovieCard movie={movie}/>
            )}
          </div>
        ):(
          <div className='empty'>
            <h2>No movies found.</h2>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
