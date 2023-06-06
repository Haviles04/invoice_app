import React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/BannerButtonBar.module.css";
import IconPlus from "@/assets/icon-plus.svg";
import { useTheme } from "@/context/ThemeContextProvider";
import { useInvoices } from "@/context/InvoiceContextProvider";

function BannerButtonBar({ setInvoiceFormIsOpen }) {
  const [invoiceStatusSelection, setInvoiceStatusSelection] = useState([]);
  const [invoiceCountMessage, setInvoiceCountMessage] = useState("");
  const { isDarkMode } = useTheme();
  const { invoices } = useInvoices();
  const theme = isDarkMode ? styles.dark : styles.light;

  useEffect(() => {
    getInvoiceCountMessage();
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setInvoiceStatusSelection(
      checked
        ? [...invoiceStatusSelection, name]
        : [...invoiceStatusSelection.filter((item) => item !== name)]
    );
    getInvoiceCountMessage();
  };

  const getInvoiceCountMessage = () => {
    const userSelections = invoices.filter(({ status }) =>
      invoiceStatusSelection.includes(status)
    ).length;

    if (invoices.length === 0) {
      setInvoiceCountMessage("No Invoices");
    } else if (invoiceStatusSelection.length === 1) {
      setInvoiceCountMessage(
        `There are ${userSelections} ${invoiceStatusSelection[0]} invoices`
      );
    } else {
      setInvoiceCountMessage(
        `There are ${userSelections || invoices.length} Total invoices`
      );
    }
  };

  return (
    <div className={`${styles.container} ${theme}`}>
      <div className={styles.header}>
        <h1 className="heading-L">Invoices</h1>
        <p>{invoiceCountMessage}</p>
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
          <div className={styles.options} onChange={handleChange}>
            <input type="checkbox" id="draft" name="Draft" />
            <label htmlFor="draft">Draft</label>
            <br />
            <input type="checkbox" id="pending" name="Pending" />
            <label htmlFor="pending">Pending </label>
            <br />
            <input type="checkbox" id="paid" name="Paid" />
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
