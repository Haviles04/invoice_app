import "@/styles/globals.css";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}
