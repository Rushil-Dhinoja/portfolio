import { createUseStyles } from "react-jss";

const myCreationsStyles = createUseStyles((theme) => ({
  heading: {
    textAlign: "center",
    fontSize: theme.fontSizes.headings,
    fontWeight: theme.fontWeights.light,
    color: theme.colors.primary,
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
  projectGallery: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 100,
    marginTop: theme.spacing.subSectionMargin,
    "@media screen and (max-width:1400px)": {
      gridTemplateColumns: "repeat(2,1fr)",
      gap: 50,
    },
    "@media screen and (max-width:650px)": {
      gridTemplateColumns: "1fr",
      gap: 50,
      marginTop: 30,
    },
  },
}));

export default myCreationsStyles;
