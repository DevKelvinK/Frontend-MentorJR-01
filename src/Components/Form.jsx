import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

import styles from "./Form.module.css";

export function Form() {
  const schema = object({
    email: string().required("Required field").email("Check your email please"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function Validate(data) {
    const input = document.querySelector("input");

    input.value = "";
    console.log("Formulário Enviado! (Form Sent!)");
    console.log(`Email: ${data.email}`);
  }

  return (
    <form className={styles.form}>
      <input type="email" {...register("email")} />

      <button type="submit" onClick={handleSubmit(Validate)}>
        Subscribe
      </button>
      <span className={styles.error}>{errors?.email?.message}</span>
    </form>
  );
}
