import React from "react";
import styles from "./Skeleton.module.css";

export const Skeleton = ({message}) => {
  return (
    <div className={styles.skeleton}>
      <span>{message}</span>
    </div>
  );
};
