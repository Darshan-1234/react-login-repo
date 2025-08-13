import { SET_AUTH_TOKEN, REMOVE_AUTH_TOKEN } from '../actions/loginActions';

const initialState = {
  authToken: null,
  userId: null,
  userEmail: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_TOKEN:
      return {
        ...state,
        authToken: action.payload.token, 
        userId: action.payload.id,       
        userEmail: action.payload.email,
      };
    case REMOVE_AUTH_TOKEN:
      return {
        ...state,
        authToken: null, 
        userId: null,    
        userEmail: null,  
      };
    default:
      return state;
  }
};

export default authReducer;
