import React from "react";
import Image from "next/image";
import styles from "@/styles/InvoiceBar.module.css";
import ArrowRight from "@/assets/icon-arrow-right.svg";
import { useTheme } from "@/context/ThemeContextProvider";

function InvoiceBar({ invoice }) {
  const { theme } = useTheme();
  const { id, paymentDue, clientName, total, status } = invoice;

  const dueDate = new Date(paymentDue).toDateString().slice(3);

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <p className="heading-S-variant">#{id}</p>
      <p className={`body-font ${styles.lightText}`}>Due {dueDate}</p>
      <p className={`body-font ${styles.lightText}`}>{clientName}</p>
      <p className={`heading-S-variant ${styles.total}`}>${total.toFixed(2)}</p>
      <p className={`${styles[status]} heading-S-variant `}>{status}</p>
      <button className={styles.arrowBtn}>
        <Image src={ArrowRight} alt="Arrow" />
      </button>
    </div>
  );
}

export default InvoiceBar;
