import { TOGGLE_SIDEBAR, SEARCH, INVALID_SEARCH } from './actionTypes';

import RESTApi from '../api/RestAPI';

export const toggleSidebar = () => {
    return {
        type: TOGGLE_SIDEBAR
    };
};
// export const getCitiesByChar = location => (dispatch, getState) => {
export const searchAction = ({ searchInput }) => (dispatch) => {
    //Action to fetch location autocomplete data
    const params = {
        key: searchInput
    };

    RESTApi.GET(
        'search',
        params,
        (data) => {
            if (data) dispatch(saveSearchResult(data));
        },
        (error) => {
            dispatch(errorFetchingSearch(error));
        }
    );
};

export const saveSearchResult = (data) => {
    console.log(data);
    return {
        type: SEARCH,
        payload: data
    };
};

export const errorFetchingSearch = (error) => {
    console.log('error');
    console.log(error.response);
    return {
        type: INVALID_SEARCH,
        payload: error.response.data
    };
};