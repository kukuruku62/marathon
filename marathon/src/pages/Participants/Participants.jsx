import React from "react";
import { useParams } from "react-router-dom";

import { SkeletonBike } from "../../components/SkeletonBike/SkeletonBike";
import { useSingleEvent } from "../../hooks/useSingleEvent";

import styles from "./Participants.module.scss";


export const Participants = () => {
  const { id } = useParams();
  const { name, participants, status } = useSingleEvent(id);

  // TODO: ADD CASE ERROR!!!!!!!!!!!!!!!
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {status === "loading" && <SkeletonBike/>}
        {status === "resolved" && 
          <>
            <h2 className={styles.title}>{name}</h2>
            <h3 className={styles.subtitle}>Registrovaní účastníci:</h3>
            <ul className={styles.list}>
              {participants.map(({ _id, firstName, lastName, distance }, index) => (
                <li className={styles.itemList} key={_id}>{`${index + 1 + "."} ${firstName} ${lastName}, distance: ${distance}`}</li>
              ))}
            </ul>
          </>
        }
      </div>
    </section>
  );
};
