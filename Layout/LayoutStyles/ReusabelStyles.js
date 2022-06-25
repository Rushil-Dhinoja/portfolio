import { createUseStyles } from "react-jss";

const reusableStyles = createUseStyles((theme) => ({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    "@media screen and (max-width: 650px)": {
      gridTemplateColumns: "1fr",
      order: "revert-layer",
      gap: 20,
    },
  },
  wrapperWithMargin: {
    marginTop: theme.spacing.sectionMargin,
  },
}));

export default reusableStyles;
