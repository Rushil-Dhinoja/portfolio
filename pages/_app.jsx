// import "../styles/globals.css";
import globalStyles from "../styles/PageStyles/globalStyles";

function MyApp({ Component, pageProps }) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
