import React from "react";
import styles from "@/styles/InvoiceView.module.css";

function InvoiceEditBar({ status }) {
  return (
    <div className={styles.editBar}>
      <div className={styles.status}>
        <p className="body-font">Status</p>
        <p className={`${styles[status]} heading-S-variant `}>{status}</p>
      </div>
      <div className={styles.editBtns}>
        <button className="heading-S-variant">Edit</button>
        <button className="heading-S-variant">Delete</button>
        <button className="heading-S-variant">Mark as Paid</button>
      </div>
    </div>
  );
}

export default InvoiceEditBar;
