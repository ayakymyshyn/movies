import { TOGGLE_MESSAGE } from "../actions/toggleMessage";

const initialState = {
  messageVisibility: false
};

const toggleReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case TOGGLE_MESSAGE:
      return {
        ...state,
        messageVisibility: !state.messageVisibility
      };
    default:
      return state;
  }
};

export default toggleReducer;
