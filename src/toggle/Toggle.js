import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import toggleMessage from "../actions/toggleMessage";
import { getMovies } from "../actions/getMovies";

const Toggle = props => (
  <div>
    <button onClick={props.toggleMessage}>Toggle</button>
    <button onClick={props.getMovies}>Load Movies</button>
    {props.messageVisibility && "I'm toggled!"}
  </div>
);

const mapStateToProps = state => {
  return {
    messageVisibility: state.toggleReducer.messageVisibility
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMessage, getMovies }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
