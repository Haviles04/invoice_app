import React from "react";
import Navbar from "./Navbar";
import { useTheme } from "@/context/ThemeContextProvider";
import InvoiceForm from "@/components/InvoiceForm";
import styles from "@/styles/Layout.module.css";
import { useInvoices } from "@/context/InvoiceContextProvider";

function Layout({ children }) {
  const { isDarkMode } = useTheme();
  const { invoiceFormIsOpen, setInvoiceFormIsOpen } = useInvoices();
  return (
    <div className={isDarkMode ? `${styles.dark}` : `${styles.light}`}>
      {invoiceFormIsOpen && (
        <>
          <InvoiceForm setInvoiceFormIsOpen={setInvoiceFormIsOpen} />
          <div className={styles.overlay}></div>
        </>
      )}
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
