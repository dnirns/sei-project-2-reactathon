import axios from 'axios'


const baseURL = 'http://www.omdbapi.com/?i='
const apiKeyURL = '&apikey='




// //*Proposed update (not working, id not recognised as parameter)
export const getMovie = id => {
  return axios.get(baseURL + id + apiKeyURL + process.env.REACT_APP_MY_API_KEY)
}









