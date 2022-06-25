import { createUseStyles } from "react-jss";

const reactIntroStyles = createUseStyles((theme) => ({
  headline: {
    fontSize: theme.fontSizes.headings,
    alignSelf: "center",
    marginLeft: 160,
    fontWeight: theme.fontWeights.light,
    "@media screen and (max-width: 1400px)": {
      fontSize: theme.fontSizes.heading1400,
      marginLeft: 120,
    },
    "@media screen and (max-width: 900px)": {
      fontSize: theme.fontSizes.heading900,
      marginLeft: 80,
    },
    "@media screen and (max-width: 650px)": {
      fontSize: theme.fontSizes.heading650,
      marginLeft: 0,
    },
    "@media screen and (max-width: 400px)": {
      fontSize: theme.fontSizes.heading400,
    },
  },
}));

export default reactIntroStyles;
