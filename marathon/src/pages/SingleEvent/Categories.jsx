import React from "react";

import styles from "./SingleEvent.module.scss";
import { Item } from "./Item";

export const Categories = ({ title, categoriesMale, categoriesFemale, additionalInfo }) => {
  return (
    <ul className={styles.item}>
      <h3 className={styles.itemTitle}>{title}</h3>
      {categoriesMale && <Item title="Muži:" propArr={categoriesMale} isPartOfCategory={true} />}
      {categoriesFemale && <Item title="Ženy:" propArr={categoriesFemale} isPartOfCategory={true}/>}
      {additionalInfo && <p className={styles.itemText}>{`* ${additionalInfo}`}</p>}
    </ul>
  );
};
