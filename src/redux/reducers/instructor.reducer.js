const instructorReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_INSTRUCTORS':
            return action.payload;
        default:
            return state;
    }
}

export const recommendInstructor = (state = [], action) =>{
    switch (action.type) {
        case 'SET_RECOMMEND_INSTRUCTOR':
            return action.payload;
        default:
            return state;
    }
}

export const favoriteInstructor = (state =[], action) =>{
    switch (action.type) {
        case 'SET_FAVORITE_INSTRUCTOR':
            
            return action.payload;
    
        default:
            return state;
    }
}
export default instructorReducer;