const instructorDetailReducer = (state = [], action) => {
    switch(action.type){
        case'SET_INSTRUCTOR_DETAIL':
            return action.payload;
        default:
            return state;
    }
}

export default instructorDetailReducer;