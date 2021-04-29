import { INVALID_SEARCH, SEARCH, TOGGLE_SIDEBAR } from '../actions/actionTypes';

const initialState = {
    sidebar: false,
    check: 'check',
    property: null, // property related info like name, images etc
    searchError: false,
    searchErrorMessage: null,
    mapping: null // mapping realted info (both hotel and room mapping)
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebar: !state.sidebar
            };
        case SEARCH:
            return {
                ...state,
                property: action.payload.data.OHM,
                mapping: action.payload.data.hotelData,
                searchError: false
            };
        case INVALID_SEARCH:
            return {
                ...state,
                searchError: true,
                property: null,
                searchErrorMessage: action.payload
            };
        default:
            console.log('default');
            return state;
    }
}
