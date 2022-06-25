import Document, { Html, Main, NextScript, Head } from "next/document";
import { SheetsRegistry, JssProvider, createGenerateId } from "react-jss";

export default class JssDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

JssDocument.getInitialProps = async (ctx) => {
  const registry = new SheetsRegistry();
  const generateId = createGenerateId();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line react/display-name
      enhanceApp: (App) => (props) =>
        (
          <JssProvider registry={registry} generateId={generateId}>
            <App {...props} />
          </JssProvider>
        ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style id="server-side-styles">{registry.toString()}</style>
      </>
    ),
  };
};
