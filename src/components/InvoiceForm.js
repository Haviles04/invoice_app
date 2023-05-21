import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/InvoiceForm.module.css";
import DeleteIcon from "@/assets/icon-delete.svg";
import { useTheme } from "@/context/ThemeContextProvider";
import { useInvoices } from "@/context/InvoiceContextProvider";
import { initalInputs } from "@/data/initialInputs";

function InvoiceForm({ setInvoiceFormIsOpen }) {
  const { isDarkMode } = useTheme();
  const { addInvoice } = useInvoices();
  const theme = isDarkMode ? styles.dark : styles.light;
  const [inputs, setInputs] = useState(initalInputs);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleAddressChange = (e, person) => {
    const name = e.target.name;
    const value = e.target.value;
    const data = { ...inputs };
    if (person === "sender") {
      data.senderAddress[name] = value;
    } else {
      data.clientAddress[name] = value;
    }
    setInputs(data);
  };

  const handleItemChange = (e, i) => {
    const name = e.target.name;
    const value = e.target.value;
    let data = { ...inputs };
    if (name === "name") {
      data.items[i][name] = value;
    } else {
      data.items[i][name] = parseInt(value);
    }
    data.items[i].total = parseInt(
      (data.items[i].quantity * data.items[i].price).toFixed(2)
    );
    setInputs(data);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    const data = { ...inputs };
    data.items.push({
      name: "",
      quantity: 0,
      price: 0,
      total: 0,
    });
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

  const handleSubmit = (e, status) => {
    e.preventDefault();
    const total = inputs.items.reduce((prev, { total }) => prev + total, 0);
    let dueDate = new Date(inputs.createdAt);
    dueDate.setDate(dueDate.getDate() + parseInt(inputs.paymentTerms));
    let dateFormatted = dueDate.toISOString().slice(0, 10);
    addInvoice({
      ...inputs,
      total: total,
      status: status,
      paymentDue: dateFormatted,
    });
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
            name="street"
            className={`${styles.largeInput} heading-S`}
            value={inputs.senderAddress.street}
            onChange={(e) => handleAddressChange(e, "sender")}
          />
        </label>
        <div className={styles.mediumInputContainer}>
          <label htmlFor="fromCity">
            City
            <br />
            <input
              type="text"
              id="fromCity"
              name="city"
              className={`${styles.mediumInput} heading-S`}
              value={inputs.senderAddress.city}
              onChange={(e) => handleAddressChange(e, "sender")}
            />
          </label>
          <label htmlFor="fromPostCode">
            Post Code
            <br />
            <input
              type="text"
              id="fromPostcode"
              name="postCode"
              className={`${styles.mediumInput} heading-S`}
              value={inputs.senderAddress.postCode}
              onChange={(e) => handleAddressChange(e, "sender")}
            />
          </label>
          <label htmlFor="fromCountry">
            Country
            <br />
            <input
              type="text"
              id="fromCountry"
              name="country"
              className={`${styles.mediumInput} heading-S`}
              value={inputs.senderAddress.country}
              onChange={(e) => handleAddressChange(e, "sender")}
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
            value={inputs.clientName}
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
            value={inputs.clientEmail}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="toAddress">
          Street address
          <br />
          <input
            type="text"
            id="toAddress"
            name="street"
            className={`${styles.largeInput} heading-S`}
            value={inputs.clientAddress.street}
            onChange={(e) => handleAddressChange(e, "client")}
          />
        </label>
        <div className={styles.mediumInputContainer}>
          <label htmlFor="toCity">
            City
            <br />
            <input
              type="text"
              id="toCity"
              name="city"
              className={`${styles.mediumInput} heading-S`}
              value={inputs.clientAddress.city}
              onChange={(e) => handleAddressChange(e, "client")}
            />
          </label>
          <label htmlFor="toPostCode">
            Post Code
            <br />
            <input
              type="text"
              id="toPostcode"
              name="postCode"
              className={`${styles.mediumInput} heading-S`}
              value={inputs.clientAddress.postCode}
              onChange={(e) => handleAddressChange(e, "client")}
            />
          </label>
          <label htmlFor="toCountry">
            Country
            <br />
            <input
              type="text"
              id="toCountry"
              name="country"
              className={`${styles.mediumInput} heading-S`}
              value={inputs.clientAddress.country}
              onChange={(e) => handleAddressChange(e, "client")}
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
              name="createdAt"
              className={`${styles.issueDate} heading-S-variant`}
              value={inputs.issueDate}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="paymentTerms">
            Payment Terms
            <select
              id="paymentTerms"
              name="paymentTerms"
              className={`${styles.paymentTerms} heading-S-variant`}
              value={inputs.paymentTerms}
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
            name="description"
            className={`${styles.largeInput} heading-S`}
            value={inputs.projectDescription}
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
                name="name"
                className={`${styles.itemName} heading-S`}
                value={inputs.items[i].name}
                onChange={(e) => handleItemChange(e, i)}
              />
            </label>
            <label htmlFor="itemQty">
              Qty
              <br />
              <input
                type="number"
                id="itemQty"
                name="quantity"
                className={`${styles.itemQty} heading-S`}
                value={inputs.items[i].quantity || 0}
                onChange={(e) => handleItemChange(e, i)}
              />
            </label>
            <label htmlFor="itemPrice">
              Price
              <br />
              <input
                type="number"
                id="itemPrice"
                name="price"
                className={`${styles.itemPrice} heading-S`}
                value={inputs.items[i].price || 0}
                onChange={(e) => handleItemChange(e, i)}
              />
            </label>
            <label htmlFor="itemTotal">
              Total
              <br />
              <input
                type="number"
                id="itemTotal"
                name="total"
                className={`${styles.itemTotal} heading-S`}
                disabled
                value={inputs.items[i].total || 0.0}
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
          className={`${styles.addItemBtn} heading-S-variant`}
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
            <button
              onClick={(e) => handleSubmit(e, "draft")}
              className={`${styles.draftBtn} heading-S-variant`}
            >
              Save as Draft
            </button>
            <button
              onClick={(e) => handleSubmit(e, "pending")}
              className={`${styles.saveBtn} heading-S-variant`}
            >
              Save & Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default InvoiceForm;
