const { createUseStyles } = require("react-jss");

const footerStyles = createUseStyles((theme) => ({
  endNote: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: theme.fontWeights.light,
  },
  copyText: {
    fontSize: 16,
    color: theme.colors.primary,
    textAlign: "center",
    marginTop: 40,
  },
}));

export default footerStyles;
