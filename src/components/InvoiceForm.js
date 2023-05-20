import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/InvoiceForm.module.css";
import DeleteIcon from "@/assets/icon-delete.svg";
import { useTheme } from "@/context/ThemeContextProvider";

function InvoiceForm({ setInvoiceFormIsOpen }) {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? styles.dark : styles.light;
  const [inputs, setInputs] = useState({ items: [{}] });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleItemChange = (e, i) => {
    const name = e.target.name.toString();
    const value = e.target.value;
    let data = { ...inputs };
    data.items[i][name] = value;
    data.items[i].itemTotal = (
      data.items[i].itemQty * data.items[i].itemPrice
    ).toFixed(2);
    setInputs(data);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const data = { ...inputs };
    data.items.push({});
    setInputs(data);
  };

  const handleDeleteItem = (e, i) => {
    e.preventDefault();
    setInputs((prev) => ({
      ...prev,
      items: prev.items.filter((item, index) => index !== i),
    }));
  };

  const handleDiscard = (e) => {
    e.preventDefault();
    setInvoiceFormIsOpen(false);
  };

  return (
    <div className={`${styles.container} ${theme} `}>
      <h2 className="heading-M">New Invoice</h2>
      <form id="invoice" className={styles.invoiceForm}>
        {
          ///////////////////////
          /* Bill From section */
          //////////////////////
        }
        <h4>Bill From</h4>
        <label htmlFor="fromAddress">
          Street address
          <br />
          <input
            type="text"
            id="fromAddress"
            name="fromAddress"
            className={`${styles.largeInput} heading-S`}
            value={inputs.fromAddress || ""}
            onChange={handleChange}
          />
        </label>
        <div className={styles.mediumInputContainer}>
          <label htmlFor="fromCity">
            City
            <br />
            <input
              type="text"
              id="fromCity"
              name="fromCity"
              className={`${styles.mediumInput} heading-S`}
              value={inputs.fromCity || ""}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="fromPostCode">
            Post Code
            <br />
            <input
              type="text"
              id="fromPostcode"
              name="fromPostcode"
              className={`${styles.mediumInput} heading-S`}
              value={inputs.fromPostcode || ""}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="fromCountry">
            Country
            <br />
            <input
              type="text"
              id="fromCountry"
              name="fromCountry"
              className={`${styles.mediumInput} heading-S`}
              value={inputs.fromCountry || ""}
              onChange={handleChange}
            />
          </label>
        </div>
        {
          ///////////////////////
          /* Bill To section */
          //////////////////////
        }
        <h4>Bill To</h4>
        <label htmlFor="toName">
          Client Name
          <br />
          <input
            type="text"
            id="clientName"
            name="clientName"
            className={`${styles.largeInput} heading-S`}
            value={inputs.clientName || ""}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="toEmail">
          Client Email
          <br />
          <input
            type="text"
            id="clientEmail"
            name="clientEmail"
            className={`${styles.largeInput} heading-S`}
            value={inputs.clientEmail || ""}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="toAddress">
          Street address
          <br />
          <input
            type="text"
            id="toAddress"
            name="toAddress"
            className={`${styles.largeInput} heading-S`}
            value={inputs.toAddress || ""}
            onChange={handleChange}
          />
        </label>
        <div className={styles.mediumInputContainer}>
          <label htmlFor="toCity">
            City
            <br />
            <input
              type="text"
              id="toCity"
              name="toCity"
              className={`${styles.mediumInput} heading-S`}
              value={inputs.toCity || ""}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="toPostCode">
            Post Code
            <br />
            <input
              type="text"
              id="toPostcode"
              name="toPostcode"
              className={`${styles.mediumInput} heading-S`}
              value={inputs.toPostcode || ""}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="toCountry">
            Country
            <br />
            <input
              type="text"
              id="toCountry"
              name="toCountry"
              className={`${styles.mediumInput} heading-S`}
              value={inputs.toCountry || ""}
              onChange={handleChange}
            />
          </label>
        </div>
        {
          ////////////////////////////
          /* Date and Terms Section*/
          //////////////////////////
        }
        <div className={styles.dateTermsContainer}>
          <label htmlFor="issueDate">
            Issue Date
            <input
              type="date"
              id="issueDate"
              name="issueDate"
              className={`${styles.issueDate} heading-S-variant`}
              value={inputs.issueDate || ""}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="paymentTerms">
            Payment Terms
            <select
              id="paymentTerms"
              name="paymentTerms"
              className={`${styles.paymentTerms} heading-S-variant`}
              value={inputs.paymentTerms || ""}
              onChange={handleChange}
            >
              <option value="1" className="heading-S-variant">
                Net 1 Day
              </option>
              <option value="7" className="heading-S-variant">
                Net 7 Day
              </option>
              <option value="14" className="heading-S-variant">
                Net 14 Day
              </option>
              <option value="30" className="heading-S-variant">
                Net 30 Day
              </option>
            </select>
          </label>
        </div>
        <label htmlFor="projectDescription">
          Project Description
          <input
            type="text"
            id="projectDescription"
            name="projectDescription"
            className={`${styles.largeInput} heading-S`}
            value={inputs.projectDescription || ""}
            onChange={handleChange}
          />
        </label>
        <h4 className={styles.itemHeader}>Item List</h4>
        {inputs.items.map((item, i) => (
          <div key={`item${i}`}>
            <label htmlFor="itemName">
              Item Name
              <br />
              <input
                type="text"
                id="itemName"
                name="itemName"
                className={`${styles.itemName} heading-S`}
                value={inputs.items[i].itemName || ""}
                onChange={(e) => handleItemChange(e, i)}
              />
            </label>
            <label htmlFor="itemQty">
              Qty
              <br />
              <input
                type="number"
                id="itemQty"
                name="itemQty"
                className={`${styles.itemQty} heading-S`}
                value={inputs.items[i].itemQty || 0}
                onChange={(e) => handleItemChange(e, i)}
              />
            </label>
            <label htmlFor="itemPrice">
              Price
              <br />
              <input
                type="number"
                id="itemPrice"
                name="itemPrice"
                className={`${styles.itemPrice} heading-S`}
                value={inputs.items[i].itemPrice || 0}
                onChange={(e) => handleItemChange(e, i)}
              />
            </label>
            <label htmlFor="itemTotal">
              Total
              <br />
              <input
                type="number"
                id="itemTotal"
                name="itemTotal"
                className={`${styles.itemTotal} heading-S`}
                disabled
                value={inputs.items[i].itemTotal || 0.0}
              />
            </label>
            <button
              className={styles.deleteBtn}
              onClick={(e) => handleDeleteItem(e, i)}
            >
              <Image src={DeleteIcon} alt="delete" />
            </button>
          </div>
        ))}
        <button
          class={`${styles.addItemBtn} heading-S-variant`}
          onClick={handleAddItem}
        >
          + Add New Item
        </button>
        <div className={styles.buttonContainer}>
          <button
            onClick={(e) => {
              handleDiscard(e);
            }}
            className={`${styles.discardBtn} heading-S-variant`}
          >
            Discard
          </button>
          <div>
            <button className={`${styles.draftBtn} heading-S-variant`}>
              Save as Draft
            </button>
            <button className={`${styles.saveBtn} heading-S-variant`}>
              Save & Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InvoiceForm;
