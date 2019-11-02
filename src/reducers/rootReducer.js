import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import toggleReducer from "./toggleReducer";

const rootReducer = combineReducers({
  movieReducer,
  toggleReducer
});

export default rootReducer;
