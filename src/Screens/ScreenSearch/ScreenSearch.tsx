/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {FlatList, Text, TextInput, View} from 'react-native';
import styles from './styleSearch';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxHooks';
import ComponentBookData from '../../CommonComponents/ComponentBookData';
import {Subject, debounceTime, map} from 'rxjs';
import {searchData} from './redux/sliceSearch';

function ScreenSearch() {
  const [onChange$] = useState(() => new Subject());
  const dispatch = useDispatch();
  const {isLoading, books} = useSelector(
    (state: RootState) => state.reducerSearch,
  );
  const onChangeText = (text: string) => {
    dispatch(searchData(text));
  };
  useEffect(() => {
    const subscriptions = onChange$
      .pipe(
        map(text => text),
        debounceTime(300),
      )
      .subscribe(text => onChangeText(text as string));
    return () => subscriptions.unsubscribe();
  }, [onChange$]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={text => onChange$.next(text)}
      />
      <View>
        {isLoading ? (
          <Text>searching...</Text>
        ) : books.length > 0 ? (
          <FlatList
            data={books}
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => <ComponentBookData data={item} />}
          />
        ) : (
          <View>
            <Text>Try To Search Something</Text>
          </View>
        )}
      </View>
    </View>
  );
}
export default ScreenSearch;
