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
    // "&:hover": {
    //   "&:before": {
    //     content: `'sdfds'`,
    //     // content: (props) => {
    //     //   console.log(props);
    //     //   return `${props.data.name}`;
    //     // },
    //     position: "absolute",
    //   },
    // },
  },
}));

export default profileItemStyles;
