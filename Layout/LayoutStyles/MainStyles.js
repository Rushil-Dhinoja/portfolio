import { createUseStyles } from "react-jss";

const mainStyles = createUseStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.accent,
    padding: "45px 80px 45px 80px",
    minHeight: "100vh",
    "@media screen and (max-width: 900px)": {
      padding: "20px 40px 20px 40px",
    },
  },
  main: {
    padding: "0 80px",
    "@media screen and (max-width: 1200px)": {
      padding: "0 40px",
    },
    "@media screen and (max-width: 900px)": {
      padding: "0 25px",
    },
    "@media screen and (max-width: 650px)": {
      padding: "0",
    },
  },
}));

export default mainStyles;
