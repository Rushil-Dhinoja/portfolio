import { createUseStyles } from "react-jss";

const aboutStyles = createUseStyles((theme) => ({
  heading: {
    fontSize: theme.fontSizes.headings,
    fontWeight: theme.fontWeights.light,
    textAlign: "center",
    color: theme.colors.primary,
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
  aboutContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: theme.spacing.subSectionMargin,
    rowGap: 40,
    "@media screen and (max-width: 650px)": {
      marginTop: 30,
    },
  },
  aboutItem: {
    width: "40%",
    display: "flex",
    flexDirection: "column",
    boxShadow: theme.shadows.primary,
    rowGap: 20,
    columnGap: 20,
    borderRadius: "16px",
    padding: 20,
    "@media screen and (max-width: 1200px)": {
      width: "45%",
    },
    "@media screen and (max-width: 1000px)": {
      width: "80%",
    },
    "@media screen and (max-width: 650px)": {
      width: "90%",
    },
    "@media screen and (max-width: 400px)": {
      width: "100%",
    },
  },
  aboutItemHeading: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: theme.fontWeights.regular,
    color: theme.colors.primary,
  },
  skillsContainer: {
    display: "flex",
    flexWrap: "wrap",
    rowGap: 10,
    columnGap: 10,
    justifyContent: "center",
  },
  skill: {
    background: theme.colors.primary,
    fontSize: 14,
    color: theme.colors.white,
    padding: "8px 30px",
    borderRadius: "500px",
    textTransform: "lowercase",
  },
  experienceContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    rowGap: 10,
    columnGap: 10,
  },
  experienceItem: {
    width: "80%",
    backgroundColor: theme.colors.primary,
    padding: "10px",
    display: "flex",
    alignItems: "center",
    borderRadius: "16px",
    "@media screen and (max-width: 650px)": {
      width: "90%",
    },
    "@media screen and (max-width: 500px)": {
      width: "100%",
    },
  },
  experienceImage: {
    height: 50,
    width: 50,
    position: "relative",
    borderRadius: 8,
    overflow: "hidden",
  },
  experienceInfo: {
    marginLeft: 10,
    color: theme.colors.white,
  },
  educationContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    rowGap: 10,
    columnGap: 10,
  },
  educationItem: {
    width: "80%",
    backgroundColor: theme.colors.primary,
    padding: "15px",
    display: "flex",
    alignItems: "center",
    borderRadius: "16px",
    color: theme.colors.white,
    justifyContent: "space-between",
    "@media screen and (max-width: 650px)": {
      width: "90%",
    },
    "@media screen and (max-width: 500px)": {
      width: "100%",
    },
  },
  grades: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  grade: {
    fontSize: 24,
    fontWeight: theme.fontWeights.light,
  },
}));

export default aboutStyles;
