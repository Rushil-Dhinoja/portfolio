import { createUseStyles } from "react-jss";

const navigationStyles = createUseStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media screen and (max-width: 650px)": {
      justifyContent: "center",
    },
  },
}));

export default navigationStyles;
