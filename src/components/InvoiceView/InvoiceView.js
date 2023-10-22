import React from "react";
import Image from "next/image";
import styles from "@/styles/InvoiceView.module.css";
import arrowLeft from "@/assets/icon-arrow-left.svg";
import InvoiceEditBar from "@/components/InvoiceView/InvoiceEditBar";
import InvoiceInfo from "@/components/InvoiceView/InvoiceInfo";
import ItemInfo from "@/components/InvoiceView/ItemInfo";
import Link from "next/link";

function InvoiceView({ invoice, setSingleInvoice }) {
  return (
    <section className={styles.container}>
      <Link href="/">
        <button className={`${styles.backButton} heading-S-variant`}>
          <Image src={arrowLeft} alt="back arrow" /> Go Back
        </button>
      </Link>
      <InvoiceEditBar
        status={invoice.status}
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
