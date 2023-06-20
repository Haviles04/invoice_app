import React from "react";
import Image from "next/image";
import styles from "@/styles/InvoiceView.module.css";
import arrowLeft from "@/assets/icon-arrow-left.svg";
import InvoiceEditBar from "./InvoiceEditBar";

function InvoiceView({ invoice, setSingleInvoice }) {
  console.log(invoice);
  return (
    <section className={styles.container}>
      <button
        className={`${styles.backButton} heading-S-variant`}
        onClick={() => setSingleInvoice(null)}
      >
        <Image src={arrowLeft} alt="back arrow" /> Go Back
      </button>
      <InvoiceEditBar status={invoice.status} />

      <div className={styles.invoiceDisplay}>
        <div className={styles.idAndSender}>
          <span>
            <p className={`heading-S ${styles.id}`}>{invoice.id}</p>
            <p>{invoice.description}</p>
          </span>
          <div className={styles.address}>
            <p>{invoice.senderAddress.street}</p>
            <p>{invoice.senderAddress.city}</p>
            <p>{invoice.senderAddress.postCode}</p>
            <p>{invoice.senderAddress.country}</p>
          </div>
        </div>
        <div className={styles.datesAndClient}>
          <div>
            <p>Invoice Date</p>
            <p>{invoice.createdAt}</p>
            <p>Payment Due</p>
            <p>{invoice.paymentDue}</p>
          </div>
          <div>
            <p>Bill to</p>
            <p>{invoice.clientName}</p>
            <div className={styles.address}>
              <p>{invoice.clientAddress.street}</p>
              <span>{invoice.clientAddress.city}</span>
              <p>{invoice.clientAddress.postCode}</p>
              <span>{invoice.clientAddress.country}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvoiceView;
