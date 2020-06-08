import { StyleSheet } from 'react-native';

import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    padding: 11,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: commonStyles.colors.gray,
    borderRadius: 8,
  },
  inputTitle: {
    fontSize: 18,
    fontFamily: commonStyles.fontFamily.primary.regular,
    color: commonStyles.colors.black,
    marginBottom: 8,
  },
  textArea: {
    flex: 1,
    width: '100%',
    padding: 11,
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: commonStyles.colors.gray,
    borderRadius: 8,
    textAlignVertical: 'top',
    justifyContent: "flex-start"
  },
});

export default styles;