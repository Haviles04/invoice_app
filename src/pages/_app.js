import "@/styles/globals.css";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import InvoiceContextProvider from "@/context/InvoiceContextProvider";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <InvoiceContextProvider>
      <ThemeContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
    </InvoiceContextProvider>
  );
}
