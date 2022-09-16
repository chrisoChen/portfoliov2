import Head from "next/head";
import Footer from "../components/Footer";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Chris Chen</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps}></Component>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
