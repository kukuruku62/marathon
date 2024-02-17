import React from "react";

import { SkeletonBike } from "../../components/SkeletonBike/SkeletonBike";
import { useSingleEvent } from "../../hooks/useSingleEvent";

import styles from "./Participants.module.scss";
import { useParams } from "react-router-dom";

export const Participants = () => {
  const { id } = useParams();
  const { name, participants } = useSingleEvent(id);

  // TODO: ADD CASE ERROR!!!!!!!!!!!!!!!
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {name && <h2 className={styles.title}>{name}</h2>}
        <h3 className={styles.subtitle}>Registrovaní účastníci:</h3>
        {/* {statusFetch === "loading" && <SkeletonBike />} */}
        {participants && (
          <ul className={styles.list}>
            {participants.map(({ _id, firstName, lastName, distance }, index) => (
              <li className={styles.itemList} key={_id}>{`${ index + 1 + "." } ${firstName} ${lastName}, distance: ${distance}`}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
