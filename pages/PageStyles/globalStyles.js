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
  },
  "main-container": {
    fontFamily: "poppins",
    "@media screen and (max-width: 1200px)": {
      display: "none",
    },
  },

  "mobile-container": {
    display: "none",
    "@media screen and (max-width: 1199px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      height: "100vh",
      padding: "20px",
      "& > div": {
        marginTop: "20px",
        display: "flex",
        "&:last-of-type": {
          flexDirection: "column",
        },
      },
    },
  },
  "#modal-root": {
    background: "blue",
  },
}));

export default globalStyles;
