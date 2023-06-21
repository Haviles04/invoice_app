import React from "react";
import styles from "@/styles/InvoiceView.module.css";

function InvoiceInfo({ invoice }) {
  const {
    id,
    description,
    senderAddress,
    clientAddress,
    createdAt,
    paymentDue,
    clientEmail,
  } = invoice;
  return (
    <div className={styles.invoiceDisplay}>
      <div className={styles.idAndSender}>
        <span>
          <p className={`heading-S ${styles.id}`}>{id}</p>
          <p>{description}</p>
        </span>
        <div className={styles.address}>
          <p>{senderAddress.street}</p>
          <p>{senderAddress.city}</p>
          <p>{senderAddress.postCode}</p>
          <p>{senderAddress.country}</p>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.datesAndClient}>
          <div>
            <p>Invoice Date</p>
            <p>{createdAt}</p>
            <p>Payment Due</p>
            <p>{paymentDue}</p>
          </div>
          <div>
            <p>Bill to</p>
            <p>{invoice.clientName}</p>
            <div className={styles.address}>
              <p>{clientAddress.street}</p>
              <span>{clientAddress.city}</span>
              <p>{clientAddress.postCode}</p>
              <span>{clientAddress.country}</span>
            </div>
          </div>
        </div>
        <div className={styles.clientEmail}>
          <p>Sent to</p>
          <p>{clientEmail}</p>
        </div>
      </div>
    </div>
  );
}

export default InvoiceInfo;
