import {useEffect} from 'react';
import './App.css';
import SearchIcon from './search.svg';

 //627e2ad3

// API URL
const API_URL = 'http://www.omdbapi.com?apikey=627e2ad3'
const  App = () => {

  //Function for searching movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json(); 
    console.log(data);
  }

  //Retrieving data from API once browser has loaded
  useEffect(() => {
      searchMovies('James Bond');
  }, []);
 
  return (
    <div className="App">
      <h1> Movie App</h1>
      <></>
    </div>
  );
}

export default App;
