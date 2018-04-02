import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <div>
    {/* Each link is linked to a diffrent unic id */}
    <Link to={`/${movie.id}`} >
      <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
    </Link>
  </div>
);

export default Movie;


Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

// Below is how it looked in the beginning.

/* class Movie extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }

  render() {
    return (
      <div>
          <h3>{this.props.movie.title}</h3>

        </div>
      );
    }
  }
export default Movie; */

