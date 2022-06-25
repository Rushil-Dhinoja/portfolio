import { createUseStyles } from "react-jss";

const headerStyles = createUseStyles((theme) => ({
  header: {
    marginTop: "95px",
  },
  headerLeft: {
    alignSelf: "center",
  },
  headerRight: {
    justifySelf: "end",
  },
  name: {
    fontSize: theme.fontSizes.headings,
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.light,
  },
  designation: {
    fontSize: theme.fontSizes.headings,
    fontWeight: theme.fontWeights.light,
  },
  links: {
    display: "flex",
    marginTop: "20px",
    "& > *": {
      cursor: "pointer",
      "&:not(:last-child)": {
        marginRight: "30px",
      },
    },
  },
}));

export default headerStyles;
