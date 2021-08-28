import {StyleSheet} from 'react-native';
import Styles from '../../assets/styles';

const styles = StyleSheet.create({
  btnComon: {
    backgroundColor: Styles.Colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: Styles.Size.rW300,
    height: Styles.Size.rH50,
  },
  txtComon: {
    fontSize: Styles.FontSize.fS30,
    fontWeight: Styles.FontSize.FW_BOLD,
  },
  btnLarge: {},
  btnTxtLarge: {},
  btnMedium: {},
  btnTxtMedium: {},
  btnSmall: {},
  btnTxtSmall: {},
});

export default styles;
