import { createUseStyles } from "react-jss";

const nodeSectionStyles = createUseStyles((theme) => ({
  headline: {
    fontSize: theme.fontSizes.headings,
    alignSelf: "center",
    fontWeight: theme.fontWeights.light,
  },
  sectionRight: {
    justifySelf: "end",
  },
}));

export default nodeSectionStyles;
