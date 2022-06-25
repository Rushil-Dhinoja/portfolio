import { createUseStyles } from "react-jss";

const headerStyles = createUseStyles((theme) => ({
  header: {
    marginTop: "95px",
    "@media screen and (max-width: 650px)": {
      marginTop: "50px",
    },
  },
  headerLeft: {
    alignSelf: "center",
    "@media screen and (max-width: 650px)": {
      order: 2,
    },
  },
  headerRight: {
    justifySelf: "end",
    "@media screen and (max-width: 650px)": {
      order: 1,
    },
  },
  name: {
    fontSize: theme.fontSizes.headings,
    color: theme.colors.primary,
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
  designation: {
    fontSize: theme.fontSizes.headings,
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
  links: {
    display: "flex",
    marginTop: "20px",
    "& > *": {
      cursor: "pointer",
      "&:not(:last-child)": {
        marginRight: "30px",
        "@media screen and (max-width: 1400px)": {
          marginRight: "20px",
        },
        "@media screen and (max-width: 900px)": {
          marginRight: "10px",
        },
        "@media screen and (max-width: 650px)": {
          marginRight: "15px",
        },
      },
    },
  },
}));

export default headerStyles;
