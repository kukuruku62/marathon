import React from "react";

import styles from "./SingleEvent.module.scss"

export const Item = ({title, prop, additionalInfo, propArr, measurement, isPartOfCategory}) => {
  return (
    <ul className={styles.item}>
      {!isPartOfCategory && <h3 className={styles.itemTitle}>{title}</h3>}
      {isPartOfCategory && <h4 className={styles.itemTitleCategory}>{title}</h4>}
      {prop && <li className={styles.itemText}>{prop}</li>}
      {propArr && measurement && propArr.map((item, index) => <li className={styles.itemText} key={index}>{`${item} ${measurement}.`}</li>)}
      {propArr && !measurement && propArr.map((item, index) => <li className={styles.itemText} key={index}>{`${item}.`}</li>)}
      {additionalInfo && <li className={styles.itemText}>{`* ${additionalInfo}`}</li>}
    </ul>
  );
};
