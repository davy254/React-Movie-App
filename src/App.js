import {useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';

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

  //Function for searching movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json(); 
    console.log(data.Search);
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
      <div className='container'>
          <div className='movie'>
            <div>
              <p>{movie1.Year}</p>
            </div>
            <div>
              <img src={movie1.Poster !== 'N/A' ? movie1.Poster :'https://via.placeholder.com/400' } alt={movie1.Title}/>
            </div> 
            <div>
              <span>{movie1.Type}</span>
              <h3>{movie1.Title}</h3>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
