import { createUseStyles } from "react-jss";

const menuItemsStyles = createUseStyles((theme) => ({
  menu: {
    display: "flex",
    alignItems: "center",
  },
  menuItem: {
    cursor: "pointer",
    fontSize: 20,
    color: theme.colors.primary,
    "& > a": {
      textDecoration: "none",
    },
    "&:not(:last-child)": {
      marginRight: 30,
    },
    "@media screen and (max-width: 900px)": {
      fontSize: 16,
      "&:not(:last-child)": {
        marginRight: 20,
      },
    },
    "@media screen and (max-width: 320px)": {
      fontSize: 14,
    },
  },
}));

export default menuItemsStyles;
