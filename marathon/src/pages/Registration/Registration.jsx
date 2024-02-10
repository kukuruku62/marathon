import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createPortal } from "react-dom";
import styles from "./Registration.module.scss";
import { useSingleEvent } from "../../hooks/useSingleEvent";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddNewParticipant } from "../../redux/listEventsSlice";
import { Modal } from "./Modal";

export const Registration = () => {

  const dispatch = useDispatch();
  const messageResponse = useSelector((state) => state.events.messageResponse);

  const [modal, setModal] = useState(false);

  const { id } = useParams();
  const {
    _id,
    name,
    place,
    type,
    dateOfEvent,
    timeOfStartEvent,
    distances,
    measurement,
    payments,
  } = useSingleEvent(id);



  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });

  const submit = (data) => {
    dispatch(fetchAddNewParticipant({ id, data }));
    console.log(statusResponse)
    setModal(!modal);
    reset();
  };

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>Registrácia</h1>
      <div className={styles.listItems}>
        <h2 className={styles.subtitle}>{name}</h2>
        <ul>
          <li>
            Deň:<h3>{dateOfEvent}</h3>
          </li>
          <li>
            Čas:
            <h3>{timeOfStartEvent}</h3>
          </li>
          <li>
            Typ:
            <h3>{type}</h3>
          </li>
        </ul>
      </div>

      <form className={styles.formWrapper} onSubmit={handleSubmit(submit)}>
        <div>
          <label className={styles.fieldWrapper}>
            Meno:
            <input
              className={styles.input}
              type="text"
              {...register("firstName", {
                required: "Povinné pole",
                minLength: { value: 3, message: "Minimum 3 letters" },
                maxLength: { value: 25, message: "Maximum 30 letters" },
                pattern: {
                  value: /^[A-Za-zČčŠšŽžÔôĽľÁáÄäÉéÍíÓóÖöÚúÝý]+$/i,
                  message: "Len písmená, minimálna dĺžka 3 znaky, maximálne 30",
                },
              })}
            />
          </label>
          <div>
            {errors?.firstName && (
              <p className={styles.textError}>{errors?.firstName?.message || "Error!"}</p>
            )}
          </div>
        </div>

        <div>
          <label className={styles.fieldWrapper}>
            Priezvisko:
            <input
              className={styles.input}
              type="text"
              {...register("lastName", {
                required: "Povinné pole",
                minLength: { value: 3, message: "Minimum 3 letters" },
                maxLength: { value: 25, message: "Maximum 30 letters" },
                pattern: {
                  value: /^[A-Za-zČčŠšŽžÔôĽľÁáÄäÉéÍíÓóÖöÚúÝý]+$/i,
                  message: "Len písmená, minimálna dĺžka 3 znaky, maximálne 30",
                },
              })}
            />
          </label>
          <div>
            {errors?.lastName && (
              <p className={styles.textError}>{errors?.lastName?.message || "Error!"}</p>
            )}
          </div>
        </div>

        <div>
          <label className={styles.fieldWrapper}>
            Vek na začiatok štartu:
            <input
              className={styles.input}
              type="text"
              {...register("age", {
                required: "Povinné pole",
                minLength: { value: 1, message: "Maximálne jedno číslo" },
                maxLength: { value: 2, message: "Maximálne dve čísla" },
                pattern: {
                  value: /^\d{1,2}$/,
                  message: "Len čísla",
                },
              })}
            />
          </label>
          <div>
            {errors?.age && <p className={styles.textError}>{errors?.age?.message || "Error!"}</p>}
          </div>
        </div>

        <div>
          <label className={styles.fieldWrapper}>
            e-mail:
            <input
              className={styles.input}
              type="email"
              {...register("email", {
                required: "Povinné pole",
                maxLength: { value: 100, message: "Maximum 100 letters" },
                pattern: {
                  value:
                    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/,
                  message: "example@example.com",
                },
              })}
            />
          </label>
          <div>
            {errors?.email && (
              <p className={styles.textError}>{errors?.email?.message || "Error!"}</p>
            )}
          </div>
        </div>
        <div className={styles.wrapperRadioBtns}>
          <label className={styles.radioWrapper}>
            <input
              type="radio"
              value="Muž"
              name="gender"
              {...register("gender", {
                required: true,
              })}
            />
            Muž
          </label>
          <label className={styles.radioWrapper}>
            <input
              type="radio"
              value="Žena"
              name="gender"
              {...register("gender", {
                required: true,
              })}
            />
            Žena
          </label>
          <div>
            {errors?.gender && (
              <p className={styles.textError}>{errors?.gender?.message || "Error!"}</p>
            )}
          </div>
        </div>
        <label className={styles.fieldWrapper}>
          Dĺžka trasy:
          <select className={styles.input} {...register("distance", { required: true })}>
            <option value="" disabled>
              Vyberte dĺžku
            </option>
            {distances &&
              distances.map((distance, index) => (
                <option
                  value={`${distance} ${measurement}`}
                  key={index}
                >{`${distance} ${measurement}.`}</option>
              ))}
          </select>
        </label>

        <input value="Odoslať" className={styles.inputSubmit} type="submit" disabled={!isValid} />
      </form>

      {modal &&
        createPortal(
          <Modal toggleModal={toggleModal} messageResponse={messageResponse} />, document.body
        )}
    </section>
  );
};
