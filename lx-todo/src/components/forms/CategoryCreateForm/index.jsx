import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { CategoriesContext } from "../../../providers/CategoriesContext"

const CategoryCreateForm = () => {
  const { categoriesCreate } = useContext(CategoriesContext);
  const { register, handleSubmit } = useForm();  

  const submit = (formData) => {
    categoriesCreate(formData);
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
        <h2>Cria uma categoria</h2>
         <input type="text" {...register("label")} placeholder="Crie um nome" />
         <input type="text" {...register("slug")} placeholder="Defina um identificador" />
         <button type="submit">Cadastrar uma categoria</button>
    </form>    
  )
}

export default CategoryCreateForm