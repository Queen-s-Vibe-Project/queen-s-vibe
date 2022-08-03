import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* fetchAllInstructors() {
  // Get all instructors
  console.log("In fetchAllInstructors saga");
  try {
    const res = yield axios.get("/instructor");
    console.log("Get all instructors saga:", res.data);
    yield put({
      type: "SET_INSTRUCTORS",
      payload: res.data,
    });
  } catch (error) {
    console.log("GET instructors request failed", error);
  }
}

// function* fetchActiveInstructor(action) {

//     try {
//         const res = yield axios.get(`/instructor/${action.payload}`)
//         console.log('Instructor Detail is', res.data)
//         yield put({
//             type: 'SET_ACTIVE_INSTRUCTOR',
//             payload: res.data
//         })
//     }
//     catch (error) {
//         console.error('Get instructor detail failed', error)
//     }
// }

function* fetchInstructorProfile(action) {
  console.log("id", action.payload);
  try {
    const res = yield axios.get("/instructor/profile/" + action.payload);
    //console.log(res.data);
    yield put({ type: "SET_INSTRUCTOR_PROFILE", payload: res.data });
  } catch (error) {
    console.error(`${error}`);
  }
}

function* fetchInstructorClasses(action) {
  try {
    const res = yield axios.get("/instructor/class/" + action.payload);
    //console.log('fetchInstructorClasses saga', res.data);
    yield put({ type: "SET_INSTRUCTOR_CLASSES", payload: res.data });
  } catch (error) {
    console.error(`${error}`);
  }
}

function* fetchInstructorTags(action) {
  try {
    const res = yield axios.get("/instructor/tags/" + action.payload);
    yield put({ type: "SET_INSTRUCTOR_TAGS", payload: res.data });
  } catch (error) {
    console.error(`${error}`);
  }
}

function* fetchRecommendInstructor() {
  console.log("in recommend");
  try {
    console.log("in try");
    const res = yield axios.get("/instructor/recommend");
    console.log('in fetchRecommendInstructor saga', res.data);

    yield put({ type: "SET_RECOMMEND_INSTRUCTOR", payload: res.data });
  } catch (error) {
    console.error(`${error}`);
  }
}

function* fetchFavoriteInstructor() {
  try {
    const res = yield axios.get("/instructor/favorite");
    //console.log('fetchFavoriteInstuctor saga,' res.data);

    yield put({ type: "SET_FAVORITE_INSTRUCTOR", payload: res.data });
  } catch (error) {
    console.error(error);
  }
}

function* fetchActivities() {
  try {
    const res = yield axios.get("/instructor/activities");
    console.log(res.data);
    yield put({ type: "SET_ACTIVITIES", payload: res.data });
  } catch (error) {
    console.log("Error in fetchActivities saga", error);
  }
}

function* addInstructorToFavorite(action) {
  console.log('addInstructorToFavorite saga', action.payload);
  try {
    const res = yield axios.post("/instructor/favorite/" + action.payload);
  } catch (error) {}
}

function* addTag(action) {
  try {
    yield axios.post("/instructor/addTag/" + action.payload);
  } catch (error) {
    console.error(`addTag saga error: ${error}`);
  }
}

// Delete favorite instructor on user view page
// Saga will listen for "DELETE_FAVORITE_INSTRUCTOR" action from user page view
function* deleteFavoriteInstructor(action) {
  console.log("In deleteFavoriteInstructor saga", action);
  try {
    // action.payload should be id
    // add id after action.payload or else it will return gym goer id
    // instead of favorite instructor id
    yield axios.delete(`/instructor/favorite/${action.payload.id}`);

    // axios.get to fetch favorite instructor after deleting favorite instructor
    const res = yield axios.get(`/instructor/favorite`);
    // refresh page after deletion
    yield put({
      type: "SET_FAVORITE_INSTRUCTOR",
      payload: res.data,
    });
  } catch (error) {
    console.log("Delete favorite instructor failed", error);
  }
}

// Add classes on instructor detail page
// Saga will listen for "ADD_CLASS" action from instructor detail view
function* addClass(action) {
  console.log("In addClass saga action.payload is", action.payload);
  try {
    yield axios.post("/instructor/class/" + action.payload);
  } catch (error) {
    console.log("Error in addClass", error);
  }
}

function* deleteTag(action) {
  console.log("in deleteTag saga", action.payload);
  try {
    yield axios.delete("/instructor/tag/" + action.payload);
  } catch (error) {
    console.error(`${error}`);
  }
}

function* addNewClass(action) {
  try {
    yield axios.post("/instructor/newClass", action.payload);
  } catch (err) {
    console.log("Error in addNewClass", err);
  }
}
function* updateAbout(action){
    console.log('in updateAbout saga did it make it over?', action.payload)
    try{
        yield axios.put(`/instructor/update/${action.payload.id}`, action.payload)
        yield put({
            type: 'FETCH_USER'
        })
    } catch(error) {
        console.error(`Failed to update About in saga ${error}`)
    }
}
function* updateProfile(action){
console.log('In updateProfile saga did it make it over', action.payload);
try{
  yield axios.put(`/instructor/updateProfile/${action.payload.id}`, action.payload)
  yield put({
    type: 'FETCH_USER'
  })
} catch(error) {
  console.error(`Failed to update in UpdateProfile Saga ${error}`)
}

}

function* deleteAvailableClass(action) {
  try {

    yield axios.delete('/instructor/class/'+ action.payload)
    
  } catch (error) {
    console.error(`Error in deleteAvailableClass: ${error}`);
  }
}

function* updatePhoto(action) {
  try {
    yield axios.put("/instructor/photo/" + action.payload.id, action.payload);
  } catch (err) {
    console.error("Error in updatePhoto", err);
  }
}

// Watcher saga
function* instructorSaga() {
  yield takeEvery("ADD_INSTRUCTOR_TO_FAVORITES", addInstructorToFavorite);
  yield takeEvery("DELETE_FAVORITE_INSTRUCTOR", deleteFavoriteInstructor);
  yield takeEvery("ADD_CLASS", addClass);
  yield takeEvery("FETCH_INSTRUCTORS", fetchAllInstructors);
  //yield takeEvery('FETCH_ACTIVE_INSTRUCTOR', fetchActiveInstructor);
  yield takeEvery("FETCH_INSTRUCTOR_PROFILE", fetchInstructorProfile);
  yield takeEvery("FETCH_RECOMMEND_INSTRUCTOR", fetchRecommendInstructor);
  // yield takeEvery("FETCH_ACTIVITIES", fetchActivities);
  yield takeEvery("FETCH_FAVORITE_INSTRUCTOR", fetchFavoriteInstructor);
  yield takeEvery("FETCH_INSTRUCTOR_CLASSES", fetchInstructorClasses);
  yield takeEvery("FETCH_INSTRUCTOR_TAGS", fetchInstructorTags);
  yield takeEvery("ADD_TAG", addTag);
  yield takeEvery("DELETE_TAG", deleteTag);
  yield takeEvery("ADD_INSTRUCTOR_TO_FAVORITES", addInstructorToFavorite);
  yield takeEvery("ADD_NEW_CLASS", addNewClass);

  yield takeEvery("UPDATE_ABOUT", updateAbout);
  yield takeEvery("UPDATE_PROFILE", updateProfile);
  yield takeEvery("UPDATE_PHOTO", updatePhoto);
  yield takeEvery("DELETE_AVAILABLE_CLASS", deleteAvailableClass);
}

export default instructorSaga;
