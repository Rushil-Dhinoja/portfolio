import { createUseStyles } from "react-jss";

const reactIntroStyles = createUseStyles((theme) => ({
  headline: {
    fontSize: theme.fontSizes.headings,
    alignSelf: "center",
    marginLeft: 160,
    fontWeight: theme.fontWeights.light,
  },
}));

export default reactIntroStyles;
