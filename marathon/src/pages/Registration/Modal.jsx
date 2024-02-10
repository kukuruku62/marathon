import React from "react";

import styles from "./Registration.module.scss";

export const Modal = ({ toggleModal, statusResponse }) => {

  return (
    <div className={styles.overlay} onClick={toggleModal}>
      <div className={styles.modalContent}>
        <p>{statusResponse}</p>
        <button className={styles.btnClose} onClick={toggleModal}>
          Close
        </button>
      </div>
    </div>
  );
};
