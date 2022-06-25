import { createUseStyles } from "react-jss";

const logoStyles = createUseStyles((theme) => ({
  logo: {
    fontWeight: theme.fontWeights.semiBold,
    lineHeight: 0,
    userSelect: "none",
  },
  "logo-dot": {
    fontSize: 64,
    color: theme.colors.primary,
    pointerEvents: "none",
  },
}));

export default logoStyles;
