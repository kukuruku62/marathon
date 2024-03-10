import { useParams, Link } from "react-router-dom";
import { useGetSingleEventQuery } from "../../redux/api.js";
import { MapOfEvent } from "../../components/MapOfEvent/MapOfEvent";
import { Sponsors } from "./Sponsors.jsx";
import { Item } from "./Item.jsx";
import { Categories } from "./Categories.jsx";
import { SkeletonBike } from "../../components/SkeletonBike/SkeletonBike.jsx";
import { Price } from "./Price.jsx";
import styles from "./SingleEvent.module.scss";


export const SingleEvent = () => {
  const { id } = useParams();
  const { data, isSuccess, isLoading} = useGetSingleEventQuery(id);
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
    addTimeStartEvent,
  } = { ...data };


  //ПРОВЕРИТЬ ЕСЛИ ДАННЫЕ БУДУТ ПУСТЫМИ

  return (
    <section className={styles.wrapper}>
      {isLoading && <SkeletonBike />}
      {isSuccess && (
        <>
          <div className={styles.content}>
            <h2 className={styles.title}>{name}</h2>
            <Link to={`/events/${_id}/registration`} className={styles.linkRegistration}>
              Registrácia
            </Link>

            {sponsorsEvent && <Sponsors sponsorsEvent={sponsorsEvent} />}

            <Link to={`/events/${_id}/participants`} className={styles.link}>
              <h3 className={styles.listParticipants}> Zoznam prihlásených účastníkov</h3>
            </Link>

            <ul className={styles.listItems}>
              <Item title="Miesto:" prop={place} />
              <Item title="Deň:" prop={dateOfEvent} additionalInfo={addDate} />
              <Item title="Čas:" prop={timeOfStartEvent} additionalInfo={addTimeStartEvent} />
              <Item title="Dĺžka trasy:" propArr={distances} measurement={measurement} />
              <Categories
                title="Kategórie:"
                categoriesMale={categoriesMale}
                categoriesFemale={categoriesFemale}
                additionalInfo={addCategories}
              />
              <Price title="Cena:" payments={payments} additionalInfo={addPayments} />
              <Item title="Registrácia:" propArr={registration} additionalInfo={addRegistration} />
              <Item title="Prezentácia:" propArr={presentation} additionalInfo={addPresentation} />
            </ul>
          </div>
          <MapOfEvent />
        </>
      )}
    </section>
  );
};
