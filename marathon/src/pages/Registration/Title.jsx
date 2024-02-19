import React from 'react'
import styles from "./Registration.module.scss";

export const Title = ({name, dateOfEvent, timeOfStartEvent, type}) => {
  return (
    <article className={styles.titlesList}>
    <h1 className={styles.title}>Registrácia a plat'ba</h1>
    <div className={styles.listDescroptionEvent}>
      <h2 className={styles.subtitle}>{name}</h2>
      <ul>
        <li>
          <h3>Deň:</h3>
          <p>{dateOfEvent}</p>
        </li>
        <li>
          <h3>Čas:</h3>
          <p>{timeOfStartEvent}</p>
        </li>
        <li>
          <h3>Typ:</h3>
          <p>{type}</p>
        </li>
      </ul>
    </div>
  </article>
  )
}
