import React from 'react'

const LoginForm = () => {
  return (
    <form>
        <input type="text" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha" />
        <button type="submit">Entrar</button>
    </form>
  )
}

export default LoginForm