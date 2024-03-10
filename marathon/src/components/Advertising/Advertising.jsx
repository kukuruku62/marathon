import React from "react";
import { Link } from "react-router-dom";
import { useGetAllEventsQuery } from "../../redux/api";
import styles from "./Advertising.module.scss";


export const Advertising = () => {

  const {data, isSuccess} = useGetAllEventsQuery(undefined, {
    selectFromResult: (result) => ({
      isSuccess: result?.isSuccess,
      data: result?.data?.advertisingData
    })
  });


  return (
    <>
      {isSuccess && (
        <section className={styles.wrapper}>
          <div className={styles.inner}>
            <h2 className={styles.title}>Sponsors and partners:</h2>
             <ul className={styles.advertising}>
              { data.map(({_id, linkImage, linkSite}) => 
                <li key={_id}>
                  <Link to={linkSite} target="_blank" rel="noopener noreferrer">
                    <img className={styles.sponsorImg} src={linkImage} alt="Picture of the sponsor" />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </section>
      )}
    </>
  );
};
