import merge from "lodash/merge";
import type { ThemeFunction } from "../ts/theme-type";

const buttonStyles: ThemeFunction<"button"> = (userTheme = {}) => merge({
  base: {
    borderStyle: "none",
    fontFamily: "inherit",
    fontSize: "16px",
    fontWeight: "500",
    transition: "background-color 200ms",
    display: "inline-flex",
    alignItems: "center"
  },
  variant: {
    solid: {
      backgroundColor: "#00ffe8",
      _hover: {
        backgroundColor: "#00e1ca"
      },
      _active: {
        backgroundColor: "#00b9aa"
      }
    },
    text: {},
    ghost: {},
    outlined: {}
  }
}, userTheme);

export default buttonStyles;