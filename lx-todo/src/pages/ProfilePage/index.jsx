import React, { useContext } from 'react'
import { UserContext } from '../../providers/UserContext'

const ProfilePage = () => {
  const { user, userLogout } = useContext(UserContext);

  return (
    <div>
      <header>
        <button onClick={() => userLogout()}>Sair</button>
      </header>
      <main>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </main>
    </div>
  )
}

export default ProfilePage