import { createUseStyles } from "react-jss";

const profileItemStyles = createUseStyles((theme) => ({
  item: {
    backgroundColor: theme.colors.secondary,
    padding: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    position: "relative",
    "@media screen and (max-width: 1400px)": {
      padding: "16px",
    },
    "@media screen and (max-width: 900px)": {
      padding: "12px",
    },
    "& > img": {
      "@media screen and (max-width: 650px)": {
        height: 22,
        width: 22,
      },
    },
  },
}));

export default profileItemStyles;
