import { TOGGLE_SIDEBAR } from './actionTypes';

import RESTApi from '../api/RestAPI';

export const toggleSidebar = () => {
    return {
        type: TOGGLE_SIDEBAR
    };
};
