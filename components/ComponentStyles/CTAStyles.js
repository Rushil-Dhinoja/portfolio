import { createUseStyles } from "react-jss";

const CTAStyles = createUseStyles((theme) => ({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    padding: "10px 34px",
    border: "none",
    color: theme.colors.white,
    fontSize: theme.fontSizes.buttonDesktop,
    fontWeight: theme.fontWeights.semiBold,
    cursor: "pointer",
    transition: "all .2s",
    "&:hover": {
      transform: "translateY(-3px)",
    },
    "&:active": {
      transform: "translateY(0px) scale(.95)",
    },
  },
}));

export default CTAStyles;
