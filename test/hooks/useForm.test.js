import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm";

describe('Pruebas en el useForm', () => {

    const initialForm = {
        name : 'Esteban',
        email : 'juan@esteban.com'
    }

    test('Debe de retornar los valores por defecto', () => {

        const { result } = renderHook( () => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            onInputChange: expect.any(Function),
            formState: initialForm,
            onResetForm: expect.any(Function),
          });
    });

    test('Debe de cambiar el nombre del formulario', () => {

        const newName = 'Juan';

        const { result } = renderHook( () => useForm(initialForm));
        const {onInputChange} = result.current;

        act(()=>{
            onInputChange({target : {name:'name',value:newName}});
        });

        expect(result.current.name).toEqual(newName);
        expect(result.current.formState.name).toEqual(newName);
        

    });

    test('Debe de resetear el formulario', () => {

        const newName = 'Juan';

        const { result } = renderHook( () => useForm(initialForm));
        const {onInputChange,onResetForm} = result.current;

        act(()=>{
            onInputChange({target : {name:'name',value:newName}});
            onResetForm();
        });

        expect(result.current.name).toEqual(initialForm.name);
        expect(result.current.formState).toEqual(initialForm);
        

    });
});