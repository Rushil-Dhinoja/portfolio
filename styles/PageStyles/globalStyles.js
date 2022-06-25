import { createUseStyles } from "react-jss";
const globalStyles = createUseStyles((theme) => ({
  "@global": {
    "*, *::before, *::after": {
      margin: 0,
      padding: 0,
      boxSizing: "border-box",
      fontFamily: "Poppins",
      textTransform: "lowercase",
    },
    html: {
      scrollBehavior: "smooth",
    },
  },
  "main-container": {
    fontFamily: "poppins",
    // "@media screen and (max-width: 1200px)": {
    //   display: "none",
    // },
  },
}));

export default globalStyles;
