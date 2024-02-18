import React from "react";
import { useSelector } from "react-redux";

import { SkeletonBike } from "../../components/SkeletonBike/SkeletonBike";
import { useSingleEvent } from "../../hooks/useSingleEvent";

import styles from "./Participants.module.scss";
import { useParams } from "react-router-dom";

export const Participants = () => {
  const status = useSelector((state) => state.events.status);
  const { id } = useParams();
  const { name, participants } = useSingleEvent(id);

  // TODO: ADD CASE ERROR!!!!!!!!!!!!!!!
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {status === "loading" && <SkeletonBike />}
        {name && <h2 className={styles.title}>{name}</h2>}
        <h3 className={styles.subtitle}>Registrovaní účastníci:</h3>
        {participants && (
          <ul className={styles.list}>
            {participants.map(({ _id, firstName, lastName, distance }, index) => (
              <li className={styles.itemList} key={_id}>{`${index + 1 + "."} ${firstName} ${lastName}, distance: ${distance}`}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};
