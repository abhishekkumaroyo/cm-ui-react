import axios from 'axios';
import * as apiConstants from '../constants/apiConstants';
const baseURL = apiConstants.API_HOST + '/';
// import { store } from '../store';

const GET = (url, params, successCB, errorCb, headers) => {
    // let state = store.getState();
    let config = {
        headers: {
            //Can add mandatory headers here
            ...headers
        }
    };

    if (params) config.params = params;
    console.log(baseURL + url);
    console.log(config);
    axios
        .get(baseURL + url, config)
        .then((response) => {
            console.log(response);
            console.log('succcess sub');
            if (successCB) successCB(response.data);
        })
        .catch((error) => {
            //Can log error on GA here
            // console.log(error.response);
            if (errorCb) {
                // console.log('error cb');
                //Check error object format here
                errorCb(error);
            }
        });
};

const POST = (url, params, data, successCB, errorCb, headers) => {
    // let state = store.getState();
    let config = {
        headers: {
            ...headers
        }
    };

    if (params) config.params = params;

    console.log(baseURL + url);
    console.log(config);
    console.log(data);

    axios
        .post(baseURL + url, data, config)
        .then((response) => {
            console.log(response);
            if (successCB) successCB(response.data);
        })
        .catch((error) => {
            console.log(error.response);
            if (errorCb) {
                //Check error object format here
                errorCb(error);
            }
        });
};

export default {
    GET,
    POST
};
