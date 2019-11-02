import React, { PureComponent } from "react";
import styled from "styled-components";
import Movie from "./Movie";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getMovies } from "../actions/getMovies";

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;

class MoviesList extends PureComponent {
  
  componentDidMount() {
    !this.props.moviesLoaded && this.props.getMovies();
  }

  render() {
    return this.props.moviesLoaded ? (
      <MovieGrid>
        {this.props.movies.map(movie => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    ) : (<h2>Loading...</h2>)
  }
}

const mapStateToProps = state => ({
  movies: state.movieReducer.movies,
  moviesLoaded: state.movieReducer.moviesLoaded
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMovies }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList);
