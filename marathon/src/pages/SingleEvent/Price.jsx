import React from "react";
import styles from "./SingleEvent.module.scss";

export const Price = ({ title, paymentsNew }) => {
  return (
    <ul className={styles.listItems}>
      <h3 className={styles.itemTitle}>{title}</h3>
      {paymentsNew && paymentsNew.map(({ paymentDate, price, _id }) => (
        <li key={_id} className={styles.itemText}>{`${new Date(paymentDate).toLocaleDateString()}: ${price}€`}</li>
      ))}
    </ul>
  );
};
