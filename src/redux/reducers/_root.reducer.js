import { combineReducers } from "redux";
import { recommendInstructor } from "./instructor.reducer.js";
import errors from "./errors.reducer";
import search from "./search.reducer";
import user from "./user.reducer";
import instructor from "./instructor.reducer.js"

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  search, // contains tags and results
  instructor, // contains all user info
  recommendInstructor // list of recommend instructor base on gym goer's tag
});

export default rootReducer;
