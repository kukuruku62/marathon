import React from 'react'
import { Link } from "react-router-dom";
import styles from "./Stripe.module.scss";

import SuccessIcon from "../../assets/svg/success-icon.svg?react";

export const SuccessPayment = ({customerEmail}) => {
  return (
    <section id="success">
    <div className={styles.wrapper}>
      <SuccessIcon className={styles.wrapperIcon} />
      <div className={styles.textWrapper}>
        <p className={styles.textConfirm}>Ste boli zaregistrovaný ako účastník maratónu.</p>
        <p>
          Potvrdenie sme Vám poslali na Váš email:&nbsp;
          <span className={styles.email}> {customerEmail}</span>
        </p>
        <p>
          Ak máte nejaké otázky, kontaktujte nás:
          <Link className={styles.email} href="mailto:inf@stupavskymaraton.sk" target="_blank">
            <span>&nbsp;inf@stupavskymaraton.sk</span>
          </Link>
        </p>
      </div>
    </div>
  </section>
  )
}
