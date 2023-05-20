import React from "react";
import Image from "next/image";
import EmptyImg from "@/assets/illustration-empty.svg";
import styles from "@/styles/Empty.module.css";
function Empty() {
  return (
    <div className={styles.container}>
      <Image alt="empty invoices" src={EmptyImg} priority></Image>
      <h2 className="heading-M">There is nothing here</h2>
      <p className="body-font">
        Create an invoice by clicking the <strong>New Invoice</strong> button
        and get started
      </p>
    </div>
  );
}

export default Empty;
