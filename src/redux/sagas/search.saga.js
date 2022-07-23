import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

function* fetchSearchResults(action) {
  const response = yield axios.get("/search", action.payload);
  yield put({ type: "SET_SEARCH_RESULTS", payload: response.data });
}

function* fetchTags() {
  const response = yield axios.get("/search/tags");
  yield put({ type: "SET_TAGS", payload: response.data });
}

function* search() {
  yield takeLatest("FETCH_TAGS", fetchTags);
  yield takeLatest("FETCH_SEARCH_RESULTS", fetchSearchResults);
}

export default search;
