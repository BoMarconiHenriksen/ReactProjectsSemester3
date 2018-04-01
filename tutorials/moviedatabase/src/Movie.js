import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
    // We are using static because they are not changing
    // Object of the diffrent types of props that are going to make an appearence inside of the component.
    // Advantage is that nothing unexpected is being used or coming into the component
    static propTypes = {
      // movie: PropTypes.object //If you pass something in thats not an object it will complain.

      /* If you want to validate whats inside the object use shape.
       Allows us to pass in another object where we can define the props that actually is coming in.
       Use .isRequired if you have something that always need to be there. */
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

export default Movie;
