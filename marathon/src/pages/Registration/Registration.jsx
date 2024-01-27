import React from "react";

import { useForm } from "react-hook-form";

import styles from "./Registration.module.scss";

export const Registration = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });

  const submit = (data) => {
    reset();
  };
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Registration</h2>
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
                // minLength: { value: 3, message: "Minimum 3 letters" },
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

        <input value="Odoslať" className={styles.inputSubmit} type="submit" disabled={!isValid} />
      </form>
    </section>
  );
};
