/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import Routes from './src/Navigation/Routes';
import {NavigationContainer} from '@react-navigation/native';

const style = (isDarkMode: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      flex: 1,
    },
  });

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const styles = style(isDarkMode);
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
export default App;
