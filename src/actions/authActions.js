import { START_VERIFICATION, SAVE_LOGIN_RESULT, LOGIN_ERROR } from './actionTypes';

import RESTApi from '../api/RestAPI';

export const loginAction = ({ clientId, username, password }) => (dispatch) => {
    //Action to fetch location autocomplete data
    const data = {
        clientId: clientId,
        username: username,
        password: password
    };

    dispatch(startVerification());

    RESTApi.POST(
        'user/login',
        null,
        data,
        (data) => {
            if (data) dispatch(saveLoginResult(data));
        },
        (error) => {
            dispatch(errorLogin(error));
        }
    );
};

export const startVerification = () => {
    return {
        type: START_VERIFICATION
    };
};

export const saveLoginResult = (data) => {
    return {
        type: SAVE_LOGIN_RESULT,
        payload: data
    };
};

export const errorLogin = (error) => {
    if (error.response) {
        return {
            type: LOGIN_ERROR,
            payload: error.response.data
        };
    } else {
        return {
            type: LOGIN_ERROR,
            payload: 'server error'
        };
    }
};
