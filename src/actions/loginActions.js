export const SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
export const REMOVE_AUTH_TOKEN = 'REMOVE_AUTH_TOKEN';

export const setAuthToken = ({ token, id, email, name }) => ({
  type: "SET_AUTH_TOKEN",
  payload: { token, id, email, name },
});


export const removeAuthToken = () => {
    return {
        type: REMOVE_AUTH_TOKEN
    };
};
