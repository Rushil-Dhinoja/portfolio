import { createUseStyles } from "react-jss";

const nodeSectionStyles = createUseStyles((theme) => ({
  headline: {
    fontSize: theme.fontSizes.headings,
    alignSelf: "center",
    fontWeight: theme.fontWeights.light,
    marginRight: 160,

    "@media screen and (max-width: 1400px)": {
      fontSize: theme.fontSizes.heading1400,
      marginRight: 120,
    },
    "@media screen and (max-width: 900px)": {
      fontSize: theme.fontSizes.heading900,
      marginRight: 80,
    },
    "@media screen and (max-width: 650px)": {
      fontSize: theme.fontSizes.heading650,
      order: 1,
      marginRight: 0,
    },
    "@media screen and (max-width: 400px)": {
      fontSize: theme.fontSizes.heading400,
    },
  },
  sectionRight: {
    // justifySelf: "end",
  },
}));

export default nodeSectionStyles;
