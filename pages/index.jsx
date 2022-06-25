import Head from "next/head";
import { ThemeProvider } from "react-jss";
import { Main } from "../Layout/Main";
import { theme } from "../styles/Theme";
import globalStyles from "../styles/PageStyles/globalStyles";

export default function Home() {
  const styles = globalStyles();
  return (
    <div>
      <Head>
        <title>Rushil Dhinoja</title>
        <meta
          name="description"
          content="rushil dhinoja is a software engineer with a passion for creating sleek user interfaces and scalable web services. He has been developing web apps since a young age, along side he started his professional career as a software engineer in 2022. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <div className={styles["main-container"]}>
          <Main />
        </div>

        {/* Temporary Solution till the responsive design is done */}

        {/* Temporary Solution till the responsive design is done */}
      </ThemeProvider>
    </div>
  );
}
