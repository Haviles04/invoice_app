import React from "react";
import Image from "next/image";
import styles from "@/styles/InvoiceBar.module.css";
import ArrowRight from "@/assets/icon-arrow-right.svg";
import { useTheme } from "@/context/ThemeContextProvider";
import Link from "next/link";

function InvoiceBar({ invoice, setSingleInvoice }) {
  const { theme } = useTheme();
  const { id, paymentDue, clientName, total, status } = invoice;

  const dueDate = new Date(paymentDue).toDateString().slice(3);

  return (
    <Link href={`/${invoice.id}`} className={`${styles.link} ${styles[theme]}`}>
      <div className={`${styles.container} `}>
        <p className="heading-S-variant">#{id}</p>
        <p className={`body-font ${styles.lightText}`}>Due {dueDate}</p>
        <p className={`body-font ${styles.lightText}`}>{clientName}</p>
        <p className={`heading-S-variant ${styles.total}`}>
          ${total.toFixed(2)}
        </p>
        <p className={`${styles[status]} heading-S-variant `}>{status}</p>
        <button className={styles.arrowBtn}>
          <Image src={ArrowRight} alt="Arrow" />
        </button>
      </div>
    </Link>
  );
}

export default InvoiceBar;
