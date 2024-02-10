import React from "react";

import { SkeletonBike } from "../../components/SkeletonBike/SkeletonBike";
import { useSingleEvent } from "../../hooks/useSingleEvent";

import styles from "./Participants.module.scss";
import { useParams } from "react-router-dom";

export const Participants = () => {
  const { id } = useParams();
  const { participants } = useSingleEvent(id);

  // TODO: ADD CASE ERROR!!!!!!!!!!!!!!!
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <h2 className={styles.title}>Zoznam prihlásených účastníkov:</h2>
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
