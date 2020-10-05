import React from 'react'

import { getMovie } from '../lib/api'
import { Link } from 'react-router-dom'

class UI extends React.Component {

  // movie: will hold the result of the api request
  // moviesLeft holds the counter to be decreased every time the main function is run
  state = {
    movie: null,
    moviesLeft: 5
  }
  
  // asyncfunction as it makes the api request
  getRandomMovie = async () => {
  
    // if moviesLeft is false - make current page the /problempage - props.history.push adds a new page to the end of page history (making it the current)
    if (!this.state.moviesLeft) {
      this.props.history.push('/problempage') 
      return 
    }

    // make variable that holds a random number to append to the api request as the imdb ID number
    const randomIndex = Math.floor(Math.random() * 9000000)

    //first clear the current state 
    //get request from function in api.js
    this.setState( { movie: null } )
    try {
      console.log('tt' + randomIndex)     
      const res = await getMovie('tt' + randomIndex)


      //conditionals that check the resposnse meets our conditons - if met, set state from the result.
      if (res.data.Response === 'True' && res.data.Type === 'movie' && res.data.Poster !== 'N/A') {
        // moviesLeft is reduced by 1 each time
        const moviesLeft = this.state.moviesLeft - 1
        return this.setState( { movie: res.data, moviesLeft } )
      } 
      // if any conditions return false, the function calls itself again - RECURSION - func will call itself infinitely till it is true
      return this.getRandomMovie()
    } catch (error) {
      console.log('something went wrong', error)
    }
  }


  // on mount, runs getRandomMovie function with the api request etc

  componentDidMount() {
    this.getRandomMovie()
  }




  render() {

    //return statement starts with conditional for if there is a state set - run that, if not, clear it and only show the   
    //spinner section (at bottom) - so when function runs the first line sets state to null and spinner shows till state i set

    return (
      <>

        
        {this.state.movie ? 

          <section className="hero is-fullheight UI">
            <div className="hero-body">
              <div className="columns">
                <div className="column">
                  <button onClick={this.getRandomMovie} className="next-movie button is-danger">LOOKS CRAP</button>
                </div>      
                <div className="column">
                  <div className="card-container">              
                    <div className="card is-flex">
                      <div className="movie-title heading">
                        <h1>{this.state.movie.Title}</h1>
                      </div>
                      <div className="card-image">
                        <figure className="">
                          <a href={`https://www.imdb.com/title/${this.state.movie.imdbID}`}><img src={this.state.movie.Poster} alt="movie-poster"></img></a>
                        </figure>
                        <div className="card-text heading">
                          <p>Year:{this.state.movie.Year}</p>
                          <p>Genre: {this.state.movie.Genre}</p>
                          <p>IMDB rating: {this.state.movie.imdbRating}</p>
                        </div>
                      </div>
                      <div className="selection-buttons"> 
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <Link to="/congrats">
                    <button className="picked-movie button is-success">THAT WILL DO </button>
                  </Link>
                </div>
              </div>
              <div className="counter">
                <h1><span>{this.state.moviesLeft}</span> OPTIONS REMAINING</h1>
              </div>
            </div>
          </section>

          :
          <section className="hero is-fullheight UI">
            <div className="hero-body">
              <div className="container">
                <div className="card-container is-flex">
                  <div className="spinnerCard">
                    <div className="spinner-img"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>         
        }
      </>            
    )
  }
}

export default UI
