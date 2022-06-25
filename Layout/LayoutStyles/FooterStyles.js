const { createUseStyles } = require("react-jss");

const footerStyles = createUseStyles((theme) => ({
  endNote: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: theme.fontWeights.light,
    "@media screen and (max-width: 1400px)": {
      fontSize: theme.fontSizes.heading1400,
    },
    "@media screen and (max-width: 900px)": {
      fontSize: theme.fontSizes.heading900,
    },
    "@media screen and (max-width: 650px)": {
      fontSize: theme.fontSizes.heading650,
    },
    "@media screen and (max-width: 400px)": {
      fontSize: theme.fontSizes.heading400,
    },
  },
  copyText: {
    fontSize: 16,
    color: theme.colors.primary,
    textAlign: "center",
    marginTop: 40,
  },
}));

export default footerStyles;
