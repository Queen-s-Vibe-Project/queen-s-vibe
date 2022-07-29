import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* fetchAllInstructors() {
  // Get all instructors
  console.log("In fetchAllInstructors saga");
  try {
    const res = yield axios.get("/instructor");
    console.log("Get all instructors:", res.data);
    yield put({
      type: "SET_INSTRUCTORS",
      payload: res.data,
    });
  } catch (error) {
    console.log("GET instructors request failed", error);
  }
}

function* fetchActiveInstructor(action) {
  try {
    const res = yield axios.get(`/instructor/${action.payload}`);
    console.log("Instructor Detail is", res.data);
    yield put({
      type: "SET_ACTIVE_INSTRUCTOR",
      payload: res.data,
    });
  } catch (error) {
    console.error("Get instructor detail failed", error);
  }
}

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
    //console.log(res.data);
    yield put({ type: "FETCH_INSTRUCTOR_CLASSES", payload: res.data });
  } catch (error) {
    console.error(`${error}`);
  }
}

function* fetchRecommendInstructor() {
  console.log("in recommend");
  try {
    console.log("in try");
    const res = yield axios.get("/instructor/recommend");
    console.log(res.data);

    yield put({ type: "SET_RECOMMEND_INSTRUCTOR", payload: res.data });
  } catch (error) {
    console.error(`${error}`);
  }
}

function* fetchFavoriteInstructor() {
  try {
    const res = yield axios.get("/instructor/favorite");
    console.log(res.data);

    yield put({ type: "SET_FAVORITE_INSTRUCTOR", payload: res.data });
  } catch (error) {
    console.error(error);
  }
}

function* fetchActivities() {
  try {
    const res = yield axios.get("/instructor/activities");
    console.log("activities for addClass", res.data);
    yield put({ type: "SET_ACTIVITIES", payload: res.data });
  } catch (error) {
    console.log("Error in fetchActivities", error);
  }
}

// Watcher saga
function* instructorSaga() {
  yield takeEvery("FETCH_INSTRUCTORS", fetchAllInstructors);
  //yield takeEvery('FETCH_ACTIVE_INSTRUCTOR', fetchActiveInstructor);
  yield takeEvery("FETCH_INSTRUCTOR_PROFILE", fetchInstructorProfile);
  yield takeEvery("FETCH_RECOMMEND_INSTRUCTOR", fetchRecommendInstructor);
  yield takeEvery("FETCH_ACTIVITIES", fetchActivities);
  yield takeEvery("FETCH_FAVORITE_INSTRUCTOR", fetchFavoriteInstructor);
  yield takeEvery("FETCH_INSTRUCTOR_CLASSES", fetchInstructorClasses);
}

export default instructorSaga;
