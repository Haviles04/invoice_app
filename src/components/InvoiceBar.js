import React from "react";
import styles from "@/styles/InvoiceBar.module.css";

function InvoiceBar({ invoice }) {
  const dueDate = new Date(invoice.paymentDue).toDateString().slice(3);
  return (
    <div className={styles.container}>
      <p className="heading-S-variant">#{invoice.id}</p>
      <p className="body-font">Due {dueDate}</p>
      <p className="body-font">{invoice.clientName}</p>
      <p className="heading-S-variant">${invoice.total.toFixed(2)}</p>
      <p>{invoice.status}</p>
    </div>
  );
}

export default InvoiceBar;
