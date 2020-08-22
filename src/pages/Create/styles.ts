import { StyleSheet } from 'react-native';

import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: commonStyles.metrics.statusBarHeight,
    padding: 20,
    alignItems: 'center',
  },
  backArrow: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  questionContainer: {
    flex: 1,
    width: 250,
    justifyContent: 'flex-end',
  },
  questionText: {
    width: '100%',
    fontSize: 36,
    fontFamily: commonStyles.fontFamily.primary.regular,
    textAlign: 'center',
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
    width: '100%',
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
  },
  mainAditionalContainer: {
    flex: 1,
    marginTop: 16,
  },
  footerAditional: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: commonStyles.colors.primary,
    marginRight: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 14,
  },
  finishButton: {
    width: commonStyles.metrics.screenWidth - 40 - 50 - 14,
  },
});

export default styles;
