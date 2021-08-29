import {StyleSheet, Dimensions} from 'react-native';
import Styles from '../../assets/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    width: '100%',
    height: Styles.Size.rH500,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  textWellCome: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
  },
  btnHome: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  searchBtn: {
    backgroundColor: Styles.Colors.WHITE,
    width: Dimensions.get('screen').width - 20,
    height: Styles.Size.rH40,
    borderRadius: 16,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 100,
    zIndex: 100,
  },
  searchTextBtn: {},
});

export default styles;
