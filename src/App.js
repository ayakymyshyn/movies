/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import logo from "./logo.svg";
import "./App.css";
import thunk from 'redux-thunk';

import MoviesList from "./movies/MoviesList";
import MovieDetail from "./movies/MovieDetail";
import Toggle from "./toggle/Toggle";

import rootReducer from "./reducers/rootReducer";

const middleware = [logger, thunk];

let store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <Toggle />
        </header>
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path="/:id" component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
