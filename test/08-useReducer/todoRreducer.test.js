import { todoReducer } from "../../src/08-useReducer/todoRreducer";

describe('Pruebas en el todoRreducer', () => {

    const initialState = [{
        id:1,
        description:'Demo Todo',
        done:false
    }];

    test('Debe regresar el estado inicial', () => {

        const newState = todoReducer(initialState,{});
        expect(newState).toBe(initialState);
    });

    test('Debe de agregar un TODO', () => {

        const action = {
            type:'[TODO] Add Todo',
            payload:{
                id:2,
                description: 'Todo 2',
                done: false
            }
        }

        const newState = todoReducer(initialState,action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);

    });

    test('Debe de eliminar un TODO', () => {

        const action = {
            type:'[TODO] Remove Todo',
            payload:1
        }

        const newState = todoReducer(initialState,action);
        expect(newState.length).toBe(0);

    });

    test('Debe de realizar el Toggle del TODO', () => {

        const action = {
            type:'[TODO] Toggle Todo',
            payload:1
        }

        const newState = todoReducer(initialState,action);
        expect(newState.done).toBeTruthy;
    });
});