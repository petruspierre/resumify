import { StyleSheet } from 'react-native';

import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center"
  },
  backArrow: {
    position: "absolute",
    top: 8,
    left: 8,
  },
  questionContainer: {
    flex: 1,
    width: 250,
    justifyContent: 'flex-end'
  },
  questionText: {
    width: '100%',
    fontSize: 36,
    fontFamily: commonStyles.fontFamily.primary.regular,
    textAlign: "center"
  },
  nextContainer: {
    flex: 1.5,
    justifyContent: 'center',
    width: 250,
  },
  pickerContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: commonStyles.colors.gray,
    borderRadius: 8,
    paddingLeft: 8,
  },
  picker: {
    color: commonStyles.colors.primary,
    fontFamily: commonStyles.fontFamily.primary.regular,
  },
  pickerText: {
    color: commonStyles.colors.primary,
    fontFamily: commonStyles.fontFamily.primary.regular,
  }
});

export default styles;