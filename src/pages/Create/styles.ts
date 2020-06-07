import { StyleSheet } from 'react-native';

import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: commonStyles.metrics.statusBarHeight,
    padding: 20,
    alignItems: "center"
  },
  backArrow: {
    position: "absolute",
    top: 8,
    left: 16,
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
  input: {
    width: '100%',
    padding: 11,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: commonStyles.colors.gray,
    borderRadius: 8,
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
  },

  scrollContainer: {
    flex: 1,
    width: '100%'
  },
  headerAditional: {
    width: '100%',
    marginTop: 32,
  },
  headerAditionalText: {
    fontSize: 24,
    fontFamily: commonStyles.fontFamily.primary.regular,
    color: commonStyles.colors.black,
    marginBottom: 14,
  }
});

export default styles;