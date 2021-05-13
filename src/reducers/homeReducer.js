import { TOGGLE_SIDEBAR } from '../actions/actionTypes';

const initialState = {
    sidebar: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {
                ...state,
                sidebar: !state.sidebar
            };
        default:
            console.log('default');
            return state;
    }
}
