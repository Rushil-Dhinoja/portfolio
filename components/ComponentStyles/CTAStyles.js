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
    textDecoration: "none",
    "&:hover": {
      transform: "translateY(-3px)",
    },
    "&:active": {
      transform: "translateY(0px) scale(.95)",
    },
    "@media screen and (max-width: 900px)": {
      padding: "10px 24px",
    },
    "@media screen and (max-width: 650px)": {
      display: "none",
    },
    "&.mobile-screen": {
      display: "none",
      marginTop: 20,
      "@media screen and (max-width: 650px)": {
        display: "inline-block",
      },
    },
  },
}));

export default CTAStyles;
