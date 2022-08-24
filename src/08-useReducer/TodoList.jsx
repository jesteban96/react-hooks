export const TodoList = ({todos,handleDeleteTodo,onToggleTodo}) => {
    return (
        <>
            <ul className="list-group">
                {
                    todos.map(todo =>(
                        <li key={todo.id} className="list-group-item d-flex justify-content-between">
                            <span 
                                className={`align-self-center ${(todo.done) ? 'text-decoration-line-through': ''}`}
                                onDoubleClick={() => onToggleTodo(todo.id)}
                            >
                                {todo.description}
                            </span>
                            <button className="btn btn-danger" onClick={() => handleDeleteTodo(todo.id)}>Borrar</button>
                        </li>
                    ))
                }
            </ul>  
        </>
    )
}
