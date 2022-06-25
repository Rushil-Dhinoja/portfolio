import Head from "next/head";
import { ThemeProvider } from "react-jss";
import { Main } from "../Layout/Main";
import { theme } from "../styles/Theme";
import globalStyles from "./PageStyles/globalStyles";

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
        <div className={styles["mobile-container"]}>
          <div>
            Rushil Dhinoja is currently in process of creating a new version of
            his portfolio, request you visit the desktop version of the website.
            Sorry for inconvenience, the mobile version will be available soon.
          </div>
          <div>if you want to connect at this moment use the below details</div>
          <div className="links">
            <a
              href="https://api.whatsapp.com/send/?phone=917016613715"
              target="_blank"
              rel="noreferrer"
            >
              +91-7016613715
            </a>
            <a
              href="mailto:dhinoja.rushil17@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              dhinoja.rushil17@gmail.com
            </a>
          </div>
        </div>
        {/* Temporary Solution till the responsive design is done */}
      </ThemeProvider>
    </div>
  );
}
