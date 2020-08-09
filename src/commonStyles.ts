import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const styles = {
  fontFamily: {
    primary: {
      light: 'Quicksand_300Light',
      regular: 'Quicksand_400Regular',
      medium: 'Quicksand_500Medium',
    },
    secondary: {
      medium: 'Dosis_500Medium',
      bold: 'Dosis_700Bold',
    },
  },
  colors: {
    primary: '#99D19C',
    black: '#07070A',
    gray: '#CDD3CE',
  },
  metrics: {
    statusBarHeight: Constants.statusBarHeight,
    screenWidth: Dimensions.get('window').width,
  },
};

export default styles;
