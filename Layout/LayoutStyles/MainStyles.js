import { createUseStyles } from "react-jss";

const mainStyles = createUseStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.accent,
    padding: "45px 80px 45px 80px",
    minHeight: "100vh",
  },
  main: {
    padding: "0 80px",
  },
}));

export default mainStyles;
