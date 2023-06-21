import React from "react";
import styles from "@/styles/InvoiceView.module.css";

function ItemInfo({ items, total }) {
  return (
    <div className={styles.itemContainer}>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>QTY.</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        {items.map((item, i) => (
          <tr key={`item#${i}`}>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>${item.price}</td>
            <td>${item.total}</td>
          </tr>
        ))}
      </table>
      <div className={styles.itemTotal}>
        <p>Amount Due</p>
        <p>${total.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default ItemInfo;
