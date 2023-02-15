import { useContext } from "react";
import { useForm } from "react-hook-form"
import { TodosContext } from "../../../providers/TodosContext";

const TodosCreateForm = () => {
  const { register, handleSubmit } = useForm();
  const { todosCreate } = useContext(TodosContext);

  const submit = (formData) => {
    todosCreate(formData);
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
        <h2>Cadastre uma nota:</h2>
        <input type="text" {...register("title")} placeholder="Título"/>
        <input type="text" {...register("content")} placeholder="Conteúdo" />
        <input type="text" {...register("category")} placeholder="Categoria" />
        <button type="submit">Cadastrar nota</button>
    </form>
  )
}

export default TodosCreateForm