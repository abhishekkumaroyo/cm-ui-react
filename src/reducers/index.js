import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import propertySearchReducer from './propertySearchReducer';

export default combineReducers({ home: homeReducer, propertySearch: propertySearchReducer });
