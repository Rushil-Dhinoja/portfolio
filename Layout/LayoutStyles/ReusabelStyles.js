import { createUseStyles } from "react-jss";

const reusableStyles = createUseStyles((theme) => ({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  wrapperWithMargin: {
    marginTop: theme.spacing.sectionMargin,
  },
}));

export default reusableStyles;
