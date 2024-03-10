/* eslint-disable react-hooks/exhaustive-deps */
import React, {useLayoutEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import styles from './styleScrHome';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from './redux/sliceHome';
import {RootState} from '../../redux/reduxHooks';
import ComponentBookData from '../../CommonComponents/ComponentBookData';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamList, routeNames} from '../../Navigation/types';

function ScreenHome({navigation}: NativeStackScreenProps<StackParamList>) {
  const dispatch = useDispatch();
  const {isLoading, books} = useSelector(
    (state: RootState) => state.reducerHome,
  );
  useLayoutEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(routeNames.screenSearch)}>
        <Text style={styles.searchText}>Click Here For Search Books</Text>
      </TouchableOpacity>
      {isLoading ? (
        <Text style={styles.textStyle}>loading...</Text>
      ) : (
        <FlatList
          data={books}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <ComponentBookData data={item} />}
        />
      )}
    </View>
  );
}
export default ScreenHome;
