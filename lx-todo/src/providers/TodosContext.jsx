import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const TodosContext = createContext({});

export const TodosProvider = ({children}) => {
    const [todos, setTodos] = useState([]);
    const [editingNote, setEditingNote] = useState(null);
    /* carrega as minhas notas */
    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");
        if(token){
            const todosLoad = async () => {
                try {                    
                    const response = await api.get('/todos', {
                        headers: {
                            auth: token,
                        }
                    })

                    setTodos(response.data.todos);
                } catch (error) {
                    console.log(error);
                }
            }
            todosLoad();
        }       
    }, []);

    /* formData - title, content, category */
    const todosCreate = async (formData) => {
        try {
            const token = localStorage.getItem("@TOKEN");
            // Atualizando o seu back-end (por meio de relacionamento de POST)
            const response = await api.post('/todos', formData, {
                headers: {
                    auth: token
                }
            })

            //Futuro toast
            console.log(response.data.message);

            // Atualização de front-end
            setTodos([...todos, response.data.todo]);
        } catch (error) {
            console.log(error);
        }
    }

    /* noteId - _id da nota */
    const todosRemove = async (noteId) => {
        try {
            const token = localStorage.getItem("@TOKEN");    
            //Atualização de back-end
            const response = await api.delete(`/todos/${noteId}`, {
                headers: {
                    auth: token,
                }
            })

            //Futuro toast
            console.log(response.data.message);

            //Atualizar o front-end
            const newTodos = todos.filter(todo => todo._id !== noteId);
            setTodos(newTodos);
        } catch (error) {
            console.log(error);
        }
    }

    /* formData - title, content, category */
    const todosUpdate = async (formData, noteId) => {
        try {
            const token = localStorage.getItem("@TOKEN");    
            //Atualização de back-end
            const response = await api.patch(`/todos/${noteId}`, formData, {
                headers: {
                    auth: token,
                }
            });  
            
             //Futuro toast
             console.log(response.data.message);

            //Atualização de front-end
            
            const newTodos = todos.map(todo => {
                if(noteId === todo._id){
                    return { ...todo, ...formData};
                } else {
                    return todo
                }
            })

            setTodos(newTodos);
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <TodosContext.Provider value={{ todos, todosCreate, todosRemove, todosUpdate, editingNote, setEditingNote }}>
            {children}
        </TodosContext.Provider>
    )
}