import React from "react";
import Image from "next/image";
import styles from "@/styles/InvoiceView.module.css";
import arrowLeft from "@/assets/icon-arrow-left.svg";
import InvoiceEditBar from "@/components/InvoiceView/InvoiceEditBar";
import InvoiceInfo from "@/components/InvoiceView/InvoiceInfo";
import ItemInfo from "@/components/InvoiceView/ItemInfo";

function InvoiceView({ invoice, setSingleInvoice }) {
  return (
    <section className={styles.container}>
      <button
        className={`${styles.backButton} heading-S-variant`}
        onClick={() => setSingleInvoice(null)}
      >
        <Image src={arrowLeft} alt="back arrow" /> Go Back
      </button>
      <InvoiceEditBar
        status={invoice.status}
        id={invoice.id}
        setSingleInvoice={setSingleInvoice}
      />
      <div className={styles.invoiceDisplay}>
        <InvoiceInfo invoice={invoice} />
        <ItemInfo items={invoice.items} total={invoice.total} />
      </div>
    </section>
  );
}

export default InvoiceView;
