
const initialState = {
    signupData: null,
  };
  
  const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SIGNUP_DATA':
        return {
          signupData: action.payload, 
        };
      case 'REMOVE_SIGNUP_DATA':
        return {
          ...state,
          signupData: null, 
        };
      default:
        return state;
    }
  };
  
  export default signupReducer;
  