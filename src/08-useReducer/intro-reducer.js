const initialState=[{
    id:1,
    todo:'Recolectar la gema del poder',
    done:false,
}];

const todoReducer = (state = initialState, action={}) =>{

    if(action.type === '[TODO] Add todo'){
        return[...state,action.payload]
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id:2,
    todo:'Recolectar la gema del Alma',
    done:false,
}

const addTodosAction = {
    type:'[TODO] Add todo',
    payload: newTodo,
}

todos = todoReducer(todos, addTodosAction);

console.log(todos);