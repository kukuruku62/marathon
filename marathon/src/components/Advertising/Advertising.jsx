import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchImagesMainSponsors } from "../../redux/mainSponsorsSlice.js";
import styles from "./Advertising.module.scss";

export const Advertising = () => {
  const dispatch = useDispatch();
  const fetchStatus = useSelector((state) => state.imagesSponsors.fetchStatus);
  const arrImages = useSelector((state) => state.imagesSponsors.arrImages);

  useEffect(() => {
    dispatch(fetchImagesMainSponsors());
  }, [dispatch]);

  return (
    <>
      {fetchStatus === "resolved" && arrImages.length > 0 && (
        <section className={styles.wrapper}>
          <div className={styles.inner}>
            <h2 className={styles.title}>Sponsors and partners:</h2>
             <ul className={styles.advertising}>
              { arrImages.map(({_id, linkImage, linkSite}) => 
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
