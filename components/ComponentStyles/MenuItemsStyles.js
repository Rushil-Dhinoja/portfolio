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
    "&:not(:last-child)": {
      marginRight: 30,
    },
  },
}));

export default menuItemsStyles;
