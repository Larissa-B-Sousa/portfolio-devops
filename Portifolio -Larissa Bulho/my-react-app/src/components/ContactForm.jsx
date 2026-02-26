import { useForm } from "react-hook-form";
import React from 'react';
import '../styles/contactform.css';  


function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <h4>Se gostou de algum serviço, deixe seu nome e e-mail para que possamos entrar em contato</h4>
      <input
        {...register("name", { required: "Nome é obrigatório" })}
        placeholder="Seu Nome"
      />
      {errors.name && <p>{errors.name.message}</p>}

      <input
        {...register("email", {
          required: "Email é obrigatório",
          pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
        })}
        placeholder="Seu Email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Enviar</button>
    </form>
  );
}

export default ContactForm;

