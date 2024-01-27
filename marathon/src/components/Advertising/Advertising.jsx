import React from "react";
import styles from "./Advertising.module.scss";


export const Advertising = ({listMainSponsors}) => {

  return (
    <section>
      <div className={styles.wrapperSponsors}>
          <h2 className={styles.titleAdv}>Sponsors and partners:</h2>
          <ul className={styles.advertising}>
            {listMainSponsors &&
              listMainSponsors.map(({ linkSite, linkImage }, index) => (
                <li key={index}>
                  <a href={linkSite} target="_blank">
                    <img className={styles.sponsorImg} src={linkImage} />
                  </a>
                </li>
              ))}
          </ul>
        </div>
    </section>
  );
};
