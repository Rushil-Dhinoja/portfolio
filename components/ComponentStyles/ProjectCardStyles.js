import { createUseStyles } from "react-jss";

const projectCardStyles = createUseStyles((theme) => {
  return {
    cardWrapper: {
      boxShadow: theme.shadows.primary,
      borderRadius: "16px",
      position: "relative",
      alignSelf: "center",
      justifySelf: "center",
      width: 350,
      padding: "20px 0",
      alignSelf: "stretch",
      transform: "rotate(var(--rotate))",
      "@media screen and (max-width: 1400px)": {
        width: 280,
      },
      "@media screen and (max-width: 900px)": {
        width: 250,
        "&:nth-of-type(even)": {
          transform: "rotate(5deg)",
        },
        "&:nth-of-type(odd)": {
          transform: "rotate(-5deg)",
        },
      },
      "@media screen and (max-width: 750px)": {
        transform: "rotate(0)",
        width: 260,
      },
      "@media screen and (max-width: 650px)": {
        transform: "rotate(0)",
        width: "80%",
      },
      "@media screen and (max-width: 400px)": {
        width: "100%",
      },
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
    description: {
      margin: "0 20px",
      padding: "5px 0",
      borderTop: `1px solid ${theme.colors.secondary}`,
    },
  };
});

export default projectCardStyles;
