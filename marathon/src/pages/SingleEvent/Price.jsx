import React from "react";
import styles from "./SingleEvent.module.scss";

export const Price = ({ title, payments, additionalInfo }) => {
  return (
    <ul className={styles.listItems}>
      <h3 className={styles.itemTitle}>{title}</h3>
      {payments &&
        payments.map(({ paymentDate, price, _id }) => (
          <li key={_id} className={styles.itemText}>{`${new Date(
            paymentDate
          ).toLocaleDateString()}: ${price}€`}</li>
        ))}
      {additionalInfo  && <li className={styles.itemText}>{`* ${additionalInfo}`}</li>}
    </ul>
  );
};
