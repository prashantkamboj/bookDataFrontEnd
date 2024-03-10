import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getNumber, setUserPref} from '../Utils/LocalStorageConstants';
import styles from '../Screens/ScreenHome/styleScrHome';
import {BookType} from '../Screens/ScreenHome/redux/sliceHome';
import {heartIcon} from '../assets/imageData';

function ComponentBookData({data}: {data: BookType}) {
  const [lastPress, setLastPress] = useState(0);
  const handleDoubleClick = () => {
    const currentTime = new Date().getTime();
    const delta = currentTime - lastPress;

    if (delta < 300) {
      setUserPref(data.title, data.id);
    }
    setLastPress(currentTime);
  };
  return (
    <View style={styles.componentContainer}>
      <TouchableOpacity onPress={handleDoubleClick} activeOpacity={100}>
        <ImageBackground
          source={{uri: data.cover_image}}
          style={{height: 200, width: 200}}
        />
        {Boolean(getNumber(data.title)) && (
          <View style={styles.iconContainer}>
            <Image source={heartIcon} height={20} width={20} />
          </View>
        )}
      </TouchableOpacity>
      <Text style={styles.textStyle}>{`${data.title}`}</Text>
      <Text style={styles.textStyle}>{`Author:  ${data.author}`}</Text>
      <Text style={styles.textStyle}>{data.description}</Text>
      <Text style={styles.textStyle}>{`Year: ${data.publication_year}`}</Text>
      <View style={styles.genreStyle}>
        {data.genre?.map(item => (
          <Text style={styles.textStyle}>{item}</Text>
        ))}
      </View>
    </View>
  );
}

export default ComponentBookData;
