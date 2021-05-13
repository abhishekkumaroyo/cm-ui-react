import { INVALID_PROPERTY_SEARCH, SAVE_PROPERTY_SEARCH, START_FETCHING_PROPERTY_DATA } from '../actions/actionTypes';

const initialState = {
    searchFetching: false,
    property: null, // property related info like name, images etc
    searchError: false,
    searchErrorMessage: null,
    mapping: null // mapping realted info (both hotel and room mapping)
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SAVE_PROPERTY_SEARCH:
            return {
                ...state,
                property: action.payload.data.OHM,
                mapping: action.payload.data.hotelData,
                searchError: false,
                searchFetching: false
            };
        case INVALID_PROPERTY_SEARCH:
            return {
                ...state,
                searchError: true,
                property: null,
                searchErrorMessage: action.payload,
                searchFetching: false
            };
        case START_FETCHING_PROPERTY_DATA:
            return {
                ...state,
                searchFetching: true
            };
        default:
            console.log('default');
            return state;
    }
}
