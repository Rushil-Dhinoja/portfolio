import { createUseStyles } from "react-jss";

const contactStyles = createUseStyles((theme) => ({
  heading: {
    fontSize: theme.fontSizes.headings,
    fontWeight: theme.fontWeights.light,
    textAlign: "center",
    color: theme.colors.primary,
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  formItem: {
    display: "flex",
    flexDirection: "column",
    "& > label": {
      marginBottom: 10,
      fontSize: 24,
    },
    "& > input, & > textarea": {
      width: "450px",
      border: "none",
      boxShadow: theme.shadows.primary,
      outline: "none",
      borderRadius: 14,
      padding: "0 20px",
      "@media screen and (max-width: 500px)": {
        width: "300px",
      },
    },
    "& > input": {
      height: "45px",
    },
    "& > textarea": {
      resize: "none",
      padding: "10px 20px",
    },
    "&:not(:last-child)": {
      marginBottom: "15px",
    },
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  sendButton: {
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    padding: "10px 34px",
    border: "none",
    color: theme.colors.white,
    fontSize: theme.fontSizes.buttonDesktop,
    fontWeight: theme.fontWeights.regular,
    cursor: "pointer",
    transition: "all .2s",
    margin: "0 auto",
    marginTop: 40,
    "&:hover": {
      transform: "translateY(-3px)",
    },
    "&:active": {
      transform: "translateY(0px) scale(.95)",
    },
  },
  contactDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing.subSectionMargin,
    fontSize: 24,
    lineHeight: "50px",
    "@media screen and (max-width: 500px)": {
      fontSize: 20,
      lineHeight: "40px",
    },
  },
  linksContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 20,
    marginTop: 40,
  },
}));

export default contactStyles;
