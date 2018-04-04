/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      // go out get the data but wait until its comming back.
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=30652b240ec3520044ae653e684ead1c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      // Make sure all the data is here
      const movies = await res.json();

      // Get the movies of the the metod by setting it to state.
      // setSate is a method that accepts a function.

      this.setState({
        movies: movies.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
