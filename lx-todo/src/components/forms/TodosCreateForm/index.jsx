import { useContext } from "react";
import { useForm } from "react-hook-form"
import { CategoriesContext } from "../../../providers/CategoriesContext";
import { TodosContext } from "../../../providers/TodosContext";

const TodosCreateForm = () => {
  const { register, handleSubmit } = useForm();
  const { todosCreate } = useContext(TodosContext);
  const { categories } = useContext(CategoriesContext);

  const submit = (formData) => {
    todosCreate(formData);
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
        <h2>Cadastre uma nota:</h2>
        <input type="text" {...register("title")} placeholder="Título"/>
        <input type="text" {...register("content")} placeholder="Conteúdo" />
        <select {...register("category")}>
          <option value="">Selecione uma categoria</option>
          {categories.map(category => (
            <option key={category._id} value={category.slug}>{category.label}</option>
          ))}
        </select>       
        <button type="submit">Cadastrar nota</button>
    </form>
  )
}

export default TodosCreateForm