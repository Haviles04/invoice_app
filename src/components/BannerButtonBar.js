import React from "react";
import Image from "next/image";
import styles from "@/styles/BannerButtonBar.module.css";
import IconPlus from "@/assets/icon-plus.svg";
import { useTheme } from "@/context/ThemeContextProvider";
import { useInvoices } from "@/context/InvoiceContextProvider";

function BannerButtonBar({ setInvoiceFormIsOpen }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? styles.dark : styles.light;
  return (
    <div className={`${styles.container} ${theme}`}>
      <div className={styles.header}>
        <h1 className="heading-L">Invoices</h1>
        <p>No invoices</p>
      </div>
      <div className={styles.buttonSide}>
        <form className={styles.dropDownCheck}>
          <input
            className={styles.optionsSelect}
            type="checkbox"
            name="filter"
            id="filter"
          />
          <label htmlFor="filter" className="heading-S">
            Filter by status
          </label>
          <div className={styles.options}>
            <input type="checkbox" name="draft" />
            <label htmlFor="draft">Draft</label>
            <br />
            <input type="checkbox" name="pending" />
            <label htmlFor="pending">Pending </label>
            <br />
            <input type="checkbox" name="paid" />
            <label htmlFor="paid">Paid </label>
            <br />
          </div>
        </form>
        <button
          className={styles.button}
          onClick={() => setInvoiceFormIsOpen(true)}
        >
          <Image src={IconPlus} alt="plus sign" />
          New Invoice
        </button>
      </div>
    </div>
  );
}

export default BannerButtonBar;
