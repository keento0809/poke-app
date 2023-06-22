import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
import { AppWrapper } from "../components/context/state";
import Layout from "../layout/Layout";
import "../styles/globals.css";

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

export default appWithTranslation(MyApp);
