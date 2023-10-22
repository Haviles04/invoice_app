import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Empty from "@/components/Empty";
import BannerButtonBar from "@/components/BannerButtonBar";

import { useInvoices } from "@/context/InvoiceContextProvider";
import InvoiceListDisplay from "@/components/InvoiceListDisplay";

export default function Home() {
  const { invoices, setInvoiceFormIsOpen } = useInvoices();
  return (
    <div className={styles.mainContainer}>
      <>
        <BannerButtonBar setInvoiceFormIsOpen={setInvoiceFormIsOpen} />
        {invoices.length ? <InvoiceListDisplay /> : <Empty />}
      </>
    </div>
  );
}
