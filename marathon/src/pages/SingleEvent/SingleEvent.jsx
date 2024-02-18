import React from "react";
import { useSelector } from "react-redux";

import { useParams, Link } from "react-router-dom";
import styles from "./SingleEvent.module.scss";

import { MapOfEvent } from "../../components/MapOfEvent/MapOfEvent";
import { useSingleEvent } from "../../hooks/useSingleEvent";
import { Sponsors } from "./Sponsors.jsx";
import { Item } from "./Item.jsx";
import { Categories } from "./Categories.jsx";
import { SkeletonBike } from "../../components/SkeletonBike/SkeletonBike.jsx";


export const SingleEvent = () => {
  const status = useSelector((state) => state.events.status);
  const { id } = useParams();
  const { 
    _id,
    name,
    place,
    type,
    dateOfEvent,
    addDate,
    timeOfStartEvent,
    distances,
    measurement,
    startpoint,
    registration,
    addRegistration,
    presentation,
    addPresentation,
    payments,
    addPayments,
    addCategories,
    categoriesFemale,
    categoriesMale,
    sponsorsEvent,
    addTimeStartEvent } = useSingleEvent(id);

  //ПРОВЕРИТЬ ЕСЛИ ДАННЫЕ БУДУТ ПУСТЫМИ

  return (
    <section className={styles.wrapper}>
      {status === "loading" && <SkeletonBike />}
      {status === "resolved" &&
      <>
        <div className={styles.content}>
          <h2 className={styles.title}>{name}</h2>
          <Link to={`/events/${_id}/registration`} className={styles.linkRegistration} target="_blank"> Registrácia </Link>

          {sponsorsEvent && <Sponsors sponsorsEvent={sponsorsEvent} />}

          <Link to={`/events/${_id}/participants`} className={styles.linkParticipants} target="_blank">
            <h3>Zoznam prihlásených účastníkov</h3>
          </Link>

          <ul className={styles.listItems}>
            <Item title="Miesto:" prop={place} />
            <Item title="Deň:" prop={dateOfEvent} additionalInfo={addDate}/>
            <Item title="Čas:" prop={timeOfStartEvent} additionalInfo={addTimeStartEvent}/>
            <Item title="Dĺžka trasy:" propArr={distances} measurement={measurement} />
            <Categories title="Kategórie:" 
                                      categoriesMale={categoriesMale} 
                                      categoriesFemale={categoriesFemale} 
                                      additionalInfo={addCategories}/>
            <Item title="Cena:" propArr={payments} additionalInfo={addPayments}/>
            <Item title="Registrácia:" propArr={registration} additionalInfo={addRegistration}/>
            <Item title="Prezentácia:" propArr={presentation} additionalInfo={addPresentation}/>
          </ul>
        </div>
        <MapOfEvent />
      </>
      }
    </section>
  );
};
