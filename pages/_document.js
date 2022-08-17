import { Html, Head, Main, NextScript } from "next/document";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../themes";

function MainDocument() {
  const bodyStyle = { m: 0, backgroundColor: "primary.main" };
  
  return (
    <Html>
      <Head>
        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Box component="body" sx={bodyStyle}>
          <Main />
          <NextScript />
        </Box>
      </ThemeProvider>
    </Html>
  );
}

export default MainDocument;
