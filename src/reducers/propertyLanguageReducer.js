import { PROPERTY_DETAILS_LANGUAGE } from '../actions/actionTypes';

const initialState = {
    language: 'en'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PROPERTY_DETAILS_LANGUAGE:
            return {
                ...state,
                language: action.payload
            };
        default:
            return state;
    }
}
