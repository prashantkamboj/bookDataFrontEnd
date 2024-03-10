import {ParamListBase} from '@react-navigation/native';

export interface StackParamList extends ParamListBase {
  screenHome: undefined;
  screenSearch: undefined;
}

export const routeNames = {
  screenHome: 'screenHome',
  screenSearch: 'screenSearch',
} as const;
