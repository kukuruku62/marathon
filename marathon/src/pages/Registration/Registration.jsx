import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Registration.module.scss";
import { useSingleEvent } from "../../hooks/useSingleEvent";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addParticipant } from "../../redux/listEventsSlice";
import { CheckoutForm } from "../../components/Stripe/CheckoutForm";

export const Registration = () => {
  const dispatch = useDispatch();
  const participant = useSelector((state) => state.events.registeredParticipant);

  const { id } = useParams();
  const { _id, name, type, dateOfEvent, timeOfStartEvent, distances, measurement } = useSingleEvent(id);

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
      <article className={styles.titlesList}>
        <h1 className={styles.title}>Registrácia a plat'ba</h1>
        <div className={styles.listDescroptionEvent}>
          <h2 className={styles.subtitle}>{name}</h2>
          <ul>
            <li>
              <h3>Deň:</h3>
              <p>{dateOfEvent}</p>
            </li>
            <li>
              <h3>Čas:</h3>
              <p>{timeOfStartEvent}</p>
            </li>
            <li>
              <h3>Typ:</h3>
              <p>{type}</p>
            </li>
          </ul>
        </div>
      </article>
      <article className={styles.container}>
        {!participant && (
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

            <input
              value="Odoslať"
              className={styles.inputSubmit}
              type="submit"
              disabled={!isValid}
            />
          </form>
        )}
        {participant && <CheckoutForm />}
      </article>
    </section>
  );
};
