import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchAllInstructors() {
    // Get all cakes
    console.log('In fetchAllInstructors saga');
    try {
        const res = yield axios.get('/instructor')
        console.log('Get all instructors:', res.data);
        yield put({
            type: 'SET_INSTRUCTOR',
            payload: res.data
        })
    }
    catch (error) {
        console.log('GET instructors request failed', error);
    }
}


// Watcher saga
function* instructorSaga() {
    yield takeEvery('FETCH_INSTRUCTORS', fetchAllInstructors);
}

export default instructorSaga;