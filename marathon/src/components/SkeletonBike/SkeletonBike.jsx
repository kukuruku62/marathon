import React from "react";
import styles from "./SkeletonBike.module.scss";
import BikeSkeleton from "../../assets/svg/bike.svg?react";

export const SkeletonBike = () => {
  return (
    <div className={styles.wrapper}>
      <BikeSkeleton className={styles.bike}/>
      <h2 className={styles.title}>Loading...</h2>
    </div>
  );
};
