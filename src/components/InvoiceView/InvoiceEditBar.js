import React from "react";
import styles from "@/styles/InvoiceView.module.css";
import { useInvoices } from "@/context/InvoiceContextProvider";

function InvoiceEditBar({ status, id, setSingleInvoice }) {
  const { deleteInvoice } = useInvoices();

  const handleDelete = () => {
    try {
      deleteInvoice(id);
      setSingleInvoice(null);
    } catch {
      alert("Oops! something went wrong!");
    }
  };

  return (
    <div className={styles.editBar}>
      <div className={styles.status}>
        <p className="body-font">Status</p>
        <p className={`${styles[status]} heading-S-variant `}>{status}</p>
      </div>
      <div className={styles.editBtns}>
        <button className="heading-S-variant">Edit</button>
        <button onClick={handleDelete} className="heading-S-variant">
          Delete
        </button>
        <button className="heading-S-variant">Mark as Paid</button>
      </div>
    </div>
  );
}

export default InvoiceEditBar;
