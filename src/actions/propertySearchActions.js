import { SAVE_PROPERTY_SEARCH, INVALID_PROPERTY_SEARCH, START_FETCHING_PROPERTY_DATA } from './actionTypes';

import RESTApi from '../api/RestAPI';

// export const getCitiesByChar = location => (dispatch, getState) => {
export const searchAction = ({ searchInput }) => (dispatch) => {
    //Action to fetch location autocomplete data
    const params = {
        hotelId: searchInput,
        clientId: 1
    };

    dispatch(startFetchingSearchData());

    RESTApi.GET(
        'search',
        params,
        (data) => {
            if (data) dispatch(saveSearchResult(data));
        },
        (error) => {
            console.log(error);
            dispatch(errorFetchingSearch(error));
        }
    );
};

export const startFetchingSearchData = () => {
    return {
        type: START_FETCHING_PROPERTY_DATA
    };
};

export const saveSearchResult = (data) => {
    console.log(data);
    return {
        type: SAVE_PROPERTY_SEARCH,
        payload: data
    };
};

export const errorFetchingSearch = (error) => {
    // console.log(error.response);
    if (error.response) {
        return {
            type: INVALID_PROPERTY_SEARCH,
            payload: error.response.data
        };
    } else {
        return {
            type: INVALID_PROPERTY_SEARCH,
            payload: 'server error'
        };
    }
};
