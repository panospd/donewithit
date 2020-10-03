import colors from "./colors"

const { Platform } = require("react-native")

export default {
  colors,
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.dark
  }
}
