import { createUseStyles } from "react-jss";

const projectCardStyles = createUseStyles((theme) => ({
  cardWrapper: {
    boxShadow: theme.shadows.primary,
    borderRadius: "16px",
    position: "relative",
    alignSelf: "center",
    justifySelf: "center",
    width: 350,
    padding: "20px 0",
  },
  bars: {
    padding: "0 20px",
  },
  bottomBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 18,
  },
  showMoreBtn: {
    backgroundColor: theme.colors.secondary,
    fontSize: 12,
    padding: "5px 10px",
    color: theme.colors.white,
    borderRadius: 6,
    cursor: "pointer",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "300px",
  },
  name: {
    fontSize: 16,
    textTransform: "lowercase",
  },
  techStack: {
    fontSize: 12,
    marginBottom: 18,
  },
  links: {
    display: "flex",
    "& > a": {
      cursor: "pointer",
      "&:not(:last-child)": {
        marginRight: 15,
      },
    },
  },
}));

export default projectCardStyles;
