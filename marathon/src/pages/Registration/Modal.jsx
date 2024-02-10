import React from "react";

import styles from "./Registration.module.scss";

export const Modal = ({ toggleModal, messageResponse }) => {

  return (
    <div className={styles.overlay} onClick={toggleModal}>
      <div className={styles.modalContent}>
        <p>{messageResponse}</p>
        <button className={styles.btnClose} onClick={toggleModal}>
          Close
        </button>
      </div>
    </div>
  );
};
