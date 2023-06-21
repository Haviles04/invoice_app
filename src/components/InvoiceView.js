import React from "react";
import Image from "next/image";
import styles from "@/styles/InvoiceView.module.css";
import arrowLeft from "@/assets/icon-arrow-left.svg";
import InvoiceEditBar from "./InvoiceEditBar";
import InvoiceInfo from "./InvoiceInfo";

function InvoiceView({ invoice, setSingleInvoice }) {
  return (
    <section className={styles.container}>
      <button
        className={`${styles.backButton} heading-S-variant`}
        onClick={() => setSingleInvoice(null)}
      >
        <Image src={arrowLeft} alt="back arrow" /> Go Back
      </button>
      <InvoiceEditBar status={invoice.status} />
      <InvoiceInfo invoice={invoice} />
    </section>
  );
}

export default InvoiceView;
