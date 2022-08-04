import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* fetchUpcomingClasses(){
  try {
    const res = yield axios.get('/api/user/upcomingClass')
    yield put({ type: 'SET_UPCOMING_CLASSES', payload: res.data})
  } catch (error) {
    console.error(`Error in fetchUpcomingClasses: ${error}`);
  }
}

function* deleteGymGoerClass(action) {
  console.log(action.payload);
  try {
    yield axios.delete('/api/user/upcomingClass/'+ action.payload)
    yield put({
            type:'FETCH_UPCOMING_CLASSES'
        })
  } catch (error) {
    console.error(`Error deleteGymGoerClass: ${error}`);
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('FETCH_UPCOMING_CLASSES', fetchUpcomingClasses);
  yield takeLatest("DELETE_GYM-GOER_CLASS", deleteGymGoerClass)
}

export default userSaga;
