import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Empty from "@/components/Empty";
import BannerButtonBar from "@/components/BannerButtonBar";
import InvoiceForm from "@/components/InvoiceForm";

export default function Home() {
  const [invoiceFormIsOpen, setInvoiceFormIsOpen] = useState(false);
  return (
    <div className={styles.mainContainer}>
      {invoiceFormIsOpen && (
        <>
          <InvoiceForm setInvoiceFormIsOpen={setInvoiceFormIsOpen} />
          <div className={styles.overlay}></div>
        </>
      )}
      <BannerButtonBar setInvoiceFormIsOpen={setInvoiceFormIsOpen} />
      <Empty />
    </div>
  );
}
