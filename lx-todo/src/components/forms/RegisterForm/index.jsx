import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { UserContext } from '../../../providers/UserContext';

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const { register, handleSubmit, reset } = useForm();

  const submit = (formData) => {
    userRegister(formData);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder="Seu nome" {...register("name")} />
        <input type="email" placeholder="Seu e-mail" {...register("email")} />
        <input type="password" placeholder="Crie uma senha" {...register("password")} />
        <button type="submit">Cadastrar</button>
    </form>
  )
}

export default RegisterForm