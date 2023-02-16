import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../../providers/UserContext';
import InputPassword from '../InputPassword';

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
        <InputPassword id="password" placeholder="Sua senha" register={register("password")} />
        <button type="submit">Entrar</button>
    </form>
  )
}

export default LoginForm