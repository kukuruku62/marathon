import React from "react";
import styles from "./Footer.module.scss";
import { IconFb } from "../IconFb/IconFb";


export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <section className={styles.content}>
          {/* <h2 className={styles.title}>Kontakt</h2> */}
          <div className={styles.mailContainer}>
            <div className={styles.mailItem}>
              <p className={styles.name}>Organizátor: BJKSERVIS</p>
              <a className={styles.mailto} target="_blank" href="mailto:inf@stupavskymaraton.sk">
                inf@stupavskymaraton.sk
              </a>
            </div>
            <a href="https://www.facebook.com/mtbmaraton" target="_blank"><IconFb/></a>
            <div className={styles.mailItem}>
              <p className={styles.name}>Registrácia: Lucia Jánošíková</p>
              <a className={styles.mailto} target="_blank" href="mailto:luca@stupavskymaraton.sk">
                luca@stupavskymaraton.sk
              </a>
            </div>
          </div>
          <div className={styles.text}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Občianske združenie Maratón</h3>
              <p className={styles.columnItem}>Štúrova 50</p>
              <p className={styles.columnItem}>900 33 Marianka</p>
              <p className={styles.columnItem}>IČO: 36075612</p>
              <p className={styles.columnItem}>DIČ: 2022156675</p>
              <p className={styles.columnItem}>Zaregistrované MV SR č.s. VVS/1-900/90-25396</p>
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Štartovné:</h3>
              <p className={styles.columnItem}>Číslo účtu pre EUR: 360 060 6996/8330</p>
              <p className={styles.columnItem}>IBAN: SK03 8330 0000 0036 0060 6996</p>
              <p className={styles.columnItem}>SWIFT / BIC: FIOZSKBAXXX</p>
              <h3 className={styles.columnTitle}>Príspevky:</h3>
              <p className={styles.columnItem}>Číslo účtu: 2633076182/1100</p>
              <p className={styles.columnItem}>IBAN: SK90 1100 0000 0026 3307 6182</p>
              <p className={styles.columnItem}>SWIFT / BIC: TATRSKBX</p>
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>V spolupráci s:</h3>
              <p className={styles.columnItem}>TROPHY AGENCY s.r.o.</p>
              <p className={styles.columnItem}>Štúrova 50</p>
              <p className={styles.columnItem}>IČO: 46011421</p>
              <p className={styles.columnItem}>IČO DPH: SK2023190499:</p>
              <p className={styles.columnItem}>DIČ: 2023190499</p>
              <p className={styles.columnItem}>IBAN: SK15 1100 0000 0029 2085 1624</p>
              <p className={styles.columnItem}>Č.U: 2920851624/1100</p>
              
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};
