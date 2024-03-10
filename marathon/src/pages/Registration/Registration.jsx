import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addParticipant } from "../../redux/listEventsSlice";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useGetSingleEventQuery } from "../../redux/api";
import { CheckoutForm } from "../../components/Stripe/CheckoutForm";
import { SkeletonBike } from "../../components/SkeletonBike/SkeletonBike";
import { Title } from "./Title";

import styles from "./Registration.module.scss";


export const Registration = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {data, isLoading, isSuccess} = useGetSingleEventQuery(id);
  const { _id, name, type, dateOfEvent, timeOfStartEvent, distances, measurement } = {...data};
  const registeredParticipant = useSelector((state) => state.events.registeredParticipant);
  const formatedDate = new Date(dateOfEvent).toLocaleDateString();
  

  useEffect(() => {
    return () => {
      dispatch(addParticipant(null))
    }
  }, [dispatch])

  
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });

  const submit = (data) => {
    dispatch(addParticipant({ _id, name, ...data }));
    reset();
  };

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Registrácia a plat'ba</h2>
      {isLoading && <SkeletonBike />}
      {isSuccess && <Title name={name} dateOfEvent={formatedDate} timeOfStartEvent={timeOfStartEvent} type={type}/>}
      <article className={styles.container}>
        {!registeredParticipant && (
          <form className={styles.formWrapper} onSubmit={handleSubmit(submit)}>
            <h4>*Po vyplnení a odoslaní formulára budete presmerovaní na platobnú stránku.</h4>
            <div>
              <label className={styles.fieldWrapper}>
                Meno:
                <input
                  className={styles.input}
                  type="text"
                  {...register("firstName", {
                    required: "Povinné pole",
                    minLength: { value: 3, message: "Minimum 3 letters" },
                    maxLength: { value: 50, message: "Maximum 50 letters" },
                    pattern: {
                      value: /^[a-zA-ZáäčďéíĺľňóôŕšťúýžÁÄČĎÉÍĽĹŇÓÔŔŠŤÚÝŽ ]+$/i,
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
                    maxLength: { value: 50, message: "Maximum 50 letters" },
                    pattern: {
                      value: /^[a-zA-ZáäčďéíĺľňóôŕšťúýžÁÄČĎÉÍĽĹŇÓÔŔŠŤÚÝŽ ]+$/i,
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
                {errors?.age && (
                  <p className={styles.textError}>{errors?.age?.message || "Error!"}</p>
                )}
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
                      message: "vo formate: example@example.com",
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
              <select
                className={styles.input}
                {...register("distance", { required: true })}
                defaultValue=""
              >
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

            <input
              value="Odoslať"
              className={styles.inputSubmit}
              type="submit"
              disabled={!isValid}
            />
          </form>
        )}
        {registeredParticipant && <CheckoutForm />}
      </article>
    </section>
  );
};
