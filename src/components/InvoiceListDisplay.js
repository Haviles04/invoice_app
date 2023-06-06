import React from "react";
import { useInvoices } from "@/context/InvoiceContextProvider";
import InvoiceBar from "./InvoiceBar";
import styles from "@/styles/InvoiceListDisplay.module.css";

function InvoiceListDisplay() {
  const { invoices } = useInvoices();
  return (
    <div className={styles.container}>
      {invoices.map((invoice) => (
        <InvoiceBar key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
}

export default InvoiceListDisplay;
