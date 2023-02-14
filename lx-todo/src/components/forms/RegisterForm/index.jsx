import React from 'react'

const RegisterForm = () => {
  return (
    <form>
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Crie uma senha" />
        <button type="submit">Cadastrar</button>
    </form>
  )
}

export default RegisterForm