import { PROPERTY_DETAILS_LANGUAGE } from './actionTypes';

export const changeLanguage = (lang) => {
    return {
        type: PROPERTY_DETAILS_LANGUAGE,
        payload: lang
    };
};
