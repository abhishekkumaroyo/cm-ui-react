import { INVALID_SEARCH, SEARCH, TOGGLE_SIDEBAR } from '../actions/actionTypes';

const initialState = {
    sidebar: false,
    check: 'check',
    property: null,
    searchError: false,
    searchErrorMessage: null
};

export default function (state = initialState, action) {
    //console.log('here');
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebar: !state.sidebar
            };
        case SEARCH:
            return {
                ...state,
                property: action.payload,
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
