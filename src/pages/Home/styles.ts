import { StyleSheet } from 'react-native';
import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    paddingVertical: 60,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  slogan: {
    fontSize: 18,
    fontFamily: commonStyles.fontFamily.primary.regular,
    color: commonStyles.colors.black,
    width: 250,
    textAlign: 'center',
  },
  buttons: {
    width: 250,
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
