import { combineReducers } from 'redux';
import authReducer from './authReducer';
import signupReducer from './signupReducer';
    
const rootReducer = combineReducers({
    auth: authReducer,
    signup: signupReducer, 
});

export default rootReducer;
