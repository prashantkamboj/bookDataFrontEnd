import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StackParamList, routeNames} from './types';
import ScreenHome from '../Screens/ScreenHome/ScreenHome';
import ScreenSearch from '../Screens/ScreenSearch/ScreenSearch';
import SnacksScreen from '../Screens/ScreenSanck/ScreenSnack';

const Navigation = createNativeStackNavigator<StackParamList>();

function Routes() {
  return (
    <Navigation.Navigator
      initialRouteName={routeNames.screenSnacks}
      screenOptions={{headerShown: false}}>
      <Navigation.Screen name={routeNames.screenHome} component={ScreenHome} />
      <Navigation.Screen
        name={routeNames.screenSearch}
        component={ScreenSearch}
      />
      <Navigation.Screen
        name={routeNames.screenSnacks}
        component={SnacksScreen}
      />
    </Navigation.Navigator>
  );
}
export default Routes;
