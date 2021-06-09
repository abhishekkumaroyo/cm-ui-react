import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import propertySearchReducer from './propertySearchReducer';
import propertyLanguageReducer from './propertyLanguageReducer';
import loginReducer from './authReducer';

export default combineReducers({
    home: homeReducer,
    propertySearch: propertySearchReducer,
    propertyLanguage: propertyLanguageReducer,
    login: loginReducer
});
