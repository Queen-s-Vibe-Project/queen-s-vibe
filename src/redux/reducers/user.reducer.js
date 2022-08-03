const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'UNSET_USER':
      return {};
    default:
      return state;
  }
};

export const userClass = (state = [], action )=>{
  switch (action.type) {
    case 'SET_UPCOMING_CLASSES':
      
      return action.payload;
  
    default:
      return state;
  }
}

// user will be on the redux state at:
// state.user
export default userReducer;
