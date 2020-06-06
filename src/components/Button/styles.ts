import { StyleSheet } from 'react-native';
import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: commonStyles.colors.primary,
    padding: 15,
    width: '100%',
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
  },
  buttonText: {
    fontSize: 22,
    fontFamily: commonStyles.fontFamily.primary.regular,
    color: "#fff",
    lineHeight: 22
  },
  buttonArrow: {

  }
});

export default styles;