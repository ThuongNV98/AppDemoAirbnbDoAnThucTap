import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  name: {
    fontWeight: 'bold',
  },
  age: {
    color: '#8d8d8d',
  },
  containerButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    marginHorizontal: 20,
    fontSize: 18,
  },
  textBtn: {
    fontSize: 20,
    color: '#474747',
  },
  btnSearch: {
    marginBottom: 20,
    backgroundColor: '#657657',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  txtSearch: {
    fontSize: 10,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
