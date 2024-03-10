import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  textInput: {
    height: 50,
    width: Dimensions.get('window').width - 50,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'black',
  },
});
export default styles;
