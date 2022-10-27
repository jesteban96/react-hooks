import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem/>', () => {
    
    const todo = {
        id:1,
        description:'Recolectar la gema del poder',
        done:false
    };
    
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();
    
    beforeEach(() => jest.clearAllMocks());


    test('Debe de mostrar el TODO Pendiente', () => {

        render( 
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}  
            />
        );

        const liElement = screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('aling-self-center ');
    });
    
    test('Debe de mostrar el TODO Completado', () => {

        todo.done=true;

        render( 
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}  
            />
        );

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toBe('aling-self-center text-decoration-line-through');
    });

    test('El span debe llamar al ToggleTODO cuando se hace click', () => {

        render( 
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}  
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test('El botton debe llamar al DeleteTODO cuando se hace click', () => {

        render( 
            <TodoItem 
                todo={todo} 
                onDeleteTodo={onDeleteTodoMock} 
                onToggleTodo={onToggleTodoMock}  
            />
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });

});