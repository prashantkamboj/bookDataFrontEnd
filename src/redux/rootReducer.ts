import {reducerSearch} from './../Screens/ScreenSearch/redux/sliceSearch';
import {reducerHome} from './../Screens/ScreenHome/redux/sliceHome';
import {combineReducers} from '@reduxjs/toolkit';

export const rootReducer = combineReducers({reducerHome, reducerSearch});
