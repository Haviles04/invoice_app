import React, { useState } from "react";
import { useInvoices } from "@/context/InvoiceContextProvider";
import InvoiceBar from "./InvoiceBar";
import styles from "@/styles/InvoiceListDisplay.module.css";

function InvoiceListDisplay({ setSingleInvoice }) {
  const { invoices, userSelections } = useInvoices();
  const invoicesToDisplay = userSelections.length ? userSelections : invoices;

  return (
    <div className={styles.container}>
      {invoicesToDisplay.map((invoice) => (
        <InvoiceBar key={invoice.id} invoice={invoice} />
      ))}
    </div>
  );
}

export default InvoiceListDisplay;
