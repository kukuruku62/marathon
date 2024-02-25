import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

import InstagramIcon from "../../assets/svg/instagram.svg?react";
import FacebookIcon from "../../assets/svg/facebook.svg?react";
import StravaIcon from "../../assets/svg/strava.svg?react";
import VisaIcon from "../../assets/svg/visa.svg?react";
import MastercardIcon from "../../assets/svg/mastercard.svg?react";
import StripeIcon from "../../assets/svg/stripe.svg?react";


export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <div className={styles.contacts}>
            <div className={styles.social}>
              <Link
                to="https://www.facebook.com/mtbmaraton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className={styles.facebook} />
              </Link>
              <Link 
                to="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer">
                <InstagramIcon className={styles.instagram} />
              </Link>
              <Link 
                to="https://www.strava.com" 
                target="_blank" 
                rel="noopener noreferrer">
                <StravaIcon className={styles.strava} />
              </Link>
            </div>
            <ul className={styles.listEmails}>
              <li className={styles.nameEmail}>
                <p className={styles.title}>Organizátor:</p>
                <Link
                  className={styles.itemText}
                  href="mailto:inf@stupavskymaraton.sk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  inf@stupavskymaraton.sk
                </Link>
              </li>
              <li className={styles.nameEmail}>
                <p className={styles.title}>Registrácia:</p>
                <Link
                  className={styles.itemText}
                  href="mailto:luca@stupavskymaraton.sk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  luca@stupavskymaraton.sk
                </Link>
              </li>
            </ul>
            <ul className={styles.cards}>
              <li className={styles.card}><VisaIcon /></li>
              <li className={styles.card}><MastercardIcon /></li>
              <li className={styles.card}><StripeIcon /></li>
            </ul>
          </div>
          <div className={styles.listOrganizers}>
            <ul className={styles.organizer}>
              <li>
                <h3 className={styles.title}>Organizátor:</h3>
              </li>
              <li className={styles.itemText}>Bikeservis s.r.o</li>
              <li className={styles.itemText}>Stupava 821 11</li>
              <li className={styles.itemText}>Mytna 15D</li>
              <li className={styles.itemText}>0999 999 999</li>
              <li className={styles.itemText}>bikeservis@gmail.com</li>
            </ul>
            <ul className={styles.organizer}>
              <li>
                <h3 className={styles.title}>Občianske združenie Maratón:</h3>
              </li>
              <li className={styles.itemText}>Štúrova 50</li>
              <li className={styles.itemText}>Marianka 900 33</li>
              <li className={styles.itemText}>IČO: 36075612</li>
              <li className={styles.itemText}>DIČ: 2022156675</li>
            </ul>
            <ul className={styles.organizer}>
              <li>
                <h3 className={styles.title}>Štartovné:</h3>
              </li>
              <li className={styles.itemText}>Bank of America</li>
              <li className={styles.itemText}>SWIFT: FIOZSKBAXXX</li>
              <li className={styles.itemText}>SK03 8330 0000 0036 0060 6996</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
