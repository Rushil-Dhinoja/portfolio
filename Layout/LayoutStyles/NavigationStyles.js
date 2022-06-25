import { createUseStyles } from "react-jss";

const navigationStyles = createUseStyles((theme) => ({
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

export default navigationStyles;
