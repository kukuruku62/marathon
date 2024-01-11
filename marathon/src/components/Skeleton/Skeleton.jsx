import React from "react";
import styles from "./Skeleton.module.css";

export const Skeleton = () => {
  return (
    <div className={styles.skeleton}>
      <span>Loading...</span>
    </div>
  );
};
