import React from "react";
import { useRouter } from "next/router";
import { useInvoices } from "@/context/InvoiceContextProvider";
import InvoiceView from "@/components/InvoiceView/InvoiceView";
import styles from "@/styles/Home.module.css";

export default function Invoice() {
  const { invoices } = useInvoices();
  const { query } = useRouter();
  const { invoiceId } = query;

  const invoice = invoices.find(({ id }) => invoiceId === id);
  return (
    <div className={styles.mainContainer}>
      <InvoiceView key={invoice.id} invoice={invoice} />
    </div>
  );
}
