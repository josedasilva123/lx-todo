import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TodosContext } from "../../../providers/TodosContext";

const TodosUpdateForm = () => {
   const { editingNote, setEditingNote } = useContext(TodosContext);

   const { register, handleSubmit } = useForm({
      defaultValues: {
         title: editingNote.title,
         content: editingNote.content,
         category: editingNote.category,
      },
   });
   const { todosUpdate } = useContext(TodosContext);

   const submit = (formData) => {
      todosUpdate(formData, editingNote._id);
   };
   return (
      <div role="dialog">
         <button onClick={() => setEditingNote(null)}>Cancelar edição</button>
         <form onSubmit={handleSubmit(submit)}>
            <h2>Atualize uma nota:</h2>
            <input type="text" {...register("title")} placeholder="Título" />
            <input type="text" {...register("content")} placeholder="Conteúdo" />
            <input type="text" {...register("category")} placeholder="Categoria" />
            <button type="submit">Atualizar nota</button>
         </form>
      </div>
   );
};

export default TodosUpdateForm;
