import axios from 'axios'

// variables holding strings of each half of url - to insert the IMDb ID number within
const baseURL = 'https://www.omdbapi.com/?i='
const apiKeyURL = '&apikey='


// api request function - id parameter will have the imdb ID generated from a function as an argumenet to complete the URL

export const getMovie = id => {
  return axios.get(baseURL + id + apiKeyURL + process.env.REACT_APP_MY_API_KEY)
}









