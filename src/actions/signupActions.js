// actions/signupActions.js

// Action Types
export const SET_SIGNUP_DATA = 'SET_SIGNUP_DATA';
export const REMOVE_SIGNUP_DATA = 'REMOVE_SIGNUP_DATA';

// Action Creators
export const setSignupData = (data) => {
  const { email, contactNo } = data; // Extract only the email and contactNo
  console.log("data:", { email, contactNo }); // Optionally log the data for debugging

  return {
    type: SET_SIGNUP_DATA,
    payload: { email, contactNo } // Only include email and contactNo
  };
};

export const removeSignupData = () => {
  return {
    type: REMOVE_SIGNUP_DATA
  };
};
