import {Epic, combineEpics} from 'redux-observable';
import {epicHome} from '../Screens/ScreenHome/redux/epicHome';
import {epicSearch} from '../Screens/ScreenSearch/redux/epicSearch';

const epics: Epic[] = [epicHome, epicSearch] as Epic[];

export const rootEpic = combineEpics(...(epics as Epic[]));
