import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchSearchResults(action) {
  console.log("fetchSearchResults", action.payload);
  const response = yield axios.post("/search", action.payload);
  const mapResponse = yield axios.post("/search/map", response.data);
  console.log(mapResponse);
  yield put({ type: "SET_SEARCH_RESULTS", payload: response.data });
}

function* fetchTags() {
  const response = yield axios.get("/search/tags");
  console.log("fetchTags response", response);
  yield put({ type: "SET_TAGS", payload: response.data });
}

function* search() {
  yield takeLatest("FETCH_TAGS", fetchTags);
  yield takeLatest("FETCH_SEARCH_RESULTS", fetchSearchResults);
}

export default search;
