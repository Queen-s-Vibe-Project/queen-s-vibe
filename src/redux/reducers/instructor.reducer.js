const instructorReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INSTRUCTORS':
            return action.payload;
        default:
            return state;
    }
}

export default instructorReducer;