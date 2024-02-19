import React from "react";

import { Link } from "react-router-dom";

import styles from "./SingleEvent.module.scss";

export const Sponsors = ({ sponsorsEvent }) => {
  return (
    <article className={styles.wrapperSponsors}>
      <h3 className={styles.titleAdv}>Sponzori a partneri:</h3>
      <ul className={styles.advertising}>
        {sponsorsEvent.map(({ _id, linkSite, linkImage }) => (
          <li key={_id}>
            <Link to={linkSite} target="_blank">
              <img className={styles.sponsorImg} src={linkImage} />
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
};
