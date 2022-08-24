import { useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoRreducer";
import { useEffect } from "react"

const initialState = []

const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () =>{

    const [todos, dispatch] = useReducer(todoReducer,initialState,init);

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos));
  
      }, [todos]);

    const handleDeleteTodo = (id) =>{
        const action = {
            type:'[TODO] Remove Todo',
            payload:id
        }
        dispatch(action);
    }

    const handleNewTodo = (todo) =>{
        const action = {
            type:'[TODO] Add Todo',
            payload:todo
        }
        dispatch(action);
    }

    const handleToggleTodo = (id) =>{
        const action = {
            type:'[TODO] Toggle Todo',
            payload:id
        }
        dispatch(action);
    }

    
   
    return{
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todosCount:todos.length,
        pendingTodosCount:todos.filter(todo=>!todo.done).length,
    }
}