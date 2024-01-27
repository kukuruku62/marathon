import React, { useEffect } from "react";
// import { Advertising } from "../components/Advertising/Advertising.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./SingleEvent.module.scss";
import { fetchSingleEvent } from "../../store/singleEventSlice";
import { Event } from "../Event";

export const SingleEvent = () => {
  const event = useSelector((state) => state.event.event);
  const categories = useSelector((state) => state.event.categories);
  const { id } = useParams();
  const dispatch = useDispatch();

  const ListCategories = ({ keyCategory, valuesCategory }) => (
    <ul className={styles.listCategory}>
      <li className={styles.genderCategory}>
        <p className={styles.itemText}>{keyCategory} :</p>
      </li>
      {Object.entries(valuesCategory).map(([key, value]) => (
        <li className={styles.itemCategory} key={key}>
          <p className={styles.itemText}>{`${key}: ${value}`}</p>
        </li>
      ))}
    </ul>
  );

  useEffect(() => {
    dispatch(fetchSingleEvent(id));
  }, [id]);
  //ПРОВЕРИТЬ ЕСЛИ ДАННЫЕ БУДУТ ПУСТЫМИ
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
          <h2 className={styles.title}>{event.name}</h2>
    

        <div className={styles.wrapperSponsors}>
          <h2 className={styles.titleAdv}>Sponsors and partners:</h2>
          <ul className={styles.advertising}>
            {event.sponsors &&
              event.sponsors.map(({ linkSite, linkImage }, index) => (
                <li key={index}>
                  <a href={linkSite} target="_blank">
                    <img className={styles.sponsorImg} src={linkImage} />
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <ul className={styles.listItems}>
          <li className={styles.item}>
            <h4 className={styles.itemTitle}>Place of event:</h4>
            <p className={styles.itemText}>{event.place}</p>
          </li>

          <li className={styles.item}>
            <h4 className={styles.itemTitle}>Date of event:</h4>
            <div className={styles.wrapperInfoBlock}>
              <p className={styles.itemText}>{event.date}</p>
              {event.addDate ? <p className={styles.itemText}>{`* ${event.addDate}`}</p> : null}
            </div>
          </li>

          <li className={styles.item}>
            <h4 className={styles.itemTitle}>Time of event:</h4>
            <div className={styles.wrapperInfoBlock}>
              <p className={styles.itemText}>{event.time}</p>
              {event.addTime ? <p className={styles.itemText}>{`* ${event.addTime}`}</p> : null}
            </div>
          </li>

          <li className={styles.item}>
            <h4 className={styles.itemTitle}>Categories:</h4>
            <div className={styles.wrapperInfoBlock}>
              <div className={styles.wrapperListsCategory}>
                {Object.entries(categories).map(([keyCategory, valuesCategory]) => (
                  <ListCategories
                    key={keyCategory}
                    keyCategory={keyCategory}
                    valuesCategory={valuesCategory}
                  />
                ))}
              </div>
              {event.addCategories ? (
                <p className={styles.itemText}>{`* ${event.addCategories}`}</p>
              ) : null}
            </div>
          </li>
          <li className={styles.item}>
            <h4 className={styles.itemTitle}>Price:</h4>
            <div className={styles.wrapperInfoBlock}>
              {event.payments && event.payments.map((price, index) => (
                <p  key={index} className={styles.itemText}>{price}</p>
              ))}
              {event.addPayments ? (
                <p className={styles.itemText}>{`* ${event.addPayments}`}</p>
              ) : null}
            </div>
          </li>
          <li className={styles.item}>
            <h4 className={styles.itemTitle}>Registration:</h4>
            {event.registration &&
              event.registration.map((elem, index) => (
                <p key={index} className={styles.itemText}>
                  {elem}
                </p>
              ))}
            {event.addRegistration ? (
              <p className={styles.itemText}>{`* ${event.addRegistration}`}</p>
            ) : null}
          </li>
          <li className={styles.item}>
            <h4 className={styles.itemTitle}>Presentation:</h4>
            {event.presentation &&
              event.presentation.map((elem, index) => (
                <p key={index} className={styles.itemText}>
                  {elem}
                </p>
              ))}
            {event.addPresentation ? (
              <p className={styles.itemText}>{`* ${event.addPresentation}`}</p>
            ) : null}
          </li>
        </ul>
      </div>
      <Event />
    </div>
  );
};
