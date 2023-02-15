import React, { useContext } from 'react'
import TodosCreateForm from '../../components/forms/TodosCreateForm';
import TodosUpdateForm from '../../components/forms/TodosUpdateForm';
import { TodosContext } from '../../providers/TodosContext';
import { UserContext } from '../../providers/UserContext'

const ProfilePage = () => {
  const { user, userLogout } = useContext(UserContext);
  const { editingNote, todos, todosRemove, setEditingNote } = useContext(TodosContext);

  return (
    <div>
      <header>
        <button onClick={() => userLogout()}>Sair</button>
      </header>
      <main>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </main>

      {editingNote ? <TodosUpdateForm />: null}

      <TodosCreateForm />

      <div>
        {todos.length > 0 ? (
          <ul>
            {todos.map(todo => (
              <li key={todo._id}>
                <h3>{todo.title}</h3>
                <p>{todo.content}</p>
                <p>{todo.category}</p>
                <button onClick={() => setEditingNote(todo)}>Editar</button>
                <button onClick={() => todosRemove(todo._id)}>Remover</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nenhuma nota foi cadastrada ainda</p>
        )}
      </div>
    </div>
  )
}

export default ProfilePage