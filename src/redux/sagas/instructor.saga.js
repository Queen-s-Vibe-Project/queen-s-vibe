import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchAllInstructors() {
    // Get all instructors
    console.log('In fetchAllInstructors saga');
    try {
        const res = yield axios.get('/instructor')
        console.log('Get all instructors:', res.data);
        yield put({
            type: 'SET_INSTRUCTORS',
            payload: res.data
        })
    }
    catch (error) {
        console.log('GET instructors request failed', error);
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
    console.log('id', action.payload);
    try {
        const res = yield axios.get('/instructor/profile/' + action.payload)
        //console.log(res.data);
        yield put({ type: "SET_INSTRUCTOR_PROFILE", payload: res.data })
    } catch (error) {
        console.error(`${error}`);
    }
}

function* fetchInstructorClasses(action) {
    try {
        const res = yield axios.get('/instructor/class/' + action.payload)
        //console.log(res.data);
        yield put({ type: "SET_INSTRUCTOR_CLASSES", payload: res.data })
    } catch (error) {
        console.error(`${error}`);
    }
}

function* fetchInstructorTags(action) {
    try {
        const res = yield axios.get('/instructor/tags/' + action.payload)
        yield put({ type: 'SET_INSTRUCTOR_TAGS', payload: res.data })
    } catch (error) {
        console.error(`${error}`);
    }
}

function* fetchRecommendInstructor() {
    console.log('in recommend');
    try {
        console.log('in try');
        const res = yield axios.get('/instructor/recommend')
        console.log(res.data);

        yield put({ type: 'SET_RECOMMEND_INSTRUCTOR', payload: res.data })

    } catch (error) {
        console.error(`${error}`);
    }
}

function* fetchFavoriteInstructor() {
    try {

        const res = yield axios.get('/instructor/favorite')
        console.log(res.data);

        yield put({ type: 'SET_FAVORITE_INSTRUCTOR', payload: res.data })

    } catch (error) {
        console.error(error);
    }
}

function* fetchActivities() {
    try {
        const res = yield axios.get('/instructor/activities')
        console.log(res.data)
        yield put({ type: 'SET_ACTIVITIES', payload: res.data })
    } catch (error) {
        console.log('Error in fetchActivities', error)
    }
}

function* addInstructorToFavorite(action) {
    console.log(action.payload);
    try {
        yield axios.post(`/instructor/favorite/${action.payload}`)
    } catch (error) {

    }
}

// Delete favorite instructor on user view page
// Saga will listen for "DELETE_FAVORITE_INSTRUCTOR" action from user page view
function* deleteFavoriteInstructor(action) {
    console.log('In deleteFavoriteInstructor saga', action);
    try {
        // action.payload should be id
        // add id after action.payload or else it will return gym goer id
        // instead of favorite instructor id
        yield axios.delete(`/instructor/favorite/${action.payload.id}`)

        // axios.get to fetch favorite instructor after deleting favorite instructor
        const res = yield axios.get(`/instructor/favorite`)
        // refresh page after deletion
        yield put({
            type: 'SET_FAVORITE_INSTRUCTOR',
            payload: res.data
        })
    }
    catch (error) {
        console.log('Delete favorite instructor failed', error);
    }
}
// Watcher saga
function* instructorSaga() {
    yield takeEvery('FETCH_INSTRUCTORS', fetchAllInstructors);
    //yield takeEvery('FETCH_ACTIVE_INSTRUCTOR', fetchActiveInstructor);
    yield takeEvery("FETCH_INSTRUCTOR_PROFILE", fetchInstructorProfile);
    yield takeEvery('FETCH_RECOMMEND_INSTRUCTOR', fetchRecommendInstructor);
    yield takeEvery('FETCH_ACTIVITIES', fetchActivities);
    yield takeEvery('FETCH_FAVORITE_INSTRUCTOR', fetchFavoriteInstructor);
    yield takeEvery("FETCH_INSTRUCTOR_CLASSES", fetchInstructorClasses);
    yield takeEvery('FETCH_INSTRUCTOR_TAGS', fetchInstructorTags);
    yield takeEvery('ADD_INSTRUCTOR_TO_FAVORITES', addInstructorToFavorite);
    yield takeEvery('DELETE_FAVORITE_INSTRUCTOR', deleteFavoriteInstructor)
}

export default instructorSaga;