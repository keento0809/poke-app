import Layout from "../layout/Layout";
import "../styles/globals.css";
import { AppWrapper } from "../context/state";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppWrapper>
        <Layout>
          <ThemeProvider attribute="class">
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
      </AppWrapper>
    </>
  );
}

export default MyApp;
