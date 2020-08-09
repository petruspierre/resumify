import { StyleSheet } from 'react-native';

import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: commonStyles.metrics.statusBarHeight,
    alignItems: 'center',
  },
  backArrow: {
    position: 'absolute',
    top: 8,
    left: 20,
    paddingRight: 5,
    paddingBottom: 5,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginTop: 16,
    elevation: 4,
    justifyContent: 'center',
  },
  type: {
    color: commonStyles.colors.gray,
    fontSize: 18,
    fontFamily: commonStyles.fontFamily.primary.regular,
  },
  title: {
    color: commonStyles.colors.black,
    fontSize: 18,
    fontFamily: commonStyles.fontFamily.primary.medium,
  },
  content: {
    color: commonStyles.colors.black,
    fontSize: 16,
    fontFamily: commonStyles.fontFamily.primary.regular,
  },
});

export default styles;
