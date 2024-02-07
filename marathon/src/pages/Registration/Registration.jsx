import React, { useState } from "react";

import { useForm } from "react-hook-form";

import styles from "./Registration.module.scss";
import { useSingleEvent } from "../../hooks/useSingleEvent";
import { useParams } from "react-router-dom";

export const Registration = () => {
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
    addTimeStartEvent,
  } = useSingleEvent(id);

  // console.log(id, _id, name)
  const [modal, setModal] = useState(false);
  const [contentModal, setContentModal] = useState("");

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
    fetch("http://localhost:3002/api/auth/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        setContentModal(res.message);
        setModal(!modal);
      });

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
                maxLength: { value: 25, message: "Maximum 20 letters" },
                pattern: {
                  value: /^[A-Za-zČčŠšŽžÔôĽľÁáÄäÉéÍíÓóÖöÚúÝý]+$/i,
                  message: "Len písmená, minimálna dĺžka 3 znaky, maximálne 25",
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
                maxLength: { value: 25, message: "Maximum 20 letters" },
                pattern: {
                  value: /^[A-Za-zČčŠšŽžÔôĽľÁáÄäÉéÍíÓóÖöÚúÝý]+$/i,
                  message: "Len písmená, minimálna dĺžka 3 znaky, maximálne 25",
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
                maxLength: { value: 40, message: "Maximum 40 letters" },
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
          <select className={styles.input} {...register("distance", {required: true})}>
            <option value='' disabled selected>Vyberte dĺžku</option>
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
      {modal && (
        <div className={styles.overlay} onClick={toggleModal}>
          <div className={styles.modalContent}>
            <p>{contentModal}</p>

            <button className={styles.btnClose} onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
