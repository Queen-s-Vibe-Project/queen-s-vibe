import { combineReducers } from "redux";

const tags = (state = [], action) => {
  switch (action.type) {
    case "SET_TAGS":
      return action.payload;
    default:
      return state;
  }
};

const results = (state = [], action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULTS":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  tags,
  results,
});
