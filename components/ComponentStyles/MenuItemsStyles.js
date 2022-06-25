import { createUseStyles } from "react-jss";

const menuItemsStyles = createUseStyles((theme) => ({
  menu: {
    display: "flex",
    alignItems: "center",
  },
  menuItem: {
    cursor: "pointer",
    fontSize: 20,
    "& > a": {
      textDecoration: "none",
      color: theme.colors.primary,
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
