const instructorDetailReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ACTIVE_INSTRUCTOR':
            return action.payload;
        default:
            return state;
    }
}

export default instructorDetailReducer;