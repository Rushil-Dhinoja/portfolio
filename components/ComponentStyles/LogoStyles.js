import { createUseStyles } from "react-jss";

const logoStyles = createUseStyles((theme) => ({
  logo: {
    fontWeight: theme.fontWeights.semiBold,
    lineHeight: 0,
    userSelect: "none",
    "@media screen and (max-width: 900px)": {
      display: "none",
    },
  },
  "logo-dot": {
    fontSize: 64,
    color: theme.colors.primary,
    pointerEvents: "none",
  },
}));

export default logoStyles;
