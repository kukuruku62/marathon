import { useRouteError } from "react-router-dom";
import styles from "./ErrorPage.module.scss"

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div id="error-page" className={styles.wrapper}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
