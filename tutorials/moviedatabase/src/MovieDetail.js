/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1288';

class MovieDetail extends Component {
  state = {
    movie: [],
  }

  async componentDidMount() {
    try {
      // go out get the data but wait until its comming back.
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=30652b240ec3520044ae653e684ead1c&language=en-US`);
      // Make sure all the data is here
      const movie = await res.json();

      // Get the movies of the the metod by setting it to state.
      // setSate is a method that accepts a function.

      this.setState({
        movie: movie.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        <h1>{movie.title}</h1>
        <h3>{movie.release_data}</h3>
        <p>{this.state.movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;
