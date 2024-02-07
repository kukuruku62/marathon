import React from "react";

import styles from "./SingleEvent.module.scss"

export const Item = ({title, prop, additionalInfo, propArr, measurement, isPartOfCategory}) => {
  return (
    <li className={styles.item}>
      {!isPartOfCategory && <h3 className={styles.itemTitle}>{title}</h3>}
      {isPartOfCategory && <h4 className={styles.itemTitleCategory}>{title}</h4>}
      {prop && <p className={styles.itemText}>{prop}</p>}
      {/* {propArr && !measurement && propArr.map((item, index) => <p className={styles.itemText} key={index}>{item}</p>)} */}
      {propArr && propArr.map((item, index) => <p className={styles.itemText} key={index}>{`${item} ${measurement}.`}</p>)}
      {additionalInfo && <p className={styles.itemText}>{`* ${additionalInfo}`}</p>}
    </li>
  );
};
