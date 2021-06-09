import { START_VERIFICATION, SAVE_LOGIN_RESULT, LOGIN_ERROR } from '../actions/actionTypes';

const initialState = {
    verifying: false,
    loggedIn: false,
    loginError: false,
    loginErrorMessage: '',
    userData: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SAVE_LOGIN_RESULT:
            localStorage.setItem('token', action.payload.data.authToken);
            return {
                ...state,
                userData: action.payload.data,
                loggedIn: true,
                loginError: false,
                loginErrorMessage: '',
                verifying: false
            };
        case LOGIN_ERROR:
            return {
                ...state,
                loggedIn: false,
                userData: null,
                loginError: true,
                loginErrorMessage: action.payload,
                verifying: false
            };
        case START_VERIFICATION:
            return {
                ...state,
                verifying: true
            };
        default:
            return state;
    }
}
