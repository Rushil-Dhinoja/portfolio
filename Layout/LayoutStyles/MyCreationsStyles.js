import { createUseStyles } from "react-jss";

const myCreationsStyles = createUseStyles((theme) => ({
  heading: {
    textAlign: "center",
    fontSize: theme.fontSizes.headings,
    fontWeight: theme.fontWeights.light,
    color: theme.colors.primary,
  },
  projectGallery: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 100,
    marginTop: theme.spacing.subSectionMargin,
  },
}));

export default myCreationsStyles;
