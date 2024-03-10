import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
  textStyle: {
    color: 'black',
    fontSize: 12,
  },
  componentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  genreStyle: {
    flexDirection: 'row',
    gap: 5,
  },
  iconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  searchText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'blue',
  },
});
export default styles;
