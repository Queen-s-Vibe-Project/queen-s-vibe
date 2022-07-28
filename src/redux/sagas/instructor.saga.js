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

function* fetchInstructorDetail(action){
    //Get InstructorDetail(name, classes, etc.)
    console.log('waht is action.payload', action.payload)
    try{
        const res = yield axios.get(`/instructor/${action.payload}`)
        console.log('Instructor Detail is', res.data)
        yield put({
            type:'SET_INSTRUCTOR_DETAIL',
            payload: res.data
        })
    }
    catch (error) {
        console.error('Get instructor detail failed', error)
    }
}

function* fetchRecommendInstructor(){
    try {
        const res = yield axios.get('/instructor/recommend')
        console.log(res.data);
        
        yield put({ type:'SET_RECOMMEND_INSTRUCTOR', payload: res.data})
        
    } catch (error) {
        console.error(`${error}`);
    }
}

function* fetchFavoriteInstructor(){
    try {

        const res = yield axios.get('/instructor/favorite')
        console.log(res.data);

        yield put({ type: 'SET_FAVORITE_INSTRUCTOR', payload: res.data})
        
    } catch (error) {
        console.error(error);
    }
}

// Watcher saga
function* instructorSaga() {
    yield takeEvery('FETCH_INSTRUCTORS', fetchAllInstructors);
    yield takeEvery('FETCH_INSTRUCTOR_DETAIL', fetchInstructorDetail);
    yield takeEvery('FETCH_RECOMMEND_INSTRUCTOR', fetchRecommendInstructor);
    yield takeEvery('FETCH_FAVORITE_INSTRUCTOR', fetchFavoriteInstructor)
}

export default instructorSaga;