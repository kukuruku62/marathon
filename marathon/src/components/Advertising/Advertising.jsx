import React from "react";
import styles from "./Advertising.module.scss";
import logoSlovakia from "../../assets/img/logo-2.png";
import logoStupava from "../../assets/img/logo-stupava.png";
import logoBajkservis from "../../assets/img/logo_bajkservis_black.png";
import logoFaxCopy from "../../assets/img/logo-faxcopy.jpg";
import logoStrongPower from "../../assets/img/logo-strongPower.svg";
import logoSkoda from "../../assets/img/logo-skoda.svg";
import logoKrajn from "../../assets/img/logo-krajn.png";
import logoRoman from "../../assets/img/logo-romanTrofeys.png";

export const Advertising = () => {
  return (
    <section>
      <h2 className={styles.title}>Partners and sponsors:</h2>
      <div className={styles.wrapper}>
        <div className={styles.inner}>
          <a href="https://bratislavskykraj.sk">
            <img
              className={styles.img}
              target="_blank"
              src={logoSlovakia}
              alt="Picture of sponsor"
            />
          </a>
          <a href="https://www.stupava.sk" target="_blank">
            <img className={styles.img} src={logoStupava} alt="Picture of sponsor" />
          </a>
          <a href="https://bajkservis.sk">
            <img
              className={styles.img}
              target="_blank"
              src={logoBajkservis}
              alt="Picture of sponsor"
            />
          </a>
          <a href="https://www.faxcopy.sk">
            <img
              className={styles.img}
              target="_blank"
              src={logoFaxCopy}
              alt="Picture of sponsor"
            />
          </a>
          <a href="https://www.krajn.sk/">
            <img
              className={styles.img}
              target="_blank"
              src={logoKrajn}
              alt="Picture of sponsor"
            />
          </a>
          <a href="https://strongpower.sk">
            <img
              className={styles.img}
              target="_blank"
              src={logoStrongPower}
              alt="Picture of sponsor"
            />
          </a>
          <a href="https://skoda.sk">
            <img
              className={styles.img}
              target="_blank"
              src={logoSkoda}
              alt="Picture of sponsor"
            />
          </a>
          <a href="https://roman74.sk">
            <img
              className={styles.img}
              target="_blank"
              src={logoRoman}
              alt="Picture of sponsor"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
