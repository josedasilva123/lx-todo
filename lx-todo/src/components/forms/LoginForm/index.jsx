import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../../providers/UserContext';

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const { register, handleSubmit, reset } = useForm();

  const submit = (formData) => {
    userLogin(formData);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder="Seu e-mail" {...register("email")} />
        <input type="password" placeholder="Sua senha" {...register("password")} />
        <button type="submit">Entrar</button>
    </form>
  )
}

export default LoginForm