import React, { useContext } from 'react'
import CategoryCreateForm from '../../components/forms/CategoryCreateForm';
import { CategoriesContext } from '../../providers/CategoriesContext';
import { Link } from "react-router-dom";

const CategoriesPage = () => {
  const { categories, categoriesRemove } = useContext(CategoriesContext);  
  return (
    <div>
        <Link to="/profile">Voltar ao perfil</Link>
        <CategoryCreateForm />
        <ul>
            {categories.map(category => (
                <li key={category._id}>
                    <h3>{category.label}</h3>
                    <button onClick={() => categoriesRemove(category._id)}>Remover categoria</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default CategoriesPage